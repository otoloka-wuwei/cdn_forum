/// <reference types="node" />
/// <reference types="webpack-dev-middleware" />
/// <reference types="webpack-hot-middleware" />
import { NextHandleFunction } from 'connect';
import { IncomingMessage, ServerResponse } from 'http';
import WebpackDevMiddleware from 'next/dist/compiled/webpack-dev-middleware';
import WebpackHotMiddleware from 'next/dist/compiled/webpack-hot-middleware';
import { UrlObject } from 'url';
import webpack from 'webpack';
import { __ApiPreviewProps } from '../next-server/server/api-utils';
export declare function renderScriptError(res: ServerResponse, error: Error): Promise<void>;
export default class HotReloader {
    private dir;
    private buildId;
    private middlewares;
    private pagesDir;
    private webpackDevMiddleware;
    private webpackHotMiddleware;
    private initialized;
    private config;
    private stats;
    private serverPrevDocumentHash;
    private prevChunkNames?;
    private onDemandEntries;
    private previewProps;
    constructor(dir: string, { config, pagesDir, buildId, previewProps, }: {
        config: object;
        pagesDir: string;
        buildId: string;
        previewProps: __ApiPreviewProps;
    });
    run(req: IncomingMessage, res: ServerResponse, parsedUrl: UrlObject): Promise<{
        finished: any;
    } | undefined>;
    clean(): Promise<void>;
    getWebpackConfig(): Promise<[webpack.Configuration, webpack.Configuration]>;
    start(): Promise<void>;
    stop(webpackDevMiddleware?: WebpackDevMiddleware.WebpackDevMiddleware): Promise<unknown>;
    reload(): Promise<void>;
    assignBuildTools({ webpackDevMiddleware, webpackHotMiddleware, onDemandEntries, }: {
        webpackDevMiddleware: WebpackDevMiddleware.WebpackDevMiddleware;
        webpackHotMiddleware: NextHandleFunction & WebpackHotMiddleware.EventStream;
        onDemandEntries: any;
    }): void;
    prepareBuildTools(multiCompiler: webpack.MultiCompiler): Promise<{
        webpackDevMiddleware: WebpackDevMiddleware.WebpackDevMiddleware & NextHandleFunction;
        webpackHotMiddleware: NextHandleFunction & WebpackHotMiddleware.EventStream;
        onDemandEntries: {
            waitUntilReloaded(): Promise<unknown>;
            ensurePage(page: string): Promise<unknown>;
            middleware(): (req: IncomingMessage, res: ServerResponse, next: Function) => any;
        };
    }>;
    waitUntilValid(webpackDevMiddleware?: WebpackDevMiddleware.WebpackDevMiddleware): Promise<unknown>;
    getCompilationErrors(page: string): Promise<any>;
    send: (action: string, ...args: any[]) => void;
    ensurePage(page: string): Promise<any>;
}
