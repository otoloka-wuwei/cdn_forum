"use strict";exports.__esModule=true;exports.getPostCssPlugins=getPostCssPlugins;var _chalk=_interopRequireDefault(require("next/dist/compiled/chalk"));var _findConfig=require("../../../../../lib/find-config");var _resolveRequest=require("../../../../../lib/resolve-request");var _browserslist=_interopRequireDefault(require("browserslist"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}const genericErrorText='Malformed PostCSS Configuration';function getError_NullConfig(pluginName){return`${_chalk.default.red.bold('Error')}: Your PostCSS configuration for '${pluginName}' cannot have ${_chalk.default.bold('null')} configuration.\nTo disable '${pluginName}', pass ${_chalk.default.bold('false')}, otherwise, pass ${_chalk.default.bold('true')} or a configuration object.`;}function isIgnoredPlugin(pluginPath){const ignoredRegex=/(?:^|[\\/])(postcss-modules-values|postcss-modules-scope|postcss-modules-extract-imports|postcss-modules-local-by-default|postcss-modules)(?:[\\/]|$)/i;const match=ignoredRegex.exec(pluginPath);if(match==null){return false;}const plugin=match.pop();console.warn(`${_chalk.default.yellow.bold('Warning')}: Please remove the ${_chalk.default.underline(plugin)} plugin from your PostCSS configuration. `+`This plugin is automatically configured by Next.js.\n`+'Read more: https://err.sh/next.js/postcss-ignored-plugin');return true;}async function loadPlugin(dir,pluginName,options){if(options===false||isIgnoredPlugin(pluginName)){return false;}if(options==null){console.error(getError_NullConfig(pluginName));throw new Error(genericErrorText);}const pluginPath=(0,_resolveRequest.resolveRequest)(pluginName,`${dir}/`);if(isIgnoredPlugin(pluginPath)){return false;}else if(options===true){return require(pluginPath);}else{const keys=Object.keys(options);if(keys.length===0){return require(pluginPath);}return require(pluginPath)(options);}}function getDefaultPlugins(baseDirectory,isProduction){var _browsers;let browsers;try{browsers=_browserslist.default.loadConfig({path:baseDirectory,env:isProduction?'production':'development'});}catch(_unused){}return[require.resolve('next/dist/compiled/postcss-flexbugs-fixes'),[require.resolve('next/dist/compiled/postcss-preset-env'),{browsers:(_browsers=browsers)!==null&&_browsers!==void 0?_browsers:['defaults'],autoprefixer:{// Disable legacy flexbox support
flexbox:'no-2009'},// Enable CSS features that have shipped to the
// web platform, i.e. in 2+ browsers unflagged.
stage:3,features:{'custom-properties':false}}]];}async function getPostCssPlugins(dir,isProduction,defaults=false){let config=defaults?null:await(0,_findConfig.findConfig)(dir,'postcss');if(config==null){config={plugins:getDefaultPlugins(dir,isProduction)};}if(typeof config==='function'){throw new Error(`Your custom PostCSS configuration may not export a function. Please export a plain object instead.\n`+'Read more: https://err.sh/next.js/postcss-function');}// Warn user about configuration keys which are not respected
const invalidKey=Object.keys(config).find(key=>key!=='plugins');if(invalidKey){console.warn(`${_chalk.default.yellow.bold('Warning')}: Your PostCSS configuration defines a field which is not supported (\`${invalidKey}\`). `+`Please remove this configuration value.`);}// Enforce the user provided plugins if the configuration file is present
let plugins=config.plugins;if(plugins==null||typeof plugins!=='object'){throw new Error(`Your custom PostCSS configuration must export a \`plugins\` key.`);}if(!Array.isArray(plugins)){// Capture variable so TypeScript is happy
const pc=plugins;plugins=Object.keys(plugins).reduce((acc,curr)=>{const p=pc[curr];if(typeof p==='undefined'){console.error(getError_NullConfig(curr));throw new Error(genericErrorText);}acc.push([curr,p]);return acc;},[]);}const parsed=[];plugins.forEach(plugin=>{if(plugin==null){console.warn(`${_chalk.default.yellow.bold('Warning')}: A ${_chalk.default.bold('null')} PostCSS plugin was provided. This entry will be ignored.`);}else if(typeof plugin==='string'){parsed.push([plugin,true]);}else if(Array.isArray(plugin)){const pluginName=plugin[0];const pluginConfig=plugin[1];if(typeof pluginName==='string'&&(typeof pluginConfig==='boolean'||typeof pluginConfig==='object')){parsed.push([pluginName,pluginConfig]);}else{if(typeof pluginName!=='string'){console.error(`${_chalk.default.red.bold('Error')}: A PostCSS Plugin must be provided as a ${_chalk.default.bold('string')}. Instead, we got: '${pluginName}'.\n`+'Read more: https://err.sh/next.js/postcss-shape');}else{console.error(`${_chalk.default.red.bold('Error')}: A PostCSS Plugin was passed as an array but did not provide its configuration ('${pluginName}').\n`+'Read more: https://err.sh/next.js/postcss-shape');}throw new Error(genericErrorText);}}else if(typeof plugin==='function'){console.error(`${_chalk.default.red.bold('Error')}: A PostCSS Plugin was passed as a function using require(), but it must be provided as a ${_chalk.default.bold('string')}.\nRead more: https://err.sh/next.js/postcss-shape`);throw new Error(genericErrorText);}else{console.error(`${_chalk.default.red.bold('Error')}: An unknown PostCSS plugin was provided (${plugin}).\n`+'Read more: https://err.sh/next.js/postcss-shape');throw new Error(genericErrorText);}});const resolved=await Promise.all(parsed.map(p=>loadPlugin(dir,p[0],p[1])));const filtered=resolved.filter(Boolean);return filtered;}