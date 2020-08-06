(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "ZUFl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return /* binding */ __N_SSP; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

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
var __jsx = react_default.a.createElement;




const CommentInput = ({
  inputText,
  isFocused,
  placeHolder,
  onSubmit
}) => {
  const defaultInputHeight = 35;
  const textareaContainerElement = Object(react["useRef"])();
  const commentPlaceHolderText = Object(react["useRef"])(placeHolder);
  const {
    0: isFocus,
    1: setIsFocus
  } = Object(react["useState"])(isFocused);
  const {
    0: autoContentHeight,
    1: setAutoContentHeight
  } = Object(react["useState"])(defaultInputHeight);
  const {
    0: inputValue,
    1: setInputValue
  } = Object(react["useState"])(inputText);

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

// EXTERNAL MODULE: ./node_modules/mobx-react/dist/mobxreact.esm.js
var mobxreact_esm = __webpack_require__("TyAF");

// EXTERNAL MODULE: ./node_modules/mobx-react-lite/dist/mobxreactlite.esm.js
var mobxreactlite_esm = __webpack_require__("riab");

// EXTERNAL MODULE: ./hooks/messageBoxHooks.ts
var messageBoxHooks = __webpack_require__("ODBD");

// EXTERNAL MODULE: ./components/scroll-container/index.tsx + 1 modules
var scroll_container = __webpack_require__("wjFm");

// EXTERNAL MODULE: ./subject/dom.ts
var dom = __webpack_require__("f1Q/");

// CONCATENATED MODULE: ./pages/comment/index.tsx
var comment_jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\pages\\comment\\index.tsx";
var comment_jsx = react_default.a.createElement;











const CommentPage = ({
  articleId
}) => {
  const showMessageBox = Object(messageBoxHooks["a" /* default */])();
  const {
    0: commentList,
    1: setCommentList
  } = Object(react["useState"])(Array.from({
    length: 10
  }));
  const commentListRef = Object(react["useRef"])(commentList);
  const pageSize = 10;
  const pageNum = Object(react["useRef"])(1);
  const {
    0: isFocus,
    1: setIsFocus
  } = Object(react["useState"])(false);
  const {
    0: commentPlaceHolderText,
    1: setCommentPlaceHolder
  } = Object(react["useState"])("Isi Thread ...");
  const service = new detail["a" /* default */]();
  const isCommentSubmit = Object(react["useRef"])(false);
  const {
    0: inputValue,
    1: setInputValue
  } = Object(react["useState"])('');
  const beReplyData = Object(react["useRef"])();
  const {
    0: isReply,
    1: setIsReply
  } = Object(react["useState"])(false);
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
  const {
    0: canPullUp,
    1: setCanPullUp
  } = Object(react["useState"])(false);
  Object(react["useEffect"])(() => {
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

var __N_SSP = true;
/* harmony default export */ var pages_comment = __webpack_exports__["default"] = (CommentPage);

/***/ }),

/***/ "r+bQ":
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/comment",
      function () {
        var mod = __webpack_require__("ZUFl");
        if (false) {}
        return mod;
      }
    ]);
  

/***/ }),

/***/ "vcgd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentInputSubject; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("K9Ia");

const CommentInputSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__[/* Subject */ "a"]();


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

},[["r+bQ",0,1,5,8,3,7,6,11,2]]]);