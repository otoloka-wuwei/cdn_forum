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
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../lib/constants");
const path_1 = require("path");
const require_1 = require("./require");
function interopDefault(mod) {
    return mod.default || mod;
}
exports.interopDefault = interopDefault;
function loadComponents(distDir, buildId, pathname, serverless) {
    return __awaiter(this, void 0, void 0, function* () {
        if (serverless) {
            const Component = yield require_1.requirePage(pathname, distDir, serverless);
            const { getStaticProps, getStaticPaths, getServerSideProps } = Component;
            return {
                Component,
                pageConfig: Component.config || {},
                getStaticProps,
                getStaticPaths,
                getServerSideProps,
            };
        }
        const documentPath = path_1.join(distDir, constants_1.SERVER_DIRECTORY, constants_1.CLIENT_STATIC_FILES_PATH, buildId, 'pages', '_document');
        const appPath = path_1.join(distDir, constants_1.SERVER_DIRECTORY, constants_1.CLIENT_STATIC_FILES_PATH, buildId, 'pages', '_app');
        const DocumentMod = require(documentPath);
        const { middleware: DocumentMiddleware } = DocumentMod;
        const AppMod = require(appPath);
        const ComponentMod = require_1.requirePage(pathname, distDir, serverless);
        const [buildManifest, reactLoadableManifest, Component, Document, App,] = yield Promise.all([
            require(path_1.join(distDir, constants_1.BUILD_MANIFEST)),
            require(path_1.join(distDir, constants_1.REACT_LOADABLE_MANIFEST)),
            interopDefault(ComponentMod),
            interopDefault(DocumentMod),
            interopDefault(AppMod),
        ]);
        const { getServerSideProps, getStaticProps, getStaticPaths } = ComponentMod;
        return {
            App,
            Document,
            Component,
            buildManifest,
            DocumentMiddleware,
            reactLoadableManifest,
            pageConfig: ComponentMod.config || {},
            getServerSideProps,
            getStaticProps,
            getStaticPaths,
        };
    });
}
exports.loadComponents = loadComponents;
