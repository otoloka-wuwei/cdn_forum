"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const url_1 = require("url");
const path_to_regexp_1 = require("next/dist/compiled/path-to-regexp");
const path_match_1 = __importDefault(require("./lib/path-match"));
exports.route = path_match_1.default();
exports.prepareDestination = (destination, params, query, isRedirect) => {
    const parsedDestination = url_1.parse(destination, true);
    const destQuery = parsedDestination.query;
    let destinationCompiler = path_to_regexp_1.compile(`${parsedDestination.pathname}${parsedDestination.hash || ''}`, 
    // we don't validate while compiling the destination since we should
    // have already validated before we got to this point and validating
    // breaks compiling destinations with named pattern params from the source
    // e.g. /something:hello(.*) -> /another/:hello is broken with validation
    // since compile validation is meant for reversing and not for inserting
    // params from a separate path-regex into another
    { validate: false });
    let newUrl;
    // update any params in query values
    for (const [key, strOrArray] of Object.entries(destQuery)) {
        let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;
        if (value) {
            const queryCompiler = path_to_regexp_1.compile(value, { validate: false });
            value = queryCompiler(params);
        }
        destQuery[key] = value;
    }
    // add path params to query if it's not a redirect and not
    // already defined in destination query
    if (!isRedirect) {
        for (const [name, value] of Object.entries(params)) {
            if (!(name in destQuery)) {
                destQuery[name] = Array.isArray(value) ? value.join('/') : value;
            }
        }
    }
    try {
        newUrl = encodeURI(destinationCompiler(params));
        const [pathname, hash] = newUrl.split('#');
        parsedDestination.pathname = pathname;
        parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
        parsedDestination.path = `${pathname}${parsedDestination.search}`;
        delete parsedDestination.search;
    }
    catch (err) {
        if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
            throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/zeit/next.js/invalid-multi-match`);
        }
        throw err;
    }
    // Query merge order lowest priority to highest
    // 1. initial URL query values
    // 2. path segment values
    // 3. destination specified query values
    parsedDestination.query = Object.assign(Object.assign({}, query), parsedDestination.query);
    return {
        newUrl,
        parsedDestination,
    };
};
class Router {
    constructor({ headers = [], fsRoutes = [], rewrites = [], redirects = [], catchAllRoute, dynamicRoutes = [], pageChecker, useFileSystemPublicRoutes, }) {
        this.headers = headers;
        this.fsRoutes = fsRoutes;
        this.rewrites = rewrites;
        this.redirects = redirects;
        this.pageChecker = pageChecker;
        this.catchAllRoute = catchAllRoute;
        this.dynamicRoutes = dynamicRoutes;
        this.useFileSystemPublicRoutes = useFileSystemPublicRoutes;
    }
    setDynamicRoutes(routes = []) {
        this.dynamicRoutes = routes;
    }
    addFsRoute(route) {
        this.fsRoutes.unshift(route);
    }
    execute(req, res, parsedUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            // memoize page check calls so we don't duplicate checks for pages
            const pageChecks = {};
            const memoizedPageChecker = (p) => __awaiter(this, void 0, void 0, function* () {
                if (pageChecks[p]) {
                    return pageChecks[p];
                }
                const result = yield this.pageChecker(p);
                pageChecks[p] = result;
                return result;
            });
            let parsedUrlUpdated = parsedUrl;
            /*
              Desired routes order
              - headers
              - redirects
              - Check filesystem (including pages), if nothing found continue
              - User rewrites (checking filesystem and pages each match)
            */
            const routes = [
                ...this.headers,
                ...this.redirects,
                ...this.fsRoutes,
                // We only check the catch-all route if public page routes hasn't been
                // disabled
                ...(this.useFileSystemPublicRoutes
                    ? [
                        {
                            type: 'route',
                            name: 'Page checker',
                            match: exports.route('/:path*'),
                            fn: (req, res, params, parsedUrl) => __awaiter(this, void 0, void 0, function* () {
                                const { pathname } = parsedUrl;
                                if (!pathname) {
                                    return { finished: false };
                                }
                                if (yield this.pageChecker(pathname)) {
                                    return this.catchAllRoute.fn(req, res, params, parsedUrl);
                                }
                                return { finished: false };
                            }),
                        },
                    ]
                    : []),
                ...this.rewrites,
                // We only check the catch-all route if public page routes hasn't been
                // disabled
                ...(this.useFileSystemPublicRoutes ? [this.catchAllRoute] : []),
            ];
            for (const route of routes) {
                const newParams = route.match(parsedUrlUpdated.pathname);
                // Check if the match function matched
                if (newParams) {
                    const result = yield route.fn(req, res, newParams, parsedUrlUpdated);
                    // The response was handled
                    if (result.finished) {
                        return true;
                    }
                    if (result.pathname) {
                        parsedUrlUpdated.pathname = result.pathname;
                    }
                    if (result.query) {
                        parsedUrlUpdated.query = Object.assign(Object.assign({}, parsedUrlUpdated.query), result.query);
                    }
                    // check filesystem
                    if (route.check === true) {
                        for (const fsRoute of this.fsRoutes) {
                            const fsParams = fsRoute.match(parsedUrlUpdated.pathname);
                            if (fsParams) {
                                const result = yield fsRoute.fn(req, res, fsParams, parsedUrlUpdated);
                                if (result.finished) {
                                    return true;
                                }
                            }
                        }
                        let matchedPage = yield memoizedPageChecker(parsedUrlUpdated.pathname);
                        // If we didn't match a page check dynamic routes
                        if (!matchedPage) {
                            for (const dynamicRoute of this.dynamicRoutes) {
                                if (dynamicRoute.match(parsedUrlUpdated.pathname)) {
                                    matchedPage = true;
                                }
                            }
                        }
                        // Matched a page or dynamic route so render it using catchAllRoute
                        if (matchedPage) {
                            const pageParams = this.catchAllRoute.match(parsedUrlUpdated.pathname);
                            yield this.catchAllRoute.fn(req, res, pageParams, parsedUrlUpdated);
                            return true;
                        }
                    }
                }
            }
            return false;
        });
    }
}
exports.default = Router;
