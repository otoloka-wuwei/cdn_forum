(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "Qbs0":
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/publish",
      function () {
        var mod = __webpack_require__("ZhBD");
        if (false) {}
        return mod;
      }
    ]);
  

/***/ }),

/***/ "ZhBD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./pages/publish/index.module.scss
var index_module = __webpack_require__("9hU8");
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);

// EXTERNAL MODULE: ./components/textarea/index.module.scss
var textarea_index_module = __webpack_require__("bwJ5");
var textarea_index_module_default = /*#__PURE__*/__webpack_require__.n(textarea_index_module);

// CONCATENATED MODULE: ./components/textarea/index.tsx
var _jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\components\\textarea\\index.tsx";
var __jsx = react_default.a.createElement;


const maxHeight = 120;

const TextAreaComponent = ({
  maxSize,
  placeholder,
  onChange,
  value
}) => {
  const {
    0: autoContentHeight,
    1: setAutoContentHeight
  } = Object(react["useState"])(40);
  const textareaContainerElement = Object(react["useRef"])();
  const {
    0: showTextSize,
    1: setShowTextSize
  } = Object(react["useState"])(0);
  const {
    0: inputValue,
    1: setInputValue
  } = Object(react["useState"])('');
  Object(react["useEffect"])(() => {
    setInputValue(value);
    setShowTextSize(value.length);
    setTimeout(() => {
      const scrollHeight = textareaContainerElement.current.scrollHeight;
      setAutoContentHeight(scrollHeight);
    }, 0);

    if (typeof onChange === 'function') {
      onChange({
        detail: value
      });
    }
  }, [value]);

  const handelValueChange = event => {
    const {
      target
    } = event;
    let {
      value
    } = target;
    let len = value.length;

    if (len >= maxSize) {
      len = maxSize;
      value = value.substring(0, maxSize);
    }

    setInputValue(value);
    setShowTextSize(len);
    const scrollHeight = textareaContainerElement.current.scrollHeight;
    setAutoContentHeight(scrollHeight);

    if (typeof onChange === 'function') {
      onChange({
        detail: value
      });
    }
  };

  return __jsx("div", {
    className: textarea_index_module_default.a['textarea-component-container'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, __jsx("textarea", {
    ref: textareaContainerElement,
    placeholder: placeholder,
    className: textarea_index_module_default.a['input-content'],
    onChange: handelValueChange,
    style: {
      height: autoContentHeight
    },
    value: inputValue,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: textarea_index_module_default.a['limit'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, showTextSize, "/", maxSize));
};

/* harmony default export */ var components_textarea = (TextAreaComponent);
// EXTERNAL MODULE: ./components/category-picker/index.scss
var category_picker = __webpack_require__("QgXT");

// EXTERNAL MODULE: ./node_modules/antd-mobile/es/index.js + 186 modules
var es = __webpack_require__("9ibs");

// EXTERNAL MODULE: ./components/base-modal/index.scss
var base_modal = __webpack_require__("JnZz");

// CONCATENATED MODULE: ./components/base-modal/index.tsx
var base_modal_jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\components\\base-modal\\index.tsx";
var base_modal_jsx = react_default.a.createElement;



const BaseModal = ({
  show,
  onClose,
  children
}) => {
  const {
    0: hidden,
    1: setHidden
  } = Object(react["useState"])(true);
  Object(react["useEffect"])(() => {
    setTimeout(() => {
      setHidden(false);
    }, 20);
  }, []);

  const handleClickModalOverlay = () => {
    setHidden(true);
  };

  Object(react["useEffect"])(() => {
    if (show === false) {
      setHidden(true);
    }
  }, [show]);

  const handleCloseModal = () => {
    if (typeof onClose === 'function' && hidden === true) {
      onClose();
    }
  };

  return base_modal_jsx("div", {
    className: "base-modal-container",
    __self: undefined,
    __source: {
      fileName: base_modal_jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, base_modal_jsx("div", {
    className: `base-modal-overlay ${hidden ? 'hidden' : 'show'}`,
    onClick: handleClickModalOverlay,
    __self: undefined,
    __source: {
      fileName: base_modal_jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }), base_modal_jsx("div", {
    className: `base-modal-content ${hidden ? 'hidden' : 'show'}`,
    onAnimationEnd: handleCloseModal,
    __self: undefined,
    __source: {
      fileName: base_modal_jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, children));
};

/* harmony default export */ var components_base_modal = (BaseModal);
// CONCATENATED MODULE: ./components/category-picker/index.tsx
var category_picker_jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\components\\category-picker\\index.tsx";
var category_picker_jsx = react_default.a.createElement;





const CategoryPicker = ({
  onClose,
  onConfirm,
  value,
  list
}) => {
  const {
    0: show,
    1: setShow
  } = Object(react["useState"])(true);
  const currentValue = Object(react["useRef"])(value);
  const {
    0: _value,
    1: setValue
  } = Object(react["useState"])([value]);

  const onCancel = () => {
    setShow(false);
  };

  const handleConfirm = () => {
    if (typeof onConfirm === 'function') {
      onConfirm({
        detail: currentValue.current
      });
    }

    setShow(false);
  };

  const handleKmChange = value => {
    currentValue.current = value[0];
  };

  return category_picker_jsx(components_base_modal, {
    show: show,
    onClose: onClose,
    __self: undefined,
    __source: {
      fileName: category_picker_jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, category_picker_jsx("div", {
    className: "category-picker-component",
    __self: undefined,
    __source: {
      fileName: category_picker_jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, category_picker_jsx("div", {
    className: "title",
    __self: undefined,
    __source: {
      fileName: category_picker_jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, "Pilih kategori"), category_picker_jsx("div", {
    className: "picker-container",
    __self: undefined,
    __source: {
      fileName: category_picker_jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, category_picker_jsx(es["c" /* PickerView */], {
    cascade: false,
    value: _value,
    data: list,
    onChange: handleKmChange,
    __self: undefined,
    __source: {
      fileName: category_picker_jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  })), category_picker_jsx("div", {
    className: "button-wrapper",
    __self: undefined,
    __source: {
      fileName: category_picker_jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, category_picker_jsx("div", {
    className: "button",
    onClick: onCancel,
    __self: undefined,
    __source: {
      fileName: category_picker_jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, "Batal"), category_picker_jsx("div", {
    className: "button button-confirm",
    onClick: handleConfirm,
    __self: undefined,
    __source: {
      fileName: category_picker_jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, "Simpan"))));
};

/* harmony default export */ var components_category_picker = (CategoryPicker);
// EXTERNAL MODULE: ./components/publish-image-picker/index.module.scss
var publish_image_picker_index_module = __webpack_require__("c9k0");
var publish_image_picker_index_module_default = /*#__PURE__*/__webpack_require__.n(publish_image_picker_index_module);

// CONCATENATED MODULE: ./components/publish-image-picker/index.tsx
var publish_image_picker_jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\components\\publish-image-picker\\index.tsx";
var publish_image_picker_jsx = react_default.a.createElement;




const PublishImagePicker = ({
  onChange,
  onClickImgItem,
  imageList
}) => {
  const {
    0: isApp,
    1: setIsApp
  } = Object(react["useState"])(true);
  const {
    0: photoList,
    1: setPhotoList
  } = Object(react["useState"])([]);
  Object(react["useEffect"])(() => {
    const isApp = !!window.ReactNativeWebView;
    setIsApp(isApp);

    window.setPhotoList = photoList => {
      photoList = photoList.map(item => {
        return {
          uri: item.uri,
          url: item.url,
          filename: item.filename,
          headUrl: item.headUrl,
          type: item.type === 'photo' ? 1 : 2,
          active: false,
          width: item.width,
          height: item.height
        };
      });
      setPhotoList(photoList);

      if (typeof onChange === 'function') {
        onChange(photoList.map(item => item));
      }
    };
  }, []);
  Object(react["useEffect"])(() => {
    setPhotoList(imageList);
  }, [imageList]);

  const changeImgList = (files, type, index) => {
    if (typeof onChange === 'function') {
      onChange(files);
    }
  };

  const onHandelClickImg = (index, fileList) => {
    if (typeof onClickImgItem == 'function') {
      onClickImgItem(fileList[index], index);
    }
  };

  const handleAppClickImage = index => {
    return () => {
      const targetItem = photoList[index];

      if (typeof onClickImgItem == 'function') {
        onClickImgItem({
          uri: targetItem.uri,
          url: targetItem.url,
          headUrl: targetItem.headUrl,
          type: targetItem.type,
          active: true
        }, index);
      }
    };
  };

  const handleRemovePhoto = index => {
    return event => {
      event.stopPropagation();
      setPhotoList(p => {
        const newP = p.filter((_, i) => index !== i);

        if (typeof onChange === 'function') {
          onChange(newP.map(item => {
            return {
              uri: item.uri,
              url: item.url,
              filename: item.filename,
              type: item.type,
              active: false,
              width: item.width,
              height: item.height
            };
          }));
        }

        return newP;
      });
    };
  };

  const renderPhotoList = () => {
    return photoList.map((item, index) => {
      return publish_image_picker_jsx("li", {
        key: item.uri,
        className: publish_image_picker_index_module_default.a['image-list-item'],
        onClick: handleAppClickImage(index),
        __self: undefined,
        __source: {
          fileName: publish_image_picker_jsxFileName,
          lineNumber: 119,
          columnNumber: 9
        }
      }, publish_image_picker_jsx("section", {
        className: publish_image_picker_index_module_default.a['image-list-item-remove-button'],
        onClick: handleRemovePhoto(index),
        __self: undefined,
        __source: {
          fileName: publish_image_picker_jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }
      }, publish_image_picker_jsx("span", {
        className: "icon-font uniE907",
        __self: undefined,
        __source: {
          fileName: publish_image_picker_jsxFileName,
          lineNumber: 128,
          columnNumber: 13
        }
      })), item.type !== 1 ? publish_image_picker_jsx("span", {
        className: `${publish_image_picker_index_module_default.a['image-list-item-play-button']} icon-font uniE909`,
        __self: undefined,
        __source: {
          fileName: publish_image_picker_jsxFileName,
          lineNumber: 131,
          columnNumber: 13
        }
      }) : null, item.type !== 1 ? publish_image_picker_jsx("video", {
        __self: undefined,
        __source: {
          fileName: publish_image_picker_jsxFileName,
          lineNumber: 136,
          columnNumber: 13
        }
      }, publish_image_picker_jsx("source", {
        src: item.headUrl,
        type: "video/mp4",
        __self: undefined,
        __source: {
          fileName: publish_image_picker_jsxFileName,
          lineNumber: 137,
          columnNumber: 15
        }
      })) : publish_image_picker_jsx("img", {
        src: item.url,
        alt: `thread-photo-${index}`,
        __self: undefined,
        __source: {
          fileName: publish_image_picker_jsxFileName,
          lineNumber: 140,
          columnNumber: 13
        }
      }));
    });
  };

  const handleOpenAlbum = () => {
    if (isApp) {
      window.ReactNativeWebView.postMessage(JSON.stringify({
        action: 'openAlbum',
        data: {
          photoList
        }
      }));
    }
  };

  return publish_image_picker_jsx("div", {
    className: publish_image_picker_index_module_default.a['image-picker-container'],
    __self: undefined,
    __source: {
      fileName: publish_image_picker_jsxFileName,
      lineNumber: 156,
      columnNumber: 5
    }
  }, publish_image_picker_jsx("ul", {
    className: publish_image_picker_index_module_default.a['image-list-container'],
    __self: undefined,
    __source: {
      fileName: publish_image_picker_jsxFileName,
      lineNumber: 157,
      columnNumber: 7
    }
  }, isApp ? publish_image_picker_jsx(react_default.a.Fragment, null, renderPhotoList(), photoList.length < 9 ? publish_image_picker_jsx("li", {
    className: publish_image_picker_index_module_default.a['image-upload-item'],
    onClick: handleOpenAlbum,
    __self: undefined,
    __source: {
      fileName: publish_image_picker_jsxFileName,
      lineNumber: 162,
      columnNumber: 15
    }
  }, publish_image_picker_jsx("span", {
    className: "icon-font uniE905",
    __self: undefined,
    __source: {
      fileName: publish_image_picker_jsxFileName,
      lineNumber: 166,
      columnNumber: 17
    }
  }), publish_image_picker_jsx("span", {
    className: publish_image_picker_index_module_default.a['image-upload'],
    __self: undefined,
    __source: {
      fileName: publish_image_picker_jsxFileName,
      lineNumber: 167,
      columnNumber: 17
    }
  }, "Upload")) : null) : publish_image_picker_jsx(es["a" /* ImagePicker */], {
    length: "3",
    files: photoList,
    onChange: changeImgList,
    onImageClick: onHandelClickImg,
    selectable: photoList.length < 9,
    accept: "image/*,video/*",
    multiple: true,
    __self: undefined,
    __source: {
      fileName: publish_image_picker_jsxFileName,
      lineNumber: 172,
      columnNumber: 11
    }
  })));
};

/* harmony default export */ var publish_image_picker = (PublishImagePicker);
// EXTERNAL MODULE: ./node_modules/next/dist/client/router.js
var client_router = __webpack_require__("nOHt");

// EXTERNAL MODULE: ./components/image-view-modal/index.tsx + 1 modules
var image_view_modal = __webpack_require__("X3br");

// EXTERNAL MODULE: ./http/HttpClient.ts
var HttpClient = __webpack_require__("hueg");

// CONCATENATED MODULE: ./services/publish.ts

class publish_PublishService {
  getForumCategorys() {
    try {
      return Promise.resolve(HttpClient["a" /* default */].get('/web/userarticle/getForumCategorys.json').then(resp => Promise.resolve(resp.data)).then(resp => {
        const result = [];

        if (resp) {
          resp.map(item => {
            result.push({
              value: item.id,
              label: item.showName,
              originalName: item.originalName
            });
          });
        }

        return Promise.resolve(result);
      }));
    } catch (e) {
      return Promise.reject(e);
    }
  }

  submit(model) {
    try {
      const newModel = {
        content: model.content,
        systemCategoryId: model.systemCategoryId,
        urls: model.urls,
        type: model.type
      };
      return Promise.resolve(HttpClient["a" /* default */].post('/web/userarticle/insertArticles.json', newModel));
    } catch (e) {
      return Promise.reject(e);
    }
  }

}
// EXTERNAL MODULE: ./hooks/messageBoxHooks.ts
var messageBoxHooks = __webpack_require__("ODBD");

// EXTERNAL MODULE: ./node_modules/mobx-react/dist/mobxreact.esm.js
var mobxreact_esm = __webpack_require__("TyAF");

// EXTERNAL MODULE: ./node_modules/mobx-react-lite/dist/mobxreactlite.esm.js
var mobxreactlite_esm = __webpack_require__("riab");

// EXTERNAL MODULE: ./util/index.ts
var util = __webpack_require__("Jv45");

// CONCATENATED MODULE: ./pages/publish/index.tsx
var publish_jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\pages\\publish\\index.tsx";
var publish_jsx = react_default.a.createElement;












const PublishPage = () => {
  const {
    0: showCategoryPicker,
    1: setShowCategoryPicker
  } = Object(react["useState"])(false);
  const {
    0: categoryId,
    1: setCategoryId
  } = Object(react["useState"])();
  const {
    0: categoryList,
    1: setCategoryList
  } = Object(react["useState"])([]);
  const {
    0: textValue,
    1: setTextValue
  } = Object(react["useState"])('');
  const {
    0: categoryStr,
    1: setCategoryStr
  } = Object(react["useState"])('');
  const {
    0: imageList,
    1: setImageList
  } = Object(react["useState"])([]);
  const {
    0: showImageModal,
    1: setShowImageModal
  } = Object(react["useState"])(false);
  const router = Object(client_router["useRouter"])();
  const service = new publish_PublishService();
  const showMessageBox = Object(messageBoxHooks["a" /* default */])();
  const {
    0: isApp,
    1: setIsApp
  } = Object(react["useState"])(true);
  const {
    store
  } = Object(react["useContext"])(mobxreact_esm["a" /* MobXProviderContext */]);
  const {
    user
  } = Object(mobxreactlite_esm["d" /* useObserver */])(() => ({
    user: store.user
  }));
  const defaultSystemCategoryId = Object(react["useRef"])();
  const systemCategoryListRef = Object(react["useRef"])([]);
  Object(react["useEffect"])(() => {
    const isApp = !!window.ReactNativeWebView;
    setIsApp(isApp);

    if (isApp) {
      window.showMessageBoxCallBack = (type, title, message) => {
        showMessageBox(type, title, message);
      };
    }

    service.getForumCategorys().then(dataList => {
      setCategoryList(dataList);
      systemCategoryListRef.current = dataList;

      if (defaultSystemCategoryId.current) {
        handelCatoryId(defaultSystemCategoryId.current);
      } else {
        const args = Object(util["a" /* getUrlParameters */])('systemCategoryId');

        if (args) {
          handelCatoryId(+args);
        }
      }
    });
  }, []);
  Object(react["useEffect"])(() => {
    if (!!user && user.userId > -1) {
      const threadModel = localStorage.getItem('postThreads' + user.userId);

      if (threadModel) {
        localStorage.removeItem('postThreads' + user.userId);
        const model = JSON.parse(threadModel);
        setTextValue(model.content);
        setImageList(model.photoList);
        defaultSystemCategoryId.current = model.systemCategoryId;
        handelCatoryId(defaultSystemCategoryId.current);
      }
    }
  }, [user]);

  const handelCatoryId = categoryId => {
    const category = systemCategoryListRef.current.find(item => {
      if (item.value === categoryId) {
        return item;
      }
    });

    if (category) {
      setCategoryStr(category.label);
      setCategoryId(category.value);
    }
  };

  const handleClosePicker = () => {
    setShowCategoryPicker(false);
  };

  const handelSelCategory = () => {
    setShowCategoryPicker(true);
  };

  const handlePickCategory = ({
    detail
  }) => {
    if (!!detail) {
      setCategoryId(detail);
      let findItem = categoryList.find(item => {
        if (detail === item.value) {
          return item;
        }
      });
      setCategoryStr(findItem.label);
    } else {
      setCategoryId(categoryList[0].value);
      setCategoryStr(categoryList[0].label);
    }
  };

  const handelInputValue = event => {
    const value = event.detail;
    setTextValue(value);
  };

  const canSubmit = () => {
    if (!textValue) {
      return false;
    }

    if (!categoryStr || categoryStr === 'Pilih Kategori') {
      return false;
    }

    return true;
  };

  const handleImageListChange = imageList => {
    setImageList(imageList);
  };

  const backToIndex = () => {
    if (textValue && !!user && user.userId > -1) {
      const model = {
        content: textValue,
        systemCategoryId: categoryId,
        photoList: imageList,
        userId: user.userId
      };
      localStorage.setItem('postThreads' + user.userId, JSON.stringify(model));
    }

    if (isApp) {
      window.ReactNativeWebView.postMessage(JSON.stringify({
        action: 'goBack'
      }));
    } else {
      router.push('/');
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

  const publishSubmit = () => {
    if (!canSubmit()) {
      return;
    }

    if (isApp) {
      window.ReactNativeWebView.postMessage(JSON.stringify({
        action: 'postThreads',
        data: {
          content: textValue,
          systemCategoryId: categoryId,
          photoList: imageList,
          userId: user.userId
        }
      }));
    }
  };

  return publish_jsx(react_default.a.Fragment, null, publish_jsx("div", {
    className: index_module_default.a['publish-cointainer'],
    __self: undefined,
    __source: {
      fileName: publish_jsxFileName,
      lineNumber: 206,
      columnNumber: 7
    }
  }, publish_jsx("div", {
    className: index_module_default.a['publish-handle-header'],
    __self: undefined,
    __source: {
      fileName: publish_jsxFileName,
      lineNumber: 207,
      columnNumber: 9
    }
  }, publish_jsx("div", {
    onClick: backToIndex,
    __self: undefined,
    __source: {
      fileName: publish_jsxFileName,
      lineNumber: 208,
      columnNumber: 11
    }
  }, publish_jsx("span", {
    className: `icon-font uniE907 ${index_module_default.a['icon-close']}`,
    __self: undefined,
    __source: {
      fileName: publish_jsxFileName,
      lineNumber: 209,
      columnNumber: 13
    }
  })), publish_jsx("div", {
    className: `${index_module_default.a['text']} ${canSubmit() ? '' : index_module_default.a['disabled']}`,
    onClick: publishSubmit,
    __self: undefined,
    __source: {
      fileName: publish_jsxFileName,
      lineNumber: 213,
      columnNumber: 11
    }
  }, "Kirim")), publish_jsx("div", {
    className: index_module_default.a['publish-input-container'],
    __self: undefined,
    __source: {
      fileName: publish_jsxFileName,
      lineNumber: 222,
      columnNumber: 9
    }
  }, publish_jsx(components_textarea, {
    maxSize: 2000,
    placeholder: "Isi komentarmu disini...",
    onChange: handelInputValue,
    value: textValue,
    __self: undefined,
    __source: {
      fileName: publish_jsxFileName,
      lineNumber: 223,
      columnNumber: 11
    }
  }), publish_jsx(publish_image_picker, {
    imageList: imageList,
    onChange: handleImageListChange,
    onClickImgItem: handleShowImageModal,
    __self: undefined,
    __source: {
      fileName: publish_jsxFileName,
      lineNumber: 229,
      columnNumber: 11
    }
  })), publish_jsx("div", {
    className: index_module_default.a['publish-sel-container'],
    __self: undefined,
    __source: {
      fileName: publish_jsxFileName,
      lineNumber: 235,
      columnNumber: 9
    }
  }, publish_jsx("ul", {
    __self: undefined,
    __source: {
      fileName: publish_jsxFileName,
      lineNumber: 236,
      columnNumber: 11
    }
  }, publish_jsx("li", {
    className: index_module_default.a['list-item'],
    onClick: handelSelCategory,
    __self: undefined,
    __source: {
      fileName: publish_jsxFileName,
      lineNumber: 237,
      columnNumber: 13
    }
  }, publish_jsx("span", {
    className: categoryStr ? index_module_default.a['category-selected'] : '',
    __self: undefined,
    __source: {
      fileName: publish_jsxFileName,
      lineNumber: 238,
      columnNumber: 15
    }
  }, publish_jsx("span", {
    className: `${index_module_default.a['iconfonts']} icon-font uniE903`,
    __self: undefined,
    __source: {
      fileName: publish_jsxFileName,
      lineNumber: 239,
      columnNumber: 17
    }
  }), categoryStr ? categoryStr : 'Pilih Kategori'), publish_jsx("span", {
    className: `${index_module_default.a['arrow']} icon-font uniE906`,
    __self: undefined,
    __source: {
      fileName: publish_jsxFileName,
      lineNumber: 244,
      columnNumber: 15
    }
  })))), showCategoryPicker ? publish_jsx(components_category_picker, {
    list: categoryList,
    value: categoryId,
    onClose: handleClosePicker,
    onConfirm: handlePickCategory,
    __self: undefined,
    __source: {
      fileName: publish_jsxFileName,
      lineNumber: 253,
      columnNumber: 11
    }
  }) : null, showImageModal ? publish_jsx(image_view_modal["a" /* default */], {
    imageList: imageList,
    onClose: handleCloseImageModal,
    __self: undefined,
    __source: {
      fileName: publish_jsxFileName,
      lineNumber: 262,
      columnNumber: 11
    }
  }) : null));
};

/* harmony default export */ var publish = __webpack_exports__["default"] = (PublishPage);

/***/ })

},[["Qbs0",0,1,5,10,3,4,7,9,12,2]]]);