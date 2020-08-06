(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "4JlD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "BMP1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var next = _interopRequireWildcard(__webpack_require__("IKlv"));

window.next = next;
(0, next.default)().catch(err => {
  console.error(err.message + "\n" + err.stack);
});

/***/ }),

/***/ "DqTX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = initHeadManager;
var DOMAttributeNames = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv'
};

function reactElementToDOM(_ref) {
  var {
    type,
    props
  } = _ref;
  var el = document.createElement(type);

  for (var p in props) {
    if (!props.hasOwnProperty(p)) continue;
    if (p === 'children' || p === 'dangerouslySetInnerHTML') continue; // we don't render undefined props to the DOM

    if (props[p] === undefined) continue;
    var attr = DOMAttributeNames[p] || p.toLowerCase();
    el.setAttribute(attr, props[p]);
  }

  var {
    children,
    dangerouslySetInnerHTML
  } = props;

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : children.join('');
  }

  return el;
}

function updateElements(type, components) {
  var headEl = document.getElementsByTagName('head')[0];
  var headCountEl = headEl.querySelector('meta[name=next-head-count]');

  if (false) {}

  var headCount = Number(headCountEl.content);
  var oldTags = [];

  for (var i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = j.previousElementSibling) {
    if (j.tagName.toLowerCase() === type) {
      oldTags.push(j);
    }
  }

  var newTags = components.map(reactElementToDOM).filter(newTag => {
    for (var k = 0, len = oldTags.length; k < len; k++) {
      var oldTag = oldTags[k];

      if (oldTag.isEqualNode(newTag)) {
        oldTags.splice(k, 1);
        return false;
      }
    }

    return true;
  });
  oldTags.forEach(t => t.parentNode.removeChild(t));
  newTags.forEach(t => headEl.insertBefore(t, headCountEl));
  headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
}

function initHeadManager() {
  var updatePromise = null;
  return head => {
    var promise = updatePromise = Promise.resolve().then(() => {
      if (promise !== updatePromise) return;
      updatePromise = null;
      var tags = {};
      head.forEach(h => {
        var components = tags[h.type] || [];
        components.push(h);
        tags[h.type] = components;
      });
      var titleComponent = tags.title ? tags.title[0] : null;
      var title = '';

      if (titleComponent) {
        var {
          children
        } = titleComponent.props;
        title = typeof children === 'string' ? children : children.join('');
      }

      if (title !== document.title) document.title = title;
      ['meta', 'base', 'link', 'style', 'script'].forEach(type => {
        updateElements(type, tags[type] || []);
      });
    });
  };
}

/***/ }),

/***/ "FYa8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__("q1tI"));

exports.HeadManagerContext = React.createContext(null);

if (false) {}

/***/ }),

/***/ "IKlv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard3 = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = exports.emitter = exports.router = exports.version = exports.render = exports.renderError = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _interopRequireWildcard2 = _interopRequireDefault(__webpack_require__("284h"));

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _reactDom = _interopRequireDefault(__webpack_require__("i8i4"));

var _headManager = _interopRequireDefault(__webpack_require__("DqTX"));

var _router = __webpack_require__("nOHt");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _pageLoader = _interopRequireDefault(__webpack_require__("zmvN"));

var envConfig = _interopRequireWildcard3(__webpack_require__("yLiY"));

var _headManagerContext = __webpack_require__("FYa8");

var _routerContext = __webpack_require__("qOIg");

var _querystring = __webpack_require__("s4NR");

var _isDynamic = __webpack_require__("/jkW");

var _performanceRelayer = __webpack_require__("bGXG");
/* global location */
/// <reference types="react-dom/experimental" />


function _catch(body, recover) {
  try {
    var result = body();
  } catch (e) {
    return recover(e);
  }

  if (result && result.then) {
    return result.then(void 0, recover);
  }

  return result;
}

var doRender = function doRender(_ref6) {
  var {
    App,
    Component,
    props,
    err
  } = _ref6;

  try {
    function _temp14() {
      Component = Component || lastAppProps.Component;
      props = props || lastAppProps.props;
      var appProps = (0, _extends2.default)({}, props, {
        Component,
        err,
        router
      }); // lastAppProps has to be set before ReactDom.render to account for ReactDom throwing an error.

      lastAppProps = appProps;
      emitter.emit('before-reactdom-render', {
        Component,
        ErrorComponent,
        appProps
      });

      var elem = _react.default.createElement(AppContainer, null, _react.default.createElement(App, appProps)); // We catch runtime errors using componentDidCatch which will trigger renderError


      renderReactElement( false ? undefined : elem, appElement);
      emitter.emit('after-reactdom-render', {
        Component,
        ErrorComponent,
        appProps
      });
    }

    var _temp15 = function () {
      if (!props && Component && Component !== ErrorComponent && lastAppProps.Component === ErrorComponent) {
        var {
          pathname,
          query: _query,
          asPath: _asPath
        } = router;
        var AppTree = wrapApp(App);
        var appCtx = {
          router,
          AppTree,
          Component: ErrorComponent,
          ctx: {
            err,
            pathname,
            query: _query,
            asPath: _asPath,
            AppTree
          }
        };
        return Promise.resolve((0, _utils.loadGetInitialProps)(App, appCtx)).then(function (_loadGetInitialProps) {
          props = _loadGetInitialProps;
        });
      }
    }(); // Usual getInitialProps fetching is handled in next/router
    // this is for when ErrorComponent gets replaced by Component by HMR


    return Promise.resolve(_temp15 && _temp15.then ? _temp15.then(_temp14) : _temp14(_temp15));
  } catch (e) {
    return Promise.reject(e);
  }
}; // This method handles all runtime and debug errors.
// 404 and 500 errors are special kind of errors
// and they are still handle via the main render method.


var renderError = function renderError(props) {
  try {
    var {
      App: _App,
      err: _err
    } = props; // In development runtime errors are caught by react-error-overlay
    // In production we catch runtime errors using componentDidCatch which will trigger renderError

    if (false) {}

    if (false) {} // Make sure we log the error to the console, otherwise users can't track down issues.


    console.error(_err);
    return Promise.resolve(pageLoader.loadPage('/_error')).then(function (_pageLoader$loadPage2) {
      function _temp11(initProps) {
        return Promise.resolve(doRender((0, _extends2.default)({}, props, {
          err: _err,
          Component: ErrorComponent,
          props: initProps
        }))).then(function () {});
      }

      ({
        page: ErrorComponent
      } = _pageLoader$loadPage2); // In production we do a normal render with the `ErrorComponent` as component.
      // If we've gotten here upon initial render, we can use the props from the server.
      // Otherwise, we need to call `getInitialProps` on `App` before mounting.

      var AppTree = wrapApp(_App);
      var appCtx = {
        Component: ErrorComponent,
        AppTree,
        router,
        ctx: {
          err: _err,
          pathname: page,
          query,
          asPath,
          AppTree
        }
      };
      var _props$props = props.props;
      return _props$props ? _temp11(props.props) : Promise.resolve((0, _utils.loadGetInitialProps)(_App, appCtx)).then(_temp11);
    });
  } catch (e) {
    return Promise.reject(e);
  }
}; // If hydrate does not exist, eg in preact.


exports.renderError = renderError;

var render = function render(props) {
  try {
    var _exit3 = false;

    function _temp9(_result2) {
      if (_exit3) return _result2;

      var _temp6 = _catch(function () {
        return Promise.resolve(doRender(props)).then(function () {});
      }, function (err) {
        return Promise.resolve(renderError((0, _extends2.default)({}, props, {
          err
        }))).then(function () {});
      });

      if (_temp6 && _temp6.then) return _temp6.then(function () {});
    }

    var _temp10 = function () {
      if (props.err) {
        return Promise.resolve(renderError(props)).then(function () {
          _exit3 = true;
        });
      }
    }();

    return Promise.resolve(_temp10 && _temp10.then ? _temp10.then(_temp9) : _temp9(_temp10));
  } catch (e) {
    return Promise.reject(e);
  }
};

exports.render = render;

if (!('finally' in Promise.prototype)) {
  // eslint-disable-next-line no-extend-native
  Promise.prototype.finally = __webpack_require__("Z577");
}

var data = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
window.__NEXT_DATA__ = data;
var version = "9.3.6";
exports.version = version;
var {
  props,
  err,
  page,
  query,
  buildId,
  assetPrefix,
  runtimeConfig,
  dynamicIds,
  isFallback
} = data;
var prefix = assetPrefix || ''; // With dynamic assetPrefix it's no longer possible to set assetPrefix at the build time
// So, this is how we do it in the client side at runtime

__webpack_require__.p = prefix + "/_next/"; //eslint-disable-line
// Initialize next/config with the environment configuration

envConfig.setConfig({
  serverRuntimeConfig: {},
  publicRuntimeConfig: runtimeConfig || {}
});
var asPath = (0, _utils.getURL)();
var pageLoader = new _pageLoader.default(buildId, prefix);

var register = _ref => {
  var [r, f] = _ref;
  return pageLoader.registerPage(r, f);
};

if (window.__NEXT_P) {
  window.__NEXT_P.map(register);
}

window.__NEXT_P = [];
window.__NEXT_P.push = register;
var updateHead = (0, _headManager.default)();
var appElement = document.getElementById('__next');
var lastAppProps;
var webpackHMR;
var router;
exports.router = router;
var ErrorComponent;
var Component;
var App, onPerfEntry;

class Container extends _react.default.Component {
  componentDidCatch(err, info) {
    this.props.fn(err, info);
  }

  componentDidMount() {
    this.scrollToHash();

    if (false) {} // We need to replace the router state if:
    // - the page was (auto) exported and has a query string or search (hash)
    // - it was auto exported and is a dynamic route (to provide params)
    // - if it is a client-side skeleton (fallback render)


    if (router.isSsr && (isFallback || data.nextExport && ((0, _isDynamic.isDynamicRoute)(router.pathname) || location.search) || props.__N_SSG && location.search)) {
      // update query on mount for exported pages
      router.replace(router.pathname + '?' + (0, _querystring.stringify)((0, _extends2.default)({}, router.query, {}, (0, _querystring.parse)(location.search.substr(1)))), asPath, {
        // WARNING: `_h` is an internal option for handing Next.js
        // client-side hydration. Your app should _never_ use this property.
        // It may change at any time without notice.
        _h: 1,
        // Fallback pages must trigger the data fetch, so the transition is
        // not shallow.
        // Other pages (strictly updating query) happens shallowly, as data
        // requirements would already be present.
        shallow: !isFallback
      });
    }

    if (undefined) {
      window.__NEXT_HYDRATED = true;

      if (window.__NEXT_HYDRATED_CB) {
        window.__NEXT_HYDRATED_CB();
      }
    }
  }

  componentDidUpdate() {
    this.scrollToHash();
  }

  scrollToHash() {
    var {
      hash
    } = location;
    hash = hash && hash.substring(1);
    if (!hash) return;
    var el = document.getElementById(hash);
    if (!el) return; // If we call scrollIntoView() in here without a setTimeout
    // it won't scroll properly.

    setTimeout(() => el.scrollIntoView(), 0);
  }

  render() {
    return this.props.children;
  }

}

var emitter = (0, _mitt.default)();
exports.emitter = emitter;

var _default = function _default(_temp5) {
  var {
    webpackHMR: passedWebpackHMR
  } = _temp5 === void 0 ? {} : _temp5;

  try {
    // This makes sure this specific lines are removed in production
    if (false) {}

    return Promise.resolve(pageLoader.loadPageScript('/_app')).then(function (_ref2) {
      var _exit = false;
      var {
        page: app,
        mod
      } = _ref2;

      function _temp4(_result) {
        if (_exit) return _result;

        function _temp2() {
          exports.router = router = (0, _router.createRouter)(page, query, asPath, {
            initialProps: props,
            pageLoader,
            App,
            Component,
            wrapApp,
            err: initialErr,
            isFallback,
            subscription: (_ref3, App) => {
              var {
                Component,
                props,
                err
              } = _ref3;
              render({
                App,
                Component,
                props,
                err
              });
            }
          }); // call init-client middleware

          if (false) {}

          var renderCtx = {
            App,
            Component,
            props,
            err: initialErr
          };

          if (true) {
            render(renderCtx);
            return emitter;
          }

          if (false) {}
        }

        var _temp = function () {
          if (window.__NEXT_PRELOADREADY) {
            return Promise.resolve(window.__NEXT_PRELOADREADY(dynamicIds)).then(function () {});
          }
        }();

        return _temp && _temp.then ? _temp.then(_temp2) : _temp2(_temp);
      }

      App = app;

      if (mod && mod.unstable_onPerformanceData) {
        onPerfEntry = function onPerfEntry(_ref4) {
          var {
            name,
            startTime,
            value,
            duration,
            entryType
          } = _ref4;
          mod.unstable_onPerformanceData({
            name,
            startTime,
            value,
            duration,
            entryType
          });
        };
      }

      var initialErr = err;

      var _temp3 = _catch(function () {
        ;
        return Promise.resolve(pageLoader.loadPage(page)).then(function (_pageLoader$loadPage) {
          ({
            page: Component
          } = _pageLoader$loadPage);

          if (false) { var isValidElementType; }
        });
      }, function (error) {
        // This catches errors like throwing in the top level of a module
        initialErr = error;
      });

      return _temp3 && _temp3.then ? _temp3.then(_temp4) : _temp4(_temp3);
    });
  } catch (e) {
    return Promise.reject(e);
  }
};

exports.default = _default;
var isInitialRender = typeof _reactDom.default.hydrate === 'function';
var reactRoot = null;

function renderReactElement(reactEl, domEl) {
  if (false) { var opts; } else {
    // mark start of hydrate/render
    if (_utils.ST) {
      performance.mark('beforeRender');
    } // The check for `.hydrate` is there to support React alternatives like preact


    if (isInitialRender) {
      _reactDom.default.hydrate(reactEl, domEl, markHydrateComplete);

      isInitialRender = false;
    } else {
      _reactDom.default.render(reactEl, domEl, markRenderComplete);
    }
  }

  if (onPerfEntry && _utils.ST) {
    try {
      (0, _performanceRelayer.observeLayoutShift)(onPerfEntry);
      (0, _performanceRelayer.observeLargestContentfulPaint)(onPerfEntry);
      (0, _performanceRelayer.observePaint)(onPerfEntry);
    } catch (e) {
      window.addEventListener('load', () => {
        performance.getEntriesByType('paint').forEach(onPerfEntry);
      });
    }
  }
}

function markHydrateComplete() {
  if (!_utils.ST) return;
  performance.mark('afterHydrate'); // mark end of hydration

  performance.measure('Next.js-before-hydration', 'navigationStart', 'beforeRender');
  performance.measure('Next.js-hydration', 'beforeRender', 'afterHydrate');

  if (onPerfEntry) {
    if (false) {}

    performance.getEntriesByName('Next.js-hydration').forEach(onPerfEntry);
    performance.getEntriesByName('beforeRender').forEach(onPerfEntry);
  }

  clearMarks();
}

function markRenderComplete() {
  if (!_utils.ST) return;
  performance.mark('afterRender'); // mark end of render

  var navStartEntries = performance.getEntriesByName('routeChange', 'mark');

  if (!navStartEntries.length) {
    return;
  }

  performance.measure('Next.js-route-change-to-render', navStartEntries[0].name, 'beforeRender');
  performance.measure('Next.js-render', 'beforeRender', 'afterRender');

  if (onPerfEntry) {
    performance.getEntriesByName('Next.js-render').forEach(onPerfEntry);
    performance.getEntriesByName('Next.js-route-change-to-render').forEach(onPerfEntry);
  }

  clearMarks();
  ['Next.js-route-change-to-render', 'Next.js-render'].forEach(measure => performance.clearMeasures(measure));
}

function clearMarks() {
  ;
  ['beforeRender', 'afterHydrate', 'afterRender', 'routeChange'].forEach(mark => performance.clearMarks(mark));
}

function AppContainer(_ref5) {
  var {
    children
  } = _ref5;
  return _react.default.createElement(Container, {
    fn: error => renderError({
      App,
      err: error
    }).catch(err => console.error('Error rendering page: ', err))
  }, _react.default.createElement(_routerContext.RouterContext.Provider, {
    value: (0, _router.makePublicRouterInstance)(router)
  }, _react.default.createElement(_headManagerContext.HeadManagerContext.Provider, {
    value: updateHead
  }, children)));
}

var wrapApp = App => props => {
  var appProps = (0, _extends2.default)({}, props, {
    Component,
    err,
    router
  });
  return _react.default.createElement(AppContainer, null, _react.default.createElement(App, appProps));
};

/***/ }),

/***/ "Qetd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var assign=Object.assign.bind(Object);module.exports=assign;module.exports.default=module.exports;

/***/ }),

/***/ "QmWs":
/***/ (function(module, exports, __webpack_require__) {

var e,t=(e=__webpack_require__("s4NR"))&&"object"==typeof e&&"default"in e?e.default:e,r=/https?|ftp|gopher|file/;function o(e){"string"==typeof e&&(e=g(e));var o=function(e,t,r){var o=e.auth,a=e.hostname,s=e.protocol||"",c=e.pathname||"",h=e.hash||"",p=e.query||"",n=!1;o=o?encodeURIComponent(o).replace(/%3A/i,":")+"@":"",e.host?n=o+e.host:a&&(n=o+(~a.indexOf(":")?"["+a+"]":a),e.port&&(n+=":"+e.port)),p&&"object"==typeof p&&(p=t.encode(p));var l=e.search||p&&"?"+p||"";return s&&":"!==s.substr(-1)&&(s+=":"),e.slashes||(!s||r.test(s))&&!1!==n?(n="//"+(n||""),c&&"/"!==c[0]&&(c="/"+c)):n||(n=""),h&&"#"!==h[0]&&(h="#"+h),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:n,pathname:c=c.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:h}}(e,t,r);return""+o.protocol+o.host+o.pathname+o.search+o.hash}var a="http://",s="w.w",c=a+s,h=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,p=/https?|ftp|gopher|file/;function n(e,t){var r="string"==typeof e?g(e):e;e="object"==typeof e?o(e):e;var s=g(t),n="";r.protocol&&!r.slashes&&(n=r.protocol,e=e.replace(r.protocol,""),n+="/"===t[0]||"/"===e[0]?"/":""),n&&s.protocol&&(n="",s.slashes||(n=s.protocol,t=t.replace(s.protocol,"")));var l=e.match(h);l&&!s.protocol&&(e=e.substr((n=l[1]+(l[2]||"")).length),/^\/\/[^/]/.test(t)&&(n=n.slice(0,-1)));var i=new URL(e,c+"/"),f=new URL(t,i).toString().replace(c,""),u=s.protocol||r.protocol;return u+=r.slashes||s.slashes?"//":"",!n&&u?f=f.replace(a,u):n&&(f=f.replace(a,"")),p.test(f)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==f.slice(-1)||(f=f.slice(0,-1)),n&&(f=n+("/"===f[0]?f.substr(1):f)),f}function l(){}l.parse=g,l.format=o,l.resolve=n,l.resolveObject=n;var i=/^https?|ftp|gopher|file/,f=/^(.*?)([#?].*)/,u=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,m=/^([a-z0-9.+-]*:)?\/\/\/*/i,v=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function d(e){try{return decodeURI(e)}catch(t){return e}}function g(e,r,a){if(void 0===r&&(r=!1),void 0===a&&(a=!1),e&&"object"==typeof e&&e instanceof l)return e;var h=(e=e.trim()).match(f);e=h?d(h[1]).replace(/\\/g,"/")+h[2]:d(e).replace(/\\/g,"/"),v.test(e)&&"/"!==e.slice(-1)&&(e+="/");var p=!/(^javascript)/.test(e)&&e.match(u),n=m.test(e),g="";p&&(i.test(p[1])||(g=p[1].toLowerCase(),e=""+p[2]+p[3]),p[2]||(n=!1,i.test(p[1])?(g=p[1],e=""+p[3]):e="//"+p[3]),3!==p[2].length&&1!==p[2].length||(g=p[1],e="/"+p[3]));var b,y=(h?h[1]:e).match(/(:[0-9]+)/),j="";y&&y[1]&&3===y[1].length&&(e=e.replace(j=y[1],j+"00"));var w=new l,x="",U="";try{b=new URL(e)}catch(t){x=t,g||a||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(U="/",e=e.substr(1));try{b=new URL(e,c)}catch(e){return w.protocol=g,w.href=g,w}}w.slashes=n&&!U,w.host=b.host===s?"":b.host,w.hostname=b.hostname===s?"":b.hostname.replace(/(\[|\])/g,""),w.protocol=x?g||null:b.protocol,w.search=b.search.replace(/\\/g,"%5C"),w.hash=b.hash.replace(/\\/g,"%5C");var R=e.split("#");!w.search&&~R[0].indexOf("?")&&(w.search="?"),w.hash||""!==R[1]||(w.hash="#"),w.query=r?t.decode(b.search.substr(1)):w.search.substr(1),w.pathname=U+d(b.pathname).replace(/"/g,"%22"),"about:"===w.protocol&&"blank"===w.pathname&&(w.protocol="",w.pathname=""),x&&"/"!==e[0]&&(w.pathname=w.pathname.substr(1)),g&&!i.test(g)&&"/"!==e.slice(-1)&&"/"===w.pathname&&(w.pathname=""),w.path=w.pathname+w.search,w.auth=[b.username,b.password].map(decodeURIComponent).filter(Boolean).join(":"),w.port=b.port,j&&(w.host=w.host.replace(j+"00",j),w.port=w.port.slice(0,-2)),w.href=U?""+w.pathname+w.search+w.hash:o(w);var O=/^(file)/.test(w.href)?["host","hostname"]:[];return Object.keys(w).forEach(function(e){~O.indexOf(e)||(w[e]=w[e]||null)}),w}exports.parse=g,exports.format=o,exports.resolve=n,exports.resolveObject=function(e,t){return g(n(e,t))},exports.Url=l;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "Z577":
/***/ (function(module, exports) {

Promise.prototype.finally=function(n){if("function"!=typeof n)return this.then(n,n);var t=this.constructor||Promise;return this.then(function(r){return t.resolve(n()).then(function(){return r})},function(r){return t.resolve(n()).then(function(){throw r})})};

/***/ }),

/***/ "bGXG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.observeLayoutShift = observeLayoutShift;
exports.observeLargestContentfulPaint = observeLargestContentfulPaint;
exports.observePaint = observePaint;

function isTypeSupported(type) {
  if (self.PerformanceObserver && PerformanceObserver.supportedEntryTypes) {
    return PerformanceObserver.supportedEntryTypes.includes(type);
  }

  return false;
}

function observeLayoutShift(onPerfEntry) {
  if (isTypeSupported('layout-shift')) {
    var cumulativeScore = 0;
    var observer = new PerformanceObserver(list => {
      for (var entry of list.getEntries()) {
        // Only count layout shifts without recent user input.
        if (!entry.hadRecentInput) {
          cumulativeScore += entry.value;
        }
      }
    });
    observer.observe({
      type: 'layout-shift',
      buffered: true
    });
    document.addEventListener('visibilitychange', function clsObserver() {
      if (document.visibilityState === 'hidden') {
        // Force any pending records to be dispatched.
        observer.takeRecords();
        observer.disconnect();
        document.removeEventListener('visibilitychange', clsObserver, true);
        onPerfEntry({
          name: 'cumulative-layout-shift',
          value: cumulativeScore
        });
      }
    }, true);
  }
}

function observeLargestContentfulPaint(onPerfEntry) {
  if (isTypeSupported('largest-contentful-paint')) {
    // Create a variable to hold the latest LCP value (since it can change).
    var lcp; // Create the PerformanceObserver instance.

    var observer = new PerformanceObserver(entryList => {
      var entries = entryList.getEntries();
      var lastEntry = entries[entries.length - 1];
      lcp = lastEntry.renderTime || lastEntry.loadTime;
    });
    observer.observe({
      type: 'largest-contentful-paint',
      buffered: true
    });
    document.addEventListener('visibilitychange', function lcpObserver() {
      if (lcp && document.visibilityState === 'hidden') {
        document.removeEventListener('visibilitychange', lcpObserver, true);
        onPerfEntry({
          name: 'largest-contentful-paint',
          value: lcp
        });
      }
    }, true);
  }
}

function observePaint(onPerfEntry) {
  var observer = new PerformanceObserver(list => {
    list.getEntries().forEach(onPerfEntry);
  });
  observer.observe({
    type: 'paint',
    buffered: true
  });
}

/***/ }),

/***/ "kd2E":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "pVnL":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "s4NR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__("kd2E");
exports.encode = exports.stringify = __webpack_require__("4JlD");


/***/ }),

/***/ "yLiY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
let runtimeConfig;

exports.default = () => {
  return runtimeConfig;
};

function setConfig(configValue) {
  runtimeConfig = configValue;
}

exports.setConfig = setConfig;

/***/ }),

/***/ "zmvN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = void 0;

var _url = __webpack_require__("QmWs");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _isDynamic = __webpack_require__("/jkW");

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

var _router = __webpack_require__("elyg");

function hasRel(rel, link) {
  try {
    link = document.createElement('link');
    return link.relList.supports(rel);
  } catch (_unused) {}
}

var relPrefetch = hasRel('preload') && !hasRel('prefetch') ? // https://caniuse.com/#feat=link-rel-preload
// macOS and iOS (Safari does not support prefetch)
'preload' : // https://caniuse.com/#feat=link-rel-prefetch
// IE 11, Edge 12+, nearly all evergreen
'prefetch';
var hasNoModule = ('noModule' in document.createElement('script'));
/** @param {string} route */

function normalizeRoute(route) {
  if (route[0] !== '/') {
    throw new Error("Route name should start with a \"/\", got \"" + route + "\"");
  }

  route = route.replace(/\/index$/, '/');
  if (route === '/') return route;
  return route.replace(/\/$/, '');
}

function appendLink(href, rel, as) {
  return new Promise((res, rej, link) => {
    link = document.createElement('link');
    link.crossOrigin = undefined;
    link.href = href;
    link.rel = rel;
    if (as) link.as = as;
    link.onload = res;
    link.onerror = rej;
    document.head.appendChild(link);
  });
}

class PageLoader {
  constructor(buildId, assetPrefix) {
    this.buildId = buildId;
    this.assetPrefix = assetPrefix;
    this.pageCache = {};
    this.pageRegisterEvents = (0, _mitt.default)();
    this.loadingRoutes = {};

    if (true) {
      this.promisedBuildManifest = new Promise(resolve => {
        if (window.__BUILD_MANIFEST) {
          resolve(window.__BUILD_MANIFEST);
        } else {
          window.__BUILD_MANIFEST_CB = () => {
            resolve(window.__BUILD_MANIFEST);
          };
        }
      });
    }
    /** @type {Promise<Set<string>>} */


    this.promisedSsgManifest = new Promise(resolve => {
      if (window.__SSG_MANIFEST) {
        resolve(window.__SSG_MANIFEST);
      } else {
        window.__SSG_MANIFEST_CB = () => {
          resolve(window.__SSG_MANIFEST);
        };
      }
    });
  } // Returns a promise for the dependencies for a particular route


  getDependencies(route) {
    return this.promisedBuildManifest.then(man => man[route] && man[route].map(url => this.assetPrefix + "/_next/" + encodeURI(url)) || []);
  }
  /**
  * @param {string} href the route href (file-system path)
  * @param {string} asPath the URL as shown in browser (virtual path); used for dynamic routes
  */


  getDataHref(href, asPath) {
    var getHrefForSlug =
    /** @type string */
    path => {
      path = (0, _router.delBasePath)(path);
      return this.assetPrefix + "/_next/data/" + this.buildId + (path === '/' ? '/index' : path) + ".json";
    };

    var {
      pathname: hrefPathname,
      query
    } = (0, _url.parse)(href, true);
    var {
      pathname: asPathname
    } = (0, _url.parse)(asPath);
    var route = normalizeRoute(hrefPathname);
    var isDynamic = (0, _isDynamic.isDynamicRoute)(route),
        interpolatedRoute;

    if (isDynamic) {
      var dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
      var dynamicGroups = dynamicRegex.groups;
      var dynamicMatches = // Try to match the dynamic route against the asPath
      (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) || // Fall back to reading the values from the href
      // TODO: should this take priority; also need to change in the router.
      query;
      interpolatedRoute = route;

      if (!Object.keys(dynamicGroups).every(param => {
        var value = dynamicMatches[param];
        var repeat = dynamicGroups[param].repeat; // support single-level catch-all
        // TODO: more robust handling for user-error (passing `/`)

        if (repeat && !Array.isArray(value)) value = [value];
        return param in dynamicMatches && ( // Interpolate group into data URL if present
        interpolatedRoute = interpolatedRoute.replace("[" + (repeat ? '...' : '') + param + "]", repeat ? value.map(encodeURIComponent).join('/') : encodeURIComponent(value)));
      })) {
        interpolatedRoute = ''; // did not satisfy all requirements
        // n.b. We ignore this error because we handle warning for this case in
        // development in the `<Link>` component directly.
      }
    }

    return isDynamic ? interpolatedRoute && getHrefForSlug(interpolatedRoute) : getHrefForSlug(route);
  }
  /**
  * @param {string} href the route href (file-system path)
  * @param {string} asPath the URL as shown in browser (virtual path); used for dynamic routes
  */


  prefetchData(href, asPath) {
    var {
      pathname: hrefPathname
    } = (0, _url.parse)(href, true);
    var route = normalizeRoute(hrefPathname);
    return this.promisedSsgManifest.then((s, _dataHref) => // Check if the route requires a data file
    s.has(route) && ( // Try to generate data href, noop when falsy
    _dataHref = this.getDataHref(href, asPath)) && // noop when data has already been prefetched (dedupe)
    !document.querySelector("link[rel=\"" + relPrefetch + "\"][href^=\"" + _dataHref + "\"]") && // Inject the `<link rel=prefetch>` tag for above computed `href`.
    appendLink(_dataHref, relPrefetch, 'fetch'));
  }

  loadPage(route) {
    return this.loadPageScript(route);
  }

  loadPageScript(route) {
    route = normalizeRoute(route);
    return new Promise((resolve, reject) => {
      var fire = _ref => {
        var {
          error,
          page,
          mod
        } = _ref;
        this.pageRegisterEvents.off(route, fire);
        delete this.loadingRoutes[route];

        if (error) {
          reject(error);
        } else {
          resolve({
            page,
            mod
          });
        }
      }; // If there's a cached version of the page, let's use it.


      var cachedPage = this.pageCache[route];

      if (cachedPage) {
        var {
          error,
          page,
          mod
        } = cachedPage;
        error ? reject(error) : resolve({
          page,
          mod
        });
        return;
      } // Register a listener to get the page


      this.pageRegisterEvents.on(route, fire); // If the page is loading via SSR, we need to wait for it
      // rather downloading it again.

      if (document.querySelector("script[data-next-page=\"" + route + "\"]")) {
        return;
      }

      if (!this.loadingRoutes[route]) {
        this.loadingRoutes[route] = true;

        if (true) {
          this.getDependencies(route).then(deps => {
            deps.forEach(d => {
              if (/\.js$/.test(d) && !document.querySelector("script[src^=\"" + d + "\"]")) {
                this.loadScript(d, route, false);
              }

              if (/\.css$/.test(d) && !document.querySelector("link[rel=stylesheet][href^=\"" + d + "\"]")) {
                appendLink(d, 'stylesheet').catch(() => {// FIXME: handle failure
                  // Right now, this is needed to prevent an unhandled rejection.
                });
              }
            });
            this.loadRoute(route);
          });
        } else {}
      }
    });
  }

  loadRoute(route) {
    route = normalizeRoute(route);
    var scriptRoute = route === '/' ? '/index.js' : route + ".js";
    var url = this.assetPrefix + "/_next/static/" + encodeURIComponent(this.buildId) + "/pages" + encodeURI(scriptRoute);
    this.loadScript(url, route, true);
  }

  loadScript(url, route, isPage) {
    var script = document.createElement('script');

    if (false) {}

    script.crossOrigin = undefined;
    script.src = url;

    script.onerror = () => {
      var error = new Error("Error loading script " + url);
      error.code = 'PAGE_LOAD_ERROR';
      this.pageRegisterEvents.emit(route, {
        error
      });
    };

    document.body.appendChild(script);
  } // This method if called by the route code.


  registerPage(route, regFn) {
    var register = () => {
      try {
        var mod = regFn();
        var pageData = {
          page: mod.default || mod,
          mod
        };
        this.pageCache[route] = pageData;
        this.pageRegisterEvents.emit(route, pageData);
      } catch (error) {
        this.pageCache[route] = {
          error
        };
        this.pageRegisterEvents.emit(route, {
          error
        });
      }
    };

    if (false) { var check; }

    register();
  }
  /**
  * @param {string} route
  * @param {boolean} [isDependency]
  */


  prefetch(route, isDependency) {
    // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
    // License: Apache 2.0
    var cn;

    if (cn = navigator.connection) {
      // Don't prefetch if using 2G or if Save-Data is enabled.
      if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
    }
    /** @type {string} */


    var url;

    if (isDependency) {
      url = route;
    } else {
      route = normalizeRoute(route);
      var scriptRoute = (route === '/' ? '/index' : route) + ".js";

      if (false) {}

      url = this.assetPrefix + "/_next/static/" + encodeURIComponent(this.buildId) + "/pages" + encodeURI(scriptRoute);
    }

    return Promise.all(document.querySelector("link[rel=\"" + relPrefetch + "\"][href^=\"" + url + "\"], script[data-next-page=\"" + route + "\"]") ? [] : [appendLink(url, relPrefetch, url.match(/\.css$/) ? 'style' : 'script'),  true && !isDependency && this.getDependencies(route).then(urls => Promise.all(urls.map(url => this.prefetch(url, true))))]).then( // do not return any data
    () => {}, // swallow prefetch errors
    () => {});
  }

}

exports.default = PageLoader;

/***/ })

},[["BMP1",0,1,4]]]);