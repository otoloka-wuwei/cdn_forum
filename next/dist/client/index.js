"use strict";var _interopRequireWildcard3=require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");exports.__esModule=true;exports.default=exports.emitter=exports.router=exports.version=exports.render=exports.renderError=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _interopRequireWildcard2=_interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));var _react=_interopRequireDefault(require("react"));var _reactDom=_interopRequireDefault(require("react-dom"));var _headManager=_interopRequireDefault(require("./head-manager"));var _router=require("next/router");var _mitt=_interopRequireDefault(require("../next-server/lib/mitt"));var _utils=require("../next-server/lib/utils");var _pageLoader=_interopRequireDefault(require("./page-loader"));var envConfig=_interopRequireWildcard3(require("../next-server/lib/runtime-config"));var _headManagerContext=require("../next-server/lib/head-manager-context");var _routerContext=require("../next-server/lib/router-context");var _querystring=require("querystring");var _isDynamic=require("../next-server/lib/router/utils/is-dynamic");var _performanceRelayer=require("./performance-relayer");/* global location */ /// <reference types="react-dom/experimental" />
function _catch(body,recover){try{var result=body();}catch(e){return recover(e);}if(result&&result.then){return result.then(void 0,recover);}return result;}var doRender=function doRender(_ref6){var{App,Component,props,err}=_ref6;try{function _temp14(){Component=Component||lastAppProps.Component;props=props||lastAppProps.props;var appProps=(0,_extends2.default)({},props,{Component,err,router});// lastAppProps has to be set before ReactDom.render to account for ReactDom throwing an error.
lastAppProps=appProps;emitter.emit('before-reactdom-render',{Component,ErrorComponent,appProps});var elem=_react.default.createElement(AppContainer,null,_react.default.createElement(App,appProps));// We catch runtime errors using componentDidCatch which will trigger renderError
renderReactElement(process.env.__NEXT_STRICT_MODE?_react.default.createElement(_react.default.StrictMode,null,elem):elem,appElement);emitter.emit('after-reactdom-render',{Component,ErrorComponent,appProps});}var _temp15=function(){if(!props&&Component&&Component!==ErrorComponent&&lastAppProps.Component===ErrorComponent){var{pathname,query:_query,asPath:_asPath}=router;var AppTree=wrapApp(App);var appCtx={router,AppTree,Component:ErrorComponent,ctx:{err,pathname,query:_query,asPath:_asPath,AppTree}};return Promise.resolve((0,_utils.loadGetInitialProps)(App,appCtx)).then(function(_loadGetInitialProps){props=_loadGetInitialProps;});}}();// Usual getInitialProps fetching is handled in next/router
// this is for when ErrorComponent gets replaced by Component by HMR
return Promise.resolve(_temp15&&_temp15.then?_temp15.then(_temp14):_temp14(_temp15));}catch(e){return Promise.reject(e);}};// This method handles all runtime and debug errors.
// 404 and 500 errors are special kind of errors
// and they are still handle via the main render method.
var renderError=function renderError(props){try{var{App:_App,err:_err}=props;// In development runtime errors are caught by react-error-overlay
// In production we catch runtime errors using componentDidCatch which will trigger renderError
if(process.env.NODE_ENV!=='production'){return Promise.resolve(webpackHMR.reportRuntimeError(webpackHMR.prepareError(_err)));}if(process.env.__NEXT_PLUGINS){// eslint-disable-next-line
Promise.resolve().then(()=>(0,_interopRequireWildcard2.default)(require('next-plugin-loader?middleware=on-error-client!'))).then(mod=>{return mod.default({err:_err});}).catch(err=>{console.error('error calling on-error-client for plugins',err);});}// Make sure we log the error to the console, otherwise users can't track down issues.
console.error(_err);return Promise.resolve(pageLoader.loadPage('/_error')).then(function(_pageLoader$loadPage2){function _temp11(initProps){return Promise.resolve(doRender((0,_extends2.default)({},props,{err:_err,Component:ErrorComponent,props:initProps}))).then(function(){});}({page:ErrorComponent}=_pageLoader$loadPage2);// In production we do a normal render with the `ErrorComponent` as component.
// If we've gotten here upon initial render, we can use the props from the server.
// Otherwise, we need to call `getInitialProps` on `App` before mounting.
var AppTree=wrapApp(_App);var appCtx={Component:ErrorComponent,AppTree,router,ctx:{err:_err,pathname:page,query,asPath,AppTree}};var _props$props=props.props;return _props$props?_temp11(props.props):Promise.resolve((0,_utils.loadGetInitialProps)(_App,appCtx)).then(_temp11);});}catch(e){return Promise.reject(e);}};// If hydrate does not exist, eg in preact.
exports.renderError=renderError;var render=function render(props){try{var _exit3=false;function _temp9(_result2){if(_exit3)return _result2;var _temp6=_catch(function(){return Promise.resolve(doRender(props)).then(function(){});},function(err){return Promise.resolve(renderError((0,_extends2.default)({},props,{err}))).then(function(){});});if(_temp6&&_temp6.then)return _temp6.then(function(){});}var _temp10=function(){if(props.err){return Promise.resolve(renderError(props)).then(function(){_exit3=true;});}}();return Promise.resolve(_temp10&&_temp10.then?_temp10.then(_temp9):_temp9(_temp10));}catch(e){return Promise.reject(e);}};exports.render=render;if(!('finally'in Promise.prototype)){// eslint-disable-next-line no-extend-native
Promise.prototype.finally=require('next/dist/build/polyfills/finally-polyfill.min');}var data=JSON.parse(document.getElementById('__NEXT_DATA__').textContent);window.__NEXT_DATA__=data;var version="9.3.6";exports.version=version;var{props,err,page,query,buildId,assetPrefix,runtimeConfig,dynamicIds,isFallback}=data;var prefix=assetPrefix||'';// With dynamic assetPrefix it's no longer possible to set assetPrefix at the build time
// So, this is how we do it in the client side at runtime
__webpack_public_path__=prefix+"/_next/";//eslint-disable-line
// Initialize next/config with the environment configuration
envConfig.setConfig({serverRuntimeConfig:{},publicRuntimeConfig:runtimeConfig||{}});var asPath=(0,_utils.getURL)();var pageLoader=new _pageLoader.default(buildId,prefix);var register=(_ref)=>{var[r,f]=_ref;return pageLoader.registerPage(r,f);};if(window.__NEXT_P){window.__NEXT_P.map(register);}window.__NEXT_P=[];window.__NEXT_P.push=register;var updateHead=(0,_headManager.default)();var appElement=document.getElementById('__next');var lastAppProps;var webpackHMR;var router;exports.router=router;var ErrorComponent;var Component;var App,onPerfEntry;class Container extends _react.default.Component{componentDidCatch(err,info){this.props.fn(err,info);}componentDidMount(){this.scrollToHash();if(process.env.__NEXT_PLUGINS){// eslint-disable-next-line
Promise.resolve().then(()=>(0,_interopRequireWildcard2.default)(require('next-plugin-loader?middleware=unstable-post-hydration!'))).then(mod=>{return mod.default();}).catch(err=>{console.error('Error calling post-hydration for plugins',err);});}// We need to replace the router state if:
// - the page was (auto) exported and has a query string or search (hash)
// - it was auto exported and is a dynamic route (to provide params)
// - if it is a client-side skeleton (fallback render)
if(router.isSsr&&(isFallback||data.nextExport&&((0,_isDynamic.isDynamicRoute)(router.pathname)||location.search)||props.__N_SSG&&location.search)){// update query on mount for exported pages
router.replace(router.pathname+'?'+(0,_querystring.stringify)((0,_extends2.default)({},router.query,{},(0,_querystring.parse)(location.search.substr(1)))),asPath,{// WARNING: `_h` is an internal option for handing Next.js
// client-side hydration. Your app should _never_ use this property.
// It may change at any time without notice.
_h:1,// Fallback pages must trigger the data fetch, so the transition is
// not shallow.
// Other pages (strictly updating query) happens shallowly, as data
// requirements would already be present.
shallow:!isFallback});}if(process.env.__NEXT_TEST_MODE){window.__NEXT_HYDRATED=true;if(window.__NEXT_HYDRATED_CB){window.__NEXT_HYDRATED_CB();}}}componentDidUpdate(){this.scrollToHash();}scrollToHash(){var{hash}=location;hash=hash&&hash.substring(1);if(!hash)return;var el=document.getElementById(hash);if(!el)return;// If we call scrollIntoView() in here without a setTimeout
// it won't scroll properly.
setTimeout(()=>el.scrollIntoView(),0);}render(){return this.props.children;}}var emitter=(0,_mitt.default)();exports.emitter=emitter;var _default=function _default(_temp5){var{webpackHMR:passedWebpackHMR}=_temp5===void 0?{}:_temp5;try{// This makes sure this specific lines are removed in production
if(process.env.NODE_ENV==='development'){webpackHMR=passedWebpackHMR;}return Promise.resolve(pageLoader.loadPageScript('/_app')).then(function(_ref2){var _exit=false;var{page:app,mod}=_ref2;function _temp4(_result){if(_exit)return _result;function _temp2(){exports.router=router=(0,_router.createRouter)(page,query,asPath,{initialProps:props,pageLoader,App,Component,wrapApp,err:initialErr,isFallback,subscription:(_ref3,App)=>{var{Component,props,err}=_ref3;render({App,Component,props,err});}});// call init-client middleware
if(process.env.__NEXT_PLUGINS){// eslint-disable-next-line
Promise.resolve().then(()=>(0,_interopRequireWildcard2.default)(require('next-plugin-loader?middleware=on-init-client!'))).then(mod=>{return mod.default({router});}).catch(err=>{console.error('Error calling client-init for plugins',err);});}var renderCtx={App,Component,props,err:initialErr};if(process.env.NODE_ENV==='production'){render(renderCtx);return emitter;}if(process.env.NODE_ENV!=='production'){return{emitter,render,renderCtx};}}var _temp=function(){if(window.__NEXT_PRELOADREADY){return Promise.resolve(window.__NEXT_PRELOADREADY(dynamicIds)).then(function(){});}}();return _temp&&_temp.then?_temp.then(_temp2):_temp2(_temp);}App=app;if(mod&&mod.unstable_onPerformanceData){onPerfEntry=function onPerfEntry(_ref4){var{name,startTime,value,duration,entryType}=_ref4;mod.unstable_onPerformanceData({name,startTime,value,duration,entryType});};}var initialErr=err;var _temp3=_catch(function(){;return Promise.resolve(pageLoader.loadPage(page)).then(function(_pageLoader$loadPage){({page:Component}=_pageLoader$loadPage);if(process.env.NODE_ENV!=='production'){var{isValidElementType}=require('react-is');if(!isValidElementType(Component)){throw new Error("The default export is not a React Component in page: \""+page+"\"");}}});},function(error){// This catches errors like throwing in the top level of a module
initialErr=error;});return _temp3&&_temp3.then?_temp3.then(_temp4):_temp4(_temp3);});}catch(e){return Promise.reject(e);}};exports.default=_default;var isInitialRender=typeof _reactDom.default.hydrate==='function';var reactRoot=null;function renderReactElement(reactEl,domEl){if(process.env.__NEXT_REACT_MODE!=='legacy'){if(!reactRoot){var opts={hydrate:true};reactRoot=process.env.__NEXT_REACT_MODE==='concurrent'?_reactDom.default.createRoot(domEl,opts):_reactDom.default.createBlockingRoot(domEl,opts);}reactRoot.render(reactEl);}else{// mark start of hydrate/render
if(_utils.ST){performance.mark('beforeRender');}// The check for `.hydrate` is there to support React alternatives like preact
if(isInitialRender){_reactDom.default.hydrate(reactEl,domEl,markHydrateComplete);isInitialRender=false;}else{_reactDom.default.render(reactEl,domEl,markRenderComplete);}}if(onPerfEntry&&_utils.ST){try{(0,_performanceRelayer.observeLayoutShift)(onPerfEntry);(0,_performanceRelayer.observeLargestContentfulPaint)(onPerfEntry);(0,_performanceRelayer.observePaint)(onPerfEntry);}catch(e){window.addEventListener('load',()=>{performance.getEntriesByType('paint').forEach(onPerfEntry);});}}}function markHydrateComplete(){if(!_utils.ST)return;performance.mark('afterHydrate');// mark end of hydration
performance.measure('Next.js-before-hydration','navigationStart','beforeRender');performance.measure('Next.js-hydration','beforeRender','afterHydrate');if(onPerfEntry){if(process.env.__NEXT_FID_POLYFILL){Promise.resolve().then(()=>(0,_interopRequireWildcard2.default)(require('../next-server/lib/fid-measure'))).then(mod=>{mod.default(onPerfEntry);}).catch(err=>{console.error('Error measuring First Input Delay',err);});}performance.getEntriesByName('Next.js-hydration').forEach(onPerfEntry);performance.getEntriesByName('beforeRender').forEach(onPerfEntry);}clearMarks();}function markRenderComplete(){if(!_utils.ST)return;performance.mark('afterRender');// mark end of render
var navStartEntries=performance.getEntriesByName('routeChange','mark');if(!navStartEntries.length){return;}performance.measure('Next.js-route-change-to-render',navStartEntries[0].name,'beforeRender');performance.measure('Next.js-render','beforeRender','afterRender');if(onPerfEntry){performance.getEntriesByName('Next.js-render').forEach(onPerfEntry);performance.getEntriesByName('Next.js-route-change-to-render').forEach(onPerfEntry);}clearMarks();['Next.js-route-change-to-render','Next.js-render'].forEach(measure=>performance.clearMeasures(measure));}function clearMarks(){;['beforeRender','afterHydrate','afterRender','routeChange'].forEach(mark=>performance.clearMarks(mark));}function AppContainer(_ref5){var{children}=_ref5;return _react.default.createElement(Container,{fn:error=>renderError({App,err:error}).catch(err=>console.error('Error rendering page: ',err))},_react.default.createElement(_routerContext.RouterContext.Provider,{value:(0,_router.makePublicRouterInstance)(router)},_react.default.createElement(_headManagerContext.HeadManagerContext.Provider,{value:updateHead},children)));}var wrapApp=App=>props=>{var appProps=(0,_extends2.default)({},props,{Component,err,router});return _react.default.createElement(AppContainer,null,_react.default.createElement(App,appProps));};