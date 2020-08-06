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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+0Sc":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTYgLTkwKSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYgOTApIj48cGF0aCBkPSJNMTYsMEExNiwxNiwwLDEsMSwwLDE2LDE2LDE2LDAsMCwxLDE2LDBaIiBmaWxsPSIjZWZlZGVkIi8+PC9nPjxwYXRoIGQ9Ik0xMDYuNjMsNzkuNmE3LjA4Miw3LjA4MiwwLDEsMC03LjgxMiwwLDExLjQxLDExLjQxLDAsMCwwLTcuNDI1LDEwLjY5M2gxLjg4OGE5LjQ0Myw5LjQ0MywwLDEsMSwxOC44ODUsMGgxLjg4OEExMS40MSwxMS40MSwwLDAsMCwxMDYuNjMsNzkuNlptLTMuOTA2LS43MTNhNS4yMjgsNS4yMjgsMCwxLDEsNS4xOTMtNS4yMjhBNS4yMTYsNS4yMTYsMCwwLDEsMTAyLjcyNCw3OC44ODZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzAuODY4IDI4LjU1OCkiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+"

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ "0ssD":
/***/ (function(module, exports) {

module.exports = require("socks5-https-client/lib/Agent");

/***/ }),

/***/ "1nAM":
/***/ (function(module, exports) {

module.exports = require("swiper");

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
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

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4vsW":
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Dkwd");


/***/ }),

/***/ "7FHF":
/***/ (function(module, exports) {

module.exports = require("better-scroll");

/***/ }),

/***/ "7GlH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZR05");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_images_avatar_default_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("+0Sc");
/* harmony import */ var _static_images_avatar_default_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_images_avatar_default_svg__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\components\\user-avatar\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const UserAvatar = ({
  src = _static_images_avatar_default_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
  size,
  title,
  alt,
  isAuthor,
  small
}) => {
  const {
    0: backgroundImage,
    1: setBackgroundImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  return __jsx("span", {
    className: "avator-component",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: "avatar-container",
    style: {
      backgroundImage: backgroundImage ? `url(${backgroundImage})` : null,
      width: `${size}rem`,
      height: `${size}rem`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx("img", {
    title: title,
    alt: alt,
    style: {
      display: 'none'
    },
    src: src,
    onError: () => {
      setBackgroundImage(_static_images_avatar_default_svg__WEBPACK_IMPORTED_MODULE_2___default.a);
    },
    onLoad: () => {
      setBackgroundImage(src);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  })), isAuthor ? __jsx("div", {
    style: {
      width: `${size}rem`,
      top: `${size / 2 + 0.04}rem`
    },
    className: `avator-author ${small ? 'small' : ''}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 18
    }
  }, "Penulis") : null);
};

/* harmony default export */ __webpack_exports__["a"] = (UserAvatar);

/***/ }),

/***/ "7NBQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return formatCategoryList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatArticleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formatArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return formatMessageList; });
/* unused harmony export formatDate */
/* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Wsj/");
/* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fecha__WEBPACK_IMPORTED_MODULE_0__);


const formatCategoryList = (categoryList, originalName) => {
  if (!originalName) {
    originalName = categoryList[0].originalName;
  }

  return categoryList.map((item, index) => {
    if (item) {
      item.value = item.originalName;
      item.label = item.showName;

      if (item.value === originalName) {
        item.active = true;
      } else {
        item.active = false;
      }

      item.underlineLeft = 0;
    }

    return item;
  });
};

const minTimeSpan = 60 * 1000;
const hourTimeSpan = 60 * 60 * 1000;
const dayTimeSpan = 24 * hourTimeSpan;
const sevenDaysTimeSpan = 7 * dayTimeSpan;

const formatArticleList = list => {
  const now = new Date();
  return list.map((item, index) => {
    item.timespanText = 'Baru saja';
    const createTime = fecha__WEBPACK_IMPORTED_MODULE_0___default.a.parse(item.createTime, 'YYYY-MM-DD HH:mm:ss');
    const timespan = now.getTime() - createTime.getTime();

    if (timespan >= minTimeSpan && timespan < hourTimeSpan) {
      const minute = Math.floor(timespan / minTimeSpan);
      item.timespanText = `${minute} menit yang lalu`;
    } else if (timespan >= hourTimeSpan && timespan < dayTimeSpan) {
      const hours = Math.floor(timespan / hourTimeSpan);
      item.timespanText = `${hours} jam yang lalu`;
    } else if (timespan >= dayTimeSpan && timespan < sevenDaysTimeSpan) {
      const days = Math.floor(timespan / dayTimeSpan);
      item.timespanText = `${days} hari yang lalu`;
    } else if (timespan >= sevenDaysTimeSpan) {
      item.timespanText = fecha__WEBPACK_IMPORTED_MODULE_0___default.a.format(createTime, 'D MMM YYYY, HH:mm').replace('Aug', 'Ags').replace('Oct', 'Okt').replace('Dec', 'Des');
    }

    item.userId = +item.userId;

    if (+item.supportNums > 999) {
      item.supportNums = '999+';
    }

    if (+item.shareNums > 999) {
      item.shareNums = '999+';
    }

    if (+item.messageNums > 999) {
      item.messageNums = '999+';
    }

    const imageList = item.urls;

    if (imageList) {
      imageList.map(imgitem => {
        if (imgitem.type === 2) {
          imgitem.videoActive = false;
        }

        return imgitem;
      });
    }

    return item;
  });
};

const formatArticle = item => {
  const now = new Date();
  item.timespanText = 'Baru saja';
  const createTime = fecha__WEBPACK_IMPORTED_MODULE_0___default.a.parse(item.createTime, 'YYYY-MM-DD HH:mm:ss');
  const timespan = now.getTime() - createTime.getTime();

  if (timespan >= minTimeSpan && timespan < hourTimeSpan) {
    const minute = Math.floor(timespan / minTimeSpan);
    item.timespanText = `${minute} menit yang lalu`;
  } else if (timespan >= hourTimeSpan && timespan < dayTimeSpan) {
    const hours = Math.floor(timespan / hourTimeSpan);
    item.timespanText = `${hours} jam yang lalu`;
  } else if (timespan >= dayTimeSpan && timespan < sevenDaysTimeSpan) {
    const days = Math.floor(timespan / dayTimeSpan);
    item.timespanText = `${days} hari yang lalu`;
  } else if (timespan >= sevenDaysTimeSpan) {
    item.timespanText = fecha__WEBPACK_IMPORTED_MODULE_0___default.a.format(createTime, 'D MMM YYYY, HH:mm').replace('Aug', 'Ags').replace('Oct', 'Okt').replace('Dec', 'Des');
  }

  item.userId = item.userId;

  if (+item.supportNums > 999) {
    item.supportNums = '999+';
  }

  if (+item.shareNums > 999) {
    item.shareNums = '999+';
  }

  if (+item.messageNums > 999) {
    item.messageNums = '999+';
  }

  return item;
};

const formatDate = dateStr => {
  const arr = dateStr.split('-');

  if (arr[1].length === 1) {
    arr[1] = `0${arr[1]}`;
  }

  if (arr[1].length === 2) {
    arr[2] = `0${arr[2]}`;
  }

  return `${arr[0]}-${arr[1]}-${arr[2]}`;
};

const formatMessageList = list => {
  const now = new Date();
  return list.map(item => {
    return item;
  });
};



/***/ }),

/***/ "842X":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("o3Ei");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\components\\video-loading\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const VideoLoading = () => {
  return __jsx("div", {
    className: "video-loading-component",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "video-loading-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "child loading-red",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "child loading-yellow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "child loading-green",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (VideoLoading);

/***/ }),

/***/ "Ab82":
/***/ (function(module, exports) {

module.exports = {
	"button": "n5XQM-EeAnlFGWPrmW-yY",
	"button-wrapper": "_3D4b1YEo1WDaEy6SaObb9E",
	"disabled": "_1rPJBIUK97cOVUzXHLVlyB",
	"button-shadow": "_1xgawgoSF8xMzb4bbpStyD"
};

/***/ }),

/***/ "DitX":
/***/ (function(module, exports) {

module.exports = {
	"video-component": "video-component",
	"single-videos": "single-videos",
	"loading-container": "loading-container",
	"video-background": "video-background",
	"icon-font": "icon-font"
};

/***/ }),

/***/ "Dkwd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./pages/index/index.scss
var pages_index = __webpack_require__("ajvM");

// EXTERNAL MODULE: ./components/post-button/index.scss
var post_button = __webpack_require__("QYNh");

// EXTERNAL MODULE: ./components/ripple/index.scss
var ripple = __webpack_require__("eEbD");

// CONCATENATED MODULE: ./components/ripple/index.tsx
var _jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\components\\ripple\\index.tsx";
var __jsx = external_react_default.a.createElement;



const Ripple = ({}) => {
  const {
    0: rippleSize,
    1: setRippleSize
  } = Object(external_react_["useState"])(0);
  const {
    0: rippleX,
    1: setRippleX
  } = Object(external_react_["useState"])(0);
  const {
    0: rippleY,
    1: setRippleY
  } = Object(external_react_["useState"])(0);
  const {
    0: isVisible,
    1: setIsVisible
  } = Object(external_react_["useState"])(false);
  const {
    0: scale,
    1: setScale
  } = Object(external_react_["useState"])('');

  const handleRippleAnimation = event => {
    const target = event.target;
    const rect = target.getBoundingClientRect();
    const boundHeight = rect.height;
    const boundWidth = rect.width;
    const rippleSize = Math.sqrt(boundWidth * boundWidth + boundWidth * boundWidth) * 2 + 2;
    setRippleSize(rippleSize);
    let x = 0;
    let y = 0;
    const clientX = event.touches[0].clientX;
    const clientY = event.touches[0].clientY;
    x = Math.round(clientX - rect.left);
    y = Math.round(clientY - rect.top);
    setRippleX(x);
    setRippleY(y);
    setIsVisible(true);
    setScale('scale(0.0001, 0.0001)');
    requestAnimationFrame(() => {
      setScale('');
    });
  };

  const handleRippleTouchEnd = event => {
    if (event.nativeEvent && event.nativeEvent.detail !== 2) {
      requestAnimationFrame(() => {
        setIsVisible(false);
      });
    }
  };

  return __jsx("div", {
    className: "ripple-component",
    onTouchStart: handleRippleAnimation,
    onTouchEnd: handleRippleTouchEnd,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: `article-ripple ${isVisible ? 'is-visible' : ''} ${!scale ? 'is-animating' : ''}`,
    style: {
      width: rippleSize,
      height: rippleSize,
      transform: 'translate(-50%, -50%) translate(' + rippleX + 'px, ' + rippleY + 'px) ' + scale
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ var components_ripple = (Ripple);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "mobx-react"
var external_mobx_react_ = __webpack_require__("sGQ9");

// CONCATENATED MODULE: ./components/post-button/index.tsx
var post_button_jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\components\\post-button\\index.tsx";
var post_button_jsx = external_react_default.a.createElement;






const PostButton = ({
  systemCategoryId
}) => {
  const router = Object(router_["useRouter"])();
  const {
    store
  } = Object(external_react_["useContext"])(external_mobx_react_["MobXProviderContext"]);
  const {
    user
  } = Object(external_mobx_react_["useObserver"])(() => ({
    user: store.user
  }));
  const {
    0: isApp,
    1: setIsApp
  } = Object(external_react_["useState"])(true);
  Object(external_react_["useEffect"])(() => {
    const isApp = !!window.ReactNativeWebView;
    setIsApp(isApp);
  }, []);

  const handelPublish = () => {
    if (!user || user.userId <= 0) {
      store.showLoginModal();
    } else {
      if (isApp === false) {
        router.push('/publish?systemCategoryId=' + systemCategoryId);
      } else {
        window.ReactNativeWebView.postMessage(JSON.stringify({
          action: 'postNewThreads',
          data: {
            systemCategoryId
          }
        }));
      }
    }
  };

  return post_button_jsx("div", {
    className: "post-button-component",
    onClick: handelPublish,
    __self: undefined,
    __source: {
      fileName: post_button_jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, post_button_jsx("span", {
    className: "icon-font uniE90C",
    __self: undefined,
    __source: {
      fileName: post_button_jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }), post_button_jsx(components_ripple, {
    __self: undefined,
    __source: {
      fileName: post_button_jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ var components_post_button = (PostButton);
// EXTERNAL MODULE: ./components/category-list/index.scss
var category_list = __webpack_require__("uzIF");

// EXTERNAL MODULE: external "better-scroll"
var external_better_scroll_ = __webpack_require__("7FHF");
var external_better_scroll_default = /*#__PURE__*/__webpack_require__.n(external_better_scroll_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/category-list/index.tsx
var category_list_jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\components\\category-list\\index.tsx";
var category_list_jsx = external_react_default.a.createElement;





const CategoryList = ({
  categoryList
}) => {
  const listElement = Object(external_react_["useRef"])();
  const underlineElement = Object(external_react_["useRef"])();
  const {
    0: underLineLeft,
    1: setUnderLineLeft
  } = Object(external_react_["useState"])(0);
  const {
    0: isLoaded,
    1: setIsLoaded
  } = Object(external_react_["useState"])(false);
  const scrollInstance = Object(external_react_["useRef"])(null);
  Object(external_react_["useEffect"])(() => {
    return () => {
      if (!!scrollInstance.current) {
        scrollInstance.current.destroy();
        scrollInstance.current = null;
      }
    };
  }, []);
  Object(external_react_["useEffect"])(() => {
    if (scrollInstance.current === null) {
      if (categoryList.length > 0) {
        let categoryItemIndex = -1;
        let flag = false;
        const categoryListElement = document.querySelectorAll('.category-list-component .category-list-item .category-item-underline');
        categoryListElement.forEach((item, index) => {
          const categoryItem = categoryList[index];
          categoryItem.underlineLeft = item.getBoundingClientRect().x;

          if (categoryItem.active === true) {
            setUnderLineLeft(categoryItem.underlineLeft);
            flag = true;
            categoryItemIndex = index;
          }
        });
        scrollInstance.current = new external_better_scroll_default.a('#category-list-component', {
          probeType: 0,
          bounce: false,
          bounceTime: 0,
          pullDownRefresh: false,
          pullUpLoad: false,
          observeDOM: false,
          useTransition: false,
          click: true,
          scrollX: true,
          scrollY: false
        });

        if (categoryItemIndex > 0) {
          scrollInstance.current.scrollToElement('.category-list-item.active', 0, -20);
        }

        if (flag === false) {
          setUnderLineLeft(-10000);
        }

        setTimeout(() => {
          setIsLoaded(true);
        });
      }
    } else {
      setTimeout(() => {
        const findItem = categoryList.find(item => item.active);
        setUnderLineLeft(findItem.underlineLeft);
        let categoryItemIndex = findItem.id;

        if (categoryItemIndex > 0) {
          scrollInstance.current.scrollToElement('.category-list-item.active', 0, -20);
        }

        scrollInstance.current.refresh();
      });
    }
  }, [categoryList]);
  return category_list_jsx("div", {
    className: `category-list-component ${isLoaded ? 'loaded' : ''}`,
    ref: listElement,
    id: "category-list-component",
    __self: undefined,
    __source: {
      fileName: category_list_jsxFileName,
      lineNumber: 101,
      columnNumber: 5
    }
  }, category_list_jsx("div", {
    className: "category-list-container",
    __self: undefined,
    __source: {
      fileName: category_list_jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }
  }, category_list_jsx("ul", {
    className: "category-list",
    __self: undefined,
    __source: {
      fileName: category_list_jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, categoryList.map((item, index) => category_list_jsx("li", {
    className: `category-list-item ${item.active ? 'active' : ''}`,
    key: item.value,
    __self: undefined,
    __source: {
      fileName: category_list_jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, category_list_jsx(link_default.a, {
    href: `/forum/${item.value}`,
    __self: undefined,
    __source: {
      fileName: category_list_jsxFileName,
      lineNumber: 113,
      columnNumber: 15
    }
  }, category_list_jsx("a", {
    __self: undefined,
    __source: {
      fileName: category_list_jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }
  }, category_list_jsx("span", {
    className: "hidden-label",
    __self: undefined,
    __source: {
      fileName: category_list_jsxFileName,
      lineNumber: 115,
      columnNumber: 19
    }
  }, item.label), category_list_jsx("span", {
    className: "display-label",
    __self: undefined,
    __source: {
      fileName: category_list_jsxFileName,
      lineNumber: 116,
      columnNumber: 19
    }
  }, item.label), category_list_jsx("div", {
    className: "category-item-underline",
    __self: undefined,
    __source: {
      fileName: category_list_jsxFileName,
      lineNumber: 117,
      columnNumber: 19
    }
  })))))), category_list_jsx("div", {
    className: "underline",
    ref: underlineElement,
    style: {
      transform: `translateX(${underLineLeft}px)`
    },
    __self: undefined,
    __source: {
      fileName: category_list_jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ var components_category_list = (CategoryList);
// EXTERNAL MODULE: ./components/banner/index.scss
var banner = __webpack_require__("QX0k");

// EXTERNAL MODULE: external "swiper"
var external_swiper_ = __webpack_require__("1nAM");
var external_swiper_default = /*#__PURE__*/__webpack_require__.n(external_swiper_);

// CONCATENATED MODULE: ./components/banner/index.tsx
var banner_jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\components\\banner\\index.tsx";
var banner_jsx = external_react_default.a.createElement;




const Banner = ({
  list
}) => {
  const {
    0: isLoaded,
    1: setIsLoaded
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    setIsLoaded(typeof list[0] !== 'undefined');
  }, [list]);
  return isLoaded ? banner_jsx(SwiperComponent, {
    list: list,
    __self: undefined,
    __source: {
      fileName: banner_jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }) : banner_jsx("div", {
    className: "banner-placeholder",
    __self: undefined,
    __source: {
      fileName: banner_jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, banner_jsx("div", {
    className: "placeholder-1",
    __self: undefined,
    __source: {
      fileName: banner_jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }), banner_jsx("div", {
    className: "placeholder-2",
    __self: undefined,
    __source: {
      fileName: banner_jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, banner_jsx("div", {
    className: "placeholder-point-active",
    __self: undefined,
    __source: {
      fileName: banner_jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }), banner_jsx("div", {
    className: "placeholder-point",
    __self: undefined,
    __source: {
      fileName: banner_jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }), banner_jsx("div", {
    className: "placeholder-point",
    __self: undefined,
    __source: {
      fileName: banner_jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }), banner_jsx("div", {
    className: "placeholder-point",
    __self: undefined,
    __source: {
      fileName: banner_jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  })));
};

const SwiperComponent = ({
  list
}) => {
  const {
    0: id
  } = Object(external_react_["useState"])('banner' + (Math.random() * 1000000).toFixed(0));
  Object(external_react_["useLayoutEffect"])(() => {
    const mySwiper = new external_swiper_default.a(`#${id} .swiper-container`, {
      speed: 1000,
      pagination: {
        el: `#${id} .swiper-pagination`
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      loop: true,
      navigation: {
        prevEl: `#${id} .swiper-button.button-prev`,
        nextEl: `#${id} .swiper-button.button-next`
      }
    });
    return () => {
      mySwiper.destroy(true, true);
    };
  }, [id]);
  return banner_jsx("div", {
    className: "banner-component",
    id: id,
    __self: undefined,
    __source: {
      fileName: banner_jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, banner_jsx("div", {
    className: "swiper-container",
    __self: undefined,
    __source: {
      fileName: banner_jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, banner_jsx("div", {
    className: "swiper-wrapper",
    __self: undefined,
    __source: {
      fileName: banner_jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, list.map(item => banner_jsx("div", {
    key: item.id,
    className: "swiper-slide",
    __self: undefined,
    __source: {
      fileName: banner_jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, banner_jsx("a", {
    className: "swiper-slide-container",
    href: item.bannerLink,
    __self: undefined,
    __source: {
      fileName: banner_jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }, banner_jsx("img", {
    src: item.bannerUrl,
    alt: "banner-1",
    __self: undefined,
    __source: {
      fileName: banner_jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }))))), banner_jsx("div", {
    className: "swiper-pagination",
    __self: undefined,
    __source: {
      fileName: banner_jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ var components_banner = (Banner);
// EXTERNAL MODULE: ./components/threads-item/index.scss
var threads_item = __webpack_require__("Eebc");

// EXTERNAL MODULE: ./components/user-avatar/index.tsx
var user_avatar = __webpack_require__("7GlH");

// EXTERNAL MODULE: ./static/images/like.svg
var like = __webpack_require__("szVv");
var like_default = /*#__PURE__*/__webpack_require__.n(like);

// EXTERNAL MODULE: ./static/images/liked.svg
var liked = __webpack_require__("Rjtp");
var liked_default = /*#__PURE__*/__webpack_require__.n(liked);

// EXTERNAL MODULE: ./components/threads-item-image-list/index.scss
var threads_item_image_list = __webpack_require__("FWIw");

// EXTERNAL MODULE: ./static/images/pleaceholder.svg
var pleaceholder = __webpack_require__("aV0h");
var pleaceholder_default = /*#__PURE__*/__webpack_require__.n(pleaceholder);

// EXTERNAL MODULE: ./static/images/big-pleaceholder.svg
var big_pleaceholder = __webpack_require__("Pdzu");
var big_pleaceholder_default = /*#__PURE__*/__webpack_require__.n(big_pleaceholder);

// EXTERNAL MODULE: ./components/video/index.tsx
var video = __webpack_require__("HvvK");

// CONCATENATED MODULE: ./components/threads-item-image-list/index.tsx
var threads_item_image_list_jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\components\\threads-item-image-list\\index.tsx";
var threads_item_image_list_jsx = external_react_default.a.createElement;






const ThreadsItemImageList = ({
  data
}) => {
  const calcArticleItem = data => {
    if (data) {
      const imageList = data.urls;
      const len = imageList.length;

      if (len <= 0) {
        return null;
      } else if (len === 1) {
        return threads_item_image_list_jsx(ArticleItemSingleImage, {
          data: data,
          __self: undefined,
          __source: {
            fileName: threads_item_image_list_jsxFileName,
            lineNumber: 20,
            columnNumber: 16
          }
        });
      } else if (len > 1 && len <= 3) {
        return threads_item_image_list_jsx(ArticleItemSomeImage, {
          data: data,
          __self: undefined,
          __source: {
            fileName: threads_item_image_list_jsxFileName,
            lineNumber: 22,
            columnNumber: 16
          }
        });
      } else if (len > 3) {
        return threads_item_image_list_jsx(ArticleItemMuchImage, {
          data: data,
          __self: undefined,
          __source: {
            fileName: threads_item_image_list_jsxFileName,
            lineNumber: 24,
            columnNumber: 16
          }
        });
      }
    } else {
      return null;
    }
  };

  const ArticleItemSingleImage = ({
    data
  }) => {
    const {
      0: thumbnail,
      1: setThumbnail
    } = Object(external_react_["useState"])(data ? data.urls[0].url || big_pleaceholder_default.a : big_pleaceholder_default.a);
    const type = data.urls[0].type;
    const item = data.urls[0];
    const {
      0: videoHieght,
      1: setVideoHeight
    } = Object(external_react_["useState"])(0);
    Object(external_react_["useEffect"])(() => {
      if (!!data) {
        const {
          width,
          height
        } = data.urls[0];

        if (type === 2) {
          const {
            remSize
          } = window;
          setVideoHeight(height / width * remSize * 3.28);
        }
      }
    }, [data]);
    return threads_item_image_list_jsx("div", {
      className: "article-item-single-image",
      __self: undefined,
      __source: {
        fileName: threads_item_image_list_jsxFileName,
        lineNumber: 53,
        columnNumber: 7
      }
    }, type === 1 ? threads_item_image_list_jsx("div", {
      className: "single-span",
      __self: undefined,
      __source: {
        fileName: threads_item_image_list_jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }
    }, threads_item_image_list_jsx("img", {
      className: "thumbnail",
      src: thumbnail,
      onError: () => setThumbnail(big_pleaceholder_default.a),
      __self: undefined,
      __source: {
        fileName: threads_item_image_list_jsxFileName,
        lineNumber: 56,
        columnNumber: 13
      }
    })) : threads_item_image_list_jsx("div", {
      className: "video-container",
      __self: undefined,
      __source: {
        fileName: threads_item_image_list_jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }
    }, threads_item_image_list_jsx(video["a" /* default */], {
      width: "100%",
      height: videoHieght,
      data: data.urls[0],
      __self: undefined,
      __source: {
        fileName: threads_item_image_list_jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }
    })));
  };

  const ArticleItemSomeImage = ({
    data
  }) => {
    const imageList = data.urls;
    return threads_item_image_list_jsx("ul", {
      className: "article-item-some-image",
      __self: undefined,
      __source: {
        fileName: threads_item_image_list_jsxFileName,
        lineNumber: 78,
        columnNumber: 7
      }
    }, imageList.map((item, index) => threads_item_image_list_jsx("li", {
      className: "some-item",
      key: index,
      __self: undefined,
      __source: {
        fileName: threads_item_image_list_jsxFileName,
        lineNumber: 80,
        columnNumber: 11
      }
    }, item.type === 1 ? threads_item_image_list_jsx("div", {
      className: "some-item-span",
      __self: undefined,
      __source: {
        fileName: threads_item_image_list_jsxFileName,
        lineNumber: 82,
        columnNumber: 15
      }
    }, threads_item_image_list_jsx("img", {
      className: "thumbnail",
      src: item.url,
      onError: () => item.url = pleaceholder_default.a,
      __self: undefined,
      __source: {
        fileName: threads_item_image_list_jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }
    })) : threads_item_image_list_jsx("div", {
      className: "some-item-span videos",
      __self: undefined,
      __source: {
        fileName: threads_item_image_list_jsxFileName,
        lineNumber: 90,
        columnNumber: 15
      }
    }, item.headUrl.includes('#t=1') ? threads_item_image_list_jsx(video["a" /* default */], {
      data: item,
      __self: undefined,
      __source: {
        fileName: threads_item_image_list_jsxFileName,
        lineNumber: 92,
        columnNumber: 19
      }
    }) : threads_item_image_list_jsx(external_react_default.a.Fragment, null, threads_item_image_list_jsx("img", {
      className: "thumbnail",
      src: item.headUrl,
      onError: () => {
        item.headUrl = pleaceholder_default.a;
      },
      __self: undefined,
      __source: {
        fileName: threads_item_image_list_jsxFileName,
        lineNumber: 95,
        columnNumber: 21
      }
    }), threads_item_image_list_jsx("i", {
      className: "video-background",
      __self: undefined,
      __source: {
        fileName: threads_item_image_list_jsxFileName,
        lineNumber: 102,
        columnNumber: 21
      }
    }, threads_item_image_list_jsx("i", {
      className: "icon-font uniE909",
      __self: undefined,
      __source: {
        fileName: threads_item_image_list_jsxFileName,
        lineNumber: 103,
        columnNumber: 23
      }
    })))))));
  };

  const ArticleItemMuchImage = ({
    data
  }) => {
    const imageList = data.urls;
    const leftCount = imageList.length - 3;
    return threads_item_image_list_jsx("ul", {
      className: "article-item-much-image",
      __self: undefined,
      __source: {
        fileName: threads_item_image_list_jsxFileName,
        lineNumber: 119,
        columnNumber: 7
      }
    }, imageList.map((item, index) => index < 3 ? threads_item_image_list_jsx("li", {
      className: "much-item",
      key: index,
      __self: undefined,
      __source: {
        fileName: threads_item_image_list_jsxFileName,
        lineNumber: 122,
        columnNumber: 13
      }
    }, item.type === 1 ? threads_item_image_list_jsx("div", {
      className: "much-item-span",
      __self: undefined,
      __source: {
        fileName: threads_item_image_list_jsxFileName,
        lineNumber: 124,
        columnNumber: 17
      }
    }, threads_item_image_list_jsx("img", {
      className: "thumbnail",
      src: item.url,
      onError: () => item.url = pleaceholder_default.a,
      __self: undefined,
      __source: {
        fileName: threads_item_image_list_jsxFileName,
        lineNumber: 125,
        columnNumber: 19
      }
    })) : threads_item_image_list_jsx("div", {
      className: "much-item-span videos",
      __self: undefined,
      __source: {
        fileName: threads_item_image_list_jsxFileName,
        lineNumber: 132,
        columnNumber: 17
      }
    }, item.headUrl.includes('#t=1') ? threads_item_image_list_jsx(video["a" /* default */], {
      data: item,
      __self: undefined,
      __source: {
        fileName: threads_item_image_list_jsxFileName,
        lineNumber: 134,
        columnNumber: 21
      }
    }) : threads_item_image_list_jsx(external_react_default.a.Fragment, null, threads_item_image_list_jsx("img", {
      className: "thumbnail",
      src: item.headUrl,
      onError: () => item.headUrl = pleaceholder_default.a,
      __self: undefined,
      __source: {
        fileName: threads_item_image_list_jsxFileName,
        lineNumber: 137,
        columnNumber: 23
      }
    }), threads_item_image_list_jsx("i", {
      className: "video-background",
      __self: undefined,
      __source: {
        fileName: threads_item_image_list_jsxFileName,
        lineNumber: 142,
        columnNumber: 23
      }
    }, threads_item_image_list_jsx("i", {
      className: "icon-font uniE909",
      __self: undefined,
      __source: {
        fileName: threads_item_image_list_jsxFileName,
        lineNumber: 143,
        columnNumber: 25
      }
    }))))) : null), threads_item_image_list_jsx("div", {
      className: "much-count",
      __self: undefined,
      __source: {
        fileName: threads_item_image_list_jsxFileName,
        lineNumber: 152,
        columnNumber: 9
      }
    }, "+", leftCount));
  };

  return threads_item_image_list_jsx("ul", {
    className: "threads-item-image-list",
    __self: undefined,
    __source: {
      fileName: threads_item_image_list_jsxFileName,
      lineNumber: 158,
      columnNumber: 5
    }
  }, threads_item_image_list_jsx("li", {
    className: "threads-item-image-item",
    __self: undefined,
    __source: {
      fileName: threads_item_image_list_jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }
  }, calcArticleItem(data)));
};

/* harmony default export */ var components_threads_item_image_list = (ThreadsItemImageList);
// EXTERNAL MODULE: ./services/detail.ts
var detail = __webpack_require__("OyYC");

// EXTERNAL MODULE: ./hooks/messageBoxHooks.ts
var messageBoxHooks = __webpack_require__("ODBD");

// CONCATENATED MODULE: ./components/threads-item/index.tsx
var threads_item_jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\components\\threads-item\\index.tsx";
var threads_item_jsx = external_react_default.a.createElement;











const ThreadsItem = ({
  data,
  onRemove
}) => {
  const isLikeSubmit = Object(external_react_["useRef"])(false);
  const {
    0: supportNums,
    1: setSupportNums
  } = Object(external_react_["useState"])('0');
  const {
    0: shareNums,
    1: setShareNums
  } = Object(external_react_["useState"])('0');
  const {
    0: supportFlag,
    1: setSupportFlag
  } = Object(external_react_["useState"])(0);
  const {
    store
  } = Object(external_react_["useContext"])(external_mobx_react_["MobXProviderContext"]);
  const {
    user
  } = Object(external_mobx_react_["useObserver"])(() => ({
    user: store.user
  }));
  const service = new detail["a" /* default */]();
  const showMessageBox = Object(messageBoxHooks["a" /* default */])();
  const router = Object(router_["useRouter"])();
  const {
    0: isApp,
    1: setIsApp
  } = Object(external_react_["useState"])(true);
  Object(external_react_["useEffect"])(() => {
    const isApp = !!window.ReactNativeWebView;
    setIsApp(isApp);

    if (data) {
      setSupportNums(data.supportNums);
      setShareNums(data.shareNums);
      setSupportFlag(data.supportFlag);
    }
  }, []);

  const handelLikeIt = event => {
    event.stopPropagation();

    if (!user || user.userId <= 0 || !localStorage.getItem('token')) {
      store.showLoginModal();
    } else {
      if (isLikeSubmit.current === false) {
        isLikeSubmit.current = true;
        service.updateArticleLike(data.articleId).then(resp => {
          isLikeSubmit.current = false;

          if (supportFlag === 1) {
            setSupportFlag(0);
            countSupportNum(-1);
          } else {
            setSupportFlag(1);
            countSupportNum(1);
          }
        }).catch(error => {
          console.error(error);
          showMessageBox('error', 'error', 'Like gagal!');
        });
      }
    }
  };

  const handelComment = () => {
    if (isApp) {
      window.ReactNativeWebView.postMessage(JSON.stringify({
        action: 'gotoThreadsDetail',
        data: {
          threadsId: data.articleId,
          scrollToComment: true
        }
      }));
    } else {
      router.push(`/forum/threads/p/${data.articleId}?scrollToComment=true`);
    }
  };

  const handelShareIt = event => {
    event.stopPropagation();

    if (isApp) {
      window.ReactNativeWebView.postMessage(JSON.stringify({
        action: 'share',
        data: {
          articleId: data.articleId
        }
      }));
      service.updateArticleShareNums(data.articleId).then(resp => {
        console.log('分享成功');
      }).catch(error => {
        console.error(error);
        showMessageBox('error', 'error', 'Gagal dibagikan!');
      });
    }

    countShareNum(1);
  };

  const countSupportNum = plus => {
    if (supportNums !== '999+') {
      let num = Number(supportNums) + plus;

      if (num > 999) {
        num = '999+';
      }

      setSupportNums(num);
    }
  };

  const countShareNum = plus => {
    if (shareNums !== '999+') {
      let num = Number(shareNums) + plus;

      if (num > 999) {
        num = '999+';
      }

      setShareNums(num);
    }
  };

  const handleClickRemoveButton = event => {
    event.stopPropagation();

    if (typeof onRemove === 'function') {
      onRemove(data);
    }
  };

  return data ? threads_item_jsx("div", {
    className: "threads-item-container",
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 146,
      columnNumber: 5
    }
  }, threads_item_jsx("div", {
    className: `threads-item-component`,
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 147,
      columnNumber: 7
    }
  }, threads_item_jsx("div", {
    className: "threads-item-content",
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 148,
      columnNumber: 9
    }
  }, threads_item_jsx("div", {
    className: "message-header",
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 149,
      columnNumber: 11
    }
  }, threads_item_jsx("div", {
    className: "message-avatar",
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }
  }, threads_item_jsx(user_avatar["a" /* default */], {
    size: 0.36,
    src: data.userHeadUrl,
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 151,
      columnNumber: 15
    }
  })), threads_item_jsx("div", {
    className: "message-user",
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 153,
      columnNumber: 13
    }
  }, threads_item_jsx("div", {
    className: "message-user-name",
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 154,
      columnNumber: 15
    }
  }, data.userName), threads_item_jsx("div", {
    className: "message-release-time",
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 155,
      columnNumber: 15
    }
  }, data.timespanText)), user && user.userId === data.userId ? threads_item_jsx("div", {
    className: "delate-btn",
    onClick: handleClickRemoveButton,
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 158,
      columnNumber: 15
    }
  }, threads_item_jsx("span", {
    className: "icon-font uniE902",
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 159,
      columnNumber: 17
    }
  })) : null), threads_item_jsx("div", {
    className: "body-parent",
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 163,
      columnNumber: 11
    }
  }, threads_item_jsx("div", {
    className: `message-body-child ${data.status === -1 ? 'failed' : ''}`,
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 164,
      columnNumber: 13
    }
  }, threads_item_jsx("div", {
    className: "message-body-container",
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 169,
      columnNumber: 15
    }
  }, threads_item_jsx("div", {
    className: "message-body",
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 170,
      columnNumber: 17
    }
  }, data.content)), data.urls ? threads_item_jsx("div", {
    className: "message-image",
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 173,
      columnNumber: 17
    }
  }, threads_item_jsx(components_threads_item_image_list, {
    data: data,
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 174,
      columnNumber: 19
    }
  })) : null)), data.status === -1 || data.status === -2 ? threads_item_jsx("div", {
    className: "publish-failed",
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 180,
      columnNumber: 13
    }
  }, data.status === -2 ? threads_item_jsx("i", {
    className: "failed-container loading",
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 182,
      columnNumber: 17
    }
  }, threads_item_jsx("i", {
    className: "icon-font uniE90A",
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 183,
      columnNumber: 19
    }
  })) : null, data.status === -1 ? threads_item_jsx(external_react_default.a.Fragment, null, threads_item_jsx("i", {
    className: "failed-container",
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 188,
      columnNumber: 19
    }
  }, threads_item_jsx("i", {
    className: "icon-font uniE90A",
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 189,
      columnNumber: 21
    }
  })), threads_item_jsx("div", {
    className: "failed-text",
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 191,
      columnNumber: 19
    }
  }, "Postingan gagal Klik untuk memposting kembali")) : null) : null), threads_item_jsx("ul", {
    className: "message-interaction-list",
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 200,
      columnNumber: 9
    }
  }, threads_item_jsx("li", {
    className: "message-interaction-item",
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 201,
      columnNumber: 11
    }
  }, threads_item_jsx("div", {
    className: "interaction-icon",
    onClick: handelLikeIt,
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 202,
      columnNumber: 13
    }
  }, supportFlag === 1 ? threads_item_jsx("img", {
    src: liked_default.a,
    alt: "like",
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 204,
      columnNumber: 17
    }
  }) : threads_item_jsx("img", {
    src: like_default.a,
    alt: "like",
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 206,
      columnNumber: 17
    }
  })), threads_item_jsx("span", {
    className: "interaction-count",
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 209,
      columnNumber: 13
    }
  }, supportNums)), threads_item_jsx("li", {
    className: "message-interaction-item",
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 211,
      columnNumber: 11
    }
  }, threads_item_jsx("div", {
    className: "interaction-icon ",
    onClick: handelComment,
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 212,
      columnNumber: 13
    }
  }, threads_item_jsx("span", {
    className: "icon-font uniE901",
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 213,
      columnNumber: 15
    }
  })), threads_item_jsx("span", {
    className: "interaction-count",
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 215,
      columnNumber: 13
    }
  }, data.messageNums)), threads_item_jsx("li", {
    className: "message-interaction-item",
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 217,
      columnNumber: 11
    }
  }, threads_item_jsx("div", {
    className: "interaction-icon",
    onClick: handelShareIt,
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 218,
      columnNumber: 13
    }
  }, threads_item_jsx("span", {
    className: "icon-font uniE900",
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 219,
      columnNumber: 15
    }
  })), threads_item_jsx("span", {
    className: "interaction-count",
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 221,
      columnNumber: 13
    }
  }, shareNums))), threads_item_jsx("div", {
    className: "threads-item-underline",
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 224,
      columnNumber: 9
    }
  }))) : threads_item_jsx("div", {
    className: "threads-item-placeholder",
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 228,
      columnNumber: 5
    }
  }, threads_item_jsx("div", {
    className: "threads-header",
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 229,
      columnNumber: 7
    }
  }, threads_item_jsx("div", {
    className: "threads-avatar-placeholder",
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 230,
      columnNumber: 9
    }
  }, " "), threads_item_jsx("div", {
    className: "threads-user-placeholder",
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 231,
      columnNumber: 9
    }
  }, " ")), threads_item_jsx("div", {
    className: "threads-body",
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 233,
      columnNumber: 7
    }
  }, threads_item_jsx("div", {
    className: "body-placeholder",
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 234,
      columnNumber: 9
    }
  }), threads_item_jsx("div", {
    className: "body-placeholder",
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 235,
      columnNumber: 9
    }
  }), threads_item_jsx("div", {
    className: "body-placeholder",
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 236,
      columnNumber: 9
    }
  }), threads_item_jsx("div", {
    className: "body-placeholder",
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 237,
      columnNumber: 9
    }
  })), threads_item_jsx("div", {
    className: "threads-interaction",
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 239,
      columnNumber: 7
    }
  }, threads_item_jsx("div", {
    className: "interaction-placeholder",
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 240,
      columnNumber: 9
    }
  }), threads_item_jsx("div", {
    className: "interaction-placeholder",
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 241,
      columnNumber: 9
    }
  }), threads_item_jsx("div", {
    className: "interaction-placeholder",
    __self: undefined,
    __source: {
      fileName: threads_item_jsxFileName,
      lineNumber: 242,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ var components_threads_item = (ThreadsItem);
// EXTERNAL MODULE: ./http/HttpClient.ts
var HttpClient = __webpack_require__("hueg");

// EXTERNAL MODULE: ./http/HttpClientServer.ts
var HttpClientServer = __webpack_require__("zbXv");

// EXTERNAL MODULE: ./format/index.ts
var format = __webpack_require__("7NBQ");

// CONCATENATED MODULE: ./services/home.ts



const home_pageSize = 15;
class home_HomePageService {
  constructor() {
    this.promiseVersionList = {
      '/web/userarticle/queryArticlesList.json': 0,
      '/web/userarticle/getForumBanner.json': 0
    };
  }

  deleteArticle(articleId) {
    try {
      return Promise.resolve(HttpClient["a" /* default */].post('/web/userarticle/deleteArticle.json', {
        articleId
      }).then(resp => Promise.resolve(resp.data)));
    } catch (e) {
      return Promise.reject(e);
    }
  }

  updateArticleSourceStatus(articleId) {
    try {
      return Promise.resolve(HttpClient["a" /* default */].post('/web/userarticle/updateArticleSourceStatus.json', {
        articleId
      }).then(resp => Promise.resolve(resp)));
    } catch (e) {
      return Promise.reject(e);
    }
  }

  getBannerByCategoryId(forumCategoryId) {
    try {
      const _this = this;

      const url = '/web/userarticle/getForumBanner.json';
      _this.promiseVersionList[url] += 1;
      const currentPromiseVersion = _this.promiseVersionList[url];
      return Promise.resolve(HttpClient["a" /* default */].get(url, {
        forumCategoryId
      }).then(resp => {
        if (currentPromiseVersion === _this.promiseVersionList[url]) {
          return Promise.resolve(resp.data);
        }

        return Promise.reject(new Error('promise version not match'));
      }));
    } catch (e) {
      return Promise.reject(e);
    }
  }

  getArticleList(categoryId, pageNum) {
    try {
      const _this2 = this;

      const url = '/web/userarticle/queryArticlesList.json';
      _this2.promiseVersionList[url] += 1;
      const currentPromiseVersion = _this2.promiseVersionList[url];
      return Promise.resolve(HttpClient["a" /* default */].post(url, {
        systemCategoryId: categoryId,
        pageNum,
        pageSize: home_pageSize
      }).then(resp => {
        if (currentPromiseVersion === _this2.promiseVersionList[url]) {
          return Promise.resolve(resp.data || {
            articleList: [],
            total: 0
          });
        }

        return Promise.reject(new Error('promise version not match'));
      }).then(resp => {
        if (resp.total > 0) {
          resp.articleList = Object(format["b" /* formatArticleList */])(resp.list);
        } else {
          resp.articleList = [];
        }

        return Promise.resolve(resp);
      }).then(resp => Promise.resolve({
        articleList: resp.articleList,
        total: resp.total
      })));
    } catch (e) {
      return Promise.reject(e);
    }
  }

  getForumCategoryList(originalName) {
    try {
      return Promise.resolve(HttpClientServer["a" /* default */].get('/web/userarticle/getForumCategorys.json').then(resp => Promise.resolve(Object(format["c" /* formatCategoryList */])(resp.data, originalName))));
    } catch (e) {
      return Promise.reject(e);
    }
  }

}
// EXTERNAL MODULE: ./subject/dom.ts
var dom = __webpack_require__("f1Q/");

// EXTERNAL MODULE: ./components/empty-article-list/index.module.scss
var index_module = __webpack_require__("g4oL");
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);

// EXTERNAL MODULE: ./components/button/index.module.scss
var button_index_module = __webpack_require__("Ab82");
var button_index_module_default = /*#__PURE__*/__webpack_require__.n(button_index_module);

// CONCATENATED MODULE: ./components/button/index.tsx
var button_jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\components\\button\\index.tsx";
var button_jsx = external_react_default.a.createElement;



const InlineButton = ({
  title,
  onClick,
  style,
  disabled,
  id
}) => {
  const handleClick = event => {
    if (typeof onClick === 'function' && disabled !== true) {
      onClick(event);
    }
  };

  return button_jsx("div", {
    id: id,
    className: `${button_index_module_default.a.button} ${disabled ? button_index_module_default.a['disabled'] : ''}`,
    onClick: handleClick,
    style: style,
    __self: undefined,
    __source: {
      fileName: button_jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, button_jsx("div", {
    className: button_index_module_default.a['button-wrapper'],
    __self: undefined,
    __source: {
      fileName: button_jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, button_jsx("span", {
    __self: undefined,
    __source: {
      fileName: button_jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, title)));
};

/* harmony default export */ var components_button = (InlineButton);
// CONCATENATED MODULE: ./components/empty-article-list/index.tsx
var empty_article_list_jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\components\\empty-article-list\\index.tsx";
var empty_article_list_jsx = external_react_default.a.createElement;






const EmptyArticleList = ({
  systemCategoryId
}) => {
  const router = Object(router_["useRouter"])();
  const {
    store
  } = Object(external_react_["useContext"])(external_mobx_react_["MobXProviderContext"]);
  const {
    user
  } = Object(external_mobx_react_["useObserver"])(() => ({
    user: store.user
  }));
  const {
    0: isApp,
    1: setIsApp
  } = Object(external_react_["useState"])(true);
  Object(external_react_["useEffect"])(() => {
    const isApp = !!window.ReactNativeWebView;
    setIsApp(isApp);
  }, []);

  const handelToPublish = () => {
    if (!user || user.userId <= 0) {
      store.showLoginModal();
    } else {
      if (isApp === false) {
        router.push('/publish?systemCategoryId=' + systemCategoryId);
      } else {
        window.ReactNativeWebView.postMessage(JSON.stringify({
          action: 'postNewThreads',
          data: {
            systemCategoryId
          }
        }));
      }
    }
  };

  return empty_article_list_jsx("div", {
    className: index_module_default.a['empty-article-list'],
    __self: undefined,
    __source: {
      fileName: empty_article_list_jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, empty_article_list_jsx("div", {
    className: index_module_default.a['empty-text'],
    __self: undefined,
    __source: {
      fileName: empty_article_list_jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, "Jadilah orang yang pertama memposting thread ini"), empty_article_list_jsx("div", {
    className: index_module_default.a['empty-button'],
    __self: undefined,
    __source: {
      fileName: empty_article_list_jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, empty_article_list_jsx(components_button, {
    title: "Post",
    style: {
      height: 36,
      width: 200
    },
    onClick: handelToPublish,
    __self: undefined,
    __source: {
      fileName: empty_article_list_jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ var empty_article_list = (EmptyArticleList);
// EXTERNAL MODULE: ./components/scroll-container/index.tsx + 1 modules
var scroll_container = __webpack_require__("wjFm");

// CONCATENATED MODULE: ./hooks/toastBoxHooks.ts



const useToastBox = () => {
  const {
    store
  } = Object(external_react_["useContext"])(external_mobx_react_["MobXProviderContext"]);
  return Object(external_react_["useCallback"])((type, message) => {
    store.showToastBox(type, message);
  }, []);
};

/* harmony default export */ var toastBoxHooks = (useToastBox);
// EXTERNAL MODULE: external "antd-mobile"
var external_antd_mobile_ = __webpack_require__("mBdx");

// EXTERNAL MODULE: ./util/bridge.ts
var bridge = __webpack_require__("ctMP");

// CONCATENATED MODULE: ./pages/index/index.tsx
var index_jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\pages\\index\\index.tsx";
var index_jsx = external_react_default.a.createElement;

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


















const HomePage = ({
  categoryId,
  categoryLit
}) => {
  const userRef = Object(external_react_["useRef"])(null);
  const {
    store
  } = Object(external_react_["useContext"])(external_mobx_react_["MobXProviderContext"]);
  const {
    user
  } = Object(external_mobx_react_["useObserver"])(() => ({
    user: store.user
  }));
  const {
    0: articleList,
    1: setArticleList
  } = Object(external_react_["useState"])(Array.from({
    length: 15
  }));
  const {
    0: bannerList,
    1: setBannerList
  } = Object(external_react_["useState"])(Array.from({
    length: 1
  }));
  const categoryIdRef = Object(external_react_["useRef"])(categoryId);
  const isLoaded = Object(external_react_["useRef"])(false);
  const categoryListRef = Object(external_react_["useRef"])(categoryLit);
  const articleFailListRef = Object(external_react_["useRef"])([]);
  const articleListRef = Object(external_react_["useRef"])(articleList);
  const observerListRef = Object(external_react_["useRef"])([]);
  const bannerListRef = Object(external_react_["useRef"])(bannerList);
  const pageSize = 15;
  const pageNum = Object(external_react_["useRef"])(1);
  const {
    0: canPullUp,
    1: setCanPullUp
  } = Object(external_react_["useState"])(false);
  const service = new home_HomePageService();
  const isMounted = Object(external_react_["useRef"])(false);
  const {
    0: isApp,
    1: setIsApp
  } = Object(external_react_["useState"])(true);
  const showToastBox = toastBoxHooks();
  const showMessageBox = Object(messageBoxHooks["a" /* default */])();
  const router = Object(router_["useRouter"])();
  let observer = null;
  Object(external_react_["useEffect"])(() => {
    //检测列表数据的变化
    dom["a" /* DomChangeSubject */].next();
    observerEle();
  }, [articleList]);
  Object(external_react_["useEffect"])(() => {
    if (!!user && user.userId > -1) {
      userRef.current = user;
      getFailThreadsList();
    } else {
      articleFailListRef.current = [];
    }
  }, [user]);
  Object(external_react_["useEffect"])(() => {
    isMounted.current = true;
    const isApp = !!window.ReactNativeWebView;
    setIsApp(isApp);

    if (isApp) {
      window.threadsAssetsNotExistsCallBack = articleId => {
        // 这里写上重新上传时资源不存在时候的逻辑
        setArticleList(articleList => articleList.filter(item => item.articleId !== articleId));
        dom["a" /* DomChangeSubject */].next();
        showMessageBox('error', 'error', 'Gambar/Video Tidak Ada, Silahkan Pilih Kembali');
        service.updateArticleSourceStatus(articleId);
      };

      window.repostThreadsFailCallBack = (articleId, failMessage) => {
        showToastBox('warn', failMessage);
        setArticleList(articleList => articleList.filter(item => item.articleId !== articleId));
      };

      window.postThreadsFailCallBack = (articleId, failType) => {
        setArticleList(articleList => articleList.map(item => {
          if (item.articleId === articleId) {
            item.status = -1;
            item.failType = failType;
            item.uploadUrls = item.urls;
            articleFailListRef.current.unshift(item);
          }

          return item;
        }));
      };

      window.postThreadsSuccessCallBack = articleId => {
        articleFailListRef.current = articleFailListRef.current.filter(item => item.articleId !== articleId); // setArticleList((articleList) =>

        articleListRef.current.forEach(item => {
          if (item.articleId === articleId) {
            item.status = 2;
          }

          return item;
        }); // );
      };

      window.repostThreadsSuccessCallBack = articleId => {
        const index = articleFailListRef.current.findIndex(item => item.articleId === articleId);
        articleFailListRef.current.splice(index, 1);
        setArticleList(articleList => articleList.map(item => {
          if (item.articleId === articleId) {
            item.status = 2;
          }

          return item;
        }));
      };

      window.updateRepostThreadsStatusCallBack = (articleId, status, value) => {
        const threadsItem = articleFailListRef.current.find(item => item.articleId === articleId);

        if (threadsItem) {
          threadsItem.failType = status;

          if (status === 2) {
            threadsItem.articleId = value;
          } else if (status === 3) {
            threadsItem.uploadUrls = value;
          }
        }
      };

      window.postThreadsCallBack = model => {
        const user = userRef.current;
        const articleItem = {
          userId: user.userId,
          articleId: model.articleId,
          urls: model.urls,
          content: model.content,
          type: model.type,
          status: model.status,
          currentViews: 0,
          supportFlag: 0,
          messageNums: '0',
          shareNums: '0',
          supportNums: '0',
          userName: user.nickname,
          userHeadUrl: user.headPortrait,
          timespanText: 'Baru saja',
          failType: model.failType,
          uploadUrls: model.urls,
          systemCategoryId: model.systemCategoryId
        };
        articleFailListRef.current.unshift(articleItem);

        if (model.systemCategoryId === categoryIdRef.current) {
          setArticleList(articleList => [articleItem, ...articleList]);
          articleListRef.current = [articleItem, ...articleListRef.current];
        } else {
          categoryIdRef.current = model.systemCategoryId;
          categoryListRef.current = categoryListRef.current.map(item => {
            if (item.id === categoryIdRef.current) {
              item.active = true;
            } else {
              item.active = false;
            }

            return item;
          });
          getData().then(() => {
            dom["a" /* DomChangeSubject */].next();
          });
        }
      };
    }

    getData().then(() => {
      isLoaded.current = true;
      dom["a" /* DomChangeSubject */].next();
    });
    return () => {
      if (observer !== null) {
        observerListRef.current.map(item => {
          observer.unobserve(item);
        });
        observer.disconnect();
      }
    };
  }, []);

  const getFailThreadsList = () => {
    const isApp = !!window.ReactNativeWebView;
    (isApp ? Object(bridge["a" /* default */])({
      action: 'getThreadsFailList',
      data: {
        userId: user.userId,
        systemCategoryId: categoryId
      }
    }) : Promise.resolve([])).then(list => {
      if (list.length > 0) {
        const user = userRef.current;
        articleFailListRef.current = list.map(item => {
          return {
            userId: user.userId,
            articleId: item.articleId,
            urls: item.urls,
            content: item.content,
            type: item.type,
            uploadUrls: item.urls,
            status: item.status,
            currentViews: 0,
            supportFlag: 0,
            messageNums: '0',
            shareNums: '0',
            supportNums: '0',
            userName: user.nickname,
            userHeadUrl: user.headPortrait,
            timespanText: 'Baru saja',
            failType: item.failType,
            systemCategoryId: item.systemCategoryId
          };
        });

        if (isLoaded.current === true) {
          const articleList = [...articleFailListRef.current, ...articleListRef.current];
          setArticleList(articleList);
        }
      } else {
        articleFailListRef.current = [];
      }
    });
  };

  const handleVideoPlay = (entries, observer) => {
    const entrie = entries[0];
    const targetEle = entrie.target;
    const target = targetEle.getElementsByTagName('video')[0];

    if (!target.paused) {
      if (entrie.intersectionRatio < 0.7) {
        target.muted = true;
        target.pause();
      }
    } else {
      if (entrie.intersectionRatio >= 0.8) {
        target.muted = true;
        target.play();
      }
    }
  };

  const getData = () => {
    return Promise.all([service.getBannerByCategoryId(categoryIdRef.current).then(bannerList => {
      if (isMounted.current === true) {
        bannerListRef.current = bannerList;
        setBannerList(bannerListRef.current);
      }
    }), service.getArticleList(categoryIdRef.current, pageNum.current).then(({
      articleList,
      total
    }) => {
      if (isMounted.current === true) {
        const finalArticleList = [...articleList];
        articleFailListRef.current.forEach(item => {
          if (finalArticleList.findIndex(item2 => item2.articleId === item.articleId) === -1) {
            finalArticleList.unshift(item);
          }
        });
        setArticleList(finalArticleList);
        articleListRef.current = finalArticleList;
        setCanPullUp(pageSize * pageNum.current < total);
        observerEle(); //可见性观察
      }
    })]).catch(error => {
      console.error(error);
    });
  };

  const handlePullDownRefresh = () => {
    setArticleList(Array.from({
      length: 15
    }));
    pageNum.current = 1;
    return getData();
  };

  const handlePullUpAppendData = scroll => {
    pageNum.current += 1;
    setArticleList(articleList => [...articleList, ...Array.from({
      length: 15
    })]);
    scroll.refresh();
    return service.getArticleList(categoryIdRef.current, pageNum.current).then(({
      articleList,
      total
    }) => {
      if (isMounted.current === true) {
        setArticleList(currentArticleList => [...currentArticleList.filter(item => item), ...articleList]);

        if (pageSize * pageNum.current >= total) {
          setCanPullUp(false);
        }

        setTimeout(() => {
          observerEle(); //可见性观察
        }, 0);
      }
    });
  };

  const handleClickThreadItem = threadsItem => {
    return () => {
      if (!!threadsItem) {
        if (isApp) {
          if (threadsItem.status === 2 && threadsItem.articleId.includes('randomArticleId') === false) {
            window.ReactNativeWebView.postMessage(JSON.stringify({
              action: 'gotoThreadsDetail',
              data: {
                threadsId: threadsItem.articleId,
                scrollToComment: false
              }
            }));
          } else if (threadsItem.status === -1) {
            window.ReactNativeWebView.postMessage(JSON.stringify({
              action: 'repostFailThreads',
              data: articleFailListRef.current.find(item => item.articleId === threadsItem.articleId)
            }));
            setArticleList(articleList => articleList.map(item => {
              if (item.articleId === threadsItem.articleId) {
                item.status = -2;
              }

              return item;
            }));
          } else {
            showToastBox('warn', 'Silahkan coba kembali setelah sukses mengunggah postingan');
          }
        } else {
          if (threadsItem.status === 2 && threadsItem.articleId.includes('randomArticleId') === false) {
            router.push(`/forum/threads/p/${threadsItem.articleId}?scrollToComment=false`);
          } else {
            showToastBox('warn', 'Silahkan coba kembali setelah sukses mengunggah postingan');
          }
        }
      }
    };
  }; //可见性观察


  const observerEle = () => {
    if (observer !== null) {
      observerListRef.current.map(item => {
        observer.unobserve(item);
      });
    }

    const selectEles = document.getElementsByClassName('video-container');

    if (typeof IntersectionObserver !== 'undefined') {
      const options = {
        root: document.getElementsByClassName('article-wrapper')[0],
        rootMargin: '0px',
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
      };
      observer = new IntersectionObserver(handleVideoPlay, options);

      for (let i = 0; i < selectEles.length; i++) {
        observerListRef.current.push(selectEles[i]);
        const element = selectEles[i];
        observer.observe(element);
      }
    }
  };

  const handleRemoveThreads = threadsItem => {
    external_antd_mobile_["Modal"].alert('Yakin mau hapus postingan?', 'Hapus', [{
      text: 'Tidak',
      onPress: () => {},
      style: 'cancel'
    }, {
      text: 'Ya, keluar',
      onPress: () => {
        service.deleteArticle(threadsItem.articleId).then(() => {
          external_antd_mobile_["Toast"].success('Berhasil menghapus!', 1);

          if (isApp) {
            window.ReactNativeWebView.postMessage(JSON.stringify({
              action: 'removeFailThreads',
              data: {
                articleId: threadsItem.articleId
              }
            }));
          }

          articleFailListRef.current = articleFailListRef.current.filter(item => item.articleId !== threadsItem.articleId);
          setArticleList(articleList => articleList.filter(item => item.articleId !== threadsItem.articleId));
          dom["a" /* DomChangeSubject */].next();
        }).catch(error => {
          console.error(error);
          external_antd_mobile_["Toast"].success('Gagal menghapus!', 2);
        });
      }
    }]);
  };

  return index_jsx("div", {
    className: "home-page",
    __self: undefined,
    __source: {
      fileName: index_jsxFileName,
      lineNumber: 514,
      columnNumber: 5
    }
  }, index_jsx("div", {
    className: "category-wrapper",
    __self: undefined,
    __source: {
      fileName: index_jsxFileName,
      lineNumber: 515,
      columnNumber: 7
    }
  }, index_jsx(components_category_list, {
    categoryList: categoryListRef.current,
    __self: undefined,
    __source: {
      fileName: index_jsxFileName,
      lineNumber: 516,
      columnNumber: 9
    }
  })), index_jsx("div", {
    className: "post-button-container",
    __self: undefined,
    __source: {
      fileName: index_jsxFileName,
      lineNumber: 519,
      columnNumber: 7
    }
  }, index_jsx(components_post_button, {
    systemCategoryId: categoryIdRef.current,
    __self: undefined,
    __source: {
      fileName: index_jsxFileName,
      lineNumber: 520,
      columnNumber: 9
    }
  })), index_jsx("div", {
    className: "article-wrapper",
    __self: undefined,
    __source: {
      fileName: index_jsxFileName,
      lineNumber: 522,
      columnNumber: 7
    }
  }, index_jsx(scroll_container["a" /* default */], {
    onPullDown: handlePullDownRefresh,
    onPullUp: handlePullUpAppendData,
    pullUp: canPullUp,
    __self: undefined,
    __source: {
      fileName: index_jsxFileName,
      lineNumber: 523,
      columnNumber: 9
    }
  }, index_jsx("div", {
    className: "banner-wrapper",
    __self: undefined,
    __source: {
      fileName: index_jsxFileName,
      lineNumber: 528,
      columnNumber: 11
    }
  }, index_jsx(components_banner, {
    list: bannerList,
    __self: undefined,
    __source: {
      fileName: index_jsxFileName,
      lineNumber: 529,
      columnNumber: 13
    }
  })), articleList.length === 0 ? index_jsx("div", {
    className: "empty-wrapper",
    __self: undefined,
    __source: {
      fileName: index_jsxFileName,
      lineNumber: 532,
      columnNumber: 13
    }
  }, index_jsx(empty_article_list, {
    systemCategoryId: categoryIdRef.current,
    __self: undefined,
    __source: {
      fileName: index_jsxFileName,
      lineNumber: 533,
      columnNumber: 15
    }
  })) : index_jsx("ul", {
    className: "article-list",
    __self: undefined,
    __source: {
      fileName: index_jsxFileName,
      lineNumber: 538,
      columnNumber: 13
    }
  }, articleList.map((item, index) => index_jsx("li", {
    className: "article-item",
    key: item ? item.articleId : index,
    onClick: handleClickThreadItem(item),
    __self: undefined,
    __source: {
      fileName: index_jsxFileName,
      lineNumber: 540,
      columnNumber: 17
    }
  }, index_jsx(components_threads_item, {
    onRemove: handleRemoveThreads,
    data: item,
    __self: undefined,
    __source: {
      fileName: index_jsxFileName,
      lineNumber: 545,
      columnNumber: 19
    }
  })))))));
};

const getServerSideProps = function ({
  query,
  res
}) {
  try {
    const categoryName = query.categoryName || '';
    const service = new home_HomePageService();
    return Promise.resolve(_catch(function () {
      return Promise.resolve(service.getForumCategoryList(categoryName)).then(function (categoryLit) {
        const categoryId = categoryLit.find(item => item.active).id;
        return {
          props: {
            categoryId,
            categoryLit
          }
        };
      });
    }, function (error) {
      if (res) {
        res.statusCode = 404;
      }

      throw error;
    }));
  } catch (e) {
    return Promise.reject(e);
  }
};
/* harmony default export */ var pages_index_0 = __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "Eebc":
/***/ (function(module, exports) {

module.exports = {
	"threads-item-component": "threads-item-component",
	"threads-item-underline": "threads-item-underline",
	"message-header": "message-header",
	"delate-btn": "delate-btn",
	"icon-font": "icon-font",
	"message-avatar": "message-avatar",
	"message-user": "message-user",
	"message-user-name": "message-user-name",
	"message-release-time": "message-release-time",
	"message-body-child": "message-body-child",
	"failed": "failed",
	"message-body": "message-body",
	"extend-more": "extend-more",
	"message-image": "message-image",
	"message-interaction-list": "message-interaction-list",
	"message-interaction-item": "message-interaction-item",
	"interaction-icon": "interaction-icon",
	"uniE901": "uniE901",
	"uniE900": "uniE900",
	"threads-item-placeholder": "threads-item-placeholder",
	"threads-header": "threads-header",
	"threads-avatar-placeholder": "threads-avatar-placeholder",
	"threads-user-placeholder": "threads-user-placeholder",
	"threads-body": "threads-body",
	"body-placeholder": "body-placeholder",
	"threads-interaction": "threads-interaction",
	"interaction-placeholder": "interaction-placeholder",
	"body-parent": "body-parent",
	"publish-failed": "publish-failed",
	"failed-text": "failed-text",
	"failed-container": "failed-container",
	"loading": "loading",
	"turn": "turn"
};

/***/ }),

/***/ "FWIw":
/***/ (function(module, exports) {

module.exports = {
	"threads-item-image-list": "threads-item-image-list",
	"threads-item-image-item": "threads-item-image-item",
	"article-item-much-image": "article-item-much-image",
	"much-item": "much-item",
	"much-item-span": "much-item-span",
	"videos": "videos",
	"video-background": "video-background",
	"icon-font": "icon-font",
	"thumbnail": "thumbnail",
	"much-item-span-video": "much-item-span-video",
	"much-count": "much-count",
	"article-item-some-image": "article-item-some-image",
	"some-item": "some-item",
	"some-item-span": "some-item-span",
	"article-item-single-image": "article-item-single-image",
	"single-span": "single-span",
	"video-container": "video-container",
	"video-background-container": "video-background-container"
};

/***/ }),

/***/ "HvvK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("DitX");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _video_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("842X");
var _jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\components\\video\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Video = ({
  click = false,
  data,
  onBufferStatusChange,
  muted,
  autoPlay,
  onPlay,
  loading = false,
  onPause,
  width,
  height
}) => {
  const {
    0: urlType,
    1: setUrlType
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const checkInterval = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(600.0);
  const lastPlayPos = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
  const currentPlayPos = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
  const bufferingDetected = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  const {
    0: canPlay,
    1: setCanPlay
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: showLoading,
    1: setShowLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const videoPlayer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const {
    0: videoActive,
    1: setVideoActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(data.videoActive);
  const timer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (data.headUrl.includes('#t=1') === true) {
      setUrlType(2);
    } else {
      setUrlType(1);
    }

    return () => {
      if (!!timer.current) {
        clearInterval(timer.current);
      }
    };
  }, []);

  const handelPlay = () => {
    setVideoActive(true);

    if (typeof onPlay === 'function') {
      onPlay();
    }

    if (!timer.current) {
      timer.current = setInterval(checkBuffering, checkInterval.current);
    }
  };

  const handelPause = () => {
    setVideoActive(false);

    if (!!timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }

    if (typeof onPause === 'function') {
      onPause();
    }
  };

  const handleChangeVideoPlayState = event => {
    if (click) {
      event.stopPropagation();

      if (videoPlayer.current.paused) {
        videoPlayer.current.muted = false;
        videoPlayer.current.play();
        setVideoActive(true);
      } else {
        videoPlayer.current.muted = true;
        videoPlayer.current.pause();
        setVideoActive(false);
      }
    }
  };

  const checkBuffering = () => {
    currentPlayPos.current = videoPlayer.current.currentTime; // checking offset should be at most the check interval
    // but allow for some margin

    const offset = (checkInterval.current - 100) / 1000; // if no buffering is currently detected,
    // and the position does not seem to increase
    // and the player isn't manually paused...

    if (!bufferingDetected.current && currentPlayPos.current < lastPlayPos.current + offset && !videoPlayer.current.paused) {
      console.log('buffering');
      bufferingDetected.current = true;

      if (typeof onBufferStatusChange === 'function') {
        onBufferStatusChange(bufferingDetected.current);
      }
    } // if we were buffering but the player has advanced,
    // then there is no buffering


    if (bufferingDetected.current && currentPlayPos.current > lastPlayPos.current + offset && !videoPlayer.current.paused) {
      console.log('not buffering anymore');
      bufferingDetected.current = false;

      if (typeof onBufferStatusChange === 'function') {
        onBufferStatusChange(bufferingDetected.current);
      }
    }

    lastPlayPos.current = currentPlayPos.current;
  };

  const handleCanplay = () => {
    setCanPlay(true);

    if (showLoading === true) {
      setShowLoading(false);
    }
  };

  const handleLoadStart = () => {
    if (loading === true) {
      setShowLoading(true);
    }
  };

  return __jsx("div", {
    className: "video-component",
    onClick: handleChangeVideoPlayState,
    style: {
      height,
      width
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 5
    }
  }, showLoading ? __jsx("div", {
    className: "loading-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 9
    }
  }, __jsx(_video_loading__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 11
    }
  })) : null, __jsx("video", {
    className: "single-videos",
    muted: muted,
    poster: urlType === 1 ? data.headUrl : undefined,
    onPause: handelPause,
    onPlay: handelPlay,
    onCanPlay: handleCanplay,
    autoPlay: autoPlay,
    onLoadStart: handleLoadStart,
    preload: "none",
    ref: videoPlayer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 7
    }
  }, urlType === 2 ? __jsx("source", {
    src: data.headUrl,
    type: "video/mp4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 11
    }
  }) : __jsx("source", {
    src: data.url,
    type: "video/mp4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 11
    }
  })), videoActive ? null : __jsx("i", {
    className: "video-background",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "icon-font uniE909",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 11
    }
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (Video);

/***/ }),

/***/ "ODBD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sGQ9");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_1__);



const useMessageBox = () => {
  const {
    store
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(mobx_react__WEBPACK_IMPORTED_MODULE_1__["MobXProviderContext"]);
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((type, title, message) => {
    store.showMessageBox(type, title, message);
  }, []);
};

/* harmony default export */ __webpack_exports__["a"] = (useMessageBox);

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "OyYC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var _http_HttpClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hueg");
/* harmony import */ var _http_HttpClientServer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zbXv");
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("7NBQ");



class CategoryService {
  updateArticleLike(articleId) {
    try {
      return Promise.resolve(_http_HttpClient__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/web/userarticle/updateArticleSupportNums.json', {
        articleId
      }).then(resp => Promise.resolve(resp)));
    } catch (e) {
      return Promise.reject(e);
    }
  }

  querySupportFlag(articleId) {
    try {
      return Promise.resolve(_http_HttpClient__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/web/userarticle/querySupportFlag.json', {
        articleId
      }).then(resp => {
        return Promise.resolve(resp.data);
      }));
    } catch (e) {
      return Promise.reject(e);
    }
  }

  queryArticleDetails(articleId) {
    try {
      return Promise.resolve(_http_HttpClientServer__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].post('/web/userarticle/queryArticleDetails.json', {
        articleId
      }).then(resp => {
        if (resp.code === 9990) {
          return Promise.resolve(resp);
        } else {
          return Promise.resolve(Object(_format__WEBPACK_IMPORTED_MODULE_2__[/* formatArticle */ "a"])(resp.data));
        }
      }));
    } catch (e) {
      return Promise.reject(e);
    }
  }

  getFirstMessagesList(articleId, pageNum, pageSize) {
    try {
      return Promise.resolve(_http_HttpClient__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/web/articleMessage/getMessages.json', {
        articleId,
        pageNum,
        pageSize
      }).then(resp => {
        return Promise.resolve(resp.data || {
          list: [],
          total: 0
        });
      }).then(resp => {
        return Promise.resolve({
          list: Object(_format__WEBPACK_IMPORTED_MODULE_2__[/* formatMessageList */ "d"])(resp.list),
          total: resp.total
        });
      }));
    } catch (e) {
      return Promise.reject(e);
    }
  }

  getSecondMessagesList(parentMessageId, pageNum, pageSize) {
    try {
      return Promise.resolve(_http_HttpClient__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/web/articleMessage/querySonMessage.json', {
        parentMessageId,
        pageNum,
        pageSize
      }).then(resp => {
        return Promise.resolve(resp.data || {
          list: [],
          total: 0
        });
      }).then(resp => {
        return Promise.resolve({
          list: Object(_format__WEBPACK_IMPORTED_MODULE_2__[/* formatMessageList */ "d"])(resp.list),
          total: resp.total
        });
      }));
    } catch (e) {
      return Promise.reject(e);
    }
  }

  leavingMessage(model) {
    try {
      return Promise.resolve(_http_HttpClient__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/web/articleMessage/leavingMessage.json', model).then(resp => {
        return Promise.resolve(resp.data);
      }));
    } catch (e) {
      return Promise.reject(e);
    }
  }

  deleteMessage(id) {
    try {
      return Promise.resolve(_http_HttpClient__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/web/articleMessage/deleteMessage.json', {
        id
      }).then(resp => Promise.resolve(resp.data)));
    } catch (e) {
      return Promise.reject(e);
    }
  }

  getReportOptionList() {
    try {
      return Promise.resolve(_http_HttpClientServer__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].post('/web/user/getReport.json').then(resp => Promise.resolve(resp.data)).then(optionList => Promise.resolve(optionList.map(item => ({
        value: item.id,
        label: item.typeName
      })))));
    } catch (e) {
      return Promise.reject(e);
    }
  }

  submitReport(reportId, userArticleId, comments = '') {
    try {
      return Promise.resolve(_http_HttpClient__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/web/forum/report/doReport.json', {
        reportId,
        userArticleId,
        comments
      }));
    } catch (e) {
      return Promise.reject(e);
    }
  }

  updateArticleShareNums(articleId) {
    try {
      return Promise.resolve(_http_HttpClient__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/web/userarticle/updateArticleShareNums.json', {
        articleId
      }));
    } catch (e) {
      return Promise.reject(e);
    }
  }

}

/***/ }),

/***/ "Pdzu":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjMyOHB4IiBoZWlnaHQ9IjE2NHB4IiB2aWV3Qm94PSIwIDAgMzI4IDE2NCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDYwLjEgKDg4MTMzKSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4NCiAgICA8dGl0bGU+5Zu+54mH5o2f5Z2PLTI6MTwvdGl0bGU+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGRlZnM+DQogICAgICAgIDxyZWN0IGlkPSJwYXRoLTEiIHg9IjAiIHk9IjAiIHdpZHRoPSIzMjgiIGhlaWdodD0iMTY0IiByeD0iNSI+PC9yZWN0Pg0KICAgIDwvZGVmcz4NCiAgICA8ZyBpZD0iMS4zLjEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBpZD0i5pCc57Si57uT5p6c5aSH5Lu9LTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNi4wMDAwMDAsIC0xNDIuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyBpZD0i5Zu+54mH5o2f5Z2PLTI6MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYuMDAwMDAwLCAxNDIuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgaWQ9IuS9jeWbvuWkh+S7vS03Ij4NCiAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stMiIgZmlsbD0id2hpdGUiPg0KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4NCiAgICAgICAgICAgICAgICAgICAgPC9tYXNrPg0KICAgICAgICAgICAgICAgICAgICA8dXNlIGlkPSLokpnniYgiIGZpbGw9IiNGNkY3RjkiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgICAgICA8ZyBpZD0i57yW57uEIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzQuMDAwMDAwLCA0Ni4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPg0KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNjAsNjAuMjE4NTc5MiBMNjAsMTMuNTUxOTEyNiBDNTkuOTg5MDE3Myw5Ljg3NDU3MzAxIDU3LjAxMDY3MjksNi44OTYyMjg1NyA1My4zMzMzMzMzLDYuODg1MjQ1OSBMNi42NjY2NjY2Nyw2Ljg4NTI0NTkgQzIuOTg5MzI3MTEsNi44OTYyMjg1NyAwLjAxMDk4MjY3MDQsOS44NzQ1NzMwMSAwLDEzLjU1MTkxMjYgTDAsNjAuMjE4NTc5MiBDMC4wMTA5ODI2NzA0LDYzLjg5NTkxODggMi45ODkzMjcxMSw2Ni44NzQyNjMyIDYuNjY2NjY2NjcsNjYuODg1MjQ1OSBMNTMuMzMzMzMzMyw2Ni44ODUyNDU5IEM1Ny4wMTA2NzI5LDY2Ljg3NDI2MzIgNTkuOTg5MDE3Myw2My44OTU5MTg4IDYwLDYwLjIxODU3OTIgTDYwLDYwLjIxODU3OTIgWiBNMTguMzMzMzMzMyw0MS44ODUyNDU5IEwyNi42NjY2NjY3LDUxLjkxODU3OTIgTDM4LjMzMzMzMzMsMzYuODg1MjQ1OSBMNTMuMzMzMzMzMyw1Ni44ODUyNDU5IEw2LjY2NjY2NjY3LDU2Ljg4NTI0NTkgTDE4LjMzMzMzMzMsNDEuODg1MjQ1OSBaIiBpZD0i5b2i54q2IiBmaWxsPSIjRURFRUYwIj48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSLot6/lvoQiIGZpbGw9IiNGNkY3RjkiIHBvaW50cz0iMjMuMjMyMTI2NCAzNS43MTA2NTM1IDMyLjEwNDkyNzMgMCAzOC4zOTg0MDA1IDEuNjYyODMxNzggMzAuODA5ODQ5MiAzMi4yMTA2NjA4IDQ2LjIyOTUwODIgNDAuNDYyMjQgMjMuOTg1NzgzOCA3Mi43ODY4ODUyIDE4LjY4ODUyNDYgNjguOTAyNDc0NCAzNi42MDczODExIDQyLjg2NDg1MzEiPjwvcG9seWdvbj4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4="

/***/ }),

/***/ "QX0k":
/***/ (function(module, exports) {

module.exports = {
	"banner-component": "banner-component",
	"swiper-slide-container": "swiper-slide-container",
	"swiper-container": "swiper-container",
	"swiper-slide": "swiper-slide",
	"swiper-pagination-bullets": "swiper-pagination-bullets",
	"swiper-button": "swiper-button",
	"swiper-pagination-bullet": "swiper-pagination-bullet",
	"swiper-pagination-bullet-active": "swiper-pagination-bullet-active",
	"banner-placeholder": "banner-placeholder",
	"placeholder-1": "placeholder-1",
	"placeholder-2": "placeholder-2",
	"placeholder-point-active": "placeholder-point-active",
	"placeholder-point": "placeholder-point"
};

/***/ }),

/***/ "QYNh":
/***/ (function(module, exports) {

module.exports = {
	"post-button-component": "post-button-component",
	"uniE90C": "uniE90C"
};

/***/ }),

/***/ "Rjtp":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNS42MjUgNS43ODFjLS4yNjcuNTI0LS40NjYuOTIzLS41OTcgMS4xOTZsLS4xMTkuMjU3LjAwMSA5LjE3NmExIDEgMCAwIDAgMSAxaDguMTQ3YzEuMzczIDAgMi41NTItMS4wMDggMi43OS0yLjM5NUwxNy45OCA4LjM4Yy4wMTItLjA3NC4wMTktLjE1LjAxOS0uMjI1IDAtLjcyMy0uNTctMS4zMDItMS4yNjgtMS4zMDJIOS42bDEuNDctNC4xMzZjLjI5LS43NjgtLjE0Ny0xLjU2OC0uODQyLTEuOTc2QzkuOTQuNTcyIDkuMjczLjQ4NyA4Ljk1LjU3MmMtLjMyMS4wODYtLjczMi4yNjUtLjg5Ny41NTNhNDEwLjg2IDQxMC44NiAwIDAgMC0yLjQyOSA0LjY1NnptLTIuODUyIDEuODFILjVhLjUuNSAwIDAgMC0uNS41djguODE5YS41LjUgMCAwIDAgLjUuNWgyLjI3M2EuNS41IDAgMCAwIC41LS41VjguMDkyYS41LjUgMCAwIDAtLjUtLjV6IiBmaWxsPSIjRkY1NjU2IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4="

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

/***/ "Vgaj":
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),

/***/ "Wsj/":
/***/ (function(module, exports) {

module.exports = require("fecha");

/***/ }),

/***/ "XJRc":
/***/ (function(module, exports) {

module.exports = require("socks5-http-client/lib/Agent");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  }, namedParameterizedRoute ? {
    namedRegex: `^${namedParameterizedRoute}(?:/)?$`
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "ZR05":
/***/ (function(module, exports) {

module.exports = {
	"avatar-container": "avatar-container",
	"no-image-mode-avatar": "no-image-mode-avatar",
	"avator-component": "avator-component",
	"avator-author": "avator-author",
	"small": "small"
};

/***/ }),

/***/ "aV0h":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkwcHgiIGhlaWdodD0iNjhweCIgdmlld0JveD0iMCAwIDkwIDY4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNjAuMSAoODgxMzMpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPg0KICAgIDx0aXRsZT7lm77niYfmjZ/lnY8tNDozPC90aXRsZT4NCiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4NCiAgICA8ZyBpZD0iMS4zLjEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBpZD0i5pCc57Si57uT5p6c5aSH5Lu9LTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNTQuMDAwMDAwLCAtNDEuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyBpZD0i5Zu+54mH5o2f5Z2PLTQ6MyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjU0LjAwMDAwMCwgNDEuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IuiSmeeJiOWkh+S7vS0yIiBmaWxsPSIjRjZGN0Y5IiB4PSIwIiB5PSIwIiB3aWR0aD0iOTAiIGhlaWdodD0iNjgiIHJ4PSI1Ij48L3JlY3Q+DQogICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzMuMDAwMDAwLCAxOS4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPg0KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjQuNzI5NzI5NywyNC44MTk4MTk4IEwyNC43Mjk3Mjk3LDUuNTg1NTg1NTkgQzI0LjcyNTIwMzEsNC4wNjk5MjUzNiAyMy40OTc2NDIyLDIuODQyMzY0NDggMjEuOTgxOTgyLDIuODM3ODM3ODQgTDIuNzQ3NzQ3NzUsMi44Mzc4Mzc4NCBDMS4yMzIwODc1MywyLjg0MjM2NDQ4IDAuMDA0NTI2NjQxMTcsNC4wNjk5MjUzNiAwLDUuNTg1NTg1NTkgTDAsMjQuODE5ODE5OCBDMC4wMDQ1MjY2NDExNywyNi4zMzU0OCAxLjIzMjA4NzUzLDI3LjU2MzA0MDkgMi43NDc3NDc3NSwyNy41Njc1Njc2IEwyMS45ODE5ODIsMjcuNTY3NTY3NiBDMjMuNDk3NjQyMiwyNy41NjMwNDA5IDI0LjcyNTIwMzEsMjYuMzM1NDggMjQuNzI5NzI5NywyNC44MTk4MTk4IEwyNC43Mjk3Mjk3LDI0LjgxOTgxOTggWiBNNy41NTYzMDYzMSwxNy4yNjM1MTM1IEwxMC45OTA5OTEsMjEuMzk4ODczOSBMMTUuNzk5NTQ5NSwxNS4yMDI3MDI3IEwyMS45ODE5ODIsMjMuNDQ1OTQ1OSBMMi43NDc3NDc3NSwyMy40NDU5NDU5IEw3LjU1NjMwNjMxLDE3LjI2MzUxMzUgWiIgaWQ9IuW9oueKtiIgZmlsbD0iI0VERUVGMCI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0i6Lev5b6EIiBmaWxsPSIjRjZGN0Y5IiBwb2ludHM9IjkuNTc1NDAzNDMgMTQuNzE4NTgwMiAxMy4yMzI0MzYzIDAgMTUuODI2MzY3OCAwLjY4NTM1NjM0MiAxMi42OTg2NTQxIDEzLjI3NjAxNTYgMTkuMDU0MDU0MSAxNi42NzcwMDQzIDkuODg2MDMyNTMgMzAgNy43MDI3MDI3IDI4LjM5ODk5MjggMTUuMDg4MTc3MyAxNy42NjcyNzA1Ij48L3BvbHlnb24+DQogICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+"

/***/ }),

/***/ "ajvM":
/***/ (function(module, exports) {

module.exports = {
	"home-page": "home-page",
	"category-wrapper": "category-wrapper",
	"banner-wrapper": "banner-wrapper",
	"article-wrapper": "article-wrapper",
	"empty-wrapper": "empty-wrapper",
	"post-button-container": "post-button-container"
};

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("kYf9");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _router2 = __webpack_require__("elyg");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

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

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "eEbD":
/***/ (function(module, exports) {

module.exports = {
	"ripple-component": "ripple-component",
	"article-ripple": "article-ripple",
	"is-animating": "is-animating",
	"is-visible": "is-visible"
};

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  fetchComponent(route) {
    return __awaiter(this, void 0, void 0, function* () {
      let cancelled = false;

      const cancel = this.clc = () => {
        cancelled = true;
      };

      route = delBasePath(route);
      const componentResult = yield this.pageLoader.loadPage(route);

      if (cancelled) {
        const error = new Error(`Abort fetching component for route: "${route}"`);
        error.cancelled = true;
        throw error;
      }

      if (cancel === this.clc) {
        this.clc = null;
      }

      return componentResult;
    });
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "f1Q/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomChangeSubject; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Vgaj");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);

const DomChangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();


/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

function loadGetInitialProps(App, ctx) {
  var _a;

  return __awaiter(this, void 0, void 0, function* () {
    if (false) {} // when called from _app `ctx` is nested in `ctx`


    const res = ctx.res || ctx.ctx && ctx.ctx.res;

    if (!App.getInitialProps) {
      if (ctx.ctx && ctx.Component) {
        // @ts-ignore pageProps default
        return {
          pageProps: yield loadGetInitialProps(ctx.Component, ctx.ctx)
        };
      }

      return {};
    }

    const props = yield App.getInitialProps(ctx);

    if (res && isResSent(res)) {
      return props;
    }

    if (!props) {
      const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
      throw new Error(message);
    }

    if (false) {}

    return props;
  });
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "g4oL":
/***/ (function(module, exports) {

module.exports = {
	"empty-article-list": "TSHDWIB-JMcAYOfaYA3UQ",
	"empty-text": "_2VdFqpV6qZPKaRQatBpjJ9"
};

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

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

/***/ "mBdx":
/***/ (function(module, exports) {

module.exports = require("antd-mobile");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "o3Ei":
/***/ (function(module, exports) {

module.exports = {
	"video-loading-component": "video-loading-component",
	"video-loading-container": "video-loading-container",
	"child": "child",
	"loading-red": "loading-red",
	"red-light": "red-light",
	"loading-yellow": "loading-yellow",
	"yellow-light": "yellow-light",
	"loading-green": "loading-green",
	"green-light": "green-light"
};

/***/ }),

/***/ "sGQ9":
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),

/***/ "szVv":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNy44OTcgMi4yMDdDOC42Ljg5OCAxMC4xNzMuNDQ4IDExLjQgMS4yMDdjMS4yMTIuNzUgMS43MzMgMi4zMjUgMS4yMzMgMy43MThsLS41NjcgMS41NzhoNC40NzdjMS4zNiAwIDIuNDY5IDEuMTMgMi41NTIgMi41NWwuMDA1LjE3MmMwIC4xNTUtLjAxMi4zMS0uMDM3LjQ2M2wtLjk2IDUuOTE3Yy0uMzIyIDEuOTgzLTEuOTM1IDMuNDM0LTMuODI0IDMuNDM0SDIuMzg1Yy0uODIyIDAtMS40ODUtLjctMS40ODUtMS41NlY4LjcyMmMwLS44Ni42NjMtMS41NTkgMS40ODUtMS41NTloMy4wNzJsLjQ1Mi0uOTUyIDEuOTg4LTQuMDA0em0tLjc1MyA1LjEwOWMtLjIyNi40NS0uMzk0Ljc5Mi0uNTA1IDEuMDI2YTguMjA4IDguMjA4IDAgMCAwLS4xLjIydjguMjMyYS41LjUgMCAwIDAgLjUuNWg3LjI0YzEuMTYyIDAgMi4xNi0uODY1IDIuMzYtMi4wNTVsLjk2LTUuNjkzYy4wMS0uMDY0LjAxNi0uMTI5LjAxNi0uMTk0IDAtLjYyLS40ODItMS4xMTctMS4wNzItMS4xMTdIOS45MmwxLjMyNC0zLjU0OWMuMjQ2LS42NTktLjAwOS0xLjQwNC0uNTk3LTEuNzU0YTEuMDQgMS4wNCAwIDAgMC0uODA0LS4xMTIgMS4wNTQgMS4wNTQgMCAwIDAtLjY0NC41IDM1NC4zNTggMzU0LjM1OCAwIDAgMC0yLjA1NSAzLjk5NnptLTIuNDkgMS40NjloLTEuNzdhLjUuNSAwIDAgMC0uNS41djcuNTFhLjUuNSAwIDAgMCAuNS41aDEuNzdhLjUuNSAwIDAgMCAuNS0uNXYtNy41MWEuNS41IDAgMCAwLS41LS41eiIgZmlsbD0iIzFCMjAyMCIgZmlsbC1ydWxlPSJub256ZXJvIiBmaWxsLW9wYWNpdHk9Ii4zIi8+PC9zdmc+"

/***/ }),

/***/ "uzIF":
/***/ (function(module, exports) {

module.exports = {
	"category-list-component": "category-list-component",
	"category-list-container": "category-list-container",
	"loaded": "loaded",
	"underline": "underline",
	"category-list": "category-list",
	"category-list-item": "category-list-item",
	"category-item-underline": "category-item-underline",
	"hidden-label": "hidden-label",
	"display-label": "display-label",
	"active": "active"
};

/***/ }),

/***/ "v9Oo":
/***/ (function(module, exports) {

module.exports = {
	"scroll-container-component": "scroll-container-component",
	"pull-down-refresh-indicator": "pull-down-refresh-indicator",
	"uniE910": "uniE910",
	"rotate": "rotate"
};

/***/ }),

/***/ "wjFm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/scroll-container/index.scss
var scroll_container = __webpack_require__("v9Oo");

// EXTERNAL MODULE: external "better-scroll"
var external_better_scroll_ = __webpack_require__("7FHF");
var external_better_scroll_default = /*#__PURE__*/__webpack_require__.n(external_better_scroll_);

// EXTERNAL MODULE: ./subject/dom.ts
var dom = __webpack_require__("f1Q/");

// CONCATENATED MODULE: ./hooks/updateHook.ts


const useUpdateEffect = (effect, deps) => {
  const {
    0: inited,
    1: setInited
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    if (inited) {
      effect();
    } else {
      setInited(true);
    }
  }, deps);
};

/* harmony default export */ var updateHook = (useUpdateEffect);
// EXTERNAL MODULE: external "mobx-react"
var external_mobx_react_ = __webpack_require__("sGQ9");

// CONCATENATED MODULE: ./components/scroll-container/index.tsx
var _jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\components\\scroll-container\\index.tsx";
var __jsx = external_react_default.a.createElement;







const ScrollContainer = ({
  children,
  onPullDown,
  onPullUp,
  onScroll,
  pullUp = true,
  pullDown = true,
  scrollIntoView,
  observeDOM = false,
  x = 0,
  y = 0
}) => {
  const {
    0: isClient,
    1: setIsClient
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    setIsClient(true);
  }, []);
  return isClient ? __jsx(_ScrollContainer, {
    onPullDown: onPullDown,
    onPullUp: onPullUp,
    pullUp: pullUp,
    pullDown: pullDown,
    onScroll: onScroll,
    scrollIntoView: scrollIntoView,
    observeDOM: observeDOM,
    x: x,
    y: y,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, children) : null;
};

const _ScrollContainer = ({
  children,
  onPullDown,
  onPullUp,
  pullUp = true,
  pullDown = true,
  onScroll,
  scrollIntoView,
  observeDOM = false,
  x = 0,
  y = 0
}) => {
  const {
    0: refreshText,
    1: setRefreshText
  } = Object(external_react_["useState"])('↓ Tarik untuk refresh…');
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(external_react_["useState"])(false);
  const isFinished = Object(external_react_["useRef"])(true);
  const isMounted = Object(external_react_["useRef"])(false);
  const scrollInstance = Object(external_react_["useRef"])();
  const isScrollEnd = Object(external_react_["useRef"])(true);
  const {
    0: containerElement,
    1: setContainerElement
  } = Object(external_react_["useState"])();
  const {
    0: containerHeight,
    1: setContainerHeight
  } = Object(external_react_["useState"])('100%');
  const {
    store
  } = Object(external_react_["useContext"])(external_mobx_react_["MobXProviderContext"]);
  const {
    noImageMode
  } = Object(external_mobx_react_["useObserver"])(() => ({
    noImageMode: store.noImageMode
  }));
  const pullDownOption = {
    threshold: 60,
    stop: 50
  };
  const pullUpOption = {
    threshold: 360
  };
  updateHook(() => {
    if (scrollInstance.current) {
      scrollInstance.current.refresh();
    }
  }, [noImageMode]);
  updateHook(() => {
    if (scrollInstance.current && scrollIntoView) {
      isScrollEnd.current = false;
      scrollInstance.current.scrollToElement(scrollIntoView, 600);
    } else {
      console.error('scrollIntoView effect error!');
      console.error('typeof scroll = ' + typeof scrollInstance.current);
    }
  }, [scrollIntoView]);
  updateHook(() => {
    if (scrollInstance.current && typeof x === 'number' && typeof y === 'number') {
      isScrollEnd.current = false;
      scrollInstance.current.scrollTo(x, y, 600);
    } else {
      console.error('scrollTo X Y effect error!');
      console.error('typeof scroll = ' + typeof scrollInstance.current);
    }
  }, [x, y]);
  Object(external_react_["useEffect"])(() => {
    if (containerElement) {
      isMounted.current = true;
      const height = containerElement.parentElement.getBoundingClientRect().height;
      setContainerHeight(height + 'px');
      let DomChangeSubjectSubscription = null;
      setTimeout(() => {
        scrollInstance.current = new external_better_scroll_default.a('#scroll-container-component', {
          probeType: 1,
          bounce: true,
          bounceTime: 600,
          pullDownRefresh: pullDown ? pullDownOption : false,
          pullUpLoad: pullUp ? pullUpOption : false,
          observeDOM: observeDOM,
          useTransition: false,
          click: true,
          startX: x,
          startY: y
        });

        if (pullDown === true) {
          registerPullDownEvent();
        }

        if (pullUp) {
          registerPullUpEvent();
        }

        if (typeof onScroll === 'function') {
          scrollInstance.current.on('scroll', handleEmitScrollEvent);
          scrollInstance.current.on('scrollEnd', handleScrollEnd);
        }

        DomChangeSubjectSubscription = dom["a" /* DomChangeSubject */].subscribe(() => {
          setContainerHeight('100%');
          setTimeout(() => {
            const height = containerElement.parentElement.getBoundingClientRect().height;
            setContainerHeight(height + 'px');
            setTimeout(() => {
              scrollInstance.current.refresh();
            });
          });
        });
      });
      return () => {
        if (scrollInstance.current) {
          scrollInstance.current.off('scroll', handleEmitScrollEvent);
          scrollInstance.current.off('scrollEnd', handleEmitScrollEvent);
          scrollInstance.current.destroy();
          scrollInstance.current = null;
        }

        isMounted.current = false;

        if (DomChangeSubjectSubscription) {
          DomChangeSubjectSubscription.unsubscribe();
        }
      };
    }
  }, [containerElement]);
  const registerPullDownEvent = Object(external_react_["useCallback"])(() => {
    scrollInstance.current.on('pullingDown', handlePullingDown);
    scrollInstance.current.on('scroll', handleScroll);
  }, []);
  const unregisterPullDownEvent = Object(external_react_["useCallback"])(() => {
    scrollInstance.current.off('pullingDown', handlePullingDown);
    scrollInstance.current.off('scroll', handleScroll);
  }, []);
  const registerPullUpEvent = Object(external_react_["useCallback"])(() => {
    scrollInstance.current.on('pullingUp', handlePullingUp);
  }, []);
  const unregisterPullUpEvent = Object(external_react_["useCallback"])(() => {
    scrollInstance.current.off('pullingUp', handlePullingUp);
  }, []);
  const handlePullingDown = Object(external_react_["useCallback"])(() => {
    setIsLoading(true);

    if (typeof onPullDown === 'function') {
      onPullDown(scrollInstance.current).then(() => {
        if (isMounted.current === true) {
          setIsLoading(false);
          setRefreshText('Lengkap');
          scrollInstance.current.finishPullDown();
          scrollInstance.current.once('scrollEnd', () => {
            if (isMounted.current === true) {
              setRefreshText('↓ Tarik untuk refresh…');
              scrollInstance.current.refresh();
              isFinished.current = true;
            }
          });
        }
      });
    }
  }, []);
  const handleScroll = Object(external_react_["useCallback"])(({
    y
  }) => {
    if (y >= 60) {
      if (isFinished.current === true) {
        isFinished.current = false;
        setRefreshText('↑ Lepaskan refresh…');
      }
    } else {
      if (isFinished.current === false) {
        isFinished.current = true;
        setRefreshText('↓ Tarik untuk refresh…');
      }
    }
  }, []);

  const handleScrollEnd = () => {
    isScrollEnd.current = true;
  };

  const handleEmitScrollEvent = Object(external_react_["useCallback"])(({
    x,
    y
  }) => {
    if (isScrollEnd.current === true && typeof onScroll === 'function') {
      onScroll({
        x,
        y
      });
    }
  }, []);
  const handlePullingUp = Object(external_react_["useCallback"])(() => {
    if (typeof onPullUp === 'function') {
      onPullUp(scrollInstance.current).then(() => {
        if (isMounted.current === true) {
          scrollInstance.current.finishPullUp();
          scrollInstance.current.refresh();
        }
      });
    }
  }, []);
  updateHook(() => {
    if (scrollInstance.current) {
      if (pullDown === true) {
        scrollInstance.current.openPullDown(pullDownOption);
        registerPullDownEvent();
      } else {
        scrollInstance.current.closePullDown();
        unregisterPullDownEvent();
      }
    } else {
      console.error('pullDown event error!');
      console.error('typeof scroll = ' + typeof scrollInstance.current);
    }
  }, [pullDown]);
  updateHook(() => {
    if (scrollInstance.current) {
      if (pullUp === true) {
        scrollInstance.current.openPullUp(pullUpOption);
        registerPullUpEvent();
      } else {
        scrollInstance.current.closePullUp();
        unregisterPullUpEvent();
      }
    } else {
      console.error('pullUp event error!');
      console.error('typeof scroll = ' + typeof scrollInstance.current);
    }
  }, [pullUp]);
  return __jsx("div", {
    ref: setContainerElement,
    className: "scroll-container-component",
    id: "scroll-container-component",
    style: {
      height: containerHeight
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 7
    }
  }, pullDown ? __jsx("div", {
    className: "pull-down-refresh-indicator",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 11
    }
  }, isLoading ? __jsx(external_react_default.a.Fragment, null, __jsx("span", {
    className: "icon-font uniE910",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 17
    }
  }, "Loading...")) : __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 17
    }
  }, refreshText)) : null, __jsx("div", {
    className: "scroll-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 9
    }
  }, children)));
};

/* harmony default export */ var components_scroll_container = __webpack_exports__["a"] = (ScrollContainer);

/***/ }),

/***/ "zbXv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4vsW");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var socks5_http_client_lib_Agent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("XJRc");
/* harmony import */ var socks5_http_client_lib_Agent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socks5_http_client_lib_Agent__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var socks5_https_client_lib_Agent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0ssD");
/* harmony import */ var socks5_https_client_lib_Agent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socks5_https_client_lib_Agent__WEBPACK_IMPORTED_MODULE_2__);




const get = function (url, body = {}, options) {
  try {
    const bodyArr = [];
    Object.keys(body).forEach(key => {
      bodyArr.push(key + '=' + body[key].toString());
    });

    if (bodyArr.length > 0) {
      url = `${url}?${bodyArr.join('&')}`;
    }

    return request(url, 'GET', {}, options);
  } catch (e) {
    return Promise.reject(e);
  }
};

const post = function (url, body = {}, options) {
  return request(url, 'POST', body, options);
};

const del = function (url, body = {}, options) {
  return request(url, 'DELETE', body, options);
};

const patch = function (url, body = {}, options) {
  return request(url, 'PATCH', body, options);
};

const request = function (url, method, body = {}, {
  headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  proxy = false
} = {}) {
  try {
    if (url.startsWith('/') && true) {
      url = "http://localhost:9999" + url;
    }

    const options = {
      body: method === 'GET' ? null : JSON.stringify(body),
      headers,
      method,
      agent: null
    };

    if (proxy === true) {
      const setting = {
        socksHost: 'localhost',
        socksPort: '1080'
      };
      const httpAgent = new socks5_http_client_lib_Agent__WEBPACK_IMPORTED_MODULE_1___default.a(setting);
      const httpsAgent = new socks5_https_client_lib_Agent__WEBPACK_IMPORTED_MODULE_2___default.a(setting);
      if (url.startsWith('http://')) options.agent = httpAgent;
      if (url.startsWith('https://')) options.agent = httpsAgent;
    }

    return Promise.resolve(new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        reject(new Error('request is timeout'));
      }, 30 * 1000);
      node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(url, options).then(resp => {
        clearTimeout(timeoutId);
        return Promise.resolve(resp.json());
      }).then(resp => {
        if (resp.code !== 200) {
          return Promise.reject({
            code: resp.code,
            message: resp.resultMsg,
            data: resp.data
          });
        }

        resolve(resp);
      }).catch(error => {
        console.log(url);
        clearTimeout(timeoutId);
        reject(error);
      });
    }));
  } catch (e) {
    return Promise.reject(e);
  }
};

const HttpClientServer = {
  get,
  post,
  del,
  patch,
  request
};
/* harmony default export */ __webpack_exports__["a"] = (HttpClientServer);

/***/ })

/******/ });