"use strict";exports.__esModule=true;exports.getGlobalCssLoader=getGlobalCssLoader;var _client=require("./client");function getGlobalCssLoader(ctx,postCssPlugins,preProcessors=[]){const loaders=[];if(ctx.isClient){// Add appropriate development more or production mode style
// loader
loaders.push((0,_client.getClientStyleLoader)({isDevelopment:ctx.isDevelopment,assetPrefix:ctx.assetPrefix}));}// Resolve CSS `@import`s and `url()`s
loaders.push({loader:require.resolve('css-loader'),options:{importLoaders:1+preProcessors.length,sourceMap:true}});// Compile CSS
loaders.push({loader:require.resolve('next/dist/compiled/postcss-loader'),options:{ident:'__nextjs_postcss',plugins:postCssPlugins,sourceMap:true}});loaders.push(// Webpack loaders run like a stack, so we need to reverse the natural
// order of preprocessors.
...preProcessors.slice().reverse());return loaders;}