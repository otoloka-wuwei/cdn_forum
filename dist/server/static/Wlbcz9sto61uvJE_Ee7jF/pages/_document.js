module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Y7Z2");


/***/ }),

/***/ "2+G7":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ }),

/***/ "8cZr":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("VDXt")


/***/ }),

/***/ "AArq":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAAByCAIAAAAAvxIqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFGmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0MzUyLCAyMDIwLzAxLzMwLTE1OjUwOjM4ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjAtMDUtMTFUMTQ6NDI6MzArMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIwLTA1LTExVDE0OjQ5OjQ0KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTA1LTExVDE0OjQ5OjQ0KzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRhZTFjZDQ5LTNhYzEt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"

/***/ }),

/***/ "AXZJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}

/***/ }),

/***/ "Oezq":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/favicon-b85437f6837353758e4c3c7976a0497a.ico";

/***/ }),

/***/ "UJjI":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/constants.js");

/***/ }),

/***/ "VDXt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.middleware = middleware;
exports.NextScript = exports.Main = exports.Head = exports.Html = exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _server = _interopRequireDefault(__webpack_require__("2+G7"));

var _constants = __webpack_require__("UJjI");

var _documentContext = __webpack_require__("nMq/");

var _utils = __webpack_require__("kYf9");

exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;

var _fid = _interopRequireDefault(__webpack_require__("sK2T"));

var _utils2 = __webpack_require__("ri/Y");

var _htmlescape = __webpack_require__("AXZJ");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

async function middleware({
  req,
  res
}) {}

function dedupe(bundles) {
  const files = new Set();
  const kept = [];

  for (const bundle of bundles) {
    if (files.has(bundle.file)) continue;
    files.add(bundle.file);
    kept.push(bundle);
  }

  return kept;
}

function getOptionalModernScriptVariant(path) {
  if (false) {}

  return path;
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


class Document extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhancers =  false ? undefined : [];

    const enhanceApp = App => {
      for (const enhancer of enhancers) {
        App = enhancer(App);
      }

      return props => _react.default.createElement(App, props);
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server.default)(), ...( false ? undefined : [])];
    return {
      html,
      head,
      styles
    };
  }

  static renderDocument(Document, props) {
    return _react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: {
        _documentProps: props,
        // In dev we invalidate the cache by appending a timestamp to the resource URL.
        // This is a workaround to fix https://github.com/zeit/next.js/issues/5860
        // TODO: remove this workaround when https://bugs.webkit.org/show_bug.cgi?id=187726 is fixed.
        _devOnlyInvalidateCacheQueryString: false ? undefined : ''
      }
    }, _react.default.createElement(Document, props));
  }

  render() {
    return _react.default.createElement(Html, null, _react.default.createElement(Head, null), _react.default.createElement("body", null, _react.default.createElement(Main, null), _react.default.createElement(NextScript, null)));
  }

}

exports.default = Document;
Document.headTagsMiddleware =  false ? undefined : () => [];
Document.bodyTagsMiddleware =  false ? undefined : () => [];
Document.htmlPropsMiddleware =  false ? undefined : () => [];

class Html extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  render() {
    const {
      inAmpMode,
      htmlProps
    } = this.context._documentProps;
    return _react.default.createElement("html", Object.assign({}, htmlProps, this.props, {
      amp: inAmpMode ? '' : undefined,
      "data-ampdevmode": inAmpMode && false ? '' : undefined
    }));
  }

}

exports.Html = Html;
Html.contextType = _documentContext.DocumentContext;
Html.propTypes = {
  children: _propTypes.default.node.isRequired
};

class Head extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getCssLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const cssFiles = files && files.length ? files.filter(f => /\.css$/.test(f)) : [];
    const cssLinkElements = [];
    cssFiles.forEach(file => {
      cssLinkElements.push(_react.default.createElement("link", {
        key: `${file}-preload`,
        nonce: this.props.nonce,
        rel: "preload",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "style",
        crossOrigin: this.props.crossOrigin || undefined
      }), _react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined
      }));
    });
    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      // `dynamicImports` will contain both `.js` and `.module.js` when the
      // feature is enabled. This clause will filter down to the modern
      // variants only.
      if (!bundle.file.endsWith(getOptionalModernScriptVariant('.js'))) {
        return null;
      }

      return _react.default.createElement("link", {
        rel: "preload",
        key: bundle.file,
        href: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const preloadFiles = files && files.length ? files.filter(file => {
      // `dynamicImports` will contain both `.js` and `.module.js` when
      // the feature is enabled. This clause will filter down to the
      // modern variants only.
      return file.endsWith(getOptionalModernScriptVariant('.js'));
    }) : [];
    return preloadFiles.length === 0 ? null : preloadFiles.map(file => {
      return _react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "preload",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "script",
        crossOrigin: this.props.crossOrigin || undefined
      });
    });
  }

  getFidPolyfill() {
    if (true) {
      return null;
    }

    return _react.default.createElement("script", {
      dangerouslySetInnerHTML: {
        __html: `(${_fid.default})(addEventListener, removeEventListener)`
      }
    });
  }

  render() {
    const {
      styles,
      ampPath,
      inAmpMode,
      assetPrefix,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS
    } = this.context._documentProps;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const {
      page,
      buildId
    } = __NEXT_DATA__;
    let {
      head
    } = this.context._documentProps;
    let children = this.props.children; // show a warning if Head contains <title> (only in development)

    if (false) {}

    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://err.sh/next.js/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => el && el.props && el.props.dangerouslySetInnerHTML && el.props.dangerouslySetInnerHTML.__html; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.map(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    return _react.default.createElement("head", this.props, this.context._documentProps.isDevelopment && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), _react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, _react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children, head, _react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && _react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
    }), _react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && _react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), _react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), _react.default.createElement("noscript", null, _react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), _react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && _react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && _react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }), this.getCssLinks(), !disableRuntimeJS && _react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages/_app.js`)) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), !disableRuntimeJS && page !== '/_error' && _react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`)) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), !disableRuntimeJS && this.getPreloadDynamicChunks(), !disableRuntimeJS && this.getPreloadMainLinks(), this.context._documentProps.isDevelopment && // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), !disableRuntimeJS && this.getFidPolyfill(), _react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};

class Main extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  render() {
    const {
      inAmpMode,
      html
    } = this.context._documentProps;
    if (inAmpMode) return _constants.AMP_RENDER_TARGET;
    return _react.default.createElement("div", {
      id: "__next",
      dangerouslySetInnerHTML: {
        __html: html
      }
    });
  }

}

exports.Main = Main;
Main.contextType = _documentContext.DocumentContext;

class NextScript extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      let modernProps = {};

      if (false) {}

      if (!/\.js$/.test(bundle.file) || files.includes(bundle.file)) return null;
      return _react.default.createElement("script", Object.assign({
        async: true,
        key: bundle.file,
        src: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getScripts() {
    const {
      assetPrefix,
      files,
      lowPriorityFiles
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const normalScripts = files === null || files === void 0 ? void 0 : files.filter(file => file.endsWith('.js'));
    const lowPriorityScripts = lowPriorityFiles === null || lowPriorityFiles === void 0 ? void 0 : lowPriorityFiles.filter(file => file.endsWith('.js'));
    return [...normalScripts, ...lowPriorityScripts].map(file => {
      let modernProps = {};

      if (false) {}

      return _react.default.createElement("script", Object.assign({
        key: file,
        src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        async: true,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getPolyfillScripts() {
    // polyfills.js has to be rendered as nomodule without async
    // It also has to be the first script to load
    const {
      assetPrefix,
      polyfillFiles
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !/\.module\.js$/.test(polyfill)).map(polyfill => _react.default.createElement("script", {
      key: polyfill,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      noModule: true,
      src: `${assetPrefix}/_next/${polyfill}${_devOnlyInvalidateCacheQueryString}`
    }));
  }

  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://err.sh/zeit/next.js/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      staticMarkup,
      assetPrefix,
      inAmpMode,
      devFiles,
      __NEXT_DATA__,
      bodyTags,
      unstable_runtimeJS
    } = this.context._documentProps;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;

    if (inAmpMode) {
      if (true) {
        return null;
      }

      const devFiles = [_constants.CLIENT_STATIC_FILES_RUNTIME_AMP, _constants.CLIENT_STATIC_FILES_RUNTIME_WEBPACK];
      return _react.default.createElement(_react.default.Fragment, null, staticMarkup ? null : _react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context._documentProps)
        },
        "data-ampdevmode": true
      }), devFiles ? devFiles.map(file => _react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })) : null, _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));
    }

    const {
      page,
      buildId
    } = __NEXT_DATA__;

    if (false) {}

    const pageScript = [_react.default.createElement("script", Object.assign({
      async: true,
      "data-next-page": page,
      key: page,
      src: assetPrefix + encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`) + _devOnlyInvalidateCacheQueryString,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && false];
    const appScript = [_react.default.createElement("script", Object.assign({
      async: true,
      "data-next-page": "/_app",
      src: assetPrefix + `/_next/static/${buildId}/pages/_app.js` + _devOnlyInvalidateCacheQueryString,
      key: "_app",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && false];
    return _react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && devFiles ? devFiles.map(file => !file.match(/\.js\.map/) && _react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, staticMarkup ? null : _react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context._documentProps)
      }
    }),  false ? undefined : null, !disableRuntimeJS && this.getPolyfillScripts(), !disableRuntimeJS && appScript, !disableRuntimeJS && page !== '/_error' && pageScript, disableRuntimeJS || staticMarkup ? null : this.getDynamicChunks(), disableRuntimeJS || staticMarkup ? null : this.getScripts(), _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath ? ampPath : `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

function getPageFile(page, buildId) {
  if (page === '/') {
    return buildId ? `/index.${buildId}.js` : '/index.js';
  }

  return buildId ? `${page}.${buildId}.js` : `${page}.js`;
}

/***/ }),

/***/ "Y7Z2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8cZr");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_favicon_ico__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Oezq");
/* harmony import */ var _static_favicon_ico__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_favicon_ico__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("AArq");
/* harmony import */ var _static_logo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_logo_png__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\pages\\_document.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class CustomDocument extends next_document__WEBPACK_IMPORTED_MODULE_1___default.a {
  render() {
    return __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["Html"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 7
      }
    }, __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["Head"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }
    }, __jsx("meta", {
      content: "yes",
      name: "apple-mobile-web-app-capable",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 11
      }
    }), __jsx("meta", {
      content: "yes",
      name: "apple-touch-fullscreen",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "apple-mobile-web-app-title",
      content: "OTOLOKA",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "mobile-web-app-title",
      content: "OTOLOKA",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }
    }), __jsx("link", {
      rel: "apple-touch-icon",
      href: _static_logo_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "apple-mobile-web-app-capable",
      content: "yes",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }
    }), __jsx("style", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }
    }, `#mainbody.hidden {
              opacity: 0;
            }`), __jsx("link", {
      rel: "icon",
      href: _static_favicon_ico__WEBPACK_IMPORTED_MODULE_2___default.a,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }
    }), __jsx("link", {
      href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
      rel: "stylesheet",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }
    }), __jsx("script", {
      dangerouslySetInnerHTML: {
        __html: `
              (function () {

                  document.addEventListener('DOMContentLoaded', function () {

                      var html = document.documentElement;

                      var windowWidth = html.clientWidth;

                      // 设计稿宽度360px

                      var remSize = windowWidth * 100 / 360;

                      html.style.fontSize = remSize + 'px';

                      window.remSize = remSize;

                  }, false);

              })();`
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }
    })), __jsx("body", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }
    }, __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["Main"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }
    }), __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["NextScript"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CustomDocument);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "nMq/":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/document-context.js");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "ri/Y":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/utils.js");

/***/ }),

/***/ "sK2T":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/fid.js");

/***/ })

/******/ });