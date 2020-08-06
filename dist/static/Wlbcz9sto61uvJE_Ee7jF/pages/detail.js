(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "/0+H":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __importDefault(__webpack_require__("q1tI"));

const amp_context_1 = __webpack_require__("lwAK");

function isInAmpMode({
  ampFirst = false,
  hybrid = false,
  hasQuery = false
} = {}) {
  return ampFirst || hybrid && hasQuery;
}

exports.isInAmpMode = isInAmpMode;

function useAmp() {
  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(react_1.default.useContext(amp_context_1.AmpStateContext));
}

exports.useAmp = useAmp;

/***/ }),

/***/ "8Kt/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __importDefault(__webpack_require__("q1tI"));

const side_effect_1 = __importDefault(__webpack_require__("Xuae"));

const amp_context_1 = __webpack_require__("lwAK");

const head_manager_context_1 = __webpack_require__("FYa8");

const amp_1 = __webpack_require__("/0+H");

function defaultHead(inAmpMode = false) {
  const head = [react_1.default.createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push(react_1.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

exports.defaultHead = defaultHead;

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === react_1.default.Fragment) {
    return list.concat(react_1.default.Children.toArray(child.props.children).reduce((fragmentList, fragmentChild) => {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

const METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  const keys = new Set();
  const tags = new Set();
  const metaTypes = new Set();
  const metaCategories = {};
  return h => {
    let unique = true;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      const key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        unique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          unique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (let i = 0, len = METATYPES.length; i < len; i++) {
          const metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              unique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            const category = h.props[metatype];
            const categories = metaCategories[metatype] || new Set();

            if (categories.has(category)) {
              unique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return unique;
  };
}
/**
 *
 * @param headElements List of multiple <Head> instances
 */


function reduceComponents(headElements, props) {
  return headElements.reduce((list, headElement) => {
    const headElementChildren = react_1.default.Children.toArray(headElement.props.children);
    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map((c, i) => {
    const key = c.key || i;
    return react_1.default.cloneElement(c, {
      key
    });
  });
}

const Effect = side_effect_1.default();
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */

function Head({
  children
}) {
  return react_1.default.createElement(amp_context_1.AmpStateContext.Consumer, null, ampState => react_1.default.createElement(head_manager_context_1.HeadManagerContext.Consumer, null, updateHead => react_1.default.createElement(Effect, {
    reduceComponentsToState: reduceComponents,
    handleStateChange: updateHead,
    inAmpMode: amp_1.isInAmpMode(ampState)
  }, children)));
}

Head.rewind = Effect.rewind;
exports.default = Head;

/***/ }),

/***/ "EDEA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./components/detail-item/index.scss
var detail_item = __webpack_require__("DCdo");

// EXTERNAL MODULE: ./components/user-avatar/index.tsx
var user_avatar = __webpack_require__("7GlH");

// CONCATENATED MODULE: ./hooks/cancellablePromiseHook.ts


function useCancellablePromises() {
  const pendingPromises = Object(react["useRef"])([]);

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
var __jsx = react_default.a.createElement;






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
  }, data ? __jsx(react_default.a.Fragment, null, __jsx("div", {
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

/***/ "HvvK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
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

/***/ "N/ZP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rePB");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("TkyM");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("nOHt");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("TyAF");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("riab");
/* harmony import */ var _components_detail_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("EDEA");
/* harmony import */ var _static_images_like_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("szVv");
/* harmony import */ var _static_images_like_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_images_like_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _static_images_liked_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("Rjtp");
/* harmony import */ var _static_images_liked_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_static_images_liked_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_comment_item__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("xzxb");
/* harmony import */ var _static_images_empty_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("S9MR");
/* harmony import */ var _static_images_empty_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_static_images_empty_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_detail_item_image_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("oqq6");
/* harmony import */ var _components_image_view_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("X3br");
/* harmony import */ var _subject_comment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("vcgd");
/* harmony import */ var _services_detail__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("OyYC");
/* harmony import */ var _hooks_messageBoxHooks__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("ODBD");
/* harmony import */ var _components_report__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("msBk");
/* harmony import */ var _components_scroll_container__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("wjFm");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("8Kt/");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("Jv45");

var _jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\pages\\detail\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const {
    store
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(mobx_react__WEBPACK_IMPORTED_MODULE_4__[/* MobXProviderContext */ "a"]);
  const {
    user
  } = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__[/* useObserver */ "d"])(() => ({
    user: store.user
  }));
  const {
    0: commentList,
    1: setCommentList
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: isLoaded,
    1: setIsLoaded
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: commentPlaceHolderText,
    1: setCommentPlaceHolder
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('Isi Thread ...');
  const {
    0: imageList,
    1: setImageList
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(urls || []);
  const {
    0: showImageModal,
    1: setShowImageModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isFocus,
    1: setIsFocus
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: autoContentHeight,
    1: setAutoContentHeight
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(defaultInputHeight);
  const textareaContainerElement = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const {
    0: inputValue,
    1: setInputValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: curSupportNums,
    1: setCurSupportNums
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(supportNums);
  const messageNumsRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(messageNums);
  const shareNumsRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(shareNums);
  const {
    0: supportFlag,
    1: setSupportFlag
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isReply,
    1: setIsReply
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const beReplyData = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const isCommentSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
  const isLikeSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(true);
  const showMessageBox = Object(_hooks_messageBoxHooks__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])();
  const service = new _services_detail__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"]();
  const {
    0: isApp,
    1: setIsApp
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    0: reportModal,
    1: setReportModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: reportOptionList,
    1: setReportOptionList
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: scrollY,
    1: setScrollY
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (!!user && user.userId > -1) {
      getSupportFlag();
    }
  }, [user]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const isApp = !!window.ReactNativeWebView;
    setIsApp(isApp);
    getCommentData();
    const args = Object(_util__WEBPACK_IMPORTED_MODULE_19__[/* getUrlParameters */ "a"])('scrollToComment');
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
    const commentSubscription = _subject_comment__WEBPACK_IMPORTED_MODULE_13__[/* CommentInputSubject */ "a"].subscribe(({
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
          _subject_comment__WEBPACK_IMPORTED_MODULE_13__[/* CommentInputSubject */ "a"].next({
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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_18___default.a, {
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
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['detail-page-container'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['detail-header'],
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
    className: `icon-font uniE906 ${_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['icon-close']}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['handel-container'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['report-container'],
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
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['share-container'],
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
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['detail-container'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460,
      columnNumber: 9
    }
  }, __jsx(_components_scroll_container__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], {
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
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['detail-content'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467,
      columnNumber: 13
    }
  }, __jsx(_components_detail_item__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    data: articleData,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['image-list'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469,
      columnNumber: 15
    }
  }, imageList.length > 0 ? __jsx(_components_detail_item_image_list__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    imageList: imageList,
    onClickImgItem: handleShowImageModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 19
    }
  }) : null)), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['split-underline'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['detail-comment'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['detail-comment-header'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['comment-title'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481,
      columnNumber: 17
    }
  }, "Komentar", __jsx("span", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['count'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483,
      columnNumber: 19
    }
  }, "(", messageNumsRef.current, ")")), isLoaded && commentList.length > 0 ? __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['comment-all'],
    onClick: toCommentList,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488,
      columnNumber: 19
    }
  }, "Lihat semua") : null), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['comment-wrapper'],
    id: "comment",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497,
      columnNumber: 15
    }
  }, __jsx("ul", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['comment-list-content'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 17
    }
  }, commentList.map((item, index) => __jsx("li", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['comment-item'],
    key: item ? item.id + 99899 : index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500,
      columnNumber: 21
    }
  }, __jsx(_components_comment_item__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
    data: item,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 23
    }
  })))), commentList.length === 0 && isLoaded ? __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['empty-comment'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: _static_images_empty_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['empty-img'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['no-comment'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511,
      columnNumber: 21
    }
  }, "Jadilah orang pertama yang berkomentar.")) : null)))), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['comment-footer'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521,
      columnNumber: 9
    }
  }, __jsx("textarea", {
    ref: textareaContainerElement,
    className: `${_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['comment-input']} ${isFocus ? _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['is-focus'] : ''}`,
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
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['like-it'],
    onClick: handelLikeIt,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['interaction-icon'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538,
      columnNumber: 15
    }
  }, supportFlag ? __jsx("img", {
    src: _static_images_liked_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    alt: "like",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540,
      columnNumber: 19
    }
  }) : __jsx("img", {
    src: _static_images_like_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "like",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542,
      columnNumber: 21
    }
  })), __jsx("span", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['interaction-count'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 545,
      columnNumber: 15
    }
  }, curSupportNums)) : null)), showImageModal ? __jsx(_components_image_view_modal__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
    imageList: imageList,
    onClose: handleCloseImageModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553,
      columnNumber: 9
    }
  }) : null, reportModal ? __jsx(_components_report__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], {
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
    const service = new _services_detail__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"]();
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

/***/ "UWG0":
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/detail",
      function () {
        var mod = __webpack_require__("N/ZP");
        if (false) {}
        return mod;
      }
    ]);
  

/***/ }),

/***/ "Xuae":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __webpack_require__("q1tI");

const isServer = false;

exports.default = () => {
  const mountedInstances = new Set();
  let state;

  function emitChange(component) {
    state = component.props.reduceComponentsToState([...mountedInstances], component.props);

    if (component.props.handleStateChange) {
      component.props.handleStateChange(state);
    }
  }

  return class extends react_1.Component {
    // Used when server rendering
    static rewind() {
      const recordedState = state;
      state = undefined;
      mountedInstances.clear();
      return recordedState;
    }

    constructor(props) {
      super(props);

      if (isServer) {
        mountedInstances.add(this);
        emitChange(this);
      }
    }

    componentDidMount() {
      mountedInstances.add(this);
      emitChange(this);
    }

    componentDidUpdate() {
      emitChange(this);
    }

    componentWillUnmount() {
      mountedInstances.delete(this);
      emitChange(this);
    }

    render() {
      return null;
    }

  };
};

/***/ }),

/***/ "lwAK":
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

exports.AmpStateContext = React.createContext({});

if (false) {}

/***/ }),

/***/ "msBk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./components/report/index.module.scss
var index_module = __webpack_require__("y4Mb");
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: ./components/radio-group/index.module.scss
var radio_group_index_module = __webpack_require__("gzpv");
var radio_group_index_module_default = /*#__PURE__*/__webpack_require__.n(radio_group_index_module);

// EXTERNAL MODULE: ./components/radio/index.module.scss
var radio_index_module = __webpack_require__("PC/4");
var radio_index_module_default = /*#__PURE__*/__webpack_require__.n(radio_index_module);

// CONCATENATED MODULE: ./components/radio/index.tsx
var _jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\components\\radio\\index.tsx";
var __jsx = react_default.a.createElement;




const Radio = ({
  label,
  value,
  onChange
}) => {
  const radioGroupValue = Object(react["useContext"])(RadioGroupContext);

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
var radio_group_jsx = react_default.a.createElement;



const RadioGroupContext = Object(react["createContext"])('');
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
  } = Object(react["useState"])(value);
  Object(react["useEffect"])(() => {
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
  }, radio_group_jsx(components_radio, Object(esm_extends["a" /* default */])({}, item, {
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

// EXTERNAL MODULE: ./node_modules/antd-mobile/es/index.js + 186 modules
var es = __webpack_require__("9ibs");

// EXTERNAL MODULE: ./services/detail.ts
var detail = __webpack_require__("OyYC");

// EXTERNAL MODULE: ./hooks/messageBoxHooks.ts
var messageBoxHooks = __webpack_require__("ODBD");

// CONCATENATED MODULE: ./components/report/index.tsx
var report_jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\components\\report\\index.tsx";
var report_jsx = react_default.a.createElement;







const Report = ({
  optionList,
  articleId,
  show,
  onClose
}) => {
  const {
    0: reportValue,
    1: setRepoetValue
  } = Object(react["useState"])(-1);
  const {
    0: reportOptionList
  } = Object(react["useState"])(optionList);
  const {
    0: reportCommentText,
    1: setReportCommentText
  } = Object(react["useState"])('');
  const isSubmit = Object(react["useRef"])(false);
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

  return report_jsx(es["b" /* Modal */], {
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

/***/ "oqq6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
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

/***/ "rePB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "szVv":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNy44OTcgMi4yMDdDOC42Ljg5OCAxMC4xNzMuNDQ4IDExLjQgMS4yMDdjMS4yMTIuNzUgMS43MzMgMi4zMjUgMS4yMzMgMy43MThsLS41NjcgMS41NzhoNC40NzdjMS4zNiAwIDIuNDY5IDEuMTMgMi41NTIgMi41NWwuMDA1LjE3MmMwIC4xNTUtLjAxMi4zMS0uMDM3LjQ2M2wtLjk2IDUuOTE3Yy0uMzIyIDEuOTgzLTEuOTM1IDMuNDM0LTMuODI0IDMuNDM0SDIuMzg1Yy0uODIyIDAtMS40ODUtLjctMS40ODUtMS41NlY4LjcyMmMwLS44Ni42NjMtMS41NTkgMS40ODUtMS41NTloMy4wNzJsLjQ1Mi0uOTUyIDEuOTg4LTQuMDA0em0tLjc1MyA1LjEwOWMtLjIyNi40NS0uMzk0Ljc5Mi0uNTA1IDEuMDI2YTguMjA4IDguMjA4IDAgMCAwLS4xLjIydjguMjMyYS41LjUgMCAwIDAgLjUuNWg3LjI0YzEuMTYyIDAgMi4xNi0uODY1IDIuMzYtMi4wNTVsLjk2LTUuNjkzYy4wMS0uMDY0LjAxNi0uMTI5LjAxNi0uMTk0IDAtLjYyLS40ODItMS4xMTctMS4wNzItMS4xMTdIOS45MmwxLjMyNC0zLjU0OWMuMjQ2LS42NTktLjAwOS0xLjQwNC0uNTk3LTEuNzU0YTEuMDQgMS4wNCAwIDAgMC0uODA0LS4xMTIgMS4wNTQgMS4wNTQgMCAwIDAtLjY0NC41IDM1NC4zNTggMzU0LjM1OCAwIDAgMC0yLjA1NSAzLjk5NnptLTIuNDkgMS40NjloLTEuNzdhLjUuNSAwIDAgMC0uNS41djcuNTFhLjUuNSAwIDAgMCAuNS41aDEuNzdhLjUuNSAwIDAgMCAuNS0uNXYtNy41MWEuNS41IDAgMCAwLS41LS41eiIgZmlsbD0iIzFCMjAyMCIgZmlsbC1ydWxlPSJub256ZXJvIiBmaWxsLW9wYWNpdHk9Ii4zIi8+PC9zdmc+"

/***/ }),

/***/ "vcgd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentInputSubject; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("K9Ia");

const CommentInputSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__[/* Subject */ "a"]();


/***/ }),

/***/ "wx14":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
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

/***/ }),

/***/ "xzxb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./components/comment-item/index.scss
var comment_item = __webpack_require__("XnvR");

// EXTERNAL MODULE: ./node_modules/mobx-react/dist/mobxreact.esm.js
var mobxreact_esm = __webpack_require__("TyAF");

// EXTERNAL MODULE: ./node_modules/mobx-react-lite/dist/mobxreactlite.esm.js
var mobxreactlite_esm = __webpack_require__("riab");

// EXTERNAL MODULE: ./components/user-avatar/index.tsx
var user_avatar = __webpack_require__("7GlH");

// EXTERNAL MODULE: ./components/comment-reply-item/index.scss
var comment_reply_item = __webpack_require__("dAgW");

// EXTERNAL MODULE: ./subject/comment.ts
var comment = __webpack_require__("vcgd");

// EXTERNAL MODULE: ./node_modules/antd-mobile/es/index.js + 186 modules
var es = __webpack_require__("9ibs");

// EXTERNAL MODULE: ./services/detail.ts
var detail = __webpack_require__("OyYC");

// CONCATENATED MODULE: ./components/comment-reply-item/index.tsx
var _jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\components\\comment-reply-item\\index.tsx";
var __jsx = react_default.a.createElement;








const CommentReplyItem = ({
  data,
  parentMessageUserid,
  parentMessageId
}) => {
  const {
    store
  } = Object(react["useContext"])(mobxreact_esm["a" /* MobXProviderContext */]);
  const {
    user
  } = Object(mobxreactlite_esm["d" /* useObserver */])(() => ({
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
    es["b" /* Modal */].alert('Yakin mau hapus?', 'Hapus', [{
      text: 'Tidak',
      onPress: () => {},
      style: 'cancel'
    }, {
      text: 'Ya, keluar',
      onPress: () => {
        service.deleteMessage(data.id).then(resp => {
          es["d" /* Toast */].success('Berhasil menghapus!', 1);
          resp.parentMessageId = parentMessageId;
          comment["a" /* CommentInputSubject */].next({
            action: 'delete-reply',
            messageData: resp
          }); //刷新二级评论列表
        }).catch(error => {
          console.error(error);
          es["d" /* Toast */].success('Gagal menghapus', 2);
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
var loading_jsx = react_default.a.createElement;



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
var comment_item_jsx = react_default.a.createElement;











const CommentItem = ({
  data
}) => {
  const {
    0: isMore,
    1: setIsMore
  } = Object(react["useState"])(false);
  const {
    0: isMoreLoading,
    1: setIsMoreLoading
  } = Object(react["useState"])(false);
  const pageSize = 10;
  const pageNum = Object(react["useRef"])(1);
  const {
    0: commentReplyList,
    1: setCommentReplyList
  } = Object(react["useState"])([]);
  const commentReplyListRef = Object(react["useRef"])([]);
  const totalReply = Object(react["useRef"])(0);
  const isFirsPaegeLoad = Object(react["useRef"])(false);
  const {
    store
  } = Object(react["useContext"])(mobxreact_esm["a" /* MobXProviderContext */]);
  const {
    user
  } = Object(mobxreactlite_esm["d" /* useObserver */])(() => ({
    user: store.user
  }));
  const service = new detail["a" /* default */]();
  Object(react["useEffect"])(() => {
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
    es["b" /* Modal */].alert('Yakin mau hapus?', 'Hapus', [{
      text: 'Tidak',
      onPress: () => {},
      style: 'cancel'
    }, {
      text: 'Ya, keluar',
      onPress: () => {
        service.deleteMessage(data.id).then(resp => {
          es["d" /* Toast */].success('Berhasil menghapus!', 1);
          comment["a" /* CommentInputSubject */].next({
            action: 'delete-comment',
            messageData: resp
          }); //删除一级评论列表
        }).catch(error => {
          console.error(error);
          es["d" /* Toast */].success('Gagal menghapus!', 2);
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

/***/ })

},[["UWG0",0,1,5,8,10,3,4,7,6,11,9,12,2]]]);