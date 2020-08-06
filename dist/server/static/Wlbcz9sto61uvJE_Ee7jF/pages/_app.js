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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


/***/ }),

/***/ "4von":
/***/ (function(module, exports) {

module.exports = {
	"toast-box-component": "toast-box-component",
	"hidden": "hidden",
	"toast-box-container": "toast-box-container",
	"toast-box-icon": "toast-box-icon",
	"toast-box-content": "toast-box-content",
	"toast-box-title": "toast-box-title",
	"toast-box-toast": "toast-box-toast",
	"toast-box-close": "toast-box-close"
};

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "8fAO":
/***/ (function(module, exports) {

module.exports = {
	"icon-font": "icon-font",
	"uniE900": "uniE900",
	"uniE901": "uniE901",
	"uniE902": "uniE902",
	"uniE903": "uniE903",
	"uniE904": "uniE904",
	"uniE905": "uniE905",
	"uniE906": "uniE906",
	"uniE907": "uniE907",
	"uniE908": "uniE908",
	"uniE909": "uniE909",
	"uniE90A": "uniE90A",
	"uniE90B": "uniE90B",
	"uniE90C": "uniE90C",
	"uniE90D": "uniE90D",
	"uniE90E": "uniE90E",
	"uniE90F": "uniE90F",
	"uniE910": "uniE910",
	"uniE911": "uniE911",
	"uniE912": "uniE912",
	"uniE913": "uniE913",
	"__next": "__next",
	"lock": "lock",
	"mainbody": "mainbody",
	"am-modal-button-group-h": "am-modal-button-group-h",
	"am-modal-button": "am-modal-button",
	"am-tabs-tab-bar-wrap": "am-tabs-tab-bar-wrap",
	"am-tabs-default-bar-tab-active": "am-tabs-default-bar-tab-active",
	"am-tabs-default-bar-tab": "am-tabs-default-bar-tab",
	"am-tabs-default-bar-underline": "am-tabs-default-bar-underline",
	"am-modal-body": "am-modal-body",
	"am-modal-button-group-v": "am-modal-button-group-v"
};

/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

var appGetInitialProps = function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;

  try {
    return Promise.resolve((0, _utils.loadGetInitialProps)(Component, ctx)).then(function (pageProps) {
      return {
        pageProps
      };
    });
  } catch (e) {
    return Promise.reject(e);
  }
};

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return _react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "J7OV":
/***/ (function(module, exports) {

module.exports = require("mobx-react-lite/batchingForReactDom");

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "VBo9":
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),

/***/ "Vgaj":
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),

/***/ "bmtP":
/***/ (function(module, exports) {



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./app.module.scss
var app_module = __webpack_require__("bmtP");
var app_module_default = /*#__PURE__*/__webpack_require__.n(app_module);

// EXTERNAL MODULE: ./index.scss
var index = __webpack_require__("8fAO");

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "mobx"
var external_mobx_ = __webpack_require__("VBo9");

// EXTERNAL MODULE: external "mobx-react"
var external_mobx_react_ = __webpack_require__("sGQ9");

// EXTERNAL MODULE: ./http/HttpClient.ts
var HttpClient = __webpack_require__("hueg");

// CONCATENATED MODULE: ./store/index.ts
var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }




const isServer = true;
Object(external_mobx_react_["useStaticRendering"])(isServer);
const emptyUser = {
  userId: -1,
  nickname: '',
  gender: -1,
  headPortrait: '',
  email: ''
};
let store_Store = (_class = (_temp = class Store {
  constructor(initialState = {}) {
    _initializerDefineProperty(this, "user", _descriptor, this);

    _initializerDefineProperty(this, "messageBoxType", _descriptor2, this);

    _initializerDefineProperty(this, "messageBoxTitle", _descriptor3, this);

    _initializerDefineProperty(this, "messageBoxMessage", _descriptor4, this);

    _initializerDefineProperty(this, "isMessageBoxShow", _descriptor5, this);

    _initializerDefineProperty(this, "toastBoxType", _descriptor6, this);

    _initializerDefineProperty(this, "toastBoxMessage", _descriptor7, this);

    _initializerDefineProperty(this, "isToastBoxShow", _descriptor8, this);

    if (initialState) {
      Object.keys(initialState).filter(key => typeof initialState[key] !== 'undefined' && typeof this[key] !== 'undefined').forEach(key => this[key] = initialState[key]);
    }
  }

  showLoginModal() {
    if (window.ReactNativeWebView) {
      try {
        window.ReactNativeWebView.postMessage(JSON.stringify({
          action: 'gotoLogin'
        }));
      } catch (e) {}
    }
  }

  getUserInfo() {
    if (localStorage.getItem('token')) {
      this.user = emptyUser;
      HttpClient["a" /* default */].get('/web/user/index.json').then(resp => {
        const {
          user,
          googleInfo,
          facebookInfo
        } = resp.data;

        if (typeof googleInfo !== 'undefined') {
          user.googleEmail = googleInfo.email;
          user.googleName = googleInfo.displayName;
        }

        if (typeof facebookInfo !== 'undefined') {
          user.facebookEmail = facebookInfo.email;
          user.facebookName = facebookInfo.name;
        }

        return Promise.resolve(user);
      }).then(user => this.user = user).catch(error => {
        console.error(error);
        this.user = null;
        localStorage.removeItem('token');
      });
    } else {
      this.user = null;
    }
  }

  showMessageBox(type, title, message) {
    this.messageBoxType = type;
    this.messageBoxTitle = title;
    this.messageBoxMessage = message;
    this.isMessageBoxShow = true;
  }

  hideMessageBox() {
    this.isMessageBoxShow = false;
  }

  showToastBox(type, message) {
    this.toastBoxType = type;
    this.toastBoxMessage = message;
    this.isToastBoxShow = true;
  }

  hideToastBox() {
    this.isToastBoxShow = false;
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "user", [external_mobx_["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "messageBoxType", [external_mobx_["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'success';
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "messageBoxTitle", [external_mobx_["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return '';
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "messageBoxMessage", [external_mobx_["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return '';
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "isMessageBoxShow", [external_mobx_["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "toastBoxType", [external_mobx_["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "toastBoxMessage", [external_mobx_["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return '';
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "isToastBoxShow", [external_mobx_["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _applyDecoratedDescriptor(_class.prototype, "showLoginModal", [external_mobx_["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "showLoginModal"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getUserInfo", [external_mobx_["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "getUserInfo"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "showMessageBox", [external_mobx_["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "showMessageBox"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "hideMessageBox", [external_mobx_["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "hideMessageBox"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "showToastBox", [external_mobx_["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "showToastBox"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "hideToastBox", [external_mobx_["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "hideToastBox"), _class.prototype)), _class);
let store_store = null;
function initializeStore(initialState = {}) {
  if (isServer) {
    return new store_Store(initialState);
  }

  if (store_store === null) {
    store_store = new store_Store(initialState);
  }

  return store_store;
}
/* harmony default export */ var store_0 = (store_Store);
// EXTERNAL MODULE: external "mobx-react-lite/batchingForReactDom"
var batchingForReactDom_ = __webpack_require__("J7OV");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./components/message-box/index.scss
var message_box = __webpack_require__("fTJe");

// CONCATENATED MODULE: ./components/message-box/index.tsx
var _jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\components\\message-box\\index.tsx";
var __jsx = external_react_default.a.createElement;




const MessageBox = ({
  type,
  title,
  message
}) => {
  const {
    store
  } = Object(external_react_["useContext"])(external_mobx_react_["MobXProviderContext"]);
  const {
    0: hidden,
    1: setHidden
  } = Object(external_react_["useState"])(true);
  Object(external_react_["useEffect"])(() => {
    setTimeout(() => {
      setHidden(false);
    }, 20);
    const timer = setTimeout(() => {
      handleCloseLoginModal();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleCloseLoginModal = () => {
    setHidden(true);
  };

  const handleCloseAnimationEnd = () => {
    if (hidden === true) {
      store.hideMessageBox();
    }
  };

  return __jsx("div", {
    className: `message-box-component ${hidden ? 'hidden' : ''}`,
    onTransitionEnd: handleCloseAnimationEnd,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: `message-box-container ${type}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "message-box-icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: `icon-font ${type === 'success' ? 'uniE90E' : type === 'error' ? 'uniE90D' : 'uniE914'}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "message-box-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "message-box-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, title), __jsx("div", {
    className: "message-box-message",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, message)), __jsx("div", {
    className: "message-box-close",
    onClick: handleCloseLoginModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "icon-font uniE907",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ var components_message_box = (MessageBox);
// EXTERNAL MODULE: external "rxjs"
var external_rxjs_ = __webpack_require__("Vgaj");

// CONCATENATED MODULE: ./subject/visibility.ts

const VisibilityChangeSubject = new external_rxjs_["Subject"]();

// EXTERNAL MODULE: ./components/toast-box/index.scss
var toast_box = __webpack_require__("4von");

// CONCATENATED MODULE: ./components/toast-box/index.tsx
var toast_box_jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\components\\toast-box\\index.tsx";
var toast_box_jsx = external_react_default.a.createElement;




const ToastBox = ({
  type,
  message
}) => {
  const {
    store
  } = Object(external_react_["useContext"])(external_mobx_react_["MobXProviderContext"]);
  const {
    0: hidden,
    1: setHidden
  } = Object(external_react_["useState"])(true);
  const {
    0: typeStr,
    1: setTypeStr
  } = Object(external_react_["useState"])('');
  Object(external_react_["useEffect"])(() => {
    setTimeout(() => {
      setHidden(false);
    }, 20);

    switch (type) {
      case 'success':
        setTypeStr('uniE90E');
        break;

      case 'error':
        setTypeStr('uniE914');
        break;

      default:
        setTypeStr('uniE913');
        break;
    }

    const timer = setTimeout(() => {
      handleCloseModal();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleCloseModal = () => {
    setHidden(true);
  };

  const handleCloseAnimationEnd = () => {
    if (hidden === true) {
      store.hideToastBox();
    }
  };

  return toast_box_jsx("div", {
    className: `toast-box-component ${hidden ? 'hidden' : ''}`,
    onTransitionEnd: handleCloseAnimationEnd,
    __self: undefined,
    __source: {
      fileName: toast_box_jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, toast_box_jsx("div", {
    className: `toast-box-container ${type}`,
    __self: undefined,
    __source: {
      fileName: toast_box_jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, toast_box_jsx("div", {
    className: "toast-box-icon",
    __self: undefined,
    __source: {
      fileName: toast_box_jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, toast_box_jsx("span", {
    className: `icon-font ${typeStr}`,
    __self: undefined,
    __source: {
      fileName: toast_box_jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  })), toast_box_jsx("div", {
    className: "toast-box-content",
    __self: undefined,
    __source: {
      fileName: toast_box_jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, toast_box_jsx("div", {
    className: "toast-box-message",
    __self: undefined,
    __source: {
      fileName: toast_box_jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, message)), toast_box_jsx("div", {
    className: "toast-box-close",
    onClick: handleCloseModal,
    __self: undefined,
    __source: {
      fileName: toast_box_jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, toast_box_jsx("span", {
    className: "icon-font uniE907",
    __self: undefined,
    __source: {
      fileName: toast_box_jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ var components_toast_box = (ToastBox);
// EXTERNAL MODULE: ./util/bridge.ts
var bridge = __webpack_require__("ctMP");

// CONCATENATED MODULE: ./pages/_app.tsx
var _app_class,
    _app_temp,
    _app_jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\pages\\_app.tsx";

var _app_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }














let _app_CustomApp = Object(external_mobx_react_["observer"])(_app_class = (_app_temp = class CustomApp extends app_default.a {
  constructor(props) {
    super(props);
    this.state = {
      store: new store_0()
    };
    this.hidden = '';
    this.visibilityChange = '';
  }

  componentDidMount() {
    if (false) {}
  }

  handleVisibilityChange() {
    VisibilityChangeSubject.next(document[this.hidden]);
  }

  componentDidUpdate() {}

  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return _app_jsx(external_react_default.a.Fragment, null, _app_jsx(head_default.a, {
      __self: this,
      __source: {
        fileName: _app_jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }
    }, _app_jsx("title", {
      __self: this,
      __source: {
        fileName: _app_jsxFileName,
        lineNumber: 79,
        columnNumber: 11
      }
    }, "OTOLOKA"), _app_jsx("meta", {
      name: "viewport",
      content: "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover",
      __self: this,
      __source: {
        fileName: _app_jsxFileName,
        lineNumber: 80,
        columnNumber: 11
      }
    })), _app_jsx(external_mobx_react_["Provider"], {
      store: this.state.store,
      __self: this,
      __source: {
        fileName: _app_jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }
    }, _app_jsx("main", {
      id: "mainbody",
      className: app_module_default.a['main'],
      __self: this,
      __source: {
        fileName: _app_jsxFileName,
        lineNumber: 86,
        columnNumber: 11
      }
    }, _app_jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _app_jsxFileName,
        lineNumber: 87,
        columnNumber: 13
      }
    }))), this.state.store.isMessageBoxShow ? _app_jsx(components_message_box, {
      type: this.state.store.messageBoxType,
      title: this.state.store.messageBoxTitle,
      message: this.state.store.messageBoxMessage,
      __self: this,
      __source: {
        fileName: _app_jsxFileName,
        lineNumber: 90,
        columnNumber: 13
      }
    }) : null, this.state.store.isToastBoxShow ? _app_jsx(components_toast_box, {
      type: this.state.store.toastBoxType,
      message: this.state.store.toastBoxMessage,
      __self: this,
      __source: {
        fileName: _app_jsxFileName,
        lineNumber: 97,
        columnNumber: 13
      }
    }) : null));
  }

}, _app_temp)) || _app_class;

/* harmony default export */ var _app = __webpack_exports__["default"] = (_app_CustomApp);

/***/ }),

/***/ "ctMP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const timeoutMap = {};

const postMessageToApp = function postMessageToApp({
  action,
  data = {},
  timeout = 1000
}) {
  try {
    return Promise.resolve(new Promise((resolve, reject) => {
      const callBackName = 'ReactNativeWebviewCallBack' + ~~(Math.random() * 100000) + '' + ~~(Math.random() * 100000) + '' + new Date().getTime();
      const postData = Object.assign({}, data, {
        callback: callBackName
      });
      timeoutMap[callBackName] = false;
      const timer = setTimeout(() => {
        timeoutMap[callBackName] = true;
        reject('post message to app timeout,please check action');
      }, timeout);

      window[callBackName] = result => {
        window[callBackName] = null;
        clearTimeout(timer);

        if (timeoutMap[callBackName] === true) {
          return;
        }

        resolve(result);
      };

      window.ReactNativeWebView.postMessage(JSON.stringify({
        action,
        data: postData
      }));
    }));
  } catch (e) {
    return Promise.reject(e);
  }
};

/* harmony default export */ __webpack_exports__["a"] = (postMessageToApp);

/***/ }),

/***/ "fTJe":
/***/ (function(module, exports) {

module.exports = {
	"message-box-component": "message-box-component",
	"hidden": "hidden",
	"message-box-container": "message-box-container",
	"success": "success",
	"error": "error",
	"warning": "warning",
	"message-box-icon": "message-box-icon",
	"uniE90E": "uniE90E",
	"uniE90D": "uniE90D",
	"uniE914": "uniE914",
	"message-box-content": "message-box-content",
	"message-box-title": "message-box-title",
	"message-box-message": "message-box-message",
	"message-box-close": "message-box-close"
};

/***/ }),

/***/ "hueg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const get = function (url, body = {}) {
  try {
    const bodyArr = [];
    const token = localStorage.getItem('token');

    if (token) {
      body.token = token;
    }

    Object.keys(body).forEach(key => {
      bodyArr.push(key + '=' + body[key].toString());
    });

    if (bodyArr.length > 0) {
      url = `${url}?${bodyArr.join('&')}`;
    }

    return request(url, 'GET');
  } catch (e) {
    return Promise.reject(e);
  }
};

const post = function (url, body = {}) {
  return request(url, 'POST', body);
};

const del = function (url, body = {}) {
  return request(url, 'DELETE', body);
};

const patch = function (url, body = {}) {
  return request(url, 'PATCH', body);
};

const request = function (url, method, body = {}, headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}) {
  try {
    if (url.startsWith('/')) {
      const token = localStorage.getItem('token');

      if (token) {
        body.token = token;
      }
    }

    return Promise.resolve(new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        console.log(url);
        reject(new Error('request is timeout'));
      }, 30 * 1000);
      fetch(url, {
        body: method === 'GET' ? null : JSON.stringify(body),
        headers,
        method
      }).then(resp => {
        clearTimeout(timeoutId);
        return Promise.resolve(resp.json());
      }).then(resp => {
        if (resp.code !== 200 && resp.code !== 9990) {
          return Promise.reject({
            code: resp.code,
            message: resp.resultMsg,
            data: resp.data
          });
        }

        resolve(resp);
      }).catch(error => {
        clearTimeout(timeoutId);
        reject(error);
      });
    }));
  } catch (e) {
    return Promise.reject(e);
  }
};

const HttpClient = {
  get,
  post,
  del,
  patch,
  request
};
/* harmony default export */ __webpack_exports__["a"] = (HttpClient);

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "sGQ9":
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });