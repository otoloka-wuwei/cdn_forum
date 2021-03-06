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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const server_1 = require("react-dom/server");
const constants_1 = require("../../lib/constants");
const is_serializable_props_1 = require("../../lib/is-serializable-props");
const amp_1 = require("../lib/amp");
const amp_context_1 = require("../lib/amp-context");
const constants_2 = require("../lib/constants");
const head_1 = __importStar(require("../lib/head"));
const loadable_1 = __importDefault(require("../lib/loadable"));
const loadable_context_1 = require("../lib/loadable-context");
const mitt_1 = __importDefault(require("../lib/mitt"));
const router_context_1 = require("../lib/router-context");
const is_dynamic_1 = require("../lib/router/utils/is-dynamic");
const utils_1 = require("../lib/utils");
const api_utils_1 = require("./api-utils");
const get_page_files_1 = require("./get-page-files");
const optimize_amp_1 = __importDefault(require("./optimize-amp"));
function noRouter() {
    const message = 'No router instance found. you should only use "next/router" inside the client side of your app. https://err.sh/zeit/next.js/no-router-instance';
    throw new Error(message);
}
class ServerRouter {
    constructor(pathname, query, as, { isFallback }, basePath) {
        this.route = pathname.replace(/\/$/, '') || '/';
        this.pathname = pathname;
        this.query = query;
        this.asPath = as;
        this.isFallback = isFallback;
        this.basePath = basePath;
    }
    push() {
        noRouter();
    }
    replace() {
        noRouter();
    }
    reload() {
        noRouter();
    }
    back() {
        noRouter();
    }
    prefetch() {
        noRouter();
    }
    beforePopState() {
        noRouter();
    }
}
// TODO: Remove in the next major version, as this would mean the user is adding event listeners in server-side `render` method
ServerRouter.events = mitt_1.default();
function enhanceComponents(options, App, Component) {
    // For backwards compatibility
    if (typeof options === 'function') {
        return {
            App,
            Component: options(Component),
        };
    }
    return {
        App: options.enhanceApp ? options.enhanceApp(App) : App,
        Component: options.enhanceComponent
            ? options.enhanceComponent(Component)
            : Component,
    };
}
function render(renderElementToString, element, ampMode) {
    let html;
    let head;
    try {
        html = renderElementToString(element);
    }
    finally {
        head = head_1.default.rewind() || head_1.defaultHead(amp_1.isInAmpMode(ampMode));
    }
    return { html, head };
}
function renderDocument(Document, { props, docProps, pathname, query, buildId, canonicalBase, assetPrefix, runtimeConfig, nextExport, autoExport, isFallback, dynamicImportsIds, dangerousAsPath, err, dev, ampPath, ampState, inAmpMode, hybridAmp, staticMarkup, devFiles, files, lowPriorityFiles, polyfillFiles, dynamicImports, htmlProps, bodyTags, headTags, gsp, gssp, customServer, gip, appGip, unstable_runtimeJS, }) {
    return ('<!DOCTYPE html>' +
        server_1.renderToStaticMarkup(react_1.default.createElement(amp_context_1.AmpStateContext.Provider, { value: ampState }, Document.renderDocument(Document, Object.assign({ __NEXT_DATA__: {
                props,
                page: pathname,
                query,
                buildId,
                assetPrefix: assetPrefix === '' ? undefined : assetPrefix,
                runtimeConfig,
                nextExport,
                autoExport,
                isFallback,
                dynamicIds: dynamicImportsIds.length === 0 ? undefined : dynamicImportsIds,
                err: err ? serializeError(dev, err) : undefined,
                gsp,
                gssp,
                customServer,
                gip,
                appGip,
            }, dangerousAsPath,
            canonicalBase,
            ampPath,
            inAmpMode, isDevelopment: !!dev, hybridAmp,
            staticMarkup,
            devFiles,
            files,
            lowPriorityFiles,
            polyfillFiles,
            dynamicImports,
            assetPrefix,
            htmlProps,
            bodyTags,
            headTags,
            unstable_runtimeJS }, docProps)))));
}
const invalidKeysMsg = (methodName, invalidKeys) => {
    return (`Additional keys were returned from \`${methodName}\`. Properties intended for your component must be nested under the \`props\` key, e.g.:` +
        `\n\n\treturn { props: { title: 'My Title', content: '...' } }` +
        `\n\nKeys that need to be moved: ${invalidKeys.join(', ')}.` +
        `\nRead more: https://err.sh/next.js/invalid-getstaticprops-value`);
};
function renderToHTML(req, res, pathname, query, renderOpts) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        pathname = pathname === '/index' ? '/' : pathname;
        const { err, dev = false, documentMiddlewareEnabled = false, staticMarkup = false, ampPath = '', App, Document, pageConfig = {}, DocumentMiddleware, Component, buildManifest, reactLoadableManifest, ErrorDebug, getStaticProps, getStaticPaths, getServerSideProps, isDataReq, params, previewProps, basePath, } = renderOpts;
        const callMiddleware = (method, args, props = false) => __awaiter(this, void 0, void 0, function* () {
            let results = props ? {} : [];
            if (Document[`${method}Middleware`]) {
                let middlewareFunc = yield Document[`${method}Middleware`];
                middlewareFunc = middlewareFunc.default || middlewareFunc;
                const curResults = yield middlewareFunc(...args);
                if (props) {
                    for (const result of curResults) {
                        results = Object.assign(Object.assign({}, results), result);
                    }
                }
                else {
                    results = curResults;
                }
            }
            return results;
        });
        const headTags = (...args) => callMiddleware('headTags', args);
        const bodyTags = (...args) => callMiddleware('bodyTags', args);
        const htmlProps = (...args) => callMiddleware('htmlProps', args, true);
        const didRewrite = req._nextDidRewrite;
        const isFallback = !!query.__nextFallback;
        delete query.__nextFallback;
        const isSSG = !!getStaticProps;
        const isBuildTimeSSG = isSSG && renderOpts.nextExport;
        const defaultAppGetInitialProps = App.getInitialProps === App.origGetInitialProps;
        const hasPageGetInitialProps = !!Component.getInitialProps;
        const pageIsDynamic = is_dynamic_1.isDynamicRoute(pathname);
        const isAutoExport = !hasPageGetInitialProps &&
            defaultAppGetInitialProps &&
            !isSSG &&
            !getServerSideProps;
        for (const methodName of [
            'getStaticProps',
            'getServerSideProps',
            'getStaticPaths',
        ]) {
            if (Component[methodName]) {
                throw new Error(`page ${pathname} ${methodName} ${constants_1.GSSP_COMPONENT_MEMBER_ERROR}`);
            }
        }
        if (process.env.NODE_ENV !== 'production' &&
            (isAutoExport || isFallback) &&
            pageIsDynamic &&
            didRewrite) {
            // TODO: add err.sh when rewrites go stable
            // Behavior might change before then (prefer SSR in this case).
            // If we decide to ship rewrites to the client we could solve this
            // by running over the rewrites and getting the params.
            throw new Error(`Rewrites don't support${isFallback ? ' ' : ' auto-exported '}dynamic pages${isFallback ? ' with getStaticProps ' : ' '}yet. ` +
                `Using this will cause the page to fail to parse the params on the client${isFallback ? ' for the fallback page ' : ''}`);
        }
        if (hasPageGetInitialProps && isSSG) {
            throw new Error(constants_1.SSG_GET_INITIAL_PROPS_CONFLICT + ` ${pathname}`);
        }
        if (hasPageGetInitialProps && getServerSideProps) {
            throw new Error(constants_1.SERVER_PROPS_GET_INIT_PROPS_CONFLICT + ` ${pathname}`);
        }
        if (getServerSideProps && isSSG) {
            throw new Error(constants_1.SERVER_PROPS_SSG_CONFLICT + ` ${pathname}`);
        }
        if (!!getStaticPaths && !isSSG) {
            throw new Error(`getStaticPaths was added without a getStaticProps in ${pathname}. Without getStaticProps, getStaticPaths does nothing`);
        }
        if (isSSG && pageIsDynamic && !getStaticPaths) {
            throw new Error(`getStaticPaths is required for dynamic SSG pages and is missing for '${pathname}'.` +
                `\nRead more: https://err.sh/next.js/invalid-getstaticpaths-value`);
        }
        if (dev) {
            const { isValidElementType } = require('react-is');
            if (!isValidElementType(Component)) {
                throw new Error(`The default export is not a React Component in page: "${pathname}"`);
            }
            if (!isValidElementType(App)) {
                throw new Error(`The default export is not a React Component in page: "/_app"`);
            }
            if (!isValidElementType(Document)) {
                throw new Error(`The default export is not a React Component in page: "/_document"`);
            }
            if (isAutoExport) {
                // remove query values except ones that will be set during export
                query = {
                    amp: query.amp,
                };
                req.url = pathname;
                renderOpts.nextExport = true;
            }
            if (pathname === '/404' && (hasPageGetInitialProps || getServerSideProps)) {
                throw new Error(constants_1.PAGES_404_GET_INITIAL_PROPS_ERROR);
            }
        }
        if (isAutoExport)
            renderOpts.autoExport = true;
        if (isSSG)
            renderOpts.nextExport = false;
        yield loadable_1.default.preloadAll(); // Make sure all dynamic imports are loaded
        // url will always be set
        const asPath = req.url;
        const router = new ServerRouter(pathname, query, asPath, {
            isFallback: isFallback,
        }, basePath);
        const ctx = {
            err,
            req: isAutoExport ? undefined : req,
            res: isAutoExport ? undefined : res,
            pathname,
            query,
            asPath,
            AppTree: (props) => {
                return (react_1.default.createElement(AppContainer, null,
                    react_1.default.createElement(App, Object.assign({}, props, { Component: Component, router: router }))));
            },
        };
        let props;
        if (documentMiddlewareEnabled && typeof DocumentMiddleware === 'function') {
            yield DocumentMiddleware(ctx);
        }
        const ampState = {
            ampFirst: pageConfig.amp === true,
            hasQuery: Boolean(query.amp),
            hybrid: pageConfig.amp === 'hybrid',
        };
        const reactLoadableModules = [];
        const AppContainer = ({ children }) => (react_1.default.createElement(router_context_1.RouterContext.Provider, { value: router },
            react_1.default.createElement(amp_context_1.AmpStateContext.Provider, { value: ampState },
                react_1.default.createElement(loadable_context_1.LoadableContext.Provider, { value: moduleName => reactLoadableModules.push(moduleName) }, children))));
        try {
            props = yield utils_1.loadGetInitialProps(App, {
                AppTree: ctx.AppTree,
                Component,
                router,
                ctx,
            });
            if (isSSG) {
                props[constants_2.STATIC_PROPS_ID] = true;
            }
            let previewData;
            if ((isSSG || getServerSideProps) && !isFallback) {
                // Reads of this are cached on the `req` object, so this should resolve
                // instantly. There's no need to pass this data down from a previous
                // invoke, where we'd have to consider server & serverless.
                previewData = api_utils_1.tryGetPreviewData(req, res, previewProps);
            }
            if (isSSG && !isFallback) {
                let data;
                try {
                    data = yield getStaticProps(Object.assign(Object.assign({}, (pageIsDynamic ? { params: query } : undefined)), (previewData !== false
                        ? { preview: true, previewData: previewData }
                        : undefined)));
                }
                catch (err) {
                    // remove not found error code to prevent triggering legacy
                    // 404 rendering
                    if (err.code === 'ENOENT') {
                        delete err.code;
                    }
                    throw err;
                }
                const invalidKeys = Object.keys(data).filter(key => key !== 'unstable_revalidate' && key !== 'props');
                if (invalidKeys.includes('revalidate')) {
                    throw new Error(constants_1.UNSTABLE_REVALIDATE_RENAME_ERROR);
                }
                if (invalidKeys.length) {
                    throw new Error(invalidKeysMsg('getStaticProps', invalidKeys));
                }
                if ((dev || isBuildTimeSSG) &&
                    !is_serializable_props_1.isSerializableProps(pathname, 'getStaticProps', data.props)) {
                    // this fn should throw an error instead of ever returning `false`
                    throw new Error('invariant: getStaticProps did not return valid props. Please report this.');
                }
                if (typeof data.unstable_revalidate === 'number') {
                    if (!Number.isInteger(data.unstable_revalidate)) {
                        throw new Error(`A page's revalidate option must be seconds expressed as a natural number. Mixed numbers, such as '${data.unstable_revalidate}', cannot be used.` +
                            `\nTry changing the value to '${Math.ceil(data.unstable_revalidate)}' or using \`Math.ceil()\` if you're computing the value.`);
                    }
                    else if (data.unstable_revalidate <= 0) {
                        throw new Error(`A page's revalidate option can not be less than or equal to zero. A revalidate option of zero means to revalidate after _every_ request, and implies stale data cannot be tolerated.` +
                            `\n\nTo never revalidate, you can set revalidate to \`false\` (only ran once at build-time).` +
                            `\nTo revalidate as soon as possible, you can set the value to \`1\`.`);
                    }
                    else if (data.unstable_revalidate > 31536000) {
                        // if it's greater than a year for some reason error
                        console.warn(`Warning: A page's revalidate option was set to more than a year. This may have been done in error.` +
                            `\nTo only run getStaticProps at build-time and not revalidate at runtime, you can set \`revalidate\` to \`false\`!`);
                    }
                }
                else if (data.unstable_revalidate === true) {
                    // When enabled, revalidate after 1 second. This value is optimal for
                    // the most up-to-date page possible, but without a 1-to-1
                    // request-refresh ratio.
                    data.unstable_revalidate = 1;
                }
                else {
                    // By default, we never revalidate.
                    data.unstable_revalidate = false;
                }
                props.pageProps = Object.assign({}, props.pageProps, data.props);
                renderOpts.revalidate = data.unstable_revalidate;
                renderOpts.pageData = props;
            }
            if (getServerSideProps) {
                props[constants_2.SERVER_PROPS_ID] = true;
            }
            if (getServerSideProps && !isFallback) {
                let data;
                try {
                    data = yield getServerSideProps(Object.assign(Object.assign({ req,
                        res,
                        query }, (pageIsDynamic ? { params: params } : undefined)), (previewData !== false
                        ? { preview: true, previewData: previewData }
                        : undefined)));
                }
                catch (err) {
                    // remove not found error code to prevent triggering legacy
                    // 404 rendering
                    if (err.code === 'ENOENT') {
                        delete err.code;
                    }
                    throw err;
                }
                const invalidKeys = Object.keys(data).filter(key => key !== 'props');
                if (invalidKeys.length) {
                    throw new Error(invalidKeysMsg('getServerSideProps', invalidKeys));
                }
                if ((dev || isBuildTimeSSG) &&
                    !is_serializable_props_1.isSerializableProps(pathname, 'getServerSideProps', data.props)) {
                    // this fn should throw an error instead of ever returning `false`
                    throw new Error('invariant: getServerSideProps did not return valid props. Please report this.');
                }
                props.pageProps = Object.assign({}, props.pageProps, data.props);
                renderOpts.pageData = props;
            }
        }
        catch (err) {
            if (isDataReq || !dev || !err)
                throw err;
            ctx.err = err;
            renderOpts.err = err;
            console.error(err);
        }
        if (!isSSG && // we only show this warning for legacy pages
            !getServerSideProps &&
            process.env.NODE_ENV !== 'production' &&
            Object.keys(((_a = props) === null || _a === void 0 ? void 0 : _a.pageProps) || {}).includes('url')) {
            console.warn(`The prop \`url\` is a reserved prop in Next.js for legacy reasons and will be overridden on page ${pathname}\n` +
                `See more info here: https://err.sh/zeit/next.js/reserved-page-prop`);
        }
        // We only need to do this if we want to support calling
        // _app's getInitialProps for getServerSideProps if not this can be removed
        if (isDataReq)
            return props;
        // We don't call getStaticProps or getServerSideProps while generating
        // the fallback so make sure to set pageProps to an empty object
        if (isFallback) {
            props.pageProps = {};
        }
        // the response might be finished on the getInitialProps call
        if (utils_1.isResSent(res) && !isSSG)
            return null;
        const devFiles = buildManifest.devFiles;
        const files = [
            ...new Set([
                ...get_page_files_1.getPageFiles(buildManifest, '/_app'),
                ...get_page_files_1.getPageFiles(buildManifest, pathname),
            ]),
        ];
        const lowPriorityFiles = buildManifest.lowPriorityFiles;
        const polyfillFiles = get_page_files_1.getPageFiles(buildManifest, '/_polyfills');
        const renderElementToString = staticMarkup
            ? server_1.renderToStaticMarkup
            : server_1.renderToString;
        const renderPageError = () => {
            if (ctx.err && ErrorDebug) {
                return render(renderElementToString, react_1.default.createElement(ErrorDebug, { error: ctx.err }), ampState);
            }
            if (dev && (props.router || props.Component)) {
                throw new Error(`'router' and 'Component' can not be returned in getInitialProps from _app.js https://err.sh/zeit/next.js/cant-override-next-props`);
            }
        };
        let renderPage = (options = {}) => {
            const renderError = renderPageError();
            if (renderError)
                return renderError;
            const { App: EnhancedApp, Component: EnhancedComponent, } = enhanceComponents(options, App, Component);
            return render(renderElementToString, react_1.default.createElement(AppContainer, null,
                react_1.default.createElement(EnhancedApp, Object.assign({ Component: EnhancedComponent, router: router }, props))), ampState);
        };
        const documentCtx = Object.assign(Object.assign({}, ctx), { renderPage });
        const docProps = yield utils_1.loadGetInitialProps(Document, documentCtx);
        // the response might be finished on the getInitialProps call
        if (utils_1.isResSent(res) && !isSSG)
            return null;
        if (!docProps || typeof docProps.html !== 'string') {
            const message = `"${utils_1.getDisplayName(Document)}.getInitialProps()" should resolve to an object with a "html" prop set with a valid html string`;
            throw new Error(message);
        }
        const dynamicImportIdsSet = new Set();
        const dynamicImports = [];
        for (const mod of reactLoadableModules) {
            const manifestItem = reactLoadableManifest[mod];
            if (manifestItem) {
                manifestItem.forEach(item => {
                    dynamicImports.push(item);
                    dynamicImportIdsSet.add(item.id);
                });
            }
        }
        const dynamicImportsIds = [...dynamicImportIdsSet];
        const inAmpMode = amp_1.isInAmpMode(ampState);
        const hybridAmp = ampState.hybrid;
        // update renderOpts so export knows current state
        renderOpts.inAmpMode = inAmpMode;
        renderOpts.hybridAmp = hybridAmp;
        let html = renderDocument(Document, Object.assign(Object.assign({}, renderOpts), { 
            // Only enabled in production as development mode has features relying on HMR (style injection for example)
            unstable_runtimeJS: process.env.NODE_ENV === 'production'
                ? pageConfig.unstable_runtimeJS
                : undefined, dangerousAsPath: router.asPath, ampState,
            props, headTags: yield headTags(documentCtx), bodyTags: yield bodyTags(documentCtx), htmlProps: yield htmlProps(documentCtx), isFallback,
            docProps,
            pathname,
            ampPath,
            query,
            inAmpMode,
            hybridAmp,
            dynamicImportsIds,
            dynamicImports,
            devFiles,
            files,
            lowPriorityFiles,
            polyfillFiles, gsp: !!getStaticProps ? true : undefined, gssp: !!getServerSideProps ? true : undefined, gip: hasPageGetInitialProps ? true : undefined, appGip: !defaultAppGetInitialProps ? true : undefined }));
        if (inAmpMode && html) {
            // inject HTML to AMP_RENDER_TARGET to allow rendering
            // directly to body in AMP mode
            const ampRenderIndex = html.indexOf(constants_2.AMP_RENDER_TARGET);
            html =
                html.substring(0, ampRenderIndex) +
                    `<!-- __NEXT_DATA__ -->${docProps.html}` +
                    html.substring(ampRenderIndex + constants_2.AMP_RENDER_TARGET.length);
            html = yield optimize_amp_1.default(html, renderOpts.ampOptimizerConfig);
            if (!renderOpts.ampSkipValidation && renderOpts.ampValidator) {
                yield renderOpts.ampValidator(html, pathname);
            }
        }
        if (inAmpMode || hybridAmp) {
            // fix &amp being escaped for amphtml rel link
            html = html.replace(/&amp;amp=1/g, '&amp=1');
        }
        return html;
    });
}
exports.renderToHTML = renderToHTML;
function errorToJSON(err) {
    const { name, message, stack } = err;
    return { name, message, stack };
}
function serializeError(dev, err) {
    if (dev) {
        return errorToJSON(err);
    }
    return {
        name: 'Internal Server Error.',
        message: '500 - Internal Server Error.',
        statusCode: 500,
    };
}
