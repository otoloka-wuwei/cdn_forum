(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

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

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("ho59");
module.exports = __webpack_require__("nOHt");


/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


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

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _utils = __webpack_require__("g/15");

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

/***/ "EDzm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";



if (true) {
  module.exports = __webpack_require__("aRWG")
} else {}


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

/***/ "H0JD":
/***/ (function(module, exports, __webpack_require__) {

const ReactDOM = __webpack_require__("i8i4")
__webpack_require__("EDzm").observerBatching(ReactDOM.unstable_batchedUpdates)


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

/***/ "aRWG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports,"__esModule",{value:!0});var e,r=__webpack_require__("2vnA"),n=__webpack_require__("q1tI"),t=(e=n)&&"object"==typeof e&&"default"in e?e.default:e;if(!n.useState)throw new Error("mobx-react-lite requires React with Hooks support");if(!r.spy)throw new Error("mobx-react-lite requires mobx at least version 4 to be available");var o=!1;function u(){return o}function i(){return(i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function c(){var e=n.useState(0)[1];return n.useCallback((function(){e((function(e){return e+1}))}),[])}function a(e){return"function"==typeof Symbol?Symbol.for(e):"__$mobx-react "+e+"__"}var f={};function s(){return"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:f}var p=a("observerBatching");function l(e){return r.getDependencyTree(e)}var d,v=new Set;function b(){void 0===d&&(d=setTimeout(y,1e4))}function y(){d=void 0;var e=Date.now(),r=v,n=Array.isArray(r),t=0;for(r=n?r:r[Symbol.iterator]();;){var o;if(n){if(t>=r.length)break;o=r[t++]}else{if((t=r.next()).done)break;o=t.value}var u=o,i=u.current;i&&e>=i.cleanAt&&(i.reaction.dispose(),u.current=null,v.delete(u))}v.size>0&&b()}var h={};function w(e){return"observer"+e}function m(e,n,o){if(void 0===n&&(n="observed"),void 0===o&&(o=h),u())return e();var i=(o.useForceUpdate||c)(),a=t.useRef(null);if(!a.current){var f=new r.Reaction(w(n),(function(){s.mounted?i():(f.dispose(),a.current=null)})),s=function(e){return{cleanAt:Date.now()+1e4,reaction:e}}(f);a.current=s,v.add(a),b()}var p,d,y=a.current.reaction;if(t.useDebugValue(y,l),t.useEffect((function(){return v.delete(a),a.current?a.current.mounted=!0:(a.current={reaction:new r.Reaction(w(n),(function(){i()})),cleanAt:Infinity},i()),function(){a.current.reaction.dispose(),a.current=null}}),[]),y.track((function(){try{p=e()}catch(e){d=e}})),d)throw d;return p}var O={$$typeof:!0,render:!0,compare:!0,type:!0};function g(e){var r=e.children||e.render;return"function"!=typeof r?null:m(r)}function x(e,r,n,t,o){var u="function"==typeof e[r],i="function"==typeof e["children"===r?"render":"children"];return u&&i?new Error("MobX Observer: Do not use children and render in the same time in`"+n):u||i?null:new Error("Invalid prop `"+o+"` of type `"+typeof e[r]+"` supplied to `"+n+"`, expected `function`.")}function S(e,n){if(!n||void 0!==e){var o=t.useState((function(){return r.observable(e,{},{deep:!1})}))[0];return r.runInAction((function(){Object.assign(o,e)})),o}}g.propTypes={children:x,render:x},g.displayName="Observer",exports.Observer=g,exports.isObserverBatched=function(){return s()[p]},exports.isUsingStaticRendering=u,exports.observer=function(e,r){if(u())return e;var t,o,c,a=i({forwardRef:!1},r),f=e.displayName||e.name,s=function(r,n){return m((function(){return e(r,n)}),f)};return s.displayName=f,t=n.memo(a.forwardRef?n.forwardRef(s):s),o=e,c=t,Object.keys(o).forEach((function(e){O[e]||Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(o,e))})),t.displayName=f,t},exports.observerBatching=function(e){"function"==typeof e&&r.configure({reactionScheduler:e}),s()[p]=!0},exports.observerBatchingOptOut=function(){r.configure({reactionScheduler:void 0}),s()[p]=!0},exports.useAsObservableSource=function(e){return S(e,!1)},exports.useForceUpdate=c,exports.useLocalStore=function(e,n){var o=S(n,!0);return t.useState((function(){var n=r.observable(e(o));return function(e){if(!e||"object"!=typeof e)return!1;var r=Object.getPrototypeOf(e);return!r||r===Object.prototype}(n)&&r.runInAction((function(){Object.keys(n).forEach((function(e){var t,o,u=n[e];"function"==typeof u&&(n[e]=(t=u,o=n,function(){for(var e=arguments.length,n=new Array(e),u=0;u<e;u++)n[u]=arguments[u];return r.transaction((function(){return t.apply(o,n)}))}))}))})),n}))[0]},exports.useObserver=m,exports.useStaticRendering=function(e){o=e};
//# sourceMappingURL=mobxreactlite.cjs.production.min.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("yLpj")))

/***/ }),

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./app.module.scss
var app_module = __webpack_require__("bmtP");
var app_module_default = /*#__PURE__*/__webpack_require__.n(app_module);

// EXTERNAL MODULE: ./index.scss
var index = __webpack_require__("8fAO");

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js
function _initializerDefineProperty(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object.keys(descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object.defineProperty(target, property, desc);
    desc = null;
  }

  return desc;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/initializerWarningHelper.js
function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.');
}
// EXTERNAL MODULE: ./node_modules/mobx/lib/mobx.module.js
var mobx_module = __webpack_require__("2vnA");

// EXTERNAL MODULE: ./node_modules/mobx-react-lite/dist/mobxreactlite.esm.js
var mobxreactlite_esm = __webpack_require__("riab");

// EXTERNAL MODULE: ./http/HttpClient.ts
var HttpClient = __webpack_require__("hueg");

// CONCATENATED MODULE: ./store/index.ts




var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp;




const isServer = false;
Object(mobxreactlite_esm["e" /* useStaticRendering */])(isServer);
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

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "user", [mobx_module["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "messageBoxType", [mobx_module["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'success';
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "messageBoxTitle", [mobx_module["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return '';
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "messageBoxMessage", [mobx_module["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return '';
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "isMessageBoxShow", [mobx_module["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "toastBoxType", [mobx_module["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "toastBoxMessage", [mobx_module["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return '';
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "isToastBoxShow", [mobx_module["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _applyDecoratedDescriptor(_class.prototype, "showLoginModal", [mobx_module["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "showLoginModal"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getUserInfo", [mobx_module["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "getUserInfo"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "showMessageBox", [mobx_module["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "showMessageBox"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "hideMessageBox", [mobx_module["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "hideMessageBox"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "showToastBox", [mobx_module["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "showToastBox"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "hideToastBox", [mobx_module["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "hideToastBox"), _class.prototype)), _class);
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
// EXTERNAL MODULE: ./node_modules/mobx-react/dist/mobxreact.esm.js
var mobxreact_esm = __webpack_require__("TyAF");

// EXTERNAL MODULE: ./node_modules/mobx-react-lite/batchingForReactDom.js
var batchingForReactDom = __webpack_require__("H0JD");

// EXTERNAL MODULE: ./node_modules/next/dist/next-server/lib/head.js
var head = __webpack_require__("8Kt/");
var head_default = /*#__PURE__*/__webpack_require__.n(head);

// EXTERNAL MODULE: ./components/message-box/index.scss
var message_box = __webpack_require__("fTJe");

// CONCATENATED MODULE: ./components/message-box/index.tsx
var _jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\components\\message-box\\index.tsx";
var __jsx = react_default.a.createElement;




const MessageBox = ({
  type,
  title,
  message
}) => {
  const {
    store
  } = Object(react["useContext"])(mobxreact_esm["a" /* MobXProviderContext */]);
  const {
    0: hidden,
    1: setHidden
  } = Object(react["useState"])(true);
  Object(react["useEffect"])(() => {
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
// EXTERNAL MODULE: ./node_modules/rxjs/_esm5/internal/Subject.js + 19 modules
var Subject = __webpack_require__("K9Ia");

// CONCATENATED MODULE: ./subject/visibility.ts

const VisibilityChangeSubject = new Subject["a" /* Subject */]();

// EXTERNAL MODULE: ./components/toast-box/index.scss
var toast_box = __webpack_require__("4von");

// CONCATENATED MODULE: ./components/toast-box/index.tsx
var toast_box_jsxFileName = "D:\\otoProject\\workspace\\otoloka-mobile-forum\\components\\toast-box\\index.tsx";
var toast_box_jsx = react_default.a.createElement;




const ToastBox = ({
  type,
  message
}) => {
  const {
    store
  } = Object(react["useContext"])(mobxreact_esm["a" /* MobXProviderContext */]);
  const {
    0: hidden,
    1: setHidden
  } = Object(react["useState"])(true);
  const {
    0: typeStr,
    1: setTypeStr
  } = Object(react["useState"])('');
  Object(react["useEffect"])(() => {
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

var _app_jsx = react_default.a.createElement;













let _app_CustomApp = Object(mobxreact_esm["c" /* observer */])(_app_class = (_app_temp = class CustomApp extends app_default.a {
  constructor(props) {
    super(props);
    this.state = {
      store: new store_0()
    };
    this.hidden = '';
    this.visibilityChange = '';
  }

  componentDidMount() {
    if (true) {
      const isApp = !!window.ReactNativeWebView;

      if (isApp) {
        window.getUserInfo = () => {
          this.state.store.getUserInfo();
        };

        Object(bridge["a" /* default */])({
          action: 'getToken'
        }).then(token => {
          localStorage.setItem('token', token);
          this.state.store.getUserInfo();
        });
      } else {
        this.state.store.getUserInfo();
      }

      if (typeof document.hidden !== 'undefined') {
        this.hidden = 'hidden';
        this.visibilityChange = 'visibilitychange';
      } else if (typeof document.msHidden !== 'undefined') {
        this.hidden = 'msHidden';
        this.visibilityChange = 'msvisibilitychange';
      } else if (typeof document.webkitHidden !== 'undefined') {
        this.hidden = 'webkitHidden';
        this.visibilityChange = 'webkitvisibilitychange';
      }

      if (typeof document.addEventListener === 'undefined' || typeof document[this.hidden] === 'undefined') {
        console.warn('This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.');
      } else {
        document.addEventListener(this.visibilityChange, this.handleVisibilityChange.bind(this), false);
      }
    }
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
    return _app_jsx(react_default.a.Fragment, null, _app_jsx(head_default.a, {
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
    })), _app_jsx(mobxreact_esm["b" /* Provider */], {
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
    }, _app_jsx(Component, Object(esm_extends["a" /* default */])({}, pageProps, {
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

/***/ "ho59":
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        var mod = __webpack_require__("cha2");
        if (false) {}
        return mod;
      }
    ]);
  

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

/***/ })

},[[1,0,1,5,13,3,4,6,2]]]);