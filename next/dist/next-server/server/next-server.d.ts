/// <reference types="node" />
import { IncomingMessage, ServerResponse } from 'http';
import { ParsedUrlQuery } from 'querystring';
import { UrlWithParsedQuery } from 'url';
import { PrerenderManifest } from '../../build';
import { Header, Redirect, Rewrite } from '../../lib/check-custom-routes';
import { __ApiPreviewProps } from './api-utils';
import Router, { DynamicRoutes, PageChecker, Params, Route } from './router';
declare type NextConfig = any;
export declare type ServerConstructor = {
    /**
     * Where the Next project is located - @default '.'
     */
    dir?: string;
    staticMarkup?: boolean;
    /**
     * Hide error messages containing server information - @default false
     */
    quiet?: boolean;
    /**
     * Object what you would use in next.config.js - @default {}
     */
    conf?: NextConfig;
    dev?: boolean;
    customServer?: boolean;
};
export default class Server {
    dir: string;
    quiet: boolean;
    nextConfig: NextConfig;
    distDir: string;
    pagesDir?: string;
    publicDir: string;
    hasStaticDir: boolean;
    serverBuildDir: string;
    pagesManifest?: {
        [name: string]: string;
    };
    buildId: string;
    renderOpts: {
        poweredByHeader: boolean;
        staticMarkup: boolean;
        buildId: string;
        generateEtags: boolean;
        runtimeConfig?: {
            [key: string]: any;
        };
        assetPrefix?: string;
        canonicalBase: string;
        documentMiddlewareEnabled: boolean;
        dev?: boolean;
        previewProps: __ApiPreviewProps;
        customServer?: boolean;
        ampOptimizerConfig?: {
            [key: string]: any;
        };
        basePath: string;
    };
    private compression?;
    private onErrorMiddleware?;
    router: Router;
    protected dynamicRoutes?: DynamicRoutes;
    protected customRoutes?: {
        rewrites: Rewrite[];
        redirects: Redirect[];
        headers: Header[];
    };
    protected staticPathsWorker?: import('jest-worker').default & {
        loadStaticPaths: typeof import('../../server/static-paths-worker').loadStaticPaths;
    };
    constructor({ dir, staticMarkup, quiet, conf, dev, customServer, }?: ServerConstructor);
    protected currentPhase(): string;
    private logError;
    private handleRequest;
    getRequestHandler(): (req: IncomingMessage, res: ServerResponse, parsedUrl?: UrlWithParsedQuery | undefined) => Promise<void>;
    setAssetPrefix(prefix?: string): void;
    prepare(): Promise<void>;
    protected close(): Promise<void>;
    protected setImmutableAssetCacheControl(res: ServerResponse): void;
    protected getCustomRoutes(): any;
    private _cachedPreviewManifest;
    protected getPrerenderManifest(): PrerenderManifest;
    protected getPreviewProps(): __ApiPreviewProps;
    protected generateRoutes(): {
        headers: Route[];
        rewrites: Route[];
        fsRoutes: Route[];
        redirects: Route[];
        catchAllRoute: Route;
        pageChecker: PageChecker;
        useFileSystemPublicRoutes: boolean;
        dynamicRoutes: DynamicRoutes | undefined;
    };
    private getPagePath;
    protected hasPage(pathname: string): Promise<boolean>;
    protected _beforeCatchAllRender(_req: IncomingMessage, _res: ServerResponse, _params: Params, _parsedUrl: UrlWithParsedQuery): Promise<boolean>;
    protected ensureApiPage(pathname: string): Promise<void>;
    /**
     * Resolves `API` request, in development builds on demand
     * @param req http request
     * @param res http response
     * @param pathname path of request
     */
    private handleApiRequest;
    protected generatePublicRoutes(): Route[];
    protected getDynamicRoutes(): {
        page: string;
        match: (pathname: string | null | undefined) => false | {
            [paramName: string]: string | string[];
        };
    }[];
    private handleCompression;
    protected run(req: IncomingMessage, res: ServerResponse, parsedUrl: UrlWithParsedQuery): Promise<void>;
    protected sendHTML(req: IncomingMessage, res: ServerResponse, html: string): Promise<void>;
    render(req: IncomingMessage, res: ServerResponse, pathname: string, query?: ParsedUrlQuery, parsedUrl?: UrlWithParsedQuery): Promise<void>;
    private findPageComponents;
    private getStaticPaths;
    private renderToHTMLWithComponents;
    renderToHTML(req: IncomingMessage, res: ServerResponse, pathname: string, query?: ParsedUrlQuery): Promise<string | null>;
    renderError(err: Error | null, req: IncomingMessage, res: ServerResponse, pathname: string, query?: ParsedUrlQuery): Promise<void>;
    private customErrorNo404Warn;
    renderErrorToHTML(err: Error | null, req: IncomingMessage, res: ServerResponse, _pathname: string, query?: ParsedUrlQuery): Promise<string | null>;
    render404(req: IncomingMessage, res: ServerResponse, parsedUrl?: UrlWithParsedQuery): Promise<void>;
    serveStatic(req: IncomingMessage, res: ServerResponse, path: string, parsedUrl?: UrlWithParsedQuery): Promise<void>;
    private _validFilesystemPathSet;
    private getFilesystemPaths;
    protected isServeableUrl(untrustedFileUrl: string): boolean;
    protected readBuildId(): string;
    private get _isLikeServerless();
}
export {};
