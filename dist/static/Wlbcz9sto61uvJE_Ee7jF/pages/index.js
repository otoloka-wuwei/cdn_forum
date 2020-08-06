(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "Dkwd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return /* binding */ __N_SSP; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./pages/index/index.scss
var pages_index = __webpack_require__("ajvM");

// EXTERNAL MODULE: ./components/post-button/index.scss
var post_button = __webpack_require__("QYNh");

// EXTERNAL MODULE: ./components/ripple/index.scss
var ripple = __webpack_require__("eEbD");

// CONCATENATED MODULE: ./components/ripple/index.tsx
var _jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\components\\ripple\\index.tsx";
var __jsx = react_default.a.createElement;



const Ripple = ({}) => {
  const {
    0: rippleSize,
    1: setRippleSize
  } = Object(react["useState"])(0);
  const {
    0: rippleX,
    1: setRippleX
  } = Object(react["useState"])(0);
  const {
    0: rippleY,
    1: setRippleY
  } = Object(react["useState"])(0);
  const {
    0: isVisible,
    1: setIsVisible
  } = Object(react["useState"])(false);
  const {
    0: scale,
    1: setScale
  } = Object(react["useState"])('');

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
// EXTERNAL MODULE: ./node_modules/next/dist/client/router.js
var client_router = __webpack_require__("nOHt");

// EXTERNAL MODULE: ./node_modules/mobx-react/dist/mobxreact.esm.js
var mobxreact_esm = __webpack_require__("TyAF");

// EXTERNAL MODULE: ./node_modules/mobx-react-lite/dist/mobxreactlite.esm.js
var mobxreactlite_esm = __webpack_require__("riab");

// CONCATENATED MODULE: ./components/post-button/index.tsx
var post_button_jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\components\\post-button\\index.tsx";
var post_button_jsx = react_default.a.createElement;






const PostButton = ({
  systemCategoryId
}) => {
  const router = Object(client_router["useRouter"])();
  const {
    store
  } = Object(react["useContext"])(mobxreact_esm["a" /* MobXProviderContext */]);
  const {
    user
  } = Object(mobxreactlite_esm["d" /* useObserver */])(() => ({
    user: store.user
  }));
  const {
    0: isApp,
    1: setIsApp
  } = Object(react["useState"])(true);
  Object(react["useEffect"])(() => {
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

// EXTERNAL MODULE: ./node_modules/better-scroll/dist/bscroll.esm.js
var bscroll_esm = __webpack_require__("H7qB");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/category-list/index.tsx
var category_list_jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\components\\category-list\\index.tsx";
var category_list_jsx = react_default.a.createElement;





const CategoryList = ({
  categoryList
}) => {
  const listElement = Object(react["useRef"])();
  const underlineElement = Object(react["useRef"])();
  const {
    0: underLineLeft,
    1: setUnderLineLeft
  } = Object(react["useState"])(0);
  const {
    0: isLoaded,
    1: setIsLoaded
  } = Object(react["useState"])(false);
  const scrollInstance = Object(react["useRef"])(null);
  Object(react["useEffect"])(() => {
    return () => {
      if (!!scrollInstance.current) {
        scrollInstance.current.destroy();
        scrollInstance.current = null;
      }
    };
  }, []);
  Object(react["useEffect"])(() => {
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
        scrollInstance.current = new bscroll_esm["a" /* default */]('#category-list-component', {
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

// EXTERNAL MODULE: ./node_modules/swiper/js/swiper.esm.bundle.js
var swiper_esm_bundle = __webpack_require__("thk6");

// CONCATENATED MODULE: ./components/banner/index.tsx
var banner_jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\components\\banner\\index.tsx";
var banner_jsx = react_default.a.createElement;




const Banner = ({
  list
}) => {
  const {
    0: isLoaded,
    1: setIsLoaded
  } = Object(react["useState"])(false);
  Object(react["useEffect"])(() => {
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
  } = Object(react["useState"])('banner' + (Math.random() * 1000000).toFixed(0));
  Object(react["useLayoutEffect"])(() => {
    const mySwiper = new swiper_esm_bundle["a" /* default */](`#${id} .swiper-container`, {
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
var threads_item_image_list_jsx = react_default.a.createElement;






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
    } = Object(react["useState"])(data ? data.urls[0].url || big_pleaceholder_default.a : big_pleaceholder_default.a);
    const type = data.urls[0].type;
    const item = data.urls[0];
    const {
      0: videoHieght,
      1: setVideoHeight
    } = Object(react["useState"])(0);
    Object(react["useEffect"])(() => {
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
    }) : threads_item_image_list_jsx(react_default.a.Fragment, null, threads_item_image_list_jsx("img", {
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
    }) : threads_item_image_list_jsx(react_default.a.Fragment, null, threads_item_image_list_jsx("img", {
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
var threads_item_jsx = react_default.a.createElement;











const ThreadsItem = ({
  data,
  onRemove
}) => {
  const isLikeSubmit = Object(react["useRef"])(false);
  const {
    0: supportNums,
    1: setSupportNums
  } = Object(react["useState"])('0');
  const {
    0: shareNums,
    1: setShareNums
  } = Object(react["useState"])('0');
  const {
    0: supportFlag,
    1: setSupportFlag
  } = Object(react["useState"])(0);
  const {
    store
  } = Object(react["useContext"])(mobxreact_esm["a" /* MobXProviderContext */]);
  const {
    user
  } = Object(mobxreactlite_esm["d" /* useObserver */])(() => ({
    user: store.user
  }));
  const service = new detail["a" /* default */]();
  const showMessageBox = Object(messageBoxHooks["a" /* default */])();
  const router = Object(client_router["useRouter"])();
  const {
    0: isApp,
    1: setIsApp
  } = Object(react["useState"])(true);
  Object(react["useEffect"])(() => {
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
  })) : null, data.status === -1 ? threads_item_jsx(react_default.a.Fragment, null, threads_item_jsx("i", {
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

// EXTERNAL MODULE: ./format/index.ts + 1 modules
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
var button_jsx = react_default.a.createElement;



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
var empty_article_list_jsx = react_default.a.createElement;






const EmptyArticleList = ({
  systemCategoryId
}) => {
  const router = Object(client_router["useRouter"])();
  const {
    store
  } = Object(react["useContext"])(mobxreact_esm["a" /* MobXProviderContext */]);
  const {
    user
  } = Object(mobxreactlite_esm["d" /* useObserver */])(() => ({
    user: store.user
  }));
  const {
    0: isApp,
    1: setIsApp
  } = Object(react["useState"])(true);
  Object(react["useEffect"])(() => {
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
  } = Object(react["useContext"])(mobxreact_esm["a" /* MobXProviderContext */]);
  return Object(react["useCallback"])((type, message) => {
    store.showToastBox(type, message);
  }, []);
};

/* harmony default export */ var toastBoxHooks = (useToastBox);
// EXTERNAL MODULE: ./node_modules/antd-mobile/es/index.js + 186 modules
var es = __webpack_require__("9ibs");

// EXTERNAL MODULE: ./util/bridge.ts
var bridge = __webpack_require__("ctMP");

// CONCATENATED MODULE: ./pages/index/index.tsx
var index_jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\pages\\index\\index.tsx";
var index_jsx = react_default.a.createElement;

















const HomePage = ({
  categoryId,
  categoryLit
}) => {
  const userRef = Object(react["useRef"])(null);
  const {
    store
  } = Object(react["useContext"])(mobxreact_esm["a" /* MobXProviderContext */]);
  const {
    user
  } = Object(mobxreactlite_esm["d" /* useObserver */])(() => ({
    user: store.user
  }));
  const {
    0: articleList,
    1: setArticleList
  } = Object(react["useState"])(Array.from({
    length: 15
  }));
  const {
    0: bannerList,
    1: setBannerList
  } = Object(react["useState"])(Array.from({
    length: 1
  }));
  const categoryIdRef = Object(react["useRef"])(categoryId);
  const isLoaded = Object(react["useRef"])(false);
  const categoryListRef = Object(react["useRef"])(categoryLit);
  const articleFailListRef = Object(react["useRef"])([]);
  const articleListRef = Object(react["useRef"])(articleList);
  const observerListRef = Object(react["useRef"])([]);
  const bannerListRef = Object(react["useRef"])(bannerList);
  const pageSize = 15;
  const pageNum = Object(react["useRef"])(1);
  const {
    0: canPullUp,
    1: setCanPullUp
  } = Object(react["useState"])(false);
  const service = new home_HomePageService();
  const isMounted = Object(react["useRef"])(false);
  const {
    0: isApp,
    1: setIsApp
  } = Object(react["useState"])(true);
  const showToastBox = toastBoxHooks();
  const showMessageBox = Object(messageBoxHooks["a" /* default */])();
  const router = Object(client_router["useRouter"])();
  let observer = null;
  Object(react["useEffect"])(() => {
    //检测列表数据的变化
    dom["a" /* DomChangeSubject */].next();
    observerEle();
  }, [articleList]);
  Object(react["useEffect"])(() => {
    if (!!user && user.userId > -1) {
      userRef.current = user;
      getFailThreadsList();
    } else {
      articleFailListRef.current = [];
    }
  }, [user]);
  Object(react["useEffect"])(() => {
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
    es["b" /* Modal */].alert('Yakin mau hapus postingan?', 'Hapus', [{
      text: 'Tidak',
      onPress: () => {},
      style: 'cancel'
    }, {
      text: 'Ya, keluar',
      onPress: () => {
        service.deleteArticle(threadsItem.articleId).then(() => {
          es["d" /* Toast */].success('Berhasil menghapus!', 1);

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
          es["d" /* Toast */].success('Gagal menghapus!', 2);
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

var __N_SSP = true;
/* harmony default export */ var pages_index_0 = __webpack_exports__["default"] = (HomePage);

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

/***/ "Pdzu":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjMyOHB4IiBoZWlnaHQ9IjE2NHB4IiB2aWV3Qm94PSIwIDAgMzI4IDE2NCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDYwLjEgKDg4MTMzKSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4NCiAgICA8dGl0bGU+5Zu+54mH5o2f5Z2PLTI6MTwvdGl0bGU+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGRlZnM+DQogICAgICAgIDxyZWN0IGlkPSJwYXRoLTEiIHg9IjAiIHk9IjAiIHdpZHRoPSIzMjgiIGhlaWdodD0iMTY0IiByeD0iNSI+PC9yZWN0Pg0KICAgIDwvZGVmcz4NCiAgICA8ZyBpZD0iMS4zLjEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBpZD0i5pCc57Si57uT5p6c5aSH5Lu9LTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNi4wMDAwMDAsIC0xNDIuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyBpZD0i5Zu+54mH5o2f5Z2PLTI6MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYuMDAwMDAwLCAxNDIuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgaWQ9IuS9jeWbvuWkh+S7vS03Ij4NCiAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stMiIgZmlsbD0id2hpdGUiPg0KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4NCiAgICAgICAgICAgICAgICAgICAgPC9tYXNrPg0KICAgICAgICAgICAgICAgICAgICA8dXNlIGlkPSLokpnniYgiIGZpbGw9IiNGNkY3RjkiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgICAgICA8ZyBpZD0i57yW57uEIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzQuMDAwMDAwLCA0Ni4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPg0KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNjAsNjAuMjE4NTc5MiBMNjAsMTMuNTUxOTEyNiBDNTkuOTg5MDE3Myw5Ljg3NDU3MzAxIDU3LjAxMDY3MjksNi44OTYyMjg1NyA1My4zMzMzMzMzLDYuODg1MjQ1OSBMNi42NjY2NjY2Nyw2Ljg4NTI0NTkgQzIuOTg5MzI3MTEsNi44OTYyMjg1NyAwLjAxMDk4MjY3MDQsOS44NzQ1NzMwMSAwLDEzLjU1MTkxMjYgTDAsNjAuMjE4NTc5MiBDMC4wMTA5ODI2NzA0LDYzLjg5NTkxODggMi45ODkzMjcxMSw2Ni44NzQyNjMyIDYuNjY2NjY2NjcsNjYuODg1MjQ1OSBMNTMuMzMzMzMzMyw2Ni44ODUyNDU5IEM1Ny4wMTA2NzI5LDY2Ljg3NDI2MzIgNTkuOTg5MDE3Myw2My44OTU5MTg4IDYwLDYwLjIxODU3OTIgTDYwLDYwLjIxODU3OTIgWiBNMTguMzMzMzMzMyw0MS44ODUyNDU5IEwyNi42NjY2NjY3LDUxLjkxODU3OTIgTDM4LjMzMzMzMzMsMzYuODg1MjQ1OSBMNTMuMzMzMzMzMyw1Ni44ODUyNDU5IEw2LjY2NjY2NjY3LDU2Ljg4NTI0NTkgTDE4LjMzMzMzMzMsNDEuODg1MjQ1OSBaIiBpZD0i5b2i54q2IiBmaWxsPSIjRURFRUYwIj48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSLot6/lvoQiIGZpbGw9IiNGNkY3RjkiIHBvaW50cz0iMjMuMjMyMTI2NCAzNS43MTA2NTM1IDMyLjEwNDkyNzMgMCAzOC4zOTg0MDA1IDEuNjYyODMxNzggMzAuODA5ODQ5MiAzMi4yMTA2NjA4IDQ2LjIyOTUwODIgNDAuNDYyMjQgMjMuOTg1NzgzOCA3Mi43ODY4ODUyIDE4LjY4ODUyNDYgNjguOTAyNDc0NCAzNi42MDczODExIDQyLjg2NDg1MzEiPjwvcG9seWdvbj4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4="

/***/ }),

/***/ "Rjtp":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNS42MjUgNS43ODFjLS4yNjcuNTI0LS40NjYuOTIzLS41OTcgMS4xOTZsLS4xMTkuMjU3LjAwMSA5LjE3NmExIDEgMCAwIDAgMSAxaDguMTQ3YzEuMzczIDAgMi41NTItMS4wMDggMi43OS0yLjM5NUwxNy45OCA4LjM4Yy4wMTItLjA3NC4wMTktLjE1LjAxOS0uMjI1IDAtLjcyMy0uNTctMS4zMDItMS4yNjgtMS4zMDJIOS42bDEuNDctNC4xMzZjLjI5LS43NjgtLjE0Ny0xLjU2OC0uODQyLTEuOTc2QzkuOTQuNTcyIDkuMjczLjQ4NyA4Ljk1LjU3MmMtLjMyMS4wODYtLjczMi4yNjUtLjg5Ny41NTNhNDEwLjg2IDQxMC44NiAwIDAgMC0yLjQyOSA0LjY1NnptLTIuODUyIDEuODFILjVhLjUuNSAwIDAgMC0uNS41djguODE5YS41LjUgMCAwIDAgLjUuNWgyLjI3M2EuNS41IDAgMCAwIC41LS41VjguMDkyYS41LjUgMCAwIDAtLjUtLjV6IiBmaWxsPSIjRkY1NjU2IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4="

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("q1tI"));

var _url = __webpack_require__("QmWs");

var _utils = __webpack_require__("g/15");

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
var IntersectionObserver = true ? window.IntersectionObserver : undefined;
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
    if (!this.p || false) return; // Prefetch the JSON page if asked (only in the client)

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

/***/ "l7eb":
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function () {
        var mod = __webpack_require__("Dkwd");
        if (false) {}
        return mod;
      }
    ]);
  

/***/ }),

/***/ "szVv":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNy44OTcgMi4yMDdDOC42Ljg5OCAxMC4xNzMuNDQ4IDExLjQgMS4yMDdjMS4yMTIuNzUgMS43MzMgMi4zMjUgMS4yMzMgMy43MThsLS41NjcgMS41NzhoNC40NzdjMS4zNiAwIDIuNDY5IDEuMTMgMi41NTIgMi41NWwuMDA1LjE3MmMwIC4xNTUtLjAxMi4zMS0uMDM3LjQ2M2wtLjk2IDUuOTE3Yy0uMzIyIDEuOTgzLTEuOTM1IDMuNDM0LTMuODI0IDMuNDM0SDIuMzg1Yy0uODIyIDAtMS40ODUtLjctMS40ODUtMS41NlY4LjcyMmMwLS44Ni42NjMtMS41NTkgMS40ODUtMS41NTloMy4wNzJsLjQ1Mi0uOTUyIDEuOTg4LTQuMDA0em0tLjc1MyA1LjEwOWMtLjIyNi40NS0uMzk0Ljc5Mi0uNTA1IDEuMDI2YTguMjA4IDguMjA4IDAgMCAwLS4xLjIydjguMjMyYS41LjUgMCAwIDAgLjUuNWg3LjI0YzEuMTYyIDAgMi4xNi0uODY1IDIuMzYtMi4wNTVsLjk2LTUuNjkzYy4wMS0uMDY0LjAxNi0uMTI5LjAxNi0uMTk0IDAtLjYyLS40ODItMS4xMTctMS4wNzItMS4xMTdIOS45MmwxLjMyNC0zLjU0OWMuMjQ2LS42NTktLjAwOS0xLjQwNC0uNTk3LTEuNzU0YTEuMDQgMS4wNCAwIDAgMC0uODA0LS4xMTIgMS4wNTQgMS4wNTQgMCAwIDAtLjY0NC41IDM1NC4zNTggMzU0LjM1OCAwIDAgMC0yLjA1NSAzLjk5NnptLTIuNDkgMS40NjloLTEuNzdhLjUuNSAwIDAgMC0uNS41djcuNTFhLjUuNSAwIDAgMCAuNS41aDEuNzdhLjUuNSAwIDAgMCAuNS0uNXYtNy41MWEuNS41IDAgMCAwLS41LS41eiIgZmlsbD0iIzFCMjAyMCIgZmlsbC1ydWxlPSJub256ZXJvIiBmaWxsLW9wYWNpdHk9Ii4zIi8+PC9zdmc+"

/***/ })

},[["l7eb",0,1,5,8,10,3,4,7,6,11,9,2]]]);