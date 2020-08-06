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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+0Sc":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTYgLTkwKSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYgOTApIj48cGF0aCBkPSJNMTYsMEExNiwxNiwwLDEsMSwwLDE2LDE2LDE2LDAsMCwxLDE2LDBaIiBmaWxsPSIjZWZlZGVkIi8+PC9nPjxwYXRoIGQ9Ik0xMDYuNjMsNzkuNmE3LjA4Miw3LjA4MiwwLDEsMC03LjgxMiwwLDExLjQxLDExLjQxLDAsMCwwLTcuNDI1LDEwLjY5M2gxLjg4OGE5LjQ0Myw5LjQ0MywwLDEsMSwxOC44ODUsMGgxLjg4OEExMS40MSwxMS40MSwwLDAsMCwxMDYuNjMsNzkuNlptLTMuOTA2LS43MTNhNS4yMjgsNS4yMjgsMCwxLDEsNS4xOTMtNS4yMjhBNS4yMTYsNS4yMTYsMCwwLDEsMTAyLjcyNCw3OC44ODZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzAuODY4IDI4LjU1OCkiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+"

/***/ }),

/***/ "0ssD":
/***/ (function(module, exports) {

module.exports = require("socks5-https-client/lib/Agent");

/***/ }),

/***/ "1nAM":
/***/ (function(module, exports) {

module.exports = require("swiper");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4vsW":
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("N/ZP");


/***/ }),

/***/ "5tF+":
/***/ (function(module, exports) {

module.exports = require("mousetrap");

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

/***/ "BbDR":
/***/ (function(module, exports) {

module.exports = {
	"detail-item-image-list": "detail-item-image-list",
	"detail-item-image-item": "detail-item-image-item",
	"span-img": "span-img",
	"thumbnail": "thumbnail",
	"single-span-img": "single-span-img",
	"single-videos": "single-videos",
	"video-background": "video-background",
	"icon-font": "icon-font",
	"videos-container": "videos-container",
	"videos": "videos"
};

/***/ }),

/***/ "DCdo":
/***/ (function(module, exports) {

module.exports = {
	"detail-item-component": "detail-item-component",
	"message-header": "message-header",
	"message-avatar": "message-avatar",
	"message-user": "message-user",
	"message-user-name": "message-user-name",
	"message-release-time": "message-release-time",
	"message-body": "message-body",
	"message-address": "message-address",
	"icon-address": "icon-address",
	"share-list": "share-list",
	"share-list-item": "share-list-item",
	"item-img": "item-img",
	"icons": "icons",
	"message-placeholder": "message-placeholder",
	"message-avatar-placeholder": "message-avatar-placeholder",
	"message-user-placeholder": "message-user-placeholder",
	"message-body-placeholder": "message-body-placeholder"
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

/***/ "EDEA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/detail-item/index.scss
var detail_item = __webpack_require__("DCdo");

// EXTERNAL MODULE: ./components/user-avatar/index.tsx
var user_avatar = __webpack_require__("7GlH");

// CONCATENATED MODULE: ./hooks/cancellablePromiseHook.ts


function useCancellablePromises() {
  const pendingPromises = Object(external_react_["useRef"])([]);

  const appendPendingPromise = promise => pendingPromises.current = [...pendingPromises.current, promise];

  const removePendingPromise = promise => pendingPromises.current = pendingPromises.current.filter(p => p !== promise);

  const clearPendingPromises = () => pendingPromises.current.map(p => p.cancel());

  const hasPendingPromise = () => pendingPromises.current.length > 0;

  const api = {
    appendPendingPromise,
    removePendingPromise,
    clearPendingPromises,
    hasPendingPromise
  };
  return api;
}

/* harmony default export */ var cancellablePromiseHook = (useCancellablePromises);
// CONCATENATED MODULE: ./utils/cancellablePromise.ts
class CancellablePromise {
  constructor(promise) {
    this.isCanceled = false;
    this.promise = null;
    const wrappedPromise = new Promise((resolve, reject) => {
      promise.then(value => this.isCanceled ? reject({
        isCanceled: this.isCanceled,
        value
      }) : resolve(value), error => reject({
        isCanceled: this.isCanceled,
        error
      }));
    });
    this.promise = wrappedPromise;
  }

  cancel() {
    this.isCanceled = true;
  }

}
// CONCATENATED MODULE: ./utils/index.ts
const upper = lower => lower.replace(/^\w/, c => c.toUpperCase());

const lower = upper => upper.replace(/^\w/, c => c.toLowerCase());

const escapeRegExp = string => string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string


const replaceAll = (str, find, replace) => str.replace(new RegExp(escapeRegExp(find), 'g'), replace);

const delay = n => new Promise(resolve => setTimeout(resolve, n));


// CONCATENATED MODULE: ./hooks/clickHook.ts




function useClickPreventionOnDoubleClick(onClick, onDoubleClick) {
  const api = cancellablePromiseHook();

  const handleStartTouch = event => {
    if (api.hasPendingPromise()) {
      api.clearPendingPromises();
      onDoubleClick(event);
    } else {
      api.clearPendingPromises();
      const waitForClick = new CancellablePromise(delay(300));
      api.appendPendingPromise(waitForClick);
      return waitForClick.promise.then(() => {
        api.removePendingPromise(waitForClick);
        onClick(event);
      }).catch(errorInfo => {
        api.removePendingPromise(waitForClick);

        if (!errorInfo.isCanceled) {
          throw errorInfo.error;
        }
      });
    }
  };

  return [handleStartTouch];
}

/* harmony default export */ var clickHook = (useClickPreventionOnDoubleClick);
// EXTERNAL MODULE: ./static/images/avatar-default.svg
var avatar_default = __webpack_require__("+0Sc");
var avatar_default_default = /*#__PURE__*/__webpack_require__.n(avatar_default);

// CONCATENATED MODULE: ./components/detail-item/index.tsx
var _jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\components\\detail-item\\index.tsx";
var __jsx = external_react_default.a.createElement;






const DetailItem = ({
  data
}) => {
  const handleClickThreadsItem = () => {
    console.log('click');
  };

  const handleDoubleClickThreadsItem = () => {
    console.log('double click');
  };

  const [handleTouchEvent] = clickHook(handleClickThreadsItem, handleDoubleClickThreadsItem);
  return __jsx("div", {
    className: "detail-item-component",
    onTouchStart: handleTouchEvent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, data ? __jsx(external_react_default.a.Fragment, null, __jsx("div", {
    className: "message-header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "message-avatar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx(user_avatar["a" /* default */], {
    size: 0.36,
    src: data.userHeadUrl || avatar_default_default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "message-user",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "message-user-name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, data.userName || ''), __jsx("div", {
    className: "message-release-time",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, data.timespanText || ''))), __jsx("div", {
    className: "message-body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, data.content)) : __jsx("div", {
    className: "message-placeholder",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "message-header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "message-avatar-placeholder",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, " "), __jsx("div", {
    className: "message-user-placeholder",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, " ")), __jsx("div", {
    className: "message-body-placeholder",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "message-body-placeholder",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "message-body-placeholder",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "message-body-placeholder",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "message-body-placeholder",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }))));
};

/* harmony default export */ var components_detail_item = __webpack_exports__["a"] = (DetailItem);

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

/***/ "Jv45":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getUrlParameters; });
const getUrlParameters = name => {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return decodeURI(r[2]);
  return null;
};



/***/ }),

/***/ "LoKC":
/***/ (function(module, exports) {

module.exports = {
	"image-view-modal-container": "OYK8sE-wUjcJN4ZRlrt-L",
	"hidden": "_3H3mLqkbmsjlYaE56vZIqG",
	"right-handel": "f8Puh6k8Dyv1_OjfFVKLc",
	"volume": "DhAEzVcVjbhjo26dZqlog",
	"muted": "AborO1qRLIe9F7D4-0Dof",
	"close-button": "_1JHa9QiGTc9RzbNHXaHUuv",
	"showfullScreen": "_2qmesn-he42dqBeCsbiyPP",
	"image-container": "_2GZXLYoaI45Iw97WoH-I4J",
	"image-palceholder": "W9Djqh-pY5yGK0n8duddJ",
	"image-list-container": "_30BbaV1OS5KqUpu_L6DjN2",
	"image-count": "_1tBbA3_zIDHGeO_7Li_Llq",
	"count-number": "jplhxoCle2sN73TWNZRKt",
	"image-list-ccontent": "_3_7RwQJ8gGLUABJ2mc7ahu",
	"image-list-wrapper": "_34dSQ87e5gs-V756c0ai63",
	"image-list": "_2p0EpQ66C255HpDBV2yV8P",
	"image-item": "_1atpnNf56gJoq5gDtPKolB",
	"img-item-container": "_2i-ewxntqmgH4dAZj1TgjZ",
	"image-item-placeholder": "_3oxAq35Zy7RT7POjq1qF2M",
	"item-img": "ajvo5FB7EgKzYbuJr9E0s",
	"active": "_3bKYy26QqU-aPc9iUwqJcx"
};

/***/ }),

/***/ "N/ZP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TkyM");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("sGQ9");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_detail_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("EDEA");
/* harmony import */ var _static_images_like_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("szVv");
/* harmony import */ var _static_images_like_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_images_like_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _static_images_liked_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Rjtp");
/* harmony import */ var _static_images_liked_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_images_liked_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_comment_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("xzxb");
/* harmony import */ var _static_images_empty_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("S9MR");
/* harmony import */ var _static_images_empty_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_static_images_empty_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_detail_item_image_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("oqq6");
/* harmony import */ var _components_image_view_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("X3br");
/* harmony import */ var _subject_comment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("vcgd");
/* harmony import */ var _services_detail__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("OyYC");
/* harmony import */ var _hooks_messageBoxHooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("ODBD");
/* harmony import */ var _components_report__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("msBk");
/* harmony import */ var _components_scroll_container__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("wjFm");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("Jv45");
var _jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\pages\\detail\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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




















const DetailPage = ({
  articleData,
  articleId,
  path,
  documentTitle,
  description,
  keyword,
  urls,
  messageNums,
  shareNums,
  supportNums
}) => {
  const pageSize = 10;
  const defaultInputHeight = 35;
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    store
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(mobx_react__WEBPACK_IMPORTED_MODULE_3__["MobXProviderContext"]);
  const {
    user
  } = Object(mobx_react__WEBPACK_IMPORTED_MODULE_3__["useObserver"])(() => ({
    user: store.user
  }));
  const {
    0: commentList,
    1: setCommentList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: isLoaded,
    1: setIsLoaded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: commentPlaceHolderText,
    1: setCommentPlaceHolder
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('Isi Thread ...');
  const {
    0: imageList,
    1: setImageList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(urls || []);
  const {
    0: showImageModal,
    1: setShowImageModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: isFocus,
    1: setIsFocus
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: autoContentHeight,
    1: setAutoContentHeight
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultInputHeight);
  const textareaContainerElement = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const {
    0: inputValue,
    1: setInputValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: curSupportNums,
    1: setCurSupportNums
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(supportNums);
  const messageNumsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(messageNums);
  const shareNumsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(shareNums);
  const {
    0: supportFlag,
    1: setSupportFlag
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: isReply,
    1: setIsReply
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const beReplyData = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const isCommentSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  const isLikeSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  const showMessageBox = Object(_hooks_messageBoxHooks__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])();
  const service = new _services_detail__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"]();
  const {
    0: isApp,
    1: setIsApp
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: reportModal,
    1: setReportModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: reportOptionList,
    1: setReportOptionList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: scrollY,
    1: setScrollY
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!!user && user.userId > -1) {
      getSupportFlag();
    }
  }, [user]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const isApp = !!window.ReactNativeWebView;
    setIsApp(isApp);
    getCommentData();
    const args = Object(_util__WEBPACK_IMPORTED_MODULE_17__[/* getUrlParameters */ "a"])('scrollToComment');
    let timer;

    if (eval(args)) {
      timer = setTimeout(() => {
        const top = document.getElementById('comment').getBoundingClientRect().y; // console.log(top);
        // setScrollY(-top);
      }, 1000);
    }

    service.getReportOptionList().then(res => {
      setReportOptionList(res);
    });
    const commentSubscription = _subject_comment__WEBPACK_IMPORTED_MODULE_11__[/* CommentInputSubject */ "a"].subscribe(({
      action,
      messageData
    }) => {
      if (action === 'reply') {
        setCommentPlaceHolder('Balas ' + messageData.messageUserName);
        setIsFocus(true);
        setIsReply(true);
        textareaContainerElement.current.focus();
        beReplyData.current = messageData;
      } else if (action === 'delete-comment') {
        setIsFocus(false);
        deleteComment(messageData.id, messageData.content);
      } else if (action === 'delete-reply') {
        setIsFocus(false);
      }
    });
    return () => {
      clearTimeout(timer);
      commentSubscription.unsubscribe();
    };
  }, []);

  const getSupportFlag = () => {
    service.querySupportFlag(articleId).then(resp => {
      setSupportFlag(resp);
      isLikeSubmit.current = false;
    });
  };

  const getCommentData = () => {
    return service.getFirstMessagesList(articleId, 1, 10).then(({
      total,
      list
    }) => {
      setCommentList(list);
      setIsLoaded(true);
    });
  };

  const handleSubmitComment = () => {
    if (!user || user.userId <= 0 || !localStorage.getItem('token')) {
      store.showLoginModal();
      return;
    }

    if (!inputValue) {
      showMessageBox('error', 'error', 'Komentar is kosong!');
      return;
    }

    if (isCommentSubmit.current === false) {
      isCommentSubmit.current = true;
      let submitModel;

      if (isReply) {
        submitModel = {
          articleId: articleId,
          content: inputValue,
          messageUserid: user.userId,
          parentMessageId: beReplyData.current.parentMessageId,
          parentMessageUserid: beReplyData.current.parentMessageUserid,
          beMessageUserid: beReplyData.current.messageUserid
        };
      } else {
        submitModel = {
          articleId: articleId,
          content: inputValue,
          messageUserid: user.userId
        };
      }

      service.leavingMessage(submitModel).then(result => {
        isCommentSubmit.current = false;
        setInputValue('');
        let count = Number(messageNumsRef.current) + 1;
        messageNumsRef.current = count.toString();
        result.messageUserHeadUrl = user.headPortrait;
        result.messageUserName = user.nickname;

        if (isReply) {
          textareaContainerElement.current.blur();
          showMessageBox('success', 'success', 'Berhasil balas!');
          result.beMessageUserName = beReplyData.current.messageUserName;
          _subject_comment__WEBPACK_IMPORTED_MODULE_11__[/* CommentInputSubject */ "a"].next({
            action: 'refresh-reply',
            messageData: result
          }); //刷新二级评论列表
        } else {
          textareaContainerElement.current.blur();
          showMessageBox('success', 'success', 'Komentar berhasil!');
          addComment(result);
        }

        setAutoContentHeight(defaultInputHeight);
        setIsReply(false);
        setIsFocus(false);
      }).catch(error => {
        console.error(error);
        isCommentSubmit.current = false;
        showMessageBox('error', 'error', error.message || 'Komentar gagal！');
      });
    }
  }; //新增一条评论


  const addComment = commentItem => {
    setCommentList(commentList => [...commentList, commentItem]);
  }; //删除评论


  const deleteComment = (commentId, content) => {
    setCommentList(commentList => commentList.filter(item => {
      if (item.id === commentId) {
        item.content = content;
        item.status = 2;
        return item;
      } else {
        return item;
      }
    }));
  };

  const toCommentList = () => {
    if (isApp) {
      window.ReactNativeWebView.postMessage(JSON.stringify({
        action: 'gotoCommentList',
        data: {
          articleId
        }
      }));
    } else {
      router.push(`/forum/comment/${articleId}`);
    }
  };

  const handleShowImageModal = imageItem => {
    setImageList(imageList => imageList.map(item => {
      item.active = item.url === imageItem.url;
      return item;
    }));
    setShowImageModal(true);
  };

  const handleCloseImageModal = () => {
    setShowImageModal(false);
  };

  const handleInputFocus = () => {
    if (!user || user.userId <= 0 || !localStorage.getItem('token')) {
      textareaContainerElement.current.blur();
      store.showLoginModal();
      return;
    }

    setIsFocus(true);
  };

  const handleInputBlur = () => {
    setIsFocus(false);
    setCommentPlaceHolder('Isi Thread ...');
  };

  const handelValueChange = event => {
    const {
      target
    } = event;
    let {
      value
    } = target;
    setInputValue(value);
    const scrollHeight = textareaContainerElement.current.scrollHeight;
    setAutoContentHeight(scrollHeight);
  };

  const handelKeyDown = event => {
    if (event.keyCode == 13) {
      handleSubmitComment();
      event.preventDefault();
      return false;
    }
  };

  const handelLikeIt = () => {
    if (!user || user.userId <= 0 || !localStorage.getItem('token')) {
      store.showLoginModal();
    } else {
      if (isLikeSubmit.current === false) {
        isLikeSubmit.current = true;
        service.updateArticleLike(articleId).then(resp => {
          isLikeSubmit.current = false;

          if (supportFlag) {
            setSupportFlag(false);
            countSupportNum(-1);
          } else {
            setSupportFlag(true);
            countSupportNum(1);
          }
        }).catch(error => {
          console.error(error);
          isLikeSubmit.current = false;
          showMessageBox('error', 'error', 'Like gagal!');
        });
      }
    }
  };

  const countSupportNum = plus => {
    let num = Number(curSupportNums) + plus;

    if (num > 999) {
      num = '999+';
    }

    setCurSupportNums(num);
  };

  const backToIndex = () => {
    if (isApp) {
      window.ReactNativeWebView.postMessage(JSON.stringify({
        action: 'goBack'
      }));
    } else {
      router.push('/');
    }
  };

  const closeReportModal = () => {
    setReportModal(false);
  };

  const handleClickReport = () => {
    if (!user || user.userId <= 0 || !localStorage.getItem('token')) {
      store.showLoginModal();
      return;
    }

    setReportModal(true);
  };

  const handleClickShare = () => {
    if (isApp) {
      window.ReactNativeWebView.postMessage(JSON.stringify({
        action: 'share',
        data: {
          articleId: articleId
        }
      }));
      service.updateArticleShareNums(articleId).then(resp => {
        console.log('分享成功');
      }).catch(error => {
        console.error(error);
        showMessageBox('error', 'error', 'Gagal dibagikan!');
      });
    }

    countShareNum(1);
  };

  const countShareNum = plus => {
    if (shareNumsRef.current !== '999+') {
      let num = Number(shareNumsRef.current) + plus;

      if (num > 999) {
        num = '999+';
      }

      shareNumsRef.current = num;
    }
  };

  const handlePullDownRefresh = () => {
    return getCommentData();
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_16___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 9
    }
  }, documentTitle), __jsx("meta", {
    property: "og:url",
    content: path,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:type",
    content: "article",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:site_name",
    content: "OTOLOKA",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "fb:admins",
    content: "max.oto.967",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:title",
    content: documentTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:description",
    content: description,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "twitter:card",
    content: "summary_large_image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "twitter:site",
    content: "@otoloka_id",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "twitter:creator",
    content: "@otoloka_id",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "twitter:url",
    content: path,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "twitter:title",
    content: documentTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "twitter:description",
    content: description,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "description",
    content: description,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "keywords",
    content: keyword,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "author",
    content: "Otoloka",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "language",
    content: "id",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "canonical",
    href: path,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['detail-page-container'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['detail-header'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 9
    }
  }, __jsx("div", {
    onClick: backToIndex,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: `icon-font uniE906 ${_index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['icon-close']}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['handel-container'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['report-container'],
    onClick: handleClickReport,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "icon-font uniE90F",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['share-container'],
    onClick: handleClickShare,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "icon-font uniE900",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455,
      columnNumber: 15
    }
  })))), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['detail-container'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460,
      columnNumber: 9
    }
  }, __jsx(_components_scroll_container__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
    onPullDown: handlePullDownRefresh,
    y: scrollY,
    pullUp: false,
    observeDOM: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['detail-content'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467,
      columnNumber: 13
    }
  }, __jsx(_components_detail_item__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    data: articleData,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['image-list'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469,
      columnNumber: 15
    }
  }, imageList.length > 0 ? __jsx(_components_detail_item_image_list__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
    imageList: imageList,
    onClickImgItem: handleShowImageModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 19
    }
  }) : null)), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['split-underline'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['detail-comment'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['detail-comment-header'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['comment-title'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481,
      columnNumber: 17
    }
  }, "Komentar", __jsx("span", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['count'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483,
      columnNumber: 19
    }
  }, "(", messageNumsRef.current, ")")), isLoaded && commentList.length > 0 ? __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['comment-all'],
    onClick: toCommentList,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488,
      columnNumber: 19
    }
  }, "Lihat semua") : null), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['comment-wrapper'],
    id: "comment",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497,
      columnNumber: 15
    }
  }, __jsx("ul", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['comment-list-content'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 17
    }
  }, commentList.map((item, index) => __jsx("li", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['comment-item'],
    key: item ? item.id + 99899 : index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500,
      columnNumber: 21
    }
  }, __jsx(_components_comment_item__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    data: item,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 23
    }
  })))), commentList.length === 0 && isLoaded ? __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['empty-comment'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: _static_images_empty_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['empty-img'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['no-comment'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511,
      columnNumber: 21
    }
  }, "Jadilah orang pertama yang berkomentar.")) : null)))), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['comment-footer'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521,
      columnNumber: 9
    }
  }, __jsx("textarea", {
    ref: textareaContainerElement,
    className: `${_index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['comment-input']} ${isFocus ? _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['is-focus'] : ''}`,
    onFocus: handleInputFocus,
    onBlur: handleInputBlur,
    style: {
      height: autoContentHeight
    },
    onChange: handelValueChange,
    value: inputValue,
    onKeyDown: handelKeyDown,
    placeholder: commentPlaceHolderText,
    maxLength: 2000,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522,
      columnNumber: 11
    }
  }), isFocus ? null : articleData ? __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['like-it'],
    onClick: handelLikeIt,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['interaction-icon'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538,
      columnNumber: 15
    }
  }, supportFlag ? __jsx("img", {
    src: _static_images_liked_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "like",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540,
      columnNumber: 19
    }
  }) : __jsx("img", {
    src: _static_images_like_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "like",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542,
      columnNumber: 21
    }
  })), __jsx("span", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a['interaction-count'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 545,
      columnNumber: 15
    }
  }, curSupportNums)) : null)), showImageModal ? __jsx(_components_image_view_modal__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    imageList: imageList,
    onClose: handleCloseImageModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553,
      columnNumber: 9
    }
  }) : null, reportModal ? __jsx(_components_report__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
    optionList: reportOptionList,
    articleId: articleId,
    show: reportModal,
    onClose: closeReportModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559,
      columnNumber: 9
    }
  }) : null);
};

DetailPage.getInitialProps = function ({
  query,
  res
}) {
  try {
    const {
      id
    } = query;
    const articleId = id + '';
    const service = new _services_detail__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"]();
    return Promise.resolve(_catch(function () {
      return Promise.resolve(service.queryArticleDetails(articleId)).then(function (articleDetail) {
        if (articleDetail.code === 9990) {
          return _objectSpread({}, query, {
            code: articleDetail.code
          });
        }

        articleDetail.documentTitle = articleDetail.title;
        return _objectSpread({}, query, {}, articleDetail, {
          articleData: articleDetail
        });
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

/* harmony default export */ __webpack_exports__["default"] = (DetailPage);

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

/***/ "PC/4":
/***/ (function(module, exports) {

module.exports = {
	"radio-component": "_1jAt0iy1maJwve9AiR9iiP",
	"circle-container": "_1HSFx6DESGNtFMFltrm_cm",
	"selected": "_18-0Njua_RnzbtyFMCi3J-",
	"outer-circle": "_2J-cvMVfWuv6SCZJ4VErk2",
	"inner-circle": "_3HSoU8mf1PpcFOgblSkLKr",
	"radio-label": "_3Wr4bO-uhWvSTBcHh_fj4j"
};

/***/ }),

/***/ "Pdzu":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjMyOHB4IiBoZWlnaHQ9IjE2NHB4IiB2aWV3Qm94PSIwIDAgMzI4IDE2NCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDYwLjEgKDg4MTMzKSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4NCiAgICA8dGl0bGU+5Zu+54mH5o2f5Z2PLTI6MTwvdGl0bGU+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGRlZnM+DQogICAgICAgIDxyZWN0IGlkPSJwYXRoLTEiIHg9IjAiIHk9IjAiIHdpZHRoPSIzMjgiIGhlaWdodD0iMTY0IiByeD0iNSI+PC9yZWN0Pg0KICAgIDwvZGVmcz4NCiAgICA8ZyBpZD0iMS4zLjEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBpZD0i5pCc57Si57uT5p6c5aSH5Lu9LTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNi4wMDAwMDAsIC0xNDIuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyBpZD0i5Zu+54mH5o2f5Z2PLTI6MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYuMDAwMDAwLCAxNDIuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgaWQ9IuS9jeWbvuWkh+S7vS03Ij4NCiAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stMiIgZmlsbD0id2hpdGUiPg0KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4NCiAgICAgICAgICAgICAgICAgICAgPC9tYXNrPg0KICAgICAgICAgICAgICAgICAgICA8dXNlIGlkPSLokpnniYgiIGZpbGw9IiNGNkY3RjkiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgICAgICA8ZyBpZD0i57yW57uEIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzQuMDAwMDAwLCA0Ni4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPg0KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNjAsNjAuMjE4NTc5MiBMNjAsMTMuNTUxOTEyNiBDNTkuOTg5MDE3Myw5Ljg3NDU3MzAxIDU3LjAxMDY3MjksNi44OTYyMjg1NyA1My4zMzMzMzMzLDYuODg1MjQ1OSBMNi42NjY2NjY2Nyw2Ljg4NTI0NTkgQzIuOTg5MzI3MTEsNi44OTYyMjg1NyAwLjAxMDk4MjY3MDQsOS44NzQ1NzMwMSAwLDEzLjU1MTkxMjYgTDAsNjAuMjE4NTc5MiBDMC4wMTA5ODI2NzA0LDYzLjg5NTkxODggMi45ODkzMjcxMSw2Ni44NzQyNjMyIDYuNjY2NjY2NjcsNjYuODg1MjQ1OSBMNTMuMzMzMzMzMyw2Ni44ODUyNDU5IEM1Ny4wMTA2NzI5LDY2Ljg3NDI2MzIgNTkuOTg5MDE3Myw2My44OTU5MTg4IDYwLDYwLjIxODU3OTIgTDYwLDYwLjIxODU3OTIgWiBNMTguMzMzMzMzMyw0MS44ODUyNDU5IEwyNi42NjY2NjY3LDUxLjkxODU3OTIgTDM4LjMzMzMzMzMsMzYuODg1MjQ1OSBMNTMuMzMzMzMzMyw1Ni44ODUyNDU5IEw2LjY2NjY2NjY3LDU2Ljg4NTI0NTkgTDE4LjMzMzMzMzMsNDEuODg1MjQ1OSBaIiBpZD0i5b2i54q2IiBmaWxsPSIjRURFRUYwIj48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSLot6/lvoQiIGZpbGw9IiNGNkY3RjkiIHBvaW50cz0iMjMuMjMyMTI2NCAzNS43MTA2NTM1IDMyLjEwNDkyNzMgMCAzOC4zOTg0MDA1IDEuNjYyODMxNzggMzAuODA5ODQ5MiAzMi4yMTA2NjA4IDQ2LjIyOTUwODIgNDAuNDYyMjQgMjMuOTg1NzgzOCA3Mi43ODY4ODUyIDE4LjY4ODUyNDYgNjguOTAyNDc0NCAzNi42MDczODExIDQyLjg2NDg1MzEiPjwvcG9seWdvbj4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4="

/***/ }),

/***/ "Rjtp":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNS42MjUgNS43ODFjLS4yNjcuNTI0LS40NjYuOTIzLS41OTcgMS4xOTZsLS4xMTkuMjU3LjAwMSA5LjE3NmExIDEgMCAwIDAgMSAxaDguMTQ3YzEuMzczIDAgMi41NTItMS4wMDggMi43OS0yLjM5NUwxNy45OCA4LjM4Yy4wMTItLjA3NC4wMTktLjE1LjAxOS0uMjI1IDAtLjcyMy0uNTctMS4zMDItMS4yNjgtMS4zMDJIOS42bDEuNDctNC4xMzZjLjI5LS43NjgtLjE0Ny0xLjU2OC0uODQyLTEuOTc2QzkuOTQuNTcyIDkuMjczLjQ4NyA4Ljk1LjU3MmMtLjMyMS4wODYtLjczMi4yNjUtLjg5Ny41NTNhNDEwLjg2IDQxMC44NiAwIDAgMC0yLjQyOSA0LjY1NnptLTIuODUyIDEuODFILjVhLjUuNSAwIDAgMC0uNS41djguODE5YS41LjUgMCAwIDAgLjUuNWgyLjI3M2EuNS41IDAgMCAwIC41LS41VjguMDkyYS41LjUgMCAwIDAtLjUtLjV6IiBmaWxsPSIjRkY1NjU2IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4="

/***/ }),

/***/ "S9MR":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/empty-45c4c80f246c82590a28f866b62955b7.svg";

/***/ }),

/***/ "TkyM":
/***/ (function(module, exports) {

module.exports = {
	"detail-page-container": "_10pSrobrqUps1TjrugJo5A",
	"detail-header": "JDXDJvOE2ZHkWKA_SmlLj",
	"handel-container": "s8t8NruiqDLoLe4wAyxDa",
	"report-container": "_25JxlZHf0M1QsHdkm9wHP8",
	"detail-container": "sM5b0z0o_CRFzWXsxRt1-",
	"detail-content": "_3Vy9KtKlftCj6BberWU9f-",
	"image-list": "_1kHfmvtUZ6aSX7FpgaECkO",
	"split-underline": "b9tGOtUu7eeuBO309iH5L",
	"detail-comment": "_1bY4ZL8oA5kSQhD4deOl-A",
	"detail-comment-header": "_2uX8XB5XaEIOd4QbllJwAF",
	"comment-title": "_2RS84zaT1J5KjHC9U3NqaV",
	"count": "_1F-kEXvdlkGlyQ5UE4jRKp",
	"comment-all": "_19kv7ehVkS9k7i4IVOWBtO",
	"comment-wrapper": "_3eG8P5k2Iivu2b3kTQ_7eP",
	"empty-comment": "dacQmdCubA-iFPiCi8R1B",
	"empty-img": "_3ZnqzqXfsSN2krQPMmxNA5",
	"no-comment": "_2OjZys9wLAn-FbUd4xw1lX",
	"comment-list-content": "_2YntRcCpFh2YpXw5heAOma",
	"comment-item": "_1fBHDBr6BzhcoS5EDC5B2g",
	"comment-footer": "_1sFMnDp4FwVp6xRx6dUVHl",
	"comment-input": "_3aG4ZBBMS2ooUBLZuMoPGq",
	"is-focus": "_3j1UxzyWtgAkYALT3W3sl-",
	"like-it": "n2SmFwzXpDCZlZr1-64v3",
	"interaction-icon": "_2TR0cG_HsKk2ruvIhZMOW9",
	"interaction-count": "_2sudolCNaoGeXwn3TG7-Pv"
};

/***/ }),

/***/ "Ts2V":
/***/ (function(module, exports) {

module.exports = {
	"swiper-video-component": "swiper-video-component",
	"single-videos": "single-videos",
	"loading-container": "loading-container",
	"video-background": "video-background",
	"icon-font": "icon-font"
};

/***/ }),

/***/ "Vgaj":
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),

/***/ "Wsj/":
/***/ (function(module, exports) {

module.exports = require("fecha");

/***/ }),

/***/ "X3br":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__("faye");
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// EXTERNAL MODULE: ./components/image-view-modal/index.module.scss
var index_module = __webpack_require__("LoKC");
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);

// EXTERNAL MODULE: external "mousetrap"
var external_mousetrap_ = __webpack_require__("5tF+");
var external_mousetrap_default = /*#__PURE__*/__webpack_require__.n(external_mousetrap_);

// EXTERNAL MODULE: ./static/images/pleaceholder.svg
var pleaceholder = __webpack_require__("aV0h");
var pleaceholder_default = /*#__PURE__*/__webpack_require__.n(pleaceholder);

// EXTERNAL MODULE: external "swiper"
var external_swiper_ = __webpack_require__("1nAM");
var external_swiper_default = /*#__PURE__*/__webpack_require__.n(external_swiper_);

// EXTERNAL MODULE: ./components/swiper-video/index.scss
var swiper_video = __webpack_require__("Ts2V");

// EXTERNAL MODULE: ./components/video-loading/index.tsx
var video_loading = __webpack_require__("842X");

// CONCATENATED MODULE: ./components/swiper-video/index.tsx
var _jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\components\\swiper-video\\index.tsx";
var __jsx = external_react_default.a.createElement;




const SwiperVideo = ({
  click = false,
  data,
  onBufferStatusChange,
  muted,
  autoPlay,
  onPlay,
  loading = false,
  onPause
}) => {
  const checkInterval = Object(external_react_["useRef"])(50.0);
  const lastPlayPos = Object(external_react_["useRef"])(0);
  const currentPlayPos = Object(external_react_["useRef"])(0);
  const bufferingDetected = Object(external_react_["useRef"])(false);
  const {
    0: canPlay,
    1: setCanPlay
  } = Object(external_react_["useState"])(false);
  const {
    0: showLoading,
    1: setShowLoading
  } = Object(external_react_["useState"])(false);
  const videoPlayer = Object(external_react_["useRef"])();
  const {
    0: videoActive,
    1: setVideoActive
  } = Object(external_react_["useState"])(data.videoActive);
  const timer = Object(external_react_["useRef"])();
  Object(external_react_["useEffect"])(() => {
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

    if (typeof onPause === 'function') {
      onPause();
    }
  };

  const handleChangeVideoPlayState = event => {
    if (click) {
      event.stopPropagation();

      if (videoPlayer.current.paused) {
        videoPlayer.current.play();
        setVideoActive(true);
      } else {
        videoPlayer.current.pause();
        setVideoActive(false);
      }
    }
  };

  const checkBuffering = () => {
    currentPlayPos.current = videoPlayer.current.currentTime; // checking offset should be at most the check interval
    // but allow for some margin

    var offset = (checkInterval.current - 20) / 1000; // if no buffering is currently detected,
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
    className: "swiper-video-component",
    onClick: handleChangeVideoPlayState,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 5
    }
  }, showLoading ? __jsx("div", {
    className: "loading-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 9
    }
  }, __jsx(video_loading["a" /* default */], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 11
    }
  })) : null, __jsx("video", {
    className: "single-videos",
    muted: muted,
    poster: data.headUrl,
    onPause: handelPause,
    onPlay: handelPlay,
    onCanPlay: handleCanplay,
    autoPlay: autoPlay,
    onLoadStart: handleLoadStart,
    preload: "auto",
    ref: videoPlayer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 7
    }
  }, __jsx("source", {
    src: data.url,
    type: "video/mp4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 9
    }
  })), videoActive ? null : __jsx("i", {
    className: "video-background",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "icon-font uniE909",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 11
    }
  })));
};

/* harmony default export */ var components_swiper_video = (SwiperVideo);
// CONCATENATED MODULE: ./components/image-view-modal/index.tsx
var image_view_modal_jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\components\\image-view-modal\\index.tsx";
var image_view_modal_jsx = external_react_default.a.createElement;








const ImageViewModal = ({
  imageList,
  onClose
}) => {
  const {
    0: id
  } = Object(external_react_["useState"])('publishImg' + (Math.random() * 1000000).toFixed(0));
  const {
    0: showFullScreen,
    1: setShowFullScreen
  } = Object(external_react_["useState"])(false);
  const {
    0: hidden,
    1: setHidden
  } = Object(external_react_["useState"])(true);
  const {
    0: $imageList,
    1: setImageList
  } = Object(external_react_["useState"])(imageList);
  const imageListElememt = Object(external_react_["useRef"])();
  const {
    0: count,
    1: setCount
  } = Object(external_react_["useState"])(imageList.findIndex(item => item.active) + 1);
  const {
    0: startIndex,
    1: setStartIndex
  } = Object(external_react_["useState"])(imageList.findIndex(item => item.active));
  const {
    0: isMuted,
    1: setIsMuted
  } = Object(external_react_["useState"])(true);
  const isMutedRef = Object(external_react_["useRef"])(true);
  const {
    0: showHorn,
    1: setShowHorn
  } = Object(external_react_["useState"])(false);
  const mySwiper = Object(external_react_["useRef"])();
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  Object(external_react_["useLayoutEffect"])(() => {
    mySwiper.current = new external_swiper_default.a(`#${id} .swiper-container`, {
      speed: 1000,
      initialSlide: startIndex,
      autoplay: false,
      loop: false,
      on: {
        slideChangeTransitionStart: function () {
          setCount(this.activeIndex + 1);
          setStartIndex(this.activeIndex);
          const item = imageList[this.activeIndex];
          setImageList(imageList => imageList.map(imageItem => {
            if (item.url === imageItem.url) {
              imageItem.active = true;
            } else {
              imageItem.active = false;
            }

            return imageItem;
          }));
          handelShowHorn(this.activeIndex);
          handelVideoAutoPlay();
          imageListElememt.current.scrollTo({
            top: 0,
            left: this.activeIndex * 42,
            behavior: 'smooth'
          });
        }
      }
    });
    return () => {
      mySwiper.current.destroy(true, true);
    };
  }, [id]);
  Object(external_react_["useEffect"])(() => {
    setTimeout(() => {
      setHidden(false);
    }, 20);
    external_mousetrap_default.a.bind('esc', handleCloseModal);

    if (startIndex == 0) {
      handelShowHorn(startIndex);
    }

    imageListElememt.current.scrollTo({
      top: 0,
      left: startIndex * 42,
      behavior: 'smooth'
    });
    let timer = setTimeout(() => {
      showFullScreenImg();
    }, 2000);
    return () => {
      clearTimeout(timer);
      external_mousetrap_default.a.unbind('esc');
    };
  }, []);

  const handelShowHorn = index => {
    if (imageList[index].type === 2) {
      setShowHorn(true);
    } else {
      setShowHorn(false);
    }
  };

  const handleCloseModal = () => {
    setHidden(true);
  };

  const handelVideoAutoPlay = () => {
    const targetList = document.getElementsByTagName('video');

    for (let i = 0; i < targetList.length; i++) {
      const target = targetList[i];

      if (target.paused && target.autoplay) {
        target.muted = isMutedRef.current;
        target.play();
      } else if (!target.paused) {
        target.muted = true;
        target.pause();
      }
    }
  };

  const handleClickImage = (item, index) => {
    return () => {
      let count = index + 1;
      setImageList(imageList => imageList.map((imageItem, imgindex) => {
        if (item.url === imageItem.url) {
          imageItem.active = true;
        } else {
          imageItem.active = false;
        }

        return imageItem;
      }));
      const targetList = document.getElementsByTagName('video');

      for (let i = 0; i < targetList.length; i++) {
        const target = targetList[i];
        target.muted = true;
        target.pause();
      }

      mySwiper.current.slideTo(index, 300, false);
      setStartIndex(index);
      setCount(count);
    };
  };

  const showFullScreenImg = () => {
    setShowFullScreen(!showFullScreen);
  };

  const handleCloseAnimationEnd = () => {
    if (hidden === true) {
      if (typeof onClose === 'function') {
        onClose();
      }
    }
  };

  const handelVideoMuted = () => {
    isMutedRef.current = !isMutedRef.current;
    setIsMuted(isMutedRef.current);
    const targetList = document.getElementsByTagName('video');

    for (let i = 0; i < targetList.length; i++) {
      const target = targetList[i];

      if (target.autoplay) {
        target.muted = isMutedRef.current;
      }
    }
  };

  const handelPlay = () => {
    setShowFullScreen(true);
  };

  const handelPause = () => {
    setShowFullScreen(false);
  };

  return external_react_dom_default.a.createPortal(image_view_modal_jsx("div", {
    id: id,
    onTransitionEnd: handleCloseAnimationEnd,
    className: `${index_module_default.a['image-view-modal-container']} ${hidden ? index_module_default.a['hidden'] : ''}`,
    __self: undefined,
    __source: {
      fileName: image_view_modal_jsxFileName,
      lineNumber: 205,
      columnNumber: 5
    }
  }, image_view_modal_jsx("div", {
    className: index_module_default.a['right-handel'],
    __self: undefined,
    __source: {
      fileName: image_view_modal_jsxFileName,
      lineNumber: 212,
      columnNumber: 7
    }
  }, showHorn ? image_view_modal_jsx("div", {
    className: index_module_default.a['volume'],
    onClick: handelVideoMuted,
    __self: undefined,
    __source: {
      fileName: image_view_modal_jsxFileName,
      lineNumber: 214,
      columnNumber: 11
    }
  }, image_view_modal_jsx("span", {
    className: `icon-font ${isMuted ? `uniE912 ${index_module_default.a['muted']}` : 'uniE911'}`,
    __self: undefined,
    __source: {
      fileName: image_view_modal_jsxFileName,
      lineNumber: 215,
      columnNumber: 13
    }
  })) : null, image_view_modal_jsx("div", {
    className: `${index_module_default.a['close-button']} ${showFullScreen ? index_module_default.a['showfullScreen'] : index_module_default.a['notfullScreen']}`,
    onClick: handleCloseModal,
    __self: undefined,
    __source: {
      fileName: image_view_modal_jsxFileName,
      lineNumber: 218,
      columnNumber: 9
    }
  }, image_view_modal_jsx("span", {
    className: "icon-font uniE907",
    __self: undefined,
    __source: {
      fileName: image_view_modal_jsxFileName,
      lineNumber: 224,
      columnNumber: 11
    }
  }))), image_view_modal_jsx("div", {
    className: "swiper-container",
    __self: undefined,
    __source: {
      fileName: image_view_modal_jsxFileName,
      lineNumber: 229,
      columnNumber: 7
    }
  }, image_view_modal_jsx("div", {
    className: "swiper-wrapper",
    __self: undefined,
    __source: {
      fileName: image_view_modal_jsxFileName,
      lineNumber: 230,
      columnNumber: 9
    }
  }, $imageList.map((item, index) => image_view_modal_jsx("div", {
    key: index,
    className: `swiper-slide   ${item.height / vh > item.width / vw ? 'overFull' : 'notFull'}`,
    __self: undefined,
    __source: {
      fileName: image_view_modal_jsxFileName,
      lineNumber: 232,
      columnNumber: 13
    }
  }, item.type === 1 ? image_view_modal_jsx("img", {
    src: item.url,
    className: "zoom",
    alt: "zoom",
    onClick: showFullScreenImg,
    __self: undefined,
    __source: {
      fileName: image_view_modal_jsxFileName,
      lineNumber: 234,
      columnNumber: 17
    }
  }) : image_view_modal_jsx("div", {
    className: `video-zoom`,
    __self: undefined,
    __source: {
      fileName: image_view_modal_jsxFileName,
      lineNumber: 241,
      columnNumber: 19
    }
  }, image_view_modal_jsx(components_swiper_video, {
    data: item,
    onPlay: handelPlay,
    onPause: handelPause,
    autoPlay: item.active,
    muted: item.active,
    click: true,
    loading: true,
    __self: undefined,
    __source: {
      fileName: image_view_modal_jsxFileName,
      lineNumber: 242,
      columnNumber: 21
    }
  })))))), image_view_modal_jsx("div", {
    className: `${index_module_default.a['image-list-container']} ${showFullScreen ? index_module_default.a['showfullScreen'] : index_module_default.a['notfullScreen']}`,
    __self: undefined,
    __source: {
      fileName: image_view_modal_jsxFileName,
      lineNumber: 258,
      columnNumber: 7
    }
  }, image_view_modal_jsx("div", {
    className: index_module_default.a['image-count'],
    __self: undefined,
    __source: {
      fileName: image_view_modal_jsxFileName,
      lineNumber: 263,
      columnNumber: 9
    }
  }, image_view_modal_jsx("span", {
    className: index_module_default.a['count-number'],
    __self: undefined,
    __source: {
      fileName: image_view_modal_jsxFileName,
      lineNumber: 264,
      columnNumber: 11
    }
  }, count), image_view_modal_jsx("span", {
    __self: undefined,
    __source: {
      fileName: image_view_modal_jsxFileName,
      lineNumber: 265,
      columnNumber: 11
    }
  }, " /", $imageList.length)), image_view_modal_jsx("div", {
    className: index_module_default.a['image-list-ccontent'],
    __self: undefined,
    __source: {
      fileName: image_view_modal_jsxFileName,
      lineNumber: 267,
      columnNumber: 9
    }
  }, image_view_modal_jsx("div", {
    className: index_module_default.a['image-list-wrapper'],
    __self: undefined,
    __source: {
      fileName: image_view_modal_jsxFileName,
      lineNumber: 268,
      columnNumber: 11
    }
  }, image_view_modal_jsx("ul", {
    ref: imageListElememt,
    className: index_module_default.a['image-list'],
    __self: undefined,
    __source: {
      fileName: image_view_modal_jsxFileName,
      lineNumber: 269,
      columnNumber: 13
    }
  }, $imageList.map((item, index) => image_view_modal_jsx("li", {
    key: index,
    className: `${index_module_default.a['image-item']} ${item.active ? index_module_default.a['active'] : ''}`,
    onClick: handleClickImage(item, index),
    __self: undefined,
    __source: {
      fileName: image_view_modal_jsxFileName,
      lineNumber: 271,
      columnNumber: 17
    }
  }, item.type === 1 ? image_view_modal_jsx("span", {
    className: index_module_default.a['image-item-placeholder'],
    style: {
      backgroundImage: `url('${item.url}')`
    },
    __self: undefined,
    __source: {
      fileName: image_view_modal_jsxFileName,
      lineNumber: 279,
      columnNumber: 21
    }
  }, image_view_modal_jsx("img", {
    className: index_module_default.a['item-img'],
    src: item.url,
    alt: "car-image-small",
    onError: () => item.url = pleaceholder_default.a,
    __self: undefined,
    __source: {
      fileName: image_view_modal_jsxFileName,
      lineNumber: 283,
      columnNumber: 23
    }
  })) : image_view_modal_jsx("div", {
    className: index_module_default.a['img-item-container'],
    __self: undefined,
    __source: {
      fileName: image_view_modal_jsxFileName,
      lineNumber: 291,
      columnNumber: 23
    }
  }, item.headUrl.includes('#t=1') ? image_view_modal_jsx("video", {
    __self: undefined,
    __source: {
      fileName: image_view_modal_jsxFileName,
      lineNumber: 293,
      columnNumber: 27
    }
  }, image_view_modal_jsx("source", {
    src: item.headUrl,
    type: "video/mp4",
    __self: undefined,
    __source: {
      fileName: image_view_modal_jsxFileName,
      lineNumber: 294,
      columnNumber: 29
    }
  })) : image_view_modal_jsx(external_react_default.a.Fragment, null, image_view_modal_jsx("img", {
    className: index_module_default.a['item-img'],
    src: item.headUrl,
    alt: "car-image-small",
    onError: () => item.headUrl = pleaceholder_default.a,
    __self: undefined,
    __source: {
      fileName: image_view_modal_jsxFileName,
      lineNumber: 298,
      columnNumber: 31
    }
  })))))))))), document.body);
};

/* harmony default export */ var image_view_modal = __webpack_exports__["a"] = (ImageViewModal);

/***/ }),

/***/ "XJRc":
/***/ (function(module, exports) {

module.exports = require("socks5-http-client/lib/Agent");

/***/ }),

/***/ "XnvR":
/***/ (function(module, exports) {

module.exports = {
	"comment-item-container": "comment-item-container",
	"comment-item-avator": "comment-item-avator",
	"message-operation": "message-operation",
	"release-time": "release-time",
	"reply": "reply",
	"delete": "delete",
	"more-reply-wrapper": "more-reply-wrapper",
	"text": "text",
	"line": "line",
	"comment-item-content": "comment-item-content",
	"main-message": "main-message",
	"main-message-content": "main-message-content",
	"message-user": "message-user",
	"message-user-name": "message-user-name",
	"message-body": "message-body",
	"comment-item-component-placeholder": "comment-item-component-placeholder",
	"comment-header": "comment-header",
	"comment-avatar-placeholder": "comment-avatar-placeholder",
	"comment-user-placeholder": "comment-user-placeholder"
};

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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dAgW":
/***/ (function(module, exports) {

module.exports = {
	"comment-reply-container": "comment-reply-container",
	"replay-message": "replay-message",
	"replay-message-list": "replay-message-list",
	"replay-list-item": "replay-list-item",
	"replay-item-avator": "replay-item-avator",
	"replay-item-content": "replay-item-content",
	"replay-users": "replay-users",
	"replay-text": "replay-text",
	"replay-body": "replay-body",
	"message-operation": "message-operation",
	"release-time": "release-time",
	"reply": "reply",
	"delete": "delete"
};

/***/ }),

/***/ "f1Q/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomChangeSubject; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Vgaj");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);

const DomChangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();


/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "gzpv":
/***/ (function(module, exports) {

module.exports = {
	"radio-group-component": "_3Umm319XDxVZ0Isi6hYH06",
	"row": "_1UA70RG66PTEnpVKOdwoWu",
	"column": "_2X8ENLTZbac2RNT-CQdwgN"
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

/***/ "mBdx":
/***/ (function(module, exports) {

module.exports = require("antd-mobile");

/***/ }),

/***/ "msBk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/report/index.module.scss
var index_module = __webpack_require__("y4Mb");
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);

// EXTERNAL MODULE: ./components/radio-group/index.module.scss
var radio_group_index_module = __webpack_require__("gzpv");
var radio_group_index_module_default = /*#__PURE__*/__webpack_require__.n(radio_group_index_module);

// EXTERNAL MODULE: ./components/radio/index.module.scss
var radio_index_module = __webpack_require__("PC/4");
var radio_index_module_default = /*#__PURE__*/__webpack_require__.n(radio_index_module);

// CONCATENATED MODULE: ./components/radio/index.tsx
var _jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\components\\radio\\index.tsx";
var __jsx = external_react_default.a.createElement;




const Radio = ({
  label,
  value,
  onChange
}) => {
  const radioGroupValue = Object(external_react_["useContext"])(RadioGroupContext);

  const handleClickRadio = () => {
    if (typeof onChange === 'function') {
      onChange({
        detail: value
      });
    }
  };

  return __jsx("div", {
    className: `${radio_index_module_default.a['radio-component']} ${radioGroupValue === value ? radio_index_module_default.a.selected : ''}`,
    onClick: handleClickRadio,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: radio_index_module_default.a['circle-container'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: radio_index_module_default.a['outer-circle'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: radio_index_module_default.a['inner-circle'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: radio_index_module_default.a['radio-label'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, label));
};

/* harmony default export */ var components_radio = (Radio);
// CONCATENATED MODULE: ./components/radio-group/index.tsx
var radio_group_jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\components\\radio-group\\index.tsx";
var radio_group_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const RadioGroupContext = Object(external_react_["createContext"])('');
const RadioGroupConsumer = RadioGroupContext.Consumer;
const RadioGroupProvider = RadioGroupContext.Provider;

const RadioGroup = ({
  value,
  options,
  onChange,
  style,
  itemClass,
  direction
}) => {
  const {
    0: radioValue,
    1: setRadioValue
  } = Object(external_react_["useState"])(value);
  Object(external_react_["useEffect"])(() => {
    setRadioValue(value);
  }, [value]);

  const handleRadioValueChange = event => {
    setRadioValue(event.detail);

    if (typeof onChange === 'function') {
      onChange({
        detail: event.detail
      });
    }
  };

  return radio_group_jsx(RadioGroupProvider, {
    value: radioValue,
    __self: undefined,
    __source: {
      fileName: radio_group_jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, radio_group_jsx("div", {
    className: `${radio_group_index_module_default.a['radio-group-component']} ${direction === 'row' ? radio_group_index_module_default.a['row'] : radio_group_index_module_default.a['column']}`,
    style: style,
    __self: undefined,
    __source: {
      fileName: radio_group_jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, options.map(item => radio_group_jsx("div", {
    className: itemClass,
    key: item.value,
    __self: undefined,
    __source: {
      fileName: radio_group_jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, radio_group_jsx(components_radio, _extends({}, item, {
    onChange: handleRadioValueChange,
    __self: undefined,
    __source: {
      fileName: radio_group_jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }))))));
};

/* harmony default export */ var radio_group = (RadioGroup);

// EXTERNAL MODULE: external "antd-mobile"
var external_antd_mobile_ = __webpack_require__("mBdx");

// EXTERNAL MODULE: ./services/detail.ts
var detail = __webpack_require__("OyYC");

// EXTERNAL MODULE: ./hooks/messageBoxHooks.ts
var messageBoxHooks = __webpack_require__("ODBD");

// CONCATENATED MODULE: ./components/report/index.tsx
var report_jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\components\\report\\index.tsx";
var report_jsx = external_react_default.a.createElement;







const Report = ({
  optionList,
  articleId,
  show,
  onClose
}) => {
  const {
    0: reportValue,
    1: setRepoetValue
  } = Object(external_react_["useState"])(-1);
  const {
    0: reportOptionList
  } = Object(external_react_["useState"])(optionList);
  const {
    0: reportCommentText,
    1: setReportCommentText
  } = Object(external_react_["useState"])('');
  const isSubmit = Object(external_react_["useRef"])(false);
  const showMessageBox = Object(messageBoxHooks["a" /* default */])();

  const onReportRadioChange = ({
    detail: value
  }) => {
    setRepoetValue(value);

    if (value !== 6) {
      setReportCommentText('');
    }
  };

  const service = new detail["a" /* default */]();

  const canSubmit = () => {
    if (reportValue < 0) {
      return false;
    }

    if (reportValue === 6 && !reportCommentText) {
      return false;
    }

    return true;
  };

  const handleSubmitReport = () => {
    if (isSubmit.current === false && canSubmit() === true) {
      isSubmit.current = true;
      service.submitReport(reportValue, articleId, reportCommentText).then(() => {
        onClose();
        isSubmit.current = false;
        showMessageBox('success', 'Sukses', 'Berhasil lapor, terima kasih!');
      }).catch(error => {
        isSubmit.current = false;
        console.error(error);
        showMessageBox('error', 'error', 'Error!');
      });
    }
  };

  const handleReportCommentTextChange = event => {
    const {
      value
    } = event.target;
    setReportCommentText(value || '');
  };

  const onCloseReport = () => {
    onClose();
  };

  return report_jsx(external_antd_mobile_["Modal"], {
    transparent: false,
    visible: show,
    animationType: "slide-up",
    onClose: onCloseReport,
    __self: undefined,
    __source: {
      fileName: report_jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }, report_jsx("div", {
    className: index_module_default.a['report-component'],
    __self: undefined,
    __source: {
      fileName: report_jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, report_jsx("div", {
    className: index_module_default.a['header'],
    __self: undefined,
    __source: {
      fileName: report_jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, report_jsx("span", {
    className: "icon-font uniE906",
    onClick: onCloseReport,
    __self: undefined,
    __source: {
      fileName: report_jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }), report_jsx("span", {
    className: `${index_module_default.a['submit-button']} ${canSubmit() === true ? '' : index_module_default.a['disabled']}`,
    onClick: handleSubmitReport,
    __self: undefined,
    __source: {
      fileName: report_jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, "Submit")), report_jsx("div", {
    className: index_module_default.a['report-container'],
    __self: undefined,
    __source: {
      fileName: report_jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, report_jsx("div", {
    className: index_module_default.a['report-title'],
    __self: undefined,
    __source: {
      fileName: report_jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }, "Dengan alasan"), report_jsx("div", {
    className: index_module_default.a['radio-container'],
    __self: undefined,
    __source: {
      fileName: report_jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, report_jsx("div", {
    className: index_module_default.a['radio-group-container'],
    __self: undefined,
    __source: {
      fileName: report_jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, report_jsx(radio_group, {
    itemClass: index_module_default.a['radio-group-item'],
    value: reportValue,
    options: reportOptionList,
    onChange: onReportRadioChange,
    direction: 'column',
    __self: undefined,
    __source: {
      fileName: report_jsxFileName,
      lineNumber: 109,
      columnNumber: 15
    }
  })), reportValue === 6 ? report_jsx("textarea", {
    disabled: reportValue !== 6,
    minLength: 10,
    maxLength: 300,
    className: index_module_default.a['report-input'],
    onChange: handleReportCommentTextChange,
    placeholder: "Berikan kami masukan",
    __self: undefined,
    __source: {
      fileName: report_jsxFileName,
      lineNumber: 118,
      columnNumber: 15
    }
  }) : null))));
};

/* harmony default export */ var report = __webpack_exports__["a"] = (Report);

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

/***/ "oqq6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("BbDR");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_images_pleaceholder_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("aV0h");
/* harmony import */ var _static_images_pleaceholder_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_images_pleaceholder_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_images_big_pleaceholder_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Pdzu");
/* harmony import */ var _static_images_big_pleaceholder_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_images_big_pleaceholder_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _video__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("HvvK");
var _jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\components\\detail-item-image-list\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const DetailItemImageList = ({
  imageList,
  onClickImgItem
}) => {
  const isSingle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(imageList.length === 1);

  const onHandelClickImg = (item, index) => {
    return () => {
      if (typeof onClickImgItem == 'function') {
        onClickImgItem(item, index);
      }
    };
  };

  return __jsx("ul", {
    className: "detail-item-image-list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, imageList.map((item, index) => __jsx("li", {
    className: `detail-item-image-item ${isSingle.current ? 'single' : ''}`,
    key: index,
    onClick: onHandelClickImg(item, index),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, item.type === 1 ? isSingle.current ? __jsx("div", {
    className: "single-span-img",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: "thumbnail",
    src: item.url,
    title: "",
    alt: "",
    onError: () => item.url = _static_images_pleaceholder_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 19
    }
  })) : __jsx("div", {
    className: "span-img",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 19
    }
  }, __jsx("img", {
    className: "thumbnail",
    src: item.url,
    alt: "",
    onError: () => item.url = _static_images_pleaceholder_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  })) : isSingle.current ? __jsx("div", {
    className: "videos-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "single-span-img  single-videos",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, item.headUrl.includes('#t=1') ? __jsx(_video__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    data: item,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 19
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
    className: "thumbnail",
    src: item.headUrl,
    title: "",
    alt: "",
    onError: () => item.headUrl = _static_images_big_pleaceholder_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 23
    }
  }), __jsx("i", {
    className: "video-background",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "icon-font uniE909",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 25
    }
  }))))) : __jsx("div", {
    className: "span-img videos",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }, item.headUrl.includes('#t=1') ? __jsx(_video__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    data: item,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 21
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
    className: "thumbnail",
    src: item.headUrl,
    title: "",
    alt: "",
    onError: () => item.headUrl = _static_images_pleaceholder_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 25
    }
  }), __jsx("i", {
    className: "video-background",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "icon-font uniE909",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 27
    }
  })))))));
};

/* harmony default export */ __webpack_exports__["a"] = (DetailItemImageList);

/***/ }),

/***/ "sDyZ":
/***/ (function(module, exports) {

module.exports = {
	"Loading-component": "Loading-component",
	"LoaderBalls": "LoaderBalls",
	"LoaderBalls__item": "LoaderBalls__item",
	"bouncing": "bouncing"
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

/***/ "v9Oo":
/***/ (function(module, exports) {

module.exports = {
	"scroll-container-component": "scroll-container-component",
	"pull-down-refresh-indicator": "pull-down-refresh-indicator",
	"uniE910": "uniE910",
	"rotate": "rotate"
};

/***/ }),

/***/ "vcgd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentInputSubject; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Vgaj");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);

const CommentInputSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();


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

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "xzxb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/comment-item/index.scss
var comment_item = __webpack_require__("XnvR");

// EXTERNAL MODULE: external "mobx-react"
var external_mobx_react_ = __webpack_require__("sGQ9");

// EXTERNAL MODULE: ./components/user-avatar/index.tsx
var user_avatar = __webpack_require__("7GlH");

// EXTERNAL MODULE: ./components/comment-reply-item/index.scss
var comment_reply_item = __webpack_require__("dAgW");

// EXTERNAL MODULE: ./subject/comment.ts
var comment = __webpack_require__("vcgd");

// EXTERNAL MODULE: external "antd-mobile"
var external_antd_mobile_ = __webpack_require__("mBdx");

// EXTERNAL MODULE: ./services/detail.ts
var detail = __webpack_require__("OyYC");

// CONCATENATED MODULE: ./components/comment-reply-item/index.tsx
var _jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\components\\comment-reply-item\\index.tsx";
var __jsx = external_react_default.a.createElement;








const CommentReplyItem = ({
  data,
  parentMessageUserid,
  parentMessageId
}) => {
  const {
    store
  } = Object(external_react_["useContext"])(external_mobx_react_["MobXProviderContext"]);
  const {
    user
  } = Object(external_mobx_react_["useObserver"])(() => ({
    user: store.user
  }));
  const service = new detail["a" /* default */]();

  const handelReply = () => {
    //发送输入框获焦事件
    data.parentMessageUserid = parentMessageUserid;
    data.parentMessageId = parentMessageId;
    comment["a" /* CommentInputSubject */].next({
      action: 'reply',
      messageData: data
    });
  };

  const handelDelete = () => {
    external_antd_mobile_["Modal"].alert('Yakin mau hapus?', 'Hapus', [{
      text: 'Tidak',
      onPress: () => {},
      style: 'cancel'
    }, {
      text: 'Ya, keluar',
      onPress: () => {
        service.deleteMessage(data.id).then(resp => {
          external_antd_mobile_["Toast"].success('Berhasil menghapus!', 1);
          resp.parentMessageId = parentMessageId;
          comment["a" /* CommentInputSubject */].next({
            action: 'delete-reply',
            messageData: resp
          }); //刷新二级评论列表
        }).catch(error => {
          console.error(error);
          external_antd_mobile_["Toast"].success('Gagal menghapus', 2);
        });
      }
    }]);
  };

  return __jsx("div", {
    className: "comment-reply-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "replay-message",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: "replay-message-list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx("li", {
    className: "replay-list-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "replay-item-avator",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx(user_avatar["a" /* default */], {
    size: 0.24,
    src: data.messageUserHeadUrl,
    isAuthor: data.messageUserid === data.articleUserId,
    small: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "replay-item-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "replay-item-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "replay-users",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, data.messageUserName, " ", __jsx("span", {
    className: "replay-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 42
    }
  }, "Balas"), " ", data.beMessageUserName), __jsx("div", {
    className: "replay-body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, data.content)), __jsx("div", {
    className: "message-operation",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "release-time",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, data.createTime), user && user.userId != data.messageUserid ? __jsx("div", {
    className: "reply",
    onClick: handelReply,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 62
    }
  }, "Balas") : null, user && user.userId === data.messageUserid && data.status === 1 ? __jsx("div", {
    className: "delete",
    onClick: handelDelete,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 84
    }
  }, "Hapus") : null))))));
};

/* harmony default export */ var components_comment_reply_item = (CommentReplyItem);
// EXTERNAL MODULE: ./components/loading/index.scss
var loading = __webpack_require__("sDyZ");

// CONCATENATED MODULE: ./components/loading/index.tsx
var loading_jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\components\\loading\\index.tsx";
var loading_jsx = external_react_default.a.createElement;



const Loading = () => {
  return loading_jsx("div", {
    className: "Loading-component",
    __self: undefined,
    __source: {
      fileName: loading_jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, loading_jsx("div", {
    className: "LoaderBalls",
    __self: undefined,
    __source: {
      fileName: loading_jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, loading_jsx("div", {
    className: "LoaderBalls__item",
    __self: undefined,
    __source: {
      fileName: loading_jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }), loading_jsx("div", {
    className: "LoaderBalls__item",
    __self: undefined,
    __source: {
      fileName: loading_jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }), loading_jsx("div", {
    className: "LoaderBalls__item",
    __self: undefined,
    __source: {
      fileName: loading_jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ var components_loading = (Loading);
// EXTERNAL MODULE: ./subject/dom.ts
var dom = __webpack_require__("f1Q/");

// CONCATENATED MODULE: ./components/comment-item/index.tsx
var comment_item_jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\components\\comment-item\\index.tsx";
var comment_item_jsx = external_react_default.a.createElement;











const CommentItem = ({
  data
}) => {
  const {
    0: isMore,
    1: setIsMore
  } = Object(external_react_["useState"])(false);
  const {
    0: isMoreLoading,
    1: setIsMoreLoading
  } = Object(external_react_["useState"])(false);
  const pageSize = 10;
  const pageNum = Object(external_react_["useRef"])(1);
  const {
    0: commentReplyList,
    1: setCommentReplyList
  } = Object(external_react_["useState"])([]);
  const commentReplyListRef = Object(external_react_["useRef"])([]);
  const totalReply = Object(external_react_["useRef"])(0);
  const isFirsPaegeLoad = Object(external_react_["useRef"])(false);
  const {
    store
  } = Object(external_react_["useContext"])(external_mobx_react_["MobXProviderContext"]);
  const {
    user
  } = Object(external_mobx_react_["useObserver"])(() => ({
    user: store.user
  }));
  const service = new detail["a" /* default */]();
  Object(external_react_["useEffect"])(() => {
    if (data) {
      pageNum.current = 1;
      isFirsPaegeLoad.current = false;
      service.getSecondMessagesList(data.id, 1, pageSize).then(({
        list,
        total
      }) => {
        totalReply.current = total;
        list.map(item => {
          item.articleUserId = data.articleUserId;
          return item;
        });
        commentReplyListRef.current = list;
        setCommentReplyList(list.filter((item, index) => index < 3));
        setIsMore(3 < total);
      });
      const commentSubscription = comment["a" /* CommentInputSubject */].subscribe(({
        action,
        messageData
      }) => {
        if (action === 'refresh-reply' && messageData.parentMessageId === data.id) {
          addCommentRely(messageData);
        } else if (action === 'delete-reply' && messageData.parentMessageId === data.id) {
          deleteCommentReply(messageData.id, messageData.content);
        }
      });
      return () => {
        commentSubscription.unsubscribe();
      };
    }
  }, [data]); //新增一条回复

  const addCommentRely = replyItem => {
    setCommentReplyList(commentReplyList => [...commentReplyList, replyItem]);
  }; //删除一条回复


  const deleteCommentReply = (replyId, content) => {
    setCommentReplyList(commentReplyList => commentReplyList.filter(item => {
      if (item.id === replyId) {
        item.content = content;
        item.status = 2;
        return item;
      } else {
        return item;
      }
    }));
  };

  const getData = () => {
    setIsMoreLoading(true);
    return service.getSecondMessagesList(data.id, pageNum.current, pageSize).then(({
      list,
      total
    }) => {
      list.map(item => {
        item.articleUserId = data.articleUserId;
        return item;
      });
      setCommentReplyList(currentArticleList => [...currentArticleList.filter(item => item), ...list]);
      setIsMoreLoading(false);

      if (pageSize * pageNum.current >= total) {
        setIsMore(false);
      }
    });
  }; //加载更多


  const handleExpandReplyComment = () => {
    if (pageNum.current === 1 && totalReply.current > 3 && !isFirsPaegeLoad.current) {
      //第一次加载
      setCommentReplyList([...commentReplyListRef.current]);
      isFirsPaegeLoad.current = true;

      if (pageSize >= totalReply.current) {
        setIsMore(false);
      }
    } else {
      pageNum.current += 1;
      getData().then(() => {
        dom["a" /* DomChangeSubject */].next();
      });
    }
  };

  const handelReply = () => {
    //发送 订阅 输入框
    data.parentMessageUserid = data.messageUserid;
    data.parentMessageId = data.id;
    comment["a" /* CommentInputSubject */].next({
      action: 'reply',
      messageData: data
    });
  };

  const handelDelete = () => {
    external_antd_mobile_["Modal"].alert('Yakin mau hapus?', 'Hapus', [{
      text: 'Tidak',
      onPress: () => {},
      style: 'cancel'
    }, {
      text: 'Ya, keluar',
      onPress: () => {
        service.deleteMessage(data.id).then(resp => {
          external_antd_mobile_["Toast"].success('Berhasil menghapus!', 1);
          comment["a" /* CommentInputSubject */].next({
            action: 'delete-comment',
            messageData: resp
          }); //删除一级评论列表
        }).catch(error => {
          console.error(error);
          external_antd_mobile_["Toast"].success('Gagal menghapus!', 2);
        });
      }
    }]);
  };

  return data ? comment_item_jsx("div", {
    className: "comment-item-container",
    __self: undefined,
    __source: {
      fileName: comment_item_jsxFileName,
      lineNumber: 167,
      columnNumber: 5
    }
  }, comment_item_jsx("div", {
    className: "comment-item-avator",
    __self: undefined,
    __source: {
      fileName: comment_item_jsxFileName,
      lineNumber: 168,
      columnNumber: 7
    }
  }, comment_item_jsx(user_avatar["a" /* default */], {
    size: 0.36,
    src: data.messageUserHeadUrl,
    isAuthor: data.messageUserid === data.articleUserId,
    __self: undefined,
    __source: {
      fileName: comment_item_jsxFileName,
      lineNumber: 169,
      columnNumber: 9
    }
  })), comment_item_jsx("div", {
    className: "comment-item-content",
    __self: undefined,
    __source: {
      fileName: comment_item_jsxFileName,
      lineNumber: 171,
      columnNumber: 7
    }
  }, comment_item_jsx("div", {
    className: "main-message",
    __self: undefined,
    __source: {
      fileName: comment_item_jsxFileName,
      lineNumber: 172,
      columnNumber: 9
    }
  }, comment_item_jsx("div", {
    className: "main-message-content",
    __self: undefined,
    __source: {
      fileName: comment_item_jsxFileName,
      lineNumber: 173,
      columnNumber: 11
    }
  }, comment_item_jsx("div", {
    className: "message-user",
    __self: undefined,
    __source: {
      fileName: comment_item_jsxFileName,
      lineNumber: 174,
      columnNumber: 13
    }
  }, comment_item_jsx("div", {
    className: "message-user-name",
    __self: undefined,
    __source: {
      fileName: comment_item_jsxFileName,
      lineNumber: 175,
      columnNumber: 15
    }
  }, data.messageUserName)), comment_item_jsx("div", {
    className: "message-body",
    __self: undefined,
    __source: {
      fileName: comment_item_jsxFileName,
      lineNumber: 177,
      columnNumber: 13
    }
  }, data.content)), comment_item_jsx("div", {
    className: "message-operation",
    __self: undefined,
    __source: {
      fileName: comment_item_jsxFileName,
      lineNumber: 179,
      columnNumber: 11
    }
  }, comment_item_jsx("div", {
    className: "release-time",
    __self: undefined,
    __source: {
      fileName: comment_item_jsxFileName,
      lineNumber: 180,
      columnNumber: 13
    }
  }, data.createTime), user && user.userId != data.messageUserid ? comment_item_jsx("div", {
    className: "reply",
    onClick: handelReply,
    __self: undefined,
    __source: {
      fileName: comment_item_jsxFileName,
      lineNumber: 182,
      columnNumber: 15
    }
  }, "Balas") : null, user && user.userId === data.messageUserid && data.status === 1 ? comment_item_jsx("div", {
    className: "delete",
    onClick: handelDelete,
    __self: undefined,
    __source: {
      fileName: comment_item_jsxFileName,
      lineNumber: 187,
      columnNumber: 15
    }
  }, "Hapus") : null)), comment_item_jsx("div", {
    className: "message-reply-wrapper",
    __self: undefined,
    __source: {
      fileName: comment_item_jsxFileName,
      lineNumber: 194,
      columnNumber: 9
    }
  }, comment_item_jsx("ul", {
    className: "reply-list",
    __self: undefined,
    __source: {
      fileName: comment_item_jsxFileName,
      lineNumber: 195,
      columnNumber: 11
    }
  }, commentReplyList.map(item => comment_item_jsx("li", {
    className: "reply-item",
    key: item.id,
    __self: undefined,
    __source: {
      fileName: comment_item_jsxFileName,
      lineNumber: 197,
      columnNumber: 15
    }
  }, comment_item_jsx(components_comment_reply_item, {
    data: item,
    parentMessageUserid: data.messageUserid,
    parentMessageId: data.id,
    __self: undefined,
    __source: {
      fileName: comment_item_jsxFileName,
      lineNumber: 198,
      columnNumber: 17
    }
  })))), isMore ? comment_item_jsx("div", {
    __self: undefined,
    __source: {
      fileName: comment_item_jsxFileName,
      lineNumber: 208,
      columnNumber: 13
    }
  }, isMoreLoading ? comment_item_jsx(components_loading, {
    __self: undefined,
    __source: {
      fileName: comment_item_jsxFileName,
      lineNumber: 209,
      columnNumber: 32
    }
  }) : null, comment_item_jsx("div", {
    className: "more-reply-wrapper",
    onClick: handleExpandReplyComment,
    __self: undefined,
    __source: {
      fileName: comment_item_jsxFileName,
      lineNumber: 210,
      columnNumber: 15
    }
  }, comment_item_jsx("span", {
    className: "line",
    __self: undefined,
    __source: {
      fileName: comment_item_jsxFileName,
      lineNumber: 214,
      columnNumber: 17
    }
  }), comment_item_jsx("span", {
    className: "text",
    __self: undefined,
    __source: {
      fileName: comment_item_jsxFileName,
      lineNumber: 215,
      columnNumber: 17
    }
  }, "Tampilkan More comment lainnya"), comment_item_jsx("span", {
    className: "line",
    __self: undefined,
    __source: {
      fileName: comment_item_jsxFileName,
      lineNumber: 216,
      columnNumber: 17
    }
  }))) : null))) : comment_item_jsx("div", {
    className: "comment-item-component-placeholder",
    __self: undefined,
    __source: {
      fileName: comment_item_jsxFileName,
      lineNumber: 224,
      columnNumber: 7
    }
  }, comment_item_jsx("div", {
    className: "comment-header",
    __self: undefined,
    __source: {
      fileName: comment_item_jsxFileName,
      lineNumber: 225,
      columnNumber: 9
    }
  }, comment_item_jsx("div", {
    className: "comment-avatar-placeholder",
    __self: undefined,
    __source: {
      fileName: comment_item_jsxFileName,
      lineNumber: 226,
      columnNumber: 11
    }
  }, " "), comment_item_jsx("div", {
    className: "comment-user-placeholder",
    __self: undefined,
    __source: {
      fileName: comment_item_jsxFileName,
      lineNumber: 227,
      columnNumber: 11
    }
  }, " ")), comment_item_jsx("div", {
    className: "comment-body",
    __self: undefined,
    __source: {
      fileName: comment_item_jsxFileName,
      lineNumber: 229,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ var components_comment_item = __webpack_exports__["a"] = (CommentItem);

/***/ }),

/***/ "y4Mb":
/***/ (function(module, exports) {

module.exports = {
	"report-component": "_3JIbzA1Zbo4_K0XF1cIxEB",
	"header": "XWeIG9r-6p_IjufALYQ3s",
	"submit-button": "_3zVFGveZalF_yJVpfFsWE9",
	"disabled": "_18m2EyS8shHCl5Zq3jxLtS",
	"report-container": "_1scGC-NDrSC6Bqe6_dZsuM",
	"report-title": "_1f_66_JQVF4_x8uL06MS2Z",
	"radio-container": "_3d52aaI9j9HoU3PrbzPcca",
	"radio-group-item": "_209C1T16aJS1OSUQrN80Yt",
	"report-input": "_31gldPa0NIXRoEcE2-HqXw"
};

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