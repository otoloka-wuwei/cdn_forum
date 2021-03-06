"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("next/dist/compiled/chalk"));
const find_up_1 = __importDefault(require("next/dist/compiled/find-up"));
const os_1 = __importDefault(require("os"));
const path_1 = require("path");
const constants_1 = require("../lib/constants");
const utils_1 = require("../lib/utils");
const targets = ['server', 'serverless', 'experimental-serverless-trace'];
const reactModes = ['legacy', 'blocking', 'concurrent'];
const defaultConfig = {
    env: [],
    webpack: null,
    webpackDevMiddleware: null,
    distDir: '.next',
    assetPrefix: '',
    configOrigin: 'default',
    useFileSystemPublicRoutes: true,
    generateBuildId: () => null,
    generateEtags: true,
    pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
    target: 'server',
    poweredByHeader: true,
    compress: true,
    devIndicators: {
        buildActivity: true,
        autoPrerender: true,
    },
    onDemandEntries: {
        maxInactiveAge: 60 * 1000,
        pagesBufferLength: 2,
    },
    amp: {
        canonicalBase: '',
    },
    exportTrailingSlash: false,
    experimental: {
        cpus: Math.max(1, (Number(process.env.CIRCLE_NODE_TOTAL) ||
            (os_1.default.cpus() || { length: 1 }).length) - 1),
        documentMiddleware: false,
        granularChunks: true,
        modern: false,
        plugins: false,
        profiling: false,
        sprFlushToDisk: true,
        reactMode: 'legacy',
        workerThreads: false,
        basePath: '',
        sassOptions: {},
        pageEnv: false,
        measureFid: false,
        reactRefresh: false,
    },
    future: {
        excludeDefaultMomentLocales: false,
    },
    serverRuntimeConfig: {},
    publicRuntimeConfig: {},
    reactStrictMode: false,
};
const experimentalWarning = utils_1.execOnce(() => {
    console.warn(chalk_1.default.yellow.bold('Warning: ') +
        chalk_1.default.bold('You have enabled experimental feature(s).'));
    console.warn(`Experimental features are not covered by semver, and may cause unexpected or broken application behavior. ` +
        `Use them at your own risk.`);
    console.warn();
});
function assignDefaults(userConfig) {
    Object.keys(userConfig).forEach((key) => {
        if (key === 'experimental' &&
            userConfig[key] &&
            userConfig[key] !== defaultConfig[key]) {
            experimentalWarning();
        }
        if (key === 'distDir') {
            if (typeof userConfig[key] !== 'string') {
                userConfig[key] = defaultConfig.distDir;
            }
            const userDistDir = userConfig[key].trim();
            // don't allow public as the distDir as this is a reserved folder for
            // public files
            if (userDistDir === 'public') {
                throw new Error(`The 'public' directory is reserved in Next.js and can not be set as the 'distDir'. https://err.sh/zeit/next.js/can-not-output-to-public`);
            }
            // make sure distDir isn't an empty string as it can result in the provided
            // directory being deleted in development mode
            if (userDistDir.length === 0) {
                throw new Error(`Invalid distDir provided, distDir can not be an empty string. Please remove this config or set it to undefined`);
            }
        }
        if (key === 'pageExtensions') {
            const pageExtensions = userConfig[key];
            if (pageExtensions === undefined) {
                delete userConfig[key];
                return;
            }
            if (!Array.isArray(pageExtensions)) {
                throw new Error(`Specified pageExtensions is not an array of strings, found "${pageExtensions}". Please update this config or remove it.`);
            }
            if (!pageExtensions.length) {
                throw new Error(`Specified pageExtensions is an empty array. Please update it with the relevant extensions or remove it.`);
            }
            pageExtensions.forEach(ext => {
                if (typeof ext !== 'string') {
                    throw new Error(`Specified pageExtensions is not an array of strings, found "${ext}" of type "${typeof ext}". Please update this config or remove it.`);
                }
            });
        }
        const maybeObject = userConfig[key];
        if (!!maybeObject && maybeObject.constructor === Object) {
            userConfig[key] = Object.assign(Object.assign({}, (defaultConfig[key] || {})), userConfig[key]);
        }
    });
    const result = Object.assign(Object.assign({}, defaultConfig), userConfig);
    if (typeof result.assetPrefix !== 'string') {
        throw new Error(`Specified assetPrefix is not a string, found type "${typeof result.assetPrefix}" https://err.sh/zeit/next.js/invalid-assetprefix`);
    }
    if (result.experimental) {
        if (typeof result.experimental.basePath !== 'string') {
            throw new Error(`Specified basePath is not a string, found type "${typeof result
                .experimental.basePath}"`);
        }
        if (result.experimental.basePath !== '') {
            if (result.experimental.basePath === '/') {
                throw new Error(`Specified basePath /. basePath has to be either an empty string or a path prefix"`);
            }
            if (!result.experimental.basePath.startsWith('/')) {
                throw new Error(`Specified basePath has to start with a /, found "${result.experimental.basePath}"`);
            }
            if (result.experimental.basePath !== '/') {
                if (result.experimental.basePath.endsWith('/')) {
                    throw new Error(`Specified basePath should not end with /, found "${result.experimental.basePath}"`);
                }
                if (result.assetPrefix === '') {
                    result.assetPrefix = result.experimental.basePath;
                }
            }
        }
    }
    return result;
}
function normalizeConfig(phase, config) {
    if (typeof config === 'function') {
        config = config(phase, { defaultConfig });
        if (typeof config.then === 'function') {
            throw new Error('> Promise returned in next config. https://err.sh/zeit/next.js/promise-in-next-config');
        }
    }
    return config;
}
exports.normalizeConfig = normalizeConfig;
function loadConfig(phase, dir, customConfig) {
    var _a, _b, _c, _d;
    if (customConfig) {
        return assignDefaults(Object.assign({ configOrigin: 'server' }, customConfig));
    }
    const path = find_up_1.default.sync(constants_1.CONFIG_FILE, {
        cwd: dir,
    });
    // If config file was found
    if ((_a = path) === null || _a === void 0 ? void 0 : _a.length) {
        const userConfigModule = require(path);
        const userConfig = normalizeConfig(phase, userConfigModule.default || userConfigModule);
        if (Object.keys(userConfig).length === 0) {
            console.warn(chalk_1.default.yellow.bold('Warning: ') +
                'Detected next.config.js, no exported configuration found. https://err.sh/zeit/next.js/empty-configuration');
        }
        if (userConfig.target && !targets.includes(userConfig.target)) {
            throw new Error(`Specified target is invalid. Provided: "${userConfig.target}" should be one of ${targets.join(', ')}`);
        }
        if ((_b = userConfig.amp) === null || _b === void 0 ? void 0 : _b.canonicalBase) {
            const { canonicalBase } = userConfig.amp || {};
            userConfig.amp = userConfig.amp || {};
            userConfig.amp.canonicalBase =
                (canonicalBase.endsWith('/')
                    ? canonicalBase.slice(0, -1)
                    : canonicalBase) || '';
        }
        if (((_c = userConfig.experimental) === null || _c === void 0 ? void 0 : _c.reactMode) &&
            !reactModes.includes(userConfig.experimental.reactMode)) {
            throw new Error(`Specified React Mode is invalid. Provided: ${userConfig.experimental.reactMode} should be one of ${reactModes.join(', ')}`);
        }
        return assignDefaults(Object.assign({ configOrigin: constants_1.CONFIG_FILE }, userConfig));
    }
    else {
        const configBaseName = path_1.basename(constants_1.CONFIG_FILE, path_1.extname(constants_1.CONFIG_FILE));
        const nonJsPath = find_up_1.default.sync([
            `${configBaseName}.jsx`,
            `${configBaseName}.ts`,
            `${configBaseName}.tsx`,
            `${configBaseName}.json`,
        ], { cwd: dir });
        if ((_d = nonJsPath) === null || _d === void 0 ? void 0 : _d.length) {
            throw new Error(`Configuring Next.js via '${path_1.basename(nonJsPath)}' is not supported. Please replace the file with 'next.config.js'.`);
        }
    }
    return defaultConfig;
}
exports.default = loadConfig;
function isTargetLikeServerless(target) {
    const isServerless = target === 'serverless';
    const isServerlessTrace = target === 'experimental-serverless-trace';
    return isServerless || isServerlessTrace;
}
exports.isTargetLikeServerless = isTargetLikeServerless;
