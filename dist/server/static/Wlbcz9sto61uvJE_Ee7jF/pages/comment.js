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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+0Sc":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTYgLTkwKSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYgOTApIj48cGF0aCBkPSJNMTYsMEExNiwxNiwwLDEsMSwwLDE2LDE2LDE2LDAsMCwxLDE2LDBaIiBmaWxsPSIjZWZlZGVkIi8+PC9nPjxwYXRoIGQ9Ik0xMDYuNjMsNzkuNmE3LjA4Miw3LjA4MiwwLDEsMC03LjgxMiwwLDExLjQxLDExLjQxLDAsMCwwLTcuNDI1LDEwLjY5M2gxLjg4OGE5LjQ0Myw5LjQ0MywwLDEsMSwxOC44ODUsMGgxLjg4OEExMS40MSwxMS40MSwwLDAsMCwxMDYuNjMsNzkuNlptLTMuOTA2LS43MTNhNS4yMjgsNS4yMjgsMCwxLDEsNS4xOTMtNS4yMjhBNS4yMTYsNS4yMTYsMCwwLDEsMTAyLjcyNCw3OC44ODZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzAuODY4IDI4LjU1OCkiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+"

/***/ }),

/***/ "0BMi":
/***/ (function(module, exports) {

module.exports = {
	"comment-input-component": "_2MmzNH0zm4pGBclamuW5Ob",
	"comment-input": "_3QLfsAnn8LPrWzeyWBzy7Y"
};

/***/ }),

/***/ "0ssD":
/***/ (function(module, exports) {

module.exports = require("socks5-https-client/lib/Agent");

/***/ }),

/***/ "1Bin":
/***/ (function(module, exports) {

module.exports = {
	"comment-page-container": "_3fAGEs3tR2gcpCy_R_Q9_D",
	"comment-header": "_3iDNEXgwKZAhkj3JjMLxNc",
	"comment-input-overlay": "_31gJGdigY24VGZNyesYvKN",
	"comment-input-container": "lSLfGsK4GZQGDA5NCUbQw",
	"comment-wrapper": "_21gN7ogAdlTODAIuglz6_D",
	"comment-list-content": "_3LzvdlBoKD6l3HQBIB9909",
	"comment-item": "_2aO8WHonqe8aLzAl_Wwkmv"
};

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ZUFl");


/***/ }),

/***/ "4vsW":
/***/ (function(module, exports) {

module.exports = require("node-fetch");

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

/***/ "ZUFl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./pages/comment/index.module.scss
var index_module = __webpack_require__("1Bin");
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);

// EXTERNAL MODULE: ./components/comment-item/index.tsx + 2 modules
var comment_item = __webpack_require__("xzxb");

// EXTERNAL MODULE: ./subject/comment.ts
var comment = __webpack_require__("vcgd");

// EXTERNAL MODULE: ./components/comment-input/index.module.scss
var comment_input_index_module = __webpack_require__("0BMi");
var comment_input_index_module_default = /*#__PURE__*/__webpack_require__.n(comment_input_index_module);

// CONCATENATED MODULE: ./components/comment-input/index.tsx
var _jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\components\\comment-input\\index.tsx";
var __jsx = external_react_default.a.createElement;




const CommentInput = ({
  inputText,
  isFocused,
  placeHolder,
  onSubmit
}) => {
  const defaultInputHeight = 35;
  const textareaContainerElement = Object(external_react_["useRef"])();
  const commentPlaceHolderText = Object(external_react_["useRef"])(placeHolder);
  const {
    0: isFocus,
    1: setIsFocus
  } = Object(external_react_["useState"])(isFocused);
  const {
    0: autoContentHeight,
    1: setAutoContentHeight
  } = Object(external_react_["useState"])(defaultInputHeight);
  const {
    0: inputValue,
    1: setInputValue
  } = Object(external_react_["useState"])(inputText);

  const handelValueChange = event => {
    const {
      value
    } = event.target;
    setInputValue(value);
    const scrollHeight = textareaContainerElement.current.scrollHeight;
    setAutoContentHeight(scrollHeight);
  };

  const handleInputFocus = () => {
    setIsFocus(true);
  };

  const handleInputBlur = () => {
    comment["a" /* CommentInputSubject */].next({
      action: 'blur'
    });
    setIsFocus(false);
  };

  const handelKeyDown = event => {
    if (event.keyCode == 13) {
      handleSubmitComment();
      event.preventDefault();
      return false;
    }
  };

  const handleSubmitComment = () => {
    if (typeof onSubmit === "function") {
      onSubmit({
        detail: inputValue
      });
    }

    setAutoContentHeight(defaultInputHeight);
  };

  return __jsx("div", {
    className: comment_input_index_module_default.a['comment-input-component'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }, __jsx("textarea", {
    ref: textareaContainerElement,
    autoFocus: true,
    className: `${comment_input_index_module_default.a['comment-input']} ${isFocus ? comment_input_index_module_default.a['is-focus'] : ''}`,
    onFocus: handleInputFocus,
    onBlur: handleInputBlur,
    style: {
      height: autoContentHeight
    },
    onChange: handelValueChange,
    value: inputValue,
    onKeyDown: handelKeyDown,
    maxLength: 2000,
    placeholder: commentPlaceHolderText.current,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ var comment_input = (CommentInput);
// EXTERNAL MODULE: ./services/detail.ts
var detail = __webpack_require__("OyYC");

// EXTERNAL MODULE: external "mobx-react"
var external_mobx_react_ = __webpack_require__("sGQ9");

// EXTERNAL MODULE: ./hooks/messageBoxHooks.ts
var messageBoxHooks = __webpack_require__("ODBD");

// EXTERNAL MODULE: ./components/scroll-container/index.tsx + 1 modules
var scroll_container = __webpack_require__("wjFm");

// EXTERNAL MODULE: ./subject/dom.ts
var dom = __webpack_require__("f1Q/");

// CONCATENATED MODULE: ./pages/comment/index.tsx
var comment_jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\pages\\comment\\index.tsx";
var comment_jsx = external_react_default.a.createElement;











const CommentPage = ({
  articleId
}) => {
  const showMessageBox = Object(messageBoxHooks["a" /* default */])();
  const {
    0: commentList,
    1: setCommentList
  } = Object(external_react_["useState"])(Array.from({
    length: 10
  }));
  const commentListRef = Object(external_react_["useRef"])(commentList);
  const pageSize = 10;
  const pageNum = Object(external_react_["useRef"])(1);
  const {
    0: isFocus,
    1: setIsFocus
  } = Object(external_react_["useState"])(false);
  const {
    0: commentPlaceHolderText,
    1: setCommentPlaceHolder
  } = Object(external_react_["useState"])("Isi Thread ...");
  const service = new detail["a" /* default */]();
  const isCommentSubmit = Object(external_react_["useRef"])(false);
  const {
    0: inputValue,
    1: setInputValue
  } = Object(external_react_["useState"])('');
  const beReplyData = Object(external_react_["useRef"])();
  const {
    0: isReply,
    1: setIsReply
  } = Object(external_react_["useState"])(false);
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
  const {
    0: canPullUp,
    1: setCanPullUp
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    const isApp = !!window.ReactNativeWebView;
    setIsApp(isApp);
    getCommentData();
    const commentSubscription = comment["a" /* CommentInputSubject */].subscribe(({
      action,
      messageData
    }) => {
      if (action === 'blur') {
        setIsFocus(false);
      } else {
        if (action === "reply") {
          setIsFocus(true);
          setIsReply(true);
          beReplyData.current = messageData;
          setCommentPlaceHolder("Balas " + messageData.messageUserName);
        } else if (action === 'delete-comment') {
          setIsFocus(false);
          deleteComment(messageData.id, messageData.content);
        } else if (action === 'delete-reply') {
          setIsFocus(false);
        }
      }
    });
    return () => {
      commentSubscription.unsubscribe();
    };
  }, []); //新增一条评论

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

  const getCommentData = () => {
    return service.getFirstMessagesList(articleId, pageNum.current, pageSize).then(({
      total,
      list
    }) => {
      commentListRef.current = list;
      setCommentList(commentListRef.current);
      setCanPullUp(pageSize * pageNum.current < total);
      dom["a" /* DomChangeSubject */].next();
    });
  };

  const handelBlur = () => {
    setIsFocus(false);
  }; //提交评论


  const handleSubmitComment = event => {
    const inputDetail = event.detail;

    if (!user || user.userId <= 0 || !localStorage.getItem("token")) {
      store.showLoginModal();
      return;
    }

    if (isCommentSubmit.current === false) {
      isCommentSubmit.current = true;
      let submitModel;

      if (isReply) {
        submitModel = {
          articleId: articleId,
          content: inputDetail,
          messageUserid: user.userId,
          parentMessageId: beReplyData.current.parentMessageId,
          parentMessageUserid: beReplyData.current.parentMessageUserid,
          beMessageUserid: beReplyData.current.messageUserid
        };
      } else {
        submitModel = {
          articleId: articleId,
          content: inputDetail,
          messageUserid: user.userId
        };
      }

      service.leavingMessage(submitModel).then(result => {
        isCommentSubmit.current = false;
        setInputValue("");
        result.messageUserHeadUrl = user.headPortrait;
        result.messageUserName = user.nickname;

        if (isReply) {
          showMessageBox('success', 'success', 'Berhasil balas!');
          result.beMessageUserName = beReplyData.current.messageUserName;
          comment["a" /* CommentInputSubject */].next({
            action: 'refresh-reply',
            messageData: result
          }); //刷新二级评论列表
        } else {
          showMessageBox('success', 'success', 'Komentar berhasil!');
          addComment(result);
        }

        setIsReply(false);
        setIsFocus(false);
      }).catch(error => {
        console.error(error);
        isCommentSubmit.current = false;
        showMessageBox('error', 'error', error.message || 'Komentar gagal！');
      });
    }

    ;
  };

  const backToIndex = () => {
    if (isApp) {
      window.ReactNativeWebView.postMessage(JSON.stringify({
        action: 'goBack'
      }));
    } else {
      window.history.go(-1);
    }
  };

  const handlePullDownRefresh = scroll => {
    setCommentList(Array.from({
      length: 10
    }));
    pageNum.current = 1;
    return getCommentData();
  };

  const handlePullUpAppendData = scroll => {
    pageNum.current += 1;
    setCommentList(articleList => [...articleList, ...Array.from({
      length: 10
    })]);
    scroll.refresh();
    return service.getFirstMessagesList(articleId, pageNum.current, pageSize).then(({
      total,
      list
    }) => {
      setCommentList(currentArticleList => [...currentArticleList.filter(item => item), ...list]);

      if (pageSize * pageNum.current >= total) {
        setCanPullUp(false);
      }

      dom["a" /* DomChangeSubject */].next();
    });
  };

  return comment_jsx("div", {
    className: index_module_default.a['comment-page-container'],
    __self: undefined,
    __source: {
      fileName: comment_jsxFileName,
      lineNumber: 217,
      columnNumber: 5
    }
  }, comment_jsx("div", {
    className: index_module_default.a['comment-header'],
    onClick: backToIndex,
    __self: undefined,
    __source: {
      fileName: comment_jsxFileName,
      lineNumber: 218,
      columnNumber: 7
    }
  }, comment_jsx("span", {
    className: `icon-font uniE906 ${index_module_default.a['icon-close']}`,
    __self: undefined,
    __source: {
      fileName: comment_jsxFileName,
      lineNumber: 219,
      columnNumber: 9
    }
  })), comment_jsx("div", {
    className: index_module_default.a['comment-wrapper'],
    __self: undefined,
    __source: {
      fileName: comment_jsxFileName,
      lineNumber: 223,
      columnNumber: 7
    }
  }, comment_jsx(scroll_container["a" /* default */], {
    onPullDown: handlePullDownRefresh,
    onPullUp: handlePullUpAppendData,
    pullUp: canPullUp,
    observeDOM: true,
    __self: undefined,
    __source: {
      fileName: comment_jsxFileName,
      lineNumber: 224,
      columnNumber: 9
    }
  }, comment_jsx("ul", {
    className: index_module_default.a['comment-list-content'],
    __self: undefined,
    __source: {
      fileName: comment_jsxFileName,
      lineNumber: 229,
      columnNumber: 11
    }
  }, commentList.map((item, index) => comment_jsx("li", {
    className: index_module_default.a['comment-item'],
    key: item ? item.id + 99899 : index,
    __self: undefined,
    __source: {
      fileName: comment_jsxFileName,
      lineNumber: 231,
      columnNumber: 15
    }
  }, comment_jsx(comment_item["a" /* default */], {
    data: item,
    __self: undefined,
    __source: {
      fileName: comment_jsxFileName,
      lineNumber: 232,
      columnNumber: 17
    }
  }))))), isFocus ? comment_jsx("div", {
    __self: undefined,
    __source: {
      fileName: comment_jsxFileName,
      lineNumber: 238,
      columnNumber: 11
    }
  }, comment_jsx("div", {
    className: index_module_default.a['comment-input-overlay'],
    onClick: handelBlur,
    __self: undefined,
    __source: {
      fileName: comment_jsxFileName,
      lineNumber: 239,
      columnNumber: 13
    }
  }), comment_jsx("div", {
    className: index_module_default.a['comment-input-container'],
    __self: undefined,
    __source: {
      fileName: comment_jsxFileName,
      lineNumber: 240,
      columnNumber: 13
    }
  }, comment_jsx(comment_input, {
    inputText: inputValue,
    isFocused: isFocus,
    placeHolder: commentPlaceHolderText,
    onSubmit: handleSubmitComment,
    __self: undefined,
    __source: {
      fileName: comment_jsxFileName,
      lineNumber: 241,
      columnNumber: 15
    }
  }))) : null));
};

const getServerSideProps = function ({
  query
}) {
  try {
    const {
      id
    } = query;
    return Promise.resolve({
      props: {
        articleId: id
      }
    });
  } catch (e) {
    return Promise.reject(e);
  }
};
/* harmony default export */ var pages_comment = __webpack_exports__["default"] = (CommentPage);

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