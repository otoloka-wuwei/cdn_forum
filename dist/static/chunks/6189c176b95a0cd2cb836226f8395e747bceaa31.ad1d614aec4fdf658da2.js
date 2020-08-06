(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

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
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"image-view-modal-container":"OYK8sE-wUjcJN4ZRlrt-L","hidden":"_3H3mLqkbmsjlYaE56vZIqG","right-handel":"f8Puh6k8Dyv1_OjfFVKLc","volume":"DhAEzVcVjbhjo26dZqlog","muted":"AborO1qRLIe9F7D4-0Dof","close-button":"_1JHa9QiGTc9RzbNHXaHUuv","showfullScreen":"_2qmesn-he42dqBeCsbiyPP","image-container":"_2GZXLYoaI45Iw97WoH-I4J","image-palceholder":"W9Djqh-pY5yGK0n8duddJ","image-list-container":"_30BbaV1OS5KqUpu_L6DjN2","image-count":"_1tBbA3_zIDHGeO_7Li_Llq","count-number":"jplhxoCle2sN73TWNZRKt","image-list-ccontent":"_3_7RwQJ8gGLUABJ2mc7ahu","image-list-wrapper":"_34dSQ87e5gs-V756c0ai63","image-list":"_2p0EpQ66C255HpDBV2yV8P","image-item":"_1atpnNf56gJoq5gDtPKolB","img-item-container":"_2i-ewxntqmgH4dAZj1TgjZ","image-item-placeholder":"_3oxAq35Zy7RT7POjq1qF2M","item-img":"ajvo5FB7EgKzYbuJr9E0s","active":"_3bKYy26QqU-aPc9iUwqJcx"};

/***/ }),

/***/ "Ts2V":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"swiper-video-component":"swiper-video-component","single-videos":"single-videos","loading-container":"loading-container","video-background":"video-background","icon-font":"icon-font"};

/***/ }),

/***/ "X3br":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__("i8i4");
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./components/image-view-modal/index.module.scss
var index_module = __webpack_require__("LoKC");
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);

// EXTERNAL MODULE: ./node_modules/mousetrap/mousetrap.js
var mousetrap = __webpack_require__("imBb");
var mousetrap_default = /*#__PURE__*/__webpack_require__.n(mousetrap);

// EXTERNAL MODULE: ./static/images/pleaceholder.svg
var pleaceholder = __webpack_require__("aV0h");
var pleaceholder_default = /*#__PURE__*/__webpack_require__.n(pleaceholder);

// EXTERNAL MODULE: ./node_modules/swiper/js/swiper.esm.bundle.js
var swiper_esm_bundle = __webpack_require__("thk6");

// EXTERNAL MODULE: ./components/swiper-video/index.scss
var swiper_video = __webpack_require__("Ts2V");

// EXTERNAL MODULE: ./components/video-loading/index.tsx
var video_loading = __webpack_require__("842X");

// CONCATENATED MODULE: ./components/swiper-video/index.tsx
var _jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\components\\swiper-video\\index.tsx";
var __jsx = react_default.a.createElement;




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
  const checkInterval = Object(react["useRef"])(50.0);
  const lastPlayPos = Object(react["useRef"])(0);
  const currentPlayPos = Object(react["useRef"])(0);
  const bufferingDetected = Object(react["useRef"])(false);
  const {
    0: canPlay,
    1: setCanPlay
  } = Object(react["useState"])(false);
  const {
    0: showLoading,
    1: setShowLoading
  } = Object(react["useState"])(false);
  const videoPlayer = Object(react["useRef"])();
  const {
    0: videoActive,
    1: setVideoActive
  } = Object(react["useState"])(data.videoActive);
  const timer = Object(react["useRef"])();
  Object(react["useEffect"])(() => {
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
var image_view_modal_jsx = react_default.a.createElement;








const ImageViewModal = ({
  imageList,
  onClose
}) => {
  const {
    0: id
  } = Object(react["useState"])('publishImg' + (Math.random() * 1000000).toFixed(0));
  const {
    0: showFullScreen,
    1: setShowFullScreen
  } = Object(react["useState"])(false);
  const {
    0: hidden,
    1: setHidden
  } = Object(react["useState"])(true);
  const {
    0: $imageList,
    1: setImageList
  } = Object(react["useState"])(imageList);
  const imageListElememt = Object(react["useRef"])();
  const {
    0: count,
    1: setCount
  } = Object(react["useState"])(imageList.findIndex(item => item.active) + 1);
  const {
    0: startIndex,
    1: setStartIndex
  } = Object(react["useState"])(imageList.findIndex(item => item.active));
  const {
    0: isMuted,
    1: setIsMuted
  } = Object(react["useState"])(true);
  const isMutedRef = Object(react["useRef"])(true);
  const {
    0: showHorn,
    1: setShowHorn
  } = Object(react["useState"])(false);
  const mySwiper = Object(react["useRef"])();
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  Object(react["useLayoutEffect"])(() => {
    mySwiper.current = new swiper_esm_bundle["a" /* default */](`#${id} .swiper-container`, {
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
  Object(react["useEffect"])(() => {
    setTimeout(() => {
      setHidden(false);
    }, 20);
    mousetrap_default.a.bind('esc', handleCloseModal);

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
      mousetrap_default.a.unbind('esc');
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

  return react_dom_default.a.createPortal(image_view_modal_jsx("div", {
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
  })) : image_view_modal_jsx(react_default.a.Fragment, null, image_view_modal_jsx("img", {
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

/***/ "imBb":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*global define:false */
/**
 * Copyright 2012-2017 Craig Campbell
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Mousetrap is a simple keyboard shortcut library for Javascript with
 * no external dependencies
 *
 * @version 1.6.5
 * @url craig.is/killing/mice
 */
(function(window, document, undefined) {

    // Check if mousetrap is used inside browser, if not, return
    if (!window) {
        return;
    }

    /**
     * mapping of special keycodes to their corresponding keys
     *
     * everything in this dictionary cannot use keypress events
     * so it has to be here to map to the correct keycodes for
     * keyup/keydown events
     *
     * @type {Object}
     */
    var _MAP = {
        8: 'backspace',
        9: 'tab',
        13: 'enter',
        16: 'shift',
        17: 'ctrl',
        18: 'alt',
        20: 'capslock',
        27: 'esc',
        32: 'space',
        33: 'pageup',
        34: 'pagedown',
        35: 'end',
        36: 'home',
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        45: 'ins',
        46: 'del',
        91: 'meta',
        93: 'meta',
        224: 'meta'
    };

    /**
     * mapping for special characters so they can support
     *
     * this dictionary is only used incase you want to bind a
     * keyup or keydown event to one of these keys
     *
     * @type {Object}
     */
    var _KEYCODE_MAP = {
        106: '*',
        107: '+',
        109: '-',
        110: '.',
        111 : '/',
        186: ';',
        187: '=',
        188: ',',
        189: '-',
        190: '.',
        191: '/',
        192: '`',
        219: '[',
        220: '\\',
        221: ']',
        222: '\''
    };

    /**
     * this is a mapping of keys that require shift on a US keypad
     * back to the non shift equivelents
     *
     * this is so you can use keyup events with these keys
     *
     * note that this will only work reliably on US keyboards
     *
     * @type {Object}
     */
    var _SHIFT_MAP = {
        '~': '`',
        '!': '1',
        '@': '2',
        '#': '3',
        '$': '4',
        '%': '5',
        '^': '6',
        '&': '7',
        '*': '8',
        '(': '9',
        ')': '0',
        '_': '-',
        '+': '=',
        ':': ';',
        '\"': '\'',
        '<': ',',
        '>': '.',
        '?': '/',
        '|': '\\'
    };

    /**
     * this is a list of special strings you can use to map
     * to modifier keys when you specify your keyboard shortcuts
     *
     * @type {Object}
     */
    var _SPECIAL_ALIASES = {
        'option': 'alt',
        'command': 'meta',
        'return': 'enter',
        'escape': 'esc',
        'plus': '+',
        'mod': /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? 'meta' : 'ctrl'
    };

    /**
     * variable to store the flipped version of _MAP from above
     * needed to check if we should use keypress or not when no action
     * is specified
     *
     * @type {Object|undefined}
     */
    var _REVERSE_MAP;

    /**
     * loop through the f keys, f1 to f19 and add them to the map
     * programatically
     */
    for (var i = 1; i < 20; ++i) {
        _MAP[111 + i] = 'f' + i;
    }

    /**
     * loop through to map numbers on the numeric keypad
     */
    for (i = 0; i <= 9; ++i) {

        // This needs to use a string cause otherwise since 0 is falsey
        // mousetrap will never fire for numpad 0 pressed as part of a keydown
        // event.
        //
        // @see https://github.com/ccampbell/mousetrap/pull/258
        _MAP[i + 96] = i.toString();
    }

    /**
     * cross browser add event method
     *
     * @param {Element|HTMLDocument} object
     * @param {string} type
     * @param {Function} callback
     * @returns void
     */
    function _addEvent(object, type, callback) {
        if (object.addEventListener) {
            object.addEventListener(type, callback, false);
            return;
        }

        object.attachEvent('on' + type, callback);
    }

    /**
     * takes the event and returns the key character
     *
     * @param {Event} e
     * @return {string}
     */
    function _characterFromEvent(e) {

        // for keypress events we should return the character as is
        if (e.type == 'keypress') {
            var character = String.fromCharCode(e.which);

            // if the shift key is not pressed then it is safe to assume
            // that we want the character to be lowercase.  this means if
            // you accidentally have caps lock on then your key bindings
            // will continue to work
            //
            // the only side effect that might not be desired is if you
            // bind something like 'A' cause you want to trigger an
            // event when capital A is pressed caps lock will no longer
            // trigger the event.  shift+a will though.
            if (!e.shiftKey) {
                character = character.toLowerCase();
            }

            return character;
        }

        // for non keypress events the special maps are needed
        if (_MAP[e.which]) {
            return _MAP[e.which];
        }

        if (_KEYCODE_MAP[e.which]) {
            return _KEYCODE_MAP[e.which];
        }

        // if it is not in the special map

        // with keydown and keyup events the character seems to always
        // come in as an uppercase character whether you are pressing shift
        // or not.  we should make sure it is always lowercase for comparisons
        return String.fromCharCode(e.which).toLowerCase();
    }

    /**
     * checks if two arrays are equal
     *
     * @param {Array} modifiers1
     * @param {Array} modifiers2
     * @returns {boolean}
     */
    function _modifiersMatch(modifiers1, modifiers2) {
        return modifiers1.sort().join(',') === modifiers2.sort().join(',');
    }

    /**
     * takes a key event and figures out what the modifiers are
     *
     * @param {Event} e
     * @returns {Array}
     */
    function _eventModifiers(e) {
        var modifiers = [];

        if (e.shiftKey) {
            modifiers.push('shift');
        }

        if (e.altKey) {
            modifiers.push('alt');
        }

        if (e.ctrlKey) {
            modifiers.push('ctrl');
        }

        if (e.metaKey) {
            modifiers.push('meta');
        }

        return modifiers;
    }

    /**
     * prevents default for this event
     *
     * @param {Event} e
     * @returns void
     */
    function _preventDefault(e) {
        if (e.preventDefault) {
            e.preventDefault();
            return;
        }

        e.returnValue = false;
    }

    /**
     * stops propogation for this event
     *
     * @param {Event} e
     * @returns void
     */
    function _stopPropagation(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
            return;
        }

        e.cancelBubble = true;
    }

    /**
     * determines if the keycode specified is a modifier key or not
     *
     * @param {string} key
     * @returns {boolean}
     */
    function _isModifier(key) {
        return key == 'shift' || key == 'ctrl' || key == 'alt' || key == 'meta';
    }

    /**
     * reverses the map lookup so that we can look for specific keys
     * to see what can and can't use keypress
     *
     * @return {Object}
     */
    function _getReverseMap() {
        if (!_REVERSE_MAP) {
            _REVERSE_MAP = {};
            for (var key in _MAP) {

                // pull out the numeric keypad from here cause keypress should
                // be able to detect the keys from the character
                if (key > 95 && key < 112) {
                    continue;
                }

                if (_MAP.hasOwnProperty(key)) {
                    _REVERSE_MAP[_MAP[key]] = key;
                }
            }
        }
        return _REVERSE_MAP;
    }

    /**
     * picks the best action based on the key combination
     *
     * @param {string} key - character for key
     * @param {Array} modifiers
     * @param {string=} action passed in
     */
    function _pickBestAction(key, modifiers, action) {

        // if no action was picked in we should try to pick the one
        // that we think would work best for this key
        if (!action) {
            action = _getReverseMap()[key] ? 'keydown' : 'keypress';
        }

        // modifier keys don't work as expected with keypress,
        // switch to keydown
        if (action == 'keypress' && modifiers.length) {
            action = 'keydown';
        }

        return action;
    }

    /**
     * Converts from a string key combination to an array
     *
     * @param  {string} combination like "command+shift+l"
     * @return {Array}
     */
    function _keysFromString(combination) {
        if (combination === '+') {
            return ['+'];
        }

        combination = combination.replace(/\+{2}/g, '+plus');
        return combination.split('+');
    }

    /**
     * Gets info for a specific key combination
     *
     * @param  {string} combination key combination ("command+s" or "a" or "*")
     * @param  {string=} action
     * @returns {Object}
     */
    function _getKeyInfo(combination, action) {
        var keys;
        var key;
        var i;
        var modifiers = [];

        // take the keys from this pattern and figure out what the actual
        // pattern is all about
        keys = _keysFromString(combination);

        for (i = 0; i < keys.length; ++i) {
            key = keys[i];

            // normalize key names
            if (_SPECIAL_ALIASES[key]) {
                key = _SPECIAL_ALIASES[key];
            }

            // if this is not a keypress event then we should
            // be smart about using shift keys
            // this will only work for US keyboards however
            if (action && action != 'keypress' && _SHIFT_MAP[key]) {
                key = _SHIFT_MAP[key];
                modifiers.push('shift');
            }

            // if this key is a modifier then add it to the list of modifiers
            if (_isModifier(key)) {
                modifiers.push(key);
            }
        }

        // depending on what the key combination is
        // we will try to pick the best event for it
        action = _pickBestAction(key, modifiers, action);

        return {
            key: key,
            modifiers: modifiers,
            action: action
        };
    }

    function _belongsTo(element, ancestor) {
        if (element === null || element === document) {
            return false;
        }

        if (element === ancestor) {
            return true;
        }

        return _belongsTo(element.parentNode, ancestor);
    }

    function Mousetrap(targetElement) {
        var self = this;

        targetElement = targetElement || document;

        if (!(self instanceof Mousetrap)) {
            return new Mousetrap(targetElement);
        }

        /**
         * element to attach key events to
         *
         * @type {Element}
         */
        self.target = targetElement;

        /**
         * a list of all the callbacks setup via Mousetrap.bind()
         *
         * @type {Object}
         */
        self._callbacks = {};

        /**
         * direct map of string combinations to callbacks used for trigger()
         *
         * @type {Object}
         */
        self._directMap = {};

        /**
         * keeps track of what level each sequence is at since multiple
         * sequences can start out with the same sequence
         *
         * @type {Object}
         */
        var _sequenceLevels = {};

        /**
         * variable to store the setTimeout call
         *
         * @type {null|number}
         */
        var _resetTimer;

        /**
         * temporary state where we will ignore the next keyup
         *
         * @type {boolean|string}
         */
        var _ignoreNextKeyup = false;

        /**
         * temporary state where we will ignore the next keypress
         *
         * @type {boolean}
         */
        var _ignoreNextKeypress = false;

        /**
         * are we currently inside of a sequence?
         * type of action ("keyup" or "keydown" or "keypress") or false
         *
         * @type {boolean|string}
         */
        var _nextExpectedAction = false;

        /**
         * resets all sequence counters except for the ones passed in
         *
         * @param {Object} doNotReset
         * @returns void
         */
        function _resetSequences(doNotReset) {
            doNotReset = doNotReset || {};

            var activeSequences = false,
                key;

            for (key in _sequenceLevels) {
                if (doNotReset[key]) {
                    activeSequences = true;
                    continue;
                }
                _sequenceLevels[key] = 0;
            }

            if (!activeSequences) {
                _nextExpectedAction = false;
            }
        }

        /**
         * finds all callbacks that match based on the keycode, modifiers,
         * and action
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event|Object} e
         * @param {string=} sequenceName - name of the sequence we are looking for
         * @param {string=} combination
         * @param {number=} level
         * @returns {Array}
         */
        function _getMatches(character, modifiers, e, sequenceName, combination, level) {
            var i;
            var callback;
            var matches = [];
            var action = e.type;

            // if there are no events related to this keycode
            if (!self._callbacks[character]) {
                return [];
            }

            // if a modifier key is coming up on its own we should allow it
            if (action == 'keyup' && _isModifier(character)) {
                modifiers = [character];
            }

            // loop through all callbacks for the key that was pressed
            // and see if any of them match
            for (i = 0; i < self._callbacks[character].length; ++i) {
                callback = self._callbacks[character][i];

                // if a sequence name is not specified, but this is a sequence at
                // the wrong level then move onto the next match
                if (!sequenceName && callback.seq && _sequenceLevels[callback.seq] != callback.level) {
                    continue;
                }

                // if the action we are looking for doesn't match the action we got
                // then we should keep going
                if (action != callback.action) {
                    continue;
                }

                // if this is a keypress event and the meta key and control key
                // are not pressed that means that we need to only look at the
                // character, otherwise check the modifiers as well
                //
                // chrome will not fire a keypress if meta or control is down
                // safari will fire a keypress if meta or meta+shift is down
                // firefox will fire a keypress if meta or control is down
                if ((action == 'keypress' && !e.metaKey && !e.ctrlKey) || _modifiersMatch(modifiers, callback.modifiers)) {

                    // when you bind a combination or sequence a second time it
                    // should overwrite the first one.  if a sequenceName or
                    // combination is specified in this call it does just that
                    //
                    // @todo make deleting its own method?
                    var deleteCombo = !sequenceName && callback.combo == combination;
                    var deleteSequence = sequenceName && callback.seq == sequenceName && callback.level == level;
                    if (deleteCombo || deleteSequence) {
                        self._callbacks[character].splice(i, 1);
                    }

                    matches.push(callback);
                }
            }

            return matches;
        }

        /**
         * actually calls the callback function
         *
         * if your callback function returns false this will use the jquery
         * convention - prevent default and stop propogation on the event
         *
         * @param {Function} callback
         * @param {Event} e
         * @returns void
         */
        function _fireCallback(callback, e, combo, sequence) {

            // if this event should not happen stop here
            if (self.stopCallback(e, e.target || e.srcElement, combo, sequence)) {
                return;
            }

            if (callback(e, combo) === false) {
                _preventDefault(e);
                _stopPropagation(e);
            }
        }

        /**
         * handles a character key event
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event} e
         * @returns void
         */
        self._handleKey = function(character, modifiers, e) {
            var callbacks = _getMatches(character, modifiers, e);
            var i;
            var doNotReset = {};
            var maxLevel = 0;
            var processedSequenceCallback = false;

            // Calculate the maxLevel for sequences so we can only execute the longest callback sequence
            for (i = 0; i < callbacks.length; ++i) {
                if (callbacks[i].seq) {
                    maxLevel = Math.max(maxLevel, callbacks[i].level);
                }
            }

            // loop through matching callbacks for this key event
            for (i = 0; i < callbacks.length; ++i) {

                // fire for all sequence callbacks
                // this is because if for example you have multiple sequences
                // bound such as "g i" and "g t" they both need to fire the
                // callback for matching g cause otherwise you can only ever
                // match the first one
                if (callbacks[i].seq) {

                    // only fire callbacks for the maxLevel to prevent
                    // subsequences from also firing
                    //
                    // for example 'a option b' should not cause 'option b' to fire
                    // even though 'option b' is part of the other sequence
                    //
                    // any sequences that do not match here will be discarded
                    // below by the _resetSequences call
                    if (callbacks[i].level != maxLevel) {
                        continue;
                    }

                    processedSequenceCallback = true;

                    // keep a list of which sequences were matches for later
                    doNotReset[callbacks[i].seq] = 1;
                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo, callbacks[i].seq);
                    continue;
                }

                // if there were no sequence matches but we are still here
                // that means this is a regular match so we should fire that
                if (!processedSequenceCallback) {
                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo);
                }
            }

            // if the key you pressed matches the type of sequence without
            // being a modifier (ie "keyup" or "keypress") then we should
            // reset all sequences that were not matched by this event
            //
            // this is so, for example, if you have the sequence "h a t" and you
            // type "h e a r t" it does not match.  in this case the "e" will
            // cause the sequence to reset
            //
            // modifier keys are ignored because you can have a sequence
            // that contains modifiers such as "enter ctrl+space" and in most
            // cases the modifier key will be pressed before the next key
            //
            // also if you have a sequence such as "ctrl+b a" then pressing the
            // "b" key will trigger a "keypress" and a "keydown"
            //
            // the "keydown" is expected when there is a modifier, but the
            // "keypress" ends up matching the _nextExpectedAction since it occurs
            // after and that causes the sequence to reset
            //
            // we ignore keypresses in a sequence that directly follow a keydown
            // for the same character
            var ignoreThisKeypress = e.type == 'keypress' && _ignoreNextKeypress;
            if (e.type == _nextExpectedAction && !_isModifier(character) && !ignoreThisKeypress) {
                _resetSequences(doNotReset);
            }

            _ignoreNextKeypress = processedSequenceCallback && e.type == 'keydown';
        };

        /**
         * handles a keydown event
         *
         * @param {Event} e
         * @returns void
         */
        function _handleKeyEvent(e) {

            // normalize e.which for key events
            // @see http://stackoverflow.com/questions/4285627/javascript-keycode-vs-charcode-utter-confusion
            if (typeof e.which !== 'number') {
                e.which = e.keyCode;
            }

            var character = _characterFromEvent(e);

            // no character found then stop
            if (!character) {
                return;
            }

            // need to use === for the character check because the character can be 0
            if (e.type == 'keyup' && _ignoreNextKeyup === character) {
                _ignoreNextKeyup = false;
                return;
            }

            self.handleKey(character, _eventModifiers(e), e);
        }

        /**
         * called to set a 1 second timeout on the specified sequence
         *
         * this is so after each key press in the sequence you have 1 second
         * to press the next key before you have to start over
         *
         * @returns void
         */
        function _resetSequenceTimer() {
            clearTimeout(_resetTimer);
            _resetTimer = setTimeout(_resetSequences, 1000);
        }

        /**
         * binds a key sequence to an event
         *
         * @param {string} combo - combo specified in bind call
         * @param {Array} keys
         * @param {Function} callback
         * @param {string=} action
         * @returns void
         */
        function _bindSequence(combo, keys, callback, action) {

            // start off by adding a sequence level record for this combination
            // and setting the level to 0
            _sequenceLevels[combo] = 0;

            /**
             * callback to increase the sequence level for this sequence and reset
             * all other sequences that were active
             *
             * @param {string} nextAction
             * @returns {Function}
             */
            function _increaseSequence(nextAction) {
                return function() {
                    _nextExpectedAction = nextAction;
                    ++_sequenceLevels[combo];
                    _resetSequenceTimer();
                };
            }

            /**
             * wraps the specified callback inside of another function in order
             * to reset all sequence counters as soon as this sequence is done
             *
             * @param {Event} e
             * @returns void
             */
            function _callbackAndReset(e) {
                _fireCallback(callback, e, combo);

                // we should ignore the next key up if the action is key down
                // or keypress.  this is so if you finish a sequence and
                // release the key the final key will not trigger a keyup
                if (action !== 'keyup') {
                    _ignoreNextKeyup = _characterFromEvent(e);
                }

                // weird race condition if a sequence ends with the key
                // another sequence begins with
                setTimeout(_resetSequences, 10);
            }

            // loop through keys one at a time and bind the appropriate callback
            // function.  for any key leading up to the final one it should
            // increase the sequence. after the final, it should reset all sequences
            //
            // if an action is specified in the original bind call then that will
            // be used throughout.  otherwise we will pass the action that the
            // next key in the sequence should match.  this allows a sequence
            // to mix and match keypress and keydown events depending on which
            // ones are better suited to the key provided
            for (var i = 0; i < keys.length; ++i) {
                var isFinal = i + 1 === keys.length;
                var wrappedCallback = isFinal ? _callbackAndReset : _increaseSequence(action || _getKeyInfo(keys[i + 1]).action);
                _bindSingle(keys[i], wrappedCallback, action, combo, i);
            }
        }

        /**
         * binds a single keyboard combination
         *
         * @param {string} combination
         * @param {Function} callback
         * @param {string=} action
         * @param {string=} sequenceName - name of sequence if part of sequence
         * @param {number=} level - what part of the sequence the command is
         * @returns void
         */
        function _bindSingle(combination, callback, action, sequenceName, level) {

            // store a direct mapped reference for use with Mousetrap.trigger
            self._directMap[combination + ':' + action] = callback;

            // make sure multiple spaces in a row become a single space
            combination = combination.replace(/\s+/g, ' ');

            var sequence = combination.split(' ');
            var info;

            // if this pattern is a sequence of keys then run through this method
            // to reprocess each pattern one key at a time
            if (sequence.length > 1) {
                _bindSequence(combination, sequence, callback, action);
                return;
            }

            info = _getKeyInfo(combination, action);

            // make sure to initialize array if this is the first time
            // a callback is added for this key
            self._callbacks[info.key] = self._callbacks[info.key] || [];

            // remove an existing match if there is one
            _getMatches(info.key, info.modifiers, {type: info.action}, sequenceName, combination, level);

            // add this call back to the array
            // if it is a sequence put it at the beginning
            // if not put it at the end
            //
            // this is important because the way these are processed expects
            // the sequence ones to come first
            self._callbacks[info.key][sequenceName ? 'unshift' : 'push']({
                callback: callback,
                modifiers: info.modifiers,
                action: info.action,
                seq: sequenceName,
                level: level,
                combo: combination
            });
        }

        /**
         * binds multiple combinations to the same callback
         *
         * @param {Array} combinations
         * @param {Function} callback
         * @param {string|undefined} action
         * @returns void
         */
        self._bindMultiple = function(combinations, callback, action) {
            for (var i = 0; i < combinations.length; ++i) {
                _bindSingle(combinations[i], callback, action);
            }
        };

        // start!
        _addEvent(targetElement, 'keypress', _handleKeyEvent);
        _addEvent(targetElement, 'keydown', _handleKeyEvent);
        _addEvent(targetElement, 'keyup', _handleKeyEvent);
    }

    /**
     * binds an event to mousetrap
     *
     * can be a single key, a combination of keys separated with +,
     * an array of keys, or a sequence of keys separated by spaces
     *
     * be sure to list the modifier keys first to make sure that the
     * correct key ends up getting bound (the last key in the pattern)
     *
     * @param {string|Array} keys
     * @param {Function} callback
     * @param {string=} action - 'keypress', 'keydown', or 'keyup'
     * @returns void
     */
    Mousetrap.prototype.bind = function(keys, callback, action) {
        var self = this;
        keys = keys instanceof Array ? keys : [keys];
        self._bindMultiple.call(self, keys, callback, action);
        return self;
    };

    /**
     * unbinds an event to mousetrap
     *
     * the unbinding sets the callback function of the specified key combo
     * to an empty function and deletes the corresponding key in the
     * _directMap dict.
     *
     * TODO: actually remove this from the _callbacks dictionary instead
     * of binding an empty function
     *
     * the keycombo+action has to be exactly the same as
     * it was defined in the bind method
     *
     * @param {string|Array} keys
     * @param {string} action
     * @returns void
     */
    Mousetrap.prototype.unbind = function(keys, action) {
        var self = this;
        return self.bind.call(self, keys, function() {}, action);
    };

    /**
     * triggers an event that has already been bound
     *
     * @param {string} keys
     * @param {string=} action
     * @returns void
     */
    Mousetrap.prototype.trigger = function(keys, action) {
        var self = this;
        if (self._directMap[keys + ':' + action]) {
            self._directMap[keys + ':' + action]({}, keys);
        }
        return self;
    };

    /**
     * resets the library back to its initial state.  this is useful
     * if you want to clear out the current keyboard shortcuts and bind
     * new ones - for example if you switch to another page
     *
     * @returns void
     */
    Mousetrap.prototype.reset = function() {
        var self = this;
        self._callbacks = {};
        self._directMap = {};
        return self;
    };

    /**
     * should we stop this event before firing off callbacks
     *
     * @param {Event} e
     * @param {Element} element
     * @return {boolean}
     */
    Mousetrap.prototype.stopCallback = function(e, element) {
        var self = this;

        // if the element has the class "mousetrap" then no need to stop
        if ((' ' + element.className + ' ').indexOf(' mousetrap ') > -1) {
            return false;
        }

        if (_belongsTo(element, self.target)) {
            return false;
        }

        // Events originating from a shadow DOM are re-targetted and `e.target` is the shadow host,
        // not the initial event target in the shadow tree. Note that not all events cross the
        // shadow boundary.
        // For shadow trees with `mode: 'open'`, the initial event target is the first element in
        // the event’s composed path. For shadow trees with `mode: 'closed'`, the initial event
        // target cannot be obtained.
        if ('composedPath' in e && typeof e.composedPath === 'function') {
            // For open shadow trees, update `element` so that the following check works.
            var initialEventTarget = e.composedPath()[0];
            if (initialEventTarget !== e.target) {
                element = initialEventTarget;
            }
        }

        // stop for input, select, and textarea
        return element.tagName == 'INPUT' || element.tagName == 'SELECT' || element.tagName == 'TEXTAREA' || element.isContentEditable;
    };

    /**
     * exposes _handleKey publicly so it can be overwritten by extensions
     */
    Mousetrap.prototype.handleKey = function() {
        var self = this;
        return self._handleKey.apply(self, arguments);
    };

    /**
     * allow custom key mappings
     */
    Mousetrap.addKeycodes = function(object) {
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                _MAP[key] = object[key];
            }
        }
        _REVERSE_MAP = null;
    };

    /**
     * Init the global mousetrap functions
     *
     * This method is needed to allow the global mousetrap functions to work
     * now that mousetrap is a constructor function.
     */
    Mousetrap.init = function() {
        var documentMousetrap = Mousetrap(document);
        for (var method in documentMousetrap) {
            if (method.charAt(0) !== '_') {
                Mousetrap[method] = (function(method) {
                    return function() {
                        return documentMousetrap[method].apply(documentMousetrap, arguments);
                    };
                } (method));
            }
        }
    };

    Mousetrap.init();

    // expose mousetrap to the global object
    window.Mousetrap = Mousetrap;

    // expose as a common js module
    if ( true && module.exports) {
        module.exports = Mousetrap;
    }

    // expose mousetrap as an AMD module
    if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
            return Mousetrap;
        }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
}) (typeof window !== 'undefined' ? window : null, typeof  window !== 'undefined' ? document : null);


/***/ })

}]);