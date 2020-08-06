(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "+8km":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactComponentWithPureRenderMixin
 */
var shallowEqual = __webpack_require__("Gytx");

function shallowCompare(instance, nextProps, nextState) {
  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
}
/**
 * If your React component's render function is "pure", e.g. it will render the
 * same result given the same props and state, provide this mixin for a
 * considerable performance boost.
 *
 * Most React components have pure render functions.
 *
 * Example:
 *
 *   var ReactComponentWithPureRenderMixin =
 *     require('ReactComponentWithPureRenderMixin');
 *   React.createClass({
 *     mixins: [ReactComponentWithPureRenderMixin],
 *
 *     render: function() {
 *       return <div className={this.props.className}>foo</div>;
 *     }
 *   });
 *
 * Note: This only checks shallow equality for props and state. If these contain
 * complex data structures this mixin may have false-negatives for deeper
 * differences. Only mixin to components which have simple props and state, or
 * use `forceUpdate()` when you know deep data structures have changed.
 *
 * See https://facebook.github.io/react/docs/pure-render-mixin.html
 */


var ReactComponentWithPureRenderMixin = {
  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
};
module.exports = ReactComponentWithPureRenderMixin;

/***/ }),

/***/ "+JPL":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("+SFK"), __esModule: true };

/***/ }),

/***/ "+SFK":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("AUvm");
__webpack_require__("wgeU");
__webpack_require__("adOz");
__webpack_require__("dl0q");
module.exports = __webpack_require__("WEpk").Symbol;


/***/ }),

/***/ "+oAO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__("q1tI"));

var _classnames = _interopRequireDefault(__webpack_require__("TSYQ"));

var _PickerMixin = _interopRequireDefault(__webpack_require__("Mv4v"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

;

var Picker =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Picker, _React$Component);

  function Picker(props) {
    var _this;

    _classCallCheck(this, Picker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Picker).call(this, props));

    _this.scrollHanders = function () {
      var scrollY = -1;
      var lastY = 0;
      var startY = 0;
      var scrollDisabled = false;
      var isMoving = false;

      var setTransform = function setTransform(nodeStyle, value) {
        nodeStyle.transform = value;
        nodeStyle.webkitTransform = value;
      };

      var setTransition = function setTransition(nodeStyle, value) {
        nodeStyle.transition = value;
        nodeStyle.webkitTransition = value;
      };

      var scrollTo = function scrollTo(_x, y) {
        var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : .3;

        if (scrollY !== y) {
          scrollY = y;

          if (time && !_this.props.noAnimate) {
            setTransition(_this.contentRef.style, "cubic-bezier(0,0,0.2,1.15) ".concat(time, "s"));
          }

          setTransform(_this.contentRef.style, "translate3d(0,".concat(-y, "px,0)"));
          setTimeout(function () {
            _this.scrollingComplete();

            if (_this.contentRef) {
              setTransition(_this.contentRef.style, '');
            }
          }, +time * 1000);
        }
      };

      var Velocity = function () {
        var minInterval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;
        var maxInterval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
        var _time = 0;
        var _y = 0;
        var _velocity = 0;
        var recorder = {
          record: function record(y) {
            var now = +new Date();
            _velocity = (y - _y) / (now - _time);

            if (now - _time >= minInterval) {
              _velocity = now - _time <= maxInterval ? _velocity : 0;
              _y = y;
              _time = now;
            }
          },
          getVelocity: function getVelocity(y) {
            if (y !== _y) {
              recorder.record(y);
            }

            return _velocity;
          }
        };
        return recorder;
      }();

      var onFinish = function onFinish() {
        isMoving = false;
        var targetY = scrollY;
        var height = (_this.props.children.length - 1) * _this.itemHeight;
        var time = .3;
        var velocity = Velocity.getVelocity(targetY) * 4;

        if (velocity) {
          targetY = velocity * 40 + targetY;
          time = Math.abs(velocity) * .1;
        }

        if (targetY % _this.itemHeight !== 0) {
          targetY = Math.round(targetY / _this.itemHeight) * _this.itemHeight;
        }

        if (targetY < 0) {
          targetY = 0;
        } else if (targetY > height) {
          targetY = height;
        }

        scrollTo(0, targetY, time < .3 ? .3 : time);

        _this.onScrollChange();
      };

      var onStart = function onStart(y) {
        if (scrollDisabled) {
          return;
        }

        isMoving = true;
        startY = y;
        lastY = scrollY;
      };

      var onMove = function onMove(y) {
        if (scrollDisabled || !isMoving) {
          return;
        }

        scrollY = lastY - y + startY;
        Velocity.record(scrollY);

        _this.onScrollChange();

        setTransform(_this.contentRef.style, "translate3d(0,".concat(-scrollY, "px,0)"));
      };

      return {
        touchstart: function touchstart(evt) {
          return onStart(evt.touches[0].pageY);
        },
        mousedown: function mousedown(evt) {
          return onStart(evt.pageY);
        },
        touchmove: function touchmove(evt) {
          evt.preventDefault();
          onMove(evt.touches[0].pageY);
        },
        mousemove: function mousemove(evt) {
          evt.preventDefault();
          onMove(evt.pageY);
        },
        touchend: function touchend() {
          return onFinish();
        },
        touchcancel: function touchcancel() {
          return onFinish();
        },
        mouseup: function mouseup() {
          return onFinish();
        },
        getValue: function getValue() {
          return scrollY;
        },
        scrollTo: scrollTo,
        setDisabled: function setDisabled() {
          var disabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          scrollDisabled = disabled;
        }
      };
    }();

    _this.scrollTo = function (top) {
      _this.scrollHanders.scrollTo(0, top);
    };

    _this.scrollToWithoutAnimation = function (top) {
      _this.scrollHanders.scrollTo(0, top, 0);
    };

    _this.fireValueChange = function (selectedValue) {
      if (selectedValue !== _this.state.selectedValue) {
        if (!('selectedValue' in _this.props)) {
          _this.setState({
            selectedValue: selectedValue
          });
        }

        if (_this.props.onValueChange) {
          _this.props.onValueChange(selectedValue);
        }
      }
    };

    _this.onScrollChange = function () {
      var top = _this.scrollHanders.getValue();

      if (top >= 0) {
        var children = React.Children.toArray(_this.props.children);

        var index = _this.props.computeChildIndex(top, _this.itemHeight, children.length);

        if (_this.scrollValue !== index) {
          _this.scrollValue = index;
          var child = children[index];

          if (child && _this.props.onScrollChange) {
            _this.props.onScrollChange(child.props.value);
          } else if (!child && console.warn) {
            console.warn('child not found', children, index);
          }
        }
      }
    };

    _this.scrollingComplete = function () {
      var top = _this.scrollHanders.getValue();

      if (top >= 0) {
        _this.props.doScrollingComplete(top, _this.itemHeight, _this.fireValueChange);
      }
    };

    var selectedValueState;
    var _this$props = _this.props,
        selectedValue = _this$props.selectedValue,
        defaultSelectedValue = _this$props.defaultSelectedValue;

    if (selectedValue !== undefined) {
      selectedValueState = selectedValue;
    } else if (defaultSelectedValue !== undefined) {
      selectedValueState = defaultSelectedValue;
    } else {
      var children = React.Children.toArray(_this.props.children);
      selectedValueState = children && children[0] && children[0].props.value;
    }

    _this.state = {
      selectedValue: selectedValueState
    };
    return _this;
  }

  _createClass(Picker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var contentRef = this.contentRef,
          indicatorRef = this.indicatorRef,
          maskRef = this.maskRef,
          rootRef = this.rootRef;
      var rootHeight = rootRef.getBoundingClientRect().height; // https://github.com/react-component/m-picker/issues/18

      var itemHeight = this.itemHeight = indicatorRef.getBoundingClientRect().height;
      var num = Math.floor(rootHeight / itemHeight);

      if (num % 2 === 0) {
        num--;
      }

      num--;
      num /= 2;
      contentRef.style.padding = "".concat(itemHeight * num, "px 0");
      indicatorRef.style.top = "".concat(itemHeight * num, "px");
      maskRef.style.backgroundSize = "100% ".concat(itemHeight * num, "px");
      this.scrollHanders.setDisabled(this.props.disabled);
      this.props.select(this.state.selectedValue, this.itemHeight, this.scrollTo);
      var passiveSupported = this.passiveSupported();
      var willPreventDefault = passiveSupported ? {
        passive: false
      } : false;
      var willNotPreventDefault = passiveSupported ? {
        passive: true
      } : false;
      Object.keys(this.scrollHanders).forEach(function (key) {
        if (key.indexOf('touch') === 0 || key.indexOf('mouse') === 0) {
          var pd = key.indexOf('move') >= 0 ? willPreventDefault : willNotPreventDefault;
          rootRef.addEventListener(key, _this2.scrollHanders[key], pd);
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      Object.keys(this.scrollHanders).forEach(function (key) {
        if (key.indexOf('touch') === 0 || key.indexOf('mouse') === 0) {
          _this3.rootRef.removeEventListener(key, _this3.scrollHanders[key]);
        }
      });
    }
  }, {
    key: "passiveSupported",
    value: function passiveSupported() {
      var passiveSupported = false;

      try {
        var options = Object.defineProperty({}, 'passive', {
          get: function get() {
            passiveSupported = true;
          }
        });
        window.addEventListener('test', null, options);
      } catch (err) {}

      return passiveSupported;
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this4 = this;

      if ('selectedValue' in nextProps) {
        if (this.state.selectedValue !== nextProps.selectedValue) {
          this.setState({
            selectedValue: nextProps.selectedValue
          }, function () {
            _this4.props.select(nextProps.selectedValue, _this4.itemHeight, nextProps.noAnimate ? _this4.scrollToWithoutAnimation : _this4.scrollTo);
          });
        }
      }

      this.scrollHanders.setDisabled(nextProps.disabled);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.state.selectedValue !== nextState.selectedValue || this.props.children !== nextProps.children;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.props.select(this.state.selectedValue, this.itemHeight, this.scrollToWithoutAnimation);
    }
  }, {
    key: "getValue",
    value: function getValue() {
      if ('selectedValue' in this.props) {
        return this.props.selectedValue;
      }

      var children = React.Children.toArray(this.props.children);
      return children && children[0] && children[0].props.value;
    }
  }, {
    key: "render",
    value: function render() {
      var _pickerCls,
          _this5 = this;

      var props = this.props;
      var prefixCls = props.prefixCls,
          itemStyle = props.itemStyle,
          indicatorStyle = props.indicatorStyle,
          _props$indicatorClass = props.indicatorClassName,
          indicatorClassName = _props$indicatorClass === void 0 ? '' : _props$indicatorClass,
          children = props.children;
      var selectedValue = this.state.selectedValue;
      var itemClassName = "".concat(prefixCls, "-item");
      var selectedItemClassName = "".concat(itemClassName, " ").concat(prefixCls, "-item-selected");

      var map = function map(item) {
        var _item$props = item.props,
            _item$props$className = _item$props.className,
            className = _item$props$className === void 0 ? '' : _item$props$className,
            style = _item$props.style,
            value = _item$props.value;
        return React.createElement("div", {
          style: _extends({}, itemStyle, style),
          className: "".concat(selectedValue === value ? selectedItemClassName : itemClassName, " ").concat(className),
          key: value
        }, item.children || item.props.children);
      }; // compatibility for preact


      var items = React.Children ? React.Children.map(children, map) : [].concat(children).map(map);
      var pickerCls = (_pickerCls = {}, _defineProperty(_pickerCls, props.className, !!props.className), _defineProperty(_pickerCls, prefixCls, true), _pickerCls);
      return React.createElement("div", {
        className: (0, _classnames["default"])(pickerCls),
        ref: function ref(el) {
          return _this5.rootRef = el;
        },
        style: this.props.style
      }, React.createElement("div", {
        className: "".concat(prefixCls, "-mask"),
        ref: function ref(el) {
          return _this5.maskRef = el;
        }
      }), React.createElement("div", {
        className: "".concat(prefixCls, "-indicator ").concat(indicatorClassName),
        ref: function ref(el) {
          return _this5.indicatorRef = el;
        },
        style: indicatorStyle
      }), React.createElement("div", {
        className: "".concat(prefixCls, "-content"),
        ref: function ref(el) {
          return _this5.contentRef = el;
        }
      }, items));
    }
  }]);

  return Picker;
}(React.Component);

Picker.defaultProps = {
  prefixCls: 'rmc-picker'
};

var _default = (0, _PickerMixin["default"])(Picker);

exports["default"] = _default;

/***/ }),

/***/ "+plK":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("ApPD");
module.exports = __webpack_require__("WEpk").Object.getPrototypeOf;


/***/ }),

/***/ "/eQG":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("v5Dd");
var $Object = __webpack_require__("WEpk").Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ "0tVQ":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("FlQf");
__webpack_require__("VJsP");
module.exports = __webpack_require__("WEpk").Array.from;


/***/ }),

/***/ "29s/":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("WEpk");
var global = __webpack_require__("5T2Y");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("uOPS") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "2GTP":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("eaoh");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "2Nb0":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("FlQf");
__webpack_require__("bBy9");
module.exports = __webpack_require__("zLkG").f('iterator');


/***/ }),

/***/ "2NuI":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),

/***/ "2faE":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("5K7Z");
var IE8_DOM_DEFINE = __webpack_require__("eUtF");
var toPrimitive = __webpack_require__("G8Mo");
var dP = Object.defineProperty;

exports.f = __webpack_require__("jmDH") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "2rMq":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return ExecutionEnvironment;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}());


/***/ }),

/***/ "3CTM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    confirmLabel: '确定',
    backspaceLabel: '退格',
    cancelKeyboardLabel: '收起键盘'
});

/***/ }),

/***/ "3GJH":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("lCc8");
var $Object = __webpack_require__("WEpk").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "5K7Z":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("93I4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "5T2Y":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "5vMV":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("B+OT");
var toIObject = __webpack_require__("NsO/");
var arrayIndexOf = __webpack_require__("W070")(false);
var IE_PROTO = __webpack_require__("VVlx")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "6/1s":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("YqAc")('meta');
var isObject = __webpack_require__("93I4");
var has = __webpack_require__("B+OT");
var setDesc = __webpack_require__("2faE").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("KUxP")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "6DQo":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (false) {}

module.exports = warning;


/***/ }),

/***/ "6tYh":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("93I4");
var anObject = __webpack_require__("5K7Z");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("2GTP")(Function.call, __webpack_require__("vwuL").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "93I4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "9ibs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ image_picker; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ modal; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ picker_view; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ es_toast; });

// UNUSED EXPORTS: Accordion, ActionSheet, ActivityIndicator, Badge, Button, Calendar, Card, Carousel, Checkbox, DatePicker, DatePickerView, Drawer, Flex, Grid, Icon, InputItem, List, ListView, Menu, NavBar, NoticeBar, Pagination, Picker, Popover, Progress, Radio, PullToRefresh, Result, SearchBar, SegmentedControl, Slider, Range, Stepper, Steps, SwipeAction, Switch, TabBar, Tabs, Tag, Text, TextareaItem, View, WhiteSpace, WingBlank, LocaleProvider

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("iCc5");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/createClass.js
var createClass = __webpack_require__("V7oC");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("FYw3");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/inherits.js
var inherits = __webpack_require__("mRg0");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("17x9");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./node_modules/rc-collapse/es/PanelContent.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var PanelContent_PanelContent = function (_Component) {
  _inherits(PanelContent, _Component);

  function PanelContent() {
    _classCallCheck(this, PanelContent);

    return _possibleConstructorReturn(this, (PanelContent.__proto__ || Object.getPrototypeOf(PanelContent)).apply(this, arguments));
  }

  _createClass(PanelContent, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props.forceRender || this.props.isActive || nextProps.isActive;
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      this._isActived = this.props.forceRender || this._isActived || this.props.isActive;
      if (!this._isActived) {
        return null;
      }
      var _props = this.props,
          prefixCls = _props.prefixCls,
          isActive = _props.isActive,
          children = _props.children,
          destroyInactivePanel = _props.destroyInactivePanel,
          forceRender = _props.forceRender,
          role = _props.role;

      var contentCls = classnames_default()((_classnames = {}, _defineProperty(_classnames, prefixCls + '-content', true), _defineProperty(_classnames, prefixCls + '-content-active', isActive), _defineProperty(_classnames, prefixCls + '-content-inactive', !isActive), _classnames));
      var child = !forceRender && !isActive && destroyInactivePanel ? null : react_default.a.createElement(
        'div',
        { className: prefixCls + '-content-box' },
        children
      );
      return react_default.a.createElement(
        'div',
        {
          className: contentCls,
          role: role
        },
        child
      );
    }
  }]);

  return PanelContent;
}(react["Component"]);

PanelContent_PanelContent.propTypes = {
  prefixCls: prop_types_default.a.string,
  isActive: prop_types_default.a.bool,
  children: prop_types_default.a.any,
  destroyInactivePanel: prop_types_default.a.bool,
  forceRender: prop_types_default.a.bool,
  role: prop_types_default.a.string
};

/* harmony default export */ var es_PanelContent = (PanelContent_PanelContent);
// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("QbLZ");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("YEIV");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./node_modules/rc-util/es/unsafeLifecyclesPolyfill.js


var unsafeLifecyclesPolyfill_unsafeLifecyclesPolyfill = function unsafeLifecyclesPolyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  } // only handle componentWillReceiveProps


  if (typeof prototype.componentWillReceiveProps !== 'function') {
    return Component;
  } // In React 16.9, React.Profiler was introduced together with UNSAFE_componentWillReceiveProps
  // https://reactjs.org/blog/2019/08/08/react-v16.9.0.html#performance-measurements-with-reactprofiler


  if (!react_default.a.Profiler) {
    return Component;
  } // Here polyfill get started


  prototype.UNSAFE_componentWillReceiveProps = prototype.componentWillReceiveProps;
  delete prototype.componentWillReceiveProps;
  return Component;
};

/* harmony default export */ var es_unsafeLifecyclesPolyfill = (unsafeLifecyclesPolyfill_unsafeLifecyclesPolyfill);
// CONCATENATED MODULE: ./node_modules/rc-animate/es/ChildrenUtils.js


function toArrayChildren(children) {
  var ret = [];
  react_default.a.Children.forEach(children, function (child) {
    ret.push(child);
  });
  return ret;
}

function findChildInChildrenByKey(children, key) {
  var ret = null;
  if (children) {
    children.forEach(function (child) {
      if (ret) {
        return;
      }
      if (child && child.key === key) {
        ret = child;
      }
    });
  }
  return ret;
}

function findShownChildInChildrenByKey(children, key, showProp) {
  var ret = null;
  if (children) {
    children.forEach(function (child) {
      if (child && child.key === key && child.props[showProp]) {
        if (ret) {
          throw new Error('two child with same key for <rc-animate> children');
        }
        ret = child;
      }
    });
  }
  return ret;
}

function findHiddenChildInChildrenByKey(children, key, showProp) {
  var found = 0;
  if (children) {
    children.forEach(function (child) {
      if (found) {
        return;
      }
      found = child && child.key === key && !child.props[showProp];
    });
  }
  return found;
}

function isSameChildren(c1, c2, showProp) {
  var same = c1.length === c2.length;
  if (same) {
    c1.forEach(function (child, index) {
      var child2 = c2[index];
      if (child && child2) {
        if (child && !child2 || !child && child2) {
          same = false;
        } else if (child.key !== child2.key) {
          same = false;
        } else if (showProp && child.props[showProp] !== child2.props[showProp]) {
          same = false;
        }
      }
    });
  }
  return same;
}

function mergeChildren(prev, next) {
  var ret = [];

  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextChildrenPending = {};
  var pendingChildren = [];
  prev.forEach(function (child) {
    if (child && findChildInChildrenByKey(next, child.key)) {
      if (pendingChildren.length) {
        nextChildrenPending[child.key] = pendingChildren;
        pendingChildren = [];
      }
    } else {
      pendingChildren.push(child);
    }
  });

  next.forEach(function (child) {
    if (child && Object.prototype.hasOwnProperty.call(nextChildrenPending, child.key)) {
      ret = ret.concat(nextChildrenPending[child.key]);
    }
    ret.push(child);
  });

  ret = ret.concat(pendingChildren);

  return ret;
}
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__("i8i4");
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__("EJiy");
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// CONCATENATED MODULE: ./node_modules/css-animation/es/Event.js
var START_EVENT_NAME_MAP = {
  transitionstart: {
    transition: 'transitionstart',
    WebkitTransition: 'webkitTransitionStart',
    MozTransition: 'mozTransitionStart',
    OTransition: 'oTransitionStart',
    msTransition: 'MSTransitionStart'
  },

  animationstart: {
    animation: 'animationstart',
    WebkitAnimation: 'webkitAnimationStart',
    MozAnimation: 'mozAnimationStart',
    OAnimation: 'oAnimationStart',
    msAnimation: 'MSAnimationStart'
  }
};

var END_EVENT_NAME_MAP = {
  transitionend: {
    transition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'mozTransitionEnd',
    OTransition: 'oTransitionEnd',
    msTransition: 'MSTransitionEnd'
  },

  animationend: {
    animation: 'animationend',
    WebkitAnimation: 'webkitAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    OAnimation: 'oAnimationEnd',
    msAnimation: 'MSAnimationEnd'
  }
};

var startEvents = [];
var endEvents = [];

function detectEvents() {
  var testEl = document.createElement('div');
  var style = testEl.style;

  if (!('AnimationEvent' in window)) {
    delete START_EVENT_NAME_MAP.animationstart.animation;
    delete END_EVENT_NAME_MAP.animationend.animation;
  }

  if (!('TransitionEvent' in window)) {
    delete START_EVENT_NAME_MAP.transitionstart.transition;
    delete END_EVENT_NAME_MAP.transitionend.transition;
  }

  function process(EVENT_NAME_MAP, events) {
    for (var baseEventName in EVENT_NAME_MAP) {
      if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
        var baseEvents = EVENT_NAME_MAP[baseEventName];
        for (var styleName in baseEvents) {
          if (styleName in style) {
            events.push(baseEvents[styleName]);
            break;
          }
        }
      }
    }
  }

  process(START_EVENT_NAME_MAP, startEvents);
  process(END_EVENT_NAME_MAP, endEvents);
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  detectEvents();
}

function addEventListener(node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false);
}

function removeEventListener(node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false);
}

var TransitionEvents = {
  // Start events
  startEvents: startEvents,

  addStartEventListener: function addStartEventListener(node, eventListener) {
    if (startEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    startEvents.forEach(function (startEvent) {
      addEventListener(node, startEvent, eventListener);
    });
  },
  removeStartEventListener: function removeStartEventListener(node, eventListener) {
    if (startEvents.length === 0) {
      return;
    }
    startEvents.forEach(function (startEvent) {
      removeEventListener(node, startEvent, eventListener);
    });
  },


  // End events
  endEvents: endEvents,

  addEndEventListener: function addEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    endEvents.forEach(function (endEvent) {
      addEventListener(node, endEvent, eventListener);
    });
  },
  removeEndEventListener: function removeEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      return;
    }
    endEvents.forEach(function (endEvent) {
      removeEventListener(node, endEvent, eventListener);
    });
  }
};

/* harmony default export */ var Event = (TransitionEvents);
// EXTERNAL MODULE: ./node_modules/component-classes/index.js
var component_classes = __webpack_require__("PFWz");
var component_classes_default = /*#__PURE__*/__webpack_require__.n(component_classes);

// CONCATENATED MODULE: ./node_modules/css-animation/es/index.js




var isCssAnimationSupported = Event.endEvents.length !== 0;
var capitalPrefixes = ['Webkit', 'Moz', 'O',
// ms is special .... !
'ms'];
var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];

function getStyleProperty(node, name) {
  // old ff need null, https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
  var style = window.getComputedStyle(node, null);
  var ret = '';
  for (var i = 0; i < prefixes.length; i++) {
    ret = style.getPropertyValue(prefixes[i] + name);
    if (ret) {
      break;
    }
  }
  return ret;
}

function fixBrowserByTimeout(node) {
  if (isCssAnimationSupported) {
    var transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
    var transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
    var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
    var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
    var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
    // sometimes, browser bug
    node.rcEndAnimTimeout = setTimeout(function () {
      node.rcEndAnimTimeout = null;
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }, time * 1000 + 200);
  }
}

function clearBrowserBugTimeout(node) {
  if (node.rcEndAnimTimeout) {
    clearTimeout(node.rcEndAnimTimeout);
    node.rcEndAnimTimeout = null;
  }
}

var es_cssAnimation = function cssAnimation(node, transitionName, endCallback) {
  var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : typeof_default()(transitionName)) === 'object';
  var className = nameIsObj ? transitionName.name : transitionName;
  var activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';
  var end = endCallback;
  var start = void 0;
  var active = void 0;
  var nodeClasses = component_classes_default()(node);

  if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
    end = endCallback.end;
    start = endCallback.start;
    active = endCallback.active;
  }

  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      clearTimeout(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);

    nodeClasses.remove(className);
    nodeClasses.remove(activeClassName);

    Event.removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    // Usually this optional end is used for informing an owner of
    // a leave animation and telling it to remove the child.
    if (end) {
      end();
    }
  };

  Event.addEndEventListener(node, node.rcEndListener);

  if (start) {
    start();
  }
  nodeClasses.add(className);

  node.rcAnimTimeout = setTimeout(function () {
    node.rcAnimTimeout = null;
    nodeClasses.add(activeClassName);
    if (active) {
      setTimeout(active, 0);
    }
    fixBrowserByTimeout(node);
    // 30ms for firefox
  }, 30);

  return {
    stop: function stop() {
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }
  };
};

es_cssAnimation.style = function (node, style, callback) {
  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      clearTimeout(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);

    Event.removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    // Usually this optional callback is used for informing an owner of
    // a leave animation and telling it to remove the child.
    if (callback) {
      callback();
    }
  };

  Event.addEndEventListener(node, node.rcEndListener);

  node.rcAnimTimeout = setTimeout(function () {
    for (var s in style) {
      if (style.hasOwnProperty(s)) {
        node.style[s] = style[s];
      }
    }
    node.rcAnimTimeout = null;
    fixBrowserByTimeout(node);
  }, 0);
};

es_cssAnimation.setTransition = function (node, p, value) {
  var property = p;
  var v = value;
  if (value === undefined) {
    v = property;
    property = '';
  }
  property = property || '';
  capitalPrefixes.forEach(function (prefix) {
    node.style[prefix + 'Transition' + property] = v;
  });
};

es_cssAnimation.isCssAnimationSupported = isCssAnimationSupported;



/* harmony default export */ var es = (es_cssAnimation);
// CONCATENATED MODULE: ./node_modules/rc-animate/es/util/animate.js
var util = {
  isAppearSupported: function isAppearSupported(props) {
    return props.transitionName && props.transitionAppear || props.animation.appear;
  },
  isEnterSupported: function isEnterSupported(props) {
    return props.transitionName && props.transitionEnter || props.animation.enter;
  },
  isLeaveSupported: function isLeaveSupported(props) {
    return props.transitionName && props.transitionLeave || props.animation.leave;
  },
  allowAppearCallback: function allowAppearCallback(props) {
    return props.transitionAppear || props.animation.appear;
  },
  allowEnterCallback: function allowEnterCallback(props) {
    return props.transitionEnter || props.animation.enter;
  },
  allowLeaveCallback: function allowLeaveCallback(props) {
    return props.transitionLeave || props.animation.leave;
  }
};
/* harmony default export */ var animate = (util);
// CONCATENATED MODULE: ./node_modules/rc-animate/es/AnimateChild.js










var transitionMap = {
  enter: 'transitionEnter',
  appear: 'transitionAppear',
  leave: 'transitionLeave'
};

var AnimateChild_AnimateChild = function (_React$Component) {
  inherits_default()(AnimateChild, _React$Component);

  function AnimateChild() {
    classCallCheck_default()(this, AnimateChild);

    return possibleConstructorReturn_default()(this, (AnimateChild.__proto__ || Object.getPrototypeOf(AnimateChild)).apply(this, arguments));
  }

  createClass_default()(AnimateChild, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.stop();
    }
  }, {
    key: 'componentWillEnter',
    value: function componentWillEnter(done) {
      if (animate.isEnterSupported(this.props)) {
        this.transition('enter', done);
      } else {
        done();
      }
    }
  }, {
    key: 'componentWillAppear',
    value: function componentWillAppear(done) {
      if (animate.isAppearSupported(this.props)) {
        this.transition('appear', done);
      } else {
        done();
      }
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(done) {
      if (animate.isLeaveSupported(this.props)) {
        this.transition('leave', done);
      } else {
        // always sync, do not interupt with react component life cycle
        // update hidden -> animate hidden ->
        // didUpdate -> animate leave -> unmount (if animate is none)
        done();
      }
    }
  }, {
    key: 'transition',
    value: function transition(animationType, finishCallback) {
      var _this2 = this;

      var node = react_dom_default.a.findDOMNode(this);
      var props = this.props;
      var transitionName = props.transitionName;
      var nameIsObj = typeof transitionName === 'object';
      this.stop();
      var end = function end() {
        _this2.stopper = null;
        finishCallback();
      };
      if ((isCssAnimationSupported || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
        var name = nameIsObj ? transitionName[animationType] : transitionName + '-' + animationType;
        var activeName = name + '-active';
        if (nameIsObj && transitionName[animationType + 'Active']) {
          activeName = transitionName[animationType + 'Active'];
        }
        this.stopper = es(node, {
          name: name,
          active: activeName
        }, end);
      } else {
        this.stopper = props.animation[animationType](node, end);
      }
    }
  }, {
    key: 'stop',
    value: function stop() {
      var stopper = this.stopper;
      if (stopper) {
        this.stopper = null;
        stopper.stop();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return AnimateChild;
}(react_default.a.Component);

AnimateChild_AnimateChild.propTypes = {
  children: prop_types_default.a.any,
  animation: prop_types_default.a.any,
  transitionName: prop_types_default.a.any
};
/* harmony default export */ var es_AnimateChild = (AnimateChild_AnimateChild);
// CONCATENATED MODULE: ./node_modules/rc-animate/es/Animate.js













var defaultKey = 'rc_animate_' + Date.now();

function getChildrenFromProps(props) {
  var children = props.children;
  if (react_default.a.isValidElement(children)) {
    if (!children.key) {
      return react_default.a.cloneElement(children, {
        key: defaultKey
      });
    }
  }
  return children;
}

function noop() {}

var Animate_Animate = function (_React$Component) {
  inherits_default()(Animate, _React$Component);

  // eslint-disable-line

  function Animate(props) {
    classCallCheck_default()(this, Animate);

    var _this = possibleConstructorReturn_default()(this, (Animate.__proto__ || Object.getPrototypeOf(Animate)).call(this, props));

    Animate_initialiseProps.call(_this);

    _this.currentlyAnimatingKeys = {};
    _this.keysToEnter = [];
    _this.keysToLeave = [];

    _this.state = {
      children: toArrayChildren(getChildrenFromProps(props))
    };

    _this.childrenRefs = {};
    return _this;
  }

  createClass_default()(Animate, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var showProp = this.props.showProp;
      var children = this.state.children;
      if (showProp) {
        children = children.filter(function (child) {
          return !!child.props[showProp];
        });
      }
      children.forEach(function (child) {
        if (child) {
          _this2.performAppear(child.key);
        }
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      this.nextProps = nextProps;
      var nextChildren = toArrayChildren(getChildrenFromProps(nextProps));
      var props = this.props;
      // exclusive needs immediate response
      if (props.exclusive) {
        Object.keys(this.currentlyAnimatingKeys).forEach(function (key) {
          _this3.stop(key);
        });
      }
      var showProp = props.showProp;
      var currentlyAnimatingKeys = this.currentlyAnimatingKeys;
      // last props children if exclusive
      var currentChildren = props.exclusive ? toArrayChildren(getChildrenFromProps(props)) : this.state.children;
      // in case destroy in showProp mode
      var newChildren = [];
      if (showProp) {
        currentChildren.forEach(function (currentChild) {
          var nextChild = currentChild && findChildInChildrenByKey(nextChildren, currentChild.key);
          var newChild = void 0;
          if ((!nextChild || !nextChild.props[showProp]) && currentChild.props[showProp]) {
            newChild = react_default.a.cloneElement(nextChild || currentChild, defineProperty_default()({}, showProp, true));
          } else {
            newChild = nextChild;
          }
          if (newChild) {
            newChildren.push(newChild);
          }
        });
        nextChildren.forEach(function (nextChild) {
          if (!nextChild || !findChildInChildrenByKey(currentChildren, nextChild.key)) {
            newChildren.push(nextChild);
          }
        });
      } else {
        newChildren = mergeChildren(currentChildren, nextChildren);
      }

      // need render to avoid update
      this.setState({
        children: newChildren
      });

      nextChildren.forEach(function (child) {
        var key = child && child.key;
        if (child && currentlyAnimatingKeys[key]) {
          return;
        }
        var hasPrev = child && findChildInChildrenByKey(currentChildren, key);
        if (showProp) {
          var showInNext = child.props[showProp];
          if (hasPrev) {
            var showInNow = findShownChildInChildrenByKey(currentChildren, key, showProp);
            if (!showInNow && showInNext) {
              _this3.keysToEnter.push(key);
            }
          } else if (showInNext) {
            _this3.keysToEnter.push(key);
          }
        } else if (!hasPrev) {
          _this3.keysToEnter.push(key);
        }
      });

      currentChildren.forEach(function (child) {
        var key = child && child.key;
        if (child && currentlyAnimatingKeys[key]) {
          return;
        }
        var hasNext = child && findChildInChildrenByKey(nextChildren, key);
        if (showProp) {
          var showInNow = child.props[showProp];
          if (hasNext) {
            var showInNext = findShownChildInChildrenByKey(nextChildren, key, showProp);
            if (!showInNext && showInNow) {
              _this3.keysToLeave.push(key);
            }
          } else if (showInNow) {
            _this3.keysToLeave.push(key);
          }
        } else if (!hasNext) {
          _this3.keysToLeave.push(key);
        }
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var keysToEnter = this.keysToEnter;
      this.keysToEnter = [];
      keysToEnter.forEach(this.performEnter);
      var keysToLeave = this.keysToLeave;
      this.keysToLeave = [];
      keysToLeave.forEach(this.performLeave);
    }
  }, {
    key: 'isValidChildByKey',
    value: function isValidChildByKey(currentChildren, key) {
      var showProp = this.props.showProp;
      if (showProp) {
        return findShownChildInChildrenByKey(currentChildren, key, showProp);
      }
      return findChildInChildrenByKey(currentChildren, key);
    }
  }, {
    key: 'stop',
    value: function stop(key) {
      delete this.currentlyAnimatingKeys[key];
      var component = this.childrenRefs[key];
      if (component) {
        component.stop();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var props = this.props;
      this.nextProps = props;
      var stateChildren = this.state.children;
      var children = null;
      if (stateChildren) {
        children = stateChildren.map(function (child) {
          if (child === null || child === undefined) {
            return child;
          }
          if (!child.key) {
            throw new Error('must set key for <rc-animate> children');
          }
          return react_default.a.createElement(
            es_AnimateChild,
            {
              key: child.key,
              ref: function ref(node) {
                _this4.childrenRefs[child.key] = node;
              },
              animation: props.animation,
              transitionName: props.transitionName,
              transitionEnter: props.transitionEnter,
              transitionAppear: props.transitionAppear,
              transitionLeave: props.transitionLeave
            },
            child
          );
        });
      }
      var Component = props.component;
      if (Component) {
        var passedProps = props;
        if (typeof Component === 'string') {
          passedProps = extends_default()({
            className: props.className,
            style: props.style
          }, props.componentProps);
        }
        return react_default.a.createElement(
          Component,
          passedProps,
          children
        );
      }
      return children[0] || null;
    }
  }]);

  return Animate;
}(react_default.a.Component);

Animate_Animate.isAnimate = true;
Animate_Animate.propTypes = {
  className: prop_types_default.a.string,
  style: prop_types_default.a.object,
  component: prop_types_default.a.any,
  componentProps: prop_types_default.a.object,
  animation: prop_types_default.a.object,
  transitionName: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.object]),
  transitionEnter: prop_types_default.a.bool,
  transitionAppear: prop_types_default.a.bool,
  exclusive: prop_types_default.a.bool,
  transitionLeave: prop_types_default.a.bool,
  onEnd: prop_types_default.a.func,
  onEnter: prop_types_default.a.func,
  onLeave: prop_types_default.a.func,
  onAppear: prop_types_default.a.func,
  showProp: prop_types_default.a.string,
  children: prop_types_default.a.node
};
Animate_Animate.defaultProps = {
  animation: {},
  component: 'span',
  componentProps: {},
  transitionEnter: true,
  transitionLeave: true,
  transitionAppear: false,
  onEnd: noop,
  onEnter: noop,
  onLeave: noop,
  onAppear: noop
};

var Animate_initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.performEnter = function (key) {
    // may already remove by exclusive
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillEnter(_this5.handleDoneAdding.bind(_this5, key, 'enter'));
    }
  };

  this.performAppear = function (key) {
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillAppear(_this5.handleDoneAdding.bind(_this5, key, 'appear'));
    }
  };

  this.handleDoneAdding = function (key, type) {
    var props = _this5.props;
    delete _this5.currentlyAnimatingKeys[key];
    // if update on exclusive mode, skip check
    if (props.exclusive && props !== _this5.nextProps) {
      return;
    }
    var currentChildren = toArrayChildren(getChildrenFromProps(props));
    if (!_this5.isValidChildByKey(currentChildren, key)) {
      // exclusive will not need this
      _this5.performLeave(key);
    } else if (type === 'appear') {
      if (animate.allowAppearCallback(props)) {
        props.onAppear(key);
        props.onEnd(key, true);
      }
    } else if (animate.allowEnterCallback(props)) {
      props.onEnter(key);
      props.onEnd(key, true);
    }
  };

  this.performLeave = function (key) {
    // may already remove by exclusive
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillLeave(_this5.handleDoneLeaving.bind(_this5, key));
    }
  };

  this.handleDoneLeaving = function (key) {
    var props = _this5.props;
    delete _this5.currentlyAnimatingKeys[key];
    // if update on exclusive mode, skip check
    if (props.exclusive && props !== _this5.nextProps) {
      return;
    }
    var currentChildren = toArrayChildren(getChildrenFromProps(props));
    // in case state change is too fast
    if (_this5.isValidChildByKey(currentChildren, key)) {
      _this5.performEnter(key);
    } else {
      var end = function end() {
        if (animate.allowLeaveCallback(props)) {
          props.onLeave(key);
          props.onEnd(key, false);
        }
      };
      if (!isSameChildren(_this5.state.children, currentChildren, props.showProp)) {
        _this5.setState({
          children: currentChildren
        }, end);
      } else {
        end();
      }
    }
  };
};

/* harmony default export */ var es_Animate = (es_unsafeLifecyclesPolyfill(Animate_Animate));
// CONCATENATED MODULE: ./node_modules/rc-collapse/es/Panel.js
var Panel_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function Panel_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Panel_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Panel_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Panel_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Panel_CollapsePanel = function (_Component) {
  Panel_inherits(CollapsePanel, _Component);

  function CollapsePanel() {
    var _ref;

    var _temp, _this, _ret;

    Panel_classCallCheck(this, CollapsePanel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = Panel_possibleConstructorReturn(this, (_ref = CollapsePanel.__proto__ || Object.getPrototypeOf(CollapsePanel)).call.apply(_ref, [this].concat(args))), _this), _this.handleItemClick = function () {
      if (_this.props.onItemClick) {
        _this.props.onItemClick();
      }
    }, _this.handleKeyPress = function (e) {
      if (e.key === 'Enter' || e.keyCode === 13 || e.which === 13) {
        _this.handleItemClick();
      }
    }, _temp), Panel_possibleConstructorReturn(_this, _ret);
  }

  Panel_createClass(CollapsePanel, [{
    key: 'render',
    value: function render() {
      var _classNames2;

      var _props = this.props,
          className = _props.className,
          id = _props.id,
          style = _props.style,
          prefixCls = _props.prefixCls,
          header = _props.header,
          headerClass = _props.headerClass,
          children = _props.children,
          isActive = _props.isActive,
          showArrow = _props.showArrow,
          destroyInactivePanel = _props.destroyInactivePanel,
          disabled = _props.disabled,
          accordion = _props.accordion,
          forceRender = _props.forceRender;

      var headerCls = classnames_default()(prefixCls + '-header', Panel_defineProperty({}, headerClass, headerClass));
      var itemCls = classnames_default()((_classNames2 = {}, Panel_defineProperty(_classNames2, prefixCls + '-item', true), Panel_defineProperty(_classNames2, prefixCls + '-item-active', isActive), Panel_defineProperty(_classNames2, prefixCls + '-item-disabled', disabled), _classNames2), className);
      return react_default.a.createElement(
        'div',
        { className: itemCls, style: style, id: id },
        react_default.a.createElement(
          'div',
          {
            className: headerCls,
            onClick: this.handleItemClick,
            role: accordion ? 'tab' : 'button',
            tabIndex: disabled ? -1 : 0,
            'aria-expanded': '' + isActive,
            onKeyPress: this.handleKeyPress
          },
          showArrow && react_default.a.createElement('i', { className: 'arrow' }),
          header
        ),
        react_default.a.createElement(
          es_Animate,
          {
            showProp: 'isActive',
            exclusive: true,
            component: '',
            animation: this.props.openAnimation
          },
          react_default.a.createElement(
            es_PanelContent,
            {
              prefixCls: prefixCls,
              isActive: isActive,
              destroyInactivePanel: destroyInactivePanel,
              forceRender: forceRender,
              role: accordion ? 'tabpanel' : null
            },
            children
          )
        )
      );
    }
  }]);

  return CollapsePanel;
}(react["Component"]);

Panel_CollapsePanel.propTypes = {
  className: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.object]),
  id: prop_types_default.a.string,
  children: prop_types_default.a.any,
  openAnimation: prop_types_default.a.object,
  prefixCls: prop_types_default.a.string,
  header: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number, prop_types_default.a.node]),
  headerClass: prop_types_default.a.string,
  showArrow: prop_types_default.a.bool,
  isActive: prop_types_default.a.bool,
  onItemClick: prop_types_default.a.func,
  style: prop_types_default.a.object,
  destroyInactivePanel: prop_types_default.a.bool,
  disabled: prop_types_default.a.bool,
  accordion: prop_types_default.a.bool,
  forceRender: prop_types_default.a.bool
};

Panel_CollapsePanel.defaultProps = {
  showArrow: true,
  isActive: false,
  destroyInactivePanel: false,
  onItemClick: function onItemClick() {},

  headerClass: '',
  forceRender: false
};

/* harmony default export */ var Panel = (Panel_CollapsePanel);
// CONCATENATED MODULE: ./node_modules/rc-collapse/es/openAnimationFactory.js


function openAnimationFactory_animate(node, show, transitionName, done) {
  var height = void 0;
  return es(node, transitionName, {
    start: function start() {
      if (!show) {
        node.style.height = node.offsetHeight + 'px';
      } else {
        height = node.offsetHeight;
        node.style.height = 0;
      }
    },
    active: function active() {
      node.style.height = (show ? height : 0) + 'px';
    },
    end: function end() {
      node.style.height = '';
      done();
    }
  });
}

function openAnimationFactory_animation(prefixCls) {
  return {
    enter: function enter(node, done) {
      return openAnimationFactory_animate(node, true, prefixCls + '-anim', done);
    },
    leave: function leave(node, done) {
      return openAnimationFactory_animate(node, false, prefixCls + '-anim', done);
    }
  };
}

/* harmony default export */ var openAnimationFactory = (openAnimationFactory_animation);
// CONCATENATED MODULE: ./node_modules/rc-collapse/es/Collapse.js
var Collapse_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function Collapse_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function Collapse_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Collapse_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Collapse_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







function toArray(activeKey) {
  var currentActiveKey = activeKey;
  if (!Array.isArray(currentActiveKey)) {
    currentActiveKey = currentActiveKey ? [currentActiveKey] : [];
  }
  return currentActiveKey;
}

var Collapse_Collapse = function (_Component) {
  Collapse_inherits(Collapse, _Component);

  function Collapse(props) {
    Collapse_classCallCheck(this, Collapse);

    var _this = Collapse_possibleConstructorReturn(this, (Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call(this, props));

    var _this$props = _this.props,
        activeKey = _this$props.activeKey,
        defaultActiveKey = _this$props.defaultActiveKey;

    var currentActiveKey = defaultActiveKey;
    if ('activeKey' in _this.props) {
      currentActiveKey = activeKey;
    }

    _this.state = {
      openAnimation: _this.props.openAnimation || openAnimationFactory(_this.props.prefixCls),
      activeKey: toArray(currentActiveKey)
    };
    return _this;
  }

  Collapse_createClass(Collapse, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('activeKey' in nextProps) {
        this.setState({
          activeKey: toArray(nextProps.activeKey)
        });
      }
      if ('openAnimation' in nextProps) {
        this.setState({
          openAnimation: nextProps.openAnimation
        });
      }
    }
  }, {
    key: 'onClickItem',
    value: function onClickItem(key) {
      var activeKey = this.state.activeKey;
      if (this.props.accordion) {
        activeKey = activeKey[0] === key ? [] : [key];
      } else {
        activeKey = [].concat(_toConsumableArray(activeKey));
        var index = activeKey.indexOf(key);
        var isActive = index > -1;
        if (isActive) {
          // remove active state
          activeKey.splice(index, 1);
        } else {
          activeKey.push(key);
        }
      }
      this.setActiveKey(activeKey);
    }
  }, {
    key: 'getItems',
    value: function getItems() {
      var _this2 = this;

      var activeKey = this.state.activeKey;
      var _props = this.props,
          prefixCls = _props.prefixCls,
          accordion = _props.accordion,
          destroyInactivePanel = _props.destroyInactivePanel;

      var newChildren = [];

      react["Children"].forEach(this.props.children, function (child, index) {
        if (!child) return;
        // If there is no key provide, use the panel order as default key
        var key = child.key || String(index);
        var _child$props = child.props,
            header = _child$props.header,
            headerClass = _child$props.headerClass,
            disabled = _child$props.disabled;

        var isActive = false;
        if (accordion) {
          isActive = activeKey[0] === key;
        } else {
          isActive = activeKey.indexOf(key) > -1;
        }

        var props = {
          key: key,
          header: header,
          headerClass: headerClass,
          isActive: isActive,
          prefixCls: prefixCls,
          destroyInactivePanel: destroyInactivePanel,
          openAnimation: _this2.state.openAnimation,
          accordion: accordion,
          children: child.props.children,
          onItemClick: disabled ? null : function () {
            return _this2.onClickItem(key);
          }
        };

        newChildren.push(react_default.a.cloneElement(child, props));
      });

      return newChildren;
    }
  }, {
    key: 'setActiveKey',
    value: function setActiveKey(activeKey) {
      if (!('activeKey' in this.props)) {
        this.setState({ activeKey: activeKey });
      }
      this.props.onChange(this.props.accordion ? activeKey[0] : activeKey);
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props2 = this.props,
          prefixCls = _props2.prefixCls,
          className = _props2.className,
          style = _props2.style,
          accordion = _props2.accordion;

      var collapseClassName = classnames_default()((_classNames = {}, Collapse_defineProperty(_classNames, prefixCls, true), Collapse_defineProperty(_classNames, className, !!className), _classNames));
      return react_default.a.createElement(
        'div',
        { className: collapseClassName, style: style, role: accordion ? 'tablist' : null },
        this.getItems()
      );
    }
  }]);

  return Collapse;
}(react["Component"]);

Collapse_Collapse.propTypes = {
  children: prop_types_default.a.any,
  prefixCls: prop_types_default.a.string,
  activeKey: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.arrayOf(prop_types_default.a.string)]),
  defaultActiveKey: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.arrayOf(prop_types_default.a.string)]),
  openAnimation: prop_types_default.a.object,
  onChange: prop_types_default.a.func,
  accordion: prop_types_default.a.bool,
  className: prop_types_default.a.string,
  style: prop_types_default.a.object,
  destroyInactivePanel: prop_types_default.a.bool
};

Collapse_Collapse.defaultProps = {
  prefixCls: 'rc-collapse',
  onChange: function onChange() {},

  accordion: false,
  destroyInactivePanel: false
};

Collapse_Collapse.Panel = Panel;

/* harmony default export */ var es_Collapse = (Collapse_Collapse);
// CONCATENATED MODULE: ./node_modules/rc-collapse/es/index.js


/* harmony default export */ var rc_collapse_es = (es_Collapse);
var es_Panel = es_Collapse.Panel;
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/accordion/index.js







var accordion_Accordion = function (_React$Component) {
    inherits_default()(Accordion, _React$Component);

    function Accordion() {
        classCallCheck_default()(this, Accordion);

        return possibleConstructorReturn_default()(this, (Accordion.__proto__ || Object.getPrototypeOf(Accordion)).apply(this, arguments));
    }

    createClass_default()(Accordion, [{
        key: 'render',
        value: function render() {
            return react["createElement"](rc_collapse_es, this.props);
        }
    }]);

    return Accordion;
}(react["Component"]);

/* harmony default export */ var es_accordion = (accordion_Accordion);

accordion_Accordion.Panel = es_Panel;
accordion_Accordion.defaultProps = {
    prefixCls: 'am-accordion'
};
// CONCATENATED MODULE: ./node_modules/rmc-dialog/es/LazyRenderBox.js







var LazyRenderBox_LazyRenderBox = function (_React$Component) {
    inherits_default()(LazyRenderBox, _React$Component);

    function LazyRenderBox() {
        classCallCheck_default()(this, LazyRenderBox);

        return possibleConstructorReturn_default()(this, (LazyRenderBox.__proto__ || Object.getPrototypeOf(LazyRenderBox)).apply(this, arguments));
    }

    createClass_default()(LazyRenderBox, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            return !!nextProps.hiddenClassName || !!nextProps.visible;
        }
    }, {
        key: "render",
        value: function render() {
            var className = this.props.className;
            if (!!this.props.hiddenClassName && !this.props.visible) {
                className += " " + this.props.hiddenClassName;
            }
            var props = extends_default()({}, this.props);
            delete props.hiddenClassName;
            delete props.visible;
            props.className = className;
            return react_default.a.createElement("div", extends_default()({}, props));
        }
    }]);

    return LazyRenderBox;
}(react_default.a.Component);

/* harmony default export */ var es_LazyRenderBox = (LazyRenderBox_LazyRenderBox);
// CONCATENATED MODULE: ./node_modules/rmc-dialog/es/Dialog.js








function Dialog_noop() {}

var Dialog_Dialog = function (_React$Component) {
    inherits_default()(Dialog, _React$Component);

    function Dialog() {
        classCallCheck_default()(this, Dialog);

        var _this = possibleConstructorReturn_default()(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).apply(this, arguments));

        _this.getDialogElement = function () {
            var props = _this.props;
            var closable = props.closable;
            var prefixCls = props.prefixCls;
            var footer = void 0;
            if (props.footer) {
                footer = react_default.a.createElement("div", { className: prefixCls + '-footer', ref: function ref(el) {
                        return _this.footerRef = el;
                    } }, props.footer);
            }
            var header = void 0;
            if (props.title) {
                header = react_default.a.createElement("div", { className: prefixCls + '-header', ref: function ref(el) {
                        return _this.headerRef = el;
                    } }, react_default.a.createElement("div", { className: prefixCls + '-title' }, props.title));
            }
            var closer = void 0;
            if (closable) {
                closer = react_default.a.createElement("button", { onClick: _this.close, "aria-label": "Close", className: prefixCls + '-close' }, react_default.a.createElement("span", { className: prefixCls + '-close-x' }));
            }
            var transitionName = _this.getTransitionName();
            var dialogElement = react_default.a.createElement(es_LazyRenderBox, { key: "dialog-element", role: "document", ref: function ref(el) {
                    return _this.dialogRef = el;
                }, style: props.style || {}, className: prefixCls + ' ' + (props.className || ''), visible: props.visible }, react_default.a.createElement("div", { className: prefixCls + '-content' }, closer, header, react_default.a.createElement("div", { className: prefixCls + '-body', style: props.bodyStyle, ref: function ref(el) {
                    return _this.bodyRef = el;
                } }, props.children), footer));
            return react_default.a.createElement(es_Animate, { key: "dialog", showProp: "visible", onAppear: _this.onAnimateAppear, onLeave: _this.onAnimateLeave, transitionName: transitionName, component: "", transitionAppear: true }, dialogElement);
        };
        _this.onAnimateAppear = function () {
            document.body.style.overflow = 'hidden';
        };
        _this.onAnimateLeave = function () {
            document.body.style.overflow = '';
            if (_this.wrapRef) {
                _this.wrapRef.style.display = 'none';
            }
            if (_this.props.onAnimateLeave) {
                _this.props.onAnimateLeave();
            }
            if (_this.props.afterClose) {
                _this.props.afterClose();
            }
        };
        _this.close = function (e) {
            if (_this.props.onClose) {
                _this.props.onClose(e);
            }
        };
        _this.onMaskClick = function (e) {
            if (e.target === e.currentTarget) {
                _this.close(e);
            }
        };
        return _this;
    }

    createClass_default()(Dialog, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            // fix: react@16 no dismissing animation
            document.body.style.overflow = '';
            if (this.wrapRef) {
                this.wrapRef.style.display = 'none';
            }
        }
    }, {
        key: 'getZIndexStyle',
        value: function getZIndexStyle() {
            var style = {};
            var props = this.props;
            if (props.zIndex !== undefined) {
                style.zIndex = props.zIndex;
            }
            return style;
        }
    }, {
        key: 'getWrapStyle',
        value: function getWrapStyle() {
            var wrapStyle = this.props.wrapStyle || {};
            return extends_default()({}, this.getZIndexStyle(), wrapStyle);
        }
    }, {
        key: 'getMaskStyle',
        value: function getMaskStyle() {
            var maskStyle = this.props.maskStyle || {};
            return extends_default()({}, this.getZIndexStyle(), maskStyle);
        }
    }, {
        key: 'getMaskTransitionName',
        value: function getMaskTransitionName() {
            var props = this.props;
            var transitionName = props.maskTransitionName;
            var animation = props.maskAnimation;
            if (!transitionName && animation) {
                transitionName = props.prefixCls + '-' + animation;
            }
            return transitionName;
        }
    }, {
        key: 'getTransitionName',
        value: function getTransitionName() {
            var props = this.props;
            var transitionName = props.transitionName;
            var animation = props.animation;
            if (!transitionName && animation) {
                transitionName = props.prefixCls + '-' + animation;
            }
            return transitionName;
        }
    }, {
        key: 'getMaskElement',
        value: function getMaskElement() {
            var props = this.props;
            var maskElement = void 0;
            if (props.mask) {
                var maskTransition = this.getMaskTransitionName();
                maskElement = react_default.a.createElement(es_LazyRenderBox, extends_default()({ style: this.getMaskStyle(), key: "mask-element", className: props.prefixCls + '-mask', hiddenClassName: props.prefixCls + '-mask-hidden', visible: props.visible }, props.maskProps));
                if (maskTransition) {
                    maskElement = react_default.a.createElement(es_Animate, { key: "mask", showProp: "visible", transitionAppear: true, component: "", transitionName: maskTransition }, maskElement);
                }
            }
            return maskElement;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var props = this.props;
            var prefixCls = props.prefixCls,
                maskClosable = props.maskClosable;

            var style = this.getWrapStyle();
            if (props.visible) {
                style.display = null;
            }
            return react_default.a.createElement("div", null, this.getMaskElement(), react_default.a.createElement("div", extends_default()({ className: prefixCls + '-wrap ' + (props.wrapClassName || ''), ref: function ref(el) {
                    return _this2.wrapRef = el;
                }, onClick: maskClosable ? this.onMaskClick : undefined, role: "dialog", "aria-labelledby": props.title, style: style }, props.wrapProps), this.getDialogElement()));
        }
    }]);

    return Dialog;
}(react_default.a.Component);

/* harmony default export */ var es_Dialog = (Dialog_Dialog);

Dialog_Dialog.defaultProps = {
    afterClose: Dialog_noop,
    className: '',
    mask: true,
    visible: false,
    closable: true,
    maskClosable: true,
    prefixCls: 'rmc-dialog',
    onClose: Dialog_noop
};
// CONCATENATED MODULE: ./node_modules/rmc-dialog/es/DialogWrap.js








function DialogWrap_noop() {}
var IS_REACT_16 = !!react_dom_default.a.createPortal;
var CAN_USE_DOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var DialogWrap_DialogWrap = function (_React$Component) {
    inherits_default()(DialogWrap, _React$Component);

    function DialogWrap() {
        classCallCheck_default()(this, DialogWrap);

        var _this = possibleConstructorReturn_default()(this, (DialogWrap.__proto__ || Object.getPrototypeOf(DialogWrap)).apply(this, arguments));

        _this.saveRef = function (node) {
            if (IS_REACT_16) {
                _this._component = node;
            }
        };
        _this.getComponent = function (visible) {
            var props = extends_default()({}, _this.props);
            ['visible', 'onAnimateLeave'].forEach(function (key) {
                if (props.hasOwnProperty(key)) {
                    delete props[key];
                }
            });
            return react_default.a.createElement(es_Dialog, extends_default()({}, props, { visible: visible, onAnimateLeave: _this.removeContainer, ref: _this.saveRef }));
        };
        _this.removeContainer = function () {
            if (_this.container) {
                if (!IS_REACT_16) {
                    react_dom_default.a.unmountComponentAtNode(_this.container);
                }
                _this.container.parentNode.removeChild(_this.container);
                _this.container = null;
            }
        };
        _this.getContainer = function () {
            if (!_this.container) {
                var container = document.createElement('div');
                var containerId = _this.props.prefixCls + '-container-' + new Date().getTime();
                container.setAttribute('id', containerId);
                document.body.appendChild(container);
                _this.container = container;
            }
            return _this.container;
        };
        return _this;
    }

    createClass_default()(DialogWrap, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.visible) {
                this.componentDidUpdate();
            }
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(_ref) {
            var visible = _ref.visible;

            return !!(this.props.visible || visible);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.props.visible) {
                if (!IS_REACT_16) {
                    this.renderDialog(false);
                } else {
                    // TODO for react@16 createPortal animation
                    this.removeContainer();
                }
            } else {
                this.removeContainer();
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (!IS_REACT_16) {
                this.renderDialog(this.props.visible);
            }
        }
    }, {
        key: 'renderDialog',
        value: function renderDialog(visible) {
            react_dom_default.a.unstable_renderSubtreeIntoContainer(this, this.getComponent(visible), this.getContainer());
        }
    }, {
        key: 'render',
        value: function render() {
            if (!CAN_USE_DOM) {
                return null;
            }
            var visible = this.props.visible;

            if (IS_REACT_16 && (visible || this._component)) {
                return react_dom_default.a.createPortal(this.getComponent(visible), this.getContainer());
            }
            return null;
        }
    }]);

    return DialogWrap;
}(react_default.a.Component);

/* harmony default export */ var es_DialogWrap = (DialogWrap_DialogWrap);

DialogWrap_DialogWrap.defaultProps = {
    visible: false,
    prefixCls: 'rmc-dialog',
    onClose: DialogWrap_noop
};
// CONCATENATED MODULE: ./node_modules/rmc-feedback/es/TouchFeedback.js








var TouchFeedback_TouchFeedback = function (_React$Component) {
    inherits_default()(TouchFeedback, _React$Component);

    function TouchFeedback() {
        classCallCheck_default()(this, TouchFeedback);

        var _this = possibleConstructorReturn_default()(this, (TouchFeedback.__proto__ || Object.getPrototypeOf(TouchFeedback)).apply(this, arguments));

        _this.state = {
            active: false
        };
        _this.onTouchStart = function (e) {
            _this.triggerEvent('TouchStart', true, e);
        };
        _this.onTouchMove = function (e) {
            _this.triggerEvent('TouchMove', false, e);
        };
        _this.onTouchEnd = function (e) {
            _this.triggerEvent('TouchEnd', false, e);
        };
        _this.onTouchCancel = function (e) {
            _this.triggerEvent('TouchCancel', false, e);
        };
        _this.onMouseDown = function (e) {
            // pc simulate mobile
            _this.triggerEvent('MouseDown', true, e);
        };
        _this.onMouseUp = function (e) {
            _this.triggerEvent('MouseUp', false, e);
        };
        _this.onMouseLeave = function (e) {
            _this.triggerEvent('MouseLeave', false, e);
        };
        return _this;
    }

    createClass_default()(TouchFeedback, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (this.props.disabled && this.state.active) {
                this.setState({
                    active: false
                });
            }
        }
    }, {
        key: 'triggerEvent',
        value: function triggerEvent(type, isActive, ev) {
            var eventType = 'on' + type;
            var children = this.props.children;

            if (children.props[eventType]) {
                children.props[eventType](ev);
            }
            if (isActive !== this.state.active) {
                this.setState({
                    active: isActive
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                disabled = _props.disabled,
                activeClassName = _props.activeClassName,
                activeStyle = _props.activeStyle;

            var events = disabled ? undefined : {
                onTouchStart: this.onTouchStart,
                onTouchMove: this.onTouchMove,
                onTouchEnd: this.onTouchEnd,
                onTouchCancel: this.onTouchCancel,
                onMouseDown: this.onMouseDown,
                onMouseUp: this.onMouseUp,
                onMouseLeave: this.onMouseLeave
            };
            var child = react_default.a.Children.only(children);
            if (!disabled && this.state.active) {
                var _child$props = child.props,
                    style = _child$props.style,
                    className = _child$props.className;

                if (activeStyle !== false) {
                    if (activeStyle) {
                        style = extends_default()({}, style, activeStyle);
                    }
                    className = classnames_default()(className, activeClassName);
                }
                return react_default.a.cloneElement(child, extends_default()({ className: className,
                    style: style }, events));
            }
            return react_default.a.cloneElement(child, events);
        }
    }]);

    return TouchFeedback;
}(react_default.a.Component);

/* harmony default export */ var es_TouchFeedback = (TouchFeedback_TouchFeedback);

TouchFeedback_TouchFeedback.defaultProps = {
    disabled: false
};
// CONCATENATED MODULE: ./node_modules/rmc-feedback/es/index.js

// CONCATENATED MODULE: ./node_modules/antd-mobile/es/_util/getDataAttr.js
/* harmony default export */ var getDataAttr = (function (props) {
    return Object.keys(props).reduce(function (prev, key) {
        if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
            prev[key] = props[key];
        }
        return prev;
    }, {});
});
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/badge/index.js






var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};



var badge_Badge = function (_React$Component) {
    inherits_default()(Badge, _React$Component);

    function Badge() {
        classCallCheck_default()(this, Badge);

        return possibleConstructorReturn_default()(this, (Badge.__proto__ || Object.getPrototypeOf(Badge)).apply(this, arguments));
    }

    createClass_default()(Badge, [{
        key: 'render',
        value: function render() {
            var _classnames, _classnames2;

            // tslint:disable:prefer-const
            var _a = this.props,
                className = _a.className,
                prefixCls = _a.prefixCls,
                children = _a.children,
                text = _a.text,
                size = _a.size,
                overflowCount = _a.overflowCount,
                dot = _a.dot,
                corner = _a.corner,
                hot = _a.hot,
                restProps = __rest(_a, ["className", "prefixCls", "children", "text", "size", "overflowCount", "dot", "corner", "hot"]);
            overflowCount = overflowCount;
            text = typeof text === 'number' && text > overflowCount ? overflowCount + '+' : text;
            // dot mode don't need text
            if (dot) {
                text = '';
            }
            var scrollNumberCls = classnames_default()((_classnames = {}, defineProperty_default()(_classnames, prefixCls + '-dot', dot), defineProperty_default()(_classnames, prefixCls + '-dot-large', dot && size === 'large'), defineProperty_default()(_classnames, prefixCls + '-text', !dot && !corner), defineProperty_default()(_classnames, prefixCls + '-corner', corner), defineProperty_default()(_classnames, prefixCls + '-corner-large', corner && size === 'large'), _classnames));
            var badgeCls = classnames_default()(prefixCls, className, (_classnames2 = {}, defineProperty_default()(_classnames2, prefixCls + '-not-a-wrapper', !children), defineProperty_default()(_classnames2, prefixCls + '-corner-wrapper', corner), defineProperty_default()(_classnames2, prefixCls + '-hot', !!hot), defineProperty_default()(_classnames2, prefixCls + '-corner-wrapper-large', corner && size === 'large'), _classnames2));
            return react["createElement"](
                'span',
                { className: badgeCls },
                children,
                (text || dot) &&
                // tslint:disable-next-line:jsx-no-multiline-js
                react["createElement"](
                    'sup',
                    extends_default()({ className: scrollNumberCls }, restProps),
                    text
                )
            );
        }
    }]);

    return Badge;
}(react["Component"]);

/* harmony default export */ var es_badge = (badge_Badge);

badge_Badge.defaultProps = {
    prefixCls: 'am-badge',
    size: 'small',
    overflowCount: 99,
    dot: false,
    corner: false
};
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/action-sheet/index.js


/* tslint:disable:jsx-no-multiline-js */







var NORMAL = 'NORMAL';
var SHARE = 'SHARE';
// tslint:disable-next-line:no-empty
function action_sheet_noop() {}
var queue = [];
function createActionSheet(flag, config, callback) {
    var props = extends_default()({ prefixCls: 'am-action-sheet', cancelButtonText: '取消' }, config);
    var prefixCls = props.prefixCls,
        className = props.className,
        transitionName = props.transitionName,
        maskTransitionName = props.maskTransitionName,
        _props$maskClosable = props.maskClosable,
        maskClosable = _props$maskClosable === undefined ? true : _props$maskClosable;

    var div = document.createElement('div');
    document.body.appendChild(div);
    queue.push(close);
    function close() {
        if (div) {
            react_dom["unmountComponentAtNode"](div);
            if (div.parentNode) {
                div.parentNode.removeChild(div);
            }
            var index = queue.indexOf(close);
            if (index !== -1) {
                queue.splice(index, 1);
            }
        }
    }
    function cb(index) {
        var rowIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        var res = callback(index, rowIndex);
        if (res && res.then) {
            res.then(function () {
                close();
            });
        } else {
            close();
        }
    }
    var title = props.title,
        message = props.message,
        options = props.options,
        destructiveButtonIndex = props.destructiveButtonIndex,
        cancelButtonIndex = props.cancelButtonIndex,
        cancelButtonText = props.cancelButtonText,
        _props$badges = props.badges,
        badges = _props$badges === undefined ? [] : _props$badges;

    var titleMsg = [title ? react["createElement"](
        'h3',
        { key: '0', className: prefixCls + '-title' },
        title
    ) : null, message ? react["createElement"](
        'div',
        { key: '1', className: prefixCls + '-message' },
        message
    ) : null];
    var children = null;
    var mode = 'normal';
    switch (flag) {
        case NORMAL:
            mode = 'normal';
            var normalOptions = options;
            var badgesMap = {};
            if (badges && badges.length > 0) {
                badges.forEach(function (element) {
                    if (element.index >= 0) {
                        badgesMap[element.index] = react["createElement"](es_badge, element);
                    }
                });
            }
            children = react["createElement"](
                'div',
                getDataAttr(props),
                titleMsg,
                react["createElement"](
                    'div',
                    { className: prefixCls + '-button-list', role: 'group' },
                    normalOptions.map(function (item, index) {
                        var _classnames;

                        var itemProps = {
                            className: classnames_default()(prefixCls + '-button-list-item', (_classnames = {}, defineProperty_default()(_classnames, prefixCls + '-destructive-button', destructiveButtonIndex === index), defineProperty_default()(_classnames, prefixCls + '-cancel-button', cancelButtonIndex === index), _classnames)),
                            onClick: function onClick() {
                                return cb(index);
                            },
                            role: 'button'
                        };
                        var bContent = react["createElement"](
                            'div',
                            itemProps,
                            item
                        );
                        // 仅在设置徽标的情况下修改dom结构
                        if (badgesMap[index]) {
                            bContent = react["createElement"](
                                'div',
                                extends_default()({}, itemProps, { className: itemProps.className + ' ' + prefixCls + '-button-list-badge' }),
                                react["createElement"](
                                    'span',
                                    { className: prefixCls + '-button-list-item-content' },
                                    item
                                ),
                                badgesMap[index]
                            );
                        }
                        var bItem = react["createElement"](
                            es_TouchFeedback,
                            { key: index, activeClassName: prefixCls + '-button-list-item-active' },
                            bContent
                        );
                        if (cancelButtonIndex === index || destructiveButtonIndex === index) {
                            bItem = react["createElement"](
                                es_TouchFeedback,
                                { key: index, activeClassName: prefixCls + '-button-list-item-active' },
                                react["createElement"](
                                    'div',
                                    itemProps,
                                    item,
                                    cancelButtonIndex === index ? react["createElement"]('span', { className: prefixCls + '-cancel-button-mask' }) : null
                                )
                            );
                        }
                        return bItem;
                    })
                )
            );
            break;
        case SHARE:
            mode = 'share';
            var multipleLine = options.length && Array.isArray(options[0]) || false;
            var createList = function createList(item, index) {
                var rowIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                return react["createElement"](
                    'div',
                    { className: prefixCls + '-share-list-item', role: 'button', key: index, onClick: function onClick() {
                            return cb(index, rowIndex);
                        } },
                    react["createElement"](
                        'div',
                        { className: prefixCls + '-share-list-item-icon' },
                        item.icon
                    ),
                    react["createElement"](
                        'div',
                        { className: prefixCls + '-share-list-item-title' },
                        item.title
                    )
                );
            };
            children = react["createElement"](
                'div',
                getDataAttr(props),
                titleMsg,
                react["createElement"](
                    'div',
                    { className: prefixCls + '-share' },
                    multipleLine ? options.map(function (item, index) {
                        return react["createElement"](
                            'div',
                            { key: index, className: prefixCls + '-share-list' },
                            item.map(function (ii, ind) {
                                return createList(ii, ind, index);
                            })
                        );
                    }) : react["createElement"](
                        'div',
                        { className: prefixCls + '-share-list' },
                        options.map(function (item, index) {
                            return createList(item, index);
                        })
                    ),
                    react["createElement"](
                        es_TouchFeedback,
                        { activeClassName: prefixCls + '-share-cancel-button-active' },
                        react["createElement"](
                            'div',
                            { className: prefixCls + '-share-cancel-button', role: 'button', onClick: function onClick() {
                                    return cb(-1);
                                } },
                            cancelButtonText
                        )
                    )
                )
            );
            break;
        default:
            break;
    }
    var rootCls = classnames_default()(prefixCls + '-' + mode, className);
    react_dom["render"](react["createElement"](
        es_DialogWrap,
        { visible: true, title: '', footer: '', prefixCls: prefixCls, className: rootCls, transitionName: transitionName || 'am-slide-up', maskTransitionName: maskTransitionName || 'am-fade', onClose: function onClose() {
                return cb(cancelButtonIndex || -1);
            }, maskClosable: maskClosable, wrapProps: props.wrapProps || {} },
        children
    ), div);
    return {
        close: close
    };
}
/* harmony default export */ var action_sheet = ({
    showActionSheetWithOptions: function showActionSheetWithOptions(config) {
        var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : action_sheet_noop;

        createActionSheet(NORMAL, config, callback);
    },
    showShareActionSheetWithOptions: function showShareActionSheetWithOptions(config) {
        var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : action_sheet_noop;

        createActionSheet(SHARE, config, callback);
    },
    close: function close() {
        queue.forEach(function (q) {
            return q();
        });
    }
});
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/activity-indicator/index.js





/* tslint:disable:jsx-no-multiline-js */



var activity_indicator_ActivityIndicator = function (_React$Component) {
    inherits_default()(ActivityIndicator, _React$Component);

    function ActivityIndicator() {
        classCallCheck_default()(this, ActivityIndicator);

        return possibleConstructorReturn_default()(this, (ActivityIndicator.__proto__ || Object.getPrototypeOf(ActivityIndicator)).apply(this, arguments));
    }

    createClass_default()(ActivityIndicator, [{
        key: 'render',
        value: function render() {
            var _classnames;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                className = _props.className,
                animating = _props.animating,
                toast = _props.toast,
                size = _props.size,
                text = _props.text;

            var wrapClass = classnames_default()(prefixCls, className, (_classnames = {}, defineProperty_default()(_classnames, prefixCls + '-lg', size === 'large'), defineProperty_default()(_classnames, prefixCls + '-sm', size === 'small'), defineProperty_default()(_classnames, prefixCls + '-toast', !!toast), _classnames));
            var spinnerClass = classnames_default()(prefixCls + '-spinner', defineProperty_default()({}, prefixCls + '-spinner-lg', !!toast || size === 'large'));
            if (animating) {
                if (toast) {
                    return react["createElement"](
                        'div',
                        { className: wrapClass },
                        text ? react["createElement"](
                            'div',
                            { className: prefixCls + '-content' },
                            react["createElement"]('span', { className: spinnerClass, 'aria-hidden': 'true' }),
                            react["createElement"](
                                'span',
                                { className: prefixCls + '-toast' },
                                text
                            )
                        ) : react["createElement"](
                            'div',
                            { className: prefixCls + '-content' },
                            react["createElement"]('span', { className: spinnerClass, 'aria-label': 'Loading' })
                        )
                    );
                } else {
                    return text ? react["createElement"](
                        'div',
                        { className: wrapClass },
                        react["createElement"]('span', { className: spinnerClass, 'aria-hidden': 'true' }),
                        react["createElement"](
                            'span',
                            { className: prefixCls + '-tip' },
                            text
                        )
                    ) : react["createElement"](
                        'div',
                        { className: wrapClass },
                        react["createElement"]('span', { className: spinnerClass, 'aria-label': 'loading' })
                    );
                }
            } else {
                return null;
            }
        }
    }]);

    return ActivityIndicator;
}(react["Component"]);

/* harmony default export */ var activity_indicator = (activity_indicator_ActivityIndicator);

activity_indicator_ActivityIndicator.defaultProps = {
    prefixCls: 'am-activity-indicator',
    animating: true,
    size: 'small',
    panelColor: 'rgba(34,34,34,0.6)',
    toast: false
};
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/icon/loadSprite.js
/* tslint:disable:max-line-length */
// inspried by https://github.com/kisenka/svg-sprite-loader/blob/master/runtime/browser-sprite.js
// Much simplified, do make sure run this after document ready
var svgSprite = function svgSprite(contents) {
    return '\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    xmlns:xlink="http://www.w3.org/1999/xlink"\n    id="__ANTD_MOBILE_SVG_SPRITE_NODE__"\n    style="display:none;overflow:hidden;width:0;height:0"\n  >\n    <defs>\n      ' + contents + '\n    </defs>\n  </svg>\n';
};
// both minified by https://github.com/svg/svgo
var icons = {
    check: '<svg viewBox="0 0 44 44"><path fill-rule="evenodd" d="M34.538 8L38 11.518 17.808 32 8 22.033l3.462-3.518 6.346 6.45z"/></svg>',
    'check-circle': '<svg viewBox="0 0 48 48"><path d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24zM13.1 23.2l-2.2 2.1 10 9.9L38.1 15l-2.2-2-15.2 17.8-7.6-7.6z" fill-rule="evenodd"/></svg>',
    'check-circle-o': '<svg viewBox="0 0 48 48"><g fill-rule="evenodd"><path d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24zm0-3c11.598 0 21-9.402 21-21S35.598 3 24 3 3 12.402 3 24s9.402 21 21 21z"/><path d="M12.2 23.2L10 25.3l10 9.9L37.2 15 35 13 19.8 30.8z"/></g></svg>',
    cross: '<svg viewBox="0 0 44 44"><path fill-rule="evenodd" d="M24.008 21.852l8.97-8.968L31.092 11l-8.97 8.968L13.157 11l-1.884 1.884 8.968 8.968-9.24 9.24 1.884 1.885 9.24-9.24 9.24 9.24 1.885-1.884-9.24-9.24z"/></svg>',
    'cross-circle': '<svg viewBox="0 0 48 48"><g fill-rule="evenodd"><path d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24zm0-3c11.598 0 21-9.402 21-21S35.598 3 24 3 3 12.402 3 24s9.402 21 21 21z"/><path d="M24.34 22.22l-7.775-7.775a1.5 1.5 0 1 0-2.12 2.12l7.773 7.775-7.774 7.775a1.5 1.5 0 1 0 2.12 2.12l7.775-7.773 7.774 7.774a1.5 1.5 0 1 0 2.12-2.12L26.46 24.34l7.774-7.774a1.5 1.5 0 1 0-2.12-2.12l-7.776 7.773z"/></g></svg>',
    'cross-circle-o': '<svg viewBox="0 0 48 48"><path d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24zm.353-25.77l-7.593-7.593c-.797-.8-1.538-.822-2.263-.207-.724.614-.56 1.617-.124 2.067l7.852 7.847-7.72 7.723c-.727.728-.56 1.646-.066 2.177.493.532 1.553.683 2.31-.174l7.588-7.584 7.644 7.623c.796.798 1.608.724 2.21.145.605-.58.72-1.442-.074-2.24l-7.657-7.67 7.545-7.52c.81-.697.9-1.76.297-2.34-.92-.885-1.85-.338-2.264.078l-7.685 7.667z" fill-rule="evenodd"/></svg>',
    // Todo: simplify direction to 2, use css transform
    left: '<svg viewBox="0 0 44 44"><defs><path id="a" d="M-129-845h24v24h-24z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><g clip-path="url(#b)"><defs><path id="c" d="M-903-949H947V996H-903z"/></defs></g><path d="M16.247 21.4L28.48 9.165l2.12 2.12-10.117 10.12L30.6 31.524l-2.12 2.12-12.233-12.232.007-.006z"/></svg>',
    right: '<svg viewBox="0 0 44 44"><defs><path id="a" d="M-129-845h24v24h-24z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><g clip-path="url(#b)"><defs><path id="c" d="M-903-949H947V996H-903z"/></defs></g><path d="M30.6 21.4L18.37 9.165l-2.12 2.12 10.117 10.12-10.118 10.118 2.12 2.12 12.234-12.232-.005-.006z"/></svg>',
    down: '<svg viewBox="0 0 44 44"><path d="M22.355 28.237l-11.483-10.9c-.607-.576-1.714-.396-2.48.41l.674-.71c-.763.802-.73 2.07-.282 2.496l11.37 10.793-.04.04 2.088 2.195L23.3 31.52l12.308-11.682c.447-.425.48-1.694-.282-2.496l.674.71c-.766-.806-1.873-.986-2.48-.41L22.355 28.237z" fill-rule="evenodd"/></svg>',
    up: '<svg viewBox="0 0 44 44"><path fill="none" d="M-1-1h46v46H-1z"/><defs><path id="a" d="M-129-845h24v24h-24z"/></defs><clipPath id="b"><use xlink:href="#a"/></clipPath><g clip-path="url(#b)"><defs><path id="c" d="M-903-949H947V996H-903z"/></defs></g><path d="M23.417 14.23L11.184 26.46l2.12 2.12 10.12-10.117 10.118 10.118 2.12-2.12L23.43 14.228l-.006.005z"/></svg>',
    loading: '<svg viewBox="0 -2 59.75 60.25"><path fill="#ccc" d="M29.69-.527C14.044-.527 1.36 12.158 1.36 27.806S14.043 56.14 29.69 56.14c15.65 0 28.334-12.686 28.334-28.334S45.34-.527 29.69-.527zm.185 53.75c-14.037 0-25.417-11.38-25.417-25.417S15.838 2.39 29.875 2.39s25.417 11.38 25.417 25.417-11.38 25.416-25.417 25.416z"/><path fill="none" stroke="#108ee9" stroke-width="3" stroke-linecap="round" stroke-miterlimit="10" d="M56.587 29.766c.37-7.438-1.658-14.7-6.393-19.552"/></svg>',
    search: '<svg viewBox="0 0 44 44"><path d="M32.98 29.255l8.915 8.293L39.603 40l-8.86-8.242a15.952 15.952 0 0 1-10.753 4.147C11.16 35.905 4 28.763 4 19.952 4 11.142 11.16 4 19.99 4s15.99 7.142 15.99 15.952c0 3.472-1.112 6.685-3 9.303zm.05-9.21c0 7.123-5.7 12.918-12.88 12.918-7.176 0-13.015-5.795-13.015-12.918 0-7.12 5.84-12.917 13.017-12.917 7.178 0 12.88 5.797 12.88 12.917z" fill-rule="evenodd"/></svg>',
    ellipsis: '<svg viewBox="0 0 44 44"><circle cx="21.888" cy="22" r="4.045"/><circle cx="5.913" cy="22" r="4.045"/><circle cx="37.863" cy="22" r="4.045"/></svg>',
    'ellipsis-circle': '<svg viewBox="0 0 44 44"><g fill-rule="evenodd"><path d="M22.13.11C10.05.11.255 9.902.255 21.983S10.05 43.86 22.13 43.86s21.875-9.795 21.875-21.876S34.21.11 22.13.11zm0 40.7c-10.396 0-18.825-8.43-18.825-18.826S11.735 3.16 22.13 3.16c10.396 0 18.825 8.428 18.825 18.824S32.525 40.81 22.13 40.81z"/><circle cx="21.888" cy="22.701" r="2.445"/><circle cx="12.23" cy="22.701" r="2.445"/><circle cx="31.546" cy="22.701" r="2.445"/></g></svg>',
    'exclamation-circle': '<svg viewBox="0 0 64 64"><path d="M59.58 40.89L41.193 9.11C39.135 5.382 35.723 3 31.387 3c-3.11 0-6.52 2.382-8.58 6.11L4.42 40.89c-2.788 4.635-3.126 8.81-1.225 12.22C5.015 56.208 7.572 58 13 58h36.773c5.428 0 9.21-1.792 11.03-4.89 1.9-3.41 1.565-7.583-1.224-12.22zm-2.452 11c-.635 1.694-3.802 2.443-7.354 2.443H13c-3.59 0-5.493-.75-6.13-2.444-1.71-2.41-1.374-5.263 0-8.557l18.387-31.777c2.116-3.168 4.394-4.89 6.13-4.89 2.96 0 5.238 1.722 7.354 4.89l18.387 31.777c1.374 3.294 1.713 6.146 0 8.556zm-25.74-33c-.405 0-1.227.835-1.227 2.443v15.89c0 1.608.823 2.444 1.227 2.444 1.628 0 2.452-.836 2.452-2.445v-15.89c0-1.607-.825-2.443-2.453-2.443zm0 23.22c-.405 0-1.227.79-1.227 1.223v2.445c0 .434.823 1.222 1.227 1.222 1.628 0 2.452-.788 2.452-1.222v-2.445c0-.434-.825-1.222-2.453-1.222z" fill-rule="evenodd"/></svg>',
    'info-circle': '<svg viewBox="0 0 44 44"><circle cx="13.828" cy="19.63" r="1.938"/><circle cx="21.767" cy="19.63" r="1.938"/><circle cx="29.767" cy="19.63" r="1.938"/><path d="M22.102 4.16c-9.918 0-17.958 7.147-17.958 15.962 0 4.935 2.522 9.345 6.48 12.273v5.667l.04.012a2.627 2.627 0 1 0 4.5 1.455h.002l5.026-3.54c.628.06 1.265.094 1.91.094 9.92 0 17.96-7.146 17.96-15.96C40.06 11.306 32.02 4.16 22.1 4.16zm-.04 29.902c-.902 0-1.78-.08-2.642-.207l-5.882 4.234c-.024.024-.055.04-.083.06l-.008.005a.51.51 0 0 1-.284.095.525.525 0 0 1-.525-.525l.005-6.375c-3.91-2.516-6.456-6.544-6.456-11.1 0-7.628 7.107-13.812 15.875-13.812s15.875 6.184 15.875 13.812-7.107 13.812-15.875 13.812z"/></svg>',
    'question-circle': '<svg viewBox="0 0 44 44"><g fill-rule="evenodd"><path d="M21.186 3c-10.853 0-19.36 8.506-19.36 19.358C1.827 32.494 10.334 41 21.187 41c10.133 0 18.64-8.506 18.64-18.642C39.827 11.506 31.32 3 21.187 3m15.64 19c0 8.823-7.178 16-16 16s-16-7.177-16-16 7.178-16 16-16 16 7.177 16 16z"/><path d="M22.827 31.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4-15.48c0 .957-.203 1.822-.61 2.593-.427.792-1.117 1.612-2.073 2.457-.867.734-1.453 1.435-1.754 2.096-.302.7-.453 1.693-.453 2.98a.828.828 0 0 1-.823.854.828.828 0 0 1-.584-.22.877.877 0 0 1-.24-.635c0-1.305.168-2.38.506-3.227.336-.883.93-1.682 1.78-2.4 1.01-.883 1.71-1.692 2.1-2.428.336-.645.503-1.38.503-2.21-.02-.935-.3-1.7-.85-2.288-.655-.717-1.62-1.075-2.897-1.075-1.506 0-2.596.535-3.27 1.6-.46.754-.688 1.645-.688 2.677a.92.92 0 0 1-.266.66.747.747 0 0 1-.56.25.73.73 0 0 1-.584-.194c-.16-.164-.24-.393-.24-.69 0-1.82.585-3.272 1.755-4.357C18.645 11.486 19.928 11 21.434 11h.293c1.452 0 2.638.414 3.56 1.24 1.028.903 1.54 2.163 1.54 3.78z"/></g></svg>',
    voice: '<svg viewBox="0 0 38 33"><g fill-rule="evenodd"><path d="M17.838 28.8c-.564-.468-1.192-.983-1.836-1.496-4.244-3.385-5.294-3.67-6.006-3.67-.014 0-.027.005-.04.005-.015 0-.028-.006-.042-.006H3.562c-.734 0-.903-.203-.903-.928v-12.62c0-.49.057-.8.66-.8H9.1c.694 0 1.76-.28 6.4-3.63.83-.596 1.638-1.196 2.337-1.722V28.8zM19.682.19c-.463-.22-1.014-.158-1.417.157-.02.016-1.983 1.552-4.152 3.125C10.34 6.21 9.243 6.664 9.02 6.737H3.676c-.027 0-.053.003-.08.004H1.183c-.608 0-1.1.487-1.1 1.086V25.14c0 .598.492 1.084 1.1 1.084h8.71c.22.08 1.257.55 4.605 3.24 1.947 1.562 3.694 3.088 3.712 3.103.25.22.568.333.89.333.186 0 .373-.038.55-.116.48-.213.79-.684.79-1.204V1.38c0-.506-.294-.968-.758-1.19z" mask="url(#mask-2)"/><path d="M31.42 16.475c0-3.363-1.854-6.297-4.606-7.876-.125-.067-.42-.193-.625-.193-.613 0-1.11.488-1.11 1.09 0 .404.22.764.55.952 2.13 1.19 3.566 3.44 3.566 6.024 0 2.627-1.486 4.913-3.677 6.087-.32.19-.53.54-.53.935 0 .602.495 1.09 1.106 1.09.26.002.568-.15.568-.15 2.835-1.556 4.754-4.538 4.754-7.96" mask="url(#mask-4)"/><path d="M30.14 3.057c-.205-.122-.41-.22-.658-.22-.608 0-1.1.485-1.1 1.084 0 .434.26.78.627.978 4.042 2.323 6.76 6.636 6.76 11.578 0 4.938-2.715 9.248-6.754 11.572-.354.19-.66.55-.66.993 0 .6.494 1.085 1.102 1.085.243 0 .438-.092.65-.213 4.692-2.695 7.848-7.7 7.848-13.435 0-5.723-3.142-10.718-7.817-13.418" mask="url(#mask-6)"/></g></svg>',
    plus: '<svg viewBox="0 0 30 30"><path d="M14 14H0v2h14v14h2V16h14v-2H16V0h-2v14z" fill-rule="evenodd"/></svg>',
    minus: '<svg viewBox="0 0 30 2"><path d="M0 0h30v2H0z" fill-rule="evenodd"/></svg>',
    dislike: '<svg viewBox="0 0 72 72"><g fill="none" fill-rule="evenodd"><path d="M36 72c19.882 0 36-16.118 36-36S55.882 0 36 0 0 16.118 0 36s16.118 36 36 36zm0-2c18.778 0 34-15.222 34-34S54.778 2 36 2 2 17.222 2 36s15.222 34 34 34z" fill="#FFF"/><path fill="#FFF" d="M47 22h2v6h-2zm-24 0h2v6h-2z"/><path d="M21 51s4.6-7 15-7 15 7 15 7" stroke="#FFF" stroke-width="2"/></g></svg>',
    fail: '<svg viewBox="0 0 72 72"><g fill="none" fill-rule="evenodd"><path d="M36 72c19.882 0 36-16.118 36-36S55.882 0 36 0 0 16.118 0 36s16.118 36 36 36zm0-2c18.778 0 34-15.222 34-34S54.778 2 36 2 2 17.222 2 36s15.222 34 34 34z" fill="#FFF"/><path d="M22 22l28.304 28.304m-28.304 0L50.304 22" stroke="#FFF" stroke-width="2"/></g></svg>',
    success: '<svg viewBox="0 0 72 72"><g fill="none" fill-rule="evenodd"><path d="M36 72c19.882 0 36-16.118 36-36S55.882 0 36 0 0 16.118 0 36s16.118 36 36 36zm0-2c18.778 0 34-15.222 34-34S54.778 2 36 2 2 17.222 2 36s15.222 34 34 34z" fill="#FFF"/><path stroke="#FFF" stroke-width="2" d="M19 34.54l11.545 11.923L52.815 24"/></g></svg>'
};
var renderSvgSprite = function renderSvgSprite() {
    var symbols = Object.keys(icons).map(function (iconName) {
        var svgContent = icons[iconName].split('svg')[1];
        return '<symbol id=' + iconName + svgContent + 'symbol>';
    }).join('');
    return svgSprite(symbols);
};
var loadSprite = function loadSprite() {
    if (!document) {
        return;
    }
    var existing = document.getElementById('__ANTD_MOBILE_SVG_SPRITE_NODE__');
    var mountNode = document.body;
    if (!existing) {
        mountNode.insertAdjacentHTML('afterbegin', renderSvgSprite());
    }
};
/* harmony default export */ var icon_loadSprite = (loadSprite);
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/icon/index.js





var icon_rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};




var icon_Icon = function (_React$Component) {
    inherits_default()(Icon, _React$Component);

    function Icon() {
        classCallCheck_default()(this, Icon);

        return possibleConstructorReturn_default()(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
    }

    createClass_default()(Icon, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            icon_loadSprite();
        }
    }, {
        key: 'render',
        value: function render() {
            var _a = this.props,
                type = _a.type,
                className = _a.className,
                size = _a.size,
                restProps = icon_rest(_a, ["type", "className", "size"]);
            var cls = classnames_default()(className, 'am-icon', 'am-icon-' + type, 'am-icon-' + size);
            return react["createElement"](
                'svg',
                extends_default()({ className: cls }, restProps),
                react["createElement"]('use', { xlinkHref: '#' + type })
            );
        }
    }]);

    return Icon;
}(react["Component"]);

/* harmony default export */ var es_icon = (icon_Icon);

icon_Icon.defaultProps = {
    size: 'md'
};
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/button/index.js






var button_rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};




var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isString(str) {
    return typeof str === 'string';
}
// Insert one space between two chinese characters automatically.
function insertSpace(child) {
    if (isString(child.type) && isTwoCNChar(child.props.children)) {
        return react["cloneElement"](child, {}, child.props.children.split('').join(' '));
    }
    if (isString(child)) {
        if (isTwoCNChar(child)) {
            child = child.split('').join(' ');
        }
        return react["createElement"](
            'span',
            null,
            child
        );
    }
    return child;
}

var button_Button = function (_React$Component) {
    inherits_default()(Button, _React$Component);

    function Button() {
        classCallCheck_default()(this, Button);

        return possibleConstructorReturn_default()(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    createClass_default()(Button, [{
        key: 'render',
        value: function render() {
            var _classnames;

            var _a = this.props,
                children = _a.children,
                className = _a.className,
                prefixCls = _a.prefixCls,
                type = _a.type,
                size = _a.size,
                inline = _a.inline,
                disabled = _a.disabled,
                icon = _a.icon,
                loading = _a.loading,
                activeStyle = _a.activeStyle,
                activeClassName = _a.activeClassName,
                onClick = _a.onClick,
                restProps = button_rest(_a, ["children", "className", "prefixCls", "type", "size", "inline", "disabled", "icon", "loading", "activeStyle", "activeClassName", "onClick"]);
            var iconType = loading ? 'loading' : icon;
            var wrapCls = classnames_default()(prefixCls, className, (_classnames = {}, defineProperty_default()(_classnames, prefixCls + '-primary', type === 'primary'), defineProperty_default()(_classnames, prefixCls + '-ghost', type === 'ghost'), defineProperty_default()(_classnames, prefixCls + '-warning', type === 'warning'), defineProperty_default()(_classnames, prefixCls + '-small', size === 'small'), defineProperty_default()(_classnames, prefixCls + '-inline', inline), defineProperty_default()(_classnames, prefixCls + '-disabled', disabled), defineProperty_default()(_classnames, prefixCls + '-loading', loading), defineProperty_default()(_classnames, prefixCls + '-icon', !!iconType), _classnames));
            var kids = react["Children"].map(children, insertSpace);
            var iconEl = void 0;
            if (typeof iconType === 'string') {
                iconEl = react["createElement"](es_icon, { 'aria-hidden': 'true', type: iconType, size: size === 'small' ? 'xxs' : 'md', className: prefixCls + '-icon' });
            } else if (iconType) {
                var rawCls = iconType.props && iconType.props.className;
                var cls = classnames_default()('am-icon', prefixCls + '-icon', size === 'small' ? 'am-icon-xxs' : 'am-icon-md');
                iconEl = react["cloneElement"](iconType, {
                    className: rawCls ? rawCls + ' ' + cls : cls
                });
            }
            // use div, button native is buggy @yiminghe
            return react["createElement"](
                es_TouchFeedback
                // tslint:disable-next-line:jsx-no-multiline-js
                ,
                { activeClassName: activeClassName || (activeStyle ? prefixCls + '-active' : undefined), disabled: disabled, activeStyle: activeStyle },
                react["createElement"](
                    'a',
                    extends_default()({ role: 'button', className: wrapCls }, restProps, { onClick: disabled ? undefined : onClick, 'aria-disabled': disabled }),
                    iconEl,
                    kids
                )
            );
        }
    }]);

    return Button;
}(react["Component"]);

button_Button.defaultProps = {
    prefixCls: 'am-button',
    size: 'large',
    inline: false,
    disabled: false,
    loading: false,
    activeStyle: {}
};
/* harmony default export */ var es_button = (button_Button);
// CONCATENATED MODULE: ./node_modules/rmc-picker/es/MultiPickerMixin.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function MultiPickerMixin_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MultiPickerMixin_createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function MultiPickerMixin_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function MultiPickerMixin_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/* harmony default export */ var MultiPickerMixin = (function (ComposedComponent) {
  var _a;

  return _a =
  /*#__PURE__*/
  function (_React$Component) {
    MultiPickerMixin_inherits(_a, _React$Component);

    function _a() {
      var _this;

      MultiPickerMixin_classCallCheck(this, _a);

      _this = MultiPickerMixin_possibleConstructorReturn(this, _getPrototypeOf(_a).apply(this, arguments));

      _this.getValue = function () {
        var _this$props = _this.props,
            children = _this$props.children,
            selectedValue = _this$props.selectedValue;

        if (selectedValue && selectedValue.length) {
          return selectedValue;
        } else {
          if (!children) {
            return [];
          }

          return react["Children"].map(children, function (c) {
            var cc = react["Children"].toArray(c.children || c.props.children);
            return cc && cc[0] && cc[0].props.value;
          });
        }
      };

      _this.onChange = function (i, v, cb) {
        var value = _this.getValue().concat();

        value[i] = v;

        if (cb) {
          cb(value, i);
        }
      };

      _this.onValueChange = function (i, v) {
        _this.onChange(i, v, _this.props.onValueChange);
      };

      _this.onScrollChange = function (i, v) {
        _this.onChange(i, v, _this.props.onScrollChange);
      };

      return _this;
    }

    MultiPickerMixin_createClass(_a, [{
      key: "render",
      value: function render() {
        return react["createElement"](ComposedComponent, _extends({}, this.props, {
          getValue: this.getValue,
          onValueChange: this.onValueChange,
          onScrollChange: this.props.onScrollChange && this.onScrollChange
        }));
      }
    }]);

    return _a;
  }(react["Component"]), _a.defaultProps = {
    prefixCls: 'rmc-multi-picker',
    onValueChange: function onValueChange() {}
  }, _a;
});
;
// CONCATENATED MODULE: ./node_modules/rmc-picker/es/MultiPicker.js
function MultiPicker_extends() { MultiPicker_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return MultiPicker_extends.apply(this, arguments); }





var MultiPicker_MultiPicker = function MultiPicker(props) {
  var prefixCls = props.prefixCls,
      className = props.className,
      rootNativeProps = props.rootNativeProps,
      children = props.children,
      style = props.style;
  var selectedValue = props.getValue();
  var colElements = react["Children"].map(children, function (col, i) {
    return react["cloneElement"](col, {
      selectedValue: selectedValue[i],
      onValueChange: function onValueChange() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return props.onValueChange.apply(props, [i].concat(args));
      },
      onScrollChange: props.onScrollChange && function () {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return props.onScrollChange.apply(props, [i].concat(args));
      }
    });
  });
  return react["createElement"]("div", MultiPicker_extends({}, rootNativeProps, {
    style: style,
    className: classnames_default()(className, prefixCls)
  }), colElements);
};

/* harmony default export */ var es_MultiPicker = (MultiPickerMixin(MultiPicker_MultiPicker));
// EXTERNAL MODULE: ./node_modules/rmc-picker/lib/Picker.js
var lib_Picker = __webpack_require__("+oAO");
var Picker_default = /*#__PURE__*/__webpack_require__.n(lib_Picker);

// CONCATENATED MODULE: ./node_modules/rmc-date-picker/es/locale/en_US.js
/* harmony default export */ var en_US = ({
    year: '',
    month: '',
    day: '',
    hour: '',
    minute: '',
    am: 'AM',
    pm: 'PM'
});
// CONCATENATED MODULE: ./node_modules/rmc-date-picker/es/DatePicker.js









function getDaysInMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}
function pad(n) {
    return n < 10 ? '0' + n : n + '';
}
function cloneDate(date) {
    return new Date(+date);
}
function setMonth(date, month) {
    date.setDate(Math.min(date.getDate(), getDaysInMonth(new Date(date.getFullYear(), month))));
    date.setMonth(month);
}
var DATETIME = 'datetime';
var DATE = 'date';
var TIME = 'time';
var MONTH = 'month';
var YEAR = 'year';
var ONE_DAY = 24 * 60 * 60 * 1000;

var DatePicker_DatePicker = function (_React$Component) {
    inherits_default()(DatePicker, _React$Component);

    function DatePicker() {
        classCallCheck_default()(this, DatePicker);

        var _this = possibleConstructorReturn_default()(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).apply(this, arguments));

        _this.state = {
            date: _this.props.date || _this.props.defaultDate
        };
        _this.getNewDate = function (values, index) {
            var value = parseInt(values[index], 10);
            var props = _this.props;
            var mode = props.mode;

            var newValue = cloneDate(_this.getDate());
            if (mode === DATETIME || mode === DATE || mode === YEAR || mode === MONTH) {
                switch (index) {
                    case 0:
                        newValue.setFullYear(value);
                        break;
                    case 1:
                                                                        setMonth(newValue, value);
                        break;
                    case 2:
                        newValue.setDate(value);
                        break;
                    case 3:
                        _this.setHours(newValue, value);
                        break;
                    case 4:
                        newValue.setMinutes(value);
                        break;
                    case 5:
                        _this.setAmPm(newValue, value);
                        break;
                    default:
                        break;
                }
            } else if (mode === TIME) {
                switch (index) {
                    case 0:
                        _this.setHours(newValue, value);
                        break;
                    case 1:
                        newValue.setMinutes(value);
                        break;
                    case 2:
                        _this.setAmPm(newValue, value);
                        break;
                    default:
                        break;
                }
            }
            return _this.clipDate(newValue);
        };
        _this.onValueChange = function (values, index) {
            var props = _this.props;
            var newValue = _this.getNewDate(values, index);
            if (!('date' in props)) {
                _this.setState({
                    date: newValue
                });
            }
            if (props.onDateChange) {
                props.onDateChange(newValue);
            }
            if (props.onValueChange) {
                props.onValueChange(values, index);
            }
        };
        _this.onScrollChange = function (values, index) {
            var props = _this.props;
            if (props.onScrollChange) {
                var newValue = _this.getNewDate(values, index);
                props.onScrollChange(newValue, values, index);
            }
        };
        return _this;
    }

    createClass_default()(DatePicker, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('date' in nextProps) {
                this.setState({
                    date: nextProps.date || nextProps.defaultDate
                });
            }
        }
    }, {
        key: 'setHours',
        value: function setHours(date, hour) {
            if (this.props.use12Hours) {
                var dh = date.getHours();
                var nhour = hour;
                nhour = dh >= 12 ? hour + 12 : hour;
                nhour = nhour >= 24 ? 0 : nhour;                 date.setHours(nhour);
            } else {
                date.setHours(hour);
            }
        }
    }, {
        key: 'setAmPm',
        value: function setAmPm(date, index) {
            if (index === 0) {
                date.setTime(+date - ONE_DAY / 2);
            } else {
                date.setTime(+date + ONE_DAY / 2);
            }
        }
    }, {
        key: 'getDefaultMinDate',
        value: function getDefaultMinDate() {
            if (!this.defaultMinDate) {
                this.defaultMinDate = new Date(2000, 1, 1, 0, 0, 0);
            }
            return this.defaultMinDate;
        }
    }, {
        key: 'getDefaultMaxDate',
        value: function getDefaultMaxDate() {
            if (!this.defaultMaxDate) {
                this.defaultMaxDate = new Date(2030, 1, 1, 23, 59, 59);
            }
            return this.defaultMaxDate;
        }
    }, {
        key: 'getDate',
        value: function getDate() {
            return this.clipDate(this.state.date || this.getDefaultMinDate());
        }
        
    }, {
        key: 'getValue',
        value: function getValue() {
            return this.getDate();
        }
    }, {
        key: 'getMinYear',
        value: function getMinYear() {
            return this.getMinDate().getFullYear();
        }
    }, {
        key: 'getMaxYear',
        value: function getMaxYear() {
            return this.getMaxDate().getFullYear();
        }
    }, {
        key: 'getMinMonth',
        value: function getMinMonth() {
            return this.getMinDate().getMonth();
        }
    }, {
        key: 'getMaxMonth',
        value: function getMaxMonth() {
            return this.getMaxDate().getMonth();
        }
    }, {
        key: 'getMinDay',
        value: function getMinDay() {
            return this.getMinDate().getDate();
        }
    }, {
        key: 'getMaxDay',
        value: function getMaxDay() {
            return this.getMaxDate().getDate();
        }
    }, {
        key: 'getMinHour',
        value: function getMinHour() {
            return this.getMinDate().getHours();
        }
    }, {
        key: 'getMaxHour',
        value: function getMaxHour() {
            return this.getMaxDate().getHours();
        }
    }, {
        key: 'getMinMinute',
        value: function getMinMinute() {
            return this.getMinDate().getMinutes();
        }
    }, {
        key: 'getMaxMinute',
        value: function getMaxMinute() {
            return this.getMaxDate().getMinutes();
        }
    }, {
        key: 'getMinDate',
        value: function getMinDate() {
            return this.props.minDate || this.getDefaultMinDate();
        }
    }, {
        key: 'getMaxDate',
        value: function getMaxDate() {
            return this.props.maxDate || this.getDefaultMaxDate();
        }
    }, {
        key: 'getDateData',
        value: function getDateData() {
            var _props = this.props,
                locale = _props.locale,
                formatMonth = _props.formatMonth,
                formatDay = _props.formatDay,
                mode = _props.mode;

            var date = this.getDate();
            var selYear = date.getFullYear();
            var selMonth = date.getMonth();
            var minDateYear = this.getMinYear();
            var maxDateYear = this.getMaxYear();
            var minDateMonth = this.getMinMonth();
            var maxDateMonth = this.getMaxMonth();
            var minDateDay = this.getMinDay();
            var maxDateDay = this.getMaxDay();
            var years = [];
            for (var i = minDateYear; i <= maxDateYear; i++) {
                years.push({
                    value: i + '',
                    label: i + locale.year + ''
                });
            }
            var yearCol = { key: 'year', props: { children: years } };
            if (mode === YEAR) {
                return [yearCol];
            }
            var months = [];
            var minMonth = 0;
            var maxMonth = 11;
            if (minDateYear === selYear) {
                minMonth = minDateMonth;
            }
            if (maxDateYear === selYear) {
                maxMonth = maxDateMonth;
            }
            for (var _i = minMonth; _i <= maxMonth; _i++) {
                var label = formatMonth ? formatMonth(_i, date) : _i + 1 + locale.month + '';
                months.push({
                    value: _i + '',
                    label: label
                });
            }
            var monthCol = { key: 'month', props: { children: months } };
            if (mode === MONTH) {
                return [yearCol, monthCol];
            }
            var days = [];
            var minDay = 1;
            var maxDay = getDaysInMonth(date);
            if (minDateYear === selYear && minDateMonth === selMonth) {
                minDay = minDateDay;
            }
            if (maxDateYear === selYear && maxDateMonth === selMonth) {
                maxDay = maxDateDay;
            }
            for (var _i2 = minDay; _i2 <= maxDay; _i2++) {
                var _label = formatDay ? formatDay(_i2, date) : _i2 + locale.day + '';
                days.push({
                    value: _i2 + '',
                    label: _label
                });
            }
            return [yearCol, monthCol, { key: 'day', props: { children: days } }];
        }
    }, {
        key: 'getDisplayHour',
        value: function getDisplayHour(rawHour) {
                        if (this.props.use12Hours) {
                if (rawHour === 0) {
                    rawHour = 12;
                }
                if (rawHour > 12) {
                    rawHour -= 12;
                }
                return rawHour;
            }
            return rawHour;
        }
    }, {
        key: 'getTimeData',
        value: function getTimeData(date) {
            var _props2 = this.props,
                _props2$minHour = _props2.minHour,
                minHour = _props2$minHour === undefined ? 0 : _props2$minHour,
                _props2$maxHour = _props2.maxHour,
                maxHour = _props2$maxHour === undefined ? 23 : _props2$maxHour,
                _props2$minMinute = _props2.minMinute,
                minMinute = _props2$minMinute === undefined ? 0 : _props2$minMinute,
                _props2$maxMinute = _props2.maxMinute,
                maxMinute = _props2$maxMinute === undefined ? 59 : _props2$maxMinute;
            var _props3 = this.props,
                mode = _props3.mode,
                locale = _props3.locale,
                minuteStep = _props3.minuteStep,
                use12Hours = _props3.use12Hours;

            var minDateMinute = this.getMinMinute();
            var maxDateMinute = this.getMaxMinute();
            var minDateHour = this.getMinHour();
            var maxDateHour = this.getMaxHour();
            var hour = date.getHours();
            if (mode === DATETIME) {
                var year = date.getFullYear();
                var month = date.getMonth();
                var day = date.getDate();
                var minDateYear = this.getMinYear();
                var maxDateYear = this.getMaxYear();
                var minDateMonth = this.getMinMonth();
                var maxDateMonth = this.getMaxMonth();
                var minDateDay = this.getMinDay();
                var maxDateDay = this.getMaxDay();
                if (minDateYear === year && minDateMonth === month && minDateDay === day) {
                    minHour = minDateHour;
                    if (minDateHour === hour) {
                        minMinute = minDateMinute;
                    }
                }
                if (maxDateYear === year && maxDateMonth === month && maxDateDay === day) {
                    maxHour = maxDateHour;
                    if (maxDateHour === hour) {
                        maxMinute = maxDateMinute;
                    }
                }
            } else {
                minHour = minDateHour;
                if (minDateHour === hour) {
                    minMinute = minDateMinute;
                }
                maxHour = maxDateHour;
                if (maxDateHour === hour) {
                    maxMinute = maxDateMinute;
                }
            }
            var hours = [];
            if (minHour === 0 && maxHour === 0 || minHour !== 0 && maxHour !== 0) {
                minHour = this.getDisplayHour(minHour);
            } else if (minHour === 0 && use12Hours) {
                minHour = 1;
                hours.push({ value: '0', label: locale.hour ? '12' + locale.hour : '12' });
            }
            maxHour = this.getDisplayHour(maxHour);
            for (var i = minHour; i <= maxHour; i++) {
                hours.push({
                    value: i + '',
                    label: locale.hour ? i + locale.hour + '' : pad(i)
                });
            }
            var minutes = [];
            var selMinute = date.getMinutes();
            for (var _i3 = minMinute; _i3 <= maxMinute; _i3 += minuteStep) {
                minutes.push({
                    value: _i3 + '',
                    label: locale.minute ? _i3 + locale.minute + '' : pad(_i3)
                });
                if (selMinute > _i3 && selMinute < _i3 + minuteStep) {
                    minutes.push({
                        value: selMinute + '',
                        label: locale.minute ? selMinute + locale.minute + '' : pad(selMinute)
                    });
                }
            }
            var cols = [{ key: 'hours', props: { children: hours } }, { key: 'minutes', props: { children: minutes } }].concat(use12Hours ? [{
                key: 'ampm',
                props: { children: [{ value: '0', label: locale.am }, { value: '1', label: locale.pm }] }
            }] : []);
            return { cols: cols, selMinute: selMinute };
        }
    }, {
        key: 'clipDate',
        value: function clipDate(date) {
            var mode = this.props.mode;

            var minDate = this.getMinDate();
            var maxDate = this.getMaxDate();
            if (mode === DATETIME) {
                if (date < minDate) {
                    return cloneDate(minDate);
                }
                if (date > maxDate) {
                    return cloneDate(maxDate);
                }
            } else if (mode === DATE || mode === YEAR || mode === MONTH) {
                                if (+date + ONE_DAY <= minDate) {
                    return cloneDate(minDate);
                }
                if (date >= +maxDate + ONE_DAY) {
                    return cloneDate(maxDate);
                }
            } else if (mode === TIME) {
                var maxHour = maxDate.getHours();
                var maxMinutes = maxDate.getMinutes();
                var minHour = minDate.getHours();
                var minMinutes = minDate.getMinutes();
                var hour = date.getHours();
                var minutes = date.getMinutes();
                if (hour < minHour || hour === minHour && minutes < minMinutes) {
                    return cloneDate(minDate);
                }
                if (hour > maxHour || hour === maxHour && minutes > maxMinutes) {
                    return cloneDate(maxDate);
                }
            }
            return date;
        }
    }, {
        key: 'getValueCols',
        value: function getValueCols() {
            var _props4 = this.props,
                mode = _props4.mode,
                use12Hours = _props4.use12Hours;

            var date = this.getDate();
            var cols = [];
            var value = [];
            if (mode === YEAR) {
                return {
                    cols: this.getDateData(),
                    value: [date.getFullYear() + '']
                };
            }
            if (mode === MONTH) {
                return {
                    cols: this.getDateData(),
                    value: [date.getFullYear() + '', date.getMonth() + '']
                };
            }
            if (mode === DATETIME || mode === DATE) {
                cols = this.getDateData();
                value = [date.getFullYear() + '', date.getMonth() + '', date.getDate() + ''];
            }
            if (mode === DATETIME || mode === TIME) {
                var time = this.getTimeData(date);
                cols = cols.concat(time.cols);
                var hour = date.getHours();
                var dtValue = [hour + '', time.selMinute + ''];
                var nhour = hour;
                if (use12Hours) {
                    nhour = hour > 12 ? hour - 12 : hour;
                    dtValue = [nhour + '', time.selMinute + '', (hour >= 12 ? 1 : 0) + ''];
                }
                value = value.concat(dtValue);
            }
            return {
                value: value,
                cols: cols
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var _getValueCols = this.getValueCols(),
                value = _getValueCols.value,
                cols = _getValueCols.cols;

            var _props5 = this.props,
                disabled = _props5.disabled,
                pickerPrefixCls = _props5.pickerPrefixCls,
                prefixCls = _props5.prefixCls,
                rootNativeProps = _props5.rootNativeProps,
                className = _props5.className,
                style = _props5.style,
                itemStyle = _props5.itemStyle;

            var multiStyle = extends_default()({ flexDirection: 'row', alignItems: 'center' }, style);
            return react_default.a.createElement(es_MultiPicker, { style: multiStyle, rootNativeProps: rootNativeProps, className: className, prefixCls: prefixCls, selectedValue: value, onValueChange: this.onValueChange, onScrollChange: this.onScrollChange }, cols.map(function (p) {
                return react_default.a.createElement(Picker_default.a, { style: { flex: 1 }, key: p.key, disabled: disabled, prefixCls: pickerPrefixCls, itemStyle: itemStyle }, p.props.children.map(function (item) {
                    return react_default.a.createElement(Picker_default.a.Item, { key: item.value, value: item.value }, item.label);
                }));
            }));
        }
    }]);

    return DatePicker;
}(react_default.a.Component);

DatePicker_DatePicker.defaultProps = {
    prefixCls: 'rmc-date-picker',
    pickerPrefixCls: 'rmc-picker',
    locale: en_US,
    mode: DATE,
    disabled: false,
    minuteStep: 1,
    onDateChange: function onDateChange() {},

    use12Hours: false
};
/* harmony default export */ var es_DatePicker = (DatePicker_DatePicker);
// CONCATENATED MODULE: ./node_modules/rmc-date-picker/es/index.js

// CONCATENATED MODULE: ./node_modules/rmc-calendar/es/TimePicker.js






var TimePicker_TimePicker = function (_React$PureComponent) {
    inherits_default()(TimePicker, _React$PureComponent);

    function TimePicker() {
        classCallCheck_default()(this, TimePicker);

        var _this = possibleConstructorReturn_default()(this, _React$PureComponent.apply(this, arguments));

        _this.onDateChange = function (date) {
            var onValueChange = _this.props.onValueChange;

            onValueChange && onValueChange(date);
        };
        return _this;
    }

    TimePicker.prototype.getMinTime = function getMinTime(date) {
        var minDate = this.props.minDate;
        if (!date || date.getFullYear() > minDate.getFullYear() || date.getMonth() > minDate.getMonth() || date.getDate() > minDate.getDate()) {
            return TimePicker.defaultProps.minDate;
        }
        return minDate;
    };

    TimePicker.prototype.getMaxTime = function getMaxTime(date) {
        var maxDate = this.props.maxDate;
        if (!date || date.getFullYear() < maxDate.getFullYear() || date.getMonth() < maxDate.getMonth() || date.getDate() < maxDate.getDate()) {
            return TimePicker.defaultProps.maxDate;
        }
        return maxDate;
    };

    TimePicker.prototype.render = function render() {
        var _props = this.props,
            locale = _props.locale,
            title = _props.title,
            value = _props.value,
            defaultValue = _props.defaultValue,
            prefixCls = _props.prefixCls,
            pickerPrefixCls = _props.pickerPrefixCls,
            clientHeight = _props.clientHeight;

        var date = value || defaultValue || undefined;
        var height = clientHeight && clientHeight * 3 / 8 - 52 || Number.POSITIVE_INFINITY;
        return react_default.a.createElement(
            'div',
            { className: 'time-picker' },
            react_default.a.createElement(
                'div',
                { className: 'title' },
                title
            ),
            react_default.a.createElement(es_DatePicker, { prefixCls: prefixCls, pickerPrefixCls: pickerPrefixCls, style: {
                    height: height > 164 || height < 0 ? 164 : height,
                    overflow: 'hidden'
                }, mode: 'time', date: date, locale: locale, minDate: this.getMinTime(date), maxDate: this.getMaxTime(date), onDateChange: this.onDateChange, use12Hours: true })
        );
    };

    return TimePicker;
}(react_default.a.PureComponent);

/* harmony default export */ var es_TimePicker = (TimePicker_TimePicker);

TimePicker_TimePicker.defaultProps = {
    minDate: new Date(0, 0, 0, 0, 0),
    maxDate: new Date(9999, 11, 31, 23, 59, 59),
    defaultValue: new Date(2000, 1, 1, 8)
};
// CONCATENATED MODULE: ./node_modules/rmc-calendar/es/date/DataTypes.js
var Models;
(function (Models) {
    var SelectType = void 0;
    (function (SelectType) {
        SelectType[SelectType["None"] = 0] = "None";
        /** 单选 */
        SelectType[SelectType["Single"] = 1] = "Single";
        /** 起/止 */
        SelectType[SelectType["All"] = 2] = "All";
        /** 区间仅选择了 起 */
        SelectType[SelectType["Only"] = 3] = "Only";
        /** 区间起 */
        SelectType[SelectType["Start"] = 4] = "Start";
        /** 区间中 */
        SelectType[SelectType["Middle"] = 5] = "Middle";
        /** 区间止 */
        SelectType[SelectType["End"] = 6] = "End";
    })(SelectType = Models.SelectType || (Models.SelectType = {}));
})(Models || (Models = {}));
// CONCATENATED MODULE: ./node_modules/rmc-calendar/es/util/index.js
var mergeDateTime = function mergeDateTime(date, time) {
    date = date || new Date();
    if (!time) return date;
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.getHours(), time.getMinutes(), time.getSeconds());
};
var util_formatDate = function formatDate(date, format, locale) {
    var week = locale && locale.week;
    var o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'q+': Math.floor((date.getMonth() + 3) / 3),
        'w+': week && week[date.getDay()],
        'S': date.getMilliseconds()
    };
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    for (var k in o) {
        if (new RegExp('(' + k + ')').test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
        }
    }
    return format;
};
var util_hasOwnProperty = Object.prototype.hasOwnProperty;
function is(x, y) {
    if (x === y) {
        return x !== 0 || y !== 0 || 1 / x === 1 / y;
    } else {
        return x !== x && y !== y;
    }
}
function shallowEqual(objA, objB) {
    var exclude = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    if (is(objA, objB)) {
        return true;
    }
    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
        return false;
    }
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
        return false;
    }
    for (var i = 0; i < keysA.length; i++) {
        if (exclude.indexOf(keysA[i]) >= 0) continue;
        if (!util_hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
            return false;
        }
    }
    return true;
}
// EXTERNAL MODULE: ./node_modules/rmc-calendar/es/locale/zh_CN.js
var zh_CN = __webpack_require__("GqFC");

// CONCATENATED MODULE: ./node_modules/rmc-calendar/es/DatePicker.base.js








var DatePicker_base_DatePicker = function (_React$Component) {
    inherits_default()(DatePicker, _React$Component);

    function DatePicker(props) {
        classCallCheck_default()(this, DatePicker);

        var _this = possibleConstructorReturn_default()(this, _React$Component.call(this, props));

        _this.visibleMonth = [];
        _this.getDateWithoutTime = function (date) {
            if (!date) return 0;
            return +new Date(date.getFullYear(), date.getMonth(), date.getDate());
        };
        _this.genWeekData = function (firstDate) {
            var minDateTime = _this.getDateWithoutTime(_this.props.minDate);
            var maxDateTime = _this.getDateWithoutTime(_this.props.maxDate) || Number.POSITIVE_INFINITY;
            var weeks = [];
            var nextMonth = _this.getMonthDate(firstDate, 1).firstDate;
            var currentDay = firstDate;
            var currentWeek = [];
            weeks.push(currentWeek);
            var startWeekday = currentDay.getDay();
            if (startWeekday > 0) {
                for (var i = 0; i < startWeekday; i++) {
                    currentWeek.push({});
                }
            }
            while (currentDay < nextMonth) {
                if (currentWeek.length === 7) {
                    currentWeek = [];
                    weeks.push(currentWeek);
                }
                var dayOfMonth = currentDay.getDate();
                var tick = +currentDay;
                currentWeek.push({
                    tick: tick,
                    dayOfMonth: dayOfMonth,
                    selected: Models.SelectType.None,
                    isFirstOfMonth: dayOfMonth === 1,
                    isLastOfMonth: false,
                    outOfDate: tick < minDateTime || tick > maxDateTime
                });
                currentDay = new Date(currentDay.getTime() + 3600 * 24 * 1000);
            }
            currentWeek[currentWeek.length - 1].isLastOfMonth = true;
            return weeks;
        };
        _this.selectDateRange = function (startDate, endDate) {
            var clear = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var _this$props = _this.props,
                getDateExtra = _this$props.getDateExtra,
                type = _this$props.type,
                onSelectHasDisableDate = _this$props.onSelectHasDisableDate;

            if (type === 'one') {
                endDate = undefined;
            }
            var time1 = _this.getDateWithoutTime(startDate),
                time2 = _this.getDateWithoutTime(endDate);
            var startDateTick = !time2 || time1 < time2 ? time1 : time2;
            var endDateTick = time2 && time1 > time2 ? time1 : time2;
            var startMonthDate = _this.getMonthDate(new Date(startDateTick)).firstDate;
            var endMonthDate = endDateTick ? new Date(endDateTick) : _this.getMonthDate(new Date(startDateTick)).lastDate;
            var unuseable = [],
                needUpdate = false;
            _this.state.months.filter(function (m) {
                return m.firstDate >= startMonthDate && m.firstDate <= endMonthDate;
            }).forEach(function (m) {
                m.weeks.forEach(function (w) {
                    return w.filter(function (d) {
                        if (!endDateTick) {
                            return d.tick && _this.inDate(startDateTick, d.tick);
                        } else {
                            return d.tick && d.tick >= startDateTick && d.tick <= endDateTick;
                        }
                    }).forEach(function (d) {
                        var oldValue = d.selected;
                        if (clear) {
                            d.selected = Models.SelectType.None;
                        } else {
                            var info = getDateExtra && getDateExtra(new Date(d.tick)) || {};
                            if (d.outOfDate || info.disable) {
                                unuseable.push(d.tick);
                            }
                            if (_this.inDate(startDateTick, d.tick)) {
                                if (type === 'one') {
                                    d.selected = Models.SelectType.Single;
                                } else if (!endDateTick) {
                                    d.selected = Models.SelectType.Only;
                                } else if (startDateTick !== endDateTick) {
                                    d.selected = Models.SelectType.Start;
                                } else {
                                    d.selected = Models.SelectType.All;
                                }
                            } else if (_this.inDate(endDateTick, d.tick)) {
                                d.selected = Models.SelectType.End;
                            } else {
                                d.selected = Models.SelectType.Middle;
                            }
                        }
                        needUpdate = needUpdate || d.selected !== oldValue;
                    });
                });
                if (needUpdate && m.componentRef) {
                    m.componentRef.updateWeeks();
                    m.componentRef.forceUpdate();
                }
                ;
            });
            if (unuseable.length > 0) {
                if (onSelectHasDisableDate) {
                    onSelectHasDisableDate(unuseable.map(function (tick) {
                        return new Date(tick);
                    }));
                } else {
                    console.warn('Unusable date. You can handle by onSelectHasDisableDate.', unuseable);
                }
            }
        };
        _this.computeVisible = function (clientHeight, scrollTop) {
            var needUpdate = false;
            var MAX_VIEW_PORT = clientHeight * 2;
            var MIN_VIEW_PORT = clientHeight;
            // 大缓冲区外过滤规则
            var filterFunc = function filterFunc(vm) {
                return vm.y && vm.height && vm.y + vm.height > scrollTop - MAX_VIEW_PORT && vm.y < scrollTop + clientHeight + MAX_VIEW_PORT;
            };
            if (_this.props.infiniteOpt && _this.visibleMonth.length > 12) {
                _this.visibleMonth = _this.visibleMonth.filter(filterFunc).sort(function (a, b) {
                    return +a.firstDate - +b.firstDate;
                });
            }
            // 当小缓冲区不满时填充
            if (_this.visibleMonth.length > 0) {
                var last = _this.visibleMonth[_this.visibleMonth.length - 1];
                if (last.y !== undefined && last.height && last.y + last.height < scrollTop + clientHeight + MIN_VIEW_PORT) {
                    var lastIndex = _this.state.months.indexOf(last);
                    for (var i = 1; i <= 2; i++) {
                        var index = lastIndex + i;
                        if (index < _this.state.months.length && _this.visibleMonth.indexOf(_this.state.months[index]) < 0) {
                            _this.visibleMonth.push(_this.state.months[index]);
                        } else {
                            _this.canLoadNext() && _this.genMonthData(undefined, 1);
                        }
                    }
                    needUpdate = true;
                }
                var first = _this.visibleMonth[0];
                if (first.y !== undefined && first.height && first.y > scrollTop - MIN_VIEW_PORT) {
                    var firstIndex = _this.state.months.indexOf(first);
                    for (var _i = 1; _i <= 2; _i++) {
                        var _index = firstIndex - _i;
                        if (_index >= 0 && _this.visibleMonth.indexOf(_this.state.months[_index]) < 0) {
                            _this.visibleMonth.unshift(_this.state.months[_index]);
                            needUpdate = true;
                        }
                    }
                }
            } else if (_this.state.months.length > 0) {
                _this.visibleMonth = _this.state.months.filter(filterFunc);
                needUpdate = true;
            }
            return needUpdate;
        };
        _this.createOnScroll = function () {
            var timer = void 0;
            var clientHeight = 0,
                scrollTop = 0;
            return function (data) {
                var client = data.client,
                    top = data.top;

                clientHeight = client;
                scrollTop = top;
                if (timer) {
                    return;
                }
                timer = setTimeout(function () {
                    timer = undefined;
                    if (_this.computeVisible(clientHeight, scrollTop)) {
                        _this.forceUpdate();
                    }
                }, 64);
            };
        };
        _this.onCellClick = function (day) {
            if (!day.tick) return;
            _this.props.onCellClick && _this.props.onCellClick(new Date(day.tick));
        };
        _this.state = {
            months: []
        };
        return _this;
    }

    DatePicker.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState, nextContext) {
        return !shallowEqual(this.props, nextProps, ['startDate', 'endDate']) || !shallowEqual(this.state, nextState) || !shallowEqual(this.context, nextContext);
    };

    DatePicker.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        var oldValue = this.props;
        var newValue = nextProps;
        if (oldValue.startDate !== newValue.startDate || oldValue.endDate !== newValue.endDate) {
            if (oldValue.startDate) {
                this.selectDateRange(oldValue.startDate, oldValue.endDate, true);
            }
            if (newValue.startDate) {
                this.selectDateRange(newValue.startDate, newValue.endDate);
            }
        }
    };

    DatePicker.prototype.componentWillMount = function componentWillMount() {
        var _props = this.props,
            _props$initalMonths = _props.initalMonths,
            initalMonths = _props$initalMonths === undefined ? 6 : _props$initalMonths,
            defaultDate = _props.defaultDate;

        for (var i = 0; i < initalMonths; i++) {
            this.canLoadNext() && this.genMonthData(defaultDate, i);
        }
        this.visibleMonth = [].concat(this.state.months);
    };

    DatePicker.prototype.getMonthDate = function getMonthDate() {
        var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
        var addMonth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        var y = date.getFullYear(),
            m = date.getMonth();
        return {
            firstDate: new Date(y, m + addMonth, 1),
            lastDate: new Date(y, m + 1 + addMonth, 0)
        };
    };

    DatePicker.prototype.canLoadPrev = function canLoadPrev() {
        var minDate = this.props.minDate;

        return !minDate || this.state.months.length <= 0 || +this.getMonthDate(minDate).firstDate < +this.state.months[0].firstDate;
    };

    DatePicker.prototype.canLoadNext = function canLoadNext() {
        var maxDate = this.props.maxDate;

        return !maxDate || this.state.months.length <= 0 || +this.getMonthDate(maxDate).firstDate > +this.state.months[this.state.months.length - 1].firstDate;
    };

    DatePicker.prototype.genMonthData = function genMonthData(date) {
        var addMonth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        if (!date) {
            date = addMonth >= 0 ? this.state.months[this.state.months.length - 1].firstDate : this.state.months[0].firstDate;
        }
        if (!date) {
            date = new Date();
        }
        var locale = this.props.locale;

        var _getMonthDate = this.getMonthDate(date, addMonth),
            firstDate = _getMonthDate.firstDate,
            lastDate = _getMonthDate.lastDate;

        var weeks = this.genWeekData(firstDate);
        var title = util_formatDate(firstDate, locale ? locale.monthTitle : 'yyyy/MM', this.props.locale);
        var data = {
            title: title,
            firstDate: firstDate,
            lastDate: lastDate,
            weeks: weeks
        };
        data.component = this.genMonthComponent(data);
        if (addMonth >= 0) {
            this.state.months.push(data);
        } else {
            this.state.months.unshift(data);
        }
        var _props2 = this.props,
            startDate = _props2.startDate,
            endDate = _props2.endDate;

        if (startDate) {
            this.selectDateRange(startDate, endDate);
        }
        return data;
    };

    DatePicker.prototype.inDate = function inDate(date, tick) {
        return date <= tick && tick < date + 24 * 3600000;
    };

    return DatePicker;
}(react["Component"]);

/* harmony default export */ var DatePicker_base = (DatePicker_base_DatePicker);

DatePicker_base_DatePicker.defaultProps = {
    prefixCls: 'rmc-calendar',
    infinite: false,
    infiniteOpt: false,
    defaultDate: new Date(),
    initalMonths: 6,
    locale: zh_CN["a" /* default */]
};
// CONCATENATED MODULE: ./node_modules/rmc-calendar/es/date/WeekPanel.js





var WeekPanel_WeekPanel = function (_React$PureComponent) {
    inherits_default()(WeekPanel, _React$PureComponent);

    function WeekPanel(props) {
        classCallCheck_default()(this, WeekPanel);

        return possibleConstructorReturn_default()(this, _React$PureComponent.call(this, props));
    }

    WeekPanel.prototype.render = function render() {
        var locale = this.props.locale;
        var week = locale.week;

        return react["createElement"](
            "div",
            { className: "week-panel" },
            react["createElement"](
                "div",
                { className: "cell cell-grey" },
                week[0]
            ),
            react["createElement"](
                "div",
                { className: "cell" },
                week[1]
            ),
            react["createElement"](
                "div",
                { className: "cell" },
                week[2]
            ),
            react["createElement"](
                "div",
                { className: "cell" },
                week[3]
            ),
            react["createElement"](
                "div",
                { className: "cell" },
                week[4]
            ),
            react["createElement"](
                "div",
                { className: "cell" },
                week[5]
            ),
            react["createElement"](
                "div",
                { className: "cell cell-grey" },
                week[6]
            )
        );
    };

    return WeekPanel;
}(react["PureComponent"]);

/* harmony default export */ var date_WeekPanel = (WeekPanel_WeekPanel);
// CONCATENATED MODULE: ./node_modules/rmc-calendar/es/date/SingleMonth.js






var SingleMonth_SingleMonth = function (_React$PureComponent) {
    inherits_default()(SingleMonth, _React$PureComponent);

    function SingleMonth(props) {
        classCallCheck_default()(this, SingleMonth);

        var _this = possibleConstructorReturn_default()(this, _React$PureComponent.call(this, props));

        _this.genWeek = function (weeksData, index) {
            var _this$props = _this.props,
                getDateExtra = _this$props.getDateExtra,
                monthData = _this$props.monthData,
                onCellClick = _this$props.onCellClick,
                locale = _this$props.locale,
                rowSize = _this$props.rowSize;

            var rowCls = 'row';
            if (rowSize === 'xl') {
                rowCls += ' row-xl';
            }
            _this.state.weekComponents[index] = react["createElement"](
                'div',
                { key: index, className: rowCls },
                weeksData.map(function (day, dayOfWeek) {
                    var extra = getDateExtra && getDateExtra(new Date(day.tick)) || {};
                    var info = extra.info;
                    var disable = extra.disable || day.outOfDate;
                    var cls = 'date';
                    var lCls = 'left';
                    var rCls = 'right';
                    var infoCls = 'info';
                    if (dayOfWeek === 0 || dayOfWeek === 6) {
                        cls += ' grey';
                    }
                    if (disable) {
                        cls += ' disable';
                    } else if (info) {
                        cls += ' important';
                    }
                    if (day.selected) {
                        cls += ' date-selected';
                        var styleType = day.selected;
                        switch (styleType) {
                            case Models.SelectType.Only:
                                info = locale.begin;
                                infoCls += ' date-selected';
                                break;
                            case Models.SelectType.All:
                                info = locale.begin_over;
                                infoCls += ' date-selected';
                                break;
                            case Models.SelectType.Start:
                                info = locale.begin;
                                infoCls += ' date-selected';
                                if (dayOfWeek === 6 || day.isLastOfMonth) {
                                    styleType = Models.SelectType.All;
                                }
                                break;
                            case Models.SelectType.Middle:
                                if (dayOfWeek === 0 || day.isFirstOfMonth) {
                                    if (day.isLastOfMonth || dayOfWeek === 6) {
                                        styleType = Models.SelectType.All;
                                    } else {
                                        styleType = Models.SelectType.Start;
                                    }
                                } else if (dayOfWeek === 6 || day.isLastOfMonth) {
                                    styleType = Models.SelectType.End;
                                }
                                break;
                            case Models.SelectType.End:
                                info = locale.over;
                                infoCls += ' date-selected';
                                if (dayOfWeek === 0 || day.isFirstOfMonth) {
                                    styleType = Models.SelectType.All;
                                }
                                break;
                        }
                        switch (styleType) {
                            case Models.SelectType.Single:
                            case Models.SelectType.Only:
                            case Models.SelectType.All:
                                cls += ' selected-single';
                                break;
                            case Models.SelectType.Start:
                                cls += ' selected-start';
                                rCls += ' date-selected';
                                break;
                            case Models.SelectType.Middle:
                                cls += ' selected-middle';
                                lCls += ' date-selected';
                                rCls += ' date-selected';
                                break;
                            case Models.SelectType.End:
                                cls += ' selected-end';
                                lCls += ' date-selected';
                                break;
                        }
                    }
                    var defaultContent = [react["createElement"](
                        'div',
                        { key: 'wrapper', className: 'date-wrapper' },
                        react["createElement"]('span', { className: lCls }),
                        react["createElement"](
                            'div',
                            { className: cls },
                            day.dayOfMonth
                        ),
                        react["createElement"]('span', { className: rCls })
                    ), react["createElement"](
                        'div',
                        { key: 'info', className: infoCls },
                        info
                    )];
                    return react["createElement"](
                        'div',
                        { key: dayOfWeek, className: 'cell ' + (extra.cellCls || ''), onClick: function onClick() {
                                !disable && onCellClick && onCellClick(day, monthData);
                            } },
                        extra.cellRender ? extra.cellRender(new Date(day.tick)) : defaultContent
                    );
                })
            );
        };
        _this.updateWeeks = function (monthData) {
            (monthData || _this.props.monthData).weeks.forEach(function (week, index) {
                _this.genWeek(week, index);
            });
        };
        _this.setWarpper = function (dom) {
            _this.wrapperDivDOM = dom;
        };
        _this.state = {
            weekComponents: []
        };
        return _this;
    }

    SingleMonth.prototype.componentWillMount = function componentWillMount() {
        var _this2 = this;

        this.props.monthData.weeks.forEach(function (week, index) {
            _this2.genWeek(week, index);
        });
    };

    SingleMonth.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (this.props.monthData !== nextProps.monthData) {
            this.updateWeeks(nextProps.monthData);
        }
    };

    SingleMonth.prototype.render = function render() {
        var title = this.props.monthData.title;
        var weekComponents = this.state.weekComponents;

        return react["createElement"](
            'div',
            { className: 'single-month', ref: this.setWarpper },
            react["createElement"](
                'div',
                { className: 'month-title' },
                title
            ),
            react["createElement"](
                'div',
                { className: 'date' },
                weekComponents
            )
        );
    };

    return SingleMonth;
}(react["PureComponent"]);

/* harmony default export */ var date_SingleMonth = (SingleMonth_SingleMonth);

SingleMonth_SingleMonth.defaultProps = {
    rowSize: 'normal'
};
// CONCATENATED MODULE: ./node_modules/rmc-calendar/es/DatePicker.js








var es_DatePicker_DatePicker = function (_Component) {
    inherits_default()(DatePicker, _Component);

    function DatePicker() {
        classCallCheck_default()(this, DatePicker);

        var _this = possibleConstructorReturn_default()(this, _Component.apply(this, arguments));

        _this.transform = '';
        _this.genMonthComponent = function (data) {
            if (!data) return;
            return react["createElement"](date_SingleMonth, { key: data.title, locale: _this.props.locale || {}, monthData: data, rowSize: _this.props.rowSize, onCellClick: _this.onCellClick, getDateExtra: _this.props.getDateExtra, ref: function ref(dom) {
                    // FIXME?: sometimes will callback twice, and the second is null, when use preact.
                    data.componentRef = dom || data.componentRef || undefined;
                    data.updateLayout = function () {
                        _this.computeHeight(data, dom);
                    };
                    data.updateLayout();
                } });
        };
        _this.computeHeight = function (data, singleMonth) {
            if (singleMonth && singleMonth.wrapperDivDOM) {
                // preact, ref时dom有可能无height, offsetTop数据。
                if (!data.height && !singleMonth.wrapperDivDOM.clientHeight) {
                    setTimeout(function () {
                        return _this.computeHeight(data, singleMonth);
                    }, 500);
                    return;
                }
                data.height = singleMonth.wrapperDivDOM.clientHeight || data.height || 0;
                data.y = singleMonth.wrapperDivDOM.offsetTop || data.y || 0;
            }
        };
        _this.setLayout = function (dom) {
            if (dom) {
                var onLayout = _this.props.onLayout;

                onLayout && onLayout(dom.clientHeight);
                var scrollHandler = _this.createOnScroll();
                dom.onscroll = function (evt) {
                    scrollHandler({
                        client: dom.clientHeight,
                        full: evt.currentTarget.clientHeight,
                        top: evt.currentTarget.scrollTop
                    });
                };
            }
        };
        _this.setPanel = function (dom) {
            _this.panel = dom;
        };
        // tslint:disable-next-line:member-ordering
        _this.touchHandler = function () {
            var initDelta = 0;
            var lastY = 0;
            var delta = initDelta;
            return {
                onTouchStart: function onTouchStart(evt) {
                    lastY = evt.touches[0].screenY;
                    delta = initDelta;
                },
                onTouchMove: function onTouchMove(evt) {
                    var ele = evt.currentTarget;
                    var isReachTop = ele.scrollTop === 0;
                    if (isReachTop) {
                        delta = evt.touches[0].screenY - lastY;
                        if (delta > 0) {
                            evt.preventDefault();
                            if (delta > 80) {
                                delta = 80;
                            }
                        } else {
                            delta = 0;
                        }
                        _this.setTransform(_this.panel.style, 'translate3d(0,' + delta + 'px,0)');
                    }
                },
                onTouchEnd: function onTouchEnd() {
                    _this.touchHandler.onFinish();
                },
                onTouchCancel: function onTouchCancel() {
                    _this.touchHandler.onFinish();
                },
                onFinish: function onFinish() {
                    if (delta > 40 && _this.canLoadPrev()) {
                        _this.genMonthData(_this.state.months[0].firstDate, -1);
                        _this.visibleMonth = _this.state.months.slice(0, _this.props.initalMonths);
                        _this.state.months.forEach(function (m) {
                            m.updateLayout && m.updateLayout();
                        });
                        _this.forceUpdate();
                    }
                    _this.setTransform(_this.panel.style, 'translate3d(0,0,0)');
                    _this.setTransition(_this.panel.style, '.3s');
                    setTimeout(function () {
                        _this.panel && _this.setTransition(_this.panel.style, '');
                    }, 300);
                }
            };
        }();
        return _this;
    }

    DatePicker.prototype.setTransform = function setTransform(nodeStyle, value) {
        this.transform = value;
        nodeStyle.transform = value;
        nodeStyle.webkitTransform = value;
    };

    DatePicker.prototype.setTransition = function setTransition(nodeStyle, value) {
        nodeStyle.transition = value;
        nodeStyle.webkitTransition = value;
    };

    DatePicker.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            _props$prefixCls = _props.prefixCls,
            prefixCls = _props$prefixCls === undefined ? '' : _props$prefixCls,
            _props$locale = _props.locale,
            locale = _props$locale === undefined ? {} : _props$locale;

        var style = {
            transform: this.transform
        };
        return react["createElement"](
            'div',
            { className: prefixCls + ' date-picker' },
            react["createElement"](date_WeekPanel, { locale: locale }),
            react["createElement"](
                'div',
                { className: 'wrapper', style: {
                        overflowX: 'hidden',
                        overflowY: 'visible'
                    }, ref: this.setLayout, onTouchStart: this.touchHandler.onTouchStart, onTouchMove: this.touchHandler.onTouchMove, onTouchEnd: this.touchHandler.onTouchEnd, onTouchCancel: this.touchHandler.onTouchCancel },
                react["createElement"](
                    'div',
                    { style: style, ref: this.setPanel },
                    this.canLoadPrev() && react["createElement"](
                        'div',
                        { className: 'load-tip' },
                        locale.loadPrevMonth
                    ),
                    react["createElement"](
                        'div',
                        { className: 'months' },
                        this.state.months.map(function (m) {
                            var hidden = m.height && _this2.visibleMonth.indexOf(m) < 0;
                            if (hidden) {
                                return react["createElement"]('div', { key: m.title + '_shallow', style: { height: m.height } });
                            }
                            return m.component;
                        })
                    )
                )
            )
        );
    };

    return DatePicker;
}(DatePicker_base);

/* harmony default export */ var rmc_calendar_es_DatePicker = (es_DatePicker_DatePicker);
// CONCATENATED MODULE: ./node_modules/rmc-calendar/es/calendar/ConfirmPanel.js






var ConfirmPanel_ConfirmPanel = function (_React$PureComponent) {
    inherits_default()(ConfirmPanel, _React$PureComponent);

    function ConfirmPanel() {
        classCallCheck_default()(this, ConfirmPanel);

        var _this = possibleConstructorReturn_default()(this, _React$PureComponent.apply(this, arguments));

        _this.onConfirm = function () {
            var _this$props = _this.props,
                onConfirm = _this$props.onConfirm,
                disableBtn = _this$props.disableBtn;

            !disableBtn && onConfirm();
        };
        return _this;
    }

    ConfirmPanel.prototype.formatDate = function formatDate(date) {
        var _props = this.props,
            _props$formatStr = _props.formatStr,
            formatStr = _props$formatStr === undefined ? '' : _props$formatStr,
            locale = _props.locale;

        return util_formatDate(date, formatStr, locale);
    };

    ConfirmPanel.prototype.render = function render() {
        var _props2 = this.props,
            type = _props2.type,
            locale = _props2.locale,
            disableBtn = _props2.disableBtn;
        var _props3 = this.props,
            startDateTime = _props3.startDateTime,
            endDateTime = _props3.endDateTime;

        if (startDateTime && endDateTime && +startDateTime > +endDateTime) {
            var tmp = startDateTime;
            startDateTime = endDateTime;
            endDateTime = tmp;
        }
        var startTimeStr = startDateTime ? this.formatDate(startDateTime) : locale.noChoose;
        var endTimeStr = endDateTime ? this.formatDate(endDateTime) : locale.noChoose;
        var btnCls = disableBtn ? 'button button-disable' : 'button';
        if (type === 'one') {
            btnCls += ' button-full';
        }
        return react["createElement"](
            'div',
            { className: 'confirm-panel' },
            type === 'range' && react["createElement"](
                'div',
                { className: 'info' },
                react["createElement"](
                    'p',
                    null,
                    locale.start,
                    ': ',
                    react["createElement"](
                        'span',
                        { className: !startDateTime ? 'grey' : '' },
                        startTimeStr
                    )
                ),
                react["createElement"](
                    'p',
                    null,
                    locale.end,
                    ': ',
                    react["createElement"](
                        'span',
                        { className: !endDateTime ? 'grey' : '' },
                        endTimeStr
                    )
                )
            ),
            react["createElement"](
                'div',
                { className: btnCls, onClick: this.onConfirm },
                locale.confirm
            )
        );
    };

    return ConfirmPanel;
}(react["PureComponent"]);

/* harmony default export */ var calendar_ConfirmPanel = (ConfirmPanel_ConfirmPanel);

ConfirmPanel_ConfirmPanel.defaultProps = {
    formatStr: 'yyyy-MM-dd hh:mm'
};
// CONCATENATED MODULE: ./node_modules/rmc-calendar/es/calendar/ShortcutPanel.js





var ShortcutPanel_ShortcutPanel = function (_React$PureComponent) {
    inherits_default()(ShortcutPanel, _React$PureComponent);

    function ShortcutPanel() {
        classCallCheck_default()(this, ShortcutPanel);

        var _this = possibleConstructorReturn_default()(this, _React$PureComponent.apply(this, arguments));

        _this.onClick = function (type) {
            var onSelect = _this.props.onSelect;

            var today = new Date();
            switch (type) {
                case 'today':
                    onSelect(new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0), new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12));
                    break;
                case 'yesterday':
                    onSelect(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1, 0), new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1, 12));
                    break;
                case 'lastweek':
                    onSelect(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 6, 0), new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12));
                    break;
                case 'lastmonth':
                    onSelect(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 29, 0), new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12));
                    break;
            }
        };
        return _this;
    }

    ShortcutPanel.prototype.render = function render() {
        var _this2 = this;

        var locale = this.props.locale;

        return react["createElement"](
            'div',
            { className: 'shortcut-panel' },
            react["createElement"](
                'div',
                { className: 'item', onClick: function onClick() {
                        return _this2.onClick('today');
                    } },
                locale.today
            ),
            react["createElement"](
                'div',
                { className: 'item', onClick: function onClick() {
                        return _this2.onClick('yesterday');
                    } },
                locale.yesterday
            ),
            react["createElement"](
                'div',
                { className: 'item', onClick: function onClick() {
                        return _this2.onClick('lastweek');
                    } },
                locale.lastWeek
            ),
            react["createElement"](
                'div',
                { className: 'item', onClick: function onClick() {
                        return _this2.onClick('lastmonth');
                    } },
                locale.lastMonth
            )
        );
    };

    return ShortcutPanel;
}(react["PureComponent"]);

/* harmony default export */ var calendar_ShortcutPanel = (ShortcutPanel_ShortcutPanel);
// CONCATENATED MODULE: ./node_modules/rmc-calendar/es/calendar/AnimateWrapper.js





var AnimateWrapper_AnimateWrapper = function (_React$PureComponent) {
    inherits_default()(AnimateWrapper, _React$PureComponent);

    function AnimateWrapper() {
        classCallCheck_default()(this, AnimateWrapper);

        return possibleConstructorReturn_default()(this, _React$PureComponent.apply(this, arguments));
    }

    AnimateWrapper.prototype.render = function render() {
        var _props = this.props,
            className = _props.className,
            displayType = _props.displayType,
            visible = _props.visible;

        return react_default.a.createElement(
            'div',
            { className: className + ' animate', style: { display: visible ? displayType : 'none' } },
            visible && this.props.children
        );
    };

    return AnimateWrapper;
}(react_default.a.PureComponent);

/* harmony default export */ var calendar_AnimateWrapper = (AnimateWrapper_AnimateWrapper);

AnimateWrapper_AnimateWrapper.defaultProps = {
    className: '',
    displayType: 'flex'
};
// CONCATENATED MODULE: ./node_modules/rmc-calendar/es/calendar/Header.js





var Header_Header = function (_React$PureComponent) {
    inherits_default()(Header, _React$PureComponent);

    function Header() {
        classCallCheck_default()(this, Header);

        return possibleConstructorReturn_default()(this, _React$PureComponent.apply(this, arguments));
    }

    Header.prototype.render = function render() {
        var _props = this.props,
            title = _props.title,
            _props$locale = _props.locale,
            locale = _props$locale === undefined ? {} : _props$locale,
            onCancel = _props.onCancel,
            onClear = _props.onClear,
            showClear = _props.showClear,
            closeIcon = _props.closeIcon,
            clearIcon = _props.clearIcon;

        return react["createElement"](
            "div",
            { className: "header" },
            react["createElement"](
                "span",
                { className: "left", onClick: function onClick() {
                        return onCancel && onCancel();
                    } },
                closeIcon
            ),
            react["createElement"](
                "span",
                { className: "title" },
                title || locale.title
            ),
            showClear && react["createElement"](
                "span",
                { className: "right", onClick: function onClick() {
                        return onClear && onClear();
                    } },
                clearIcon || locale.clear
            )
        );
    };

    return Header;
}(react["PureComponent"]);

/* harmony default export */ var calendar_Header = (Header_Header);

Header_Header.defaultProps = {
    closeIcon: 'X'
};
// CONCATENATED MODULE: ./node_modules/rmc-calendar/es/Calendar.js














var Calendar_StateType = function StateType() {
    classCallCheck_default()(this, StateType);

    this.showTimePicker = false;
    this.startDate = undefined;
    this.endDate = undefined;
    this.disConfirmBtn = true;
    this.clientHight = 0;
};

var Calendar_Calendar = function (_React$PureComponent) {
    inherits_default()(Calendar, _React$PureComponent);

    function Calendar(props) {
        classCallCheck_default()(this, Calendar);

        var _this = possibleConstructorReturn_default()(this, _React$PureComponent.call(this, props));

        _this.selectDate = function (date) {
            var useDateTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var oldState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var props = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _this.props;

            if (!date) return {};
            var newState = {};
            var type = props.type,
                pickTime = props.pickTime,
                defaultTimeValue = props.defaultTimeValue,
                _props$locale = props.locale,
                locale = _props$locale === undefined ? {} : _props$locale;

            var newDate = pickTime && !useDateTime ? mergeDateTime(date, defaultTimeValue) : date;
            var startDate = oldState.startDate,
                endDate = oldState.endDate;

            switch (type) {
                case 'one':
                    newState = extends_default()({}, newState, { startDate: newDate, disConfirmBtn: false });
                    if (pickTime) {
                        newState = extends_default()({}, newState, { timePickerTitle: locale.selectTime, showTimePicker: true });
                    }
                    break;
                case 'range':
                    if (!startDate || endDate) {
                        newState = extends_default()({}, newState, { startDate: newDate, endDate: undefined, disConfirmBtn: true });
                        if (pickTime) {
                            newState = extends_default()({}, newState, { timePickerTitle: locale.selectStartTime, showTimePicker: true });
                        }
                    } else {
                        newState = extends_default()({}, newState, { timePickerTitle: +newDate >= +startDate ? locale.selectEndTime : locale.selectStartTime, disConfirmBtn: false, endDate: pickTime && !useDateTime && +newDate >= +startDate ? new Date(+mergeDateTime(newDate, startDate) + 3600000) : newDate });
                    }
                    break;
            }
            return newState;
        };
        _this.onSelectedDate = function (date) {
            var _this$state = _this.state,
                startDate = _this$state.startDate,
                endDate = _this$state.endDate;
            var onSelect = _this.props.onSelect;

            if (onSelect) {
                var value = onSelect(date, [startDate, endDate]);
                if (value) {
                    _this.shortcutSelect(value[0], value[1]);
                    return;
                }
            }
            _this.setState(_this.selectDate(date, false, { startDate: startDate, endDate: endDate }));
        };
        _this.onSelectHasDisableDate = function (date) {
            _this.onClear();
            if (_this.props.onSelectHasDisableDate) {
                _this.props.onSelectHasDisableDate(date);
            }
        };
        _this.onClose = function () {
            _this.setState(new Calendar_StateType());
        };
        _this.onCancel = function () {
            _this.props.onCancel && _this.props.onCancel();
            _this.onClose();
        };
        _this.onConfirm = function () {
            var onConfirm = _this.props.onConfirm;
            var _this$state2 = _this.state,
                startDate = _this$state2.startDate,
                endDate = _this$state2.endDate;

            if (startDate && endDate && +startDate > +endDate) {
                return onConfirm && onConfirm(endDate, startDate);
            }
            onConfirm && onConfirm(startDate, endDate);
            _this.onClose();
        };
        _this.onTimeChange = function (date) {
            var _this$state3 = _this.state,
                startDate = _this$state3.startDate,
                endDate = _this$state3.endDate;

            if (endDate) {
                _this.setState({
                    endDate: date
                });
            } else if (startDate) {
                _this.setState({
                    startDate: date
                });
            }
        };
        _this.onClear = function () {
            _this.setState({
                startDate: undefined,
                endDate: undefined,
                showTimePicker: false
            });
            _this.props.onClear && _this.props.onClear();
        };
        _this.shortcutSelect = function (startDate, endDate) {
            var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this.props;

            _this.setState(extends_default()({ startDate: startDate }, _this.selectDate(endDate, true, { startDate: startDate }, props), { showTimePicker: false }));
        };
        _this.setClientHeight = function (height) {
            _this.setState({
                clientHight: height
            });
        };
        _this.state = new Calendar_StateType();
        if (props.defaultValue) {
            var defaultValue = props.defaultValue;
            _this.state = extends_default()({}, _this.state, _this.selectDate(defaultValue[1], true, { startDate: defaultValue[0] }, props));
        }
        return _this;
    }

    Calendar.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (!this.props.visible && nextProps.visible && nextProps.defaultValue) {
            this.shortcutSelect(nextProps.defaultValue[0], nextProps.defaultValue[1], nextProps);
        }
    };

    Calendar.prototype.render = function render() {
        var _props = this.props,
            type = _props.type,
            _props$locale2 = _props.locale,
            locale = _props$locale2 === undefined ? {} : _props$locale2,
            prefixCls = _props.prefixCls,
            visible = _props.visible,
            pickTime = _props.pickTime,
            showShortcut = _props.showShortcut,
            renderHeader = _props.renderHeader,
            infiniteOpt = _props.infiniteOpt,
            initalMonths = _props.initalMonths,
            defaultDate = _props.defaultDate,
            minDate = _props.minDate,
            maxDate = _props.maxDate,
            getDateExtra = _props.getDateExtra,
            rowSize = _props.rowSize,
            defaultTimeValue = _props.defaultTimeValue,
            renderShortcut = _props.renderShortcut,
            enterDirection = _props.enterDirection,
            timePickerPrefixCls = _props.timePickerPrefixCls,
            timePickerPickerPrefixCls = _props.timePickerPickerPrefixCls,
            style = _props.style;
        var _state = this.state,
            showTimePicker = _state.showTimePicker,
            timePickerTitle = _state.timePickerTitle,
            startDate = _state.startDate,
            endDate = _state.endDate,
            disConfirmBtn = _state.disConfirmBtn,
            clientHight = _state.clientHight;

        var headerProps = {
            locale: locale,
            showClear: !!startDate,
            onCancel: this.onCancel,
            onClear: this.onClear
        };
        return react_default.a.createElement(
            'div',
            { className: '' + prefixCls, style: style },
            react_default.a.createElement(
                es_Animate,
                { showProp: 'visible', transitionName: 'fade' },
                react_default.a.createElement(calendar_AnimateWrapper, { className: 'mask', visible: !!visible })
            ),
            react_default.a.createElement(
                es_Animate,
                { showProp: 'visible', transitionName: enterDirection === 'horizontal' ? 'slideH' : 'slideV' },
                react_default.a.createElement(
                    calendar_AnimateWrapper,
                    { className: 'content', visible: !!visible },
                    renderHeader ? renderHeader(headerProps) : react_default.a.createElement(calendar_Header, headerProps),
                    react_default.a.createElement(rmc_calendar_es_DatePicker, { locale: locale, type: type, prefixCls: prefixCls, infiniteOpt: infiniteOpt, initalMonths: initalMonths, defaultDate: defaultDate, minDate: minDate, maxDate: maxDate, getDateExtra: getDateExtra, onCellClick: this.onSelectedDate, onSelectHasDisableDate: this.onSelectHasDisableDate, onLayout: this.setClientHeight, startDate: startDate, endDate: endDate, rowSize: rowSize }),
                    showTimePicker && react_default.a.createElement(es_TimePicker, { prefixCls: timePickerPrefixCls, pickerPrefixCls: timePickerPickerPrefixCls, locale: locale, title: timePickerTitle, defaultValue: defaultTimeValue, value: endDate ? endDate : startDate, onValueChange: this.onTimeChange, minDate: minDate, maxDate: maxDate, clientHeight: clientHight }),
                    showShortcut && !showTimePicker && (renderShortcut ? renderShortcut(this.shortcutSelect) : react_default.a.createElement(calendar_ShortcutPanel, { locale: locale, onSelect: this.shortcutSelect })),
                    startDate && react_default.a.createElement(calendar_ConfirmPanel, { type: type, locale: locale, startDateTime: startDate, endDateTime: endDate, onConfirm: this.onConfirm, disableBtn: disConfirmBtn, formatStr: pickTime ? locale.dateTimeFormat : locale.dateFormat })
                )
            )
        );
    };

    return Calendar;
}(react_default.a.PureComponent);

/* harmony default export */ var es_Calendar = (Calendar_Calendar);

Calendar_Calendar.DefaultHeader = calendar_Header;
Calendar_Calendar.DefaultShortcut = calendar_ShortcutPanel;
Calendar_Calendar.defaultProps = {
    visible: false,
    showHeader: true,
    locale: zh_CN["a" /* default */],
    pickTime: false,
    showShortcut: false,
    prefixCls: 'rmc-calendar',
    type: 'range',
    defaultTimeValue: new Date(2000, 0, 1, 8)
};
// CONCATENATED MODULE: ./node_modules/rmc-calendar/es/locale/en_US.js
var en_US_locale = {
    title: 'Calendar',
    today: 'Today',
    month: 'Month',
    year: 'Year',
    am: 'AM',
    pm: 'PM',
    dateTimeFormat: 'MM/dd/yyyy w hh:mm',
    dateFormat: 'yyyy/MM/dd w',
    noChoose: 'No Choose',
    week: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fir', 'Sat'],
    clear: 'Clear',
    selectTime: 'Select Time',
    selectStartTime: 'Select Start Time',
    selectEndTime: 'Select End Time',
    start: 'Start',
    end: 'End',
    begin: 'Start',
    over: 'End',
    begin_over: 'S/E',
    confirm: 'Confirm',
    monthTitle: 'yyyy/MM',
    loadPrevMonth: 'Load Prev Month',
    yesterday: 'Yesterday',
    lastWeek: 'Last Week',
    lastMonth: 'Last Month'
};
/* harmony default export */ var locale_en_US = (en_US_locale);
// CONCATENATED MODULE: ./node_modules/rmc-calendar/es/index.js




var Locale = { zhCN: zh_CN["a" /* default */], enUS: locale_en_US };

// CONCATENATED MODULE: ./node_modules/antd-mobile/es/_util/getLocale.js

function getComponentLocale(props, context, componentName, getDefaultLocale) {
    var locale = {};
    if (context && context.antLocale && context.antLocale[componentName]) {
        locale = context.antLocale[componentName];
    } else {
        var defaultLocale = getDefaultLocale();
        // TODO: make default lang of antd be English
        // https://github.com/ant-design/ant-design/issues/6334
        locale = defaultLocale['default'] || defaultLocale;
    }
    var result = extends_default()({}, locale);
    if (props.locale) {
        result = extends_default()({}, result, props.locale);
        if (props.locale.lang) {
            result.lang = extends_default()({}, locale.lang, props.locale.lang);
        }
    }
    return result;
}
function getLocaleCode(context) {
    var localeCode = context.antLocale && context.antLocale.locale;
    // Had use LocaleProvide but didn't set locale
    if (context.antLocale && context.antLocale.exist && !localeCode) {
        return 'zh-cn';
    }
    return localeCode;
}
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/calendar/index.js











var calendar_Calendar = function (_React$Component) {
    inherits_default()(Calendar, _React$Component);

    function Calendar() {
        classCallCheck_default()(this, Calendar);

        return possibleConstructorReturn_default()(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).apply(this, arguments));
    }

    createClass_default()(Calendar, [{
        key: 'render',
        value: function render() {
            // tslint:disable-next-line:no-this-assignment
            var props = this.props,
                context = this.context;

            var locale = getComponentLocale(props, context, 'Calendar', function () {
                return __webpack_require__("sQCU");
            });
            var Header = es_Calendar.DefaultHeader;
            return react["createElement"](es_Calendar, extends_default()({ locale: locale
                // tslint:disable-next-line:jsx-no-multiline-js
                , renderHeader: function renderHeader(headerProps) {
                    return react["createElement"](Header, extends_default()({}, headerProps, { closeIcon: react["createElement"](es_icon, { type: 'cross' }) }));
                } }, props));
        }
    }]);

    return Calendar;
}(react["Component"]);

/* harmony default export */ var calendar = (calendar_Calendar);

calendar_Calendar.defaultProps = {
    prefixCls: 'am-calendar',
    timePickerPrefixCls: 'am-picker',
    timePickerPickerPrefixCls: 'am-picker-col'
};
calendar_Calendar.contextTypes = {
    antLocale: prop_types["object"]
};
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/card/CardBody.js





var CardBody_rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};



var CardBody_CardBody = function (_React$Component) {
    inherits_default()(CardBody, _React$Component);

    function CardBody() {
        classCallCheck_default()(this, CardBody);

        return possibleConstructorReturn_default()(this, (CardBody.__proto__ || Object.getPrototypeOf(CardBody)).apply(this, arguments));
    }

    createClass_default()(CardBody, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                prefixCls = _a.prefixCls,
                className = _a.className,
                restProps = CardBody_rest(_a, ["prefixCls", "className"]);
            var wrapCls = classnames_default()(prefixCls + '-body', className);
            return react["createElement"]('div', extends_default()({ className: wrapCls }, restProps));
        }
    }]);

    return CardBody;
}(react["Component"]);

/* harmony default export */ var card_CardBody = (CardBody_CardBody);

CardBody_CardBody.defaultProps = {
    prefixCls: 'am-card'
};
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/card/CardFooter.js





var CardFooter_rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};



var CardFooter_CardFooter = function (_React$Component) {
    inherits_default()(CardFooter, _React$Component);

    function CardFooter() {
        classCallCheck_default()(this, CardFooter);

        return possibleConstructorReturn_default()(this, (CardFooter.__proto__ || Object.getPrototypeOf(CardFooter)).apply(this, arguments));
    }

    createClass_default()(CardFooter, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                prefixCls = _a.prefixCls,
                content = _a.content,
                className = _a.className,
                extra = _a.extra,
                restProps = CardFooter_rest(_a, ["prefixCls", "content", "className", "extra"]);
            var wrapCls = classnames_default()(prefixCls + '-footer', className);
            return react["createElement"](
                'div',
                extends_default()({ className: wrapCls }, restProps),
                react["createElement"](
                    'div',
                    { className: prefixCls + '-footer-content' },
                    content
                ),
                extra && react["createElement"](
                    'div',
                    { className: prefixCls + '-footer-extra' },
                    extra
                )
            );
        }
    }]);

    return CardFooter;
}(react["Component"]);

/* harmony default export */ var card_CardFooter = (CardFooter_CardFooter);

CardFooter_CardFooter.defaultProps = {
    prefixCls: 'am-card'
};
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/card/CardHeader.js





var CardHeader_rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};



var CardHeader_CardHeader = function (_React$Component) {
    inherits_default()(CardHeader, _React$Component);

    function CardHeader() {
        classCallCheck_default()(this, CardHeader);

        return possibleConstructorReturn_default()(this, (CardHeader.__proto__ || Object.getPrototypeOf(CardHeader)).apply(this, arguments));
    }

    createClass_default()(CardHeader, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                prefixCls = _a.prefixCls,
                className = _a.className,
                title = _a.title,
                thumb = _a.thumb,
                thumbStyle = _a.thumbStyle,
                extra = _a.extra,
                restProps = CardHeader_rest(_a, ["prefixCls", "className", "title", "thumb", "thumbStyle", "extra"]);
            var wrapCls = classnames_default()(prefixCls + '-header', className);
            return react["createElement"](
                'div',
                extends_default()({ className: wrapCls }, restProps),
                react["createElement"](
                    'div',
                    { className: prefixCls + '-header-content' },
                    typeof thumb === 'string' ?
                    // tslint:disable-next-line:jsx-no-multiline-js
                    react["createElement"]('img', { style: thumbStyle, src: thumb }) : thumb,
                    title
                ),
                extra ?
                // tslint:disable-next-line:jsx-no-multiline-js
                react["createElement"](
                    'div',
                    { className: prefixCls + '-header-extra' },
                    extra
                ) : null
            );
        }
    }]);

    return CardHeader;
}(react["Component"]);

/* harmony default export */ var card_CardHeader = (CardHeader_CardHeader);

CardHeader_CardHeader.defaultProps = {
    prefixCls: 'am-card',
    thumbStyle: {}
};
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/card/index.js






var card_rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};






var card_Card = function (_React$Component) {
    inherits_default()(Card, _React$Component);

    function Card() {
        classCallCheck_default()(this, Card);

        return possibleConstructorReturn_default()(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
    }

    createClass_default()(Card, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                prefixCls = _a.prefixCls,
                full = _a.full,
                className = _a.className,
                resetProps = card_rest(_a, ["prefixCls", "full", "className"]);
            var wrapCls = classnames_default()(prefixCls, className, defineProperty_default()({}, prefixCls + '-full', full));
            return react["createElement"]('div', extends_default()({ className: wrapCls }, resetProps));
        }
    }]);

    return Card;
}(react["Component"]);

/* harmony default export */ var card = (card_Card);

card_Card.defaultProps = {
    prefixCls: 'am-card',
    full: false
};
card_Card.Header = card_CardHeader;
card_Card.Body = card_CardBody;
card_Card.Footer = card_CardFooter;
// CONCATENATED MODULE: ./node_modules/rmc-nuka-carousel/es/decorators.js







var DefaultDecorators = [{
    component: function (_React$Component) {
        inherits_default()(component, _React$Component);

        function component() {
            classCallCheck_default()(this, component);

            var _this = possibleConstructorReturn_default()(this, (component.__proto__ || Object.getPrototypeOf(component)).apply(this, arguments));

            _this.handleClick = function (e) {
                e.preventDefault();
                _this.props.previousSlide();
            };
            return _this;
        }

        createClass_default()(component, [{
            key: 'render',
            value: function render() {
                return react_default.a.createElement(
                    'button',
                    { style: this.getButtonStyles(this.props.currentSlide === 0 && !this.props.wrapAround), onClick: this.handleClick },
                    'PREV'
                );
            }
        }, {
            key: 'getButtonStyles',
            value: function getButtonStyles(disabled) {
                return {
                    border: 0,
                    background: 'rgba(0,0,0,0.4)',
                    color: 'white',
                    padding: 10,
                    outline: 0,
                    opacity: disabled ? 0.3 : 1,
                    cursor: 'pointer'
                };
            }
        }]);

        return component;
    }(react_default.a.Component),
    position: 'CenterLeft'
}, {
    component: function (_React$Component2) {
        inherits_default()(component, _React$Component2);

        function component() {
            classCallCheck_default()(this, component);

            var _this2 = possibleConstructorReturn_default()(this, (component.__proto__ || Object.getPrototypeOf(component)).apply(this, arguments));

            _this2.handleClick = function (e) {
                e.preventDefault();
                if (_this2.props.nextSlide) {
                    _this2.props.nextSlide();
                }
            };
            return _this2;
        }

        createClass_default()(component, [{
            key: 'render',
            value: function render() {
                return react_default.a.createElement(
                    'button',
                    { style: this.getButtonStyles(this.props.currentSlide + this.props.slidesToScroll >= this.props.slideCount && !this.props.wrapAround), onClick: this.handleClick },
                    'NEXT'
                );
            }
        }, {
            key: 'getButtonStyles',
            value: function getButtonStyles(disabled) {
                return {
                    border: 0,
                    background: 'rgba(0,0,0,0.4)',
                    color: 'white',
                    padding: 10,
                    outline: 0,
                    opacity: disabled ? 0.3 : 1,
                    cursor: 'pointer'
                };
            }
        }]);

        return component;
    }(react_default.a.Component),
    position: 'CenterRight'
}, {
    component: function (_React$Component3) {
        inherits_default()(component, _React$Component3);

        function component() {
            classCallCheck_default()(this, component);

            return possibleConstructorReturn_default()(this, (component.__proto__ || Object.getPrototypeOf(component)).apply(this, arguments));
        }

        createClass_default()(component, [{
            key: 'render',
            value: function render() {
                var _this4 = this;

                var indexes = this.getIndexes(this.props.slideCount, this.props.slidesToScroll);
                return react_default.a.createElement(
                    'ul',
                    { style: this.getListStyles() },
                    indexes.map(function (index) {
                        return react_default.a.createElement(
                            'li',
                            { style: _this4.getListItemStyles(), key: index },
                            react_default.a.createElement(
                                'button',
                                { style: _this4.getButtonStyles(_this4.props.currentSlide === index), onClick: _this4.props.goToSlide && _this4.props.goToSlide.bind(null, index) },
                                '\u2022'
                            )
                        );
                    })
                );
            }
        }, {
            key: 'getIndexes',
            value: function getIndexes(count, inc) {
                var arr = [];
                for (var i = 0; i < count; i += inc) {
                    arr.push(i);
                }
                return arr;
            }
        }, {
            key: 'getListStyles',
            value: function getListStyles() {
                return {
                    position: 'relative',
                    margin: 0,
                    top: -10,
                    padding: 0
                };
            }
        }, {
            key: 'getListItemStyles',
            value: function getListItemStyles() {
                return {
                    listStyleType: 'none',
                    display: 'inline-block'
                };
            }
        }, {
            key: 'getButtonStyles',
            value: function getButtonStyles(active) {
                return {
                    border: 0,
                    background: 'transparent',
                    color: 'black',
                    cursor: 'pointer',
                    padding: 10,
                    outline: 0,
                    fontSize: 24,
                    opacity: active ? 1 : 0.5
                };
            }
        }]);

        return component;
    }(react_default.a.Component),
    position: 'BottomCenter'
}];
/* harmony default export */ var decorators = (DefaultDecorators);
// EXTERNAL MODULE: ./node_modules/exenv/index.js
var exenv = __webpack_require__("2rMq");
var exenv_default = /*#__PURE__*/__webpack_require__.n(exenv);

// EXTERNAL MODULE: ./node_modules/raf/index.js
var raf = __webpack_require__("xEkU");
var raf_default = /*#__PURE__*/__webpack_require__.n(raf);

// CONCATENATED MODULE: ./node_modules/rmc-nuka-carousel/es/carousel.js











// from https://github.com/chenglou/tween-functions
function easeOutCirc(t, b, _c, d) {
    var c = _c - b;
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
}
function linear(t, b, _c, d) {
    var c = _c - b;
    return c * t / d + b;
}
var DEFAULT_STACK_BEHAVIOR = 'ADDITIVE';
var DEFAULT_DURATION = 300;
var DEFAULT_DELAY = 0;
var stackBehavior = {
    ADDITIVE: 'ADDITIVE',
    DESTRUCTIVE: 'DESTRUCTIVE'
};
var addEvent = function addEvent(elem, type, eventHandle) {
    if (elem === null || typeof elem === 'undefined') {
        return;
    }
    if (elem.addEventListener) {
        elem.addEventListener(type, eventHandle, false);
    } else if (elem.attachEvent) {
        elem.attachEvent('on' + type, eventHandle);
    } else {
        elem['on' + type] = eventHandle;
    }
};
var removeEvent = function removeEvent(elem, type, eventHandle) {
    if (elem === null || typeof elem === 'undefined') {
        return;
    }
    if (elem.removeEventListener) {
        elem.removeEventListener(type, eventHandle, false);
    } else if (elem.detachEvent) {
        elem.detachEvent('on' + type, eventHandle);
    } else {
        elem['on' + type] = null;
    }
};

var carousel_Carousel = function (_React$Component) {
    inherits_default()(Carousel, _React$Component);

    function Carousel(props) {
        classCallCheck_default()(this, Carousel);

        var _this = possibleConstructorReturn_default()(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

        _this._rafCb = function () {
            var state = _this.state;
            if (state.tweenQueue.length === 0) {
                return;
            }
            var now = Date.now();
            var newTweenQueue = [];
            for (var i = 0; i < state.tweenQueue.length; i++) {
                var item = state.tweenQueue[i];
                var initTime = item.initTime,
                    config = item.config;

                if (now - initTime < config.duration) {
                    newTweenQueue.push(item);
                } else {
                    if (config.onEnd) {
                        config.onEnd();
                    }
                }
            }
            // onEnd might trigger a parent callback that removes this component
            // -1 means we've canceled it in componentWillUnmount
            if (_this._rafID === -1) {
                return;
            }
            _this.setState({
                tweenQueue: newTweenQueue
            });
            _this._rafID = raf_default()(_this._rafCb);
        };
        _this.handleClick = function (e) {
            if (_this.clickSafe === true) {
                e.preventDefault();
                e.stopPropagation();
                if (e.nativeEvent) {
                    e.nativeEvent.stopPropagation();
                }
            }
        };
        _this.autoplayIterator = function () {
            if (_this.props.wrapAround) {
                return _this.nextSlide();
            }
            if (_this.state.currentSlide !== _this.state.slideCount - _this.state.slidesToShow) {
                _this.nextSlide();
            } else {
                _this.stopAutoplay();
            }
        };
        // Action Methods
        _this.goToSlide = function (index) {
            var _this$props = _this.props,
                beforeSlide = _this$props.beforeSlide,
                afterSlide = _this$props.afterSlide;

            if (index >= react_default.a.Children.count(_this.props.children) || index < 0) {
                if (!_this.props.wrapAround) {
                    return;
                }
                ;
                if (index >= react_default.a.Children.count(_this.props.children)) {
                    beforeSlide(_this.state.currentSlide, 0);
                    return _this.setState({
                        currentSlide: 0
                    }, function () {
                        _this.animateSlide(null, null, _this.getTargetLeft(null, index), function () {
                            _this.animateSlide(null, 0.01);
                            afterSlide(0);
                            _this.resetAutoplay();
                            _this.setExternalData();
                        });
                    });
                } else {
                    var endSlide = react_default.a.Children.count(_this.props.children) - _this.state.slidesToScroll;
                    beforeSlide(_this.state.currentSlide, endSlide);
                    return _this.setState({
                        currentSlide: endSlide
                    }, function () {
                        _this.animateSlide(null, null, _this.getTargetLeft(null, index), function () {
                            _this.animateSlide(null, 0.01);
                            afterSlide(endSlide);
                            _this.resetAutoplay();
                            _this.setExternalData();
                        });
                    });
                }
            }
            beforeSlide(_this.state.currentSlide, index);
            _this.setState({
                currentSlide: index
            }, function () {
                _this.animateSlide();
                _this.props.afterSlide(index);
                _this.resetAutoplay();
                _this.setExternalData();
            });
        };
        _this.nextSlide = function () {
            var childrenCount = react_default.a.Children.count(_this.props.children);
            var slidesToShow = _this.props.slidesToShow;
            if (_this.props.slidesToScroll === 'auto') {
                slidesToShow = _this.state.slidesToScroll;
            }
            if (_this.state.currentSlide >= childrenCount - slidesToShow && !_this.props.wrapAround) {
                return;
            }
            if (_this.props.wrapAround) {
                _this.goToSlide(_this.state.currentSlide + _this.state.slidesToScroll);
            } else {
                if (_this.props.slideWidth !== 1) {
                    return _this.goToSlide(_this.state.currentSlide + _this.state.slidesToScroll);
                }
                _this.goToSlide(Math.min(_this.state.currentSlide + _this.state.slidesToScroll, childrenCount - slidesToShow));
            }
        };
        _this.previousSlide = function () {
            if (_this.state.currentSlide <= 0 && !_this.props.wrapAround) {
                return;
            }
            if (_this.props.wrapAround) {
                _this.goToSlide(_this.state.currentSlide - _this.state.slidesToScroll);
            } else {
                _this.goToSlide(Math.max(0, _this.state.currentSlide - _this.state.slidesToScroll));
            }
        };
        _this.onResize = function () {
            _this.setDimensions();
        };
        _this.onReadyStateChange = function () {
            _this.setDimensions();
        };
        _this.state = {
            currentSlide: _this.props.slideIndex,
            dragging: false,
            frameWidth: 0,
            left: 0,
            slideCount: 0,
            slidesToScroll: _this.props.slidesToScroll,
            slideWidth: 0,
            top: 0,
            tweenQueue: []
        };
        _this.touchObject = {};
        _this.clickSafe = true;
        return _this;
    }

    createClass_default()(Carousel, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.setInitialDimensions();
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setDimensions();
            this.bindEvents();
            this.setExternalData();
            if (this.props.autoplay) {
                this.startAutoplay();
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                slideCount: nextProps.children.length
            });
            this.setDimensions(nextProps);
            if (this.props.slideIndex !== nextProps.slideIndex && nextProps.slideIndex !== this.state.currentSlide) {
                this.goToSlide(nextProps.slideIndex);
            }
            if (this.props.autoplay !== nextProps.autoplay) {
                if (nextProps.autoplay) {
                    this.startAutoplay();
                } else {
                    this.stopAutoplay();
                }
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.unbindEvents();
            this.stopAutoplay();
            raf_default.a.cancel(this._rafID);
            this._rafID = -1;
        }
        // react-tween-state

    }, {
        key: 'tweenState',
        value: function tweenState(path, _ref) {
            var _this2 = this;

            var easing = _ref.easing,
                duration = _ref.duration,
                delay = _ref.delay,
                beginValue = _ref.beginValue,
                endValue = _ref.endValue,
                onEnd = _ref.onEnd,
                configSB = _ref.stackBehavior;

            this.setState(function (state) {
                var cursor = state;
                var stateName = void 0;
                // see comment below on pash hash
                var pathHash = void 0;
                if (typeof path === 'string') {
                    stateName = path;
                    pathHash = path;
                } else {
                    for (var i = 0; i < path.length - 1; i++) {
                        cursor = cursor[path[i]];
                    }
                    stateName = path[path.length - 1];
                    pathHash = path.join('|');
                }
                // see the reasoning for these defaults at the top of file
                var newConfig = {
                    easing: easing,
                    duration: duration == null ? DEFAULT_DURATION : duration,
                    delay: delay == null ? DEFAULT_DELAY : delay,
                    beginValue: beginValue == null ? cursor[stateName] : beginValue,
                    endValue: endValue,
                    onEnd: onEnd,
                    stackBehavior: configSB || DEFAULT_STACK_BEHAVIOR
                };
                var newTweenQueue = state.tweenQueue;
                if (newConfig.stackBehavior === stackBehavior.DESTRUCTIVE) {
                    newTweenQueue = state.tweenQueue.filter(function (item) {
                        return item.pathHash !== pathHash;
                    });
                }
                // we store path hash, so that during value retrieval we can use hash
                // comparison to find the path. See the kind of shitty thing you have to
                // do when you don't have value comparison for collections?
                newTweenQueue.push({
                    pathHash: pathHash,
                    config: newConfig,
                    initTime: Date.now() + newConfig.delay
                });
                // sorry for mutating. For perf reasons we don't want to deep clone.
                // guys, can we please all start using persistent collections so that
                // we can stop worrying about nonesense like this
                cursor[stateName] = newConfig.endValue;
                if (newTweenQueue.length === 1) {
                    _this2._rafID = raf_default()(_this2._rafCb);
                }
                // this will also include the above mutated update
                return { tweenQueue: newTweenQueue };
            });
        }
    }, {
        key: 'getTweeningValue',
        value: function getTweeningValue(path) {
            var state = this.state;
            var tweeningValue = void 0;
            var pathHash = void 0;
            if (typeof path === 'string') {
                tweeningValue = state[path];
                pathHash = path;
            } else {
                tweeningValue = state;
                for (var i = 0; i < path.length; i++) {
                    tweeningValue = tweeningValue[path[i]];
                }
                pathHash = path.join('|');
            }
            var now = Date.now();
            for (var _i = 0; _i < state.tweenQueue.length; _i++) {
                var _state$tweenQueue$_i = state.tweenQueue[_i],
                    itemPathHash = _state$tweenQueue$_i.pathHash,
                    initTime = _state$tweenQueue$_i.initTime,
                    config = _state$tweenQueue$_i.config;

                if (itemPathHash !== pathHash) {
                    continue;
                }
                var progressTime = now - initTime > config.duration ? config.duration : Math.max(0, now - initTime);
                // `now - initTime` can be negative if initTime is scheduled in the
                // future by a delay. In this case we take 0
                // if duration is 0, consider that as jumping to endValue directly. This
                // is needed because the easing functino might have undefined behavior for
                // duration = 0
                var easeValue = config.duration === 0 ? config.endValue : config.easing(progressTime, config.beginValue, config.endValue, config.duration);
                var contrib = easeValue - config.endValue;
                tweeningValue += contrib;
            }
            return tweeningValue;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var children = react_default.a.Children.count(this.props.children) > 1 ? this.formatChildren(this.props.children) : this.props.children;
            return react_default.a.createElement(
                'div',
                { className: ['slider', this.props.className || ''].join(' '), ref: 'slider', style: extends_default()({}, this.getSliderStyles(), this.props.style) },
                react_default.a.createElement(
                    'div',
                    extends_default()({ className: 'slider-frame', ref: 'frame', style: this.getFrameStyles() }, this.getTouchEvents(), this.getMouseEvents(), { onClick: this.handleClick }),
                    react_default.a.createElement(
                        'ul',
                        { className: 'slider-list', ref: 'list', style: this.getListStyles() },
                        children
                    )
                ),
                this.props.decorators ? this.props.decorators.map(function (Decorator, index) {
                    return react_default.a.createElement(
                        'div',
                        { style: extends_default()({}, _this3.getDecoratorStyles(Decorator.position), Decorator.style || {}), className: 'slider-decorator-' + index, key: index },
                        react_default.a.createElement(Decorator.component, { currentSlide: _this3.state.currentSlide, slideCount: _this3.state.slideCount, frameWidth: _this3.state.frameWidth, slideWidth: _this3.state.slideWidth, slidesToScroll: _this3.state.slidesToScroll, cellSpacing: _this3.props.cellSpacing, slidesToShow: _this3.props.slidesToShow, wrapAround: _this3.props.wrapAround, nextSlide: _this3.nextSlide, previousSlide: _this3.previousSlide, goToSlide: _this3.goToSlide })
                    );
                }) : null,
                react_default.a.createElement('style', { type: 'text/css', dangerouslySetInnerHTML: { __html: this.getStyleTagStyles() } })
            );
        }
        // Touch Events

    }, {
        key: 'getTouchEvents',
        value: function getTouchEvents() {
            var self = this;
            if (this.props.swiping === false) {
                return null;
            }
            return {
                onTouchStart: function onTouchStart(e) {
                    self.touchObject = {
                        startX: e.touches[0].pageX,
                        startY: e.touches[0].pageY
                    };
                    self.handleMouseOver();
                },
                onTouchMove: function onTouchMove(e) {
                    var direction = self.swipeDirection(self.touchObject.startX, e.touches[0].pageX, self.touchObject.startY, e.touches[0].pageY);
                    if (direction !== 0) {
                        e.preventDefault();
                    }
                    var length = self.props.vertical ? Math.round(Math.sqrt(Math.pow(e.touches[0].pageY - self.touchObject.startY, 2))) : Math.round(Math.sqrt(Math.pow(e.touches[0].pageX - self.touchObject.startX, 2)));
                    self.touchObject = {
                        startX: self.touchObject.startX,
                        startY: self.touchObject.startY,
                        endX: e.touches[0].pageX,
                        endY: e.touches[0].pageY,
                        length: length,
                        direction: direction
                    };
                    self.setState({
                        left: self.props.vertical ? 0 : self.getTargetLeft(self.touchObject.length * self.touchObject.direction),
                        top: self.props.vertical ? self.getTargetLeft(self.touchObject.length * self.touchObject.direction) : 0
                    });
                },
                onTouchEnd: function onTouchEnd(e) {
                    self.handleSwipe(e);
                    self.handleMouseOut();
                },
                onTouchCancel: function onTouchCancel(e) {
                    self.handleSwipe(e);
                }
            };
        }
    }, {
        key: 'getMouseEvents',
        value: function getMouseEvents() {
            var self = this;
            if (this.props.dragging === false) {
                return null;
            }
            return {
                onMouseOver: function onMouseOver() {
                    self.handleMouseOver();
                },
                onMouseOut: function onMouseOut() {
                    self.handleMouseOut();
                },
                onMouseDown: function onMouseDown(e) {
                    self.touchObject = {
                        startX: e.clientX,
                        startY: e.clientY
                    };
                    self.setState({
                        dragging: true
                    });
                },
                onMouseMove: function onMouseMove(e) {
                    if (!self.state.dragging) {
                        return;
                    }
                    var direction = self.swipeDirection(self.touchObject.startX, e.clientX, self.touchObject.startY, e.clientY);
                    if (direction !== 0) {
                        e.preventDefault();
                    }
                    var length = self.props.vertical ? Math.round(Math.sqrt(Math.pow(e.clientY - self.touchObject.startY, 2))) : Math.round(Math.sqrt(Math.pow(e.clientX - self.touchObject.startX, 2)));
                    self.touchObject = {
                        startX: self.touchObject.startX,
                        startY: self.touchObject.startY,
                        endX: e.clientX,
                        endY: e.clientY,
                        length: length,
                        direction: direction
                    };
                    self.setState({
                        left: self.props.vertical ? 0 : self.getTargetLeft(self.touchObject.length * self.touchObject.direction),
                        top: self.props.vertical ? self.getTargetLeft(self.touchObject.length * self.touchObject.direction) : 0
                    });
                },
                onMouseUp: function onMouseUp(e) {
                    if (!self.state.dragging) {
                        return;
                    }
                    self.handleSwipe(e);
                },
                onMouseLeave: function onMouseLeave(e) {
                    if (!self.state.dragging) {
                        return;
                    }
                    self.handleSwipe(e);
                }
            };
        }
    }, {
        key: 'handleMouseOver',
        value: function handleMouseOver() {
            if (this.props.autoplay) {
                this.autoplayPaused = true;
                this.stopAutoplay();
            }
        }
    }, {
        key: 'handleMouseOut',
        value: function handleMouseOut() {
            if (this.props.autoplay && this.autoplayPaused) {
                this.startAutoplay();
                this.autoplayPaused = null;
            }
        }
    }, {
        key: 'handleSwipe',
        value: function handleSwipe(_) {
            if (typeof this.touchObject.length !== 'undefined' && this.touchObject.length > 44) {
                this.clickSafe = true;
            } else {
                this.clickSafe = false;
            }
            var _props = this.props,
                slidesToShow = _props.slidesToShow,
                slidesToScroll = _props.slidesToScroll,
                swipeSpeed = _props.swipeSpeed;
            // var slidesToShow = this.props.slidesToShow;

            if (slidesToScroll === 'auto') {
                slidesToShow = this.state.slidesToScroll;
            }
            if (react_default.a.Children.count(this.props.children) > 1 && this.touchObject.length > this.state.slideWidth / slidesToShow / swipeSpeed) {
                if (this.touchObject.direction === 1) {
                    if (this.state.currentSlide >= react_default.a.Children.count(this.props.children) - slidesToShow && !this.props.wrapAround) {
                        this.animateSlide(this.props.edgeEasing);
                    } else {
                        this.nextSlide();
                    }
                } else if (this.touchObject.direction === -1) {
                    if (this.state.currentSlide <= 0 && !this.props.wrapAround) {
                        this.animateSlide(this.props.edgeEasing);
                    } else {
                        this.previousSlide();
                    }
                }
            } else {
                this.goToSlide(this.state.currentSlide);
            }
            this.touchObject = {};
            this.setState({
                dragging: false
            });
        }
    }, {
        key: 'swipeDirection',
        value: function swipeDirection(x1, x2, y1, y2) {
            var xDist = x1 - x2;
            var yDist = y1 - y2;
            var r = Math.atan2(yDist, xDist);
            var swipeAngle = Math.round(r * 180 / Math.PI);
            if (swipeAngle < 0) {
                swipeAngle = 360 - Math.abs(swipeAngle);
            }
            if (swipeAngle <= 45 && swipeAngle >= 0) {
                return 1;
            }
            if (swipeAngle <= 360 && swipeAngle >= 315) {
                return 1;
            }
            if (swipeAngle >= 135 && swipeAngle <= 225) {
                return -1;
            }
            if (this.props.vertical === true) {
                if (swipeAngle >= 35 && swipeAngle <= 135) {
                    return 1;
                } else {
                    return -1;
                }
            }
            return 0;
        }
    }, {
        key: 'startAutoplay',
        value: function startAutoplay() {
            if (react_default.a.Children.count(this.props.children) <= 1) {
                return;
            }
            this.autoplayID = setInterval(this.autoplayIterator, this.props.autoplayInterval);
        }
    }, {
        key: 'resetAutoplay',
        value: function resetAutoplay() {
            if (this.props.resetAutoplay && this.props.autoplay && !this.autoplayPaused) {
                this.stopAutoplay();
                this.startAutoplay();
            }
        }
    }, {
        key: 'stopAutoplay',
        value: function stopAutoplay() {
            if (this.autoplayID) {
                clearInterval(this.autoplayID);
            }
        }
        // Animation

    }, {
        key: 'animateSlide',
        value: function animateSlide(easing, duration, endValue, callback) {
            this.tweenState(this.props.vertical ? 'top' : 'left', {
                easing: easing || this.props.easing,
                duration: duration || this.props.speed,
                endValue: endValue || this.getTargetLeft(),
                delay: null,
                beginValue: null,
                onEnd: callback || null,
                stackBehavior: stackBehavior
            });
        }
    }, {
        key: 'getTargetLeft',
        value: function getTargetLeft(touchOffset, slide) {
            var offset = void 0;
            var target = slide || this.state.currentSlide;
            var cellSpacing = this.props.cellSpacing;
            switch (this.props.cellAlign) {
                case 'left':
                    {
                        offset = 0;
                        offset -= cellSpacing * target;
                        break;
                    }
                case 'center':
                    {
                        offset = (this.state.frameWidth - this.state.slideWidth) / 2;
                        offset -= cellSpacing * target;
                        break;
                    }
                case 'right':
                    {
                        offset = this.state.frameWidth - this.state.slideWidth;
                        offset -= cellSpacing * target;
                        break;
                    }
                default:
                    break;
            }
            var left = this.state.slideWidth * target;
            var lastSlide = this.state.currentSlide > 0 && target + this.state.slidesToScroll >= this.state.slideCount;
            if (lastSlide && this.props.slideWidth !== 1 && !this.props.wrapAround && this.props.slidesToScroll === 'auto') {
                left = this.state.slideWidth * this.state.slideCount - this.state.frameWidth;
                offset = 0;
                offset -= cellSpacing * (this.state.slideCount - 1);
            }
            offset -= touchOffset || 0;
            return (left - offset) * -1;
        }
        // Bootstrapping

    }, {
        key: 'bindEvents',
        value: function bindEvents() {
            if (exenv_default.a.canUseDOM) {
                addEvent(window, 'resize', this.onResize);
                addEvent(document, 'readystatechange', this.onReadyStateChange);
            }
        }
    }, {
        key: 'unbindEvents',
        value: function unbindEvents() {
            if (exenv_default.a.canUseDOM) {
                removeEvent(window, 'resize', this.onResize);
                removeEvent(document, 'readystatechange', this.onReadyStateChange);
            }
        }
    }, {
        key: 'formatChildren',
        value: function formatChildren(children) {
            var _this4 = this;

            var positionValue = this.props.vertical ? this.getTweeningValue('top') : this.getTweeningValue('left');
            return react_default.a.Children.map(children, function (child, index) {
                return react_default.a.createElement(
                    'li',
                    { className: 'slider-slide', style: _this4.getSlideStyles(index, positionValue), key: index },
                    child
                );
            });
        }
    }, {
        key: 'setInitialDimensions',
        value: function setInitialDimensions() {
            var _this5 = this;

            var _props2 = this.props,
                vertical = _props2.vertical,
                initialSlideHeight = _props2.initialSlideHeight,
                initialSlideWidth = _props2.initialSlideWidth,
                slidesToShow = _props2.slidesToShow,
                cellSpacing = _props2.cellSpacing,
                children = _props2.children;

            var slideWidth = vertical ? initialSlideHeight || 0 : initialSlideWidth || 0;
            var slideHeight = initialSlideHeight ? initialSlideHeight * slidesToShow : 0;
            var frameHeight = slideHeight + cellSpacing * (slidesToShow - 1);
            this.setState({
                slideHeight: slideHeight,
                frameWidth: vertical ? frameHeight : '100%',
                slideCount: react_default.a.Children.count(children),
                slideWidth: slideWidth
            }, function () {
                _this5.setLeft();
                _this5.setExternalData();
            });
        }
    }, {
        key: 'setDimensions',
        value: function setDimensions(props) {
            var _this6 = this;

            props = props || this.props;
            var frameWidth = void 0;
            var frameHeight = void 0;
            var slideHeight = void 0;
            var slideWidth = void 0;
            var slidesToScroll = props.slidesToScroll;
            var frame = this.refs.frame;
            var firstSlide = frame.childNodes[0].childNodes[0];
            if (firstSlide) {
                firstSlide.style.height = 'auto';
                slideHeight = this.props.vertical ? firstSlide.offsetHeight * props.slidesToShow : firstSlide.offsetHeight;
            } else {
                slideHeight = 100;
            }
            if (typeof props.slideWidth !== 'number') {
                slideWidth = parseInt(props.slideWidth, 10);
            } else {
                if (props.vertical) {
                    slideWidth = slideHeight / props.slidesToShow * props.slideWidth;
                } else {
                    slideWidth = frame.offsetWidth / props.slidesToShow * props.slideWidth;
                }
            }
            if (!props.vertical) {
                slideWidth -= props.cellSpacing * ((100 - 100 / props.slidesToShow) / 100);
            }
            frameHeight = slideHeight + props.cellSpacing * (props.slidesToShow - 1);
            frameWidth = props.vertical ? frameHeight : frame.offsetWidth;
            if (props.slidesToScroll === 'auto') {
                slidesToScroll = Math.floor(frameWidth / (slideWidth + props.cellSpacing));
            }
            this.setState({
                slideHeight: slideHeight,
                frameWidth: frameWidth,
                slideWidth: slideWidth,
                slidesToScroll: slidesToScroll,
                left: props.vertical ? 0 : this.getTargetLeft(),
                top: props.vertical ? this.getTargetLeft() : 0
            }, function () {
                _this6.setLeft();
            });
        }
    }, {
        key: 'setLeft',
        value: function setLeft() {
            this.setState({
                left: this.props.vertical ? 0 : this.getTargetLeft(),
                top: this.props.vertical ? this.getTargetLeft() : 0
            });
        }
        // Data

    }, {
        key: 'setExternalData',
        value: function setExternalData() {
            if (this.props.data) {
                this.props.data();
            }
        }
        // Styles

    }, {
        key: 'getListStyles',
        value: function getListStyles() {
            var listWidth = this.state.slideWidth * react_default.a.Children.count(this.props.children);
            var cellSpacing = this.props.cellSpacing;
            var spacingOffset = cellSpacing * react_default.a.Children.count(this.props.children);
            var transform = 'translate3d(' + this.getTweeningValue('left') + 'px, ' + this.getTweeningValue('top') + 'px, 0)';
            return {
                transform: transform,
                WebkitTransform: transform,
                msTransform: 'translate(' + this.getTweeningValue('left') + 'px, ' + this.getTweeningValue('top') + 'px)',
                position: 'relative',
                display: 'block',
                margin: this.props.vertical ? cellSpacing / 2 * -1 + 'px 0px' : '0px ' + cellSpacing / 2 * -1 + 'px',
                padding: 0,
                height: this.props.vertical ? listWidth + spacingOffset : this.state.slideHeight,
                width: this.props.vertical ? 'auto' : listWidth + spacingOffset,
                cursor: this.state.dragging === true ? 'pointer' : 'inherit',
                boxSizing: 'border-box',
                MozBoxSizing: 'border-box'
            };
        }
    }, {
        key: 'getFrameStyles',
        value: function getFrameStyles() {
            return {
                position: 'relative',
                display: 'block',
                overflow: this.props.frameOverflow,
                height: this.props.vertical ? this.state.frameWidth || 'initial' : 'auto',
                margin: this.props.framePadding,
                padding: 0,
                transform: 'translate3d(0, 0, 0)',
                WebkitTransform: 'translate3d(0, 0, 0)',
                msTransform: 'translate(0, 0)',
                boxSizing: 'border-box',
                MozBoxSizing: 'border-box'
            };
        }
    }, {
        key: 'getSlideStyles',
        value: function getSlideStyles(index, positionValue) {
            var targetPosition = this.getSlideTargetPosition(index, positionValue);
            var cellSpacing = this.props.cellSpacing;
            return {
                position: 'absolute',
                left: this.props.vertical ? 0 : targetPosition,
                top: this.props.vertical ? targetPosition : 0,
                display: this.props.vertical ? 'block' : 'inline-block',
                listStyleType: 'none',
                verticalAlign: 'top',
                width: this.props.vertical ? '100%' : this.state.slideWidth,
                height: 'auto',
                boxSizing: 'border-box',
                MozBoxSizing: 'border-box',
                marginLeft: this.props.vertical ? 'auto' : cellSpacing / 2,
                marginRight: this.props.vertical ? 'auto' : cellSpacing / 2,
                marginTop: this.props.vertical ? cellSpacing / 2 : 'auto',
                marginBottom: this.props.vertical ? cellSpacing / 2 : 'auto'
            };
        }
    }, {
        key: 'getSlideTargetPosition',
        value: function getSlideTargetPosition(index, positionValue) {
            var slidesToShow = this.state.frameWidth / this.state.slideWidth;
            var targetPosition = (this.state.slideWidth + this.props.cellSpacing) * index;
            var end = (this.state.slideWidth + this.props.cellSpacing) * slidesToShow * -1;
            if (this.props.wrapAround) {
                var slidesBefore = Math.ceil(positionValue / this.state.slideWidth);
                if (this.state.slideCount - slidesBefore <= index) {
                    return (this.state.slideWidth + this.props.cellSpacing) * (this.state.slideCount - index) * -1;
                }
                var slidesAfter = Math.ceil((Math.abs(positionValue) - Math.abs(end)) / this.state.slideWidth);
                if (this.state.slideWidth !== 1) {
                    slidesAfter = Math.ceil((Math.abs(positionValue) - this.state.slideWidth) / this.state.slideWidth);
                }
                if (index <= slidesAfter - 1) {
                    return (this.state.slideWidth + this.props.cellSpacing) * (this.state.slideCount + index);
                }
            }
            return targetPosition;
        }
    }, {
        key: 'getSliderStyles',
        value: function getSliderStyles() {
            return {
                position: 'relative',
                display: 'block',
                width: this.props.width,
                height: 'auto',
                boxSizing: 'border-box',
                MozBoxSizing: 'border-box',
                visibility: this.state.slideWidth ? 'visible' : 'hidden'
            };
        }
    }, {
        key: 'getStyleTagStyles',
        value: function getStyleTagStyles() {
            return '.slider-slide > img {width: 100%; display: block;}';
        }
    }, {
        key: 'getDecoratorStyles',
        value: function getDecoratorStyles(position) {
            switch (position) {
                case 'TopLeft':
                    {
                        return {
                            position: 'absolute',
                            top: 0,
                            left: 0
                        };
                    }
                case 'TopCenter':
                    {
                        return {
                            position: 'absolute',
                            top: 0,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            WebkitTransform: 'translateX(-50%)',
                            msTransform: 'translateX(-50%)'
                        };
                    }
                case 'TopRight':
                    {
                        return {
                            position: 'absolute',
                            top: 0,
                            right: 0
                        };
                    }
                case 'CenterLeft':
                    {
                        return {
                            position: 'absolute',
                            top: '50%',
                            left: 0,
                            transform: 'translateY(-50%)',
                            WebkitTransform: 'translateY(-50%)',
                            msTransform: 'translateY(-50%)'
                        };
                    }
                case 'CenterCenter':
                    {
                        return {
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%,-50%)',
                            WebkitTransform: 'translate(-50%, -50%)',
                            msTransform: 'translate(-50%, -50%)'
                        };
                    }
                case 'CenterRight':
                    {
                        return {
                            position: 'absolute',
                            top: '50%',
                            right: 0,
                            transform: 'translateY(-50%)',
                            WebkitTransform: 'translateY(-50%)',
                            msTransform: 'translateY(-50%)'
                        };
                    }
                case 'BottomLeft':
                    {
                        return {
                            position: 'absolute',
                            bottom: 0,
                            left: 0
                        };
                    }
                case 'BottomCenter':
                    {
                        return {
                            position: 'absolute',
                            bottom: 0,
                            width: '100%',
                            textAlign: 'center'
                        };
                    }
                case 'BottomRight':
                    {
                        return {
                            position: 'absolute',
                            bottom: 0,
                            right: 0
                        };
                    }
                default:
                    {
                        return {
                            position: 'absolute',
                            top: 0,
                            left: 0
                        };
                    }
            }
        }
    }]);

    return Carousel;
}(react_default.a.Component);

carousel_Carousel.defaultProps = {
    afterSlide: function afterSlide() {},
    autoplay: false,
    resetAutoplay: true,
    swipeSpeed: 12,
    autoplayInterval: 3000,
    beforeSlide: function beforeSlide() {},
    cellAlign: 'left',
    cellSpacing: 0,
    data: function data() {},
    decorators: decorators,
    dragging: true,
    easing: easeOutCirc,
    edgeEasing: linear,
    framePadding: '0px',
    frameOverflow: 'hidden',
    slideIndex: 0,
    slidesToScroll: 1,
    slidesToShow: 1,
    slideWidth: 1,
    speed: 500,
    swiping: true,
    vertical: false,
    width: '100%',
    wrapAround: false,
    style: {}
};
/* harmony default export */ var carousel = (carousel_Carousel);
// CONCATENATED MODULE: ./node_modules/rmc-nuka-carousel/es/index.js

// CONCATENATED MODULE: ./node_modules/antd-mobile/es/carousel/index.js






var carousel_rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};




var es_carousel_Carousel = function (_React$Component) {
    inherits_default()(Carousel, _React$Component);

    function Carousel(props) {
        classCallCheck_default()(this, Carousel);

        var _this = possibleConstructorReturn_default()(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

        _this.onChange = function (index) {
            _this.setState({
                selectedIndex: index
            }, function () {
                if (_this.props.afterChange) {
                    _this.props.afterChange(index);
                }
            });
        };
        _this.state = {
            selectedIndex: _this.props.selectedIndex
        };
        return _this;
    }

    createClass_default()(Carousel, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                infinite = _a.infinite,
                selectedIndex = _a.selectedIndex,
                beforeChange = _a.beforeChange,
                afterChange = _a.afterChange,
                dots = _a.dots,
                restProps = carousel_rest(_a, ["infinite", "selectedIndex", "beforeChange", "afterChange", "dots"]);var prefixCls = restProps.prefixCls,
                dotActiveStyle = restProps.dotActiveStyle,
                dotStyle = restProps.dotStyle,
                className = restProps.className,
                vertical = restProps.vertical;

            var newProps = extends_default()({}, restProps, { wrapAround: infinite, slideIndex: selectedIndex, beforeSlide: beforeChange });
            var Decorators = [];
            if (dots) {
                Decorators = [{
                    component: function component(_ref) {
                        var slideCount = _ref.slideCount,
                            slidesToScroll = _ref.slidesToScroll,
                            currentSlide = _ref.currentSlide;

                        var arr = [];
                        for (var i = 0; i < slideCount; i += slidesToScroll) {
                            arr.push(i);
                        }
                        var dotDom = arr.map(function (index) {
                            var dotCls = classnames_default()(prefixCls + '-wrap-dot', defineProperty_default()({}, prefixCls + '-wrap-dot-active', index === currentSlide));
                            var currentDotStyle = index === currentSlide ? dotActiveStyle : dotStyle;
                            return react["createElement"](
                                'div',
                                { className: dotCls, key: index },
                                react["createElement"]('span', { style: currentDotStyle })
                            );
                        });
                        return react["createElement"](
                            'div',
                            { className: prefixCls + '-wrap' },
                            dotDom
                        );
                    },
                    position: 'BottomCenter'
                }];
            }
            var wrapCls = classnames_default()(prefixCls, className, defineProperty_default()({}, prefixCls + '-vertical', vertical));
            return react["createElement"](carousel, extends_default()({}, newProps, { className: wrapCls, decorators: Decorators, afterSlide: this.onChange }));
        }
    }]);

    return Carousel;
}(react["Component"]);

/* harmony default export */ var es_carousel = (es_carousel_Carousel);

es_carousel_Carousel.defaultProps = {
    prefixCls: 'am-carousel',
    dots: true,
    arrows: false,
    autoplay: false,
    infinite: false,
    cellAlign: 'center',
    selectedIndex: 0,
    dotStyle: {},
    dotActiveStyle: {}
};
// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("jo6Y");
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: ./node_modules/rc-util/es/PureRenderMixin.js
var PureRenderMixin = __webpack_require__("+8km");
var PureRenderMixin_default = /*#__PURE__*/__webpack_require__.n(PureRenderMixin);

// CONCATENATED MODULE: ./node_modules/rc-checkbox/es/Checkbox.js












var Checkbox_Checkbox = function (_React$Component) {
  inherits_default()(Checkbox, _React$Component);

  function Checkbox(props) {
    classCallCheck_default()(this, Checkbox);

    var _this = possibleConstructorReturn_default()(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props));

    Checkbox_initialiseProps.call(_this);

    var checked = 'checked' in props ? props.checked : props.defaultChecked;

    _this.state = {
      checked: checked
    };
    return _this;
  }

  createClass_default()(Checkbox, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('checked' in nextProps) {
        this.setState({
          checked: nextProps.checked
        });
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return PureRenderMixin_default.a.shouldComponentUpdate.apply(this, args);
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          prefixCls = _props.prefixCls,
          className = _props.className,
          style = _props.style,
          name = _props.name,
          type = _props.type,
          disabled = _props.disabled,
          readOnly = _props.readOnly,
          tabIndex = _props.tabIndex,
          onClick = _props.onClick,
          onFocus = _props.onFocus,
          onBlur = _props.onBlur,
          others = objectWithoutProperties_default()(_props, ['prefixCls', 'className', 'style', 'name', 'type', 'disabled', 'readOnly', 'tabIndex', 'onClick', 'onFocus', 'onBlur']);

      var globalProps = Object.keys(others).reduce(function (prev, key) {
        if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
          prev[key] = others[key];
        }
        return prev;
      }, {});

      var checked = this.state.checked;

      var classString = classnames_default()(prefixCls, className, (_classNames = {}, defineProperty_default()(_classNames, prefixCls + '-checked', checked), defineProperty_default()(_classNames, prefixCls + '-disabled', disabled), _classNames));

      return react_default.a.createElement(
        'span',
        { className: classString, style: style },
        react_default.a.createElement('input', extends_default()({
          name: name,
          type: type,
          readOnly: readOnly,
          disabled: disabled,
          tabIndex: tabIndex,
          className: prefixCls + '-input',
          checked: !!checked,
          onClick: onClick,
          onFocus: onFocus,
          onBlur: onBlur,
          onChange: this.handleChange
        }, globalProps)),
        react_default.a.createElement('span', { className: prefixCls + '-inner' })
      );
    }
  }]);

  return Checkbox;
}(react_default.a.Component);

Checkbox_Checkbox.propTypes = {
  prefixCls: prop_types_default.a.string,
  className: prop_types_default.a.string,
  style: prop_types_default.a.object,
  name: prop_types_default.a.string,
  type: prop_types_default.a.string,
  defaultChecked: prop_types_default.a.oneOfType([prop_types_default.a.number, prop_types_default.a.bool]),
  checked: prop_types_default.a.oneOfType([prop_types_default.a.number, prop_types_default.a.bool]),
  disabled: prop_types_default.a.bool,
  onFocus: prop_types_default.a.func,
  onBlur: prop_types_default.a.func,
  onChange: prop_types_default.a.func,
  onClick: prop_types_default.a.func,
  tabIndex: prop_types_default.a.string,
  readOnly: prop_types_default.a.bool
};
Checkbox_Checkbox.defaultProps = {
  prefixCls: 'rc-checkbox',
  className: '',
  style: {},
  type: 'checkbox',
  defaultChecked: false,
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onChange: function onChange() {}
};

var Checkbox_initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.handleChange = function (e) {
    var props = _this2.props;

    if (props.disabled) {
      return;
    }
    if (!('checked' in props)) {
      _this2.setState({
        checked: e.target.checked
      });
    }
    props.onChange({
      target: extends_default()({}, props, {
        checked: e.target.checked
      }),
      stopPropagation: function stopPropagation() {
        e.stopPropagation();
      },
      preventDefault: function preventDefault() {
        e.preventDefault();
      }
    });
  };
};

/* harmony default export */ var es_Checkbox = (Checkbox_Checkbox);
// CONCATENATED MODULE: ./node_modules/rc-checkbox/es/index.js

// CONCATENATED MODULE: ./node_modules/antd-mobile/es/checkbox/Checkbox.js




var Checkbox_rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};




var checkbox_Checkbox_Checkbox = function (_React$Component) {
    inherits_default()(Checkbox, _React$Component);

    function Checkbox() {
        classCallCheck_default()(this, Checkbox);

        return possibleConstructorReturn_default()(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments));
    }

    createClass_default()(Checkbox, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                className = _a.className,
                style = _a.style,
                restProps = Checkbox_rest(_a, ["className", "style"]);var prefixCls = restProps.prefixCls,
                children = restProps.children;

            var wrapCls = classnames_default()(prefixCls + '-wrapper', className);
            // Todo: wait for https://github.com/developit/preact-compat/issues/422, then we can remove class below
            if ('class' in restProps) {
                /* tslint:disable:no-string-literal */
                delete restProps['class'];
            }
            var mark = react["createElement"](
                'label',
                { className: wrapCls, style: style },
                react["createElement"](es_Checkbox, restProps),
                children
            );
            if (this.props.wrapLabel) {
                return mark;
            }
            return react["createElement"](es_Checkbox, this.props);
        }
    }]);

    return Checkbox;
}(react["Component"]);

/* harmony default export */ var checkbox_Checkbox = (checkbox_Checkbox_Checkbox);

checkbox_Checkbox_Checkbox.defaultProps = {
    prefixCls: 'am-checkbox',
    wrapLabel: true
};
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/checkbox/AgreeItem.js





var AgreeItem_rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};





var AgreeItem_AgreeItem = function (_React$Component) {
    inherits_default()(AgreeItem, _React$Component);

    function AgreeItem() {
        classCallCheck_default()(this, AgreeItem);

        return possibleConstructorReturn_default()(this, (AgreeItem.__proto__ || Object.getPrototypeOf(AgreeItem)).apply(this, arguments));
    }

    createClass_default()(AgreeItem, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                style = _a.style,
                restProps = AgreeItem_rest(_a, ["style"]);var prefixCls = restProps.prefixCls,
                className = restProps.className;

            var wrapCls = classnames_default()(prefixCls + '-agree', className);
            return react["createElement"](
                'div',
                extends_default()({}, getDataAttr(restProps), { className: wrapCls, style: style }),
                react["createElement"](checkbox_Checkbox, extends_default()({}, restProps, { className: prefixCls + '-agree-label' }))
            );
        }
    }]);

    return AgreeItem;
}(react["Component"]);

/* harmony default export */ var checkbox_AgreeItem = (AgreeItem_AgreeItem);

AgreeItem_AgreeItem.defaultProps = {
    prefixCls: 'am-checkbox'
};
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/list/ListItem.js






var ListItem_rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
/* tslint:disable:jsx-no-multiline-js */



var ListItem_Brief = function (_React$Component) {
    inherits_default()(Brief, _React$Component);

    function Brief() {
        classCallCheck_default()(this, Brief);

        return possibleConstructorReturn_default()(this, (Brief.__proto__ || Object.getPrototypeOf(Brief)).apply(this, arguments));
    }

    createClass_default()(Brief, [{
        key: 'render',
        value: function render() {
            return react["createElement"](
                'div',
                { className: 'am-list-brief', style: this.props.style },
                this.props.children
            );
        }
    }]);

    return Brief;
}(react["Component"]);

var ListItem_ListItem = function (_React$Component2) {
    inherits_default()(ListItem, _React$Component2);

    function ListItem(props) {
        classCallCheck_default()(this, ListItem);

        var _this2 = possibleConstructorReturn_default()(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).call(this, props));

        _this2.onClick = function (ev) {
            var _this2$props = _this2.props,
                onClick = _this2$props.onClick,
                platform = _this2$props.platform;

            var isAndroid = platform === 'android';
            if (!!onClick && isAndroid) {
                if (_this2.debounceTimeout) {
                    clearTimeout(_this2.debounceTimeout);
                    _this2.debounceTimeout = null;
                }
                var Item = ev.currentTarget;
                var RippleWidth = Math.max(Item.offsetHeight, Item.offsetWidth);
                var ClientRect = ev.currentTarget.getBoundingClientRect();
                var pointX = ev.clientX - ClientRect.left - Item.offsetWidth / 2;
                var pointY = ev.clientY - ClientRect.top - Item.offsetWidth / 2;
                var coverRippleStyle = {
                    width: RippleWidth + 'px',
                    height: RippleWidth + 'px',
                    left: pointX + 'px',
                    top: pointY + 'px'
                };
                _this2.setState({
                    coverRippleStyle: coverRippleStyle,
                    RippleClicked: true
                }, function () {
                    _this2.debounceTimeout = setTimeout(function () {
                        _this2.setState({
                            coverRippleStyle: { display: 'none' },
                            RippleClicked: false
                        });
                    }, 1000);
                });
            }
            if (onClick) {
                onClick(ev);
            }
        };
        _this2.state = {
            coverRippleStyle: { display: 'none' },
            RippleClicked: false
        };
        return _this2;
    }

    createClass_default()(ListItem, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.debounceTimeout) {
                clearTimeout(this.debounceTimeout);
                this.debounceTimeout = null;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _classnames,
                _classnames3,
                _classnames4,
                _this3 = this;

            var _a = this.props,
                prefixCls = _a.prefixCls,
                className = _a.className,
                activeStyle = _a.activeStyle,
                error = _a.error,
                align = _a.align,
                wrap = _a.wrap,
                disabled = _a.disabled,
                children = _a.children,
                multipleLine = _a.multipleLine,
                thumb = _a.thumb,
                extra = _a.extra,
                arrow = _a.arrow,
                onClick = _a.onClick,
                restProps = ListItem_rest(_a, ["prefixCls", "className", "activeStyle", "error", "align", "wrap", "disabled", "children", "multipleLine", "thumb", "extra", "arrow", "onClick"]);var platform = restProps.platform,
                otherProps = ListItem_rest(restProps, ["platform"]);var _state = this.state,
                coverRippleStyle = _state.coverRippleStyle,
                RippleClicked = _state.RippleClicked;

            var wrapCls = classnames_default()(prefixCls + '-item', className, (_classnames = {}, defineProperty_default()(_classnames, prefixCls + '-item-disabled', disabled), defineProperty_default()(_classnames, prefixCls + '-item-error', error), defineProperty_default()(_classnames, prefixCls + '-item-top', align === 'top'), defineProperty_default()(_classnames, prefixCls + '-item-middle', align === 'middle'), defineProperty_default()(_classnames, prefixCls + '-item-bottom', align === 'bottom'), _classnames));
            var rippleCls = classnames_default()(prefixCls + '-ripple', defineProperty_default()({}, prefixCls + '-ripple-animate', RippleClicked));
            var lineCls = classnames_default()(prefixCls + '-line', (_classnames3 = {}, defineProperty_default()(_classnames3, prefixCls + '-line-multiple', multipleLine), defineProperty_default()(_classnames3, prefixCls + '-line-wrap', wrap), _classnames3));
            var arrowCls = classnames_default()(prefixCls + '-arrow', (_classnames4 = {}, defineProperty_default()(_classnames4, prefixCls + '-arrow-horizontal', arrow === 'horizontal'), defineProperty_default()(_classnames4, prefixCls + '-arrow-vertical', arrow === 'down' || arrow === 'up'), defineProperty_default()(_classnames4, prefixCls + '-arrow-vertical-up', arrow === 'up'), _classnames4));
            var content = react["createElement"](
                'div',
                extends_default()({}, otherProps, { onClick: function onClick(ev) {
                        _this3.onClick(ev);
                    }, className: wrapCls }),
                thumb ? react["createElement"](
                    'div',
                    { className: prefixCls + '-thumb' },
                    typeof thumb === 'string' ? react["createElement"]('img', { src: thumb }) : thumb
                ) : null,
                react["createElement"](
                    'div',
                    { className: lineCls },
                    children !== undefined && react["createElement"](
                        'div',
                        { className: prefixCls + '-content' },
                        children
                    ),
                    extra !== undefined && react["createElement"](
                        'div',
                        { className: prefixCls + '-extra' },
                        extra
                    ),
                    arrow && react["createElement"]('div', { className: arrowCls, 'aria-hidden': 'true' })
                ),
                react["createElement"]('div', { style: coverRippleStyle, className: rippleCls })
            );
            var touchProps = {};
            Object.keys(otherProps).forEach(function (key) {
                if (/onTouch/i.test(key)) {
                    touchProps[key] = otherProps[key];
                    delete otherProps[key];
                }
            });
            return react["createElement"](
                es_TouchFeedback,
                extends_default()({}, touchProps, { disabled: disabled || !onClick, activeStyle: activeStyle, activeClassName: prefixCls + '-item-active' }),
                content
            );
        }
    }]);

    return ListItem;
}(react["Component"]);

ListItem_ListItem.defaultProps = {
    prefixCls: 'am-list',
    align: 'middle',
    error: false,
    multipleLine: false,
    wrap: false,
    platform: 'ios'
};
ListItem_ListItem.Brief = ListItem_Brief;
/* harmony default export */ var list_ListItem = (ListItem_ListItem);
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/list/index.js





var list_rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
/* tslint:disable:jsx-no-multiline-js */




var list_List = function (_React$Component) {
    inherits_default()(List, _React$Component);

    function List() {
        classCallCheck_default()(this, List);

        return possibleConstructorReturn_default()(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
    }

    createClass_default()(List, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                prefixCls = _a.prefixCls,
                children = _a.children,
                className = _a.className,
                style = _a.style,
                renderHeader = _a.renderHeader,
                renderFooter = _a.renderFooter,
                restProps = list_rest(_a, ["prefixCls", "children", "className", "style", "renderHeader", "renderFooter"]);
            var wrapCls = classnames_default()(prefixCls, className);
            return react["createElement"](
                'div',
                extends_default()({ className: wrapCls, style: style }, restProps),
                renderHeader ? react["createElement"](
                    'div',
                    { className: prefixCls + '-header' },
                    typeof renderHeader === 'function' ? renderHeader() : renderHeader
                ) : null,
                children ? react["createElement"](
                    'div',
                    { className: prefixCls + '-body' },
                    children
                ) : null,
                renderFooter ? react["createElement"](
                    'div',
                    { className: prefixCls + '-footer' },
                    typeof renderFooter === 'function' ? renderFooter() : renderFooter
                ) : null
            );
        }
    }]);

    return List;
}(react["Component"]);

/* harmony default export */ var list = (list_List);

list_List.Item = list_ListItem;
list_List.defaultProps = {
    prefixCls: 'am-list'
};
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/checkbox/CheckboxItem.js






var CheckboxItem_rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};




var CheckboxItem_ListItem = list.Item;
// tslint:disable-next-line:no-empty
function CheckboxItem_noop() {}

var CheckboxItem_CheckboxItem = function (_React$Component) {
    inherits_default()(CheckboxItem, _React$Component);

    function CheckboxItem() {
        classCallCheck_default()(this, CheckboxItem);

        return possibleConstructorReturn_default()(this, (CheckboxItem.__proto__ || Object.getPrototypeOf(CheckboxItem)).apply(this, arguments));
    }

    createClass_default()(CheckboxItem, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _a = this.props,
                listPrefixCls = _a.listPrefixCls,
                onChange = _a.onChange,
                disabled = _a.disabled,
                checkboxProps = _a.checkboxProps,
                onClick = _a.onClick,
                restProps = CheckboxItem_rest(_a, ["listPrefixCls", "onChange", "disabled", "checkboxProps", "onClick"]);var prefixCls = restProps.prefixCls,
                className = restProps.className,
                children = restProps.children;

            var wrapCls = classnames_default()(prefixCls + '-item', className, defineProperty_default()({}, prefixCls + '-item-disabled', disabled === true));
            // Note: if not omit `onChange`, it will trigger twice on check listitem
            if (!disabled) {
                restProps.onClick = onClick || CheckboxItem_noop;
            }
            var extraProps = {};
            ['name', 'defaultChecked', 'checked', 'onChange', 'disabled'].forEach(function (i) {
                if (i in _this2.props) {
                    extraProps[i] = _this2.props[i];
                }
            });
            return react["createElement"](
                CheckboxItem_ListItem,
                extends_default()({}, restProps, { prefixCls: listPrefixCls, className: wrapCls, thumb: react["createElement"](checkbox_Checkbox, extends_default()({}, checkboxProps, extraProps)) }),
                children
            );
        }
    }]);

    return CheckboxItem;
}(react["Component"]);

/* harmony default export */ var checkbox_CheckboxItem = (CheckboxItem_CheckboxItem);

CheckboxItem_CheckboxItem.defaultProps = {
    prefixCls: 'am-checkbox',
    listPrefixCls: 'am-list',
    checkboxProps: {}
};
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/checkbox/index.js



checkbox_Checkbox.CheckboxItem = checkbox_CheckboxItem;
checkbox_Checkbox.AgreeItem = checkbox_AgreeItem;
/* harmony default export */ var es_checkbox = (checkbox_Checkbox);
// CONCATENATED MODULE: ./node_modules/rmc-picker/es/PopupMixin.js
function PopupMixin_extends() { PopupMixin_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return PopupMixin_extends.apply(this, arguments); }

function PopupMixin_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function PopupMixin_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PopupMixin_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PopupMixin_createClass(Constructor, protoProps, staticProps) { if (protoProps) PopupMixin_defineProperties(Constructor.prototype, protoProps); if (staticProps) PopupMixin_defineProperties(Constructor, staticProps); return Constructor; }

function PopupMixin_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return PopupMixin_assertThisInitialized(self); }

function PopupMixin_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function PopupMixin_getPrototypeOf(o) { PopupMixin_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return PopupMixin_getPrototypeOf(o); }

function PopupMixin_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) PopupMixin_setPrototypeOf(subClass, superClass); }

function PopupMixin_setPrototypeOf(o, p) { PopupMixin_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return PopupMixin_setPrototypeOf(o, p); }


function PopupMixin(getModal, platformProps) {
  var _a;

  return _a =
  /*#__PURE__*/
  function (_React$Component) {
    PopupMixin_inherits(_a, _React$Component);

    function _a(props) {
      var _this;

      PopupMixin_classCallCheck(this, _a);

      _this = PopupMixin_possibleConstructorReturn(this, PopupMixin_getPrototypeOf(_a).call(this, props));

      _this.onPickerChange = function (pickerValue) {
        if (_this.state.pickerValue !== pickerValue) {
          _this.setState({
            pickerValue: pickerValue
          });

          var _this$props = _this.props,
              picker = _this$props.picker,
              pickerValueChangeProp = _this$props.pickerValueChangeProp;

          if (picker && picker.props[pickerValueChangeProp]) {
            picker.props[pickerValueChangeProp](pickerValue);
          }
        }
      };

      _this.saveRef = function (picker) {
        _this.picker = picker;
      };

      _this.onTriggerClick = function (e) {
        var child = _this.props.children;
        var childProps = child.props || {};

        if (childProps[_this.props.triggerType]) {
          childProps[_this.props.triggerType](e);
        }

        _this.fireVisibleChange(!_this.state.visible);
      };

      _this.onOk = function () {
        _this.props.onOk(_this.picker && _this.picker.getValue());

        _this.fireVisibleChange(false);
      };

      _this.getContent = function () {
        if (_this.props.picker) {
          var _React$cloneElement;

          var pickerValue = _this.state.pickerValue;

          if (pickerValue === null) {
            pickerValue = _this.props.value;
          }

          return react["cloneElement"](_this.props.picker, (_React$cloneElement = {}, PopupMixin_defineProperty(_React$cloneElement, _this.props.pickerValueProp, pickerValue), PopupMixin_defineProperty(_React$cloneElement, _this.props.pickerValueChangeProp, _this.onPickerChange), PopupMixin_defineProperty(_React$cloneElement, "ref", _this.saveRef), _React$cloneElement));
        } else {
          return _this.props.content;
        }
      };

      _this.onDismiss = function () {
        _this.props.onDismiss();

        _this.fireVisibleChange(false);
      };

      _this.hide = function () {
        _this.fireVisibleChange(false);
      };

      _this.state = {
        pickerValue: 'value' in _this.props ? _this.props.value : null,
        visible: _this.props.visible || false
      };
      return _this;
    }

    PopupMixin_createClass(_a, [{
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
          this.setState({
            pickerValue: nextProps.value
          });
        }

        if ('visible' in nextProps) {
          this.setVisibleState(nextProps.visible);
        }
      }
    }, {
      key: "setVisibleState",
      value: function setVisibleState(visible) {
        this.setState({
          visible: visible
        });

        if (!visible) {
          this.setState({
            pickerValue: null
          });
        }
      }
    }, {
      key: "fireVisibleChange",
      value: function fireVisibleChange(visible) {
        if (this.state.visible !== visible) {
          if (!('visible' in this.props)) {
            this.setVisibleState(visible);
          }

          this.props.onVisibleChange(visible);
        }
      }
    }, {
      key: "getRender",
      value: function getRender() {
        var props = this.props;
        var children = props.children;

        if (!children) {
          return getModal(props, this.state.visible, {
            getContent: this.getContent,
            onOk: this.onOk,
            hide: this.hide,
            onDismiss: this.onDismiss
          });
        }

        var _this$props2 = this.props,
            WrapComponent = _this$props2.WrapComponent,
            disabled = _this$props2.disabled;
        var child = children;
        var newChildProps = {};

        if (!disabled) {
          newChildProps[props.triggerType] = this.onTriggerClick;
        }

        return react["createElement"](WrapComponent, {
          style: props.wrapStyle
        }, react["cloneElement"](child, newChildProps), getModal(props, this.state.visible, {
          getContent: this.getContent,
          onOk: this.onOk,
          hide: this.hide,
          onDismiss: this.onDismiss
        }));
      }
    }, {
      key: "render",
      value: function render() {
        return this.getRender();
      }
    }]);

    return _a;
  }(react["Component"]), _a.defaultProps = PopupMixin_extends({
    onVisibleChange: function onVisibleChange(_) {},
    okText: 'Ok',
    dismissText: 'Dismiss',
    title: '',
    onOk: function onOk(_) {},
    onDismiss: function onDismiss() {}
  }, platformProps), _a;
}
// CONCATENATED MODULE: ./node_modules/rmc-picker/es/Popup.js





var Popup_getModal = function getModal(props, visible, _ref) {
  var getContent = _ref.getContent,
      hide = _ref.hide,
      onDismiss = _ref.onDismiss,
      onOk = _ref.onOk;

  if (!visible) {
    return null;
  }

  var prefixCls = props.prefixCls;
  return react["createElement"](es_DialogWrap, {
    prefixCls: "".concat(prefixCls),
    className: props.className || '',
    visible: true,
    closable: false,
    transitionName: props.transitionName || props.popupTransitionName,
    maskTransitionName: props.maskTransitionName,
    onClose: hide,
    style: props.style
  }, react["createElement"]("div", null, react["createElement"]("div", {
    className: "".concat(prefixCls, "-header")
  }, react["createElement"](es_TouchFeedback, {
    activeClassName: "".concat(prefixCls, "-item-active")
  }, react["createElement"]("div", {
    className: "".concat(prefixCls, "-item ").concat(prefixCls, "-header-left"),
    onClick: onDismiss
  }, props.dismissText)), react["createElement"]("div", {
    className: "".concat(prefixCls, "-item ").concat(prefixCls, "-title")
  }, props.title), react["createElement"](es_TouchFeedback, {
    activeClassName: "".concat(prefixCls, "-item-active")
  }, react["createElement"]("div", {
    className: "".concat(prefixCls, "-item ").concat(prefixCls, "-header-right"),
    onClick: onOk
  }, props.okText))), getContent()));
};

/* harmony default export */ var es_Popup = (PopupMixin(Popup_getModal, {
  prefixCls: 'rmc-picker-popup',
  WrapComponent: 'span',
  triggerType: 'onClick',
  pickerValueProp: 'selectedValue',
  pickerValueChangeProp: 'onValueChange'
}));
// CONCATENATED MODULE: ./node_modules/rmc-date-picker/es/Popup.js








var Popup_PopupDatePicker = function (_React$Component) {
    inherits_default()(PopupDatePicker, _React$Component);

    function PopupDatePicker() {
        classCallCheck_default()(this, PopupDatePicker);

        var _this = possibleConstructorReturn_default()(this, (PopupDatePicker.__proto__ || Object.getPrototypeOf(PopupDatePicker)).apply(this, arguments));

        _this.onOk = function (v) {
            var _this$props = _this.props,
                onChange = _this$props.onChange,
                onOk = _this$props.onOk;

            if (onChange) {
                onChange(v);
            }
            if (onOk) {
                onOk(v);
            }
        };
        return _this;
    }

    createClass_default()(PopupDatePicker, [{
        key: 'render',
        value: function render() {
            return react_default.a.createElement(es_Popup, extends_default()({ picker: this.props.datePicker, value: this.props.date }, this.props, { onOk: this.onOk }));
        }
    }]);

    return PopupDatePicker;
}(react_default.a.Component);

Popup_PopupDatePicker.defaultProps = {
    pickerValueProp: 'date',
    pickerValueChangeProp: 'onDateChange'
};
/* harmony default export */ var rmc_date_picker_es_Popup = (Popup_PopupDatePicker);
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/date-picker/utils.js

function formatIt(date, form) {
    var pad = function pad(n) {
        return n < 10 ? '0' + n : n;
    };
    var dateStr = date.getFullYear() + '-' + pad(date.getMonth() + 1) + '-' + pad(date.getDate());
    var timeStr = pad(date.getHours()) + ':' + pad(date.getMinutes());
    if (form === 'YYYY-MM-DD') {
        return dateStr;
    }
    if (form === 'HH:mm') {
        return timeStr;
    }
    return dateStr + ' ' + timeStr;
}
function formatFn(instance, value) {
    var formatsEnum = {
        date: 'YYYY-MM-DD',
        time: 'HH:mm',
        datetime: 'YYYY-MM-DD HH:mm'
    };
    var format = instance.props.format;

    var type = typeof format === 'undefined' ? 'undefined' : typeof_default()(format);
    if (type === 'string') {
        return formatIt(value, format);
    }
    if (type === 'function') {
        return format(value);
    }
    return formatIt(value, formatsEnum[instance.props.mode]);
}
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/date-picker/index.js





/* tslint:disable:jsx-no-multiline-js */







var date_picker_DatePicker = function (_React$Component) {
    inherits_default()(DatePicker, _React$Component);

    function DatePicker() {
        classCallCheck_default()(this, DatePicker);

        var _this = possibleConstructorReturn_default()(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).apply(this, arguments));

        _this.setScrollValue = function (v) {
            _this.scrollValue = v;
        };
        _this.onOk = function (v) {
            if (_this.scrollValue !== undefined) {
                v = _this.scrollValue;
            }
            if (_this.props.onChange) {
                _this.props.onChange(v);
            }
            if (_this.props.onOk) {
                _this.props.onOk(v);
            }
        };
        _this.onVisibleChange = function (visible) {
            _this.scrollValue = undefined;
            if (_this.props.onVisibleChange) {
                _this.props.onVisibleChange(visible);
            }
        };
        _this.fixOnOk = function (picker) {
            if (picker) {
                picker.onOk = _this.onOk;
            }
        };
        return _this;
    }

    createClass_default()(DatePicker, [{
        key: 'render',
        value: function render() {
            // tslint:disable-next-line:no-this-assignment
            var props = this.props,
                context = this.context;
            var children = props.children,
                value = props.value,
                popupPrefixCls = props.popupPrefixCls;

            var locale = getComponentLocale(props, context, 'DatePicker', function () {
                return __webpack_require__("PyX8");
            });
            var okText = locale.okText,
                dismissText = locale.dismissText,
                extra = locale.extra,
                DatePickerLocale = locale.DatePickerLocale;
            /**
             * 注意:
             * 受控 表示 通过设置 value 属性、组件的最终状态跟 value 设置值一致。
             * 默认不设置 value 或 只设置 defaultValue 表示非受控。
             *
             * DatePickerView 对外通过 value “只支持 受控” 模式（可以使用 defaultDate 支持 非受控 模式，但不对外）
             * PickerView 对外通过 value “只支持 受控” 模式
             *
             * DatePicker / Picker 对外只有 value 属性 (没有 defaultValue)，
             * 其中 List 展示部分 “只支持 受控” 模式，
             * 弹出的 选择器部分 会随外部 value 改变而变、同时能自由滚动
             * （即不会因为传入的 value 不变而不能滚动 (不像原生 input 的受控行为)）
             *
             */

            var datePicker = react["createElement"](es_DatePicker, { minuteStep: props.minuteStep, locale: DatePickerLocale, minDate: props.minDate, maxDate: props.maxDate, mode: props.mode, pickerPrefixCls: props.pickerPrefixCls, prefixCls: props.prefixCls, defaultDate: value || new Date(), use12Hours: props.use12Hours, onValueChange: props.onValueChange, onScrollChange: this.setScrollValue });
            return react["createElement"](
                rmc_date_picker_es_Popup,
                extends_default()({ datePicker: datePicker, WrapComponent: 'div', transitionName: 'am-slide-up', maskTransitionName: 'am-fade' }, props, { prefixCls: popupPrefixCls, date: value || new Date(), dismissText: this.props.dismissText || dismissText, okText: this.props.okText || okText, ref: this.fixOnOk, onVisibleChange: this.onVisibleChange }),
                children && react["isValidElement"](children) && react["cloneElement"](children, {
                    extra: value ? formatFn(this, value) : this.props.extra || extra
                })
            );
        }
    }]);

    return DatePicker;
}(react["Component"]);

/* harmony default export */ var date_picker = (date_picker_DatePicker);

date_picker_DatePicker.defaultProps = {
    mode: 'datetime',
    prefixCls: 'am-picker',
    pickerPrefixCls: 'am-picker-col',
    popupPrefixCls: 'am-picker-popup',
    minuteStep: 1,
    use12Hours: false
};
date_picker_DatePicker.contextTypes = {
    antLocale: prop_types["object"]
};
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/date-picker-view/date-picker-view.js










var date_picker_view_DatePickerView = function (_React$Component) {
    inherits_default()(DatePickerView, _React$Component);

    function DatePickerView() {
        classCallCheck_default()(this, DatePickerView);

        return possibleConstructorReturn_default()(this, (DatePickerView.__proto__ || Object.getPrototypeOf(DatePickerView)).apply(this, arguments));
    }

    createClass_default()(DatePickerView, [{
        key: 'render',
        value: function render() {
            // tslint:disable-next-line:no-this-assignment
            var props = this.props,
                context = this.context;

            var locale = getComponentLocale(props, context, 'DatePickerView', function () {
                return __webpack_require__("pKt7");
            });
            // DatePicker use `defaultDate`, maybe because there are PopupDatePicker inside? @yiminghe
            // Here Use `date` instead of `defaultDate`, make it controlled fully.
            return react["createElement"](es_DatePicker, extends_default()({}, props, { locale: locale, date: props.value, onDateChange: props.onChange, onValueChange: props.onValueChange, onScrollChange: props.onScrollChange }));
        }
    }]);

    return DatePickerView;
}(react["Component"]);

/* harmony default export */ var date_picker_view = (date_picker_view_DatePickerView);

date_picker_view_DatePickerView.defaultProps = {
    mode: 'datetime',
    extra: '请选择',
    prefixCls: 'am-picker',
    pickerPrefixCls: 'am-picker-col',
    minuteStep: 1,
    use12Hours: false
};
date_picker_view_DatePickerView.contextTypes = {
    antLocale: prop_types["object"]
};
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/date-picker-view/index.js

/* harmony default export */ var es_date_picker_view = (date_picker_view);
// CONCATENATED MODULE: ./node_modules/rmc-drawer/es/Drawer.js












function getOffset(ele) {
  var el = ele;
  var _x = 0;
  var _y = 0;
  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    _x += el.offsetLeft - el.scrollLeft;
    _y += el.offsetTop - el.scrollTop;
    el = el.offsetParent;
  }
  return { top: _y, left: _x };
}

var CANCEL_DISTANCE_ON_SCROLL = 20;

var Drawer_Drawer = function (_React$Component) {
  inherits_default()(Drawer, _React$Component);

  function Drawer(props) {
    classCallCheck_default()(this, Drawer);

    var _this = possibleConstructorReturn_default()(this, (Drawer.__proto__ || Object.getPrototypeOf(Drawer)).call(this, props));

    _this.onOverlayClicked = function () {
      if (_this.props.open) {
        // see https://github.com/react-component/drawer/issues/9
        setTimeout(function () {
          _this.props.onOpenChange(false, { overlayClicked: true });
        }, 0);
      }
    };

    _this.onTouchStart = function (ev) {
      // filter out if a user starts swiping with a second finger
      if (!_this.isTouching()) {
        var touch = ev.targetTouches[0];
        _this.setState({
          touchIdentifier: !_this.notTouch ? touch.identifier : null,
          touchStartX: touch.clientX,
          touchStartY: touch.clientY,
          touchCurrentX: touch.clientX,
          touchCurrentY: touch.clientY
        });
      }
    };

    _this.onTouchMove = function (ev) {
      // ev.preventDefault(); // cannot touchmove with FastClick
      if (_this.isTouching()) {
        for (var ind = 0; ind < ev.targetTouches.length; ind++) {
          // we only care about the finger that we are tracking
          if (ev.targetTouches[ind].identifier === _this.state.touchIdentifier) {
            _this.setState({
              touchCurrentX: ev.targetTouches[ind].clientX,
              touchCurrentY: ev.targetTouches[ind].clientY
            });
            break;
          }
        }
      }
    };

    _this.onTouchEnd = function () {
      _this.notTouch = false;
      if (_this.isTouching()) {
        // trigger a change to open if sidebar has been dragged beyond dragToggleDistance
        var touchWidth = _this.touchSidebarWidth();

        if (_this.props.open && touchWidth < _this.state.sidebarWidth - _this.props.dragToggleDistance || !_this.props.open && touchWidth > _this.props.dragToggleDistance) {
          _this.props.onOpenChange(!_this.props.open);
        }

        var touchHeight = _this.touchSidebarHeight();

        if (_this.props.open && touchHeight < _this.state.sidebarHeight - _this.props.dragToggleDistance || !_this.props.open && touchHeight > _this.props.dragToggleDistance) {
          _this.props.onOpenChange(!_this.props.open);
        }

        _this.setState({
          touchIdentifier: null,
          touchStartX: null,
          touchStartY: null,
          touchCurrentX: null,
          touchCurrentY: null
        });
      }
    };

    _this.onScroll = function () {
      if (_this.isTouching() && _this.inCancelDistanceOnScroll()) {
        _this.setState({
          touchIdentifier: null,
          touchStartX: null,
          touchStartY: null,
          touchCurrentX: null,
          touchCurrentY: null
        });
      }
    };

    _this.inCancelDistanceOnScroll = function () {
      var cancelDistanceOnScroll = void 0;
      switch (_this.props.position) {
        case 'right':
          cancelDistanceOnScroll = Math.abs(_this.state.touchCurrentX - _this.state.touchStartX) < CANCEL_DISTANCE_ON_SCROLL;
          break;
        case 'bottom':
          cancelDistanceOnScroll = Math.abs(_this.state.touchCurrentY - _this.state.touchStartY) < CANCEL_DISTANCE_ON_SCROLL;
          break;
        case 'top':
          cancelDistanceOnScroll = Math.abs(_this.state.touchStartY - _this.state.touchCurrentY) < CANCEL_DISTANCE_ON_SCROLL;
          break;
        case 'left':
        default:
          cancelDistanceOnScroll = Math.abs(_this.state.touchStartX - _this.state.touchCurrentX) < CANCEL_DISTANCE_ON_SCROLL;
      }
      return cancelDistanceOnScroll;
    };

    _this.isTouching = function () {
      return _this.state.touchIdentifier !== null;
    };

    _this.saveSidebarSize = function () {
      var sidebar = react_dom_default.a.findDOMNode(_this.refs.sidebar);
      var width = sidebar.offsetWidth;
      var height = sidebar.offsetHeight;
      var sidebarTop = getOffset(react_dom_default.a.findDOMNode(_this.refs.sidebar)).top;
      var dragHandleTop = getOffset(react_dom_default.a.findDOMNode(_this.refs.dragHandle)).top;

      if (width !== _this.state.sidebarWidth) {
        _this.setState({ sidebarWidth: width });
      }
      if (height !== _this.state.sidebarHeight) {
        _this.setState({ sidebarHeight: height });
      }
      if (sidebarTop !== _this.state.sidebarTop) {
        _this.setState({ sidebarTop: sidebarTop });
      }
      if (dragHandleTop !== _this.state.dragHandleTop) {
        _this.setState({ dragHandleTop: dragHandleTop });
      }
    };

    _this.touchSidebarWidth = function () {
      // if the sidebar is open and start point of drag is inside the sidebar
      // we will only drag the distance they moved their finger
      // otherwise we will move the sidebar to be below the finger.
      if (_this.props.position === 'right') {
        if (_this.props.open && window.innerWidth - _this.state.touchStartX < _this.state.sidebarWidth) {
          if (_this.state.touchCurrentX > _this.state.touchStartX) {
            return _this.state.sidebarWidth + _this.state.touchStartX - _this.state.touchCurrentX;
          }
          return _this.state.sidebarWidth;
        }
        return Math.min(window.innerWidth - _this.state.touchCurrentX, _this.state.sidebarWidth);
      }

      if (_this.props.position === 'left') {
        if (_this.props.open && _this.state.touchStartX < _this.state.sidebarWidth) {
          if (_this.state.touchCurrentX > _this.state.touchStartX) {
            return _this.state.sidebarWidth;
          }
          return _this.state.sidebarWidth - _this.state.touchStartX + _this.state.touchCurrentX;
        }
        return Math.min(_this.state.touchCurrentX, _this.state.sidebarWidth);
      }
    };

    _this.touchSidebarHeight = function () {
      // if the sidebar is open and start point of drag is inside the sidebar
      // we will only drag the distance they moved their finger
      // otherwise we will move the sidebar to be below the finger.
      if (_this.props.position === 'bottom') {
        if (_this.props.open && window.innerHeight - _this.state.touchStartY < _this.state.sidebarHeight) {
          if (_this.state.touchCurrentY > _this.state.touchStartY) {
            return _this.state.sidebarHeight + _this.state.touchStartY - _this.state.touchCurrentY;
          }
          return _this.state.sidebarHeight;
        }
        return Math.min(window.innerHeight - _this.state.touchCurrentY, _this.state.sidebarHeight);
      }

      if (_this.props.position === 'top') {
        var touchStartOffsetY = _this.state.touchStartY - _this.state.sidebarTop;
        if (_this.props.open && touchStartOffsetY < _this.state.sidebarHeight) {
          if (_this.state.touchCurrentY > _this.state.touchStartY) {
            return _this.state.sidebarHeight;
          }
          return _this.state.sidebarHeight - _this.state.touchStartY + _this.state.touchCurrentY;
        }
        return Math.min(_this.state.touchCurrentY - _this.state.dragHandleTop, _this.state.sidebarHeight);
      }
    };

    _this.renderStyle = function (_ref) {
      var sidebarStyle = _ref.sidebarStyle,
          isTouching = _ref.isTouching,
          overlayStyle = _ref.overlayStyle,
          contentStyle = _ref.contentStyle;

      if (_this.props.position === 'right' || _this.props.position === 'left') {
        sidebarStyle.transform = 'translateX(0%)';
        sidebarStyle.WebkitTransform = 'translateX(0%)';
        if (isTouching) {
          var percentage = _this.touchSidebarWidth() / _this.state.sidebarWidth;
          // slide open to what we dragged
          if (_this.props.position === 'right') {
            sidebarStyle.transform = 'translateX(' + (1 - percentage) * 100 + '%)';
            sidebarStyle.WebkitTransform = 'translateX(' + (1 - percentage) * 100 + '%)';
          }
          if (_this.props.position === 'left') {
            sidebarStyle.transform = 'translateX(-' + (1 - percentage) * 100 + '%)';
            sidebarStyle.WebkitTransform = 'translateX(-' + (1 - percentage) * 100 + '%)';
          }
          // fade overlay to match distance of drag
          overlayStyle.opacity = percentage;
          overlayStyle.visibility = 'visible';
        }
        if (contentStyle) {
          contentStyle[_this.props.position] = _this.state.sidebarWidth + 'px';
        }
      }
      if (_this.props.position === 'top' || _this.props.position === 'bottom') {
        sidebarStyle.transform = 'translateY(0%)';
        sidebarStyle.WebkitTransform = 'translateY(0%)';
        if (isTouching) {
          var _percentage = _this.touchSidebarHeight() / _this.state.sidebarHeight;
          // slide open to what we dragged
          if (_this.props.position === 'bottom') {
            sidebarStyle.transform = 'translateY(' + (1 - _percentage) * 100 + '%)';
            sidebarStyle.WebkitTransform = 'translateY(' + (1 - _percentage) * 100 + '%)';
          }
          if (_this.props.position === 'top') {
            sidebarStyle.transform = 'translateY(-' + (1 - _percentage) * 100 + '%)';
            sidebarStyle.WebkitTransform = 'translateY(-' + (1 - _percentage) * 100 + '%)';
          }
          // fade overlay to match distance of drag
          overlayStyle.opacity = _percentage;
          overlayStyle.visibility = 'visible';
        }
        if (contentStyle) {
          contentStyle[_this.props.position] = _this.state.sidebarHeight + 'px';
        }
      }
    };

    _this.state = {
      // the detected width of the sidebar in pixels
      sidebarWidth: 0,
      sidebarHeight: 0,
      sidebarTop: 0,
      dragHandleTop: 0,

      // keep track of touching params
      touchIdentifier: null,
      touchStartX: null,
      touchStartY: null,
      touchCurrentX: null,
      touchCurrentY: null,

      // if touch is supported by the browser
      touchSupported: (typeof window === 'undefined' ? 'undefined' : typeof_default()(window)) === 'object' && 'ontouchstart' in window
    };
    return _this;
  }

  createClass_default()(Drawer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.saveSidebarSize();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      // filter out the updates when we're touching
      if (!this.isTouching()) {
        this.saveSidebarSize();
      }
    }

    // This logic helps us prevents the user from sliding the sidebar horizontally
    // while scrolling the sidebar vertically. When a scroll event comes in, we're
    // cancelling the ongoing gesture if it did not move horizontally much.


    // True if the on going gesture X distance is less than the cancel distance


    // calculate the sidebarWidth based on current touch info

    // calculate the sidebarHeight based on current touch info

  }, {
    key: 'render',
    value: function render() {
      var _rootCls,
          _this2 = this;

      var _props = this.props,
          className = _props.className,
          style = _props.style,
          prefixCls = _props.prefixCls,
          position = _props.position,
          transitions = _props.transitions,
          touch = _props.touch,
          enableDragHandle = _props.enableDragHandle,
          sidebar = _props.sidebar,
          children = _props.children,
          docked = _props.docked,
          open = _props.open;


      var sidebarStyle = extends_default()({}, this.props.sidebarStyle);
      var contentStyle = extends_default()({}, this.props.contentStyle);
      var overlayStyle = extends_default()({}, this.props.overlayStyle);

      var rootCls = (_rootCls = {}, defineProperty_default()(_rootCls, className, !!className), defineProperty_default()(_rootCls, prefixCls, true), defineProperty_default()(_rootCls, prefixCls + '-' + position, true), _rootCls);

      var rootProps = { style: style };
      var isTouching = this.isTouching();

      if (isTouching) {
        this.renderStyle({ sidebarStyle: sidebarStyle, isTouching: true, overlayStyle: overlayStyle });
      } else if (docked) {
        if (this.state.sidebarWidth !== 0) {
          rootCls[prefixCls + '-docked'] = true;
          this.renderStyle({ sidebarStyle: sidebarStyle, contentStyle: contentStyle });
        }
      } else if (open) {
        rootCls[prefixCls + '-open'] = true;
        this.renderStyle({ sidebarStyle: sidebarStyle });
        overlayStyle.opacity = 1;
        overlayStyle.visibility = 'visible';
      }

      if (isTouching || !transitions) {
        sidebarStyle.transition = 'none';
        sidebarStyle.WebkitTransition = 'none';
        contentStyle.transition = 'none';
        overlayStyle.transition = 'none';
      }

      var dragHandle = null;

      if (this.state.touchSupported && touch) {
        if (open) {
          rootProps.onTouchStart = function (ev) {
            _this2.notTouch = true;
            _this2.onTouchStart(ev);
          };
          rootProps.onTouchMove = this.onTouchMove;
          rootProps.onTouchEnd = this.onTouchEnd;
          rootProps.onTouchCancel = this.onTouchEnd;
          rootProps.onScroll = this.onScroll;
        } else if (enableDragHandle) {
          dragHandle = react_default.a.createElement('div', { className: prefixCls + '-draghandle', style: this.props.dragHandleStyle,
            onTouchStart: this.onTouchStart, onTouchMove: this.onTouchMove,
            onTouchEnd: this.onTouchEnd, onTouchCancel: this.onTouchEnd,
            ref: 'dragHandle'
          });
        }
      }

      // const evt = {};
      // // FastClick use touchstart instead of click
      // if (this.state.touchSupported) {
      //   evt.onTouchStart = () => {
      //     this.notTouch = true;
      //     this.onOverlayClicked();
      //   };
      //   evt.onTouchEnd = () => {
      //     this.notTouch = false;
      //     this.setState({
      //       touchIdentifier: null,
      //     });
      //   };
      // } else {
      //   evt.onClick = this.onOverlayClicked;
      // }

      return react_default.a.createElement(
        'div',
        extends_default()({ className: classnames_default()(rootCls) }, rootProps),
        react_default.a.createElement(
          'div',
          { className: prefixCls + '-sidebar', style: sidebarStyle,
            ref: 'sidebar'
          },
          sidebar
        ),
        react_default.a.createElement('div', { className: prefixCls + '-overlay',
          style: overlayStyle,
          role: 'presentation',
          ref: 'overlay',
          onClick: this.onOverlayClicked
        }),
        react_default.a.createElement(
          'div',
          { className: prefixCls + '-content', style: contentStyle,
            ref: 'content'
          },
          dragHandle,
          children
        )
      );
    }
  }]);

  return Drawer;
}(react_default.a.Component);

Drawer_Drawer.propTypes = {
  prefixCls: prop_types_default.a.string,
  className: prop_types_default.a.string,
  // main content to render
  children: prop_types_default.a.node.isRequired,

  // styles
  // styles: PropTypes.shape({
  //   dragHandle: PropTypes.object,
  // }),
  style: prop_types_default.a.object,
  sidebarStyle: prop_types_default.a.object,
  contentStyle: prop_types_default.a.object,
  overlayStyle: prop_types_default.a.object,
  dragHandleStyle: prop_types_default.a.object,

  // sidebar content to render
  sidebar: prop_types_default.a.node.isRequired,

  // boolean if sidebar should be docked
  docked: prop_types_default.a.bool,

  // boolean if sidebar should slide open
  open: prop_types_default.a.bool,

  // boolean if transitions should be disabled
  transitions: prop_types_default.a.bool,

  // boolean if touch gestures are enabled
  touch: prop_types_default.a.bool,
  enableDragHandle: prop_types_default.a.bool,

  // where to place the sidebar
  position: prop_types_default.a.oneOf(['left', 'right', 'top', 'bottom']),

  // distance we have to drag the sidebar to toggle open state
  dragToggleDistance: prop_types_default.a.number,

  // callback called when the overlay is clicked
  onOpenChange: prop_types_default.a.func
};
Drawer_Drawer.defaultProps = {
  prefixCls: 'rmc-drawer',
  sidebarStyle: {},
  contentStyle: {},
  overlayStyle: {},
  dragHandleStyle: {},
  docked: false,
  open: false,
  transitions: true,
  touch: true,
  enableDragHandle: true,
  position: 'left',
  dragToggleDistance: 30,
  onOpenChange: function onOpenChange() {}
};
/* harmony default export */ var es_Drawer = (Drawer_Drawer);
// CONCATENATED MODULE: ./node_modules/rmc-drawer/es/index.js
// export this package's api

/* harmony default export */ var rmc_drawer_es = (es_Drawer);
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/drawer/index.js







var drawer_Drawer = function (_React$Component) {
    inherits_default()(Drawer, _React$Component);

    function Drawer() {
        classCallCheck_default()(this, Drawer);

        return possibleConstructorReturn_default()(this, (Drawer.__proto__ || Object.getPrototypeOf(Drawer)).apply(this, arguments));
    }

    createClass_default()(Drawer, [{
        key: 'render',
        value: function render() {
            return react["createElement"](rmc_drawer_es, this.props);
        }
    }]);

    return Drawer;
}(react["Component"]);

/* harmony default export */ var drawer = (drawer_Drawer);

drawer_Drawer.defaultProps = {
    prefixCls: 'am-drawer',
    enableDragHandle: false
};
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/flex/Flex.js






var Flex_rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};



var Flex_Flex = function (_React$Component) {
    inherits_default()(Flex, _React$Component);

    function Flex() {
        classCallCheck_default()(this, Flex);

        return possibleConstructorReturn_default()(this, (Flex.__proto__ || Object.getPrototypeOf(Flex)).apply(this, arguments));
    }

    createClass_default()(Flex, [{
        key: 'render',
        value: function render() {
            var _classnames;

            var _a = this.props,
                direction = _a.direction,
                wrap = _a.wrap,
                justify = _a.justify,
                align = _a.align,
                alignContent = _a.alignContent,
                className = _a.className,
                children = _a.children,
                prefixCls = _a.prefixCls,
                style = _a.style,
                restProps = Flex_rest(_a, ["direction", "wrap", "justify", "align", "alignContent", "className", "children", "prefixCls", "style"]);
            var wrapCls = classnames_default()(prefixCls, className, (_classnames = {}, defineProperty_default()(_classnames, prefixCls + '-dir-row', direction === 'row'), defineProperty_default()(_classnames, prefixCls + '-dir-row-reverse', direction === 'row-reverse'), defineProperty_default()(_classnames, prefixCls + '-dir-column', direction === 'column'), defineProperty_default()(_classnames, prefixCls + '-dir-column-reverse', direction === 'column-reverse'), defineProperty_default()(_classnames, prefixCls + '-nowrap', wrap === 'nowrap'), defineProperty_default()(_classnames, prefixCls + '-wrap', wrap === 'wrap'), defineProperty_default()(_classnames, prefixCls + '-wrap-reverse', wrap === 'wrap-reverse'), defineProperty_default()(_classnames, prefixCls + '-justify-start', justify === 'start'), defineProperty_default()(_classnames, prefixCls + '-justify-end', justify === 'end'), defineProperty_default()(_classnames, prefixCls + '-justify-center', justify === 'center'), defineProperty_default()(_classnames, prefixCls + '-justify-between', justify === 'between'), defineProperty_default()(_classnames, prefixCls + '-justify-around', justify === 'around'), defineProperty_default()(_classnames, prefixCls + '-align-start', align === 'start'), defineProperty_default()(_classnames, prefixCls + '-align-center', align === 'center'), defineProperty_default()(_classnames, prefixCls + '-align-end', align === 'end'), defineProperty_default()(_classnames, prefixCls + '-align-baseline', align === 'baseline'), defineProperty_default()(_classnames, prefixCls + '-align-stretch', align === 'stretch'), defineProperty_default()(_classnames, prefixCls + '-align-content-start', alignContent === 'start'), defineProperty_default()(_classnames, prefixCls + '-align-content-end', alignContent === 'end'), defineProperty_default()(_classnames, prefixCls + '-align-content-center', alignContent === 'center'), defineProperty_default()(_classnames, prefixCls + '-align-content-between', alignContent === 'between'), defineProperty_default()(_classnames, prefixCls + '-align-content-around', alignContent === 'around'), defineProperty_default()(_classnames, prefixCls + '-align-content-stretch', alignContent === 'stretch'), _classnames));
            return react["createElement"](
                'div',
                extends_default()({ className: wrapCls, style: style }, restProps),
                children
            );
        }
    }]);

    return Flex;
}(react["Component"]);

/* harmony default export */ var flex_Flex = (Flex_Flex);

Flex_Flex.defaultProps = {
    prefixCls: 'am-flexbox',
    align: 'center'
};
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/flex/FlexItem.js





var FlexItem_rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};



var FlexItem_FlexItem = function (_React$Component) {
    inherits_default()(FlexItem, _React$Component);

    function FlexItem() {
        classCallCheck_default()(this, FlexItem);

        return possibleConstructorReturn_default()(this, (FlexItem.__proto__ || Object.getPrototypeOf(FlexItem)).apply(this, arguments));
    }

    createClass_default()(FlexItem, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                children = _a.children,
                className = _a.className,
                prefixCls = _a.prefixCls,
                style = _a.style,
                restProps = FlexItem_rest(_a, ["children", "className", "prefixCls", "style"]);
            var wrapCls = classnames_default()(prefixCls + '-item', className);
            return react["createElement"](
                'div',
                extends_default()({ className: wrapCls, style: style }, restProps),
                children
            );
        }
    }]);

    return FlexItem;
}(react["Component"]);

/* harmony default export */ var flex_FlexItem = (FlexItem_FlexItem);

FlexItem_FlexItem.defaultProps = {
    prefixCls: 'am-flexbox'
};
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/flex/index.js


flex_Flex.Item = flex_FlexItem;
/* harmony default export */ var flex = (flex_Flex);
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/grid/index.js






var grid_rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
/* tslint:disable:jsx-no-multiline-js */






var grid_Grid = function (_React$Component) {
    inherits_default()(Grid, _React$Component);

    function Grid() {
        classCallCheck_default()(this, Grid);

        var _this = possibleConstructorReturn_default()(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).apply(this, arguments));

        _this.state = {
            initialSlideWidth: 0
        };
        _this.renderCarousel = function (rowsArr, pageCount, rowCount) {
            var prefixCls = _this.props.prefixCls;

            var carouselMaxRow = _this.props.carouselMaxRow;
            var pagesArr = [];
            for (var pageIndex = 0; pageIndex < pageCount; pageIndex++) {
                var pageRows = [];
                for (var ii = 0; ii < carouselMaxRow; ii++) {
                    var rowIndex = pageIndex * carouselMaxRow + ii;
                    if (rowIndex < rowCount) {
                        pageRows.push(rowsArr[rowIndex]);
                    } else {
                        // 空节点为了确保末尾页的最后未到底的行有底线(样式中last-child会没线)
                        pageRows.push(react["createElement"]('div', { key: 'gridline-' + rowIndex }));
                    }
                }
                pagesArr.push(react["createElement"](
                    'div',
                    { key: 'pageitem-' + pageIndex, className: prefixCls + '-carousel-page' },
                    pageRows
                ));
            }
            return pagesArr;
        };
        _this.renderItem = function (dataItem, index, columnNum, renderItem) {
            var prefixCls = _this.props.prefixCls;

            var itemEl = null;
            if (renderItem) {
                itemEl = renderItem(dataItem, index);
            } else {
                if (dataItem) {
                    var icon = dataItem.icon,
                        text = dataItem.text;

                    itemEl = react["createElement"](
                        'div',
                        { className: prefixCls + '-item-inner-content column-num-' + columnNum },
                        react["isValidElement"](icon) ? icon : react["createElement"]('img', { className: prefixCls + '-icon', src: icon }),
                        react["createElement"](
                            'div',
                            { className: prefixCls + '-text' },
                            text
                        )
                    );
                }
            }
            return react["createElement"](
                'div',
                { className: prefixCls + '-item-content' },
                itemEl
            );
        };
        _this.getRows = function (rowCount, dataLength) {
            // tslint:disable:prefer-const
            var _this$props = _this.props,
                columnNum = _this$props.columnNum,
                data = _this$props.data,
                renderItem = _this$props.renderItem,
                prefixCls = _this$props.prefixCls,
                _onClick = _this$props.onClick,
                activeStyle = _this$props.activeStyle,
                activeClassName = _this$props.activeClassName,
                itemStyle = _this$props.itemStyle;

            var rowsArr = [];
            columnNum = columnNum;
            var rowWidth = 100 / columnNum + '%';
            var colStyle = extends_default()({ width: rowWidth }, itemStyle);
            for (var i = 0; i < rowCount; i++) {
                var rowArr = [];

                var _loop = function _loop(j) {
                    var dataIndex = i * columnNum + j;
                    var itemEl = void 0;
                    if (dataIndex < dataLength) {
                        var el = data && data[dataIndex];
                        itemEl = react["createElement"](
                            es_TouchFeedback,
                            { key: 'griditem-' + dataIndex, activeClassName: activeClassName ? activeClassName : prefixCls + '-item-active', activeStyle: activeStyle },
                            react["createElement"](
                                flex.Item,
                                { className: prefixCls + '-item', onClick: function onClick() {
                                        return _onClick && _onClick(el, dataIndex);
                                    }, style: colStyle },
                                _this.renderItem(el, dataIndex, columnNum, renderItem)
                            )
                        );
                    } else {
                        itemEl = react["createElement"](flex.Item, { key: 'griditem-' + dataIndex, className: prefixCls + '-item ' + prefixCls + '-null-item', style: colStyle });
                    }
                    rowArr.push(itemEl);
                };

                for (var j = 0; j < columnNum; j++) {
                    _loop(j);
                }
                rowsArr.push(react["createElement"](
                    flex,
                    { justify: 'center', align: 'stretch', key: 'gridline-' + i },
                    rowArr
                ));
            }
            return rowsArr;
        };
        return _this;
    }

    createClass_default()(Grid, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({
                initialSlideWidth: document.documentElement.clientWidth
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _classnames;

            var _a = this.props,
                prefixCls = _a.prefixCls,
                className = _a.className,
                data = _a.data,
                hasLine = _a.hasLine,
                isCarousel = _a.isCarousel,
                square = _a.square,
                activeStyle = _a.activeStyle,
                activeClassName = _a.activeClassName,
                restProps = grid_rest(_a, ["prefixCls", "className", "data", "hasLine", "isCarousel", "square", "activeStyle", "activeClassName"]);
            var columnNum = restProps.columnNum,
                carouselMaxRow = restProps.carouselMaxRow,
                onClick = restProps.onClick,
                renderItem = restProps.renderItem,
                restPropsForCarousel = grid_rest(restProps, ["columnNum", "carouselMaxRow", "onClick", "renderItem"]);

            var initialSlideWidth = this.state.initialSlideWidth;

            columnNum = columnNum;
            carouselMaxRow = carouselMaxRow;
            var dataLength = data && data.length || 0;
            var rowCount = Math.ceil(dataLength / columnNum);
            var rowsArr = void 0;
            var renderEl = void 0;
            if (isCarousel) {
                if (initialSlideWidth < 0) {
                    // carousel  server render. because carousel dependes on document
                    return null;
                }
                if (rowCount % carouselMaxRow !== 0) {
                    rowCount = rowCount + carouselMaxRow - rowCount % carouselMaxRow;
                }
                var pageCount = Math.ceil(rowCount / carouselMaxRow);
                rowsArr = this.getRows(rowCount, dataLength);
                var carouselProps = {};
                if (pageCount <= 1) {
                    carouselProps = {
                        dots: false,
                        dragging: false,
                        swiping: false
                    };
                }
                renderEl = react["createElement"](
                    es_carousel,
                    extends_default()({ initialSlideWidth: initialSlideWidth }, restPropsForCarousel, carouselProps),
                    this.renderCarousel(rowsArr, pageCount, rowCount)
                );
            } else {
                rowsArr = this.getRows(rowCount, dataLength);
                renderEl = rowsArr;
            }
            var cls = classnames_default()(prefixCls, className, (_classnames = {}, defineProperty_default()(_classnames, prefixCls + '-square', square), defineProperty_default()(_classnames, prefixCls + '-line', hasLine), defineProperty_default()(_classnames, prefixCls + '-carousel', isCarousel), _classnames));
            return react["createElement"](
                'div',
                { className: cls },
                renderEl
            );
        }
    }]);

    return Grid;
}(react["Component"]);

/* harmony default export */ var grid = (grid_Grid);

grid_Grid.defaultProps = {
    data: [],
    hasLine: true,
    isCarousel: false,
    columnNum: 4,
    carouselMaxRow: 2,
    prefixCls: 'am-grid',
    square: true,
    itemStyle: {}
};
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/image-picker/index.js




/* tslint:disable:no-bitwise */




function image_picker_noop() {}

var image_picker_ImagePicker = function (_React$Component) {
    inherits_default()(ImagePicker, _React$Component);

    function ImagePicker() {
        classCallCheck_default()(this, ImagePicker);

        // http://stackoverflow.com/questions/7584794/accessing-jpeg-exif-rotation-data-in-javascript-on-the-client-side
        var _this = possibleConstructorReturn_default()(this, (ImagePicker.__proto__ || Object.getPrototypeOf(ImagePicker)).apply(this, arguments));

        _this.getOrientation = function (file, callback) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var view = new DataView(e.target.result);
                if (view.getUint16(0, false) !== 0xffd8) {
                    return callback(-2);
                }
                var length = view.byteLength;
                var offset = 2;
                while (offset < length) {
                    var marker = view.getUint16(offset, false);
                    offset += 2;
                    if (marker === 0xffe1) {
                        var tmp = view.getUint32(offset += 2, false);
                        if (tmp !== 0x45786966) {
                            return callback(-1);
                        }
                        var little = view.getUint16(offset += 6, false) === 0x4949;
                        offset += view.getUint32(offset + 4, little);
                        var tags = view.getUint16(offset, little);
                        offset += 2;
                        for (var i = 0; i < tags; i++) {
                            if (view.getUint16(offset + i * 12, little) === 0x0112) {
                                return callback(view.getUint16(offset + i * 12 + 8, little));
                            }
                        }
                    } else if ((marker & 0xff00) !== 0xff00) {
                        break;
                    } else {
                        offset += view.getUint16(offset, false);
                    }
                }
                return callback(-1);
            };
            reader.readAsArrayBuffer(file.slice(0, 64 * 1024));
        };
        _this.getRotation = function () {
            var orientation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

            var imgRotation = 0;
            switch (orientation) {
                case 3:
                    imgRotation = 180;
                    break;
                case 6:
                    imgRotation = 90;
                    break;
                case 8:
                    imgRotation = 270;
                    break;
                default:
            }
            return imgRotation;
        };
        _this.removeImage = function (index) {
            var newImages = [];
            var _this$props$files = _this.props.files,
                files = _this$props$files === undefined ? [] : _this$props$files;

            files.forEach(function (image, idx) {
                if (index !== idx) {
                    newImages.push(image);
                }
            });
            if (_this.props.onChange) {
                _this.props.onChange(newImages, 'remove', index);
            }
        };
        _this.addImage = function (imgItem) {
            var _this$props$files2 = _this.props.files,
                files = _this$props$files2 === undefined ? [] : _this$props$files2;

            var newImages = files.concat(imgItem);
            if (_this.props.onChange) {
                _this.props.onChange(newImages, 'add');
            }
        };
        _this.onImageClick = function (index) {
            if (_this.props.onImageClick) {
                _this.props.onImageClick(index, _this.props.files);
            }
        };
        _this.onFileChange = function () {
            var fileSelectorEl = _this.fileSelectorInput;
            if (fileSelectorEl && fileSelectorEl.files && fileSelectorEl.files.length) {
                var files = fileSelectorEl.files;
                var imageParsePromiseList = [];
                for (var i = 0; i < files.length; i++) {
                    imageParsePromiseList.push(_this.parseFile(files[i], i));
                }
                Promise.all(imageParsePromiseList).then(function (imageItems) {
                    return _this.addImage(imageItems);
                })['catch'](function (error) {
                    if (_this.props.onFail) {
                        _this.props.onFail(error);
                    }
                });
            }
            if (fileSelectorEl) {
                fileSelectorEl.value = '';
            }
        };
        _this.parseFile = function (file, index) {
            return new Promise(function (resolve, reject) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var dataURL = e.target.result;
                    if (!dataURL) {
                        reject('Fail to get the ' + index + ' image');
                        return;
                    }
                    var orientation = 1;
                    _this.getOrientation(file, function (res) {
                        // -2: not jpeg , -1: not defined
                        if (res > 0) {
                            orientation = res;
                        }
                        resolve({
                            url: dataURL,
                            orientation: orientation,
                            file: file
                        });
                    });
                };
                reader.readAsDataURL(file);
            });
        };
        return _this;
    }

    createClass_default()(ImagePicker, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                style = _props.style,
                className = _props.className,
                _props$files = _props.files,
                files = _props$files === undefined ? [] : _props$files,
                selectable = _props.selectable,
                onAddImageClick = _props.onAddImageClick,
                multiple = _props.multiple,
                accept = _props.accept,
                capture = _props.capture,
                disableDelete = _props.disableDelete;

            var imgItemList = [];
            var count = parseInt('' + this.props.length, 10);
            if (count <= 0) {
                count = 4;
            }
            var wrapCls = classnames_default()('' + prefixCls, className);
            files.forEach(function (image, index) {
                var imgStyle = {
                    backgroundImage: 'url("' + image.url + '")',
                    transform: 'rotate(' + _this2.getRotation(image.orientation) + 'deg)'
                };
                var itemStyle = {};
                imgItemList.push(react["createElement"](
                    flex.Item,
                    { key: 'item-' + index, style: itemStyle },
                    react["createElement"](
                        'div',
                        { key: index, className: prefixCls + '-item' },
                        !disableDelete && react["createElement"]('div', { className: prefixCls + '-item-remove', role: 'button', 'aria-label': 'Click and Remove this image'
                            // tslint:disable-next-line:jsx-no-multiline-js
                            , onClick: function onClick() {
                                _this2.removeImage(index);
                            } }),
                        react["createElement"]('div', { className: prefixCls + '-item-content', role: 'button', 'aria-label': 'Image can be clicked'
                            // tslint:disable-next-line:jsx-no-multiline-js
                            , onClick: function onClick() {
                                _this2.onImageClick(index);
                            }, style: imgStyle })
                    )
                ));
            });
            var selectEl = react["createElement"](
                flex.Item,
                { key: 'select' },
                react["createElement"](
                    es_TouchFeedback,
                    { activeClassName: prefixCls + '-upload-btn-active' },
                    react["createElement"](
                        'div',
                        { className: prefixCls + '-item ' + prefixCls + '-upload-btn', onClick: onAddImageClick, role: 'button', 'aria-label': 'Choose and add image' },
                        react["createElement"]('input', { ref: function ref(input) {
                                if (input) {
                                    _this2.fileSelectorInput = input;
                                }
                            }, type: 'file', accept: accept
                            // tslint:disable-next-line:jsx-no-multiline-js
                            , onChange: function onChange() {
                                _this2.onFileChange();
                            }, multiple: multiple, capture: capture })
                    )
                )
            );
            var allEl = selectable ? imgItemList.concat([selectEl]) : imgItemList;
            var length = allEl.length;
            if (length !== 0 && length % count !== 0) {
                var blankCount = count - length % count;
                var fillBlankEl = [];
                for (var i = 0; i < blankCount; i++) {
                    fillBlankEl.push(react["createElement"](flex.Item, { key: 'blank-' + i }));
                }
                allEl = allEl.concat(fillBlankEl);
            }
            var flexEl = [];
            for (var _i = 0; _i < allEl.length / count; _i++) {
                var rowEl = allEl.slice(_i * count, _i * count + count);
                flexEl.push(rowEl);
            }
            var renderEl = flexEl.map(function (item, index) {
                return react["createElement"](
                    flex,
                    { key: 'flex-' + index },
                    item
                );
            });
            return react["createElement"](
                'div',
                { className: wrapCls, style: style },
                react["createElement"](
                    'div',
                    { className: prefixCls + '-list', role: 'group' },
                    renderEl
                )
            );
        }
    }]);

    return ImagePicker;
}(react["Component"]);

/* harmony default export */ var image_picker = (image_picker_ImagePicker);

image_picker_ImagePicker.defaultProps = {
    prefixCls: 'am-image-picker',
    files: [],
    onChange: image_picker_noop,
    onImageClick: image_picker_noop,
    onAddImageClick: image_picker_noop,
    onFail: image_picker_noop,
    selectable: true,
    multiple: false,
    accept: 'image/*',
    length: 4,
    disableDelete: false
};
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/_util/class.js
function hasClass(node, className) {
    if (node.classList) {
        return node.classList.contains(className);
    }
    var originClass = node.className;
    return (' ' + originClass + ' ').indexOf(' ' + className + ' ') > -1;
}
function addClass(node, className) {
    if (node.classList) {
        node.classList.add(className);
    } else {
        if (!hasClass(node, className)) {
            node.className = node.className + ' ' + className;
        }
    }
}
function removeClass(node, className) {
    if (node.classList) {
        node.classList.remove(className);
    } else {
        if (hasClass(node, className)) {
            var originClass = node.className;
            node.className = (' ' + originClass + ' ').replace(' ' + className + ' ', '');
        }
    }
}
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/_util/exenv.js
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var IS_IOS = canUseDOM && /iphone|ipad|ipod/i.test(window.navigator.userAgent);
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/input-item/CustomKeyboard.js






var CustomKeyboard_rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};




/**
 * determines whether an array includes a certain value among its entries, returning true or false as appropriate.
 * @param {array} arr The array to search in
 * @param {any} item  The value to search for
 */
function includes(arr, item) {
    if (!arr || !arr.length || !item) {
        return false;
    }
    for (var i = 0, len = arr.length; i < len; i++) {
        if (arr[i] === item) {
            return true;
        }
    }
    return false;
}
var CustomKeyboard_KeyboardItem = function (_React$Component) {
    inherits_default()(KeyboardItem, _React$Component);

    function KeyboardItem() {
        classCallCheck_default()(this, KeyboardItem);

        return possibleConstructorReturn_default()(this, (KeyboardItem.__proto__ || Object.getPrototypeOf(KeyboardItem)).apply(this, arguments));
    }

    createClass_default()(KeyboardItem, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                prefixCls = _a.prefixCls,
                _onClick = _a.onClick,
                className = _a.className,
                disabled = _a.disabled,
                children = _a.children,
                tdRef = _a.tdRef,
                label = _a.label,
                iconOnly = _a.iconOnly,
                restProps = CustomKeyboard_rest(_a, ["prefixCls", "onClick", "className", "disabled", "children", "tdRef", "label", "iconOnly"]);
            var value = children;
            if (className === 'keyboard-delete') {
                value = 'delete';
            } else if (className === 'keyboard-hide') {
                value = 'hide';
            } else if (className === 'keyboard-confirm') {
                value = 'confirm';
            }
            var extraCls = defineProperty_default()({}, prefixCls + '-item-disabled', disabled);
            var wrapCls = classnames_default()(prefixCls + '-item', className, extraCls);
            return react["createElement"](
                es_TouchFeedback,
                { disabled: disabled, activeClassName: prefixCls + '-item-active' },
                react["createElement"](
                    'td',
                    extends_default()({ ref: tdRef
                        // tslint:disable-next-line:jsx-no-multiline-js
                        , onClick: function onClick(e) {
                            _onClick(e, value);
                        }, className: wrapCls }, restProps),
                    children,
                    iconOnly && react["createElement"](
                        'i',
                        { className: 'sr-only' },
                        label
                    )
                )
            );
        }
    }]);

    return KeyboardItem;
}(react["Component"]);
CustomKeyboard_KeyboardItem.defaultProps = {
    prefixCls: 'am-number-keyboard',
    onClick: function onClick() {},
    disabled: false
};

var CustomKeyboard_CustomKeyboard = function (_React$Component2) {
    inherits_default()(CustomKeyboard, _React$Component2);

    function CustomKeyboard() {
        classCallCheck_default()(this, CustomKeyboard);

        var _this2 = possibleConstructorReturn_default()(this, (CustomKeyboard.__proto__ || Object.getPrototypeOf(CustomKeyboard)).apply(this, arguments));

        _this2.onKeyboardClick = function (e) {
            var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            e.nativeEvent.stopImmediatePropagation();
            if (_this2.props.disabledKeys && includes(_this2.props.disabledKeys, value)) {
                return null;
            }
            if (value === 'confirm' && _this2.confirmDisabled) {
                return null;
            } else {
                if (_this2.linkedInput) {
                    _this2.linkedInput.onKeyboardClick(value);
                }
            }
        };
        _this2.renderKeyboardItem = function (item, index) {
            var disabled = false;
            if (_this2.props.disabledKeys && includes(_this2.props.disabledKeys, item)) {
                disabled = true;
            }
            return react["createElement"](
                CustomKeyboard_KeyboardItem,
                { onClick: _this2.onKeyboardClick, key: 'item-' + item + '-' + index, disabled: disabled },
                item
            );
        };
        return _this2;
    }

    createClass_default()(CustomKeyboard, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                confirmLabel = _props.confirmLabel,
                backspaceLabel = _props.backspaceLabel,
                cancelKeyboardLabel = _props.cancelKeyboardLabel,
                wrapProps = _props.wrapProps,
                header = _props.header;

            var wrapperCls = classnames_default()(prefixCls + '-wrapper', prefixCls + '-wrapper-hide');
            return react["createElement"](
                'div',
                extends_default()({ className: wrapperCls, ref: function ref(el) {
                        return _this3.antmKeyboard = el;
                    } }, wrapProps),
                header && react["cloneElement"](header, { onClick: this.onKeyboardClick }),
                react["createElement"](
                    'table',
                    null,
                    react["createElement"](
                        'tbody',
                        null,
                        react["createElement"](
                            'tr',
                            null,
                            ['1', '2', '3'].map(function (item, index) {
                                return (
                                    // tslint:disable-next-line:jsx-no-multiline-js
                                    _this3.renderKeyboardItem(item, index)
                                );
                            }),
                            react["createElement"](CustomKeyboard_KeyboardItem, extends_default()({ className: 'keyboard-delete', rowSpan: 2, onClick: this.onKeyboardClick }, this.getAriaAttr(backspaceLabel)))
                        ),
                        react["createElement"](
                            'tr',
                            null,
                            ['4', '5', '6'].map(function (item, index) {
                                return (
                                    // tslint:disable-next-line:jsx-no-multiline-js
                                    _this3.renderKeyboardItem(item, index)
                                );
                            })
                        ),
                        react["createElement"](
                            'tr',
                            null,
                            ['7', '8', '9'].map(function (item, index) {
                                return (
                                    // tslint:disable-next-line:jsx-no-multiline-js
                                    _this3.renderKeyboardItem(item, index)
                                );
                            }),
                            react["createElement"](
                                CustomKeyboard_KeyboardItem,
                                { className: 'keyboard-confirm', rowSpan: 2, onClick: this.onKeyboardClick, tdRef: function tdRef(el) {
                                        return _this3.confirmKeyboardItem = el;
                                    } },
                                confirmLabel
                            )
                        ),
                        react["createElement"](
                            'tr',
                            null,
                            ['.', '0'].map(function (item, index) {
                                return (
                                    // tslint:disable-next-line:jsx-no-multiline-js
                                    _this3.renderKeyboardItem(item, index)
                                );
                            }),
                            react["createElement"](CustomKeyboard_KeyboardItem, extends_default()({ className: 'keyboard-hide', onClick: this.onKeyboardClick }, this.getAriaAttr(cancelKeyboardLabel)))
                        )
                    )
                )
            );
        }
    }, {
        key: 'getAriaAttr',
        value: function getAriaAttr(label) {
            if (IS_IOS) {
                return { label: label, iconOnly: true };
            } else {
                return { role: 'button', 'aria-label': label };
            }
        }
    }]);

    return CustomKeyboard;
}(react["Component"]);

CustomKeyboard_CustomKeyboard.defaultProps = {
    prefixCls: 'am-number-keyboard',
    disabledKeys: null
};
/* harmony default export */ var input_item_CustomKeyboard = (CustomKeyboard_CustomKeyboard);
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/input-item/Portal.js






var createPortal = react_dom["createPortal"];

var Portal_Portal = function (_React$Component) {
    inherits_default()(Portal, _React$Component);

    function Portal(props) {
        classCallCheck_default()(this, Portal);

        var _this = possibleConstructorReturn_default()(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).call(this, props));

        _this.container = _this.props.getContainer();
        return _this;
    }

    createClass_default()(Portal, [{
        key: 'render',
        value: function render() {
            if (this.props.children) {
                return createPortal(this.props.children, this.container);
            }
            return null;
        }
    }]);

    return Portal;
}(react["Component"]);

/* harmony default export */ var input_item_Portal = (Portal_Portal);
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/input-item/CustomInput.js











var customNumberKeyboard = null;
var CustomInput_IS_REACT_16 = !!react_dom["createPortal"];
function getBodyScrollTop() {
    var el = document.scrollingElement || document.documentElement;
    return el && el.scrollTop || 0;
}
function setBodyScrollTop(scrollTop) {
    var el = document.scrollingElement || document.documentElement;
    el.scrollTop = scrollTop;
}

var CustomInput_NumberInput = function (_React$Component) {
    inherits_default()(NumberInput, _React$Component);

    function NumberInput(props) {
        classCallCheck_default()(this, NumberInput);

        var _this = possibleConstructorReturn_default()(this, (NumberInput.__proto__ || Object.getPrototypeOf(NumberInput)).call(this, props));

        _this.onChange = function (value) {
            if (!('value' in _this.props)) {
                _this.setState({ value: value.target.value });
            }
            _this.props.onChange(value);
        };
        _this.onConfirm = function (value) {
            _this.props.onVirtualKeyboardConfirm(value);
        };
        _this.addBlurListener = function () {
            document.addEventListener('click', _this.doBlur, false);
        };
        _this.removeBlurListener = function () {
            document.removeEventListener('click', _this.doBlur, false);
        };
        _this.saveRef = function (el) {
            if (CustomInput_IS_REACT_16 && el) {
                customNumberKeyboard = el;
            }
        };
        _this.doBlur = function (ev) {
            var value = _this.state.value;

            if (ev.target !== _this.inputRef) {
                _this.onInputBlur(value);
            }
        };
        _this.unLinkInput = function () {
            if (customNumberKeyboard && customNumberKeyboard.antmKeyboard && customNumberKeyboard.linkedInput && customNumberKeyboard.linkedInput === _this) {
                customNumberKeyboard.linkedInput = null;
                if (_this.props.autoAdjustHeight) {
                    _this.getContainer().style.height = '0';
                }
                addClass(customNumberKeyboard.antmKeyboard, _this.props.keyboardPrefixCls + '-wrapper-hide');
            }
            // for unmount
            _this.removeBlurListener();
        };
        _this.onInputBlur = function (value) {
            if (CustomInput_IS_REACT_16) {
                _this.keyBoard = null;
            }
            var focus = _this.state.focus;

            if (focus) {
                _this.setState({
                    focus: false
                });
                _this.props.onBlur(value);
                setTimeout(function () {
                    _this.unLinkInput();
                }, 50);
            }
        };
        _this.onInputFocus = function () {
            var value = _this.state.value;

            _this.props.onFocus(value);
            _this.setState({
                focus: true
            }, function () {
                if (customNumberKeyboard) {
                    customNumberKeyboard.linkedInput = _this;
                    if (customNumberKeyboard.antmKeyboard) {
                        if (_this.props.autoAdjustHeight) {
                            var keyBoardHeight = customNumberKeyboard.antmKeyboard.offsetHeight;
                            _this.getContainer().style.height = keyBoardHeight + 'px';
                            if (_this.inputRef) {
                                var _this$inputRef$getBou = _this.inputRef.getBoundingClientRect(),
                                    bottom = _this$inputRef$getBou.bottom;

                                var clientHeight = window.innerHeight;
                                // 计算输入框距离视窗的底部距离
                                var distance = clientHeight - bottom;
                                if (distance < keyBoardHeight) {
                                    setBodyScrollTop(getBodyScrollTop() + keyBoardHeight - distance);
                                }
                            }
                        }
                        removeClass(customNumberKeyboard.antmKeyboard, _this.props.keyboardPrefixCls + '-wrapper-hide');
                    }
                    customNumberKeyboard.confirmDisabled = value === '';
                    if (customNumberKeyboard.confirmKeyboardItem) {
                        if (value === '') {
                            addClass(customNumberKeyboard.confirmKeyboardItem, _this.props.keyboardPrefixCls + '-item-disabled');
                        } else {
                            removeClass(customNumberKeyboard.confirmKeyboardItem, _this.props.keyboardPrefixCls + '-item-disabled');
                        }
                    }
                }
            });
        };
        _this.onKeyboardClick = function (KeyboardItemValue) {
            var maxLength = _this.props.maxLength;
            var value = _this.state.value;
            // tslint:disable-next-line:no-this-assignment

            var onChange = _this.onChange;

            var valueAfterChange = void 0;
            // 删除键
            if (KeyboardItemValue === 'delete') {
                valueAfterChange = value.substring(0, value.length - 1);
                onChange({ target: { value: valueAfterChange } });
                // 确认键
            } else if (KeyboardItemValue === 'confirm') {
                valueAfterChange = value;
                onChange({ target: { value: valueAfterChange } });
                _this.onInputBlur(value);
                _this.onConfirm(value);
                // 收起键
            } else if (KeyboardItemValue === 'hide') {
                valueAfterChange = value;
                _this.onInputBlur(valueAfterChange);
            } else {
                if (maxLength !== undefined && +maxLength >= 0 && (value + KeyboardItemValue).length > maxLength) {
                    valueAfterChange = (value + KeyboardItemValue).substr(0, maxLength);
                    onChange({ target: { value: valueAfterChange } });
                } else {
                    valueAfterChange = value + KeyboardItemValue;
                    onChange({ target: { value: valueAfterChange } });
                }
            }
            if (customNumberKeyboard) {
                customNumberKeyboard.confirmDisabled = valueAfterChange === '';
                if (customNumberKeyboard.confirmKeyboardItem) {
                    if (valueAfterChange === '') {
                        addClass(customNumberKeyboard.confirmKeyboardItem, _this.props.keyboardPrefixCls + '-item-disabled');
                    } else {
                        removeClass(customNumberKeyboard.confirmKeyboardItem, _this.props.keyboardPrefixCls + '-item-disabled');
                    }
                }
            }
        };
        _this.onFakeInputClick = function () {
            _this.focus();
        };
        _this.focus = function () {
            // this focus may invocked by users page button click, so this click may trigger blurEventListener at the same time
            _this.renderCustomKeyboard();
            _this.removeBlurListener();
            var focus = _this.state.focus;

            if (!focus) {
                _this.onInputFocus();
            }
            setTimeout(function () {
                _this.addBlurListener();
            }, 50);
        };
        _this.state = {
            focus: false,
            value: props.value || ''
        };
        return _this;
    }

    createClass_default()(NumberInput, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('value' in nextProps) {
                this.setState({
                    value: nextProps.value
                });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            // focus:true unmount 不能触发 blur
            if (this.state.focus) {
                this.props.onBlur(this.state.value);
            }
            this.unLinkInput();
        }
    }, {
        key: 'getComponent',
        value: function getComponent() {
            var _props = this.props,
                confirmLabel = _props.confirmLabel,
                backspaceLabel = _props.backspaceLabel,
                cancelKeyboardLabel = _props.cancelKeyboardLabel,
                keyboardPrefixCls = _props.keyboardPrefixCls,
                moneyKeyboardWrapProps = _props.moneyKeyboardWrapProps,
                moneyKeyboardHeader = _props.moneyKeyboardHeader,
                disabledKeys = _props.disabledKeys;

            return react["createElement"](input_item_CustomKeyboard, { ref: this.saveRef, onClick: this.onKeyboardClick, prefixCls: keyboardPrefixCls, confirmLabel: confirmLabel, backspaceLabel: backspaceLabel, cancelKeyboardLabel: cancelKeyboardLabel, wrapProps: moneyKeyboardWrapProps, header: moneyKeyboardHeader, disabledKeys: disabledKeys });
        }
    }, {
        key: 'getContainer',
        value: function getContainer() {
            var keyboardPrefixCls = this.props.keyboardPrefixCls;

            var container = document.querySelector('#' + keyboardPrefixCls + '-container');
            if (!container) {
                container = document.createElement('div');
                container.setAttribute('id', keyboardPrefixCls + '-container');
                document.body.appendChild(container);
            }
            this.container = container;
            return this.container;
        }
    }, {
        key: 'renderCustomKeyboard',
        value: function renderCustomKeyboard() {
            var _this2 = this;

            if (CustomInput_IS_REACT_16) {
                this.keyBoard = react["createElement"](
                    input_item_Portal,
                    { getContainer: function getContainer() {
                            return _this2.getContainer();
                        } },
                    this.getComponent()
                );
            } else {
                customNumberKeyboard = react_dom["unstable_renderSubtreeIntoContainer"](this, this.getComponent(), this.getContainer());
            }
        }
    }, {
        key: 'renderPortal',
        value: function renderPortal() {
            if (!CustomInput_IS_REACT_16 || !canUseDOM) {
                return null;
            }
            return this.keyBoard;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props2 = this.props,
                placeholder = _props2.placeholder,
                disabled = _props2.disabled,
                editable = _props2.editable,
                moneyKeyboardAlign = _props2.moneyKeyboardAlign;
            var _state = this.state,
                focus = _state.focus,
                value = _state.value;

            var preventKeyboard = disabled || !editable;
            var fakeInputCls = classnames_default()('fake-input', {
                focus: focus,
                'fake-input-disabled': disabled
            });
            var fakeInputContainerCls = classnames_default()('fake-input-container', {
                'fake-input-container-left': moneyKeyboardAlign === 'left'
            });
            return react["createElement"](
                'div',
                { className: fakeInputContainerCls },
                value === '' &&
                // tslint:disable-next-line:jsx-no-multiline-js
                react["createElement"](
                    'div',
                    { className: 'fake-input-placeholder' },
                    placeholder
                ),
                react["createElement"](
                    'div',
                    { role: 'textbox', 'aria-label': value || placeholder, className: fakeInputCls, ref: function ref(el) {
                            return _this3.inputRef = el;
                        }, onClick: preventKeyboard ? function () {} : this.onFakeInputClick },
                    value
                ),
                this.renderPortal()
            );
        }
    }]);

    return NumberInput;
}(react["Component"]);

CustomInput_NumberInput.defaultProps = {
    onChange: function onChange() {},
    onFocus: function onFocus() {},
    onBlur: function onBlur() {},
    onVirtualKeyboardConfirm: function onVirtualKeyboardConfirm() {},
    placeholder: '',
    disabled: false,
    editable: true,
    prefixCls: 'am-input',
    keyboardPrefixCls: 'am-number-keyboard',
    autoAdjustHeight: false
};
/* harmony default export */ var CustomInput = (CustomInput_NumberInput);
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/input-item/Input.js





var Input_rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};


var Input_Input = function (_React$Component) {
    inherits_default()(Input, _React$Component);

    function Input() {
        classCallCheck_default()(this, Input);

        var _this = possibleConstructorReturn_default()(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));

        _this.onInputBlur = function (e) {
            var value = e.target.value;
            if (_this.props.onBlur) {
                _this.props.onBlur(value);
            }
        };
        _this.onInputFocus = function (e) {
            // here should have a value definition but none.
            var value = e.target.value;
            if (_this.props.onFocus) {
                _this.props.onFocus(value);
            }
        };
        _this.focus = function () {
            if (_this.inputRef) {
                _this.inputRef.focus();
            }
        };
        return _this;
    }

    createClass_default()(Input, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var _a = this.props,
                onBlur = _a.onBlur,
                onFocus = _a.onFocus,
                restProps = Input_rest(_a, ["onBlur", "onFocus"]);
            return react["createElement"]("input", extends_default()({ ref: function ref(el) {
                    return _this2.inputRef = el;
                }, onBlur: this.onInputBlur, onFocus: this.onInputFocus }, restProps));
        }
    }]);

    return Input;
}(react["Component"]);

/* harmony default export */ var input_item_Input = (Input_Input);
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/input-item/index.js






var input_item_rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
/* tslint:disable:jsx-no-multiline-js */







function input_item_noop() {}
function normalizeValue(value) {
    if (typeof value === 'undefined' || value === null) {
        return '';
    }
    return value + '';
}

var input_item_InputItem = function (_React$Component) {
    inherits_default()(InputItem, _React$Component);

    function InputItem(props) {
        classCallCheck_default()(this, InputItem);

        var _this = possibleConstructorReturn_default()(this, (InputItem.__proto__ || Object.getPrototypeOf(InputItem)).call(this, props));

        _this.onInputChange = function (e) {
            var el = e.target;
            var rawVal = el.value;

            var prePos = 0;
            try {
                // some input type do not support selection, see https://html.spec.whatwg.org/multipage/input.html#do-not-apply
                prePos = el.selectionEnd || 0;
            } catch (error) {
                console.warn('Get selection error:', error);
            }
            var _this$state$value = _this.state.value,
                preCtrlVal = _this$state$value === undefined ? '' : _this$state$value;
            var type = _this.props.type;

            var ctrlValue = rawVal;
            switch (type) {
                case 'bankCard':
                    ctrlValue = rawVal.replace(/\D/g, '').replace(/(....)(?=.)/g, '$1 ');
                    break;
                case 'phone':
                    ctrlValue = rawVal.replace(/\D/g, '').substring(0, 11);
                    var valueLen = ctrlValue.length;
                    if (valueLen > 3 && valueLen < 8) {
                        ctrlValue = ctrlValue.substr(0, 3) + ' ' + ctrlValue.substr(3);
                    } else if (valueLen >= 8) {
                        ctrlValue = ctrlValue.substr(0, 3) + ' ' + ctrlValue.substr(3, 4) + ' ' + ctrlValue.substr(7);
                    }
                    break;
                case 'number':
                    ctrlValue = rawVal.replace(/\D/g, '');
                    break;
                case 'text':
                case 'password':
                default:
                    break;
            }
            _this.handleOnChange(ctrlValue, ctrlValue !== rawVal, function () {
                switch (type) {
                    case 'bankCard':
                    case 'phone':
                    case 'number':
                        // controlled input type needs to adjust the position of the caret
                        try {
                            // some input type do not support selection, see https://html.spec.whatwg.org/multipage/input.html#do-not-apply
                            var pos = _this.calcPos(prePos, preCtrlVal, rawVal, ctrlValue, [' '], /\D/g);
                            if (type === 'phone' && (pos === 4 || pos === 9) || type === 'bankCard' && pos > 0 && pos % 5 === 0) {
                                pos -= 1;
                            }
                            el.selectionStart = el.selectionEnd = pos;
                        } catch (error) {
                            console.warn('Set selection error:', error);
                        }
                        break;
                    default:
                        break;
                }
            });
        };
        _this.handleOnChange = function (value) {
            var isMutated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var adjustPos = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : input_item_noop;
            var onChange = _this.props.onChange;

            if (!('value' in _this.props)) {
                _this.setState({ value: value });
            } else {
                _this.setState({ value: _this.props.value });
            }
            if (onChange) {
                if (isMutated) {
                    setTimeout(function () {
                        onChange(value);
                        adjustPos();
                    });
                } else {
                    onChange(value);
                    adjustPos();
                }
            } else {
                adjustPos();
            }
        };
        _this.onInputFocus = function (value) {
            if (_this.debounceTimeout) {
                clearTimeout(_this.debounceTimeout);
                _this.debounceTimeout = null;
            }
            _this.setState({
                focus: true
            });
            if (_this.props.onFocus) {
                _this.props.onFocus(value);
            }
        };
        _this.onInputBlur = function (value) {
            if (_this.inputRef) {
                // this.inputRef may be null if customKeyboard unmount
                _this.debounceTimeout = window.setTimeout(function () {
                    if (document.activeElement !== (_this.inputRef && _this.inputRef.inputRef)) {
                        _this.setState({
                            focus: false
                        });
                    }
                }, 200);
            }
            if (_this.props.onBlur) {
                // fix autoFocus item blur with flash
                setTimeout(function () {
                    // fix ios12 wechat browser click failure after input
                    if (document.body) {
                        document.body.scrollTop = document.body.scrollTop;
                    }
                }, 100);
                _this.props.onBlur(value);
            }
        };
        _this.clearInput = function () {
            if (_this.props.type !== 'password' && _this.props.updatePlaceholder) {
                _this.setState({
                    placeholder: _this.props.value
                });
            }
            _this.setState({
                value: ''
            });
            if (_this.props.onChange) {
                _this.props.onChange('');
            }
            _this.focus();
        };
        // this is instance method for user to use
        _this.focus = function () {
            if (_this.inputRef) {
                _this.inputRef.focus();
            }
        };
        // calculate the position of the caret
        _this.calcPos = function (prePos, preCtrlVal, rawVal, ctrlVal, placeholderChars, maskReg) {
            var editLength = rawVal.length - preCtrlVal.length;
            var isAddition = editLength > 0;
            var pos = prePos;
            if (isAddition) {
                var additionStr = rawVal.substr(pos - editLength, editLength);
                var ctrlCharCount = additionStr.replace(maskReg, '').length;
                pos -= editLength - ctrlCharCount;
                var placeholderCharCount = 0;
                while (ctrlCharCount > 0) {
                    if (placeholderChars.indexOf(ctrlVal.charAt(pos - ctrlCharCount + placeholderCharCount)) === -1) {
                        ctrlCharCount--;
                    } else {
                        placeholderCharCount++;
                    }
                }
                pos += placeholderCharCount;
            }
            return pos;
        };
        _this.state = {
            placeholder: props.placeholder,
            value: normalizeValue(props.value || props.defaultValue)
        };
        return _this;
    }

    createClass_default()(InputItem, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('placeholder' in nextProps && !nextProps.updatePlaceholder) {
                this.setState({
                    placeholder: nextProps.placeholder
                });
            }
            if ('value' in nextProps) {
                this.setState({
                    value: nextProps.value
                });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.debounceTimeout) {
                window.clearTimeout(this.debounceTimeout);
                this.debounceTimeout = null;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _classnames,
                _classnames2,
                _this2 = this;

            var props = extends_default()({}, this.props);
            delete props.updatePlaceholder;

            var prefixCls = props.prefixCls,
                prefixListCls = props.prefixListCls,
                editable = props.editable,
                style = props.style,
                clear = props.clear,
                children = props.children,
                error = props.error,
                className = props.className,
                extra = props.extra,
                labelNumber = props.labelNumber,
                type = props.type,
                onExtraClick = props.onExtraClick,
                onErrorClick = props.onErrorClick,
                moneyKeyboardAlign = props.moneyKeyboardAlign,
                moneyKeyboardWrapProps = props.moneyKeyboardWrapProps,
                moneyKeyboardHeader = props.moneyKeyboardHeader,
                onVirtualKeyboardConfirm = props.onVirtualKeyboardConfirm,
                autoAdjustHeight = props.autoAdjustHeight,
                disabledKeys = props.disabledKeys,
                restProps = input_item_rest(props, ["prefixCls", "prefixListCls", "editable", "style", "clear", "children", "error", "className", "extra", "labelNumber", "type", "onExtraClick", "onErrorClick", "moneyKeyboardAlign", "moneyKeyboardWrapProps", "moneyKeyboardHeader", "onVirtualKeyboardConfirm", "autoAdjustHeight", "disabledKeys"]);

            var name = restProps.name,
                disabled = restProps.disabled,
                maxLength = restProps.maxLength;
            var value = this.state.value;
            // tslint:disable-next-line:variable-name

            var _locale = getComponentLocale(this.props, this.context, 'InputItem', function () {
                return __webpack_require__("3CTM");
            });
            var confirmLabel = _locale.confirmLabel,
                backspaceLabel = _locale.backspaceLabel,
                cancelKeyboardLabel = _locale.cancelKeyboardLabel;
            var _state = this.state,
                focus = _state.focus,
                placeholder = _state.placeholder;

            var wrapCls = classnames_default()(prefixListCls + '-item', prefixCls + '-item', prefixListCls + '-item-middle', className, (_classnames = {}, defineProperty_default()(_classnames, prefixCls + '-disabled', disabled), defineProperty_default()(_classnames, prefixCls + '-error', error), defineProperty_default()(_classnames, prefixCls + '-focus', focus), defineProperty_default()(_classnames, prefixCls + '-android', focus), _classnames));
            var labelCls = classnames_default()(prefixCls + '-label', (_classnames2 = {}, defineProperty_default()(_classnames2, prefixCls + '-label-2', labelNumber === 2), defineProperty_default()(_classnames2, prefixCls + '-label-3', labelNumber === 3), defineProperty_default()(_classnames2, prefixCls + '-label-4', labelNumber === 4), defineProperty_default()(_classnames2, prefixCls + '-label-5', labelNumber === 5), defineProperty_default()(_classnames2, prefixCls + '-label-6', labelNumber === 6), defineProperty_default()(_classnames2, prefixCls + '-label-7', labelNumber === 7), _classnames2));
            var controlCls = prefixCls + '-control';
            var inputType = 'text';
            if (type === 'bankCard' || type === 'phone') {
                inputType = 'tel';
            } else if (type === 'password') {
                inputType = 'password';
            } else if (type === 'digit') {
                inputType = 'number';
            } else if (type !== 'text' && type !== 'number') {
                inputType = type;
            }
            var patternProps = void 0;
            if (type === 'number') {
                patternProps = {
                    pattern: '[0-9]*'
                };
            }
            var classNameProps = void 0;
            if (type === 'digit') {
                classNameProps = {
                    className: 'h5numInput'
                };
            }
            return react["createElement"](
                'div',
                { className: wrapCls },
                react["createElement"](
                    'div',
                    { className: prefixListCls + '-line' },
                    children ? react["createElement"](
                        'div',
                        { className: labelCls },
                        children
                    ) : null,
                    react["createElement"](
                        'div',
                        { className: controlCls },
                        type === 'money' ? react["createElement"](CustomInput, { value: normalizeValue(value), type: type, ref: function ref(el) {
                                return _this2.inputRef = el;
                            }, maxLength: maxLength, placeholder: placeholder, onChange: this.onInputChange, onFocus: this.onInputFocus, onBlur: this.onInputBlur, onVirtualKeyboardConfirm: onVirtualKeyboardConfirm, disabled: disabled, editable: editable, prefixCls: prefixCls, style: style, confirmLabel: confirmLabel, backspaceLabel: backspaceLabel, cancelKeyboardLabel: cancelKeyboardLabel, moneyKeyboardAlign: moneyKeyboardAlign, moneyKeyboardWrapProps: moneyKeyboardWrapProps, moneyKeyboardHeader: moneyKeyboardHeader, autoAdjustHeight: autoAdjustHeight, disabledKeys: disabledKeys }) : react["createElement"](input_item_Input, extends_default()({}, patternProps, restProps, classNameProps, { value: normalizeValue(value), defaultValue: undefined, ref: function ref(el) {
                                return _this2.inputRef = el;
                            }, style: style, type: inputType, maxLength: maxLength, name: name, placeholder: placeholder, onChange: this.onInputChange, onFocus: this.onInputFocus, onBlur: this.onInputBlur, readOnly: !editable, disabled: disabled }))
                    ),
                    clear && editable && !disabled && value && ('' + value).length > 0 ? react["createElement"](
                        es_TouchFeedback,
                        { activeClassName: prefixCls + '-clear-active' },
                        react["createElement"]('div', { className: prefixCls + '-clear', onClick: this.clearInput })
                    ) : null,
                    error ? react["createElement"]('div', { className: prefixCls + '-error-extra', onClick: onErrorClick }) : null,
                    extra !== '' ? react["createElement"](
                        'div',
                        { className: prefixCls + '-extra', onClick: onExtraClick },
                        extra
                    ) : null
                )
            );
        }
    }]);

    return InputItem;
}(react["Component"]);

input_item_InputItem.defaultProps = {
    prefixCls: 'am-input',
    prefixListCls: 'am-list',
    type: 'text',
    editable: true,
    disabled: false,
    placeholder: '',
    clear: false,
    onChange: input_item_noop,
    onBlur: input_item_noop,
    onFocus: input_item_noop,
    extra: '',
    onExtraClick: input_item_noop,
    error: false,
    onErrorClick: input_item_noop,
    onVirtualKeyboardConfirm: input_item_noop,
    labelNumber: 5,
    updatePlaceholder: false,
    moneyKeyboardAlign: 'right',
    moneyKeyboardWrapProps: {},
    moneyKeyboardHeader: null,
    disabledKeys: null
};
input_item_InputItem.contextTypes = {
    antLocale: prop_types["object"]
};
/* harmony default export */ var input_item = (input_item_InputItem);
// EXTERNAL MODULE: ./node_modules/fbjs/lib/invariant.js
var invariant = __webpack_require__("2NuI");
var invariant_default = /*#__PURE__*/__webpack_require__.n(invariant);

// EXTERNAL MODULE: ./node_modules/fbjs/lib/isEmpty.js
var isEmpty = __webpack_require__("Y9q/");
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);

// EXTERNAL MODULE: ./node_modules/warning/browser.js
var browser = __webpack_require__("6DQo");
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// CONCATENATED MODULE: ./node_modules/rmc-list-view/es/ListViewDataSource.js






function defaultGetRowData(dataBlob, sectionID, rowID) {
  return dataBlob[sectionID][rowID];
}

function defaultGetSectionHeaderData(dataBlob, sectionID) {
  return dataBlob[sectionID];
}

// type differType = (data1, data2) => bool;
//
// type ParamType = {
//   rowHasChanged: differType;
//   getRowData: ?typeof defaultGetRowData;
//   sectionHeaderHasChanged: ?differType;
//   getSectionHeaderData: ?typeof defaultGetSectionHeaderData;
// }

/**
 * Provides efficient data processing and access to the
 * `ListView` component.  A `ListViewDataSource` is created with functions for
 * extracting data from the input blob, and comparing elements (with default
 * implementations for convenience).  The input blob can be as simple as an
 * array of strings, or an object with rows nested inside section objects.
 *
 * To update the data in the datasource, use `cloneWithRows` (or
 * `cloneWithRowsAndSections` if you care about sections).  The data in the
 * data source is immutable, so you can't modify it directly.  The clone methods
 * suck in the new data and compute a diff for each row so ListView knows
 * whether to re-render it or not.
 *
 * In this example, a component receives data in chunks, handled by
 * `_onDataArrived`, which concats the new data onto the old data and updates the
 * data source.  We use `concat` to create a new array - mutating `this._data`,
 * e.g. with `this._data.push(newRowData)`, would be an error. `_rowHasChanged`
 * understands the shape of the row data and knows how to efficiently compare
 * it.
 *
 * ```
 * getInitialState: function() {
 *   var ds = new ListViewDataSource({rowHasChanged: this._rowHasChanged});
 *   return {ds};
 * },
 * _onDataArrived(newData) {
 *   this._data = this._data.concat(newData);
 *   this.setState({
 *     ds: this.state.ds.cloneWithRows(this._data)
 *   });
 * }
 * ```
 */

var ListViewDataSource_ListViewDataSource = function () {

  /**
   * You can provide custom extraction and `hasChanged` functions for section
   * headers and rows.  If absent, data will be extracted with the
   * `defaultGetRowData` and `defaultGetSectionHeaderData` functions.
   *
   * The default extractor expects data of one of the following forms:
   *
   *      { sectionID_1: { rowID_1: <rowData1>, ... }, ... }
   *
   *    or
   *
   *      { sectionID_1: [ <rowData1>, <rowData2>, ... ], ... }
   *
   *    or
   *
   *      [ [ <rowData1>, <rowData2>, ... ], ... ]
   *
   * The constructor takes in a params argument that can contain any of the
   * following:
   *
   * - getRowData(dataBlob, sectionID, rowID);
   * - getSectionHeaderData(dataBlob, sectionID);
   * - rowHasChanged(prevRowData, nextRowData);
   * - sectionHeaderHasChanged(prevSectionData, nextSectionData);
   */
  function ListViewDataSource(params) {
    classCallCheck_default()(this, ListViewDataSource);

    invariant_default()(params && typeof params.rowHasChanged === 'function', 'Must provide a rowHasChanged function.');
    this._rowHasChanged = params.rowHasChanged;
    this._getRowData = params.getRowData || defaultGetRowData;
    this._sectionHeaderHasChanged = params.sectionHeaderHasChanged;
    this._getSectionHeaderData = params.getSectionHeaderData || defaultGetSectionHeaderData;

    this._dataBlob = null;
    this._dirtyRows = [];
    this._dirtySections = [];
    this._cachedRowCount = 0;

    // These two private variables are accessed by outsiders because ListView
    // uses them to iterate over the data in this class.
    this.rowIdentities = [];
    this.sectionIdentities = [];
  }

  /**
   * Clones this `ListViewDataSource` with the specified `dataBlob` and
   * `rowIdentities`. The `dataBlob` is just an arbitrary blob of data. At
   * construction an extractor to get the interesting information was defined
   * (or the default was used).
   *
   * The `rowIdentities` is is a 2D array of identifiers for rows.
   * ie. [['a1', 'a2'], ['b1', 'b2', 'b3'], ...].  If not provided, it's
   * assumed that the keys of the section data are the row identities.
   *
   * Note: This function does NOT clone the data in this data source. It simply
   * passes the functions defined at construction to a new data source with
   * the data specified. If you wish to maintain the existing data you must
   * handle merging of old and new data separately and then pass that into
   * this function as the `dataBlob`.
   */


  createClass_default()(ListViewDataSource, [{
    key: 'cloneWithRows',
    value: function cloneWithRows(dataBlob, rowIdentities) {
      var rowIds = rowIdentities ? [rowIdentities] : null;
      if (!this._sectionHeaderHasChanged) {
        this._sectionHeaderHasChanged = function () {
          return false;
        };
      }
      return this.cloneWithRowsAndSections({ s1: dataBlob }, ['s1'], rowIds);
    }

    /**
     * This performs the same function as the `cloneWithRows` function but here
     * you also specify what your `sectionIdentities` are. If you don't care
     * about sections you should safely be able to use `cloneWithRows`.
     *
     * `sectionIdentities` is an array of identifiers for  sections.
     * ie. ['s1', 's2', ...].  If not provided, it's assumed that the
     * keys of dataBlob are the section identities.
     *
     * Note: this returns a new object!
     */

  }, {
    key: 'cloneWithRowsAndSections',
    value: function cloneWithRowsAndSections(dataBlob, sectionIdentities, rowIdentities) {
      invariant_default()(typeof this._sectionHeaderHasChanged === 'function', 'Must provide a sectionHeaderHasChanged function with section data.');
      invariant_default()(!sectionIdentities || !rowIdentities || sectionIdentities.length === rowIdentities.length, 'row and section ids lengths must be the same');

      var newSource = new ListViewDataSource({
        getRowData: this._getRowData,
        getSectionHeaderData: this._getSectionHeaderData,
        rowHasChanged: this._rowHasChanged,
        sectionHeaderHasChanged: this._sectionHeaderHasChanged
      });
      newSource._dataBlob = dataBlob;
      if (sectionIdentities) {
        newSource.sectionIdentities = sectionIdentities;
      } else {
        newSource.sectionIdentities = Object.keys(dataBlob);
      }
      if (rowIdentities) {
        newSource.rowIdentities = rowIdentities;
      } else {
        newSource.rowIdentities = [];
        newSource.sectionIdentities.forEach(function (sectionID) {
          newSource.rowIdentities.push(Object.keys(dataBlob[sectionID]));
        });
      }
      newSource._cachedRowCount = countRows(newSource.rowIdentities);

      newSource._calculateDirtyArrays(this._dataBlob, this.sectionIdentities, this.rowIdentities);

      return newSource;
    }
  }, {
    key: 'getRowCount',
    value: function getRowCount() {
      return this._cachedRowCount;
    }
  }, {
    key: 'getRowAndSectionCount',
    value: function getRowAndSectionCount() {
      return this._cachedRowCount + this.sectionIdentities.length;
    }

    /**
     * Returns if the row is dirtied and needs to be rerendered
     */

  }, {
    key: 'rowShouldUpdate',
    value: function rowShouldUpdate(sectionIndex, rowIndex) {
      var needsUpdate = this._dirtyRows[sectionIndex][rowIndex];
      browser_default()(needsUpdate !== undefined, 'missing dirtyBit for section, row: ' + sectionIndex + ', ' + rowIndex);
      return needsUpdate;
    }

    /**
     * Gets the data required to render the row.
     */

  }, {
    key: 'getRowData',
    value: function getRowData(sectionIndex, rowIndex) {
      var sectionID = this.sectionIdentities[sectionIndex];
      var rowID = this.rowIdentities[sectionIndex][rowIndex];
      browser_default()(sectionID !== undefined && rowID !== undefined, 'rendering invalid section, row: ' + sectionIndex + ', ' + rowIndex);
      return this._getRowData(this._dataBlob, sectionID, rowID);
    }

    /**
     * Gets the rowID at index provided if the dataSource arrays were flattened,
     * or null of out of range indexes.
     */

  }, {
    key: 'getRowIDForFlatIndex',
    value: function getRowIDForFlatIndex(index) {
      var accessIndex = index;
      for (var ii = 0; ii < this.sectionIdentities.length; ii++) {
        if (accessIndex >= this.rowIdentities[ii].length) {
          accessIndex -= this.rowIdentities[ii].length;
        } else {
          return this.rowIdentities[ii][accessIndex];
        }
      }
      return null;
    }

    /**
     * Gets the sectionID at index provided if the dataSource arrays were flattened,
     * or null for out of range indexes.
     */

  }, {
    key: 'getSectionIDForFlatIndex',
    value: function getSectionIDForFlatIndex(index) {
      var accessIndex = index;
      for (var ii = 0; ii < this.sectionIdentities.length; ii++) {
        if (accessIndex >= this.rowIdentities[ii].length) {
          accessIndex -= this.rowIdentities[ii].length;
        } else {
          return this.sectionIdentities[ii];
        }
      }
      return null;
    }

    /**
     * Returns an array containing the number of rows in each section
     */

  }, {
    key: 'getSectionLengths',
    value: function getSectionLengths() {
      var results = [];
      for (var ii = 0; ii < this.sectionIdentities.length; ii++) {
        results.push(this.rowIdentities[ii].length);
      }
      return results;
    }

    /**
     * Returns if the section header is dirtied and needs to be rerendered
     */

  }, {
    key: 'sectionHeaderShouldUpdate',
    value: function sectionHeaderShouldUpdate(sectionIndex) {
      var needsUpdate = this._dirtySections[sectionIndex];
      browser_default()(needsUpdate !== undefined, 'missing dirtyBit for section: ' + sectionIndex);
      return needsUpdate;
    }

    /**
     * Gets the data required to render the section header
     */

  }, {
    key: 'getSectionHeaderData',
    value: function getSectionHeaderData(sectionIndex) {
      if (!this._getSectionHeaderData) {
        return null;
      }
      var sectionID = this.sectionIdentities[sectionIndex];
      browser_default()(sectionID !== undefined, 'renderSection called on invalid section: ' + sectionIndex);
      return this._getSectionHeaderData(this._dataBlob, sectionID);
    }

    /**
     * Private members and methods.
     */

    // These two 'protected' variables are accessed by ListView to iterate over
    // the data in this class.

  }, {
    key: '_calculateDirtyArrays',
    value: function _calculateDirtyArrays(prevDataBlob, prevSectionIDs, prevRowIDs) {
      // construct a hashmap of the existing (old) id arrays
      var prevSectionsHash = keyedDictionaryFromArray(prevSectionIDs);
      var prevRowsHash = {};
      for (var ii = 0; ii < prevRowIDs.length; ii++) {
        var sectionID = prevSectionIDs[ii];
        browser_default()(!prevRowsHash[sectionID], 'SectionID appears more than once: ' + sectionID);
        prevRowsHash[sectionID] = keyedDictionaryFromArray(prevRowIDs[ii]);
      }

      // compare the 2 identity array and get the dirtied rows
      this._dirtySections = [];
      this._dirtyRows = [];

      var dirty;
      for (var sIndex = 0; sIndex < this.sectionIdentities.length; sIndex++) {
        var sectionID = this.sectionIdentities[sIndex];
        // dirty if the sectionHeader is new or _sectionHasChanged is true
        dirty = !prevSectionsHash[sectionID];
        var sectionHeaderHasChanged = this._sectionHeaderHasChanged;
        if (!dirty && sectionHeaderHasChanged) {
          dirty = sectionHeaderHasChanged(this._getSectionHeaderData(prevDataBlob, sectionID), this._getSectionHeaderData(this._dataBlob, sectionID));
        }
        this._dirtySections.push(!!dirty);

        this._dirtyRows[sIndex] = [];
        for (var rIndex = 0; rIndex < this.rowIdentities[sIndex].length; rIndex++) {
          var rowID = this.rowIdentities[sIndex][rIndex];
          // dirty if the section is new, row is new or _rowHasChanged is true
          dirty = !prevSectionsHash[sectionID] || !prevRowsHash[sectionID][rowID] || this._rowHasChanged(this._getRowData(prevDataBlob, sectionID, rowID), this._getRowData(this._dataBlob, sectionID, rowID));
          this._dirtyRows[sIndex].push(!!dirty);
        }
      }
    }
  }]);

  return ListViewDataSource;
}();

function countRows(allRowIDs) {
  var totalRows = 0;
  for (var sectionIdx = 0; sectionIdx < allRowIDs.length; sectionIdx++) {
    var rowIDs = allRowIDs[sectionIdx];
    totalRows += rowIDs.length;
  }
  return totalRows;
}

function keyedDictionaryFromArray(arr) {
  if (isEmpty_default()(arr)) {
    return {};
  }
  var result = {};
  for (var ii = 0; ii < arr.length; ii++) {
    var key = arr[ii];
    browser_default()(!result[key], 'Value appears more than once in array: ' + key);
    result[key] = true;
  }
  return result;
}

// module.exports = ListViewDataSource;
/* harmony default export */ var es_ListViewDataSource = (ListViewDataSource_ListViewDataSource);
// CONCATENATED MODULE: ./node_modules/rmc-list-view/es/util.js
function getOffsetTop(elem) {
  var offsetTop = 0;
  /* eslint no-cond-assign: 0 */
  do {
    if (!isNaN(elem.offsetTop)) {
      offsetTop += elem.offsetTop;
    }
  } while (elem = elem.offsetParent);
  return offsetTop;
}

function _event(e) {
  if (e.touches && e.touches.length) {
    return e.touches[0];
  }
  if (e.changedTouches && e.changedTouches.length) {
    return e.changedTouches[0];
  }
  return e;
}

function throttle(fn, delay) {
  var delayFlag = true;
  var firstInvoke = true;
  // console.log('exec once');
  return function _throttle(e) {
    if (delayFlag) {
      delayFlag = false;
      setTimeout(function () {
        delayFlag = true;
        // console.log('exec delay time');
        fn(e);
      }, delay);
      if (firstInvoke) {
        // console.log('first invoke');
        fn(e);
        firstInvoke = false;
      }
    }
  };
}

function setTransform(nodeStyle, value) {
  nodeStyle.transform = value;
  nodeStyle.webkitTransform = value;
  nodeStyle.MozTransform = value;
}

function setTransformOrigin(nodeStyle, value) {
  nodeStyle.transformOrigin = value;
  nodeStyle.webkitTransformOrigin = value;
  nodeStyle.MozTransformOrigin = value;
}
// CONCATENATED MODULE: ./node_modules/rmc-list-view/es/ScrollView.js










// const SCROLLVIEW = 'ScrollViewRef';
// const INNERVIEW = 'InnerScrollViewRef';

// https://github.com/facebook/react-native/blob/0.26-stable/Libraries/Components/ScrollView/ScrollView.js

/* eslint react/prop-types: 0, react/sort-comp: 0, no-unused-expressions: 0 */

var propTypes = {
  className: prop_types_default.a.string,
  prefixCls: prop_types_default.a.string,
  listPrefixCls: prop_types_default.a.string,
  listViewPrefixCls: prop_types_default.a.string,
  style: prop_types_default.a.object,
  contentContainerStyle: prop_types_default.a.object,
  onScroll: prop_types_default.a.func
};

var ScrollView_ScrollView = function (_React$Component) {
  inherits_default()(ScrollView, _React$Component);

  function ScrollView() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck_default()(this, ScrollView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn_default()(this, (_ref = ScrollView.__proto__ || Object.getPrototypeOf(ScrollView)).call.apply(_ref, [this].concat(args))), _this), ScrollView_initialiseProps.call(_this), _temp), possibleConstructorReturn_default()(_this, _ret);
  }

  createClass_default()(ScrollView, [{
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      // https://github.com/ant-design/ant-design-mobile/issues/1480
      // https://stackoverflow.com/questions/1386696/make-scrollleft-scrolltop-changes-not-trigger-scroll-event
      // 问题情景：用户滚动内容后，改变 dataSource 触发 ListView componentWillReceiveProps
      // 内容变化后 scrollTop 如果改变、会自动触发 scroll 事件，而此事件应该避免被执行
      if ((this.props.dataSource !== nextProps.dataSource || this.props.initialListSize !== nextProps.initialListSize) && this.handleScroll) {
        // console.log('componentWillUpdate');
        if (this.props.useBodyScroll) {
          window.removeEventListener('scroll', this.handleScroll);
        } else {
          this.ScrollViewRef.removeEventListener('scroll', this.handleScroll);
        }
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      // handle componentWillUpdate accordingly
      if ((this.props.dataSource !== prevProps.dataSource || this.props.initialListSize !== prevProps.initialListSize) && this.handleScroll) {
        setTimeout(function () {
          if (_this2.props.useBodyScroll) {
            window.addEventListener('scroll', _this2.handleScroll);
          } else {
            _this2.ScrollViewRef.addEventListener('scroll', _this2.handleScroll);
          }
        }, 0);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      var handleScroll = function handleScroll(e) {
        return _this3.props.onScroll && _this3.props.onScroll(e, _this3.getMetrics());
      };
      if (this.props.scrollEventThrottle) {
        handleScroll = throttle(handleScroll, this.props.scrollEventThrottle);
      }
      this.handleScroll = handleScroll;

      // IE supports onresize on all HTML elements.
      // In all other Browsers the onresize is only available at the window object
      this.onLayout = function () {
        return _this3.props.onLayout({
          nativeEvent: { layout: { width: window.innerWidth, height: window.innerHeight } }
        });
      };

      if (this.props.useBodyScroll) {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.onLayout);
      } else {
        this.ScrollViewRef.addEventListener('scroll', this.handleScroll);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.useBodyScroll) {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.onLayout);
      } else {
        this.ScrollViewRef.removeEventListener('scroll', this.handleScroll);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          prefixCls = _props.prefixCls,
          listPrefixCls = _props.listPrefixCls,
          listViewPrefixCls = _props.listViewPrefixCls,
          _props$style = _props.style,
          style = _props$style === undefined ? {} : _props$style,
          _props$contentContain = _props.contentContainerStyle,
          contentContainerStyle = _props$contentContain === undefined ? {} : _props$contentContain,
          useBodyScroll = _props.useBodyScroll,
          pullToRefresh = _props.pullToRefresh;


      var styleBase = {
        position: 'relative',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch'
      };
      var preCls = prefixCls || listViewPrefixCls || '';

      var containerProps = {
        ref: function ref(el) {
          return _this4.ScrollViewRef = el || _this4.ScrollViewRef;
        },
        style: extends_default()({}, useBodyScroll ? {} : styleBase, style),
        className: classnames_default()(className, preCls + '-scrollview')
      };
      var contentContainerProps = {
        ref: function ref(el) {
          return _this4.InnerScrollViewRef = el;
        },
        style: extends_default()({ position: 'absolute', minWidth: '100%' }, contentContainerStyle),
        className: classnames_default()(preCls + '-scrollview-content', listPrefixCls)
      };

      var clonePullToRefresh = function clonePullToRefresh(isBody) {
        return react_default.a.cloneElement(pullToRefresh, {
          getScrollContainer: isBody ? function () {
            return document.body;
          } : function () {
            return _this4.ScrollViewRef;
          }
        }, children);
      };

      if (useBodyScroll) {
        if (pullToRefresh) {
          return react_default.a.createElement(
            'div',
            containerProps,
            clonePullToRefresh(true)
          );
        }
        return react_default.a.createElement(
          'div',
          containerProps,
          children
        );
      }

      if (pullToRefresh) {
        return react_default.a.createElement(
          'div',
          containerProps,
          react_default.a.createElement(
            'div',
            contentContainerProps,
            clonePullToRefresh()
          )
        );
      }

      return react_default.a.createElement(
        'div',
        containerProps,
        react_default.a.createElement(
          'div',
          contentContainerProps,
          children
        )
      );
    }
  }]);

  return ScrollView;
}(react_default.a.Component);

ScrollView_ScrollView.propTypes = propTypes;

var ScrollView_initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.getMetrics = function () {
    var isVertical = !_this5.props.horizontal;
    if (_this5.props.useBodyScroll) {
      // In chrome61 `document.body.scrollTop` is invalid,
      // and add new `document.scrollingElement`(chrome61, iOS support).
      // In old-android-browser and iOS `document.documentElement.scrollTop` is invalid.
      var scrollNode = document.scrollingElement ? document.scrollingElement : document.body;
      // todos: Why sometimes do not have `this.ScrollViewRef` ?
      return {
        visibleLength: window[isVertical ? 'innerHeight' : 'innerWidth'],
        contentLength: _this5.ScrollViewRef ? _this5.ScrollViewRef[isVertical ? 'scrollHeight' : 'scrollWidth'] : 0,
        offset: scrollNode[isVertical ? 'scrollTop' : 'scrollLeft']
      };
    }
    return {
      visibleLength: _this5.ScrollViewRef[isVertical ? 'offsetHeight' : 'offsetWidth'],
      contentLength: _this5.ScrollViewRef[isVertical ? 'scrollHeight' : 'scrollWidth'],
      offset: _this5.ScrollViewRef[isVertical ? 'scrollTop' : 'scrollLeft']
    };
  };

  this.getInnerViewNode = function () {
    return _this5.InnerScrollViewRef;
  };

  this.scrollTo = function () {
    if (_this5.props.useBodyScroll) {
      var _window;

      (_window = window).scrollTo.apply(_window, arguments);
    } else {
      _this5.ScrollViewRef.scrollLeft = arguments.length <= 0 ? undefined : arguments[0];
      _this5.ScrollViewRef.scrollTop = arguments.length <= 1 ? undefined : arguments[1];
    }
  };
};

/* harmony default export */ var es_ScrollView = (ScrollView_ScrollView);
// CONCATENATED MODULE: ./node_modules/rmc-list-view/es/ListView.js






/* eslint no-unused-vars: 0, react/no-multi-comp: 0
react/prop-types: 0, react/sort-comp: 0, no-unused-expressions: 0 */






var DEFAULT_PAGE_SIZE = 1;
var DEFAULT_INITIAL_ROWS = 10;
var DEFAULT_SCROLL_RENDER_AHEAD = 1000;
var DEFAULT_END_REACHED_THRESHOLD = 1000;
var DEFAULT_SCROLL_CALLBACK_THROTTLE = 50;
// const SCROLLVIEW_REF = 'ListViewRef';

var ListView_StaticRenderer = function (_React$Component) {
  inherits_default()(StaticRenderer, _React$Component);

  function StaticRenderer() {
    classCallCheck_default()(this, StaticRenderer);

    return possibleConstructorReturn_default()(this, (StaticRenderer.__proto__ || Object.getPrototypeOf(StaticRenderer)).apply(this, arguments));
  }

  createClass_default()(StaticRenderer, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.shouldUpdate;
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.render();
    }
  }]);

  return StaticRenderer;
}(react_default.a.Component);
// https://github.com/facebook/react-native/blob/0.26-stable/Libraries/CustomComponents/ListView/ListView.js


var ListView_ListView = function (_React$Component2) {
  inherits_default()(ListView, _React$Component2);

  function ListView() {
    var _ref;

    var _temp, _this2, _ret;

    classCallCheck_default()(this, ListView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = possibleConstructorReturn_default()(this, (_ref = ListView.__proto__ || Object.getPrototypeOf(ListView)).call.apply(_ref, [this].concat(args))), _this2), ListView_initialiseProps.call(_this2), _temp), possibleConstructorReturn_default()(_this2, _ret);
  }

  /**
   * Exports some data, e.g. for perf investigations or analytics.
   */


  createClass_default()(ListView, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      // this data should never trigger a render pass, so don't put in state
      this.scrollProperties = {
        visibleLength: null,
        contentLength: null,
        offset: 0
      };
      this._childFrames = [];
      this._visibleRows = {};
      this._prevRenderedRowsCount = 0;
      this._sentEndForContentLength = null;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      if (this.props.dataSource !== nextProps.dataSource || this.props.initialListSize !== nextProps.initialListSize) {
        this.setState(function (state, props) {
          _this3._prevRenderedRowsCount = 0;
          return {
            curRenderedRowsCount: Math.min(Math.max(state.curRenderedRowsCount, nextProps.initialListSize // for preact
            ), nextProps.dataSource.getRowCount() // for preact
            )
          };
        }, function () {
          return _this3._renderMoreRowsIfNeeded();
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var dataSource = this.props.dataSource;
      var allRowIDs = dataSource.rowIdentities;
      var bodyComponents = [];
      var rowCount = 0;

      for (var sectionIdx = 0; sectionIdx < allRowIDs.length; sectionIdx++) {
        var sectionID = dataSource.sectionIdentities[sectionIdx];
        var rowIDs = allRowIDs[sectionIdx];
        if (rowIDs.length === 0) {
          continue;
        }

        var renderSectionHeader = void 0;
        if (this.props.renderSectionHeader) {
          var shouldUpdateHeader = rowCount >= this._prevRenderedRowsCount && dataSource.sectionHeaderShouldUpdate(sectionIdx);

          renderSectionHeader = react_default.a.createElement(ListView_StaticRenderer, {
            key: 's_' + sectionID,
            shouldUpdate: !!shouldUpdateHeader,
            render: this.props.renderSectionHeader.bind(null, dataSource.getSectionHeaderData(sectionIdx), sectionID)
          });
        }

        var sectionBody = [];
        for (var rowIdx = 0; rowIdx < rowIDs.length; rowIdx++) {
          var rowID = rowIDs[rowIdx];
          var comboID = sectionID + '_' + rowID;
          var shouldUpdateRow = rowCount >= this._prevRenderedRowsCount && dataSource.rowShouldUpdate(sectionIdx, rowIdx);
          var row = react_default.a.createElement(ListView_StaticRenderer, {
            key: 'r_' + comboID,
            shouldUpdate: !!shouldUpdateRow,
            render: this.props.renderRow.bind(null, dataSource.getRowData(sectionIdx, rowIdx), sectionID, rowID, this.onRowHighlighted)
          });
          sectionBody.push(row);

          if (this.props.renderSeparator && (rowIdx !== rowIDs.length - 1 || sectionIdx === allRowIDs.length - 1)) {
            var adjacentRowHighlighted = this.state.highlightedRow.sectionID === sectionID && (this.state.highlightedRow.rowID === rowID || this.state.highlightedRow.rowID === rowIDs[rowIdx + 1]);
            var separator = this.props.renderSeparator(sectionID, rowID, adjacentRowHighlighted);
            if (separator) {
              sectionBody.push(separator);
            }
          }
          if (++rowCount === this.state.curRenderedRowsCount) {
            break;
          }
        }

        var rowsAndSeparators = react_default.a.cloneElement(this.props.renderSectionBodyWrapper(sectionID), {
          className: this.props.sectionBodyClassName
        }, sectionBody);

        if (this.props.renderSectionWrapper) {
          bodyComponents.push(react_default.a.cloneElement(this.props.renderSectionWrapper(sectionID), {}, renderSectionHeader, rowsAndSeparators));
        } else {
          bodyComponents.push(renderSectionHeader);
          bodyComponents.push(rowsAndSeparators);
        }
        if (rowCount >= this.state.curRenderedRowsCount) {
          break;
        }
      }

      var _props = this.props,
          renderScrollComponent = _props.renderScrollComponent,
          props = objectWithoutProperties_default()(_props, ['renderScrollComponent']);

      return react_default.a.cloneElement(renderScrollComponent(extends_default()({}, props, { onScroll: this._onScroll })), {
        ref: function ref(el) {
          return _this4.ListViewRef = el;
        },
        onContentSizeChange: this._onContentSizeChange,
        onLayout: this._onLayout
      }, this.props.renderHeader ? this.props.renderHeader() : null, react_default.a.cloneElement(props.renderBodyComponent(), {}, bodyComponents), this.props.renderFooter ? this.props.renderFooter() : null, props.children);
    }
  }]);

  return ListView;
}(react_default.a.Component);

ListView_ListView.DataSource = es_ListViewDataSource;
ListView_ListView.propTypes = extends_default()({}, es_ScrollView.propTypes, {
  dataSource: prop_types_default.a.instanceOf(es_ListViewDataSource).isRequired,
  renderSeparator: prop_types_default.a.func,
  renderRow: prop_types_default.a.func.isRequired,
  initialListSize: prop_types_default.a.number,
  onEndReached: prop_types_default.a.func,
  onEndReachedThreshold: prop_types_default.a.number,
  pageSize: prop_types_default.a.number,
  renderFooter: prop_types_default.a.func,
  renderHeader: prop_types_default.a.func,
  renderSectionHeader: prop_types_default.a.func,
  renderScrollComponent: prop_types_default.a.func,
  scrollRenderAheadDistance: prop_types_default.a.number,
  onChangeVisibleRows: prop_types_default.a.func,
  scrollEventThrottle: prop_types_default.a.number,
  // another added
  renderBodyComponent: prop_types_default.a.func,
  renderSectionWrapper: prop_types_default.a.func,
  renderSectionBodyWrapper: prop_types_default.a.func,
  sectionBodyClassName: prop_types_default.a.string,
  listViewPrefixCls: prop_types_default.a.string,
  useBodyScroll: prop_types_default.a.bool
});
ListView_ListView.defaultProps = {
  initialListSize: DEFAULT_INITIAL_ROWS,
  pageSize: DEFAULT_PAGE_SIZE,
  renderScrollComponent: function renderScrollComponent(props) {
    return react_default.a.createElement(es_ScrollView, props);
  },
  renderBodyComponent: function renderBodyComponent() {
    return react_default.a.createElement('div', null);
  },
  renderSectionBodyWrapper: function renderSectionBodyWrapper(sectionID) {
    return react_default.a.createElement('div', { key: sectionID });
  },
  sectionBodyClassName: 'list-view-section-body',
  listViewPrefixCls: 'rmc-list-view',
  scrollRenderAheadDistance: DEFAULT_SCROLL_RENDER_AHEAD,
  onEndReachedThreshold: DEFAULT_END_REACHED_THRESHOLD,
  scrollEventThrottle: DEFAULT_SCROLL_CALLBACK_THROTTLE,
  scrollerOptions: {}
};

var ListView_initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.state = {
    curRenderedRowsCount: this.props.initialListSize,
    highlightedRow: {} };

  this.getMetrics = function () {
    return {
      contentLength: _this5.scrollProperties.contentLength,
      totalRows: _this5.props.dataSource.getRowCount(),
      renderedRows: _this5.state.curRenderedRowsCount,
      visibleRows: Object.keys(_this5._visibleRows).length
    };
  };

  this.getInnerViewNode = function () {
    return _this5.ListViewRef.getInnerViewNode();
  };

  this.scrollTo = function () {
    var _ListViewRef;

    _this5.ListViewRef && _this5.ListViewRef.scrollTo && (_ListViewRef = _this5.ListViewRef).scrollTo.apply(_ListViewRef, arguments);
  };

  this.onRowHighlighted = function (sectionID, rowID) {
    _this5.setState({ highlightedRow: { sectionID: sectionID, rowID: rowID } });
  };

  this._onContentSizeChange = function (width, height) {
    var contentLength = !_this5.props.horizontal ? height : width;
    if (contentLength !== _this5.scrollProperties.contentLength) {
      _this5.scrollProperties.contentLength = contentLength;
      _this5._renderMoreRowsIfNeeded();
    }
    _this5.props.onContentSizeChange && _this5.props.onContentSizeChange(width, height);
  };

  this._onLayout = function (event) {
    var _event$nativeEvent$la = event.nativeEvent.layout,
        width = _event$nativeEvent$la.width,
        height = _event$nativeEvent$la.height;

    var visibleLength = !_this5.props.horizontal ? height : width;
    if (visibleLength !== _this5.scrollProperties.visibleLength) {
      _this5.scrollProperties.visibleLength = visibleLength;
      _this5._renderMoreRowsIfNeeded();
    }
    _this5.props.onLayout && _this5.props.onLayout(event);
  };

  this._maybeCallOnEndReached = function (event) {
    // console.log(this.scrollProperties, this._getDistanceFromEnd(this.scrollProperties));
    if (_this5.props.onEndReached && _this5.scrollProperties.contentLength !== _this5._sentEndForContentLength && _this5._getDistanceFromEnd(_this5.scrollProperties) < _this5.props.onEndReachedThreshold && _this5.state.curRenderedRowsCount === _this5.props.dataSource.getRowCount()) {
      _this5._sentEndForContentLength = _this5.scrollProperties.contentLength;
      _this5.props.onEndReached(event);
      return true;
    }
    return false;
  };

  this._renderMoreRowsIfNeeded = function () {
    if (_this5.scrollProperties.contentLength === null || _this5.scrollProperties.visibleLength === null || _this5.state.curRenderedRowsCount === _this5.props.dataSource.getRowCount()) {
      _this5._maybeCallOnEndReached();
      return;
    }

    var distanceFromEnd = _this5._getDistanceFromEnd(_this5.scrollProperties);
    // console.log(distanceFromEnd, this.props.scrollRenderAheadDistance);
    if (distanceFromEnd < _this5.props.scrollRenderAheadDistance) {
      _this5._pageInNewRows();
    }
  };

  this._pageInNewRows = function () {
    _this5.setState(function (state, props) {
      var rowsToRender = Math.min(state.curRenderedRowsCount + props.pageSize, props.dataSource.getRowCount());
      _this5._prevRenderedRowsCount = state.curRenderedRowsCount;
      return {
        curRenderedRowsCount: rowsToRender
      };
    }, function () {
      _this5._prevRenderedRowsCount = _this5.state.curRenderedRowsCount;
    });
  };

  this._getDistanceFromEnd = function (scrollProperties) {
    return scrollProperties.contentLength - scrollProperties.visibleLength - scrollProperties.offset;
  };

  this._onScroll = function (e, metrics) {
    // when the ListView is destroyed,
    // but also will trigger scroll event after `scrollEventThrottle`
    if (!_this5.ListViewRef) {
      return;
    }

    _this5.scrollProperties = metrics;

    if (!_this5._maybeCallOnEndReached(e)) {
      _this5._renderMoreRowsIfNeeded();
    }

    if (_this5.props.onEndReached && _this5._getDistanceFromEnd(_this5.scrollProperties) > _this5.props.onEndReachedThreshold) {
      // Scrolled out of the end zone, so it should be able to trigger again.
      _this5._sentEndForContentLength = null;
    }

    _this5.props.onScroll && _this5.props.onScroll(e);
  };
};

/* harmony default export */ var es_ListView = (ListView_ListView);
// CONCATENATED MODULE: ./node_modules/rmc-list-view/es/Indexed.js














function setDocumentScrollTop(val) {
  window.document.body.scrollTop = val; // chrome61 is invalid
  window.document.documentElement.scrollTop = val;
}

/* eslint react/prop-types: 0 */

var Indexed_IndexedList = function (_React$Component) {
  inherits_default()(IndexedList, _React$Component);

  function IndexedList(props) {
    classCallCheck_default()(this, IndexedList);

    var _this = possibleConstructorReturn_default()(this, (IndexedList.__proto__ || Object.getPrototypeOf(IndexedList)).call(this, props));

    Indexed_initialiseProps.call(_this);

    _this.state = {
      pageSize: props.pageSize,
      _delay: false
    };
    return _this;
  }

  createClass_default()(IndexedList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.dataChange(this.props);
      // handle quickSearchBar
      this.getQsInfo();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.dataSource !== nextProps.dataSource) {
        this.dataChange(nextProps);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.getQsInfo();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._timer) {
        clearTimeout(this._timer);
      }
      this._hCache = null;
    }
  }, {
    key: 'renderQuickSearchBar',
    value: function renderQuickSearchBar(quickSearchBarTop, quickSearchBarStyle) {
      var _this2 = this;

      var _props = this.props,
          dataSource = _props.dataSource,
          prefixCls = _props.prefixCls;

      var sectionKvs = dataSource.sectionIdentities.map(function (i) {
        return {
          value: i,
          label: dataSource._getSectionHeaderData(dataSource._dataBlob, i)
        };
      });
      return react_default.a.createElement(
        'ul',
        {
          ref: function ref(el) {
            return _this2.quickSearchBarRef = el;
          },
          className: prefixCls + '-quick-search-bar', style: quickSearchBarStyle,
          onTouchStart: this.onTouchStart,
          onTouchMove: this.onTouchMove,
          onTouchEnd: this.onTouchEnd,
          onTouchCancel: this.onTouchEnd
        },
        react_default.a.createElement(
          'li',
          { 'data-qf-target': quickSearchBarTop.value,
            onClick: function onClick() {
              return _this2.onQuickSearchTop(undefined, quickSearchBarTop.value);
            }
          },
          quickSearchBarTop.label
        ),
        sectionKvs.map(function (i) {
          return react_default.a.createElement(
            'li',
            { key: i.value, 'data-qf-target': i.value,
              onClick: function onClick() {
                return _this2.onQuickSearch(i.value);
              }
            },
            i.label
          );
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this,
          _classNames;

      var _state = this.state,
          _delay = _state._delay,
          pageSize = _state.pageSize;

      var _props2 = this.props,
          className = _props2.className,
          prefixCls = _props2.prefixCls,
          children = _props2.children,
          quickSearchBarTop = _props2.quickSearchBarTop,
          quickSearchBarStyle = _props2.quickSearchBarStyle,
          _props2$initialListSi = _props2.initialListSize,
          initialListSize = _props2$initialListSi === undefined ? Math.min(20, this.props.dataSource.getRowCount()) : _props2$initialListSi,
          showQuickSearchIndicator = _props2.showQuickSearchIndicator,
          _renderSectionHeader = _props2.renderSectionHeader,
          sectionHeaderClassName = _props2.sectionHeaderClassName,
          other = objectWithoutProperties_default()(_props2, ['className', 'prefixCls', 'children', 'quickSearchBarTop', 'quickSearchBarStyle', 'initialListSize', 'showQuickSearchIndicator', 'renderSectionHeader', 'sectionHeaderClassName']);

      // initialListSize={this.props.dataSource.getRowCount()}


      return react_default.a.createElement(
        'div',
        { className: prefixCls + '-container' },
        _delay && this.props.delayActivityIndicator,
        react_default.a.createElement(
          es_ListView,
          extends_default()({}, other, {
            ref: function ref(el) {
              return _this3.indexedListViewRef = el;
            },
            className: classnames_default()(prefixCls, className),
            initialListSize: initialListSize,
            pageSize: pageSize,
            renderSectionHeader: function renderSectionHeader(sectionData, sectionID) {
              return react_default.a.cloneElement(_renderSectionHeader(sectionData, sectionID), {
                ref: function ref(c) {
                  return _this3.sectionComponents[sectionID] = c;
                },
                className: sectionHeaderClassName || prefixCls + '-section-header'
              });
            }
          }),
          children
        ),
        this.renderQuickSearchBar(quickSearchBarTop, quickSearchBarStyle),
        showQuickSearchIndicator ? react_default.a.createElement('div', { className: classnames_default()((_classNames = {}, defineProperty_default()(_classNames, prefixCls + '-qsindicator', true), defineProperty_default()(_classNames, prefixCls + '-qsindicator-hide', !showQuickSearchIndicator || !this.state.showQuickSearchIndicator), _classNames)), ref: function ref(el) {
            return _this3.qsIndicatorRef = el;
          }
        }) : null
      );
    }
  }]);

  return IndexedList;
}(react_default.a.Component);

Indexed_IndexedList.propTypes = extends_default()({}, es_ListView.propTypes, {
  children: prop_types_default.a.any,
  prefixCls: prop_types_default.a.string,
  className: prop_types_default.a.string,
  sectionHeaderClassName: prop_types_default.a.string,
  quickSearchBarTop: prop_types_default.a.object,
  quickSearchBarStyle: prop_types_default.a.object,
  onQuickSearch: prop_types_default.a.func,
  showQuickSearchIndicator: prop_types_default.a.bool
});
Indexed_IndexedList.defaultProps = {
  prefixCls: 'rmc-indexed-list',
  quickSearchBarTop: { value: '#', label: '#' },
  onQuickSearch: function onQuickSearch() {},
  showQuickSearchIndicator: false,
  delayTime: 100,
  // delayActivityIndicator: <div style={{padding: 5, textAlign: 'center'}}>rendering more</div>,
  delayActivityIndicator: ''
};

var Indexed_initialiseProps = function _initialiseProps() {
  var _this4 = this;

  this.onQuickSearchTop = function (sectionID, topId) {
    if (_this4.props.useBodyScroll) {
      setDocumentScrollTop(0);
    } else {
      react_dom_default.a.findDOMNode(_this4.indexedListViewRef.ListViewRef).scrollTop = 0;
    }
    _this4.props.onQuickSearch(sectionID, topId);
  };

  this.onQuickSearch = function (sectionID) {
    var lv = react_dom_default.a.findDOMNode(_this4.indexedListViewRef.ListViewRef);
    var sec = react_dom_default.a.findDOMNode(_this4.sectionComponents[sectionID]);
    if (_this4.props.useBodyScroll) {
      setDocumentScrollTop(sec.getBoundingClientRect().top - lv.getBoundingClientRect().top + getOffsetTop(lv));
    } else {
      lv.scrollTop += sec.getBoundingClientRect().top - lv.getBoundingClientRect().top;
    }
    _this4.props.onQuickSearch(sectionID);
  };

  this.onTouchStart = function (e) {
    _this4._target = e.target;
    _this4._basePos = _this4.quickSearchBarRef.getBoundingClientRect();
    document.addEventListener('touchmove', _this4._disableParent, false);
    document.body.className = document.body.className + ' ' + _this4.props.prefixCls + '-qsb-moving';
    _this4.updateIndicator(_this4._target);
  };

  this.onTouchMove = function (e) {
    e.preventDefault();
    if (_this4._target) {
      var ex = _event(e);
      var basePos = _this4._basePos;
      var _pos = void 0;
      if (ex.clientY >= basePos.top && ex.clientY <= basePos.top + _this4._qsHeight) {
        _pos = Math.floor((ex.clientY - basePos.top) / _this4._avgH);
        var target = void 0;
        if (_pos in _this4._hCache) {
          target = _this4._hCache[_pos][0];
        }
        if (target) {
          var overValue = target.getAttribute('data-qf-target');
          if (_this4._target !== target) {
            if (_this4.props.quickSearchBarTop.value === overValue) {
              _this4.onQuickSearchTop(undefined, overValue);
            } else {
              _this4.onQuickSearch(overValue);
            }
            _this4.updateIndicator(target);
          }
          _this4._target = target;
        }
      }
    }
  };

  this.onTouchEnd = function () {
    if (!_this4._target) {
      return;
    }
    document.removeEventListener('touchmove', _this4._disableParent, false);
    document.body.className = document.body.className.replace(new RegExp('\\s*' + _this4.props.prefixCls + '-qsb-moving', 'g'), '');
    _this4.updateIndicator(_this4._target, true);
    _this4._target = null;
  };

  this.getQsInfo = function () {
    var quickSearchBar = _this4.quickSearchBarRef;
    var height = quickSearchBar.offsetHeight;
    var hCache = [];
    [].slice.call(quickSearchBar.querySelectorAll('[data-qf-target]')).forEach(function (d) {
      hCache.push([d]);
    });
    var _avgH = height / hCache.length;
    var _top = 0;
    for (var i = 0, len = hCache.length; i < len; i++) {
      _top = i * _avgH;
      hCache[i][1] = [_top, _top + _avgH];
    }
    _this4._qsHeight = height;
    _this4._avgH = _avgH;
    _this4._hCache = hCache;
  };

  this.sectionComponents = {};

  this.dataChange = function (props) {
    // delay render more
    var rowCount = props.dataSource.getRowCount();
    if (!rowCount) {
      return;
    }
    _this4.setState({
      _delay: true
    });
    if (_this4._timer) {
      clearTimeout(_this4._timer);
    }
    _this4._timer = setTimeout(function () {
      _this4.setState({
        pageSize: rowCount,
        _delay: false
      }, function () {
        return _this4.indexedListViewRef._pageInNewRows();
      });
    }, props.delayTime);
  };

  this.updateIndicator = function (ele, end) {
    var el = ele;
    if (!el.getAttribute('data-qf-target')) {
      el = el.parentNode;
    }
    if (_this4.props.showQuickSearchIndicator) {
      _this4.qsIndicatorRef.innerText = el.innerText.trim();
      _this4.setState({
        showQuickSearchIndicator: true
      });
      if (_this4._indicatorTimer) {
        clearTimeout(_this4._indicatorTimer);
      }
      _this4._indicatorTimer = setTimeout(function () {
        _this4.setState({
          showQuickSearchIndicator: false
        });
      }, 1000);
    }

    var cls = _this4.props.prefixCls + '-quick-search-bar-over';
    // can not use setState to change className, it has a big performance issue!
    _this4._hCache.forEach(function (d) {
      d[0].className = d[0].className.replace(cls, '');
    });
    if (!end) {
      el.className = el.className + ' ' + cls;
    }
  };

  this._disableParent = function (e) {
    e.preventDefault();
    e.stopPropagation();
  };
};

/* harmony default export */ var Indexed = (Indexed_IndexedList);
// CONCATENATED MODULE: ./node_modules/rmc-list-view/es/index.js
// export this package's api



es_ListView.IndexedList = Indexed;
var DataSource = es_ListView.DataSource;


/* harmony default export */ var rmc_list_view_es = (es_ListView);
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/list-view/handleProps.js
var handleProps_rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
/* tslint:disable:no-unused-variable */

/* tslint:enable:no-unused-variable */

var handleProps_Item = list.Item;

function handleProps(props, isIndexed) {
    var renderHeader = props.renderHeader,
        renderFooter = props.renderFooter,
        renderSectionHeader = props.renderSectionHeader,
        renderBodyComponent = props.renderBodyComponent,
        restProps = handleProps_rest(props, ["renderHeader", "renderFooter", "renderSectionHeader", "renderBodyComponent"]);

    var listPrefixCls = props.listPrefixCls;
    var extraProps = {
        renderHeader: null,
        renderFooter: null,
        renderSectionHeader: null,
        renderBodyComponent: renderBodyComponent || function () {
            return react["createElement"]('div', { className: listPrefixCls + '-body' });
        }
    };
    if (renderHeader) {
        extraProps.renderHeader = function () {
            return react["createElement"](
                'div',
                { className: listPrefixCls + '-header' },
                renderHeader()
            );
        };
    }
    if (renderFooter) {
        extraProps.renderFooter = function () {
            return react["createElement"](
                'div',
                { className: listPrefixCls + '-footer' },
                renderFooter()
            );
        };
    }
    if (renderSectionHeader) {
        extraProps.renderSectionHeader = isIndexed ? function (sectionData, sectionID) {
            return react["createElement"](
                'div',
                null,
                react["createElement"](
                    handleProps_Item,
                    { prefixCls: listPrefixCls },
                    renderSectionHeader(sectionData, sectionID)
                )
            );
        } : function (sectionData, sectionID) {
            return react["createElement"](
                handleProps_Item,
                { prefixCls: listPrefixCls },
                renderSectionHeader(sectionData, sectionID)
            );
        };
    }
    return { restProps: restProps, extraProps: extraProps };
}
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/list-view/Indexed.js








var list_view_Indexed_IndexedList = rmc_list_view_es.IndexedList;

var Indexed_MIndexedList = function (_React$Component) {
    inherits_default()(MIndexedList, _React$Component);

    function MIndexedList() {
        classCallCheck_default()(this, MIndexedList);

        return possibleConstructorReturn_default()(this, (MIndexedList.__proto__ || Object.getPrototypeOf(MIndexedList)).apply(this, arguments));
    }

    createClass_default()(MIndexedList, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                listPrefixCls = _props.listPrefixCls;

            var _handleProps = handleProps(this.props, true),
                restProps = _handleProps.restProps,
                extraProps = _handleProps.extraProps;

            return react["createElement"](
                list_view_Indexed_IndexedList,
                extends_default()({ ref: function ref(el) {
                        return _this2.indexedListRef = el;
                    }, sectionHeaderClassName: prefixCls + '-section-header ' + listPrefixCls + '-body', sectionBodyClassName: prefixCls + '-section-body ' + listPrefixCls + '-body' }, restProps, extraProps),
                this.props.children
            );
        }
    }]);

    return MIndexedList;
}(react["Component"]);

/* harmony default export */ var list_view_Indexed = (Indexed_MIndexedList);

Indexed_MIndexedList.defaultProps = {
    prefixCls: 'am-indexed-list',
    listPrefixCls: 'am-list',
    listViewPrefixCls: 'am-list-view'
};
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/list-view/index.js










var list_view_ListView = function (_React$Component) {
    inherits_default()(ListView, _React$Component);

    function ListView() {
        classCallCheck_default()(this, ListView);

        var _this = possibleConstructorReturn_default()(this, (ListView.__proto__ || Object.getPrototypeOf(ListView)).apply(this, arguments));

        _this.scrollTo = function () {
            var _this$listviewRef;

            return (_this$listviewRef = _this.listviewRef).scrollTo.apply(_this$listviewRef, arguments);
        };
        _this.getInnerViewNode = function () {
            return _this.listviewRef.getInnerViewNode();
        };
        return _this;
    }

    createClass_default()(ListView, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _handleProps = handleProps(this.props, false),
                restProps = _handleProps.restProps,
                extraProps = _handleProps.extraProps;

            return react["createElement"](rmc_list_view_es, extends_default()({ ref: function ref(el) {
                    return _this2.listviewRef = el;
                } }, restProps, extraProps));
        }
    }]);

    return ListView;
}(react["Component"]);

/* harmony default export */ var list_view = (list_view_ListView);

list_view_ListView.defaultProps = {
    prefixCls: 'am-list-view',
    listPrefixCls: 'am-list'
};
list_view_ListView.DataSource = rmc_list_view_es.DataSource;
list_view_ListView.IndexedList = list_view_Indexed;
// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("m1cH");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// CONCATENATED MODULE: ./node_modules/antd-mobile/es/radio/Radio.js





var Radio_rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};




var Radio_Radio = function (_React$Component) {
    inherits_default()(Radio, _React$Component);

    function Radio() {
        classCallCheck_default()(this, Radio);

        return possibleConstructorReturn_default()(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).apply(this, arguments));
    }

    createClass_default()(Radio, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                className = _a.className,
                style = _a.style,
                restProps = Radio_rest(_a, ["className", "style"]);var prefixCls = restProps.prefixCls,
                children = restProps.children;

            var wrapCls = classnames_default()(prefixCls + '-wrapper', className);
            if ('class' in restProps) {
                // Todo https://github.com/developit/preact-compat/issues/422
                /* tslint:disable:no-string-literal */
                delete restProps['class'];
            }
            var mark = react["createElement"](
                'label',
                { className: wrapCls, style: style },
                react["createElement"](es_Checkbox, extends_default()({}, restProps, { type: 'radio' })),
                children
            );
            if (this.props.wrapLabel) {
                return mark;
            }
            return react["createElement"](es_Checkbox, extends_default()({}, this.props, { type: 'radio' }));
        }
    }]);

    return Radio;
}(react["Component"]);

/* harmony default export */ var radio_Radio = (Radio_Radio);

Radio_Radio.defaultProps = {
    prefixCls: 'am-radio',
    wrapLabel: true
};
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/radio/RadioItem.js






var RadioItem_rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};




var RadioItem_ListItem = list.Item;
function RadioItem_noop() {}

var RadioItem_RadioItem = function (_React$Component) {
    inherits_default()(RadioItem, _React$Component);

    function RadioItem() {
        classCallCheck_default()(this, RadioItem);

        return possibleConstructorReturn_default()(this, (RadioItem.__proto__ || Object.getPrototypeOf(RadioItem)).apply(this, arguments));
    }

    createClass_default()(RadioItem, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _a = this.props,
                listPrefixCls = _a.listPrefixCls,
                onChange = _a.onChange,
                disabled = _a.disabled,
                radioProps = _a.radioProps,
                onClick = _a.onClick,
                otherProps = RadioItem_rest(_a, ["listPrefixCls", "onChange", "disabled", "radioProps", "onClick"]);var prefixCls = otherProps.prefixCls,
                className = otherProps.className,
                children = otherProps.children;

            var wrapCls = classnames_default()(prefixCls + '-item', className, defineProperty_default()({}, prefixCls + '-item-disabled', disabled === true));
            // Note: if not omit `onChange`, it will trigger twice on check listitem
            if (!disabled) {
                otherProps.onClick = onClick || RadioItem_noop;
            }
            var extraProps = {};
            ['name', 'defaultChecked', 'checked', 'onChange', 'disabled'].forEach(function (i) {
                if (i in _this2.props) {
                    extraProps[i] = _this2.props[i];
                }
            });
            return react["createElement"](
                RadioItem_ListItem,
                extends_default()({}, otherProps, { prefixCls: listPrefixCls, className: wrapCls, extra: react["createElement"](radio_Radio, extends_default()({}, radioProps, extraProps)) }),
                children
            );
        }
    }]);

    return RadioItem;
}(react["Component"]);

/* harmony default export */ var radio_RadioItem = (RadioItem_RadioItem);

RadioItem_RadioItem.defaultProps = {
    prefixCls: 'am-radio',
    listPrefixCls: 'am-list',
    radioProps: {}
};
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/radio/index.js


radio_Radio.RadioItem = radio_RadioItem;
/* harmony default export */ var es_radio = (radio_Radio);
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/menu/SubMenu.js

/* tslint:disable:jsx-no-multiline-js */





function SubMenu(props) {
    var onClick = function onClick(dataItem) {
        if (props.onSel) {
            props.onSel(dataItem);
        }
    };
    var subMenuPrefixCls = props.subMenuPrefixCls,
        radioPrefixCls = props.radioPrefixCls,
        subMenuData = props.subMenuData,
        showSelect = props.showSelect,
        selItem = props.selItem,
        multiSelect = props.multiSelect;

    var selected = function selected(dataItem) {
        return showSelect && selItem.length > 0 && selItem.indexOf(dataItem.value) !== -1;
    };
    var ItemComponent = !multiSelect ? es_radio : es_checkbox;
    return react["createElement"](
        list,
        { style: { paddingTop: 0 }, className: subMenuPrefixCls },
        subMenuData.map(function (dataItem, idx) {
            var _classnames;

            return react["createElement"](
                list.Item,
                { className: classnames_default()(radioPrefixCls + '-item', (_classnames = {}, defineProperty_default()(_classnames, subMenuPrefixCls + '-item-selected', selected(dataItem)), defineProperty_default()(_classnames, subMenuPrefixCls + '-item-disabled', dataItem.disabled), _classnames)), key: idx, extra: react["createElement"](ItemComponent, { checked: selected(dataItem), disabled: dataItem.disabled, onChange: function onChange() {
                            return onClick(dataItem);
                        } }) },
                dataItem.label
            );
        })
    );
}
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/menu/index.js







/* tslint:disable:jsx-no-multiline-js */









var menu_Menu = function (_React$Component) {
    inherits_default()(Menu, _React$Component);

    function Menu(props) {
        classCallCheck_default()(this, Menu);

        var _this = possibleConstructorReturn_default()(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

        _this.onMenuOk = function () {
            var onOk = _this.props.onOk;

            if (onOk) {
                onOk(_this.state.value);
            }
        };
        _this.onMenuCancel = function () {
            var onCancel = _this.props.onCancel;

            if (onCancel) {
                onCancel();
            }
        };
        _this.onClickFirstLevelItem = function (dataItem) {
            var onChange = _this.props.onChange;

            _this.setState({
                firstLevelSelectValue: dataItem.value
            });
            if (dataItem.isLeaf && onChange) {
                onChange([dataItem.value]);
            }
        };
        _this.getSelectValue = function (dataItem) {
            var _this$props = _this.props,
                level = _this$props.level,
                multiSelect = _this$props.multiSelect;

            if (multiSelect) {
                var _this$state = _this.state,
                    value = _this$state.value,
                    firstLevelSelectValue = _this$state.firstLevelSelectValue;

                if (value && value.length > 0) {
                    if (level === 2 && value[0] !== firstLevelSelectValue) {
                        /* if level is 2, when first level is reselect, reset submenu array */
                        return [firstLevelSelectValue, [dataItem.value]];
                    } else {
                        /* if level is 1, or first level isn't changed when level is 2, just do add or delete for submenu array  */
                        var chosenValues = level === 2 ? value[1] : value; // FIXME: hack type
                        var existIndex = chosenValues.indexOf(dataItem.value);
                        if (existIndex === -1) {
                            chosenValues.push(dataItem.value);
                        } else {
                            chosenValues.splice(existIndex, 1);
                        }
                        return value;
                    }
                } else {
                    /* if value is not exist before, init value */
                    return level === 2 ? [firstLevelSelectValue, [dataItem.value]] : [dataItem.value];
                }
            }
            return level === 2 ? [_this.state.firstLevelSelectValue, dataItem.value] : [dataItem.value];
        };
        _this.onClickSubMenuItem = function (dataItem) {
            var onChange = _this.props.onChange;

            var value = _this.getSelectValue(dataItem);
            _this.setState({ value: value });
            setTimeout(function () {
                // if onChange will close the menu, set a little time to show its selection state.
                if (onChange) {
                    onChange(value);
                }
            }, 300);
        };
        _this.state = {
            firstLevelSelectValue: _this.getNewFsv(props),
            value: props.value,
            height: props.height
        };
        return _this;
    }

    createClass_default()(Menu, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.value !== this.props.value) {
                this.setState({
                    firstLevelSelectValue: this.getNewFsv(nextProps),
                    value: nextProps.value
                });
            }
            if (this.props.height !== nextProps.height) {
                this.setState({
                    height: nextProps.height
                });
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (!('height' in this.props)) {
                this.setState({
                    height: Math.round(document.documentElement.clientHeight / 2)
                });
            }
        }
    }, {
        key: 'getNewFsv',
        value: function getNewFsv(props) {
            var value = props.value,
                data = props.data;

            var firstValue = '';
            if (value && value.length) {
                // if has init path, chose init first value
                firstValue = value[0]; // this is a contract
            } else if (data && data.length && !data[0].isLeaf) {
                // chose the first menu item if it's not leaf.
                firstValue = data[0].value;
            }
            return firstValue;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                className = _props.className,
                style = _props.style,
                _props$data = _props.data,
                data = _props$data === undefined ? [] : _props$data,
                prefixCls = _props.prefixCls,
                level = _props.level,
                multiSelect = _props.multiSelect,
                multiSelectMenuBtnsCls = _props.multiSelectMenuBtnsCls,
                MenuSelectContanerPrefixCls = _props.MenuSelectContanerPrefixCls;
            var _state = this.state,
                firstLevelSelectValue = _state.firstLevelSelectValue,
                value = _state.value,
                height = _state.height;

            var subMenuData = data; // menu only has one level as init
            if (level === 2) {
                var parent = data;
                if (firstLevelSelectValue && firstLevelSelectValue !== '') {
                    parent = data.filter(function (dataItem) {
                        return dataItem.value === firstLevelSelectValue;
                    });
                }
                // tslint:disable-next-line:prefer-conditional-expression
                if (parent[0] && parent[0].children && parent[0].isLeaf !== true) {
                    subMenuData = parent[0].children;
                } else {
                    subMenuData = [];
                }
            }
            var subValue = value && value.length > 0 && [].concat(toConsumableArray_default()(value)) || [];
            if (level === 2 && subValue.length > 1) {
                subValue.shift();
                if (multiSelect) {
                    /* example: [[1,2,3]] -> [1,2,3] */
                    subValue = subValue[0]; // FIXME: hack type
                }
            }
            var parentValue = value && value.length > 1 && level === 2 ? value[0] : null;
            var subSelInitItem = subMenuData.filter(function (dataItem) {
                return subValue.indexOf(dataItem.value) !== -1;
            }).map(function (item) {
                return item.value;
            });
            var showSelect = true;
            if (level === 2 && parentValue !== firstLevelSelectValue) {
                showSelect = false;
            }
            // tslint:disable-next-line:variable-name
            var _locale = getComponentLocale(this.props, this.context, 'Menu', function () {
                return __webpack_require__("D0FO");
            });
            var heightStyle = height !== undefined ? {
                height: height + 'px'
            } : {};
            return react["createElement"](
                flex,
                { className: classnames_default()(prefixCls, defineProperty_default()({}, className, !!className)), style: extends_default()({}, style, heightStyle), direction: 'column', align: 'stretch' },
                react["createElement"](
                    flex,
                    { align: 'start', className: classnames_default()(defineProperty_default()({}, MenuSelectContanerPrefixCls, true)) },
                    level === 2 && react["createElement"](
                        flex.Item,
                        null,
                        react["createElement"](
                            list,
                            { role: 'tablist' },
                            data.map(function (dataItem, index) {
                                return react["createElement"](
                                    list.Item,
                                    { className: dataItem.value === firstLevelSelectValue ? prefixCls + '-selected' : '', onClick: function onClick() {
                                            return _this2.onClickFirstLevelItem(dataItem);
                                        }, key: 'listitem-1-' + index, role: 'tab', 'aria-selected': dataItem.value === firstLevelSelectValue },
                                    dataItem.label
                                );
                            })
                        )
                    ),
                    react["createElement"](
                        flex.Item,
                        { role: 'tabpanel', 'aria-hidden': 'false', className: MenuSelectContanerPrefixCls + '-submenu' },
                        react["createElement"](SubMenu, { subMenuPrefixCls: this.props.subMenuPrefixCls, radioPrefixCls: this.props.radioPrefixCls, subMenuData: subMenuData, selItem: subSelInitItem, onSel: this.onClickSubMenuItem, showSelect: showSelect, multiSelect: multiSelect })
                    )
                ),
                multiSelect && react["createElement"](
                    'div',
                    { className: multiSelectMenuBtnsCls },
                    react["createElement"](
                        es_button,
                        { inline: true, className: multiSelectMenuBtnsCls + '-btn', onClick: this.onMenuCancel },
                        _locale.cancelText
                    ),
                    react["createElement"](
                        es_button,
                        { inline: true, type: 'primary', className: multiSelectMenuBtnsCls + '-btn', onClick: this.onMenuOk },
                        _locale.okText
                    )
                )
            );
        }
    }]);

    return Menu;
}(react["Component"]);

/* harmony default export */ var menu = (menu_Menu);

menu_Menu.defaultProps = {
    prefixCls: 'am-menu',
    subMenuPrefixCls: 'am-sub-menu',
    radioPrefixCls: 'am-radio',
    multiSelectMenuBtnsCls: 'am-multi-select-btns',
    MenuSelectContanerPrefixCls: 'am-menu-select-container',
    data: [],
    level: 2,
    onChange: function onChange() {},
    onOk: function onOk() {},
    onCancel: function onCancel() {},
    multiSelect: false
};
menu_Menu.contextTypes = {
    antLocale: prop_types["object"]
};
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/_util/closest.js
function closest(el, selector) {
    var matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    var p = el;
    while (p) {
        if (matchesSelector.call(p, selector)) {
            return p;
        }
        p = p.parentElement;
    }
    return null;
}
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/modal/Modal.js






var Modal_rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};




var Modal_ModalComponent = function (_React$Component) {
    inherits_default()(ModalComponent, _React$Component);

    function ModalComponent() {
        classCallCheck_default()(this, ModalComponent);

        return possibleConstructorReturn_default()(this, (ModalComponent.__proto__ || Object.getPrototypeOf(ModalComponent)).apply(this, arguments));
    }

    return ModalComponent;
}(react["Component"]);

var Modal_Modal = function (_ModalComponent) {
    inherits_default()(Modal, _ModalComponent);

    function Modal() {
        classCallCheck_default()(this, Modal);

        return possibleConstructorReturn_default()(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
    }

    createClass_default()(Modal, [{
        key: 'renderFooterButton',
        value: function renderFooterButton(button, prefixCls, i) {
            var buttonStyle = {};
            if (button.style) {
                buttonStyle = button.style;
                if (typeof buttonStyle === 'string') {
                    var styleMap = {
                        cancel: {},
                        'default': {},
                        destructive: { color: 'red' }
                    };
                    buttonStyle = styleMap[buttonStyle] || {};
                }
            }
            var onClickFn = function onClickFn(e) {
                e.preventDefault();
                if (button.onPress) {
                    button.onPress();
                }
            };
            return react["createElement"](
                es_TouchFeedback,
                { activeClassName: prefixCls + '-button-active', key: i },
                react["createElement"](
                    'a',
                    { className: prefixCls + '-button', role: 'button', style: buttonStyle, onClick: onClickFn },
                    button.text || 'Button'
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this,
                _classnames2;

            var _a = this.props,
                prefixCls = _a.prefixCls,
                className = _a.className,
                wrapClassName = _a.wrapClassName,
                transitionName = _a.transitionName,
                maskTransitionName = _a.maskTransitionName,
                style = _a.style,
                platform = _a.platform,
                _a$footer = _a.footer,
                footer = _a$footer === undefined ? [] : _a$footer,
                operation = _a.operation,
                animated = _a.animated,
                transparent = _a.transparent,
                popup = _a.popup,
                animationType = _a.animationType,
                restProps = Modal_rest(_a, ["prefixCls", "className", "wrapClassName", "transitionName", "maskTransitionName", "style", "platform", "footer", "operation", "animated", "transparent", "popup", "animationType"]);
            var btnGroupClass = classnames_default()(prefixCls + '-button-group-' + (footer.length === 2 && !operation ? 'h' : 'v'), prefixCls + '-button-group-' + (operation ? 'operation' : 'normal'));
            var footerDom = footer.length ? react["createElement"](
                'div',
                { className: btnGroupClass, role: 'group' },
                footer.map(function (button, i) {
                    return (
                        // tslint:disable-next-line:jsx-no-multiline-js
                        _this3.renderFooterButton(button, prefixCls, i)
                    );
                })
            ) : null;
            var transName = void 0;
            var maskTransName = void 0;
            if (animated) {
                // tslint:disable-next-line:prefer-conditional-expression
                if (transparent) {
                    transName = maskTransName = 'am-fade';
                } else {
                    transName = maskTransName = 'am-slide-up';
                }
                if (popup) {
                    transName = animationType === 'slide-up' ? 'am-slide-up' : 'am-slide-down';
                    maskTransName = 'am-fade';
                }
            }
            var wrapCls = classnames_default()(wrapClassName, defineProperty_default()({}, prefixCls + '-wrap-popup', popup));
            var cls = classnames_default()(className, (_classnames2 = {}, defineProperty_default()(_classnames2, prefixCls + '-transparent', transparent), defineProperty_default()(_classnames2, prefixCls + '-popup', popup), defineProperty_default()(_classnames2, prefixCls + '-popup-' + animationType, popup && animationType), defineProperty_default()(_classnames2, prefixCls + '-android', platform === 'android'), _classnames2));
            return react["createElement"](es_DialogWrap, extends_default()({}, restProps, { prefixCls: prefixCls, className: cls, wrapClassName: wrapCls, transitionName: transitionName || transName, maskTransitionName: maskTransitionName || maskTransName, style: style, footer: footerDom }));
        }
    }]);

    return Modal;
}(Modal_ModalComponent);

/* harmony default export */ var modal_Modal = (Modal_Modal);

Modal_Modal.defaultProps = {
    prefixCls: 'am-modal',
    transparent: false,
    popup: false,
    animationType: 'slide-down',
    animated: true,
    style: {},
    onShow: function onShow() {},

    footer: [],
    closable: false,
    operation: false,
    platform: 'ios'
};
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/modal/alert.js




function alert_alert(title, message) {
    var actions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [{ text: '确定' }];
    var platform = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'ios';

    var closed = false;
    if (!title && !message) {
        // console.log('Must specify either an alert title, or message, or both');
        return {
            close: function close() {}
        };
    }
    var div = document.createElement('div');
    document.body.appendChild(div);
    function close() {
        react_dom["unmountComponentAtNode"](div);
        if (div && div.parentNode) {
            div.parentNode.removeChild(div);
        }
    }
    var footer = actions.map(function (button) {
        // tslint:disable-next-line:only-arrow-functions
        var orginPress = button.onPress || function () {};
        button.onPress = function () {
            if (closed) {
                return;
            }
            var res = orginPress();
            if (res && res.then) {
                res.then(function () {
                    closed = true;
                    close();
                })['catch'](function () {});
            } else {
                closed = true;
                close();
            }
        };
        return button;
    });
    var prefixCls = 'am-modal';
    function onWrapTouchStart(e) {
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
            return;
        }
        var pNode = closest(e.target, '.' + prefixCls + '-footer');
        if (!pNode) {
            e.preventDefault();
        }
    }
    react_dom["render"](react["createElement"](
        modal_Modal,
        { visible: true, transparent: true, title: title, transitionName: 'am-zoom', closable: false, maskClosable: false, footer: footer, maskTransitionName: 'am-fade', platform: platform, wrapProps: { onTouchStart: onWrapTouchStart } },
        react["createElement"](
            'div',
            { className: prefixCls + '-alert-content' },
            message
        )
    ), div);
    return {
        close: close
    };
}
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/modal/operation.js




function operation_operation() {
    var actions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [{ text: '确定' }];
    var platform = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ios';

    var closed = false;
    var prefixCls = 'am-modal';
    var div = document.createElement('div');
    document.body.appendChild(div);
    function close() {
        react_dom["unmountComponentAtNode"](div);
        if (div && div.parentNode) {
            div.parentNode.removeChild(div);
        }
    }
    var footer = actions.map(function (button) {
        // tslint:disable-next-line:only-arrow-functions
        var orginPress = button.onPress || function () {};
        button.onPress = function () {
            if (closed) {
                return;
            }
            var res = orginPress();
            if (res && res.then) {
                res.then(function () {
                    closed = true;
                    close();
                })['catch'](function () {});
            } else {
                closed = true;
                close();
            }
        };
        return button;
    });
    function onWrapTouchStart(e) {
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
            return;
        }
        var pNode = closest(e.target, '.am-modal-footer');
        if (!pNode) {
            e.preventDefault();
        }
    }
    react_dom["render"](react["createElement"](modal_Modal, { visible: true, operation: true, transparent: true, prefixCls: prefixCls, transitionName: 'am-zoom', closable: false, maskClosable: true, onClose: close, footer: footer, maskTransitionName: 'am-fade', className: 'am-modal-operation', platform: platform, wrapProps: { onTouchStart: onWrapTouchStart } }), div);
    return {
        close: close
    };
}
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/modal/prompt.js




function prompt_prompt(title, message, callbackOrActions) {
    var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'default';
    var defaultValue = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
    var placeholders = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : ['', ''];
    var platform = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 'ios';

    var closed = false;
    defaultValue = typeof defaultValue === 'string' ? defaultValue : typeof defaultValue === 'number' ? '' + defaultValue : '';
    if (!callbackOrActions) {
        // console.log('Must specify callbackOrActions');
        return {
            close: function close() {}
        };
    }
    var prefixCls = 'am-modal';
    var data = {
        text: defaultValue
    };
    function onChange(e) {
        var target = e.target;
        var inputType = target.getAttribute('type');
        if (inputType !== null) {
            data[inputType] = target.value;
        }
    }
    // hotfix issue: https://github.com/ant-design/ant-design-mobile/issues/2177
    function onClick(e) {
        var target = e.currentTarget || e.target;
        if (target) {
            target.focus();
        }
    }
    function onBlurFixWechat() {
        // https://github.com/ant-design/ant-design-mobile/issues/3137
        if (/MicroMessenger/.test(navigator.userAgent)) {
            document.body.scrollTop = document.body.scrollTop;
        }
    }
    var inputDom = void 0;
    var focusFn = function focusFn(input) {
        setTimeout(function () {
            if (input) {
                input.focus();
            }
        }, 500);
    };
    switch (type) {
        case 'login-password':
            inputDom = react["createElement"](
                'div',
                { className: prefixCls + '-input-container' },
                react["createElement"](
                    'div',
                    { className: prefixCls + '-input' },
                    react["createElement"](
                        'label',
                        null,
                        react["createElement"]('input', { type: 'text', defaultValue: data.text, ref: function ref(input) {
                                return focusFn(input);
                            }, onClick: onClick, onChange: onChange, placeholder: placeholders[0], onBlur: onBlurFixWechat })
                    )
                ),
                react["createElement"](
                    'div',
                    { className: prefixCls + '-input' },
                    react["createElement"](
                        'label',
                        null,
                        react["createElement"]('input', { type: 'password', defaultValue: data.password, onClick: onClick, onChange: onChange, placeholder: placeholders[1], onBlur: onBlurFixWechat })
                    )
                )
            );
            break;
        case 'secure-text':
            inputDom = react["createElement"](
                'div',
                { className: prefixCls + '-input-container' },
                react["createElement"](
                    'div',
                    { className: prefixCls + '-input' },
                    react["createElement"](
                        'label',
                        null,
                        react["createElement"]('input', { type: 'password', defaultValue: data.password, ref: function ref(input) {
                                return focusFn(input);
                            }, onClick: onClick, onChange: onChange, placeholder: placeholders[0], onBlur: onBlurFixWechat })
                    )
                )
            );
            break;
        case 'default':
        default:
            inputDom = react["createElement"](
                'div',
                { className: prefixCls + '-input-container' },
                react["createElement"](
                    'div',
                    { className: prefixCls + '-input' },
                    react["createElement"](
                        'label',
                        null,
                        react["createElement"]('input', { type: 'text', defaultValue: data.text, ref: function ref(input) {
                                return focusFn(input);
                            }, onClick: onClick, onChange: onChange, placeholder: placeholders[0], onBlur: onBlurFixWechat })
                    )
                )
            );
    }
    var content = react["createElement"](
        'div',
        null,
        message,
        inputDom
    );
    var div = document.createElement('div');
    document.body.appendChild(div);
    function close() {
        react_dom["unmountComponentAtNode"](div);
        if (div && div.parentNode) {
            div.parentNode.removeChild(div);
        }
    }
    function handleConfirm(callback) {
        if (typeof callback !== 'function') {
            return;
        }
        var _data$text = data.text,
            text = _data$text === undefined ? '' : _data$text,
            _data$password = data.password,
            password = _data$password === undefined ? '' : _data$password;

        var callbackArgs = type === 'login-password' ? [text, password] : type === 'secure-text' ? [password] : [text];
        return callback.apply(undefined, callbackArgs);
    }
    var actions = void 0;
    if (typeof callbackOrActions === 'function') {
        actions = [{
            text: '取消',
            onPress: function onPress() {}
        }, {
            text: '确定',
            onPress: function onPress() {
                handleConfirm(callbackOrActions);
            }
        }];
    } else {
        actions = callbackOrActions.map(function (item) {
            return {
                text: item.text,
                onPress: function onPress() {
                    return handleConfirm(item.onPress);
                }
            };
        });
    }
    var footer = actions.map(function (button) {
        // tslint:disable-next-line:only-arrow-functions
        var orginPress = button.onPress || function () {};
        button.onPress = function () {
            if (closed) {
                return;
            }
            var res = orginPress();
            if (res && res.then) {
                res.then(function () {
                    closed = true;
                    close();
                })['catch'](function () {});
            } else {
                closed = true;
                close();
            }
        };
        return button;
    });
    function onWrapTouchStart(e) {
        // exclude input element for focus
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
            return;
        }
        var pNode = closest(e.target, '.' + prefixCls + '-content');
        if (!pNode) {
            e.preventDefault();
        }
    }
    react_dom["render"](react["createElement"](
        modal_Modal,
        { visible: true, transparent: true, prefixCls: prefixCls, title: title, closable: false, maskClosable: false, transitionName: 'am-zoom', footer: footer, maskTransitionName: 'am-fade', platform: platform, wrapProps: { onTouchStart: onWrapTouchStart } },
        react["createElement"](
            'div',
            { className: prefixCls + '-propmt-content' },
            content
        )
    ), div);
    return {
        close: close
    };
}
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/modal/index.js




modal_Modal.alert = alert_alert;
modal_Modal.prompt = prompt_prompt;
modal_Modal.operation = operation_operation;
/* harmony default export */ var modal = (modal_Modal);
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/nav-bar/index.js





var nav_bar_rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};



var nav_bar_NavBar = function (_React$Component) {
    inherits_default()(NavBar, _React$Component);

    function NavBar() {
        classCallCheck_default()(this, NavBar);

        return possibleConstructorReturn_default()(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).apply(this, arguments));
    }

    createClass_default()(NavBar, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                prefixCls = _a.prefixCls,
                className = _a.className,
                children = _a.children,
                mode = _a.mode,
                icon = _a.icon,
                onLeftClick = _a.onLeftClick,
                leftContent = _a.leftContent,
                rightContent = _a.rightContent,
                restProps = nav_bar_rest(_a, ["prefixCls", "className", "children", "mode", "icon", "onLeftClick", "leftContent", "rightContent"]);
            return react["createElement"](
                'div',
                extends_default()({}, restProps, { className: classnames_default()(className, prefixCls, prefixCls + '-' + mode) }),
                react["createElement"](
                    'div',
                    { className: prefixCls + '-left', role: 'button', onClick: onLeftClick },
                    icon ?
                    // tslint:disable-next-line:jsx-no-multiline-js
                    react["createElement"](
                        'span',
                        { className: prefixCls + '-left-icon', 'aria-hidden': 'true' },
                        icon
                    ) : null,
                    leftContent
                ),
                react["createElement"](
                    'div',
                    { className: prefixCls + '-title' },
                    children
                ),
                react["createElement"](
                    'div',
                    { className: prefixCls + '-right' },
                    rightContent
                )
            );
        }
    }]);

    return NavBar;
}(react["Component"]);

/* harmony default export */ var nav_bar = (nav_bar_NavBar);

nav_bar_NavBar.defaultProps = {
    prefixCls: 'am-navbar',
    mode: 'dark',
    onLeftClick: function onLeftClick() {}
};
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/notice-bar/Marquee.js





/*
 * https://github.com/jasonslyvia/react-marquee
 * remove PC
 * support React Element for text prop
*/



var Marquee_Marquee = function (_React$Component) {
    inherits_default()(Marquee, _React$Component);

    function Marquee() {
        classCallCheck_default()(this, Marquee);

        var _this = possibleConstructorReturn_default()(this, (Marquee.__proto__ || Object.getPrototypeOf(Marquee)).apply(this, arguments));

        _this.state = {
            animatedWidth: 0,
            overflowWidth: 0
        };
        return _this;
    }

    createClass_default()(Marquee, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this._measureText();
            this._startAnimation();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this._measureText();
            if (!this._marqueeTimer) {
                this._startAnimation();
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearTimeout(this._marqueeTimer);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                className = _props.className,
                text = _props.text;

            var style = extends_default()({ position: 'relative', right: this.state.animatedWidth, whiteSpace: 'nowrap', display: 'inline-block' }, this.props.style);
            return react["createElement"](
                'div',
                { className: prefixCls + '-marquee-wrap ' + className, style: { overflow: 'hidden' }, role: 'marquee' },
                react["createElement"](
                    'div',
                    { ref: function ref(el) {
                            return _this2.textRef = el;
                        }, className: prefixCls + '-marquee', style: style },
                    text
                )
            );
        }
    }, {
        key: '_startAnimation',
        value: function _startAnimation() {
            var _this3 = this;

            if (this._marqueeTimer) {
                window.clearTimeout(this._marqueeTimer);
            }
            var fps = this.props.fps;
            var TIMEOUT = 1 / fps * 1000;
            var isLeading = this.state.animatedWidth === 0;
            var timeout = isLeading ? this.props.leading : TIMEOUT;
            var animate = function animate() {
                var overflowWidth = _this3.state.overflowWidth;

                var animatedWidth = _this3.state.animatedWidth + 1;
                var isRoundOver = animatedWidth > overflowWidth;
                if (isRoundOver) {
                    if (_this3.props.loop) {
                        animatedWidth = 0;
                    } else {
                        return;
                    }
                }
                if (isRoundOver && _this3.props.trailing) {
                    _this3._marqueeTimer = window.setTimeout(function () {
                        _this3.setState({
                            animatedWidth: animatedWidth
                        });
                        _this3._marqueeTimer = window.setTimeout(animate, TIMEOUT);
                    }, _this3.props.trailing);
                } else {
                    _this3.setState({
                        animatedWidth: animatedWidth
                    });
                    _this3._marqueeTimer = window.setTimeout(animate, TIMEOUT);
                }
            };
            if (this.state.overflowWidth !== 0) {
                this._marqueeTimer = window.setTimeout(animate, timeout);
            }
        }
    }, {
        key: '_measureText',
        value: function _measureText() {
            var container = react_dom["findDOMNode"](this);
            var node = this.textRef;
            if (container && node) {
                var containerWidth = container.offsetWidth;
                var textWidth = node.offsetWidth;
                var overflowWidth = textWidth - containerWidth;
                if (overflowWidth !== this.state.overflowWidth) {
                    this.setState({
                        overflowWidth: overflowWidth
                    });
                }
            }
        }
    }]);

    return Marquee;
}(react["Component"]);

/* harmony default export */ var notice_bar_Marquee = (Marquee_Marquee);

Marquee_Marquee.defaultProps = {
    text: '',
    loop: false,
    leading: 500,
    trailing: 800,
    fps: 40,
    className: ''
};
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/notice-bar/index.js





var notice_bar_rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};





var notice_bar_NoticeBar = function (_React$Component) {
    inherits_default()(NoticeBar, _React$Component);

    function NoticeBar(props) {
        classCallCheck_default()(this, NoticeBar);

        var _this = possibleConstructorReturn_default()(this, (NoticeBar.__proto__ || Object.getPrototypeOf(NoticeBar)).call(this, props));

        _this.onClick = function () {
            var _this$props = _this.props,
                mode = _this$props.mode,
                onClick = _this$props.onClick;

            if (onClick) {
                onClick();
            }
            if (mode === 'closable') {
                _this.setState({
                    show: false
                });
            }
        };
        _this.state = {
            show: true
        };
        return _this;
    }

    createClass_default()(NoticeBar, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                mode = _a.mode,
                icon = _a.icon,
                onClick = _a.onClick,
                children = _a.children,
                className = _a.className,
                prefixCls = _a.prefixCls,
                action = _a.action,
                marqueeProps = _a.marqueeProps,
                restProps = notice_bar_rest(_a, ["mode", "icon", "onClick", "children", "className", "prefixCls", "action", "marqueeProps"]);
            var extraProps = {};
            var operationDom = null;
            if (mode === 'closable') {
                operationDom = react["createElement"](
                    'div',
                    { className: prefixCls + '-operation', onClick: this.onClick, role: 'button', 'aria-label': 'close' },
                    action ? action : react["createElement"](es_icon, { type: 'cross', size: 'md' })
                );
            } else {
                if (mode === 'link') {
                    operationDom = react["createElement"](
                        'div',
                        { className: prefixCls + '-operation', role: 'button', 'aria-label': 'go to detail' },
                        action ? action : react["createElement"](es_icon, { type: 'right', size: 'md' })
                    );
                }
                extraProps.onClick = onClick;
            }
            var wrapCls = classnames_default()(prefixCls, className);
            return this.state.show ? react["createElement"](
                'div',
                extends_default()({ className: wrapCls }, restProps, extraProps, { role: 'alert' }),
                icon &&
                // tslint:disable-next-line:jsx-no-multiline-js
                react["createElement"](
                    'div',
                    { className: prefixCls + '-icon', 'aria-hidden': 'true' },
                    icon
                ),
                react["createElement"](
                    'div',
                    { className: prefixCls + '-content' },
                    react["createElement"](notice_bar_Marquee, extends_default()({ prefixCls: prefixCls, text: children }, marqueeProps))
                ),
                operationDom
            ) : null;
        }
    }]);

    return NoticeBar;
}(react["Component"]);

/* harmony default export */ var notice_bar = (notice_bar_NoticeBar);

notice_bar_NoticeBar.defaultProps = {
    prefixCls: 'am-notice-bar',
    mode: '',
    icon: react["createElement"](es_icon, { type: 'voice', size: 'xxs' }),
    onClick: function onClick() {}
};
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/pagination/index.js





/* tslint:disable:jsx-no-multiline-js */







var pagination_Pagination = function (_React$Component) {
    inherits_default()(Pagination, _React$Component);

    function Pagination(props) {
        classCallCheck_default()(this, Pagination);

        var _this = possibleConstructorReturn_default()(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));

        _this.state = {
            current: props.current
        };
        return _this;
    }

    createClass_default()(Pagination, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.current !== this.state.current) {
                this.setState({
                    current: nextProps.current
                });
            }
        }
    }, {
        key: 'onChange',
        value: function onChange(p) {
            this.setState({
                current: p
            });
            if (this.props.onChange) {
                this.props.onChange(p);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                className = _props.className,
                style = _props.style,
                mode = _props.mode,
                total = _props.total,
                simple = _props.simple;
            var current = this.state.current;

            var locale = getComponentLocale(this.props, this.context, 'Pagination', function () {
                return __webpack_require__("g3cW");
            });
            var prevText = locale.prevText,
                nextText = locale.nextText;

            var markup = react["createElement"](
                flex,
                null,
                react["createElement"](
                    flex.Item,
                    { className: prefixCls + '-wrap-btn ' + prefixCls + '-wrap-btn-prev' },
                    react["createElement"](
                        es_button,
                        { inline: true, disabled: current <= 1, onClick: function onClick() {
                                return _this2.onChange(current - 1);
                            } },
                        prevText
                    )
                ),
                this.props.children ? react["createElement"](
                    flex.Item,
                    null,
                    this.props.children
                ) : !simple && react["createElement"](
                    flex.Item,
                    { className: prefixCls + '-wrap', 'aria-live': 'assertive' },
                    react["createElement"](
                        'span',
                        { className: 'active' },
                        current
                    ),
                    '/',
                    react["createElement"](
                        'span',
                        null,
                        total
                    )
                ),
                react["createElement"](
                    flex.Item,
                    { className: prefixCls + '-wrap-btn ' + prefixCls + '-wrap-btn-next' },
                    react["createElement"](
                        es_button,
                        { inline: true, disabled: current >= total, onClick: function onClick() {
                                return _this2.onChange(_this2.state.current + 1);
                            } },
                        nextText
                    )
                )
            );
            if (mode === 'number') {
                markup = react["createElement"](
                    'div',
                    { className: prefixCls + '-wrap' },
                    react["createElement"](
                        'span',
                        { className: 'active' },
                        current
                    ),
                    '/',
                    react["createElement"](
                        'span',
                        null,
                        total
                    )
                );
            } else if (mode === 'pointer') {
                var arr = [];
                for (var i = 0; i < total; i++) {
                    arr.push(react["createElement"](
                        'div',
                        { key: 'dot-' + i, className: classnames_default()(prefixCls + '-wrap-dot', defineProperty_default()({}, prefixCls + '-wrap-dot-active', i + 1 === current)) },
                        react["createElement"]('span', null)
                    ));
                }
                markup = react["createElement"](
                    'div',
                    { className: prefixCls + '-wrap' },
                    arr
                );
            }
            var cls = classnames_default()(prefixCls, className);
            return react["createElement"](
                'div',
                { className: cls, style: style },
                markup
            );
        }
    }]);

    return Pagination;
}(react["Component"]);

/* harmony default export */ var pagination = (pagination_Pagination);

pagination_Pagination.defaultProps = {
    prefixCls: 'am-pagination',
    mode: 'button',
    current: 1,
    total: 0,
    simple: false,
    onChange: function onChange() {}
};
pagination_Pagination.contextTypes = {
    antLocale: prop_types["object"]
};
// EXTERNAL MODULE: ./node_modules/array-tree-filter/lib/index.js
var lib = __webpack_require__("uK0f");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./node_modules/rmc-cascader/es/Cascader.js










var Cascader_Cascader = function (_React$Component) {
    inherits_default()(Cascader, _React$Component);

    function Cascader() {
        classCallCheck_default()(this, Cascader);

        var _this = possibleConstructorReturn_default()(this, (Cascader.__proto__ || Object.getPrototypeOf(Cascader)).apply(this, arguments));

        _this.state = {
            value: _this.getValue(_this.props.data, _this.props.defaultValue || _this.props.value)
        };
        _this.onValueChange = function (value, index) {
            var children = lib_default()(_this.props.data, function (c, level) {
                return level <= index && c.value === value[level];
            });
            var data = children[index];
            var i = void 0;
            for (i = index + 1; data && data.children && data.children.length && i < _this.props.cols; i++) {
                data = data.children[0];
                value[i] = data.value;
            }
            value.length = i;
            _this.setState({ value: value });
            if (_this.props.onChange) {
                _this.props.onChange(value);
            }
        };
        return _this;
    }

    createClass_default()(Cascader, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('value' in nextProps) {
                this.setState({
                    value: this.getValue(nextProps.data, nextProps.value)
                });
            }
        }
    }, {
        key: 'getValue',
        value: function getValue(d, val) {
            var data = d || this.props.data;
            var value = val || this.props.value || this.props.defaultValue;
            if (!value || !value.length || value.indexOf(undefined) > -1) {
                value = [];
                for (var i = 0; i < this.props.cols; i++) {
                    if (data && data.length) {
                        value[i] = data[0].value;
                        data = data[0].children;
                    }
                }
            }
            return value;
        }
    }, {
        key: 'getCols',
        value: function getCols() {
            var _props = this.props,
                data = _props.data,
                cols = _props.cols,
                pickerPrefixCls = _props.pickerPrefixCls,
                disabled = _props.disabled,
                pickerItemStyle = _props.pickerItemStyle,
                indicatorStyle = _props.indicatorStyle;

            var value = this.state.value;
            var childrenTree = lib_default()(data, function (c, level) {
                return c.value === value[level];
            }).map(function (c) {
                return c.children;
            });
                        var needPad = cols - childrenTree.length;
            if (needPad > 0) {
                for (var i = 0; i < needPad; i++) {
                    childrenTree.push([]);
                }
            }
            childrenTree.length = cols - 1;
            childrenTree.unshift(data);
            return childrenTree.map(function () {
                var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                var level = arguments[1];
                return react_default.a.createElement(Picker_default.a, { key: level, prefixCls: pickerPrefixCls, style: { flex: 1 }, disabled: disabled, itemStyle: pickerItemStyle, indicatorStyle: indicatorStyle }, children.map(function (item) {
                    return react_default.a.createElement(Picker_default.a.Item, { value: item.value, key: item.value }, item.label);
                }));
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var props = this.props;
            var prefixCls = props.prefixCls,
                className = props.className,
                rootNativeProps = props.rootNativeProps,
                style = props.style;

            var cols = this.getCols();
            var multiStyle = extends_default()({ flexDirection: 'row', alignItems: 'center' }, style);
            return react_default.a.createElement(es_MultiPicker, { style: multiStyle, prefixCls: prefixCls, className: className, selectedValue: this.state.value, rootNativeProps: rootNativeProps, onValueChange: this.onValueChange, onScrollChange: props.onScrollChange }, cols);
        }
    }]);

    return Cascader;
}(react_default.a.Component);

Cascader_Cascader.defaultProps = {
    cols: 3,
    prefixCls: 'rmc-cascader',
    pickerPrefixCls: 'rmc-picker',
    data: [],
    disabled: false
};
/* harmony default export */ var es_Cascader = (Cascader_Cascader);
// CONCATENATED MODULE: ./node_modules/rmc-cascader/es/Popup.js








var Popup_PopupCascader = function (_React$Component) {
    inherits_default()(PopupCascader, _React$Component);

    function PopupCascader() {
        classCallCheck_default()(this, PopupCascader);

        var _this = possibleConstructorReturn_default()(this, (PopupCascader.__proto__ || Object.getPrototypeOf(PopupCascader)).apply(this, arguments));

        _this.onOk = function (v) {
            var _this$props = _this.props,
                onChange = _this$props.onChange,
                onOk = _this$props.onOk;

            if (onChange) {
                onChange(v);
            }
            if (onOk) {
                onOk(v);
            }
        };
        return _this;
    }

    createClass_default()(PopupCascader, [{
        key: 'render',
        value: function render() {
            return react_default.a.createElement(es_Popup, extends_default()({ picker: this.props.cascader }, this.props, { onOk: this.onOk }));
        }
    }]);

    return PopupCascader;
}(react_default.a.Component);

Popup_PopupCascader.defaultProps = {
    pickerValueProp: 'value',
    pickerValueChangeProp: 'onChange'
};
/* harmony default export */ var rmc_cascader_es_Popup = (Popup_PopupCascader);
// CONCATENATED MODULE: ./node_modules/rmc-picker/es/PickerMixin.js
function PickerMixin_extends() { PickerMixin_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return PickerMixin_extends.apply(this, arguments); }

function PickerMixin_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PickerMixin_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PickerMixin_createClass(Constructor, protoProps, staticProps) { if (protoProps) PickerMixin_defineProperties(Constructor.prototype, protoProps); if (staticProps) PickerMixin_defineProperties(Constructor, staticProps); return Constructor; }

function PickerMixin_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return PickerMixin_assertThisInitialized(self); }

function PickerMixin_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function PickerMixin_getPrototypeOf(o) { PickerMixin_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return PickerMixin_getPrototypeOf(o); }

function PickerMixin_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) PickerMixin_setPrototypeOf(subClass, superClass); }

function PickerMixin_setPrototypeOf(o, p) { PickerMixin_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return PickerMixin_setPrototypeOf(o, p); }

/* tslint:disable:no-console */

;

var PickerMixin_Item = function Item(_props) {
  return null;
};

/* harmony default export */ var PickerMixin = (function (ComposedComponent) {
  var _a;

  return _a =
  /*#__PURE__*/
  function (_React$Component) {
    PickerMixin_inherits(_a, _React$Component);

    function _a() {
      var _this;

      PickerMixin_classCallCheck(this, _a);

      _this = PickerMixin_possibleConstructorReturn(this, PickerMixin_getPrototypeOf(_a).apply(this, arguments));

      _this.select = function (value, itemHeight, scrollTo) {
        var children = react["Children"].toArray(_this.props.children);

        for (var i = 0, len = children.length; i < len; i++) {
          if (children[i].props.value === value) {
            _this.selectByIndex(i, itemHeight, scrollTo);

            return;
          }
        }

        _this.selectByIndex(0, itemHeight, scrollTo);
      };

      _this.doScrollingComplete = function (top, itemHeight, fireValueChange) {
        var children = react["Children"].toArray(_this.props.children);

        var index = _this.computeChildIndex(top, itemHeight, children.length);

        var child = children[index];

        if (child) {
          fireValueChange(child.props.value);
        } else if (console.warn) {
          console.warn('child not found', children, index);
        }
      };

      return _this;
    }

    PickerMixin_createClass(_a, [{
      key: "selectByIndex",
      value: function selectByIndex(index, itemHeight, zscrollTo) {
        if (index < 0 || index >= react["Children"].count(this.props.children) || !itemHeight) {
          return;
        }

        zscrollTo(index * itemHeight);
      }
    }, {
      key: "computeChildIndex",
      value: function computeChildIndex(top, itemHeight, childrenLength) {
        var index = Math.round(top / itemHeight);
        return Math.min(index, childrenLength - 1);
      }
    }, {
      key: "render",
      value: function render() {
        return react["createElement"](ComposedComponent, PickerMixin_extends({}, this.props, {
          doScrollingComplete: this.doScrollingComplete,
          computeChildIndex: this.computeChildIndex,
          select: this.select
        }));
      }
    }]);

    return _a;
  }(react["Component"]), _a.Item = PickerMixin_Item, _a;
});
// CONCATENATED MODULE: ./node_modules/rmc-picker/es/Picker.js
function Picker_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Picker_extends() { Picker_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Picker_extends.apply(this, arguments); }

function Picker_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Picker_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Picker_createClass(Constructor, protoProps, staticProps) { if (protoProps) Picker_defineProperties(Constructor.prototype, protoProps); if (staticProps) Picker_defineProperties(Constructor, staticProps); return Constructor; }

function Picker_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return Picker_assertThisInitialized(self); }

function Picker_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Picker_getPrototypeOf(o) { Picker_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Picker_getPrototypeOf(o); }

function Picker_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Picker_setPrototypeOf(subClass, superClass); }

function Picker_setPrototypeOf(o, p) { Picker_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Picker_setPrototypeOf(o, p); }




;

var Picker_Picker =
/*#__PURE__*/
function (_React$Component) {
  Picker_inherits(Picker, _React$Component);

  function Picker(props) {
    var _this;

    Picker_classCallCheck(this, Picker);

    _this = Picker_possibleConstructorReturn(this, Picker_getPrototypeOf(Picker).call(this, props));

    _this.scrollHanders = function () {
      var scrollY = -1;
      var lastY = 0;
      var startY = 0;
      var scrollDisabled = false;
      var isMoving = false;

      var setTransform = function setTransform(nodeStyle, value) {
        nodeStyle.transform = value;
        nodeStyle.webkitTransform = value;
      };

      var setTransition = function setTransition(nodeStyle, value) {
        nodeStyle.transition = value;
        nodeStyle.webkitTransition = value;
      };

      var scrollTo = function scrollTo(_x, y) {
        var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : .3;

        if (scrollY !== y) {
          scrollY = y;

          if (time && !_this.props.noAnimate) {
            setTransition(_this.contentRef.style, "cubic-bezier(0,0,0.2,1.15) ".concat(time, "s"));
          }

          setTransform(_this.contentRef.style, "translate3d(0,".concat(-y, "px,0)"));
          setTimeout(function () {
            _this.scrollingComplete();

            if (_this.contentRef) {
              setTransition(_this.contentRef.style, '');
            }
          }, +time * 1000);
        }
      };

      var Velocity = function () {
        var minInterval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;
        var maxInterval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
        var _time = 0;
        var _y = 0;
        var _velocity = 0;
        var recorder = {
          record: function record(y) {
            var now = +new Date();
            _velocity = (y - _y) / (now - _time);

            if (now - _time >= minInterval) {
              _velocity = now - _time <= maxInterval ? _velocity : 0;
              _y = y;
              _time = now;
            }
          },
          getVelocity: function getVelocity(y) {
            if (y !== _y) {
              recorder.record(y);
            }

            return _velocity;
          }
        };
        return recorder;
      }();

      var onFinish = function onFinish() {
        isMoving = false;
        var targetY = scrollY;
        var height = (_this.props.children.length - 1) * _this.itemHeight;
        var time = .3;
        var velocity = Velocity.getVelocity(targetY) * 4;

        if (velocity) {
          targetY = velocity * 40 + targetY;
          time = Math.abs(velocity) * .1;
        }

        if (targetY % _this.itemHeight !== 0) {
          targetY = Math.round(targetY / _this.itemHeight) * _this.itemHeight;
        }

        if (targetY < 0) {
          targetY = 0;
        } else if (targetY > height) {
          targetY = height;
        }

        scrollTo(0, targetY, time < .3 ? .3 : time);

        _this.onScrollChange();
      };

      var onStart = function onStart(y) {
        if (scrollDisabled) {
          return;
        }

        isMoving = true;
        startY = y;
        lastY = scrollY;
      };

      var onMove = function onMove(y) {
        if (scrollDisabled || !isMoving) {
          return;
        }

        scrollY = lastY - y + startY;
        Velocity.record(scrollY);

        _this.onScrollChange();

        setTransform(_this.contentRef.style, "translate3d(0,".concat(-scrollY, "px,0)"));
      };

      return {
        touchstart: function touchstart(evt) {
          return onStart(evt.touches[0].pageY);
        },
        mousedown: function mousedown(evt) {
          return onStart(evt.pageY);
        },
        touchmove: function touchmove(evt) {
          evt.preventDefault();
          onMove(evt.touches[0].pageY);
        },
        mousemove: function mousemove(evt) {
          evt.preventDefault();
          onMove(evt.pageY);
        },
        touchend: function touchend() {
          return onFinish();
        },
        touchcancel: function touchcancel() {
          return onFinish();
        },
        mouseup: function mouseup() {
          return onFinish();
        },
        getValue: function getValue() {
          return scrollY;
        },
        scrollTo: scrollTo,
        setDisabled: function setDisabled() {
          var disabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          scrollDisabled = disabled;
        }
      };
    }();

    _this.scrollTo = function (top) {
      _this.scrollHanders.scrollTo(0, top);
    };

    _this.scrollToWithoutAnimation = function (top) {
      _this.scrollHanders.scrollTo(0, top, 0);
    };

    _this.fireValueChange = function (selectedValue) {
      if (selectedValue !== _this.state.selectedValue) {
        if (!('selectedValue' in _this.props)) {
          _this.setState({
            selectedValue: selectedValue
          });
        }

        if (_this.props.onValueChange) {
          _this.props.onValueChange(selectedValue);
        }
      }
    };

    _this.onScrollChange = function () {
      var top = _this.scrollHanders.getValue();

      if (top >= 0) {
        var children = react["Children"].toArray(_this.props.children);

        var index = _this.props.computeChildIndex(top, _this.itemHeight, children.length);

        if (_this.scrollValue !== index) {
          _this.scrollValue = index;
          var child = children[index];

          if (child && _this.props.onScrollChange) {
            _this.props.onScrollChange(child.props.value);
          } else if (!child && console.warn) {
            console.warn('child not found', children, index);
          }
        }
      }
    };

    _this.scrollingComplete = function () {
      var top = _this.scrollHanders.getValue();

      if (top >= 0) {
        _this.props.doScrollingComplete(top, _this.itemHeight, _this.fireValueChange);
      }
    };

    var selectedValueState;
    var _this$props = _this.props,
        selectedValue = _this$props.selectedValue,
        defaultSelectedValue = _this$props.defaultSelectedValue;

    if (selectedValue !== undefined) {
      selectedValueState = selectedValue;
    } else if (defaultSelectedValue !== undefined) {
      selectedValueState = defaultSelectedValue;
    } else {
      var children = react["Children"].toArray(_this.props.children);
      selectedValueState = children && children[0] && children[0].props.value;
    }

    _this.state = {
      selectedValue: selectedValueState
    };
    return _this;
  }

  Picker_createClass(Picker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var contentRef = this.contentRef,
          indicatorRef = this.indicatorRef,
          maskRef = this.maskRef,
          rootRef = this.rootRef;
      var rootHeight = rootRef.getBoundingClientRect().height; // https://github.com/react-component/m-picker/issues/18

      var itemHeight = this.itemHeight = indicatorRef.getBoundingClientRect().height;
      var num = Math.floor(rootHeight / itemHeight);

      if (num % 2 === 0) {
        num--;
      }

      num--;
      num /= 2;
      contentRef.style.padding = "".concat(itemHeight * num, "px 0");
      indicatorRef.style.top = "".concat(itemHeight * num, "px");
      maskRef.style.backgroundSize = "100% ".concat(itemHeight * num, "px");
      this.scrollHanders.setDisabled(this.props.disabled);
      this.props.select(this.state.selectedValue, this.itemHeight, this.scrollTo);
      var passiveSupported = this.passiveSupported();
      var willPreventDefault = passiveSupported ? {
        passive: false
      } : false;
      var willNotPreventDefault = passiveSupported ? {
        passive: true
      } : false;
      Object.keys(this.scrollHanders).forEach(function (key) {
        if (key.indexOf('touch') === 0 || key.indexOf('mouse') === 0) {
          var pd = key.indexOf('move') >= 0 ? willPreventDefault : willNotPreventDefault;
          rootRef.addEventListener(key, _this2.scrollHanders[key], pd);
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      Object.keys(this.scrollHanders).forEach(function (key) {
        if (key.indexOf('touch') === 0 || key.indexOf('mouse') === 0) {
          _this3.rootRef.removeEventListener(key, _this3.scrollHanders[key]);
        }
      });
    }
  }, {
    key: "passiveSupported",
    value: function passiveSupported() {
      var passiveSupported = false;

      try {
        var options = Object.defineProperty({}, 'passive', {
          get: function get() {
            passiveSupported = true;
          }
        });
        window.addEventListener('test', null, options);
      } catch (err) {}

      return passiveSupported;
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this4 = this;

      if ('selectedValue' in nextProps) {
        if (this.state.selectedValue !== nextProps.selectedValue) {
          this.setState({
            selectedValue: nextProps.selectedValue
          }, function () {
            _this4.props.select(nextProps.selectedValue, _this4.itemHeight, nextProps.noAnimate ? _this4.scrollToWithoutAnimation : _this4.scrollTo);
          });
        }
      }

      this.scrollHanders.setDisabled(nextProps.disabled);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.state.selectedValue !== nextState.selectedValue || this.props.children !== nextProps.children;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.props.select(this.state.selectedValue, this.itemHeight, this.scrollToWithoutAnimation);
    }
  }, {
    key: "getValue",
    value: function getValue() {
      if ('selectedValue' in this.props) {
        return this.props.selectedValue;
      }

      var children = react["Children"].toArray(this.props.children);
      return children && children[0] && children[0].props.value;
    }
  }, {
    key: "render",
    value: function render() {
      var _pickerCls,
          _this5 = this;

      var props = this.props;
      var prefixCls = props.prefixCls,
          itemStyle = props.itemStyle,
          indicatorStyle = props.indicatorStyle,
          _props$indicatorClass = props.indicatorClassName,
          indicatorClassName = _props$indicatorClass === void 0 ? '' : _props$indicatorClass,
          children = props.children;
      var selectedValue = this.state.selectedValue;
      var itemClassName = "".concat(prefixCls, "-item");
      var selectedItemClassName = "".concat(itemClassName, " ").concat(prefixCls, "-item-selected");

      var map = function map(item) {
        var _item$props = item.props,
            _item$props$className = _item$props.className,
            className = _item$props$className === void 0 ? '' : _item$props$className,
            style = _item$props.style,
            value = _item$props.value;
        return react["createElement"]("div", {
          style: Picker_extends({}, itemStyle, style),
          className: "".concat(selectedValue === value ? selectedItemClassName : itemClassName, " ").concat(className),
          key: value
        }, item.children || item.props.children);
      }; // compatibility for preact


      var items = react["Children"] ? react["Children"].map(children, map) : [].concat(children).map(map);
      var pickerCls = (_pickerCls = {}, Picker_defineProperty(_pickerCls, props.className, !!props.className), Picker_defineProperty(_pickerCls, prefixCls, true), _pickerCls);
      return react["createElement"]("div", {
        className: classnames_default()(pickerCls),
        ref: function ref(el) {
          return _this5.rootRef = el;
        },
        style: this.props.style
      }, react["createElement"]("div", {
        className: "".concat(prefixCls, "-mask"),
        ref: function ref(el) {
          return _this5.maskRef = el;
        }
      }), react["createElement"]("div", {
        className: "".concat(prefixCls, "-indicator ").concat(indicatorClassName),
        ref: function ref(el) {
          return _this5.indicatorRef = el;
        },
        style: indicatorStyle
      }), react["createElement"]("div", {
        className: "".concat(prefixCls, "-content"),
        ref: function ref(el) {
          return _this5.contentRef = el;
        }
      }, items));
    }
  }]);

  return Picker;
}(react["Component"]);

Picker_Picker.defaultProps = {
  prefixCls: 'rmc-picker'
};
/* harmony default export */ var es_Picker = (PickerMixin(Picker_Picker));
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/picker/AbstractPicker.js





var AbstractPicker_rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
/* tslint:disable:jsx-no-multiline-js */







function getDefaultProps() {
    var defaultFormat = function defaultFormat(values) {
        // label is JSX.Element or other
        if (values.length > 0 && typeof values[0] !== 'string') {
            return values;
        }
        return values.join(',');
    };
    return {
        triggerType: 'onClick',
        prefixCls: 'am-picker',
        pickerPrefixCls: 'am-picker-col',
        popupPrefixCls: 'am-picker-popup',
        format: defaultFormat,
        cols: 3,
        cascade: true,
        title: ''
    };
}

var AbstractPicker_AbstractPicker = function (_React$Component) {
    inherits_default()(AbstractPicker, _React$Component);

    function AbstractPicker() {
        classCallCheck_default()(this, AbstractPicker);

        var _this = possibleConstructorReturn_default()(this, (AbstractPicker.__proto__ || Object.getPrototypeOf(AbstractPicker)).apply(this, arguments));

        _this.getSel = function () {
            var value = _this.props.value || [];
            var treeChildren = void 0;
            var data = _this.props.data;

            if (_this.props.cascade) {
                treeChildren = lib_default()(data, function (c, level) {
                    return c.value === value[level];
                });
            } else {
                treeChildren = value.map(function (v, i) {
                    return data[i].filter(function (d) {
                        return d.value === v;
                    })[0];
                });
            }
            return _this.props.format && _this.props.format(treeChildren.map(function (v) {
                return v.label;
            }));
        };
        _this.getPickerCol = function () {
            var _this$props = _this.props,
                data = _this$props.data,
                pickerPrefixCls = _this$props.pickerPrefixCls,
                itemStyle = _this$props.itemStyle,
                indicatorStyle = _this$props.indicatorStyle;

            return data.map(function (col, index) {
                return react["createElement"](
                    es_Picker,
                    { key: index, prefixCls: pickerPrefixCls, style: { flex: 1 }, itemStyle: itemStyle, indicatorStyle: indicatorStyle },
                    col.map(function (item) {
                        return react["createElement"](
                            es_Picker.Item,
                            { key: item.value, value: item.value },
                            item.label
                        );
                    })
                );
            });
        };
        _this.onOk = function (v) {
            if (_this.scrollValue !== undefined) {
                v = _this.scrollValue;
            }
            if (_this.props.onChange) {
                _this.props.onChange(v);
            }
            if (_this.props.onOk) {
                _this.props.onOk(v);
            }
        };
        _this.setScrollValue = function (v) {
            _this.scrollValue = v;
        };
        _this.setCasecadeScrollValue = function (v) {
            // 级联情况下保证数据正确性，滚动过程中只有当最后一级变化时才变更数据
            if (v && _this.scrollValue) {
                var length = _this.scrollValue.length;
                if (length === v.length && _this.scrollValue[length - 1] === v[length - 1]) {
                    return;
                }
            }
            _this.setScrollValue(v);
        };
        _this.fixOnOk = function (cascader) {
            if (cascader && cascader.onOk !== _this.onOk) {
                cascader.onOk = _this.onOk;
                cascader.forceUpdate();
            }
        };
        _this.onPickerChange = function (v) {
            _this.setScrollValue(v);
            if (_this.props.onPickerChange) {
                _this.props.onPickerChange(v);
            }
        };
        _this.onVisibleChange = function (visible) {
            _this.setScrollValue(undefined);
            if (_this.props.onVisibleChange) {
                _this.props.onVisibleChange(visible);
            }
        };
        return _this;
    }

    createClass_default()(AbstractPicker, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                children = _a.children,
                _a$value = _a.value,
                value = _a$value === undefined ? [] : _a$value,
                popupPrefixCls = _a.popupPrefixCls,
                itemStyle = _a.itemStyle,
                indicatorStyle = _a.indicatorStyle,
                okText = _a.okText,
                dismissText = _a.dismissText,
                extra = _a.extra,
                cascade = _a.cascade,
                prefixCls = _a.prefixCls,
                pickerPrefixCls = _a.pickerPrefixCls,
                data = _a.data,
                cols = _a.cols,
                onOk = _a.onOk,
                restProps = AbstractPicker_rest(_a, ["children", "value", "popupPrefixCls", "itemStyle", "indicatorStyle", "okText", "dismissText", "extra", "cascade", "prefixCls", "pickerPrefixCls", "data", "cols", "onOk"]);
            // tslint:disable-next-line:variable-name
            var _locale = getComponentLocale(this.props, this.context, 'Picker', function () {
                return __webpack_require__("zVbs");
            });
            var cascader = void 0;
            var popupMoreProps = {};
            if (cascade) {
                cascader = react["createElement"](es_Cascader, { prefixCls: prefixCls, pickerPrefixCls: pickerPrefixCls, data: data, cols: cols, onChange: this.onPickerChange, onScrollChange: this.setCasecadeScrollValue, pickerItemStyle: itemStyle, indicatorStyle: indicatorStyle });
            } else {
                cascader = react["createElement"](
                    es_MultiPicker,
                    { style: { flexDirection: 'row', alignItems: 'center' }, prefixCls: prefixCls, onScrollChange: this.setScrollValue },
                    this.getPickerCol()
                );
                popupMoreProps = {
                    pickerValueProp: 'selectedValue',
                    pickerValueChangeProp: 'onValueChange'
                };
            }
            return react["createElement"](
                rmc_cascader_es_Popup,
                extends_default()({ cascader: cascader }, this.popupProps, restProps, { prefixCls: popupPrefixCls, value: value, dismissText: dismissText || _locale.dismissText, okText: okText || _locale.okText }, popupMoreProps, { ref: this.fixOnOk, onVisibleChange: this.onVisibleChange }),
                children && typeof children !== 'string' && react["isValidElement"](children) && react["cloneElement"](children, {
                    extra: this.getSel() || extra || _locale.extra
                })
            );
        }
    }]);

    return AbstractPicker;
}(react["Component"]);

/* harmony default export */ var picker_AbstractPicker = (AbstractPicker_AbstractPicker);
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/picker/popupProps.js
/* harmony default export */ var popupProps = ({
    WrapComponent: 'div',
    transitionName: 'am-slide-up',
    maskTransitionName: 'am-fade'
});
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/picker/index.js







// TODO:
// fix error TS4026:Public static property 'defaultProps' of exported class has or is using name 'React.ReactElement'
// fix error TS6133: 'React' is declared but its value is never read.
var nonsense = react["createElement"]('div', null);

var picker_Picker = function (_AbstractPicker) {
    inherits_default()(Picker, _AbstractPicker);

    function Picker() {
        classCallCheck_default()(this, Picker);

        var _this = possibleConstructorReturn_default()(this, (Picker.__proto__ || Object.getPrototypeOf(Picker)).apply(this, arguments));

        _this.popupProps = popupProps;
        return _this;
    }

    return Picker;
}(picker_AbstractPicker);

/* harmony default export */ var es_picker = (picker_Picker);

picker_Picker.defaultProps = getDefaultProps();
picker_Picker.contextTypes = {
    antLocale: prop_types["object"]
};
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/picker-view/PickerView.js




/* tslint:disable:jsx-no-multiline-js */




function PickerView_getDefaultProps() {
    return {
        prefixCls: 'am-picker',
        pickerPrefixCls: 'am-picker-col',
        cols: 3,
        cascade: true,
        value: [],
        onChange: function onChange() {}
    };
}

var PickerView_PickerView = function (_React$Component) {
    inherits_default()(PickerView, _React$Component);

    function PickerView() {
        classCallCheck_default()(this, PickerView);

        var _this = possibleConstructorReturn_default()(this, (PickerView.__proto__ || Object.getPrototypeOf(PickerView)).apply(this, arguments));

        _this.isMultiPicker = function () {
            if (!_this.props.data) {
                return false;
            }
            return Array.isArray(_this.props.data[0]);
        };
        _this.getCol = function () {
            var _this$props = _this.props,
                data = _this$props.data,
                pickerPrefixCls = _this$props.pickerPrefixCls,
                indicatorStyle = _this$props.indicatorStyle,
                itemStyle = _this$props.itemStyle;

            var formattedData = _this.isMultiPicker() ? data : [data];
            return formattedData.map(function (col, index) {
                return react["createElement"](
                    es_Picker,
                    { key: index, prefixCls: pickerPrefixCls, style: { flex: 1 }, indicatorStyle: indicatorStyle, itemStyle: itemStyle },
                    col.map(function (item) {
                        return react["createElement"](
                            es_Picker.Item,
                            { key: item.value, value: item.value },
                            item.label
                        );
                    })
                );
            });
        };
        return _this;
    }

    createClass_default()(PickerView, [{
        key: 'render',
        value: function render() {
            // tslint:disable-next-line:no-this-assignment
            var props = this.props;

            var picker = void 0;
            if (props.cascade) {
                picker = react["createElement"](es_Cascader, { prefixCls: props.prefixCls, pickerPrefixCls: props.pickerPrefixCls, data: props.data, value: props.value, onChange: props.onChange, onScrollChange: props.onScrollChange, cols: props.cols, indicatorStyle: props.indicatorStyle, pickerItemStyle: props.itemStyle });
            } else {
                picker = react["createElement"](
                    es_MultiPicker,
                    { prefixCls: props.prefixCls, selectedValue: props.value, onValueChange: props.onChange, onScrollChange: props.onScrollChange, style: { flexDirection: 'row' } },
                    this.getCol()
                );
            }
            return picker;
        }
    }]);

    return PickerView;
}(react["Component"]);

/* harmony default export */ var picker_view_PickerView = (PickerView_PickerView);

PickerView_PickerView.defaultProps = PickerView_getDefaultProps();
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/picker-view/index.js

/* harmony default export */ var picker_view = (picker_view_PickerView);
// CONCATENATED MODULE: ./node_modules/rc-util/es/Dom/contains.js
function contains(root, n) {
  var node = n;

  while (node) {
    if (node === root) {
      return true;
    }

    node = node.parentNode;
  }

  return false;
}
// EXTERNAL MODULE: ./node_modules/rc-util/lib/Dom/addEventListener.js
var Dom_addEventListener = __webpack_require__("rsGM");
var addEventListener_default = /*#__PURE__*/__webpack_require__.n(Dom_addEventListener);

// CONCATENATED MODULE: ./node_modules/dom-align/dist-web/index.js
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function dist_web_defineProperty(obj, key, value) {
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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        dist_web_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var vendorPrefix;
var jsCssMap = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  // IE did it wrong again ...
  ms: '-ms-',
  O: '-o-'
};

function getVendorPrefix() {
  if (vendorPrefix !== undefined) {
    return vendorPrefix;
  }

  vendorPrefix = '';
  var style = document.createElement('p').style;
  var testProp = 'Transform';

  for (var key in jsCssMap) {
    if (key + testProp in style) {
      vendorPrefix = key;
    }
  }

  return vendorPrefix;
}

function getTransitionName() {
  return getVendorPrefix() ? "".concat(getVendorPrefix(), "TransitionProperty") : 'transitionProperty';
}

function getTransformName() {
  return getVendorPrefix() ? "".concat(getVendorPrefix(), "Transform") : 'transform';
}
function setTransitionProperty(node, value) {
  var name = getTransitionName();

  if (name) {
    node.style[name] = value;

    if (name !== 'transitionProperty') {
      node.style.transitionProperty = value;
    }
  }
}

function dist_web_setTransform(node, value) {
  var name = getTransformName();

  if (name) {
    node.style[name] = value;

    if (name !== 'transform') {
      node.style.transform = value;
    }
  }
}

function getTransitionProperty(node) {
  return node.style.transitionProperty || node.style[getTransitionName()];
}
function getTransformXY(node) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());

  if (transform && transform !== 'none') {
    var matrix = transform.replace(/[^0-9\-.,]/g, '').split(',');
    return {
      x: parseFloat(matrix[12] || matrix[4], 0),
      y: parseFloat(matrix[13] || matrix[5], 0)
    };
  }

  return {
    x: 0,
    y: 0
  };
}
var matrix2d = /matrix\((.*)\)/;
var matrix3d = /matrix3d\((.*)\)/;
function setTransformXY(node, xy) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());

  if (transform && transform !== 'none') {
    var arr;
    var match2d = transform.match(matrix2d);

    if (match2d) {
      match2d = match2d[1];
      arr = match2d.split(',').map(function (item) {
        return parseFloat(item, 10);
      });
      arr[4] = xy.x;
      arr[5] = xy.y;
      dist_web_setTransform(node, "matrix(".concat(arr.join(','), ")"));
    } else {
      var match3d = transform.match(matrix3d)[1];
      arr = match3d.split(',').map(function (item) {
        return parseFloat(item, 10);
      });
      arr[12] = xy.x;
      arr[13] = xy.y;
      dist_web_setTransform(node, "matrix3d(".concat(arr.join(','), ")"));
    }
  } else {
    dist_web_setTransform(node, "translateX(".concat(xy.x, "px) translateY(").concat(xy.y, "px) translateZ(0)"));
  }
}

var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
var getComputedStyleX; // https://stackoverflow.com/a/3485654/3040605

function forceRelayout(elem) {
  var originalStyle = elem.style.display;
  elem.style.display = 'none';
  elem.offsetHeight; // eslint-disable-line

  elem.style.display = originalStyle;
}

function css(el, name, v) {
  var value = v;

  if (_typeof(name) === 'object') {
    for (var i in name) {
      if (name.hasOwnProperty(i)) {
        css(el, i, name[i]);
      }
    }

    return undefined;
  }

  if (typeof value !== 'undefined') {
    if (typeof value === 'number') {
      value = "".concat(value, "px");
    }

    el.style[name] = value;
    return undefined;
  }

  return getComputedStyleX(el, name);
}

function getClientPosition(elem) {
  var box;
  var x;
  var y;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement; // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式

  box = elem.getBoundingClientRect(); // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

  x = box.left;
  y = box.top; // In IE, most of the time, 2 extra pixels are added to the top and left
  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
  // IE6 standards mode, this border can be overridden by setting the
  // document element's border to zero -- thus, we cannot rely on the
  // offset always being 2 pixels.
  // In quirks mode, the offset can be determined by querying the body's
  // clientLeft/clientTop, but in standards mode, it is found by querying
  // the document element's clientLeft/clientTop.  Since we already called
  // getClientBoundingRect we have already forced a reflow, so it is not
  // too expensive just to query them all.
  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
  // 窗口边框标准是设 documentElement ,quirks 时设置 body
  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
  // 标准 ie 下 docElem.clientTop 就是 border-top
  // ie7 html 即窗口边框改变不了。永远为 2
  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;
  return {
    left: x,
    top: y
  };
}

function getScroll(w, top) {
  var ret = w["page".concat(top ? 'Y' : 'X', "Offset")];
  var method = "scroll".concat(top ? 'Top' : 'Left');

  if (typeof ret !== 'number') {
    var d = w.document; // ie6,7,8 standard mode

    ret = d.documentElement[method];

    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method];
    }
  }

  return ret;
}

function getScrollLeft(w) {
  return getScroll(w);
}

function getScrollTop(w) {
  return getScroll(w, true);
}

function dist_web_getOffset(el) {
  var pos = getClientPosition(el);
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScrollLeft(w);
  pos.top += getScrollTop(w);
  return pos;
}
/**
 * A crude way of determining if an object is a window
 * @member util
 */


function isWindow(obj) {
  // must use == for ie8

  /* eslint eqeqeq:0 */
  return obj !== null && obj !== undefined && obj == obj.window;
}

function getDocument(node) {
  if (isWindow(node)) {
    return node.document;
  }

  if (node.nodeType === 9) {
    return node;
  }

  return node.ownerDocument;
}

function _getComputedStyle(elem, name, cs) {
  var computedStyle = cs;
  var val = '';
  var d = getDocument(elem);
  computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null); // https://github.com/kissyteam/kissy/issues/61

  if (computedStyle) {
    val = computedStyle.getPropertyValue(name) || computedStyle[name];
  }

  return val;
}

var _RE_NUM_NO_PX = new RegExp("^(".concat(RE_NUM, ")(?!px)[a-z%]+$"), 'i');

var RE_POS = /^(top|right|bottom|left)$/;
var CURRENT_STYLE = 'currentStyle';
var RUNTIME_STYLE = 'runtimeStyle';
var LEFT = 'left';
var PX = 'px';

function _getComputedStyleIE(elem, name) {
  // currentStyle maybe null
  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name]; // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
  // 在 ie 下不对，需要直接用 offset 方式
  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了
  // From the awesome hack by Dean Edwards
  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
  // If we're not dealing with a regular pixel number
  // but a number that has a weird ending, we need to convert it to pixels
  // exclude left right for relativity

  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
    // Remember the original values
    var style = elem.style;
    var left = style[LEFT];
    var rsLeft = elem[RUNTIME_STYLE][LEFT]; // prevent flashing of content

    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT]; // Put in the new values to get a computed value out

    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
    ret = style.pixelLeft + PX; // Revert the changed values

    style[LEFT] = left;
    elem[RUNTIME_STYLE][LEFT] = rsLeft;
  }

  return ret === '' ? 'auto' : ret;
}

if (typeof window !== 'undefined') {
  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
}

function getOffsetDirection(dir, option) {
  if (dir === 'left') {
    return option.useCssRight ? 'right' : dir;
  }

  return option.useCssBottom ? 'bottom' : dir;
}

function oppositeOffsetDirection(dir) {
  if (dir === 'left') {
    return 'right';
  } else if (dir === 'right') {
    return 'left';
  } else if (dir === 'top') {
    return 'bottom';
  } else if (dir === 'bottom') {
    return 'top';
  }
} // 设置 elem 相对 elem.ownerDocument 的坐标


function setLeftTop(elem, offset, option) {
  // set position first, in-case top/left are set even on static elem
  if (css(elem, 'position') === 'static') {
    elem.style.position = 'relative';
  }

  var presetH = -999;
  var presetV = -999;
  var horizontalProperty = getOffsetDirection('left', option);
  var verticalProperty = getOffsetDirection('top', option);
  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);

  if (horizontalProperty !== 'left') {
    presetH = 999;
  }

  if (verticalProperty !== 'top') {
    presetV = 999;
  }

  var originalTransition = '';
  var originalOffset = dist_web_getOffset(elem);

  if ('left' in offset || 'top' in offset) {
    originalTransition = getTransitionProperty(elem) || '';
    setTransitionProperty(elem, 'none');
  }

  if ('left' in offset) {
    elem.style[oppositeHorizontalProperty] = '';
    elem.style[horizontalProperty] = "".concat(presetH, "px");
  }

  if ('top' in offset) {
    elem.style[oppositeVerticalProperty] = '';
    elem.style[verticalProperty] = "".concat(presetV, "px");
  } // force relayout


  forceRelayout(elem);
  var old = dist_web_getOffset(elem);
  var originalStyle = {};

  for (var key in offset) {
    if (offset.hasOwnProperty(key)) {
      var dir = getOffsetDirection(key, option);
      var preset = key === 'left' ? presetH : presetV;
      var off = originalOffset[key] - old[key];

      if (dir === key) {
        originalStyle[dir] = preset + off;
      } else {
        originalStyle[dir] = preset - off;
      }
    }
  }

  css(elem, originalStyle); // force relayout

  forceRelayout(elem);

  if ('left' in offset || 'top' in offset) {
    setTransitionProperty(elem, originalTransition);
  }

  var ret = {};

  for (var _key in offset) {
    if (offset.hasOwnProperty(_key)) {
      var _dir = getOffsetDirection(_key, option);

      var _off = offset[_key] - originalOffset[_key];

      if (_key === _dir) {
        ret[_dir] = originalStyle[_dir] + _off;
      } else {
        ret[_dir] = originalStyle[_dir] - _off;
      }
    }
  }

  css(elem, ret);
}

function setTransform$1(elem, offset) {
  var originalOffset = dist_web_getOffset(elem);
  var originalXY = getTransformXY(elem);
  var resultXY = {
    x: originalXY.x,
    y: originalXY.y
  };

  if ('left' in offset) {
    resultXY.x = originalXY.x + offset.left - originalOffset.left;
  }

  if ('top' in offset) {
    resultXY.y = originalXY.y + offset.top - originalOffset.top;
  }

  setTransformXY(elem, resultXY);
}

function setOffset(elem, offset, option) {
  if (option.ignoreShake) {
    var oriOffset = dist_web_getOffset(elem);
    var oLeft = oriOffset.left.toFixed(0);
    var oTop = oriOffset.top.toFixed(0);
    var tLeft = offset.left.toFixed(0);
    var tTop = offset.top.toFixed(0);

    if (oLeft === tLeft && oTop === tTop) {
      return;
    }
  }

  if (option.useCssRight || option.useCssBottom) {
    setLeftTop(elem, offset, option);
  } else if (option.useCssTransform && getTransformName() in document.body.style) {
    setTransform$1(elem, offset);
  } else {
    setLeftTop(elem, offset, option);
  }
}

function each(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}

function isBorderBoxFn(elem) {
  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
}

var BOX_MODELS = ['margin', 'border', 'padding'];
var CONTENT_INDEX = -1;
var PADDING_INDEX = 2;
var BORDER_INDEX = 1;
var MARGIN_INDEX = 0;

function swap(elem, options, callback) {
  var old = {};
  var style = elem.style;
  var name; // Remember the old values, and insert the new ones

  for (name in options) {
    if (options.hasOwnProperty(name)) {
      old[name] = style[name];
      style[name] = options[name];
    }
  }

  callback.call(elem); // Revert the old values

  for (name in options) {
    if (options.hasOwnProperty(name)) {
      style[name] = old[name];
    }
  }
}

function getPBMWidth(elem, props, which) {
  var value = 0;
  var prop;
  var j;
  var i;

  for (j = 0; j < props.length; j++) {
    prop = props[j];

    if (prop) {
      for (i = 0; i < which.length; i++) {
        var cssProp = void 0;

        if (prop === 'border') {
          cssProp = "".concat(prop).concat(which[i], "Width");
        } else {
          cssProp = prop + which[i];
        }

        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
      }
    }
  }

  return value;
}

var domUtils = {
  getParent: function getParent(element) {
    var parent = element;

    do {
      if (parent.nodeType === 11 && parent.host) {
        parent = parent.host;
      } else {
        parent = parent.parentNode;
      }
    } while (parent && parent.nodeType !== 1 && parent.nodeType !== 9);

    return parent;
  }
};
each(['Width', 'Height'], function (name) {
  domUtils["doc".concat(name)] = function (refWin) {
    var d = refWin.document;
    return Math.max( // firefox chrome documentElement.scrollHeight< body.scrollHeight
    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
    d.documentElement["scroll".concat(name)], // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
    d.body["scroll".concat(name)], domUtils["viewport".concat(name)](d));
  };

  domUtils["viewport".concat(name)] = function (win) {
    // pc browser includes scrollbar in window.innerWidth
    var prop = "client".concat(name);
    var doc = win.document;
    var body = doc.body;
    var documentElement = doc.documentElement;
    var documentElementProp = documentElement[prop]; // 标准模式取 documentElement
    // backcompat 取 body

    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
  };
});
/*
 得到元素的大小信息
 @param elem
 @param name
 @param {String} [extra]  'padding' : (css width) + padding
 'border' : (css width) + padding + border
 'margin' : (css width) + padding + border + margin
 */

function getWH(elem, name, ex) {
  var extra = ex;

  if (isWindow(elem)) {
    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
  } else if (elem.nodeType === 9) {
    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
  }

  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
  var borderBoxValue = name === 'width' ? elem.getBoundingClientRect().width : elem.getBoundingClientRect().height;
  var computedStyle = getComputedStyleX(elem);
  var isBorderBox = isBorderBoxFn(elem);
  var cssBoxValue = 0;

  if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
    borderBoxValue = undefined; // Fall back to computed then un computed css if necessary

    cssBoxValue = getComputedStyleX(elem, name);

    if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) {
      cssBoxValue = elem.style[name] || 0;
    } // Normalize '', auto, and prepare for extra


    cssBoxValue = parseFloat(cssBoxValue) || 0;
  }

  if (extra === undefined) {
    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
  }

  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
  var val = borderBoxValue || cssBoxValue;

  if (extra === CONTENT_INDEX) {
    if (borderBoxValueOrIsBorderBox) {
      return val - getPBMWidth(elem, ['border', 'padding'], which);
    }

    return cssBoxValue;
  } else if (borderBoxValueOrIsBorderBox) {
    if (extra === BORDER_INDEX) {
      return val;
    }

    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which) : getPBMWidth(elem, ['margin'], which));
  }

  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which);
}

var cssShow = {
  position: 'absolute',
  visibility: 'hidden',
  display: 'block'
}; // fix #119 : https://github.com/kissyteam/kissy/issues/119

function getWHIgnoreDisplay() {
  for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
    args[_key2] = arguments[_key2];
  }

  var val;
  var elem = args[0]; // in case elem is window
  // elem.offsetWidth === undefined

  if (elem.offsetWidth !== 0) {
    val = getWH.apply(undefined, args);
  } else {
    swap(elem, cssShow, function () {
      val = getWH.apply(undefined, args);
    });
  }

  return val;
}

each(['width', 'height'], function (name) {
  var first = name.charAt(0).toUpperCase() + name.slice(1);

  domUtils["outer".concat(first)] = function (el, includeMargin) {
    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
  };

  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

  domUtils[name] = function (elem, v) {
    var val = v;

    if (val !== undefined) {
      if (elem) {
        var computedStyle = getComputedStyleX(elem);
        var isBorderBox = isBorderBoxFn(elem);

        if (isBorderBox) {
          val += getPBMWidth(elem, ['padding', 'border'], which);
        }

        return css(elem, name, val);
      }

      return undefined;
    }

    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
  };
});

function mix(to, from) {
  for (var i in from) {
    if (from.hasOwnProperty(i)) {
      to[i] = from[i];
    }
  }

  return to;
}

var utils = {
  getWindow: function getWindow(node) {
    if (node && node.document && node.setTimeout) {
      return node;
    }

    var doc = node.ownerDocument || node;
    return doc.defaultView || doc.parentWindow;
  },
  getDocument: getDocument,
  offset: function offset(el, value, option) {
    if (typeof value !== 'undefined') {
      setOffset(el, value, option || {});
    } else {
      return dist_web_getOffset(el);
    }
  },
  isWindow: isWindow,
  each: each,
  css: css,
  clone: function clone(obj) {
    var i;
    var ret = {};

    for (i in obj) {
      if (obj.hasOwnProperty(i)) {
        ret[i] = obj[i];
      }
    }

    var overflow = obj.overflow;

    if (overflow) {
      for (i in obj) {
        if (obj.hasOwnProperty(i)) {
          ret.overflow[i] = obj.overflow[i];
        }
      }
    }

    return ret;
  },
  mix: mix,
  getWindowScrollLeft: function getWindowScrollLeft(w) {
    return getScrollLeft(w);
  },
  getWindowScrollTop: function getWindowScrollTop(w) {
    return getScrollTop(w);
  },
  merge: function merge() {
    var ret = {};

    for (var i = 0; i < arguments.length; i++) {
      utils.mix(ret, i < 0 || arguments.length <= i ? undefined : arguments[i]);
    }

    return ret;
  },
  viewportWidth: 0,
  viewportHeight: 0
};
mix(utils, domUtils);

/**
 * 得到会导致元素显示不全的祖先元素
 */

var getParent = utils.getParent;

function getOffsetParent(element) {
  if (utils.isWindow(element) || element.nodeType === 9) {
    return null;
  } // ie 这个也不是完全可行

  /*
   <div style="width: 50px;height: 100px;overflow: hidden">
   <div style="width: 50px;height: 100px;position: relative;" id="d6">
   元素 6 高 100px 宽 50px<br/>
   </div>
   </div>
   */
  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
  //  In other browsers it only includes elements with position absolute, relative or
  // fixed, not elements with overflow set to auto or scroll.
  //        if (UA.ie && ieMode < 8) {
  //            return element.offsetParent;
  //        }
  // 统一的 offsetParent 方法


  var doc = utils.getDocument(element);
  var body = doc.body;
  var parent;
  var positionStyle = utils.css(element, 'position');
  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';

  if (!skipStatic) {
    return element.nodeName.toLowerCase() === 'html' ? null : getParent(element);
  }

  for (parent = getParent(element); parent && parent !== body && parent.nodeType !== 9; parent = getParent(parent)) {
    positionStyle = utils.css(parent, 'position');

    if (positionStyle !== 'static') {
      return parent;
    }
  }

  return null;
}

var getParent$1 = utils.getParent;
function isAncestorFixed(element) {
  if (utils.isWindow(element) || element.nodeType === 9) {
    return false;
  }

  var doc = utils.getDocument(element);
  var body = doc.body;
  var parent = null;

  for (parent = getParent$1(element); parent && parent !== body; parent = getParent$1(parent)) {
    var positionStyle = utils.css(parent, 'position');

    if (positionStyle === 'fixed') {
      return true;
    }
  }

  return false;
}

/**
 * 获得元素的显示部分的区域
 */

function getVisibleRectForElement(element, alwaysByViewport) {
  var visibleRect = {
    left: 0,
    right: Infinity,
    top: 0,
    bottom: Infinity
  };
  var el = getOffsetParent(element);
  var doc = utils.getDocument(element);
  var win = doc.defaultView || doc.parentWindow;
  var body = doc.body;
  var documentElement = doc.documentElement; // Determine the size of the visible rect by climbing the dom accounting for
  // all scrollable containers.

  while (el) {
    // clientWidth is zero for inline block elements in ie.
    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) && // body may have overflow set on it, yet we still get the entire
    // viewport. In some browsers, el.offsetParent may be
    // document.documentElement, so check for that too.
    el !== body && el !== documentElement && utils.css(el, 'overflow') !== 'visible') {
      var pos = utils.offset(el); // add border

      pos.left += el.clientLeft;
      pos.top += el.clientTop;
      visibleRect.top = Math.max(visibleRect.top, pos.top);
      visibleRect.right = Math.min(visibleRect.right, // consider area without scrollBar
      pos.left + el.clientWidth);
      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
      visibleRect.left = Math.max(visibleRect.left, pos.left);
    } else if (el === body || el === documentElement) {
      break;
    }

    el = getOffsetParent(el);
  } // Set element position to fixed
  // make sure absolute element itself don't affect it's visible area
  // https://github.com/ant-design/ant-design/issues/7601


  var originalPosition = null;

  if (!utils.isWindow(element) && element.nodeType !== 9) {
    originalPosition = element.style.position;
    var position = utils.css(element, 'position');

    if (position === 'absolute') {
      element.style.position = 'fixed';
    }
  }

  var scrollX = utils.getWindowScrollLeft(win);
  var scrollY = utils.getWindowScrollTop(win);
  var viewportWidth = utils.viewportWidth(win);
  var viewportHeight = utils.viewportHeight(win);
  var documentWidth = documentElement.scrollWidth;
  var documentHeight = documentElement.scrollHeight; // scrollXXX on html is sync with body which means overflow: hidden on body gets wrong scrollXXX.
  // We should cut this ourself.

  var bodyStyle = window.getComputedStyle(body);

  if (bodyStyle.overflowX === 'hidden') {
    documentWidth = win.innerWidth;
  }

  if (bodyStyle.overflowY === 'hidden') {
    documentHeight = win.innerHeight;
  } // Reset element position after calculate the visible area


  if (element.style) {
    element.style.position = originalPosition;
  }

  if (alwaysByViewport || isAncestorFixed(element)) {
    // Clip by viewport's size.
    visibleRect.left = Math.max(visibleRect.left, scrollX);
    visibleRect.top = Math.max(visibleRect.top, scrollY);
    visibleRect.right = Math.min(visibleRect.right, scrollX + viewportWidth);
    visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + viewportHeight);
  } else {
    // Clip by document's size.
    var maxVisibleWidth = Math.max(documentWidth, scrollX + viewportWidth);
    visibleRect.right = Math.min(visibleRect.right, maxVisibleWidth);
    var maxVisibleHeight = Math.max(documentHeight, scrollY + viewportHeight);
    visibleRect.bottom = Math.min(visibleRect.bottom, maxVisibleHeight);
  }

  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
}

function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
  var pos = utils.clone(elFuturePos);
  var size = {
    width: elRegion.width,
    height: elRegion.height
  };

  if (overflow.adjustX && pos.left < visibleRect.left) {
    pos.left = visibleRect.left;
  } // Left edge inside and right edge outside viewport, try to resize it.


  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
    size.width -= pos.left + size.width - visibleRect.right;
  } // Right edge outside viewport, try to move it.


  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
    // 保证左边界和可视区域左边界对齐
    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
  } // Top edge outside viewport, try to move it.


  if (overflow.adjustY && pos.top < visibleRect.top) {
    pos.top = visibleRect.top;
  } // Top edge inside and bottom edge outside viewport, try to resize it.


  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
    size.height -= pos.top + size.height - visibleRect.bottom;
  } // Bottom edge outside viewport, try to move it.


  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
    // 保证上边界和可视区域上边界对齐
    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
  }

  return utils.mix(pos, size);
}

function getRegion(node) {
  var offset;
  var w;
  var h;

  if (!utils.isWindow(node) && node.nodeType !== 9) {
    offset = utils.offset(node);
    w = utils.outerWidth(node);
    h = utils.outerHeight(node);
  } else {
    var win = utils.getWindow(node);
    offset = {
      left: utils.getWindowScrollLeft(win),
      top: utils.getWindowScrollTop(win)
    };
    w = utils.viewportWidth(win);
    h = utils.viewportHeight(win);
  }

  offset.width = w;
  offset.height = h;
  return offset;
}

/**
 * 获取 node 上的 align 对齐点 相对于页面的坐标
 */
function getAlignOffset(region, align) {
  var V = align.charAt(0);
  var H = align.charAt(1);
  var w = region.width;
  var h = region.height;
  var x = region.left;
  var y = region.top;

  if (V === 'c') {
    y += h / 2;
  } else if (V === 'b') {
    y += h;
  }

  if (H === 'c') {
    x += w / 2;
  } else if (H === 'r') {
    x += w;
  }

  return {
    left: x,
    top: y
  };
}

function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
  var p1 = getAlignOffset(refNodeRegion, points[1]);
  var p2 = getAlignOffset(elRegion, points[0]);
  var diff = [p2.left - p1.left, p2.top - p1.top];
  return {
    left: Math.round(elRegion.left - diff[0] + offset[0] - targetOffset[0]),
    top: Math.round(elRegion.top - diff[1] + offset[1] - targetOffset[1])
  };
}

/**
 * align dom node flexibly
 * @author yiminghe@gmail.com
 */

function isFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
}

function isFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
}

function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
}

function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
}

function flip(points, reg, map) {
  var ret = [];
  utils.each(points, function (p) {
    ret.push(p.replace(reg, function (m) {
      return map[m];
    }));
  });
  return ret;
}

function flipOffset(offset, index) {
  offset[index] = -offset[index];
  return offset;
}

function convertOffset(str, offsetLen) {
  var n;

  if (/%$/.test(str)) {
    n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
  } else {
    n = parseInt(str, 10);
  }

  return n || 0;
}

function normalizeOffset(offset, el) {
  offset[0] = convertOffset(offset[0], el.width);
  offset[1] = convertOffset(offset[1], el.height);
}
/**
 * @param el
 * @param tgtRegion 参照节点所占的区域: { left, top, width, height }
 * @param align
 */


function doAlign(el, tgtRegion, align, isTgtRegionVisible) {
  var points = align.points;
  var offset = align.offset || [0, 0];
  var targetOffset = align.targetOffset || [0, 0];
  var overflow = align.overflow;
  var source = align.source || el;
  offset = [].concat(offset);
  targetOffset = [].concat(targetOffset);
  overflow = overflow || {};
  var newOverflowCfg = {};
  var fail = 0;
  var alwaysByViewport = !!(overflow && overflow.alwaysByViewport); // 当前节点可以被放置的显示区域

  var visibleRect = getVisibleRectForElement(source, alwaysByViewport); // 当前节点所占的区域, left/top/width/height

  var elRegion = getRegion(source); // 将 offset 转换成数值，支持百分比

  normalizeOffset(offset, elRegion);
  normalizeOffset(targetOffset, tgtRegion); // 当前节点将要被放置的位置

  var elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset, targetOffset); // 当前节点将要所处的区域

  var newElRegion = utils.merge(elRegion, elFuturePos); // 如果可视区域不能完全放置当前节点时允许调整

  if (visibleRect && (overflow.adjustX || overflow.adjustY) && isTgtRegionVisible) {
    if (overflow.adjustX) {
      // 如果横向不能放下
      if (isFailX(elFuturePos, elRegion, visibleRect)) {
        // 对齐位置反下
        var newPoints = flip(points, /[lr]/gi, {
          l: 'r',
          r: 'l'
        }); // 偏移量也反下

        var newOffset = flipOffset(offset, 0);
        var newTargetOffset = flipOffset(targetOffset, 0);
        var newElFuturePos = getElFuturePos(elRegion, tgtRegion, newPoints, newOffset, newTargetOffset);

        if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = newPoints;
          offset = newOffset;
          targetOffset = newTargetOffset;
        }
      }
    }

    if (overflow.adjustY) {
      // 如果纵向不能放下
      if (isFailY(elFuturePos, elRegion, visibleRect)) {
        // 对齐位置反下
        var _newPoints = flip(points, /[tb]/gi, {
          t: 'b',
          b: 't'
        }); // 偏移量也反下


        var _newOffset = flipOffset(offset, 1);

        var _newTargetOffset = flipOffset(targetOffset, 1);

        var _newElFuturePos = getElFuturePos(elRegion, tgtRegion, _newPoints, _newOffset, _newTargetOffset);

        if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = _newPoints;
          offset = _newOffset;
          targetOffset = _newTargetOffset;
        }
      }
    } // 如果失败，重新计算当前节点将要被放置的位置


    if (fail) {
      elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset, targetOffset);
      utils.mix(newElRegion, elFuturePos);
    }

    var isStillFailX = isFailX(elFuturePos, elRegion, visibleRect);
    var isStillFailY = isFailY(elFuturePos, elRegion, visibleRect); // 检查反下后的位置是否可以放下了，如果仍然放不下：
    // 1. 复原修改过的定位参数

    if (isStillFailX || isStillFailY) {
      points = align.points;
      offset = align.offset || [0, 0];
      targetOffset = align.targetOffset || [0, 0];
    } // 2. 只有指定了可以调整当前方向才调整


    newOverflowCfg.adjustX = overflow.adjustX && isStillFailX;
    newOverflowCfg.adjustY = overflow.adjustY && isStillFailY; // 确实要调整，甚至可能会调整高度宽度

    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
      newElRegion = adjustForViewport(elFuturePos, elRegion, visibleRect, newOverflowCfg);
    }
  } // need judge to in case set fixed with in css on height auto element


  if (newElRegion.width !== elRegion.width) {
    utils.css(source, 'width', utils.width(source) + newElRegion.width - elRegion.width);
  }

  if (newElRegion.height !== elRegion.height) {
    utils.css(source, 'height', utils.height(source) + newElRegion.height - elRegion.height);
  } // https://github.com/kissyteam/kissy/issues/190
  // 相对于屏幕位置没变，而 left/top 变了
  // 例如 <div 'relative'><el absolute></div>


  utils.offset(source, {
    left: newElRegion.left,
    top: newElRegion.top
  }, {
    useCssRight: align.useCssRight,
    useCssBottom: align.useCssBottom,
    useCssTransform: align.useCssTransform,
    ignoreShake: align.ignoreShake
  });
  return {
    points: points,
    offset: offset,
    targetOffset: targetOffset,
    overflow: newOverflowCfg
  };
}
/**
 *  2012-04-26 yiminghe@gmail.com
 *   - 优化智能对齐算法
 *   - 慎用 resizeXX
 *
 *  2011-07-13 yiminghe@gmail.com note:
 *   - 增加智能对齐，以及大小调整选项
 **/

function isOutOfVisibleRect(target, alwaysByViewport) {
  var visibleRect = getVisibleRectForElement(target, alwaysByViewport);
  var targetRegion = getRegion(target);
  return !visibleRect || targetRegion.left + targetRegion.width <= visibleRect.left || targetRegion.top + targetRegion.height <= visibleRect.top || targetRegion.left >= visibleRect.right || targetRegion.top >= visibleRect.bottom;
}

function alignElement(el, refNode, align) {
  var target = align.target || refNode;
  var refNodeRegion = getRegion(target);
  var isTargetNotOutOfVisible = !isOutOfVisibleRect(target, align.overflow && align.overflow.alwaysByViewport);
  return doAlign(el, refNodeRegion, align, isTargetNotOutOfVisible);
}

alignElement.__getOffsetParent = getOffsetParent;
alignElement.__getVisibleRectForElement = getVisibleRectForElement;

/**
 * `tgtPoint`: { pageX, pageY } or { clientX, clientY }.
 * If client position provided, will internal convert to page position.
 */

function alignPoint(el, tgtPoint, align) {
  var pageX;
  var pageY;
  var doc = utils.getDocument(el);
  var win = doc.defaultView || doc.parentWindow;
  var scrollX = utils.getWindowScrollLeft(win);
  var scrollY = utils.getWindowScrollTop(win);
  var viewportWidth = utils.viewportWidth(win);
  var viewportHeight = utils.viewportHeight(win);

  if ('pageX' in tgtPoint) {
    pageX = tgtPoint.pageX;
  } else {
    pageX = scrollX + tgtPoint.clientX;
  }

  if ('pageY' in tgtPoint) {
    pageY = tgtPoint.pageY;
  } else {
    pageY = scrollY + tgtPoint.clientY;
  }

  var tgtRegion = {
    left: pageX,
    top: pageY,
    width: 0,
    height: 0
  };
  var pointInView = pageX >= 0 && pageX <= scrollX + viewportWidth && pageY >= 0 && pageY <= scrollY + viewportHeight; // Provide default target point

  var points = [align.points[0], 'cc'];
  return doAlign(el, tgtRegion, _objectSpread2({}, align, {
    points: points
  }), pointInView);
}

/* harmony default export */ var dist_web = (alignElement);

//# sourceMappingURL=index.js.map

// EXTERNAL MODULE: ./node_modules/add-dom-event-listener/lib/index.js
var add_dom_event_listener_lib = __webpack_require__("LIAx");
var add_dom_event_listener_lib_default = /*#__PURE__*/__webpack_require__.n(add_dom_event_listener_lib);

// CONCATENATED MODULE: ./node_modules/rc-util/es/Dom/addEventListener.js


function addEventListenerWrap(target, eventType, cb, option) {
  /* eslint camelcase: 2 */
  var callback = react_dom_default.a.unstable_batchedUpdates ? function run(e) {
    react_dom_default.a.unstable_batchedUpdates(cb, e);
  } : cb;
  return add_dom_event_listener_lib_default()(target, eventType, callback, option);
}
// CONCATENATED MODULE: ./node_modules/rmc-align/es/isWindow.js
/* eslint no-eq-null: 0 */
/* eslint eqeqeq: 0 */
/* tslint:disable:triple-equals */
function isWindow_isWindow(obj) {
    return obj != null && obj == obj.window;
}
// CONCATENATED MODULE: ./node_modules/rmc-align/es/Align.js
var Align_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function Align_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Align_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Align_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






function buffer(fn, ms) {
    var timer = void 0;
    function clear() {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
    }
    function bufferFn() {
        clear();
        timer = setTimeout(fn, ms);
    }
    bufferFn.clear = clear;
    return bufferFn;
}

var Align_Align = function (_Component) {
    Align_inherits(Align, _Component);

    function Align() {
        Align_classCallCheck(this, Align);

        var _this = Align_possibleConstructorReturn(this, (Align.__proto__ || Object.getPrototypeOf(Align)).apply(this, arguments));

        _this.forceAlign = function () {
            var props = _this.props;
            if (!props.disabled) {
                var source = react_dom_default.a.findDOMNode(_this);
                props.onAlign(source, dist_web(source, props.target(), props.align));
            }
        };
        return _this;
    }

    Align_createClass(Align, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var props = this.props;
                        this.forceAlign();
            if (!props.disabled && props.monitorWindowResize) {
                this.startMonitorWindowResize();
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            var reAlign = false;
            var props = this.props;
            if (!props.disabled) {
                if (prevProps.disabled || prevProps.align !== props.align) {
                    reAlign = true;
                } else {
                    var lastTarget = prevProps.target();
                    var currentTarget = props.target();
                    if (isWindow_isWindow(lastTarget) && isWindow_isWindow(currentTarget)) {
                        reAlign = false;
                    } else if (lastTarget !== currentTarget) {
                        reAlign = true;
                    }
                }
            }
            if (reAlign) {
                this.forceAlign();
            }
            if (props.monitorWindowResize && !props.disabled) {
                this.startMonitorWindowResize();
            } else {
                this.stopMonitorWindowResize();
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.stopMonitorWindowResize();
        }
    }, {
        key: 'startMonitorWindowResize',
        value: function startMonitorWindowResize() {
            if (!this.resizeHandler) {
                this.bufferMonitor = buffer(this.forceAlign, this.props.monitorBufferTime);
                this.resizeHandler = addEventListenerWrap(window, 'resize', this.bufferMonitor);
            }
        }
    }, {
        key: 'stopMonitorWindowResize',
        value: function stopMonitorWindowResize() {
            if (this.resizeHandler) {
                this.bufferMonitor.clear();
                this.resizeHandler.remove();
                this.resizeHandler = null;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                childrenProps = _props.childrenProps,
                children = _props.children;

            var child = react_default.a.Children.only(children);
            if (childrenProps) {
                var newProps = {};
                for (var prop in childrenProps) {
                    if (childrenProps.hasOwnProperty(prop)) {
                        newProps[prop] = this.props[childrenProps[prop]];
                    }
                }
                return react_default.a.cloneElement(child, newProps);
            }
            return child;
        }
    }]);

    return Align;
}(react["Component"]);

Align_Align.defaultProps = {
    target: function target() {
        return window;
    },
    onAlign: function onAlign() {},
    monitorBufferTime: 50,
    monitorWindowResize: false,
    disabled: false
};
/* harmony default export */ var es_Align = (Align_Align);
// CONCATENATED MODULE: ./node_modules/rmc-align/es/index.js
// export this package's api

/* harmony default export */ var rmc_align_es = (es_Align);
// CONCATENATED MODULE: ./node_modules/rmc-trigger/es/LazyRenderBox.js




var LazyRenderBox_rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};


var es_LazyRenderBox_LazyRenderBox = function (_Component) {
    inherits_default()(LazyRenderBox, _Component);

    function LazyRenderBox() {
        classCallCheck_default()(this, LazyRenderBox);

        return possibleConstructorReturn_default()(this, (LazyRenderBox.__proto__ || Object.getPrototypeOf(LazyRenderBox)).apply(this, arguments));
    }

    createClass_default()(LazyRenderBox, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            return nextProps.hiddenClassName || nextProps.visible;
        }
    }, {
        key: "render",
        value: function render() {
            var _a = this.props,
                hiddenClassName = _a.hiddenClassName,
                visible = _a.visible,
                props = LazyRenderBox_rest(_a, ["hiddenClassName", "visible"]);
            if (hiddenClassName || react_default.a.Children.count(props.children) > 1) {
                if (!visible && hiddenClassName) {
                    props.className += " " + hiddenClassName;
                }
                return react_default.a.createElement("div", props);
            }
            return react_default.a.Children.only(props.children);
        }
    }]);

    return LazyRenderBox;
}(react["Component"]);

/* harmony default export */ var rmc_trigger_es_LazyRenderBox = (es_LazyRenderBox_LazyRenderBox);
// CONCATENATED MODULE: ./node_modules/rmc-trigger/es/PopupInner.js







var PopupInner_PopupInner = function (_Component) {
    inherits_default()(PopupInner, _Component);

    function PopupInner() {
        classCallCheck_default()(this, PopupInner);

        return possibleConstructorReturn_default()(this, (PopupInner.__proto__ || Object.getPrototypeOf(PopupInner)).apply(this, arguments));
    }

    createClass_default()(PopupInner, [{
        key: 'render',
        value: function render() {
            var props = this.props;
            var className = props.className;
            if (!props.visible) {
                className += ' ' + props.hiddenClassName;
            }
            return react_default.a.createElement(
                'div',
                { className: className, style: props.style },
                react_default.a.createElement(
                    rmc_trigger_es_LazyRenderBox,
                    { className: props.prefixCls + '-content', visible: props.visible },
                    props.children
                )
            );
        }
    }]);

    return PopupInner;
}(react["Component"]);

/* harmony default export */ var es_PopupInner = (PopupInner_PopupInner);
// CONCATENATED MODULE: ./node_modules/rmc-trigger/es/utils.js

function isPointsEq(a1, a2) {
    return a1[0] === a2[0] && a1[1] === a2[1];
}
function getAlignFromPlacement(builtinPlacements, placementStr, align) {
    var baseAlign = builtinPlacements[placementStr] || {};
    return extends_default()({}, baseAlign, align);
}
function getPopupClassNameFromAlign(builtinPlacements, prefixCls, align) {
    var points = align.points;
    for (var placement in builtinPlacements) {
        if (builtinPlacements.hasOwnProperty(placement)) {
            if (isPointsEq(builtinPlacements[placement].points, points)) {
                return prefixCls + '-placement-' + placement;
            }
        }
    }
    return '';
}
function saveRef(name, component) {
    this[name] = component;
}
// CONCATENATED MODULE: ./node_modules/rmc-trigger/es/Popup.js













var Popup_Popup = function (_Component) {
    inherits_default()(Popup, _Component);

    function Popup(props) {
        classCallCheck_default()(this, Popup);

        var _this = possibleConstructorReturn_default()(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).call(this, props));

        _this.onAlign = function (popupDomNode, align) {
            var props = _this.props;
            var currentAlignClassName = props.getClassNameFromAlign(align);
            // FIX: https://github.com/react-component/trigger/issues/56
            // FIX: https://github.com/react-component/tooltip/issues/79
            if (_this.currentAlignClassName !== currentAlignClassName) {
                _this.currentAlignClassName = currentAlignClassName;
                popupDomNode.className = _this.getClassName(currentAlignClassName);
            }
            props.onAlign(popupDomNode, align);
        };
        _this.getTarget = function () {
            return _this.props.getRootDomNode();
        };
        _this.savePopupRef = saveRef.bind(_this, 'popupInstance');
        _this.saveAlignRef = saveRef.bind(_this, 'alignInstance');
        return _this;
    }

    createClass_default()(Popup, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.rootNode = this.getPopupDomNode();
        }
    }, {
        key: 'getPopupDomNode',
        value: function getPopupDomNode() {
            return react_dom_default.a.findDOMNode(this.popupInstance);
        }
    }, {
        key: 'getMaskTransitionName',
        value: function getMaskTransitionName() {
            var props = this.props;
            var transitionName = props.maskTransitionName;
            var animation = props.maskAnimation;
            if (!transitionName && animation) {
                transitionName = props.prefixCls + '-' + animation;
            }
            return transitionName;
        }
    }, {
        key: 'getTransitionName',
        value: function getTransitionName() {
            var props = this.props;
            var transitionName = props.transitionName;
            if (!transitionName && props.animation) {
                transitionName = props.prefixCls + '-' + props.animation;
            }
            return transitionName;
        }
    }, {
        key: 'getClassName',
        value: function getClassName(currentAlignClassName) {
            return this.props.prefixCls + ' ' + this.props.className + ' ' + currentAlignClassName;
        }
    }, {
        key: 'getPopupElement',
        value: function getPopupElement() {
            var savePopupRef = this.savePopupRef,
                props = this.props;
            var align = props.align,
                style = props.style,
                visible = props.visible,
                prefixCls = props.prefixCls,
                destroyPopupOnHide = props.destroyPopupOnHide;

            var className = this.getClassName(this.currentAlignClassName || props.getClassNameFromAlign(align));
            var hiddenClassName = prefixCls + '-hidden';
            if (!visible) {
                this.currentAlignClassName = null;
            }
            var newStyle = extends_default()({}, style, this.getZIndexStyle());
            var popupInnerProps = {
                className: className,
                prefixCls: prefixCls,
                ref: savePopupRef,
                style: newStyle
            };
            if (destroyPopupOnHide) {
                return react_default.a.createElement(
                    es_Animate,
                    { component: '', exclusive: true, transitionAppear: true, onAnimateLeave: props.onAnimateLeave, transitionName: this.getTransitionName() },
                    visible ? react_default.a.createElement(
                        rmc_align_es,
                        { target: this.getTarget, key: 'popup', ref: this.saveAlignRef, monitorWindowResize: true, align: align, onAlign: this.onAlign },
                        react_default.a.createElement(
                            es_PopupInner,
                            extends_default()({ visible: true }, popupInnerProps),
                            props.children
                        )
                    ) : null
                );
            }
            var alignOtherProps = {
                xVisible: visible
            };
            return react_default.a.createElement(
                es_Animate,
                { component: '', exclusive: true, transitionAppear: true, transitionName: this.getTransitionName(), onAnimateLeave: props.onAnimateLeave, showProp: 'xVisible' },
                react_default.a.createElement(
                    rmc_align_es,
                    extends_default()({ target: this.getTarget, key: 'popup', ref: this.saveAlignRef, monitorWindowResize: true }, alignOtherProps, { childrenProps: { visible: 'xVisible' }, disabled: !visible, align: align, onAlign: this.onAlign }),
                    react_default.a.createElement(
                        es_PopupInner,
                        extends_default()({ hiddenClassName: hiddenClassName }, popupInnerProps),
                        props.children
                    )
                )
            );
        }
    }, {
        key: 'getZIndexStyle',
        value: function getZIndexStyle() {
            var style = {};
            var props = this.props;
            if (props.zIndex !== undefined) {
                style.zIndex = props.zIndex;
            }
            return style;
        }
    }, {
        key: 'getMaskElement',
        value: function getMaskElement() {
            var props = this.props;
            var maskElement = void 0;
            if (props.mask) {
                var maskTransition = this.getMaskTransitionName();
                maskElement = react_default.a.createElement(rmc_trigger_es_LazyRenderBox, { style: this.getZIndexStyle(), key: 'mask', className: props.prefixCls + '-mask', hiddenClassName: props.prefixCls + '-mask-hidden', visible: props.visible });
                if (maskTransition) {
                    maskElement = react_default.a.createElement(
                        es_Animate,
                        { key: 'mask', showProp: 'visible', transitionAppear: true, component: '', transitionName: maskTransition },
                        maskElement
                    );
                }
            }
            return maskElement;
        }
    }, {
        key: 'render',
        value: function render() {
            return react_default.a.createElement(
                'div',
                null,
                this.getMaskElement(),
                this.getPopupElement()
            );
        }
    }]);

    return Popup;
}(react["Component"]);

/* harmony default export */ var rmc_trigger_es_Popup = (Popup_Popup);
// CONCATENATED MODULE: ./node_modules/rmc-trigger/es/Trigger.js











var Trigger_IS_REACT_16 = !!react_default.a.createPortal;
function Trigger_noop() {}
function returnEmptyString() {
    return '';
}
function returnDocument() {
    return window.document;
}

var Trigger_Trigger = function (_React$Component) {
    inherits_default()(Trigger, _React$Component);

    function Trigger() {
        classCallCheck_default()(this, Trigger);

        var _this = possibleConstructorReturn_default()(this, (Trigger.__proto__ || Object.getPrototypeOf(Trigger)).apply(this, arguments));

        _this.onDocumentClick = function (event) {
            if (_this.props.mask && !_this.props.maskClosable) {
                return;
            }
            var target = event.target;
            var root = Object(react_dom["findDOMNode"])(_this);
            var popupNode = _this.getPopupDomNode();
            if (!contains(root, target) && !contains(popupNode, target)) {
                _this.close();
            }
        };
        _this.getPopupAlign = function () {
            var props = _this.props;
            var popupPlacement = props.popupPlacement,
                popupAlign = props.popupAlign,
                builtinPlacements = props.builtinPlacements;

            if (popupPlacement && builtinPlacements) {
                return getAlignFromPlacement(builtinPlacements, popupPlacement, popupAlign);
            }
            return popupAlign;
        };
        _this.getRootDomNode = function () {
            return Object(react_dom["findDOMNode"])(_this);
        };
        _this.getPopupClassNameFromAlign = function (align) {
            var className = [];
            var props = _this.props;
            var popupPlacement = props.popupPlacement,
                builtinPlacements = props.builtinPlacements,
                prefixCls = props.prefixCls;

            if (popupPlacement && builtinPlacements) {
                className.push(getPopupClassNameFromAlign(builtinPlacements, prefixCls, align));
            }
            if (props.getPopupClassNameFromAlign) {
                className.push(props.getPopupClassNameFromAlign(align));
            }
            return className.join(' ');
        };
        _this.close = function () {
            if (_this.props.onClose) {
                _this.props.onClose();
            }
        };
        _this.onAnimateLeave = function () {
            if (_this.props.destroyPopupOnHide) {
                var container = _this._container;
                if (container) {
                    react_dom_default.a.unmountComponentAtNode(container);
                    container.parentNode.removeChild(container);
                }
            }
        };
        _this.removeContainer = function () {
            var container = document.querySelector('#' + _this.props.prefixCls + '-container');
            if (container) {
                react_dom_default.a.unmountComponentAtNode(container);
                container.parentNode.removeChild(container);
            }
        };
        return _this;
    }

    createClass_default()(Trigger, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.visible) {
                this.componentDidUpdate();
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.props.visible) {
                if (!Trigger_IS_REACT_16) {
                    this.renderDialog(false);
                }
            }
            this.clearOutsideHandler();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var _this2 = this;

            if (!Trigger_IS_REACT_16) {
                this.renderDialog(this.props.visible);
            }
            if (this.props.visible) {
                                if (!this.touchOutsideHandler) {
                                                            this.touchOutsideHandler = setTimeout(function () {
                        var currentDocument = _this2.props.getDocument();
                        _this2.touchOutsideHandler = addEventListener_default()(currentDocument, 'touchend', _this2.onDocumentClick);
                    });
                }
                return;
            }
            this.clearOutsideHandler();
        }
    }, {
        key: 'clearOutsideHandler',
        value: function clearOutsideHandler() {
            if (this.touchOutsideHandler) {
                if (this.touchOutsideHandler.remove) {
                    this.touchOutsideHandler.remove();
                }
                this.touchOutsideHandler = null;
            }
        }
    }, {
        key: 'getPopupDomNode',
        value: function getPopupDomNode() {
                        if (this._component && this._component.getPopupDomNode) {
                return this._component.getPopupDomNode();
            }
            return null;
        }
    }, {
        key: 'saveRef',
        value: function saveRef(el, visible) {
            this.popupRef = el;
            this._component = el;
            this.props.afterPopupVisibleChange(visible);
        }
    }, {
        key: 'getComponent',
        value: function getComponent(visible) {
            var _this3 = this;

            var props = extends_default()({}, this.props);
            ['visible', 'onAnimateLeave'].forEach(function (key) {
                if (props.hasOwnProperty(key)) {
                    delete props[key];
                }
            });
            return react_default.a.createElement(
                rmc_trigger_es_Popup,
                { key: 'popup', ref: function ref(el) {
                        return _this3.saveRef(el, visible);
                    }, prefixCls: props.prefixCls, destroyPopupOnHide: props.destroyPopupOnHide, visible: visible, className: props.popupClassName, align: this.getPopupAlign(), onAlign: props.onPopupAlign, animation: props.popupAnimation, getClassNameFromAlign: this.getPopupClassNameFromAlign, getRootDomNode: this.getRootDomNode, style: props.popupStyle, mask: props.mask, zIndex: props.zIndex, transitionName: props.popupTransitionName, maskAnimation: props.maskAnimation, maskTransitionName: props.maskTransitionName, onAnimateLeave: this.onAnimateLeave },
                typeof props.popup === 'function' ? props.popup() : props.popup
            );
        }
    }, {
        key: 'getContainer',
        value: function getContainer() {
            if (!this._container) {
                var props = this.props;
                var popupContainer = document.createElement('div');
                                                popupContainer.style.position = 'absolute';
                popupContainer.style.top = '0';
                popupContainer.style.left = '0';
                popupContainer.style.width = '100%';
                var mountNode = props.getPopupContainer ? props.getPopupContainer(Object(react_dom["findDOMNode"])(this)) : props.getDocument().body;
                mountNode.appendChild(popupContainer);
                this._container = popupContainer;
            }
            return this._container;
        }
    }, {
        key: 'renderDialog',
        value: function renderDialog(visible) {
            react_dom_default.a.unstable_renderSubtreeIntoContainer(this, this.getComponent(visible), this.getContainer());
        }
    }, {
        key: 'render',
        value: function render() {
            var props = this.props;
            var children = props.children;
            var child = react_default.a.Children.only(children);
            var newChildProps = {
                onClick: this.props.onTargetClick,
                key: 'trigger'
            };
            var trigger = react_default.a.cloneElement(child, newChildProps);
            if (!Trigger_IS_REACT_16) {
                return trigger;
            }
            var portal = void 0;
                        if (props.visible || this._component) {
                portal = react_dom_default.a.createPortal(this.getComponent(props.visible), this.getContainer());
            }
            return [trigger, portal];
        }
    }]);

    return Trigger;
}(react_default.a.Component);

/* harmony default export */ var es_Trigger = (Trigger_Trigger);

Trigger_Trigger.defaultProps = {
    prefixCls: 'rc-trigger-popup',
    getPopupClassNameFromAlign: returnEmptyString,
    getDocument: returnDocument,
    onPopupVisibleChange: Trigger_noop,
    afterPopupVisibleChange: Trigger_noop,
    onPopupAlign: Trigger_noop,
    popupClassName: '',
    popupStyle: {},
    destroyPopupOnHide: false,
    popupAlign: {},
    defaultPopupVisible: false,
    mask: false,
    maskClosable: true
};
// CONCATENATED MODULE: ./node_modules/rmc-trigger/es/index.js







function es_noop() {}
function es_returnEmptyString() {
    return '';
}
function es_returnDocument() {
    return window.document;
}

var es_TriggerWrap = function (_React$Component) {
    inherits_default()(TriggerWrap, _React$Component);

    function TriggerWrap(props) {
        classCallCheck_default()(this, TriggerWrap);

        var _this = possibleConstructorReturn_default()(this, (TriggerWrap.__proto__ || Object.getPrototypeOf(TriggerWrap)).call(this, props));

        _this.onTargetClick = function () {
            _this.setPopupVisible(!_this.state.popupVisible);
        };
        _this.onClose = function () {
            _this.setPopupVisible(false);
        };
        var popupVisible = void 0;
        if ('popupVisible' in props) {
            popupVisible = !!props.popupVisible;
        } else {
            popupVisible = !!props.defaultPopupVisible;
        }
        _this.state = {
            popupVisible: popupVisible
        };
        return _this;
    }

    createClass_default()(TriggerWrap, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.visible !== undefined) {
                this.setPopupVisible(nextProps.visible);
            }
        }
    }, {
        key: 'setPopupVisible',
        value: function setPopupVisible(visible) {
            if (this.state.popupVisible !== visible) {
                this.setState({
                    popupVisible: visible
                });
                this.props.onPopupVisibleChange(visible);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return react_default.a.createElement(es_Trigger, extends_default()({ ref: function ref(el) {
                    return _this2.triggerRef = el;
                } }, this.props, { visible: this.state.popupVisible, onTargetClick: this.onTargetClick, onClose: this.onClose }));
        }
    }]);

    return TriggerWrap;
}(react_default.a.Component);

es_TriggerWrap.displayName = 'TriggerWrap';
es_TriggerWrap.defaultProps = {
    prefixCls: 'rc-trigger-popup',
    getPopupClassNameFromAlign: es_returnEmptyString,
    getDocument: es_returnDocument,
    onPopupVisibleChange: es_noop,
    afterPopupVisibleChange: es_noop,
    onPopupAlign: es_noop,
    popupClassName: '',
    popupStyle: {},
    destroyPopupOnHide: false,
    popupAlign: {},
    defaultPopupVisible: false,
    mask: false,
    maskClosable: true
};
/* harmony default export */ var rmc_trigger_es = (es_TriggerWrap);
// CONCATENATED MODULE: ./node_modules/rmc-tooltip/es/placements.js
var autoAdjustOverflow = {
    adjustX: 1,
    adjustY: 1
};
var targetOffset = [0, 0];
var placements = {
    left: {
        points: ['cr', 'cl'],
        overflow: autoAdjustOverflow,
        offset: [-4, 0],
        targetOffset: targetOffset
    },
    right: {
        points: ['cl', 'cr'],
        overflow: autoAdjustOverflow,
        offset: [4, 0],
        targetOffset: targetOffset
    },
    top: {
        points: ['bc', 'tc'],
        overflow: autoAdjustOverflow,
        offset: [0, -4],
        targetOffset: targetOffset
    },
    bottom: {
        points: ['tc', 'bc'],
        overflow: autoAdjustOverflow,
        offset: [0, 4],
        targetOffset: targetOffset
    },
    topLeft: {
        points: ['bl', 'tl'],
        overflow: autoAdjustOverflow,
        offset: [0, -4],
        targetOffset: targetOffset
    },
    leftTop: {
        points: ['tr', 'tl'],
        overflow: autoAdjustOverflow,
        offset: [-4, 0],
        targetOffset: targetOffset
    },
    topRight: {
        points: ['br', 'tr'],
        overflow: autoAdjustOverflow,
        offset: [0, -4],
        targetOffset: targetOffset
    },
    rightTop: {
        points: ['tl', 'tr'],
        overflow: autoAdjustOverflow,
        offset: [4, 0],
        targetOffset: targetOffset
    },
    bottomRight: {
        points: ['tr', 'br'],
        overflow: autoAdjustOverflow,
        offset: [0, 4],
        targetOffset: targetOffset
    },
    rightBottom: {
        points: ['bl', 'br'],
        overflow: autoAdjustOverflow,
        offset: [4, 0],
        targetOffset: targetOffset
    },
    bottomLeft: {
        points: ['tl', 'bl'],
        overflow: autoAdjustOverflow,
        offset: [0, 4],
        targetOffset: targetOffset
    },
    leftBottom: {
        points: ['br', 'bl'],
        overflow: autoAdjustOverflow,
        offset: [-4, 0],
        targetOffset: targetOffset
    }
};
/* harmony default export */ var es_placements = (placements);
// CONCATENATED MODULE: ./node_modules/rmc-tooltip/es/Tooltip.js





var Tooltip_rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};




var Tooltip_Tooltip = function (_Component) {
    inherits_default()(Tooltip, _Component);

    function Tooltip() {
        classCallCheck_default()(this, Tooltip);

        var _this = possibleConstructorReturn_default()(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).apply(this, arguments));

        _this.getPopupElement = function () {
            var _this$props = _this.props,
                arrowContent = _this$props.arrowContent,
                overlay = _this$props.overlay,
                prefixCls = _this$props.prefixCls;

            return [react_default.a.createElement(
                'div',
                { className: prefixCls + '-arrow', key: 'arrow' },
                arrowContent
            ), react_default.a.createElement(
                'div',
                { className: prefixCls + '-inner', key: 'content' },
                typeof overlay === 'function' ? overlay() : overlay
            )];
        };
        _this.saveTrigger = function (node) {
            _this.trigger = node;
        };
        return _this;
    }

    createClass_default()(Tooltip, [{
        key: 'getPopupDomNode',
        value: function getPopupDomNode() {
            return this.trigger.triggerRef.getPopupDomNode();
        }
    }, {
        key: 'render',
        value: function render() {
            var _a = this.props,
                overlayClassName = _a.overlayClassName,
                overlayStyle = _a.overlayStyle,
                prefixCls = _a.prefixCls,
                children = _a.children,
                onVisibleChange = _a.onVisibleChange,
                afterVisibleChange = _a.afterVisibleChange,
                transitionName = _a.transitionName,
                animation = _a.animation,
                placement = _a.placement,
                align = _a.align,
                destroyTooltipOnHide = _a.destroyTooltipOnHide,
                defaultVisible = _a.defaultVisible,
                getTooltipContainer = _a.getTooltipContainer,
                restProps = Tooltip_rest(_a, ["overlayClassName", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer"]);
            var extraProps = extends_default()({}, restProps);
            if ('visible' in this.props) {
                extraProps.popupVisible = this.props.visible;
            }
            return react_default.a.createElement(
                rmc_trigger_es,
                extends_default()({ popupClassName: overlayClassName, ref: this.saveTrigger, prefixCls: prefixCls, popup: this.getPopupElement, builtinPlacements: placements, popupPlacement: placement, popupAlign: align, getPopupContainer: getTooltipContainer, onPopupVisibleChange: onVisibleChange, afterPopupVisibleChange: afterVisibleChange, popupTransitionName: transitionName, popupAnimation: animation, defaultPopupVisible: defaultVisible, destroyPopupOnHide: destroyTooltipOnHide, popupStyle: overlayStyle }, extraProps),
                children
            );
        }
    }]);

    return Tooltip;
}(react["Component"]);

Tooltip_Tooltip.defaultProps = {
    prefixCls: 'rmc-tooltip',
    destroyTooltipOnHide: false,
    align: {},
    placement: 'right',
    arrowContent: null
};
/* harmony default export */ var es_Tooltip = (Tooltip_Tooltip);
// CONCATENATED MODULE: ./node_modules/rmc-tooltip/es/index.js

/* harmony default export */ var rmc_tooltip_es = (es_Tooltip);
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/popover/Item.js






var Item_rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};




var Item_Item = function (_React$Component) {
    inherits_default()(Item, _React$Component);

    function Item() {
        classCallCheck_default()(this, Item);

        return possibleConstructorReturn_default()(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
    }

    createClass_default()(Item, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                children = _a.children,
                className = _a.className,
                prefixCls = _a.prefixCls,
                icon = _a.icon,
                disabled = _a.disabled,
                firstItem = _a.firstItem,
                activeStyle = _a.activeStyle,
                restProps = Item_rest(_a, ["children", "className", "prefixCls", "icon", "disabled", "firstItem", "activeStyle"]);
            var cls = classnames_default()(prefixCls + '-item', className, defineProperty_default()({}, prefixCls + '-item-disabled', disabled));
            var activeClass = prefixCls + '-item-active ';
            if (firstItem) {
                activeClass += prefixCls + '-item-fix-active-arrow';
            }
            return react["createElement"](
                es_TouchFeedback,
                { disabled: disabled, activeClassName: activeClass, activeStyle: activeStyle },
                react["createElement"](
                    'div',
                    extends_default()({ className: cls }, restProps),
                    react["createElement"](
                        'div',
                        { className: prefixCls + '-item-container' },
                        icon ?
                        // tslint:disable-next-line:jsx-no-multiline-js
                        react["createElement"](
                            'span',
                            { className: prefixCls + '-item-icon', 'aria-hidden': 'true' },
                            icon
                        ) : null,
                        react["createElement"](
                            'span',
                            { className: prefixCls + '-item-content' },
                            children
                        )
                    )
                )
            );
        }
    }]);

    return Item;
}(react["Component"]);

/* harmony default export */ var popover_Item = (Item_Item);

Item_Item.defaultProps = {
    prefixCls: 'am-popover',
    disabled: false
};
Item_Item.myName = 'PopoverItem';
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/popover/index.js





var popover_rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};



function recursiveCloneChildren(children) {
    var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (ch, _) {
        return ch;
    };

    return react["Children"].map(children, function (child, index) {
        var newChild = cb(child, index);
        if (typeof newChild !== 'string' && typeof newChild !== 'number' && newChild && newChild.props && newChild.props.children) {
            return react["cloneElement"](newChild, {}, recursiveCloneChildren(newChild.props.children, cb));
        }
        return newChild;
    });
}

var popover_Popover = function (_React$Component) {
    inherits_default()(Popover, _React$Component);

    function Popover() {
        classCallCheck_default()(this, Popover);

        return possibleConstructorReturn_default()(this, (Popover.__proto__ || Object.getPrototypeOf(Popover)).apply(this, arguments));
    }

    createClass_default()(Popover, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                overlay = _a.overlay,
                _a$onSelect = _a.onSelect,
                onSelect = _a$onSelect === undefined ? function () {} : _a$onSelect,
                restProps = popover_rest(_a, ["overlay", "onSelect"]);
            var overlayNode = recursiveCloneChildren(overlay, function (child, index) {
                var extraProps = { firstItem: false };
                if (child && typeof child !== 'string' && typeof child !== 'number' && child.type &&
                // Fixme: not sure where the `myName` came from.
                child.type.myName === 'PopoverItem' && !child.props.disabled) {
                    extraProps.onClick = function () {
                        return onSelect(child, index);
                    };
                    extraProps.firstItem = index === 0;
                    return react["cloneElement"](child, extraProps);
                }
                return child;
            });
            var wrapperNode = react["createElement"](
                'div',
                { className: this.props.prefixCls + '-inner-wrapper' },
                overlayNode
            );
            return react["createElement"](rmc_tooltip_es, extends_default()({}, restProps, { overlay: wrapperNode }));
        }
    }]);

    return Popover;
}(react["Component"]);

/* harmony default export */ var popover = (popover_Popover);

popover_Popover.defaultProps = {
    prefixCls: 'am-popover',
    placement: 'bottomRight',
    align: { overflow: { adjustY: 0, adjustX: 0 } },
    trigger: ['click']
};
popover_Popover.Item = popover_Item;
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/progress/index.js









var progress_Progress = function (_React$Component) {
    inherits_default()(Progress, _React$Component);

    function Progress() {
        classCallCheck_default()(this, Progress);

        return possibleConstructorReturn_default()(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).apply(this, arguments));
    }

    createClass_default()(Progress, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps() {
            this.noAppearTransition = true;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            if (this.props.appearTransition) {
                setTimeout(function () {
                    if (_this2.barRef) {
                        _this2.barRef.style.width = _this2.props.percent + '%';
                    }
                }, 10);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _classnames,
                _this3 = this;

            var _props = this.props,
                className = _props.className,
                prefixCls = _props.prefixCls,
                position = _props.position,
                unfilled = _props.unfilled,
                _props$style = _props.style,
                style = _props$style === undefined ? {} : _props$style,
                _props$barStyle = _props.barStyle,
                barStyle = _props$barStyle === undefined ? {} : _props$barStyle;

            var percentStyle = {
                width: this.noAppearTransition || !this.props.appearTransition ? this.props.percent + '%' : 0,
                height: 0
            };
            var wrapCls = classnames_default()(prefixCls + '-outer', className, (_classnames = {}, defineProperty_default()(_classnames, prefixCls + '-fixed-outer', position === 'fixed'), defineProperty_default()(_classnames, prefixCls + '-hide-outer', !unfilled), _classnames));
            return react["createElement"](
                'div',
                { style: style, className: wrapCls, role: 'progressbar', 'aria-valuenow': this.props.percent, 'aria-valuemin': 0, 'aria-valuemax': 100 },
                react["createElement"]('div', { ref: function ref(el) {
                        return _this3.barRef = el;
                    }, className: prefixCls + '-bar', style: extends_default()({}, barStyle, percentStyle) })
            );
        }
    }]);

    return Progress;
}(react["Component"]);

/* harmony default export */ var progress = (progress_Progress);

progress_Progress.defaultProps = {
    prefixCls: 'am-progress',
    percent: 0,
    position: 'fixed',
    unfilled: true,
    appearTransition: false
};
// CONCATENATED MODULE: ./node_modules/rmc-pull-to-refresh/es/PullToRefresh.js





var PullToRefresh_rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};



var PullToRefresh_StaticRenderer = function (_React$Component) {
    inherits_default()(StaticRenderer, _React$Component);

    function StaticRenderer() {
        classCallCheck_default()(this, StaticRenderer);

        return possibleConstructorReturn_default()(this, (StaticRenderer.__proto__ || Object.getPrototypeOf(StaticRenderer)).apply(this, arguments));
    }

    createClass_default()(StaticRenderer, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            return nextProps.shouldUpdate;
        }
    }, {
        key: 'render',
        value: function render() {
            return react_default.a.createElement(
                'div',
                null,
                this.props.render()
            );
        }
    }]);

    return StaticRenderer;
}(react_default.a.Component);

function PullToRefresh_setTransform(nodeStyle, value) {
    nodeStyle.transform = value;
    nodeStyle.webkitTransform = value;
    nodeStyle.MozTransform = value;
}
var isWebView = typeof navigator !== 'undefined' && /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
var DOWN = 'down';
var UP = 'up';
var INDICATOR = { activate: 'release', deactivate: 'pull', release: 'loading', finish: 'finish' };
var supportsPassive = false;
try {
    var opts = Object.defineProperty({}, 'passive', {
        get: function get() {
            supportsPassive = true;
        }
    });
    window.addEventListener('test', null, opts);
} catch (e) {
    // empty
}
var willPreventDefault = supportsPassive ? { passive: false } : false;
// const willNotPreventDefault = supportsPassive ? { passive: true } : false;

var PullToRefresh_PullToRefresh = function (_React$Component2) {
    inherits_default()(PullToRefresh, _React$Component2);

    function PullToRefresh() {
        classCallCheck_default()(this, PullToRefresh);

        // https://github.com/yiminghe/zscroller/blob/2d97973287135745818a0537712235a39a6a62a1/src/Scroller.js#L355
        // currSt: `activate` / `deactivate` / `release` / `finish`
        var _this2 = possibleConstructorReturn_default()(this, (PullToRefresh.__proto__ || Object.getPrototypeOf(PullToRefresh)).apply(this, arguments));

        _this2.state = {
            currSt: 'deactivate',
            dragOnEdge: false
        };
        _this2._isMounted = false;
        _this2.shouldUpdateChildren = false;
        _this2.triggerPullToRefresh = function () {
            // 在初始化时、用代码 自动 触发 pullToRefresh
            // 注意：当 direction 为 up 时，当 visible length < content length 时、则看不到效果
            // 添加this._isMounted的判断，否则组建一实例化，currSt就会是finish
            if (!_this2.state.dragOnEdge && _this2._isMounted) {
                if (_this2.props.refreshing) {
                    if (_this2.props.direction === UP) {
                        _this2._lastScreenY = -_this2.props.distanceToRefresh - 1;
                    }
                    if (_this2.props.direction === DOWN) {
                        _this2._lastScreenY = _this2.props.distanceToRefresh + 1;
                    }
                    // change dom need after setState
                    _this2.setState({ currSt: 'release' }, function () {
                        return _this2.setContentStyle(_this2._lastScreenY);
                    });
                } else {
                    _this2.setState({ currSt: 'finish' }, function () {
                        return _this2.reset();
                    });
                }
            }
        };
        _this2.init = function (ele) {
            if (!ele) {
                // like return in destroy fn ???!!
                return;
            }
            _this2._to = {
                touchstart: _this2.onTouchStart.bind(_this2, ele),
                touchmove: _this2.onTouchMove.bind(_this2, ele),
                touchend: _this2.onTouchEnd.bind(_this2, ele),
                touchcancel: _this2.onTouchEnd.bind(_this2, ele)
            };
            Object.keys(_this2._to).forEach(function (key) {
                ele.addEventListener(key, _this2._to[key], willPreventDefault);
            });
        };
        _this2.destroy = function (ele) {
            if (!_this2._to || !ele) {
                // componentWillUnmount fire before componentDidMount, like forceUpdate ???!!
                return;
            }
            Object.keys(_this2._to).forEach(function (key) {
                ele.removeEventListener(key, _this2._to[key]);
            });
        };
        _this2.onTouchStart = function (_ele, e) {
            _this2._ScreenY = _this2._startScreenY = e.touches[0].screenY;
            // 一开始 refreshing 为 true 时 this._lastScreenY 有值
            _this2._lastScreenY = _this2._lastScreenY || 0;
        };
        _this2.isEdge = function (ele, direction) {
            var container = _this2.props.getScrollContainer();
            if (container && container === document.body) {
                // In chrome61 `document.body.scrollTop` is invalid
                var scrollNode = document.scrollingElement ? document.scrollingElement : document.body;
                if (direction === UP) {
                    return scrollNode.scrollHeight - scrollNode.scrollTop <= window.innerHeight;
                }
                if (direction === DOWN) {
                    return scrollNode.scrollTop <= 0;
                }
            }
            if (direction === UP) {
                return ele.scrollHeight - ele.scrollTop === ele.clientHeight;
            }
            if (direction === DOWN) {
                return ele.scrollTop <= 0;
            }
        };
        _this2.damping = function (dy) {
            if (Math.abs(_this2._lastScreenY) > _this2.props.damping) {
                return 0;
            }
            var ratio = Math.abs(_this2._ScreenY - _this2._startScreenY) / window.screen.height;
            dy *= (1 - ratio) * _this2.props.scale;
            return dy;
        };
        _this2.onTouchMove = function (ele, e) {
            // 使用 pageY 对比有问题
            var _screenY = e.touches[0].screenY;
            var direction = _this2.props.direction;
            // 拖动方向不符合的不处理

            if (direction === UP && _this2._startScreenY < _screenY || direction === DOWN && _this2._startScreenY > _screenY) {
                return;
            }
            if (_this2.isEdge(ele, direction)) {
                if (!_this2.state.dragOnEdge) {
                    // 当用户开始往上滑的时候isEdge还是false的话，会导致this._ScreenY不是想要的，只有当isEdge为true时，再上滑，才有意义
                    // 下面这行代码解决了上面这个问题
                    _this2._ScreenY = _this2._startScreenY = e.touches[0].screenY;
                    _this2.setState({ dragOnEdge: true });
                }
                e.preventDefault();
                // add stopPropagation with fastclick will trigger content onClick event. why?
                // ref https://github.com/ant-design/ant-design-mobile/issues/2141
                // e.stopPropagation();
                var _diff = Math.round(_screenY - _this2._ScreenY);
                _this2._ScreenY = _screenY;
                _this2._lastScreenY += _this2.damping(_diff);
                _this2.setContentStyle(_this2._lastScreenY);
                if (Math.abs(_this2._lastScreenY) < _this2.props.distanceToRefresh) {
                    if (_this2.state.currSt !== 'deactivate') {
                        // console.log('back to the distance');
                        _this2.setState({ currSt: 'deactivate' });
                    }
                } else {
                    if (_this2.state.currSt === 'deactivate') {
                        // console.log('reach to the distance');
                        _this2.setState({ currSt: 'activate' });
                    }
                }
                // https://github.com/ant-design/ant-design-mobile/issues/573#issuecomment-339560829
                // iOS UIWebView issue, It seems no problem in WKWebView
                if (isWebView && e.changedTouches[0].clientY < 0) {
                    _this2.onTouchEnd();
                }
            }
        };
        _this2.onTouchEnd = function () {
            if (_this2.state.dragOnEdge) {
                _this2.setState({ dragOnEdge: false });
            }
            if (_this2.state.currSt === 'activate') {
                _this2.setState({ currSt: 'release' });
                _this2._timer = setTimeout(function () {
                    if (!_this2.props.refreshing) {
                        _this2.setState({ currSt: 'finish' }, function () {
                            return _this2.reset();
                        });
                    }
                    _this2._timer = undefined;
                }, 1000);
                _this2.props.onRefresh();
            } else {
                _this2.reset();
            }
        };
        _this2.reset = function () {
            _this2._lastScreenY = 0;
            _this2.setContentStyle(0);
        };
        _this2.setContentStyle = function (ty) {
            // todos: Why sometimes do not have `this.contentRef` ?
            if (_this2.contentRef) {
                PullToRefresh_setTransform(_this2.contentRef.style, 'translate3d(0px,' + ty + 'px,0)');
            }
        };
        return _this2;
    }

    createClass_default()(PullToRefresh, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            this.shouldUpdateChildren = this.props.children !== nextProps.children;
            return true;
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (prevProps === this.props || prevProps.refreshing === this.props.refreshing) {
                return;
            }
            // triggerPullToRefresh 需要尽可能减少 setState 次数
            this.triggerPullToRefresh();
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this3 = this;

            // `getScrollContainer` most likely return React.Node at the next tick. Need setTimeout
            setTimeout(function () {
                _this3.init(_this3.props.getScrollContainer() || _this3.containerRef);
                _this3.triggerPullToRefresh();
                _this3._isMounted = true;
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            // Should have no setTimeout here!
            this.destroy(this.props.getScrollContainer() || this.containerRef);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var props = extends_default()({}, this.props);
            delete props.damping;

            var className = props.className,
                prefixCls = props.prefixCls,
                children = props.children,
                getScrollContainer = props.getScrollContainer,
                direction = props.direction,
                onRefresh = props.onRefresh,
                refreshing = props.refreshing,
                indicator = props.indicator,
                distanceToRefresh = props.distanceToRefresh,
                restProps = PullToRefresh_rest(props, ["className", "prefixCls", "children", "getScrollContainer", "direction", "onRefresh", "refreshing", "indicator", "distanceToRefresh"]);

            var renderChildren = react_default.a.createElement(PullToRefresh_StaticRenderer, { shouldUpdate: this.shouldUpdateChildren, render: function render() {
                    return children;
                } });
            var renderRefresh = function renderRefresh(cls) {
                var cla = classnames_default()(cls, !_this4.state.dragOnEdge && prefixCls + '-transition');
                return react_default.a.createElement(
                    'div',
                    { className: prefixCls + '-content-wrapper' },
                    react_default.a.createElement(
                        'div',
                        { className: cla, ref: function ref(el) {
                                return _this4.contentRef = el;
                            } },
                        direction === UP ? renderChildren : null,
                        react_default.a.createElement(
                            'div',
                            { className: prefixCls + '-indicator' },
                            indicator[_this4.state.currSt] || INDICATOR[_this4.state.currSt]
                        ),
                        direction === DOWN ? renderChildren : null
                    )
                );
            };
            if (getScrollContainer()) {
                return renderRefresh(prefixCls + '-content ' + prefixCls + '-' + direction);
            }
            return react_default.a.createElement(
                'div',
                extends_default()({ ref: function ref(el) {
                        return _this4.containerRef = el;
                    }, className: classnames_default()(className, prefixCls, prefixCls + '-' + direction) }, restProps),
                renderRefresh(prefixCls + '-content')
            );
        }
    }]);

    return PullToRefresh;
}(react_default.a.Component);

/* harmony default export */ var es_PullToRefresh = (PullToRefresh_PullToRefresh);

PullToRefresh_PullToRefresh.defaultProps = {
    prefixCls: 'rmc-pull-to-refresh',
    getScrollContainer: function getScrollContainer() {
        return undefined;
    },
    direction: DOWN,
    distanceToRefresh: 25,
    damping: 100,
    indicator: INDICATOR,
    scale: 0.6
};
// CONCATENATED MODULE: ./node_modules/rmc-pull-to-refresh/es/index.js

/* harmony default export */ var rmc_pull_to_refresh_es = (es_PullToRefresh);
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/pull-to-refresh/index.js











var pull_to_refresh_PullToRefresh = function (_React$Component) {
    inherits_default()(PullToRefresh, _React$Component);

    function PullToRefresh() {
        classCallCheck_default()(this, PullToRefresh);

        return possibleConstructorReturn_default()(this, (PullToRefresh.__proto__ || Object.getPrototypeOf(PullToRefresh)).apply(this, arguments));
    }

    createClass_default()(PullToRefresh, [{
        key: 'render',
        value: function render() {
            // tslint:disable-next-line:variable-name
            var _getComponentLocale = getComponentLocale(this.props, this.context, 'PullToRefresh', function () {
                return __webpack_require__("nmEG");
            }),
                activateText = _getComponentLocale.activateText,
                deactivateText = _getComponentLocale.deactivateText,
                finishText = _getComponentLocale.finishText;

            var ind = extends_default()({ activate: activateText, deactivate: deactivateText, release: react["createElement"](es_icon, { type: 'loading' }), finish: finishText }, this.props.indicator);
            return react["createElement"](rmc_pull_to_refresh_es, extends_default()({}, this.props, { indicator: ind }));
        }
    }]);

    return PullToRefresh;
}(react["Component"]);

/* harmony default export */ var pull_to_refresh = (pull_to_refresh_PullToRefresh);

pull_to_refresh_PullToRefresh.defaultProps = {
    prefixCls: 'am-pull-to-refresh'
};
pull_to_refresh_PullToRefresh.contextTypes = {
    antLocale: prop_types["object"]
};
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/result/index.js




/* tslint:disable:jsx-no-multiline-js */




var result_Result = function (_React$Component) {
    inherits_default()(Result, _React$Component);

    function Result() {
        classCallCheck_default()(this, Result);

        return possibleConstructorReturn_default()(this, (Result.__proto__ || Object.getPrototypeOf(Result)).apply(this, arguments));
    }

    createClass_default()(Result, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                className = _props.className,
                style = _props.style,
                img = _props.img,
                imgUrl = _props.imgUrl,
                title = _props.title,
                message = _props.message,
                buttonText = _props.buttonText,
                onButtonClick = _props.onButtonClick,
                buttonType = _props.buttonType;

            var imgContent = null;
            if (img) {
                imgContent = react["createElement"](
                    'div',
                    { className: prefixCls + '-pic' },
                    img
                );
            } else if (imgUrl) {
                imgContent = react["createElement"]('div', { className: prefixCls + '-pic', style: { backgroundImage: 'url(' + imgUrl + ')' } });
            }
            return react["createElement"](
                'div',
                { className: classnames_default()(prefixCls, className), style: style, role: 'alert' },
                imgContent,
                title ? react["createElement"](
                    'div',
                    { className: prefixCls + '-title' },
                    title
                ) : null,
                message ? react["createElement"](
                    'div',
                    { className: prefixCls + '-message' },
                    message
                ) : null,
                buttonText ? react["createElement"](
                    'div',
                    { className: prefixCls + '-button' },
                    react["createElement"](
                        es_button,
                        { type: buttonType, onClick: onButtonClick },
                        buttonText
                    )
                ) : null
            );
        }
    }]);

    return Result;
}(react["Component"]);

/* harmony default export */ var es_result = (result_Result);

result_Result.defaultProps = {
    prefixCls: 'am-result',
    buttonType: '',
    onButtonClick: function onButtonClick() {}
};
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/search-bar/PropsType.js
function PropsType_noop() {}
var defaultProps = {
    prefixCls: 'am-search',
    placeholder: '',
    onSubmit: PropsType_noop,
    onChange: PropsType_noop,
    onFocus: PropsType_noop,
    onBlur: PropsType_noop,
    onClear: PropsType_noop,
    showCancelButton: false,
    disabled: false
};
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/search-bar/index.js













function onNextFrame(cb) {
    if (window.requestAnimationFrame) {
        return window.requestAnimationFrame(cb);
    }
    return window.setTimeout(cb, 1);
}
function clearNextFrameAction(nextFrameId) {
    if (window.cancelAnimationFrame) {
        window.cancelAnimationFrame(nextFrameId);
    } else {
        window.clearTimeout(nextFrameId);
    }
}

var search_bar_SearchBar = function (_React$Component) {
    inherits_default()(SearchBar, _React$Component);

    function SearchBar(props) {
        classCallCheck_default()(this, SearchBar);

        var _this = possibleConstructorReturn_default()(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));

        _this.onSubmit = function (e) {
            e.preventDefault();
            if (_this.props.onSubmit) {
                _this.props.onSubmit(_this.state.value || '');
            }
            if (_this.inputRef) {
                _this.inputRef.blur();
            }
        };
        _this.onChange = function (e) {
            if (!_this.state.focus) {
                _this.setState({
                    focus: true
                });
            }
            var value = e.target.value;
            if (!('value' in _this.props)) {
                _this.setState({ value: value });
            }
            if (_this.props.onChange) {
                _this.props.onChange(value);
            }
        };
        _this.onFocus = function () {
            _this.setState({
                focus: true
            });
            _this.firstFocus = true;
            if (_this.props.onFocus) {
                _this.props.onFocus();
            }
        };
        _this.onBlur = function () {
            _this.onBlurTimeout = onNextFrame(function () {
                if (!_this.blurFromOnClear) {
                    if (document.activeElement !== _this.inputRef) {
                        _this.setState({
                            focus: false
                        });
                    }
                }
                _this.blurFromOnClear = false;
            });
            if (_this.props.onBlur) {
                // fix autoFocus item blur with flash
                setTimeout(function () {
                    // fix ios12 wechat browser click failure after input
                    if (document.body) {
                        document.body.scrollTop = document.body.scrollTop;
                    }
                }, 100);
                _this.props.onBlur();
            }
        };
        _this.onClear = function () {
            _this.doClear();
        };
        _this.doClear = function () {
            var blurFromOnClear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            _this.blurFromOnClear = blurFromOnClear;
            if (!('value' in _this.props)) {
                _this.setState({ value: '' });
            }
            if (_this.props.onClear) {
                _this.props.onClear('');
            }
            if (_this.props.onChange) {
                _this.props.onChange('');
            }
            if (blurFromOnClear) {
                _this.focus();
            }
        };
        _this.onCancel = function () {
            if (_this.props.onCancel) {
                _this.props.onCancel(_this.state.value || '');
            } else {
                _this.doClear(false);
            }
        };
        _this.focus = function () {
            if (_this.inputRef) {
                _this.inputRef.focus();
            }
        };
        var value = void 0;
        if ('value' in props) {
            value = props.value || '';
        } else if ('defaultValue' in props) {
            value = props.defaultValue;
        } else {
            value = '';
        }
        _this.state = {
            value: value,
            focus: false
        };
        return _this;
    }

    createClass_default()(SearchBar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.rightBtnRef) {
                var initBtn = window.getComputedStyle(this.rightBtnRef);
                this.rightBtnInitMarginleft = initBtn.marginLeft;
            }
            this.componentDidUpdate();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (this.syntheticPhRef) {
                if (this.inputContainerRef && this.inputContainerRef.className.indexOf(this.props.prefixCls + '-start') > -1) {
                    // 检测是否包含名为 ${this.props.prefixCls}-start 样式，生成动画
                    // offsetWidth 某些时候是向上取整，某些时候是向下取整，不能用
                    if (this.syntheticPhContainerRef) {
                        var realWidth = this.syntheticPhContainerRef.getBoundingClientRect().width; // 包含小数
                        this.syntheticPhRef.style.width = Math.ceil(realWidth) + 'px';
                    }
                    if (!this.props.showCancelButton && this.rightBtnRef) {
                        this.rightBtnRef.style.marginRight = '0';
                    }
                } else {
                    this.syntheticPhRef.style.width = '100%';
                    if (!this.props.showCancelButton && this.rightBtnRef) {
                        this.rightBtnRef.style.marginRight = '-' + (this.rightBtnRef.offsetWidth + (this.rightBtnInitMarginleft != null ? parseInt(this.rightBtnInitMarginleft, 10) : 0)) + 'px';
                    }
                }
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('value' in nextProps && nextProps.value !== this.state.value) {
                this.setState({
                    value: nextProps.value
                });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.onBlurTimeout) {
                clearNextFrameAction(this.onBlurTimeout);
                this.onBlurTimeout = null;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _classnames3,
                _this2 = this;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                showCancelButton = _props.showCancelButton,
                disabled = _props.disabled,
                placeholder = _props.placeholder,
                className = _props.className,
                style = _props.style,
                maxLength = _props.maxLength;
            // tslint:disable-next-line:variable-name

            var _locale = getComponentLocale(this.props, this.context, 'SearchBar', function () {
                return __webpack_require__("hZiy");
            });
            var cancelText = _locale.cancelText;
            var _state = this.state,
                value = _state.value,
                focus = _state.focus;

            var wrapCls = classnames_default()(prefixCls, className, defineProperty_default()({}, prefixCls + '-start', !!(focus || value && value.length > 0)));
            var clearCls = classnames_default()(prefixCls + '-clear', defineProperty_default()({}, prefixCls + '-clear-show', !!(focus && value && value.length > 0)));
            var cancelCls = classnames_default()(prefixCls + '-cancel', (_classnames3 = {}, defineProperty_default()(_classnames3, prefixCls + '-cancel-show', !!(showCancelButton || focus || value && value.length > 0)), defineProperty_default()(_classnames3, prefixCls + '-cancel-anim', this.firstFocus), _classnames3));
            return react["createElement"](
                'form',
                { onSubmit: this.onSubmit, className: wrapCls, style: style, ref: function ref(el) {
                        return _this2.inputContainerRef = el;
                    }, action: '#' },
                react["createElement"](
                    'div',
                    { className: prefixCls + '-input' },
                    react["createElement"](
                        'div',
                        { className: prefixCls + '-synthetic-ph', ref: function ref(el) {
                                return _this2.syntheticPhRef = el;
                            } },
                        react["createElement"](
                            'span',
                            { className: prefixCls + '-synthetic-ph-container', ref: function ref(el) {
                                    return _this2.syntheticPhContainerRef = el;
                                } },
                            react["createElement"]('i', { className: prefixCls + '-synthetic-ph-icon' }),
                            react["createElement"](
                                'span',
                                { className: prefixCls + '-synthetic-ph-placeholder'
                                    // tslint:disable-next-line:jsx-no-multiline-js
                                    , style: {
                                        visibility: placeholder && !value ? 'visible' : 'hidden'
                                    } },
                                placeholder
                            )
                        )
                    ),
                    react["createElement"]('input', extends_default()({ type: 'search', className: prefixCls + '-value', value: value, disabled: disabled, placeholder: placeholder, onChange: this.onChange, onFocus: this.onFocus, onBlur: this.onBlur, ref: function ref(el) {
                            return _this2.inputRef = el;
                        }, maxLength: maxLength }, getDataAttr(this.props))),
                    react["createElement"](
                        es_TouchFeedback,
                        { activeClassName: prefixCls + '-clear-active' },
                        react["createElement"]('a', { onClick: this.onClear, className: clearCls })
                    )
                ),
                react["createElement"](
                    'div',
                    { className: cancelCls, onClick: this.onCancel, ref: function ref(el) {
                            return _this2.rightBtnRef = el;
                        } },
                    this.props.cancelText || cancelText
                )
            );
        }
    }]);

    return SearchBar;
}(react["Component"]);

/* harmony default export */ var search_bar = (search_bar_SearchBar);

search_bar_SearchBar.defaultProps = defaultProps;
search_bar_SearchBar.contextTypes = {
    antLocale: prop_types["object"]
};
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/segmented-control/index.js









var segmented_control_SegmentedControl = function (_React$Component) {
    inherits_default()(SegmentedControl, _React$Component);

    function SegmentedControl(props) {
        classCallCheck_default()(this, SegmentedControl);

        var _this = possibleConstructorReturn_default()(this, (SegmentedControl.__proto__ || Object.getPrototypeOf(SegmentedControl)).call(this, props));

        _this.state = {
            selectedIndex: props.selectedIndex
        };
        return _this;
    }

    createClass_default()(SegmentedControl, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.selectedIndex !== this.state.selectedIndex) {
                this.setState({
                    selectedIndex: nextProps.selectedIndex
                });
            }
        }
    }, {
        key: 'onClick',
        value: function onClick(e, index, value) {
            var _props = this.props,
                disabled = _props.disabled,
                onChange = _props.onChange,
                onValueChange = _props.onValueChange;

            if (!disabled && this.state.selectedIndex !== index) {
                // just do a mock so that the api to be the same as react-native
                e.nativeEvent = e.nativeEvent ? e.nativeEvent : {};
                e.nativeEvent.selectedSegmentIndex = index;
                e.nativeEvent.value = value;
                if (onChange) {
                    onChange(e);
                }
                if (onValueChange) {
                    onValueChange(value);
                }
                this.setState({
                    selectedIndex: index
                });
            }
        }
    }, {
        key: 'renderSegmentItem',
        value: function renderSegmentItem(idx, value, selected) {
            var _this2 = this;

            var _props2 = this.props,
                prefixCls = _props2.prefixCls,
                disabled = _props2.disabled,
                tintColor = _props2.tintColor;

            var itemCls = classnames_default()(prefixCls + '-item', defineProperty_default()({}, prefixCls + '-item-selected', selected));
            var itemStyle = {
                color: selected ? '#fff' : tintColor,
                backgroundColor: selected ? tintColor : 'transparent',
                borderColor: tintColor
            };
            var activeInnerStyle = tintColor ? {
                backgroundColor: tintColor
            } : {};
            return react["createElement"](
                es_TouchFeedback,
                { key: idx, disabled: disabled, activeClassName: prefixCls + '-item-active' },
                react["createElement"](
                    'div',
                    { className: itemCls, style: itemStyle, role: 'tab', 'aria-selected': selected && !disabled, 'aria-disabled': disabled, onClick: disabled ? undefined : function (e) {
                            return _this2.onClick(e, idx, value);
                        } },
                    react["createElement"]('div', { className: prefixCls + '-item-inner', style: activeInnerStyle }),
                    value
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props3 = this.props,
                className = _props3.className,
                prefixCls = _props3.prefixCls,
                style = _props3.style,
                disabled = _props3.disabled,
                _props3$values = _props3.values,
                values = _props3$values === undefined ? [] : _props3$values;

            var wrapCls = classnames_default()(className, prefixCls, defineProperty_default()({}, prefixCls + '-disabled', disabled));
            return react["createElement"](
                'div',
                { className: wrapCls, style: style, role: 'tablist' },
                values.map(function (value, idx) {
                    return (
                        // tslint:disable-next-line:jsx-no-multiline-js
                        _this3.renderSegmentItem(idx, value, idx === _this3.state.selectedIndex)
                    );
                })
            );
        }
    }]);

    return SegmentedControl;
}(react["Component"]);

/* harmony default export */ var segmented_control = (segmented_control_SegmentedControl);

segmented_control_SegmentedControl.defaultProps = {
    prefixCls: 'am-segment',
    selectedIndex: 0,
    disabled: false,
    values: [],
    onChange: function onChange() {},
    onValueChange: function onValueChange() {},

    style: {},
    tintColor: ''
};
// CONCATENATED MODULE: ./node_modules/rc-slider/es/common/Track.js

/* eslint-disable react/prop-types */


var Track_Track = function Track(props) {
  var className = props.className,
      included = props.included,
      vertical = props.vertical,
      offset = props.offset,
      length = props.length,
      style = props.style;


  var positonStyle = vertical ? {
    bottom: offset + '%',
    height: length + '%'
  } : {
    left: offset + '%',
    width: length + '%'
  };

  var elStyle = extends_default()({
    visibility: included ? 'visible' : 'hidden'
  }, style, positonStyle);
  return react_default.a.createElement('div', { className: className, style: elStyle });
};

/* harmony default export */ var common_Track = (Track_Track);
// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/get.js
var get = __webpack_require__("tfYw");
var get_default = /*#__PURE__*/__webpack_require__.n(get);

// CONCATENATED MODULE: ./node_modules/rc-slider/es/common/Steps.js






var Steps_calcPoints = function calcPoints(vertical, marks, dots, step, min, max) {
  browser_default()(dots ? step > 0 : true, '`Slider[step]` should be a positive number in order to make Slider[dots] work.');
  var points = Object.keys(marks).map(parseFloat);
  if (dots) {
    for (var i = min; i <= max; i = i + step) {
      if (points.indexOf(i) >= 0) continue;
      points.push(i);
    }
  }
  return points;
};

var Steps_Steps = function Steps(_ref) {
  var prefixCls = _ref.prefixCls,
      vertical = _ref.vertical,
      marks = _ref.marks,
      dots = _ref.dots,
      step = _ref.step,
      included = _ref.included,
      lowerBound = _ref.lowerBound,
      upperBound = _ref.upperBound,
      max = _ref.max,
      min = _ref.min,
      dotStyle = _ref.dotStyle,
      activeDotStyle = _ref.activeDotStyle;

  var range = max - min;
  var elements = Steps_calcPoints(vertical, marks, dots, step, min, max).map(function (point) {
    var _classNames;

    var offset = Math.abs(point - min) / range * 100 + '%';

    var isActived = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
    var style = vertical ? extends_default()({ bottom: offset }, dotStyle) : extends_default()({ left: offset }, dotStyle);
    if (isActived) {
      style = extends_default()({}, style, activeDotStyle);
    }

    var pointClassName = classnames_default()((_classNames = {}, defineProperty_default()(_classNames, prefixCls + '-dot', true), defineProperty_default()(_classNames, prefixCls + '-dot-active', isActived), _classNames));

    return react_default.a.createElement('span', { className: pointClassName, style: style, key: point });
  });

  return react_default.a.createElement(
    'div',
    { className: prefixCls + '-step' },
    elements
  );
};

/* harmony default export */ var common_Steps = (Steps_Steps);
// CONCATENATED MODULE: ./node_modules/rc-slider/es/common/Marks.js






var Marks_Marks = function Marks(_ref) {
  var className = _ref.className,
      vertical = _ref.vertical,
      marks = _ref.marks,
      included = _ref.included,
      upperBound = _ref.upperBound,
      lowerBound = _ref.lowerBound,
      max = _ref.max,
      min = _ref.min;

  var marksKeys = Object.keys(marks);
  var marksCount = marksKeys.length;
  var unit = marksCount > 1 ? 100 / (marksCount - 1) : 100;
  var markWidth = unit * 0.9;

  var range = max - min;
  var elements = marksKeys.map(parseFloat).sort(function (a, b) {
    return a - b;
  }).map(function (point) {
    var _classNames;

    var isActive = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
    var markClassName = classnames_default()((_classNames = {}, defineProperty_default()(_classNames, className + '-text', true), defineProperty_default()(_classNames, className + '-text-active', isActive), _classNames));

    var bottomStyle = {
      marginBottom: '-50%',
      bottom: (point - min) / range * 100 + '%'
    };

    var leftStyle = {
      width: markWidth + '%',
      marginLeft: -markWidth / 2 + '%',
      left: (point - min) / range * 100 + '%'
    };

    var style = vertical ? bottomStyle : leftStyle;

    var markPoint = marks[point];
    var markPointIsObject = (typeof markPoint === 'undefined' ? 'undefined' : typeof_default()(markPoint)) === 'object' && !react_default.a.isValidElement(markPoint);
    var markLabel = markPointIsObject ? markPoint.label : markPoint;
    var markStyle = markPointIsObject ? extends_default()({}, style, markPoint.style) : style;
    return react_default.a.createElement(
      'span',
      {
        className: markClassName,
        style: markStyle,
        key: point
      },
      markLabel
    );
  });

  return react_default.a.createElement(
    'div',
    { className: className },
    elements
  );
};

/* harmony default export */ var common_Marks = (Marks_Marks);
// CONCATENATED MODULE: ./node_modules/rc-slider/es/Handle.js









var Handle_Handle = function (_React$Component) {
  inherits_default()(Handle, _React$Component);

  function Handle() {
    classCallCheck_default()(this, Handle);

    return possibleConstructorReturn_default()(this, (Handle.__proto__ || Object.getPrototypeOf(Handle)).apply(this, arguments));
  }

  createClass_default()(Handle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          vertical = _props.vertical,
          offset = _props.offset,
          style = _props.style,
          disabled = _props.disabled,
          min = _props.min,
          max = _props.max,
          value = _props.value,
          restProps = objectWithoutProperties_default()(_props, ['className', 'vertical', 'offset', 'style', 'disabled', 'min', 'max', 'value']);

      var postionStyle = vertical ? { bottom: offset + '%' } : { left: offset + '%' };
      var elStyle = extends_default()({}, style, postionStyle);
      var ariaProps = {};
      if (value !== undefined) {
        ariaProps = extends_default()({}, ariaProps, {
          'aria-valuemin': min,
          'aria-valuemax': max,
          'aria-valuenow': value,
          'aria-disabled': !!disabled
        });
      }
      return react_default.a.createElement('div', extends_default()({
        role: 'slider'
      }, ariaProps, restProps, {
        className: className,
        style: elStyle
      }));
    }
  }]);

  return Handle;
}(react_default.a.Component);

/* harmony default export */ var es_Handle = (Handle_Handle);


Handle_Handle.propTypes = {
  className: prop_types_default.a.string,
  vertical: prop_types_default.a.bool,
  offset: prop_types_default.a.number,
  style: prop_types_default.a.object,
  disabled: prop_types_default.a.bool,
  min: prop_types_default.a.number,
  max: prop_types_default.a.number,
  value: prop_types_default.a.number
};
// CONCATENATED MODULE: ./node_modules/rc-slider/es/utils.js



function isEventFromHandle(e, handles) {
  return Object.keys(handles).some(function (key) {
    return e.target === Object(react_dom["findDOMNode"])(handles[key]);
  });
}

function isValueOutOfRange(value, _ref) {
  var min = _ref.min,
      max = _ref.max;

  return value < min || value > max;
}

function isNotTouchEvent(e) {
  return e.touches.length > 1 || e.type.toLowerCase() === 'touchend' && e.touches.length > 0;
}

function getClosestPoint(val, _ref2) {
  var marks = _ref2.marks,
      step = _ref2.step,
      min = _ref2.min;

  var points = Object.keys(marks).map(parseFloat);
  if (step !== null) {
    var closestStep = Math.round((val - min) / step) * step + min;
    points.push(closestStep);
  }
  var diffs = points.map(function (point) {
    return Math.abs(val - point);
  });
  return points[diffs.indexOf(Math.min.apply(Math, toConsumableArray_default()(diffs)))];
}

function getPrecision(step) {
  var stepString = step.toString();
  var precision = 0;
  if (stepString.indexOf('.') >= 0) {
    precision = stepString.length - stepString.indexOf('.') - 1;
  }
  return precision;
}

function getMousePosition(vertical, e) {
  return vertical ? e.clientY : e.pageX;
}

function getTouchPosition(vertical, e) {
  return vertical ? e.touches[0].clientY : e.touches[0].pageX;
}

function getHandleCenterPosition(vertical, handle) {
  var coords = handle.getBoundingClientRect();
  return vertical ? coords.top + coords.height * 0.5 : coords.left + coords.width * 0.5;
}

function ensureValueInRange(val, _ref3) {
  var max = _ref3.max,
      min = _ref3.min;

  if (val <= min) {
    return min;
  }
  if (val >= max) {
    return max;
  }
  return val;
}

function ensureValuePrecision(val, props) {
  var step = props.step;

  var closestPoint = getClosestPoint(val, props);
  return step === null ? closestPoint : parseFloat(closestPoint.toFixed(getPrecision(step)));
}

function pauseEvent(e) {
  e.stopPropagation();
  e.preventDefault();
}
// CONCATENATED MODULE: ./node_modules/rc-slider/es/common/createSlider.js


















function createSlider_noop() {}

function createSlider(Component) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    inherits_default()(ComponentEnhancer, _Component);

    function ComponentEnhancer(props) {
      classCallCheck_default()(this, ComponentEnhancer);

      var _this = possibleConstructorReturn_default()(this, (ComponentEnhancer.__proto__ || Object.getPrototypeOf(ComponentEnhancer)).call(this, props));

      _this.onMouseDown = function (e) {
        if (e.button !== 0) {
          return;
        }

        var isVertical = _this.props.vertical;
        var position = getMousePosition(isVertical, e);
        if (!isEventFromHandle(e, _this.handlesRefs)) {
          _this.dragOffset = 0;
        } else {
          var handlePosition = getHandleCenterPosition(isVertical, e.target);
          _this.dragOffset = position - handlePosition;
          position = handlePosition;
        }
        _this.onStart(position);
        _this.addDocumentMouseEvents();
        pauseEvent(e);
      };

      _this.onTouchStart = function (e) {
        if (isNotTouchEvent(e)) return;

        var isVertical = _this.props.vertical;
        var position = getTouchPosition(isVertical, e);
        if (!isEventFromHandle(e, _this.handlesRefs)) {
          _this.dragOffset = 0;
        } else {
          var handlePosition = getHandleCenterPosition(isVertical, e.target);
          _this.dragOffset = position - handlePosition;
          position = handlePosition;
        }
        _this.onStart(position);
        _this.addDocumentTouchEvents();
        pauseEvent(e);
      };

      _this.onMouseMove = function (e) {
        if (!_this.sliderRef) {
          _this.onEnd();
          return;
        }
        var position = getMousePosition(_this.props.vertical, e);
        _this.onMove(e, position - _this.dragOffset);
      };

      _this.onTouchMove = function (e) {
        if (isNotTouchEvent(e) || !_this.sliderRef) {
          _this.onEnd();
          return;
        }

        var position = getTouchPosition(_this.props.vertical, e);
        _this.onMove(e, position - _this.dragOffset);
      };

      _this.saveSlider = function (slider) {
        _this.sliderRef = slider;
      };

      if (false) { var step, max, min; }
      _this.handlesRefs = {};
      return _this;
    }

    createClass_default()(ComponentEnhancer, [{
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (get_default()(ComponentEnhancer.prototype.__proto__ || Object.getPrototypeOf(ComponentEnhancer.prototype), 'componentWillUnmount', this)) get_default()(ComponentEnhancer.prototype.__proto__ || Object.getPrototypeOf(ComponentEnhancer.prototype), 'componentWillUnmount', this).call(this);
        this.removeDocumentEvents();
      }
    }, {
      key: 'addDocumentTouchEvents',
      value: function addDocumentTouchEvents() {
                this.onTouchMoveListener = addEventListenerWrap(document, 'touchmove', this.onTouchMove);
        this.onTouchUpListener = addEventListenerWrap(document, 'touchend', this.onEnd);
      }
    }, {
      key: 'addDocumentMouseEvents',
      value: function addDocumentMouseEvents() {
        this.onMouseMoveListener = addEventListenerWrap(document, 'mousemove', this.onMouseMove);
        this.onMouseUpListener = addEventListenerWrap(document, 'mouseup', this.onEnd);
      }
    }, {
      key: 'removeDocumentEvents',
      value: function removeDocumentEvents() {
        
        this.onTouchMoveListener && this.onTouchMoveListener.remove();
        this.onTouchUpListener && this.onTouchUpListener.remove();

        this.onMouseMoveListener && this.onMouseMoveListener.remove();
        this.onMouseUpListener && this.onMouseUpListener.remove();
        
      }
    }, {
      key: 'getSliderStart',
      value: function getSliderStart() {
        var slider = this.sliderRef;
        var rect = slider.getBoundingClientRect();

        return this.props.vertical ? rect.top : rect.left;
      }
    }, {
      key: 'getSliderLength',
      value: function getSliderLength() {
        var slider = this.sliderRef;
        if (!slider) {
          return 0;
        }

        var coords = slider.getBoundingClientRect();
        return this.props.vertical ? coords.height : coords.width;
      }
    }, {
      key: 'calcValue',
      value: function calcValue(offset) {
        var _props = this.props,
            vertical = _props.vertical,
            min = _props.min,
            max = _props.max;

        var ratio = Math.abs(Math.max(offset, 0) / this.getSliderLength());
        var value = vertical ? (1 - ratio) * (max - min) + min : ratio * (max - min) + min;
        return value;
      }
    }, {
      key: 'calcValueByPos',
      value: function calcValueByPos(position) {
        var pixelOffset = position - this.getSliderStart();
        var nextValue = this.trimAlignValue(this.calcValue(pixelOffset));
        return nextValue;
      }
    }, {
      key: 'calcOffset',
      value: function calcOffset(value) {
        var _props2 = this.props,
            min = _props2.min,
            max = _props2.max;

        var ratio = (value - min) / (max - min);
        return ratio * 100;
      }
    }, {
      key: 'saveHandle',
      value: function saveHandle(index, handle) {
        this.handlesRefs[index] = handle;
      }
    }, {
      key: 'render',
      value: function render() {
        var _classNames;

        var _props3 = this.props,
            prefixCls = _props3.prefixCls,
            className = _props3.className,
            marks = _props3.marks,
            dots = _props3.dots,
            step = _props3.step,
            included = _props3.included,
            disabled = _props3.disabled,
            vertical = _props3.vertical,
            min = _props3.min,
            max = _props3.max,
            children = _props3.children,
            maximumTrackStyle = _props3.maximumTrackStyle,
            style = _props3.style,
            railStyle = _props3.railStyle,
            dotStyle = _props3.dotStyle,
            activeDotStyle = _props3.activeDotStyle;

        var _get$call = get_default()(ComponentEnhancer.prototype.__proto__ || Object.getPrototypeOf(ComponentEnhancer.prototype), 'render', this).call(this),
            tracks = _get$call.tracks,
            handles = _get$call.handles;

        var sliderClassName = classnames_default()(prefixCls, (_classNames = {}, defineProperty_default()(_classNames, prefixCls + '-with-marks', Object.keys(marks).length), defineProperty_default()(_classNames, prefixCls + '-disabled', disabled), defineProperty_default()(_classNames, prefixCls + '-vertical', vertical), defineProperty_default()(_classNames, className, className), _classNames));
        return react_default.a.createElement(
          'div',
          {
            ref: this.saveSlider,
            className: sliderClassName,
            onTouchStart: disabled ? createSlider_noop : this.onTouchStart,
            onMouseDown: disabled ? createSlider_noop : this.onMouseDown,
            style: style
          },
          react_default.a.createElement('div', {
            className: prefixCls + '-rail',
            style: extends_default()({}, maximumTrackStyle, railStyle)
          }),
          tracks,
          react_default.a.createElement(common_Steps, {
            prefixCls: prefixCls,
            vertical: vertical,
            marks: marks,
            dots: dots,
            step: step,
            included: included,
            lowerBound: this.getLowerBound(),
            upperBound: this.getUpperBound(),
            max: max,
            min: min,
            dotStyle: dotStyle,
            activeDotStyle: activeDotStyle
          }),
          handles,
          react_default.a.createElement(common_Marks, {
            className: prefixCls + '-mark',
            vertical: vertical,
            marks: marks,
            included: included,
            lowerBound: this.getLowerBound(),
            upperBound: this.getUpperBound(),
            max: max,
            min: min
          }),
          children
        );
      }
    }]);

    return ComponentEnhancer;
  }(Component), _class.displayName = 'ComponentEnhancer(' + Component.displayName + ')', _class.propTypes = extends_default()({}, Component.propTypes, {
    min: prop_types_default.a.number,
    max: prop_types_default.a.number,
    step: prop_types_default.a.number,
    marks: prop_types_default.a.object,
    included: prop_types_default.a.bool,
    className: prop_types_default.a.string,
    prefixCls: prop_types_default.a.string,
    disabled: prop_types_default.a.bool,
    children: prop_types_default.a.any,
    onBeforeChange: prop_types_default.a.func,
    onChange: prop_types_default.a.func,
    onAfterChange: prop_types_default.a.func,
    handle: prop_types_default.a.func,
    dots: prop_types_default.a.bool,
    vertical: prop_types_default.a.bool,
    style: prop_types_default.a.object,
    minimumTrackStyle: prop_types_default.a.object,     maximumTrackStyle: prop_types_default.a.object,     handleStyle: prop_types_default.a.oneOfType([prop_types_default.a.object, prop_types_default.a.arrayOf(prop_types_default.a.object)]),
    trackStyle: prop_types_default.a.oneOfType([prop_types_default.a.object, prop_types_default.a.arrayOf(prop_types_default.a.object)]),
    railStyle: prop_types_default.a.object,
    dotStyle: prop_types_default.a.object,
    activeDotStyle: prop_types_default.a.object
  }), _class.defaultProps = extends_default()({}, Component.defaultProps, {
    prefixCls: 'rc-slider',
    className: '',
    min: 0,
    max: 100,
    step: 1,
    marks: {},
    handle: function handle(_ref) {
      var index = _ref.index,
          restProps = objectWithoutProperties_default()(_ref, ['index']);

      delete restProps.dragging;
      return react_default.a.createElement(es_Handle, extends_default()({}, restProps, { key: index }));
    },

    onBeforeChange: createSlider_noop,
    onChange: createSlider_noop,
    onAfterChange: createSlider_noop,
    included: true,
    disabled: false,
    dots: false,
    vertical: false,
    trackStyle: [{}],
    handleStyle: [{}],
    railStyle: {},
    dotStyle: {},
    activeDotStyle: {}
  }), _temp;
}
// CONCATENATED MODULE: ./node_modules/rc-slider/es/Slider.js





/* eslint-disable react/prop-types */







var Slider_Slider = function (_React$Component) {
  inherits_default()(Slider, _React$Component);

  function Slider(props) {
    classCallCheck_default()(this, Slider);

    var _this = possibleConstructorReturn_default()(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

    _this.onEnd = function () {
      _this.setState({ dragging: false });
      _this.removeDocumentEvents();
      _this.props.onAfterChange(_this.getValue());
    };

    var defaultValue = props.defaultValue !== undefined ? props.defaultValue : props.min;
    var value = props.value !== undefined ? props.value : defaultValue;

    _this.state = {
      value: _this.trimAlignValue(value),
      dragging: false
    };
    if (false) {}
    return _this;
  }

  createClass_default()(Slider, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!('value' in nextProps || 'min' in nextProps || 'max' in nextProps)) return;

      var prevValue = this.state.value;
      var value = nextProps.value !== undefined ? nextProps.value : prevValue;
      var nextValue = this.trimAlignValue(value, nextProps);
      if (nextValue === prevValue) return;

      this.setState({ value: nextValue });
      if (isValueOutOfRange(value, nextProps)) {
        this.props.onChange(nextValue);
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      var props = this.props;
      var isNotControlled = !('value' in props);
      if (isNotControlled) {
        this.setState(state);
      }

      var changedValue = state.value;
      props.onChange(changedValue);
    }
  }, {
    key: 'onStart',
    value: function onStart(position) {
      this.setState({ dragging: true });
      var props = this.props;
      var prevValue = this.getValue();
      props.onBeforeChange(prevValue);

      var value = this.calcValueByPos(position);
      this.startValue = value;
      this.startPosition = position;

      if (value === prevValue) return;

      this.onChange({ value: value });
    }
  }, {
    key: 'onMove',
    value: function onMove(e, position) {
      pauseEvent(e);
      var state = this.state;
      var value = this.calcValueByPos(position);
      var oldValue = state.value;
      if (value === oldValue) return;

      this.onChange({ value: value });
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.state.value;
    }
  }, {
    key: 'getLowerBound',
    value: function getLowerBound() {
      return this.props.min;
    }
  }, {
    key: 'getUpperBound',
    value: function getUpperBound() {
      return this.state.value;
    }
  }, {
    key: 'trimAlignValue',
    value: function trimAlignValue(v) {
      var nextProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var mergedProps = extends_default()({}, this.props, nextProps);
      var val = ensureValueInRange(v, mergedProps);
      return ensureValuePrecision(val, mergedProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          prefixCls = _props.prefixCls,
          vertical = _props.vertical,
          included = _props.included,
          disabled = _props.disabled,
          minimumTrackStyle = _props.minimumTrackStyle,
          trackStyle = _props.trackStyle,
          handleStyle = _props.handleStyle,
          min = _props.min,
          max = _props.max,
          handleGenerator = _props.handle;
      var _state = this.state,
          value = _state.value,
          dragging = _state.dragging;

      var offset = this.calcOffset(value);
      var handle = handleGenerator({
        className: prefixCls + '-handle',
        vertical: vertical,
        offset: offset,
        value: value,
        dragging: dragging,
        disabled: disabled,
        min: min,
        max: max,
        style: handleStyle[0] || handleStyle,
        ref: function ref(h) {
          return _this2.saveHandle(0, h);
        }
      });

      var _trackStyle = trackStyle[0] || trackStyle;
      var track = react_default.a.createElement(common_Track, {
        className: prefixCls + '-track',
        vertical: vertical,
        included: included,
        offset: 0,
        length: offset,
        style: extends_default()({}, minimumTrackStyle, _trackStyle)
      });

      return { tracks: track, handles: handle };
    }
  }]);

  return Slider;
}(react_default.a.Component);

Slider_Slider.propTypes = {
  defaultValue: prop_types_default.a.number,
  value: prop_types_default.a.number,
  disabled: prop_types_default.a.bool
};


/* harmony default export */ var es_Slider = (createSlider(Slider_Slider));
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/slider/index.js







var slider_Slider = function (_React$Component) {
    inherits_default()(Slider, _React$Component);

    function Slider() {
        classCallCheck_default()(this, Slider);

        return possibleConstructorReturn_default()(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).apply(this, arguments));
    }

    createClass_default()(Slider, [{
        key: 'render',
        value: function render() {
            return react["createElement"](
                'div',
                { className: this.props.prefixCls + '-wrapper' },
                react["createElement"](es_Slider, this.props)
            );
        }
    }]);

    return Slider;
}(react["Component"]);

/* harmony default export */ var slider = (slider_Slider);

slider_Slider.defaultProps = {
    prefixCls: 'am-slider'
};
// EXTERNAL MODULE: ./node_modules/shallowequal/index.js
var shallowequal = __webpack_require__("Gytx");
var shallowequal_default = /*#__PURE__*/__webpack_require__.n(shallowequal);

// CONCATENATED MODULE: ./node_modules/rc-slider/es/Range.js







/* eslint-disable react/prop-types */








var Range_Range = function (_React$Component) {
  inherits_default()(Range, _React$Component);

  function Range(props) {
    classCallCheck_default()(this, Range);

    var _this = possibleConstructorReturn_default()(this, (Range.__proto__ || Object.getPrototypeOf(Range)).call(this, props));

    _this.onEnd = function () {
      _this.setState({ handle: null });
      _this.removeDocumentEvents();
      _this.props.onAfterChange(_this.getValue());
    };

    var count = props.count,
        min = props.min,
        max = props.max;

    var initialValue = Array.apply(null, Array(count + 1)).map(function () {
      return min;
    });
    var defaultValue = 'defaultValue' in props ? props.defaultValue : initialValue;
    var value = props.value !== undefined ? props.value : defaultValue;
    var bounds = value.map(function (v) {
      return _this.trimAlignValue(v);
    });
    var recent = bounds[0] === max ? 0 : bounds.length - 1;

    _this.state = {
      handle: null,
      recent: recent,
      bounds: bounds
    };
    return _this;
  }

  createClass_default()(Range, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (!('value' in nextProps || 'min' in nextProps || 'max' in nextProps)) return;
      if (this.props.min === nextProps.min && this.props.max === nextProps.max && shallowequal_default()(this.props.value, nextProps.value)) {
        return;
      }
      var bounds = this.state.bounds;

      var value = nextProps.value || bounds;
      var nextBounds = value.map(function (v) {
        return _this2.trimAlignValue(v, nextProps);
      });
      if (nextBounds.length === bounds.length && nextBounds.every(function (v, i) {
        return v === bounds[i];
      })) return;

      this.setState({ bounds: nextBounds });
      if (bounds.some(function (v) {
        return isValueOutOfRange(v, nextProps);
      })) {
        this.props.onChange(nextBounds);
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      var props = this.props;
      var isNotControlled = !('value' in props);
      if (isNotControlled) {
        this.setState(state);
      } else if (state.handle !== undefined) {
        this.setState({ handle: state.handle });
      }

      var data = extends_default()({}, this.state, state);
      var changedValue = data.bounds;
      props.onChange(changedValue);
    }
  }, {
    key: 'onStart',
    value: function onStart(position) {
      var props = this.props;
      var state = this.state;
      var bounds = this.getValue();
      props.onBeforeChange(bounds);

      var value = this.calcValueByPos(position);
      this.startValue = value;
      this.startPosition = position;

      var closestBound = this.getClosestBound(value);
      var boundNeedMoving = this.getBoundNeedMoving(value, closestBound);

      this.setState({
        handle: boundNeedMoving,
        recent: boundNeedMoving
      });

      var prevValue = bounds[boundNeedMoving];
      if (value === prevValue) return;

      var nextBounds = [].concat(toConsumableArray_default()(state.bounds));
      nextBounds[boundNeedMoving] = value;
      this.onChange({ bounds: nextBounds });
    }
  }, {
    key: 'onMove',
    value: function onMove(e, position) {
      pauseEvent(e);
      var props = this.props;
      var state = this.state;

      var value = this.calcValueByPos(position);
      var oldValue = state.bounds[state.handle];
      if (value === oldValue) return;

      var nextBounds = [].concat(toConsumableArray_default()(state.bounds));
      nextBounds[state.handle] = value;
      var nextHandle = state.handle;
      if (props.pushable !== false) {
        var originalValue = state.bounds[nextHandle];
        this.pushSurroundingHandles(nextBounds, nextHandle, originalValue);
      } else if (props.allowCross) {
        nextBounds.sort(function (a, b) {
          return a - b;
        });
        nextHandle = nextBounds.indexOf(value);
      }
      this.onChange({
        handle: nextHandle,
        bounds: nextBounds
      });
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.state.bounds;
    }
  }, {
    key: 'getClosestBound',
    value: function getClosestBound(value) {
      var bounds = this.state.bounds;

      var closestBound = 0;
      for (var i = 1; i < bounds.length - 1; ++i) {
        if (value > bounds[i]) {
          closestBound = i;
        }
      }
      if (Math.abs(bounds[closestBound + 1] - value) < Math.abs(bounds[closestBound] - value)) {
        closestBound = closestBound + 1;
      }
      return closestBound;
    }
  }, {
    key: 'getBoundNeedMoving',
    value: function getBoundNeedMoving(value, closestBound) {
      var _state = this.state,
          bounds = _state.bounds,
          recent = _state.recent;

      var boundNeedMoving = closestBound;
      var isAtTheSamePoint = bounds[closestBound + 1] === bounds[closestBound];
      if (isAtTheSamePoint) {
        boundNeedMoving = recent;
      }

      if (isAtTheSamePoint && value !== bounds[closestBound + 1]) {
        boundNeedMoving = value < bounds[closestBound + 1] ? closestBound : closestBound + 1;
      }
      return boundNeedMoving;
    }
  }, {
    key: 'getLowerBound',
    value: function getLowerBound() {
      return this.state.bounds[0];
    }
  }, {
    key: 'getUpperBound',
    value: function getUpperBound() {
      var bounds = this.state.bounds;

      return bounds[bounds.length - 1];
    }

    /**
     * Returns an array of possible slider points, taking into account both
     * `marks` and `step`. The result is cached.
     */

  }, {
    key: 'getPoints',
    value: function getPoints() {
      var _props = this.props,
          marks = _props.marks,
          step = _props.step,
          min = _props.min,
          max = _props.max;

      var cache = this._getPointsCache;
      if (!cache || cache.marks !== marks || cache.step !== step) {
        var pointsObject = extends_default()({}, marks);
        if (step !== null) {
          for (var point = min; point <= max; point += step) {
            pointsObject[point] = point;
          }
        }
        var points = Object.keys(pointsObject).map(parseFloat);
        points.sort(function (a, b) {
          return a - b;
        });
        this._getPointsCache = { marks: marks, step: step, points: points };
      }
      return this._getPointsCache.points;
    }
  }, {
    key: 'pushSurroundingHandles',
    value: function pushSurroundingHandles(bounds, handle, originalValue) {
      var threshold = this.props.pushable;

      var value = bounds[handle];

      var direction = 0;
      if (bounds[handle + 1] - value < threshold) {
        direction = +1; // push to right
      }
      if (value - bounds[handle - 1] < threshold) {
        direction = -1; // push to left
      }

      if (direction === 0) {
        return;
      }

      var nextHandle = handle + direction;
      var diffToNext = direction * (bounds[nextHandle] - value);
      if (!this.pushHandle(bounds, nextHandle, direction, threshold - diffToNext)) {
        // revert to original value if pushing is impossible
        bounds[handle] = originalValue;
      }
    }
  }, {
    key: 'pushHandle',
    value: function pushHandle(bounds, handle, direction, amount) {
      var originalValue = bounds[handle];
      var currentValue = bounds[handle];
      while (direction * (currentValue - originalValue) < amount) {
        if (!this.pushHandleOnePoint(bounds, handle, direction)) {
          // can't push handle enough to create the needed `amount` gap, so we
          // revert its position to the original value
          bounds[handle] = originalValue;
          return false;
        }
        currentValue = bounds[handle];
      }
      // the handle was pushed enough to create the needed `amount` gap
      return true;
    }
  }, {
    key: 'pushHandleOnePoint',
    value: function pushHandleOnePoint(bounds, handle, direction) {
      var points = this.getPoints();
      var pointIndex = points.indexOf(bounds[handle]);
      var nextPointIndex = pointIndex + direction;
      if (nextPointIndex >= points.length || nextPointIndex < 0) {
        // reached the minimum or maximum available point, can't push anymore
        return false;
      }
      var nextHandle = handle + direction;
      var nextValue = points[nextPointIndex];
      var threshold = this.props.pushable;

      var diffToNext = direction * (bounds[nextHandle] - nextValue);
      if (!this.pushHandle(bounds, nextHandle, direction, threshold - diffToNext)) {
        // couldn't push next handle, so we won't push this one either
        return false;
      }
      // push the handle
      bounds[handle] = nextValue;
      return true;
    }
  }, {
    key: 'trimAlignValue',
    value: function trimAlignValue(v) {
      var nextProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var mergedProps = extends_default()({}, this.props, nextProps);
      var valInRange = ensureValueInRange(v, mergedProps);
      var valNotConflict = this.ensureValueNotConflict(valInRange, mergedProps);
      return ensureValuePrecision(valNotConflict, mergedProps);
    }
  }, {
    key: 'ensureValueNotConflict',
    value: function ensureValueNotConflict(val, _ref) {
      var allowCross = _ref.allowCross;

      var state = this.state || {};
      var handle = state.handle,
          bounds = state.bounds;
      /* eslint-disable eqeqeq */

      if (!allowCross && handle != null) {
        if (handle > 0 && val <= bounds[handle - 1]) {
          return bounds[handle - 1];
        }
        if (handle < bounds.length - 1 && val >= bounds[handle + 1]) {
          return bounds[handle + 1];
        }
      }
      /* eslint-enable eqeqeq */
      return val;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state2 = this.state,
          handle = _state2.handle,
          bounds = _state2.bounds;
      var _props2 = this.props,
          prefixCls = _props2.prefixCls,
          vertical = _props2.vertical,
          included = _props2.included,
          disabled = _props2.disabled,
          min = _props2.min,
          max = _props2.max,
          handleGenerator = _props2.handle,
          trackStyle = _props2.trackStyle,
          handleStyle = _props2.handleStyle;


      var offsets = bounds.map(function (v) {
        return _this3.calcOffset(v);
      });

      var handleClassName = prefixCls + '-handle';
      var handles = bounds.map(function (v, i) {
        var _classNames;

        return handleGenerator({
          className: classnames_default()((_classNames = {}, defineProperty_default()(_classNames, handleClassName, true), defineProperty_default()(_classNames, handleClassName + '-' + (i + 1), true), _classNames)),
          vertical: vertical,
          offset: offsets[i],
          value: v,
          dragging: handle === i,
          index: i,
          min: min,
          max: max,
          disabled: disabled,
          style: handleStyle[i],
          ref: function ref(h) {
            return _this3.saveHandle(i, h);
          }
        });
      });

      var tracks = bounds.slice(0, -1).map(function (_, index) {
        var _classNames2;

        var i = index + 1;
        var trackClassName = classnames_default()((_classNames2 = {}, defineProperty_default()(_classNames2, prefixCls + '-track', true), defineProperty_default()(_classNames2, prefixCls + '-track-' + i, true), _classNames2));
        return react_default.a.createElement(common_Track, {
          className: trackClassName,
          vertical: vertical,
          included: included,
          offset: offsets[i - 1],
          length: offsets[i] - offsets[i - 1],
          style: trackStyle[index],
          key: i
        });
      });

      return { tracks: tracks, handles: handles };
    }
  }]);

  return Range;
}(react_default.a.Component);

Range_Range.displayName = 'Range';
Range_Range.propTypes = {
  defaultValue: prop_types_default.a.arrayOf(prop_types_default.a.number),
  value: prop_types_default.a.arrayOf(prop_types_default.a.number),
  count: prop_types_default.a.number,
  pushable: prop_types_default.a.oneOfType([prop_types_default.a.bool, prop_types_default.a.number]),
  allowCross: prop_types_default.a.bool,
  disabled: prop_types_default.a.bool
};
Range_Range.defaultProps = {
  count: 1,
  allowCross: true,
  pushable: false
};


/* harmony default export */ var es_Range = (createSlider(Range_Range));
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/range/index.js







var range_Range = function (_React$Component) {
    inherits_default()(Range, _React$Component);

    function Range() {
        classCallCheck_default()(this, Range);

        return possibleConstructorReturn_default()(this, (Range.__proto__ || Object.getPrototypeOf(Range)).apply(this, arguments));
    }

    createClass_default()(Range, [{
        key: 'render',
        value: function render() {
            return react["createElement"](
                'div',
                { className: this.props.prefixCls + '-wrapper' },
                react["createElement"](es_Range, this.props)
            );
        }
    }]);

    return Range;
}(react["Component"]);

/* harmony default export */ var es_range = (range_Range);

range_Range.defaultProps = {
    prefixCls: 'am-slider'
};
// CONCATENATED MODULE: ./node_modules/rmc-input-number/es/base.js





function base_noop() {}
function defaultParser(input) {
    return input.replace(/[^\w\.-]+/g, '');
}
/**
 * When click and hold on a button - the speed of auto changin the value.
 */
var SPEED = 200;
/**
 * When click and hold on a button - the delay before auto changin the value.
 */
var DELAY = 600;
/**
 * Max Safe Integer -- on IE this is not available, so manually set the number in that case.
 * The reason this is used, instead of Infinity is because numbers above the MSI are unstable
 */
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;

var base_BaseComponent = function (_React$Component) {
    inherits_default()(BaseComponent, _React$Component);

    function BaseComponent(props) {
        classCallCheck_default()(this, BaseComponent);

        var _this = possibleConstructorReturn_default()(this, (BaseComponent.__proto__ || Object.getPrototypeOf(BaseComponent)).call(this, props));

        _this.onChange = function (e) {
            var _this$props = _this.props,
                parser = _this$props.parser,
                onChange = _this$props.onChange;

            var input = parser && parser(_this.getValueFromEvent(e).trim());
            _this.setState({ inputValue: input });
            onChange && onChange(_this.toNumberWhenUserInput(input)); // valid number or invalid string
        };
        _this.onFocus = function () {
            _this.setState({
                focused: true
            });
            var onFocus = _this.props.onFocus;

            onFocus && onFocus.apply(undefined, arguments);
        };
        _this.onBlur = function (e) {
            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }

            _this.setState({
                focused: false
            });
            var value = _this.getCurrentValidValue(_this.state.inputValue);
            e.persist(); // fix https://github.com/react-component/input-number/issues/51
            _this.setValue(value, function () {
                var onBlur = _this.props.onBlur;

                onBlur && onBlur.apply(undefined, [e].concat(args));
            });
        };
        _this.getCurrentValidValue = function (value) {
            var val = value;
            if (val === '') {
                val = '';
            } else if (!_this.isNotCompleteNumber(val)) {
                val = _this.getValidValue(val);
            } else {
                val = _this.state.value;
            }
            return _this.toNumber(val);
        };
        _this.getValidValue = function (value) {
            var val = parseFloat(value);
            // https://github.com/ant-design/ant-design/issues/7358
            if (isNaN(val)) {
                return value;
            }
            if (val < _this.props.min) {
                val = _this.props.min;
            }
            if (val > _this.props.max) {
                val = _this.props.max;
            }
            return val;
        };
        _this.setValue = function (v, callback) {
            // trigger onChange
            var newValue = _this.isNotCompleteNumber(parseFloat(v)) ? undefined : parseFloat(v);
            var changed = newValue !== _this.state.value || '' + newValue !== '' + _this.state.inputValue; // https://github.com/ant-design/ant-design/issues/7363
            if (!('value' in _this.props)) {
                _this.setState({
                    value: newValue,
                    inputValue: _this.toPrecisionAsStep(v)
                }, callback);
            } else {
                // always set input value same as value
                _this.setState({
                    inputValue: _this.toPrecisionAsStep(_this.state.value)
                }, callback);
            }
            if (changed) {
                var onChange = _this.props.onChange;

                onChange && onChange(newValue);
            }
        };
        _this.getPrecision = function (value) {
            if ('precision' in _this.props) {
                return _this.props.precision;
            }
            var valueString = value.toString();
            if (valueString.indexOf('e-') >= 0) {
                return parseInt(valueString.slice(valueString.indexOf('e-') + 2), 10);
            }
            var precision = 0;
            if (valueString.indexOf('.') >= 0) {
                precision = valueString.length - valueString.indexOf('.') - 1;
            }
            return precision;
        };
        // step={1.0} value={1.51}
        // press +
        // then value should be 2.51, rather than 2.5
        // if this.props.precision is undefined
        // https://github.com/react-component/input-number/issues/39
        _this.getMaxPrecision = function (currentValue) {
            var ratio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

            if ('precision' in _this.props) {
                return _this.props.precision;
            }
            var step = _this.props.step;

            var ratioPrecision = _this.getPrecision(ratio);
            var stepPrecision = _this.getPrecision(step);
            var currentValuePrecision = _this.getPrecision(currentValue);
            if (!currentValue) {
                return ratioPrecision + stepPrecision;
            }
            return Math.max(currentValuePrecision, ratioPrecision + stepPrecision);
        };
        _this.getPrecisionFactor = function (currentValue) {
            var ratio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

            var precision = _this.getMaxPrecision(currentValue, ratio);
            return Math.pow(10, precision);
        };
        _this.toPrecisionAsStep = function (num) {
            if (_this.isNotCompleteNumber(num) || num === '') {
                return num;
            }
            var precision = Math.abs(_this.getMaxPrecision(num));
            if (!isNaN(precision)) {
                return Number(num).toFixed(precision);
            }
            return num.toString();
        };
        // '1.' '1x' 'xx' '' => are not complete numbers
        _this.isNotCompleteNumber = function (num) {
            return isNaN(num) || num === '' || num === null || num && num.toString().indexOf('.') === num.toString().length - 1;
        };
        _this.toNumber = function (num) {
            if (_this.isNotCompleteNumber(num)) {
                return num;
            }
            if ('precision' in _this.props) {
                return Number(Number(num).toFixed(_this.props.precision));
            }
            return Number(num);
        };
        // '1.0' '1.00'  => may be a inputing number
        _this.toNumberWhenUserInput = function (num) {
            // num.length > 16 => prevent input large number will became Infinity
            if ((/\.\d*0$/.test(num) || num.length > 16) && _this.state.focused) {
                return num;
            }
            return _this.toNumber(num);
        };
        _this.stepCompute = function (type, val, rat) {
            var _this$props2 = _this.props,
                step = _this$props2.step,
                min = _this$props2.min;

            var precisionFactor = _this.getPrecisionFactor(val, rat);
            var precision = Math.abs(_this.getMaxPrecision(val, rat));
            var result = void 0;
            var direct = type === 'up' ? 1 : -1;
            if (typeof val === 'number') {
                result = ((precisionFactor * val + direct * precisionFactor * +step * rat) / precisionFactor).toFixed(precision);
            } else {
                result = min === -Infinity ? direct * +step : min;
            }
            return _this.toNumber(result);
        };
        _this.step = function (type, e) {
            var ratio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

            if (e) {
                e.preventDefault();
            }
            var props = _this.props;
            if (props.disabled) {
                return false;
            }
            var value = _this.getCurrentValidValue(_this.state.inputValue) || 0;
            if (_this.isNotCompleteNumber(value)) {
                return false;
            }
            var val = _this.stepCompute(type, value, ratio);
            var outOfRange = val > props.max || val < props.min;
            if (val > props.max) {
                val = props.max;
            } else if (val < props.min) {
                val = props.min;
            }
            _this.setValue(val);
            _this.setState({
                focused: true
            });
            return !outOfRange;
        };
        _this.stop = function () {
            if (_this.autoStepTimer) {
                clearTimeout(_this.autoStepTimer);
            }
        };
        _this.action = function (type, e, ratio, recursive) {
            if (e.persist) {
                e.persist();
            }
            _this.stop();
            if (_this.step(type, e, ratio)) {
                _this.autoStepTimer = setTimeout(function () {
                    _this.action(type, e, ratio, true);
                }, recursive ? SPEED : DELAY);
            }
        };
        _this.down = function (e, ratio, recursive) {
            _this.action('down', e, ratio, recursive);
        };
        _this.up = function (e, ratio, recursive) {
            _this.action('up', e, ratio, recursive);
        };
        var value = void 0;
        if ('value' in props) {
            value = props.value;
        } else {
            value = props.defaultValue;
        }
        value = _this.toNumber(value);
        _this.state = {
            inputValue: _this.toPrecisionAsStep(value),
            value: value,
            focused: props.autoFocus
        };
        return _this;
    }

    createClass_default()(BaseComponent, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('value' in nextProps) {
                var value = this.state.focused ? nextProps.value : this.getValidValue(nextProps.value);
                this.setState({
                    value: value,
                    inputValue: value
                });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.stop();
        }
    }]);

    return BaseComponent;
}(react_default.a.Component);

/* harmony default export */ var base = (base_BaseComponent);

base_BaseComponent.defaultProps = {
    max: MAX_SAFE_INTEGER,
    min: -MAX_SAFE_INTEGER,
    step: 1,
    style: {},
    onChange: base_noop,
    onFocus: base_noop,
    onBlur: base_noop,
    parser: defaultParser
};
;
// CONCATENATED MODULE: ./node_modules/rmc-input-number/es/InputHandler.js




var InputHandler_rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};



var InputHandler_InputHandler = function (_Component) {
    inherits_default()(InputHandler, _Component);

    function InputHandler() {
        classCallCheck_default()(this, InputHandler);

        return possibleConstructorReturn_default()(this, (InputHandler.__proto__ || Object.getPrototypeOf(InputHandler)).apply(this, arguments));
    }

    createClass_default()(InputHandler, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                prefixCls = _a.prefixCls,
                disabled = _a.disabled,
                otherProps = InputHandler_rest(_a, ["prefixCls", "disabled"]);
            return react_default.a.createElement(
                es_TouchFeedback,
                { disabled: disabled, activeClassName: prefixCls + '-handler-active' },
                react_default.a.createElement('span', otherProps)
            );
        }
    }]);

    return InputHandler;
}(react["Component"]);

/* harmony default export */ var es_InputHandler = (InputHandler_InputHandler);
// CONCATENATED MODULE: ./node_modules/rmc-input-number/es/index.js










function rmc_input_number_es_noop() {}
function preventDefault(e) {
    e.preventDefault();
}

var es_InputNumber = function (_BaseComponent) {
    inherits_default()(InputNumber, _BaseComponent);

    function InputNumber() {
        classCallCheck_default()(this, InputNumber);

        var _this = possibleConstructorReturn_default()(this, (InputNumber.__proto__ || Object.getPrototypeOf(InputNumber)).apply(this, arguments));

        _this.setInput = function (input) {
            _this.input = input;
        };
        return _this;
    }

    createClass_default()(InputNumber, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.componentDidUpdate();
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate() {
            try {
                this.start = this.input.selectionStart;
                this.end = this.input.selectionEnd;
            } catch (e) {
                // Fix error in Chrome:
                // Failed to read the 'selectionStart' property from 'HTMLInputElement'
                // http://stackoverflow.com/q/21177489/3040605
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (this.props.focusOnUpDown && this.state.focused) {
                var selectionRange = this.input.setSelectionRange;
                if (selectionRange && typeof selectionRange === 'function' && this.start !== undefined && this.end !== undefined && this.start !== this.end) {
                    this.input.setSelectionRange(this.start, this.end);
                } else {
                    this.focus();
                }
            }
        }
    }, {
        key: 'getRatio',
        value: function getRatio(e) {
            var ratio = 1;
            if (e.metaKey || e.ctrlKey) {
                ratio = 0.1;
            } else if (e.shiftKey) {
                ratio = 10;
            }
            return ratio;
        }
    }, {
        key: 'getValueFromEvent',
        value: function getValueFromEvent(e) {
            return e.target.value;
        }
    }, {
        key: 'focus',
        value: function focus() {
            this.input.focus();
        }
    }, {
        key: 'formatWrapper',
        value: function formatWrapper(num) {
            if (this.props.formatter) {
                return this.props.formatter(num);
            }
            return num;
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var props = extends_default()({}, this.props);
            var _props$prefixCls = props.prefixCls,
                prefixCls = _props$prefixCls === undefined ? '' : _props$prefixCls,
                disabled = props.disabled,
                readOnly = props.readOnly,
                max = props.max,
                min = props.min;

            var classes = classnames_default()((_classNames = {}, defineProperty_default()(_classNames, prefixCls, true), defineProperty_default()(_classNames, props.className, !!props.className), defineProperty_default()(_classNames, prefixCls + '-disabled', disabled), defineProperty_default()(_classNames, prefixCls + '-focused', this.state.focused), _classNames));
            var upDisabledClass = '';
            var downDisabledClass = '';
            var value = this.state.value;

            if (value || value === 0) {
                if (!isNaN(value)) {
                    var val = Number(value);
                    if (val >= max) {
                        upDisabledClass = prefixCls + '-handler-up-disabled';
                    }
                    if (val <= min) {
                        downDisabledClass = prefixCls + '-handler-down-disabled';
                    }
                } else {
                    upDisabledClass = prefixCls + '-handler-up-disabled';
                    downDisabledClass = prefixCls + '-handler-down-disabled';
                }
            }
            var editable = !props.readOnly && !props.disabled;
            // focus state, show input value
            // unfocus state, show valid value
            var inputDisplayValue = void 0;
            if (this.state.focused) {
                inputDisplayValue = this.state.inputValue;
            } else {
                inputDisplayValue = this.toPrecisionAsStep(this.state.value);
            }
            if (inputDisplayValue === undefined || inputDisplayValue === null) {
                inputDisplayValue = '';
            }
            var upEvents = void 0;
            var downEvents = void 0;
            upEvents = {
                onTouchStart: editable && !upDisabledClass ? this.up : rmc_input_number_es_noop,
                onTouchEnd: this.stop
            };
            downEvents = {
                onTouchStart: editable && !downDisabledClass ? this.down : rmc_input_number_es_noop,
                onTouchEnd: this.stop
            };
            var inputDisplayValueFormat = this.formatWrapper(inputDisplayValue);
            var isUpDisabled = !!upDisabledClass || disabled || readOnly;
            var isDownDisabled = !!downDisabledClass || disabled || readOnly;
            return react_default.a.createElement(
                'div',
                { className: classes, style: props.style },
                react_default.a.createElement(
                    'div',
                    { className: prefixCls + '-handler-wrap' },
                    react_default.a.createElement(
                        es_InputHandler,
                        extends_default()({ disabled: isUpDisabled, prefixCls: prefixCls, unselectable: 'unselectable' }, upEvents, { role: 'button', 'aria-label': 'Increase Value', 'aria-disabled': !!isUpDisabled, className: prefixCls + '-handler ' + prefixCls + '-handler-up ' + upDisabledClass }),
                        this.props.upHandler || react_default.a.createElement('span', { unselectable: 'unselectable', className: prefixCls + '-handler-up-inner', onClick: preventDefault })
                    ),
                    react_default.a.createElement(
                        es_InputHandler,
                        extends_default()({ disabled: isDownDisabled, prefixCls: prefixCls, unselectable: 'unselectable' }, downEvents, { role: 'button', 'aria-label': 'Decrease Value', 'aria-disabled': !!isDownDisabled, className: prefixCls + '-handler ' + prefixCls + '-handler-down ' + downDisabledClass }),
                        this.props.downHandler || react_default.a.createElement('span', { unselectable: 'unselectable', className: prefixCls + '-handler-down-inner', onClick: preventDefault })
                    )
                ),
                react_default.a.createElement(
                    'div',
                    { className: prefixCls + '-input-wrap', role: 'spinbutton', 'aria-valuemin': props.min, 'aria-valuemax': props.max, 'aria-valuenow': value },
                    react_default.a.createElement('input', { className: prefixCls + '-input', tabIndex: props.tabIndex, autoComplete: 'off', onFocus: this.onFocus, onBlur: this.onBlur, autoFocus: props.autoFocus, readOnly: props.readOnly, disabled: props.disabled, max: props.max, min: props.min, step: props.step, onChange: this.onChange, ref: this.setInput, value: inputDisplayValueFormat })
                )
            );
        }
    }]);

    return InputNumber;
}(base);

/* harmony default export */ var rmc_input_number_es = (es_InputNumber);

es_InputNumber.defaultProps = extends_default()({}, base.defaultProps, { focusOnUpDown: false, useTouch: false, prefixCls: 'rmc-input-number' });
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/stepper/index.js






var stepper_rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};





var stepper_Stepper = function (_React$Component) {
    inherits_default()(Stepper, _React$Component);

    function Stepper() {
        classCallCheck_default()(this, Stepper);

        return possibleConstructorReturn_default()(this, (Stepper.__proto__ || Object.getPrototypeOf(Stepper)).apply(this, arguments));
    }

    createClass_default()(Stepper, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _a = this.props,
                className = _a.className,
                showNumber = _a.showNumber,
                restProps = stepper_rest(_a, ["className", "showNumber"]);
            var stepperClass = classnames_default()(className, defineProperty_default()({}, 'showNumber', !!showNumber));
            return react["createElement"](rmc_input_number_es, extends_default()({ upHandler: react["createElement"](es_icon, { type: 'plus', size: 'xxs' }), downHandler: react["createElement"](es_icon, { type: 'minus', size: 'xxs' }) }, restProps, { ref: function ref(el) {
                    return _this2.stepperRef = el;
                }, className: stepperClass }));
        }
    }]);

    return Stepper;
}(react["Component"]);

/* harmony default export */ var stepper = (stepper_Stepper);

stepper_Stepper.defaultProps = {
    prefixCls: 'am-stepper',
    step: 1,
    readOnly: false,
    showNumber: false,
    focusOnUpDown: false
};
// EXTERNAL MODULE: ./node_modules/rmc-steps/lib/index.js
var rmc_steps_lib = __webpack_require__("cqCx");
var rmc_steps_lib_default = /*#__PURE__*/__webpack_require__.n(rmc_steps_lib);

// CONCATENATED MODULE: ./node_modules/antd-mobile/es/steps/index.js









var steps_Steps = function (_React$Component) {
    inherits_default()(Steps, _React$Component);

    function Steps() {
        classCallCheck_default()(this, Steps);

        return possibleConstructorReturn_default()(this, (Steps.__proto__ || Object.getPrototypeOf(Steps)).apply(this, arguments));
    }

    createClass_default()(Steps, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.componentDidUpdate();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (this.props.direction !== 'horizontal') {
                return;
            }
            // set tail's left position based on main's width for each step dynamically.
            this.stepRefs.forEach(function (s) {
                if (s.refs.tail) {
                    s.refs.tail.style.left = s.refs.main.offsetWidth / 2 + 'px';
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            this.stepRefs = [];
            var _props = this.props,
                children = _props.children,
                status = _props.status,
                size = _props.size;

            var current = this.props.current;
            // flattern the array at first https://github.com/ant-design/ant-design-mobile/issues/934
            var filterChildren = [];
            if (children && children.length) {
                children.forEach(function (item) {
                    if (react["isValidElement"](item)) {
                        filterChildren.push(item);
                    }
                });
            }
            var newChildren = react["Children"].map(filterChildren, function (item, index) {
                var className = item.props.className;
                if (index < filterChildren.length - 1 && filterChildren[index + 1].props.status === 'error') {
                    className = className ? className + ' error-tail' : 'error-tail';
                }
                var icon = item.props.icon;
                if (!icon) {
                    if (index < current) {
                        // 对应 state: finish
                        icon = 'check-circle-o';
                    } else if (index > current) {
                        // 对应 state: wait
                        icon = 'ellipsis';
                        className = className ? className + ' ellipsis-item' : 'ellipsis-item';
                    }
                    if (status === 'error' && index === current || item.props.status === 'error') {
                        icon = 'cross-circle-o';
                    }
                }
                icon = typeof icon === 'string' ? react["createElement"](es_icon, { type: icon, size: size === 'small' ? status === 'wait' ? 'xxs' : 'xs' : 'md' }) : icon;
                return react["cloneElement"](item, {
                    icon: icon,
                    className: className,
                    ref: function ref(c) {
                        return _this2.stepRefs[index] = c;
                    }
                });
            });
            return react["createElement"](
                rmc_steps_lib_default.a,
                extends_default()({ ref: function ref(el) {
                        return _this2.stepsRef = el;
                    } }, this.props),
                newChildren
            );
        }
    }]);

    return Steps;
}(react["Component"]);

/* harmony default export */ var steps = (steps_Steps);

steps_Steps.Step = rmc_steps_lib_default.a.Step;
steps_Steps.defaultProps = {
    prefixCls: 'am-steps',
    iconPrefix: 'ant',
    labelPlacement: 'vertical',
    direction: 'vertical',
    current: 0
};
// CONCATENATED MODULE: ./node_modules/rc-gesture/es/config.js
/* tslint:disable:no-bitwise */
// http://hammerjs.github.io/api/#directions
var DIRECTION_NONE = 1; // 00001
var DIRECTION_LEFT = 2; // 00010
var DIRECTION_RIGHT = 4; // 00100
var DIRECTION_UP = 8; // 01000
var DIRECTION_DOWN = 16; // 10000
var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT; // 00110 6
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN; // 11000 24
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL; // 11110  30
// http://hammerjs.github.io/recognizer-press/
var PRESS = {
    time: 251
};
// http://hammerjs.github.io/recognizer-swipe/
var SWIPE = {
    threshold: 10,
    velocity: 0.3
};
// CONCATENATED MODULE: ./node_modules/rc-gesture/es/util.js
/* tslint:disable:no-bitwise */

function _calcTriangleDistance(x, y) {
    return Math.sqrt(x * x + y * y);
}
function _calcAngle(x, y) {
    var radian = Math.atan2(y, x);
    return 180 / (Math.PI / radian);
}
function util_now() {
    return Date.now();
}
function calcMutliFingerStatus(touches) {
    if (touches.length < 2) {
        return;
    }
    var _touches$ = touches[0],
        x1 = _touches$.x,
        y1 = _touches$.y;
    var _touches$2 = touches[1],
        x2 = _touches$2.x,
        y2 = _touches$2.y;

    var deltaX = x2 - x1;
    var deltaY = y2 - y1;
    return {
        x: deltaX,
        y: deltaY,
        z: _calcTriangleDistance(deltaX, deltaY),
        angle: _calcAngle(deltaX, deltaY)
    };
}
function calcMoveStatus(startTouches, touches, time) {
    var _startTouches$ = startTouches[0],
        x1 = _startTouches$.x,
        y1 = _startTouches$.y;
    var _touches$3 = touches[0],
        x2 = _touches$3.x,
        y2 = _touches$3.y;

    var deltaX = x2 - x1;
    var deltaY = y2 - y1;
    var deltaZ = _calcTriangleDistance(deltaX, deltaY);
    return {
        x: deltaX,
        y: deltaY,
        z: deltaZ,
        time: time,
        velocity: deltaZ / time,
        angle: _calcAngle(deltaX, deltaY)
    };
}
function calcRotation(startMutliFingerStatus, mutliFingerStatus) {
    var startAngle = startMutliFingerStatus.angle;
    var angle = mutliFingerStatus.angle;

    return angle - startAngle;
}
function getEventName(prefix, status) {
    return prefix + status[0].toUpperCase() + status.slice(1);
}
function shouldTriggerSwipe(delta, velocity) {
    return Math.abs(delta) >= SWIPE.threshold && Math.abs(velocity) > SWIPE.velocity;
}
function shouldTriggerDirection(direction, directionSetting) {
    if (directionSetting & direction) {
        return true;
    }
    return false;
}
/**
 * @private
 * get the direction between two points
 * Note: will change next version
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }
    if (Math.abs(x) >= Math.abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}
/**
 * @private
 * get the direction between tow points when touch moving
 * Note: will change next version
 * @param {Object} point1 coordinate point, include x & y attributes
 * @param {Object} point2 coordinate point, include x & y attributes
 * @return {Number} direction
 */
function getMovingDirection(point1, point2) {
    var x1 = point1.x,
        y1 = point1.y;
    var x2 = point2.x,
        y2 = point2.y;

    var deltaX = x2 - x1;
    var deltaY = y2 - y1;
    if (deltaX === 0 && deltaY === 0) {
        return DIRECTION_NONE;
    }
    if (Math.abs(deltaX) >= Math.abs(deltaY)) {
        return deltaX < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return deltaY < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}
function getDirectionEventName(direction) {
    var name = void 0;
    switch (direction) {
        case DIRECTION_NONE:
            break;
        case DIRECTION_LEFT:
            name = 'left';
            break;
        case DIRECTION_RIGHT:
            name = 'right';
            break;
        case DIRECTION_UP:
            name = 'up';
            break;
        case DIRECTION_DOWN:
            name = 'down';
            break;
        default:
    }
    return name;
}
// CONCATENATED MODULE: ./node_modules/rc-gesture/es/index.js





/* tslint:disable:no-console */



;
;
var directionMap = {
    all: DIRECTION_ALL,
    vertical: DIRECTION_VERTICAL,
    horizontal: DIRECTION_HORIZONTAL
};

var es_Gesture = function (_Component) {
    inherits_default()(Gesture, _Component);

    function Gesture(props) {
        classCallCheck_default()(this, Gesture);

        var _this = possibleConstructorReturn_default()(this, (Gesture.__proto__ || Object.getPrototypeOf(Gesture)).call(this, props));

        _this.state = {};
        _this.triggerEvent = function (name) {
            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }

            var cb = _this.props[name];
            if (typeof cb === 'function') {
                // always give user gesture object as first params first
                cb.apply(undefined, [_this.getGestureState()].concat(args));
            }
        };
        _this.triggerCombineEvent = function (mainEventName, eventStatus) {
            for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
                args[_key2 - 2] = arguments[_key2];
            }

            _this.triggerEvent.apply(_this, [mainEventName].concat(args));
            _this.triggerSubEvent.apply(_this, [mainEventName, eventStatus].concat(args));
        };
        _this.triggerSubEvent = function (mainEventName, eventStatus) {
            for (var _len3 = arguments.length, args = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
                args[_key3 - 2] = arguments[_key3];
            }

            if (eventStatus) {
                var subEventName = getEventName(mainEventName, eventStatus);
                _this.triggerEvent.apply(_this, [subEventName].concat(args));
            }
        };
        _this.triggerPinchEvent = function (mainEventName, eventStatus) {
            for (var _len4 = arguments.length, args = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
                args[_key4 - 2] = arguments[_key4];
            }

            var scale = _this.gesture.scale;

            if (eventStatus === 'move' && typeof scale === 'number') {
                if (scale > 1) {
                    _this.triggerEvent('onPinchOut');
                }
                if (scale < 1) {
                    _this.triggerEvent('onPinchIn');
                }
            }
            _this.triggerCombineEvent.apply(_this, [mainEventName, eventStatus].concat(args));
        };
        _this.initPressTimer = function () {
            _this.cleanPressTimer();
            _this.pressTimer = setTimeout(function () {
                _this.setGestureState({
                    press: true
                });
                _this.triggerEvent('onPress');
            }, PRESS.time);
        };
        _this.cleanPressTimer = function () {
            /* tslint:disable:no-unused-expression */
            _this.pressTimer && clearTimeout(_this.pressTimer);
        };
        _this.setGestureState = function (params) {
            if (!_this.gesture) {
                _this.gesture = {};
            }
            // cache the previous touches
            if (_this.gesture.touches) {
                _this.gesture.preTouches = _this.gesture.touches;
            }
            _this.gesture = extends_default()({}, _this.gesture, params);
        };
        _this.getGestureState = function () {
            if (!_this.gesture) {
                return _this.gesture;
            } else {
                // shallow copy
                return extends_default()({}, _this.gesture);
            }
        };
        _this.cleanGestureState = function () {
            delete _this.gesture;
        };
        _this.getTouches = function (e) {
            return Array.prototype.slice.call(e.touches).map(function (item) {
                return {
                    x: item.screenX,
                    y: item.screenY
                };
            });
        };
        _this.triggerUserCb = function (status, e) {
            var cbName = getEventName('onTouch', status);
            if (cbName in _this.props) {
                _this.props[cbName](e);
            }
        };
        _this._handleTouchStart = function (e) {
            _this.triggerUserCb('start', e);
            _this.event = e;
            if (e.touches.length > 1) {
                e.preventDefault();
            }
            _this.initGestureStatus(e);
            _this.initPressTimer();
            _this.checkIfMultiTouchStart();
        };
        _this.initGestureStatus = function (e) {
            _this.cleanGestureState();
            // store the gesture start state
            var startTouches = _this.getTouches(e);
            var startTime = util_now();
            var startMutliFingerStatus = calcMutliFingerStatus(startTouches);
            _this.setGestureState({
                startTime: startTime,
                startTouches: startTouches,
                startMutliFingerStatus: startMutliFingerStatus,
                /* copy for next time touch move cala convenient*/
                time: startTime,
                touches: startTouches,
                mutliFingerStatus: startMutliFingerStatus,
                srcEvent: _this.event
            });
        };
        _this.checkIfMultiTouchStart = function () {
            var _this$props = _this.props,
                enablePinch = _this$props.enablePinch,
                enableRotate = _this$props.enableRotate;
            var touches = _this.gesture.touches;

            if (touches.length > 1 && (enablePinch || enableRotate)) {
                if (enablePinch) {
                    var startMutliFingerStatus = calcMutliFingerStatus(touches);
                    _this.setGestureState({
                        startMutliFingerStatus: startMutliFingerStatus,
                        /* init pinch status */
                        pinch: true,
                        scale: 1
                    });
                    _this.triggerCombineEvent('onPinch', 'start');
                }
                if (enableRotate) {
                    _this.setGestureState({
                        /* init rotate status */
                        rotate: true,
                        rotation: 0
                    });
                    _this.triggerCombineEvent('onRotate', 'start');
                }
            }
        };
        _this._handleTouchMove = function (e) {
            _this.triggerUserCb('move', e);
            _this.event = e;
            if (!_this.gesture) {
                // sometimes weird happen: touchstart -> touchmove..touchmove.. --> touchend --> touchmove --> touchend
                // so we need to skip the unnormal event cycle after touchend
                return;
            }
            // not a long press
            _this.cleanPressTimer();
            _this.updateGestureStatus(e);
            _this.checkIfSingleTouchMove();
            _this.checkIfMultiTouchMove();
        };
        _this.checkIfMultiTouchMove = function () {
            var _this$gesture = _this.gesture,
                pinch = _this$gesture.pinch,
                rotate = _this$gesture.rotate,
                touches = _this$gesture.touches,
                startMutliFingerStatus = _this$gesture.startMutliFingerStatus,
                mutliFingerStatus = _this$gesture.mutliFingerStatus;

            if (!pinch && !rotate) {
                return;
            }
            if (touches.length < 2) {
                _this.setGestureState({
                    pinch: false,
                    rotate: false
                });
                // Todo: 2 finger -> 1 finger, wait to test this situation
                pinch && _this.triggerCombineEvent('onPinch', 'cancel');
                rotate && _this.triggerCombineEvent('onRotate', 'cancel');
                return;
            }
            if (pinch) {
                var scale = mutliFingerStatus.z / startMutliFingerStatus.z;
                _this.setGestureState({
                    scale: scale
                });
                _this.triggerPinchEvent('onPinch', 'move');
            }
            if (rotate) {
                var rotation = calcRotation(startMutliFingerStatus, mutliFingerStatus);
                _this.setGestureState({
                    rotation: rotation
                });
                _this.triggerCombineEvent('onRotate', 'move');
            }
        };
        _this.allowGesture = function () {
            return shouldTriggerDirection(_this.gesture.direction, _this.directionSetting);
        };
        _this.checkIfSingleTouchMove = function () {
            var _this$gesture2 = _this.gesture,
                pan = _this$gesture2.pan,
                touches = _this$gesture2.touches,
                moveStatus = _this$gesture2.moveStatus,
                preTouches = _this$gesture2.preTouches,
                _this$gesture2$availa = _this$gesture2.availablePan,
                availablePan = _this$gesture2$availa === undefined ? true : _this$gesture2$availa;

            if (touches.length > 1) {
                _this.setGestureState({
                    pan: false
                });
                // Todo: 1 finger -> 2 finger, wait to test this situation
                pan && _this.triggerCombineEvent('onPan', 'cancel');
                return;
            }
            // add avilablePan condition to fix the case in scrolling, which will cause unavailable pan move.
            if (moveStatus && availablePan) {
                var direction = getMovingDirection(preTouches[0], touches[0]);
                _this.setGestureState({ direction: direction });
                var eventName = getDirectionEventName(direction);
                if (!_this.allowGesture()) {
                    // if the first move is unavailable, then judge all of remaining touch movings are also invalid.
                    if (!pan) {
                        _this.setGestureState({ availablePan: false });
                    }
                    return;
                }
                if (!pan) {
                    _this.triggerCombineEvent('onPan', 'start');
                    _this.setGestureState({
                        pan: true,
                        availablePan: true
                    });
                } else {
                    _this.triggerCombineEvent('onPan', eventName);
                    _this.triggerSubEvent('onPan', 'move');
                }
            }
        };
        _this.checkIfMultiTouchEnd = function (status) {
            var _this$gesture3 = _this.gesture,
                pinch = _this$gesture3.pinch,
                rotate = _this$gesture3.rotate;

            if (pinch) {
                _this.triggerCombineEvent('onPinch', status);
            }
            if (rotate) {
                _this.triggerCombineEvent('onRotate', status);
            }
        };
        _this.updateGestureStatus = function (e) {
            var time = util_now();
            _this.setGestureState({
                time: time
            });
            if (!e.touches || !e.touches.length) {
                return;
            }
            var _this$gesture4 = _this.gesture,
                startTime = _this$gesture4.startTime,
                startTouches = _this$gesture4.startTouches,
                pinch = _this$gesture4.pinch,
                rotate = _this$gesture4.rotate;

            var touches = _this.getTouches(e);
            var moveStatus = calcMoveStatus(startTouches, touches, time - startTime);
            var mutliFingerStatus = void 0;
            if (pinch || rotate) {
                mutliFingerStatus = calcMutliFingerStatus(touches);
            }
            _this.setGestureState({
                /* update status snapshot */
                touches: touches,
                mutliFingerStatus: mutliFingerStatus,
                /* update duration status */
                moveStatus: moveStatus
            });
        };
        _this._handleTouchEnd = function (e) {
            _this.triggerUserCb('end', e);
            _this.event = e;
            if (!_this.gesture) {
                return;
            }
            _this.cleanPressTimer();
            _this.updateGestureStatus(e);
            _this.doSingleTouchEnd('end');
            _this.checkIfMultiTouchEnd('end');
        };
        _this._handleTouchCancel = function (e) {
            _this.triggerUserCb('cancel', e);
            _this.event = e;
            // Todo: wait to test cancel case
            if (!_this.gesture) {
                return;
            }
            _this.cleanPressTimer();
            _this.updateGestureStatus(e);
            _this.doSingleTouchEnd('cancel');
            _this.checkIfMultiTouchEnd('cancel');
        };
        _this.triggerAllowEvent = function (type, status) {
            if (_this.allowGesture()) {
                _this.triggerCombineEvent(type, status);
            } else {
                _this.triggerSubEvent(type, status);
            }
        };
        _this.doSingleTouchEnd = function (status) {
            var _this$gesture5 = _this.gesture,
                moveStatus = _this$gesture5.moveStatus,
                pinch = _this$gesture5.pinch,
                rotate = _this$gesture5.rotate,
                press = _this$gesture5.press,
                pan = _this$gesture5.pan,
                direction = _this$gesture5.direction;

            if (pinch || rotate) {
                return;
            }
            if (moveStatus) {
                var z = moveStatus.z,
                    velocity = moveStatus.velocity;

                var swipe = shouldTriggerSwipe(z, velocity);
                _this.setGestureState({
                    swipe: swipe
                });
                if (pan) {
                    // pan need end, it's a process
                    // sometimes, start with pan left, but end with pan right....
                    _this.triggerAllowEvent('onPan', status);
                }
                if (swipe) {
                    var directionEvName = getDirectionEventName(direction);
                    // swipe just need a direction, it's a endpoint
                    _this.triggerAllowEvent('onSwipe', directionEvName);
                    return;
                }
            }
            if (press) {
                _this.triggerEvent('onPressUp');
                return;
            }
            _this.triggerEvent('onTap');
        };
        _this.getTouchAction = function () {
            var _this$props2 = _this.props,
                enablePinch = _this$props2.enablePinch,
                enableRotate = _this$props2.enableRotate;
            var directionSetting = _this.directionSetting;

            if (enablePinch || enableRotate || directionSetting === DIRECTION_ALL) {
                return 'pan-x pan-y';
            }
            if (directionSetting === DIRECTION_VERTICAL) {
                return 'pan-x';
            }
            if (directionSetting === DIRECTION_HORIZONTAL) {
                return 'pan-y';
            }
            return 'auto';
        };
        _this.directionSetting = directionMap[props.direction];
        return _this;
    }

    createClass_default()(Gesture, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.cleanPressTimer();
        }
    }, {
        key: 'render',
        value: function render() {
            var children = this.props.children;

            var child = react_default.a.Children.only(children);
            var touchAction = this.getTouchAction();
            var events = {
                onTouchStart: this._handleTouchStart,
                onTouchMove: this._handleTouchMove,
                onTouchCancel: this._handleTouchCancel,
                onTouchEnd: this._handleTouchEnd
            };
            return react_default.a.cloneElement(child, extends_default()({}, events, { style: extends_default()({ touchAction: touchAction }, child.props.style || {}) }));
        }
    }]);

    return Gesture;
}(react["Component"]);

/* harmony default export */ var rc_gesture_es = (es_Gesture);

es_Gesture.defaultProps = {
    enableRotate: false,
    enablePinch: false,
    direction: 'all'
};
// CONCATENATED MODULE: ./node_modules/rc-swipeout/es/Swipeout.js






var Swipeout_rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};




// https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
// http://caniuse.com/#search=match
function Swipeout_closest(el, selector) {
    var matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
        if (matchesSelector.call(el, selector)) {
            return el;
        } else {
            el = el.parentElement;
        }
    }
    return null;
}

var Swipeout_Swipeout = function (_React$Component) {
    inherits_default()(Swipeout, _React$Component);

    function Swipeout(props) {
        classCallCheck_default()(this, Swipeout);

        var _this = possibleConstructorReturn_default()(this, (Swipeout.__proto__ || Object.getPrototypeOf(Swipeout)).call(this, props));

        _this.onCloseSwipe = function (ev) {
            if (!(_this.openedLeft || _this.openedRight)) {
                return;
            }
            var pNode = Swipeout_closest(ev.target, '.' + _this.props.prefixCls + '-actions');
            if (!pNode) {
                ev.preventDefault();
                _this.close();
            }
        };
        _this.onPanStart = function (e) {
            var direction = e.direction,
                moveStatus = e.moveStatus;
            var deltaX = moveStatus.x;
            // http://hammerjs.github.io/api/#directions

            var isLeft = direction === 2;
            var isRight = direction === 4;
            if (!isLeft && !isRight) {
                return;
            }
            var _this$props = _this.props,
                left = _this$props.left,
                right = _this$props.right;

            _this.needShowRight = isLeft && right.length > 0;
            _this.needShowLeft = isRight && left.length > 0;
            if (_this.left) {
                _this.left.style.visibility = _this.needShowRight ? 'hidden' : 'visible';
            }
            if (_this.right) {
                _this.right.style.visibility = _this.needShowLeft ? 'hidden' : 'visible';
            }
            if (_this.needShowLeft || _this.needShowRight) {
                _this.swiping = true;
                _this.setState({
                    swiping: _this.swiping
                });
                _this._setStyle(deltaX);
            }
        };
        _this.onPanMove = function (e) {
            var moveStatus = e.moveStatus,
                srcEvent = e.srcEvent;
            var deltaX = moveStatus.x;

            if (!_this.swiping) {
                return;
            }
            // fixed scroll when it's pan and moving.
            if (srcEvent && srcEvent.preventDefault) {
                srcEvent.preventDefault();
            }
            _this._setStyle(deltaX);
        };
        _this.onPanEnd = function (e) {
            if (!_this.swiping) {
                return;
            }
            var moveStatus = e.moveStatus;
            var deltaX = moveStatus.x;

            var needOpenRight = _this.needShowRight && Math.abs(deltaX) > _this.btnsRightWidth / 2;
            var needOpenLeft = _this.needShowLeft && Math.abs(deltaX) > _this.btnsLeftWidth / 2;
            if (needOpenRight) {
                _this.doOpenRight();
            } else if (needOpenLeft) {
                _this.doOpenLeft();
            } else {
                _this.close();
            }
            _this.swiping = false;
            _this.setState({
                swiping: _this.swiping
            });
            _this.needShowLeft = false;
            _this.needShowRight = false;
        };
        _this.doOpenLeft = function () {
            _this.open(_this.btnsLeftWidth, true, false);
        };
        _this.doOpenRight = function () {
            _this.open(-_this.btnsRightWidth, true, false);
        };
        // set content & actions style
        _this._setStyle = function (value) {
            var limit = value > 0 ? _this.btnsLeftWidth : -_this.btnsRightWidth;
            var contentLeft = _this._getContentEasing(value, limit);
            _this.content.style.left = contentLeft + 'px';
            if (_this.cover) {
                _this.cover.style.display = Math.abs(value) > 0 ? 'block' : 'none';
                _this.cover.style.left = contentLeft + 'px';
            }
        };
        _this.open = function (value, openedLeft, openedRight) {
            if (!_this.openedLeft && !_this.openedRight && _this.props.onOpen) {
                _this.props.onOpen();
            }
            _this.openedLeft = openedLeft;
            _this.openedRight = openedRight;
            _this._setStyle(value);
        };
        _this.close = function () {
            if ((_this.openedLeft || _this.openedRight) && _this.props.onClose) {
                _this.props.onClose();
            }
            _this._setStyle(0);
            _this.openedLeft = false;
            _this.openedRight = false;
        };
        _this.onTouchMove = function (e) {
            if (_this.swiping) {
                e.preventDefault();
            }
        };
        _this.state = {
            swiping: false
        };
        _this.openedLeft = false;
        _this.openedRight = false;
        return _this;
    }

    createClass_default()(Swipeout, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.btnsLeftWidth = this.left ? this.left.offsetWidth : 0;
            this.btnsRightWidth = this.right ? this.right.offsetWidth : 0;
            document.body.addEventListener('touchstart', this.onCloseSwipe, true);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.body.removeEventListener('touchstart', this.onCloseSwipe, true);
        }
        // left & right button click

    }, {
        key: 'onBtnClick',
        value: function onBtnClick(ev, btn) {
            var onPress = btn.onPress;
            if (onPress) {
                onPress(ev);
            }
            if (this.props.autoClose) {
                this.close();
            }
        }
    }, {
        key: '_getContentEasing',
        value: function _getContentEasing(value, limit) {
            // limit content style left when value > actions width
            var delta = Math.abs(value) - Math.abs(limit);
            var isOverflow = delta > 0;
            var factor = limit > 0 ? 1 : -1;
            if (isOverflow) {
                value = limit + Math.pow(delta, 0.85) * factor;
                return Math.abs(value) > Math.abs(limit) ? limit : value;
            }
            return value;
        }
    }, {
        key: 'renderButtons',
        value: function renderButtons(buttons, _ref) {
            var _this2 = this;

            var prefixCls = this.props.prefixCls;
            return buttons && buttons.length ? react_default.a.createElement(
                'div',
                { className: prefixCls + '-actions ' + prefixCls + '-actions-' + _ref, ref: function ref(el) {
                        return _this2[_ref] = el;
                    } },
                buttons.map(function (btn, i) {
                    return react_default.a.createElement(
                        'div',
                        { key: i, className: prefixCls + '-btn ' + (btn.hasOwnProperty('className') ? btn.className : ''), style: btn.style, role: 'button', onClick: function onClick(e) {
                                return _this2.onBtnClick(e, btn);
                            } },
                        react_default.a.createElement(
                            'div',
                            { className: prefixCls + '-btn-text' },
                            btn.text || 'Click'
                        )
                    );
                })
            ) : null;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _a = this.props,
                prefixCls = _a.prefixCls,
                left = _a.left,
                right = _a.right,
                disabled = _a.disabled,
                children = _a.children,
                restProps = Swipeout_rest(_a, ["prefixCls", "left", "right", "disabled", "children"]);
            var autoClose = restProps.autoClose,
                onOpen = restProps.onOpen,
                onClose = restProps.onClose,
                divProps = Swipeout_rest(restProps, ["autoClose", "onOpen", "onClose"]);

            var cls = classnames_default()(prefixCls, defineProperty_default()({}, prefixCls + '-swiping', this.state.swiping));
            var refProps = {
                ref: function ref(el) {
                    return _this3.content = react_dom_default.a.findDOMNode(el);
                }
            };
            return (left.length || right.length) && !disabled ? react_default.a.createElement(
                'div',
                extends_default()({ className: cls }, divProps),
                react_default.a.createElement('div', { className: prefixCls + '-cover', ref: function ref(el) {
                        return _this3.cover = el;
                    } }),
                this.renderButtons(left, 'left'),
                this.renderButtons(right, 'right'),
                react_default.a.createElement(
                    rc_gesture_es,
                    extends_default()({ onTouchMove: this.onTouchMove, onPanStart: this.onPanStart, onPanMove: this.onPanMove, onPanEnd: this.onPanEnd, onPanCancel: this.onPanEnd, onSwipeLeft: this.doOpenRight, onSwipeRight: this.doOpenLeft, direction: 'horizontal' }, refProps),
                    react_default.a.createElement(
                        'div',
                        { className: prefixCls + '-content' },
                        children
                    )
                )
            ) : react_default.a.createElement(
                'div',
                extends_default()({}, refProps, divProps),
                children
            );
        }
    }]);

    return Swipeout;
}(react_default.a.Component);

/* harmony default export */ var es_Swipeout = (Swipeout_Swipeout);

Swipeout_Swipeout.defaultProps = {
    prefixCls: 'rc-swipeout',
    autoClose: false,
    disabled: false,
    left: [],
    right: [],
    onOpen: function onOpen() {},
    onClose: function onClose() {}
};
// CONCATENATED MODULE: ./node_modules/rc-swipeout/es/index.js

/* harmony default export */ var rc_swipeout_es = (es_Swipeout);
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/swipe-action/index.js








var swipe_action_SwipeAction = function (_React$Component) {
  inherits_default()(SwipeAction, _React$Component);

  function SwipeAction() {
    classCallCheck_default()(this, SwipeAction);

    return possibleConstructorReturn_default()(this, (SwipeAction.__proto__ || Object.getPrototypeOf(SwipeAction)).apply(this, arguments));
  }

  createClass_default()(SwipeAction, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          prefixCls = _props.prefixCls,
          _props$left = _props.left,
          left = _props$left === undefined ? [] : _props$left,
          _props$right = _props.right,
          right = _props$right === undefined ? [] : _props$right,
          autoClose = _props.autoClose,
          disabled = _props.disabled,
          onOpen = _props.onOpen,
          onClose = _props.onClose,
          children = _props.children;

      var wrapClass = classnames_default()(prefixCls, className);
      return left.length || right.length ? react["createElement"](
        'div',
        { style: style, className: className },
        react["createElement"](
          rc_swipeout_es,
          { prefixCls: prefixCls, left: left, right: right, autoClose: autoClose, disabled: disabled, onOpen: onOpen, onClose: onClose },
          children
        )
      ) : react["createElement"](
        'div',
        { style: style, className: wrapClass },
        children
      );
    }
  }]);

  return SwipeAction;
}(react["Component"]);

swipe_action_SwipeAction.defaultProps = {
  prefixCls: 'am-swipe',
  autoClose: false,
  disabled: false,
  left: [],
  right: [],
  onOpen: function onOpen() {},
  onClose: function onClose() {}
};
/* harmony default export */ var swipe_action = (swipe_action_SwipeAction);
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/switch/index.js






var switch_rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};



var switch_Switch = function (_React$Component) {
    inherits_default()(Switch, _React$Component);

    function Switch() {
        classCallCheck_default()(this, Switch);

        var _this = possibleConstructorReturn_default()(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).apply(this, arguments));

        _this.onChange = function (e) {
            var checked = e.target.checked;
            if (_this.props.onChange) {
                _this.props.onChange(checked);
            }
        };
        _this.onClick = function (e) {
            if (_this.props.onClick) {
                var val = void 0;
                // tslint:disable-next-line:prefer-conditional-expression
                if (e && e.target && e.target.checked !== undefined) {
                    val = e.target.checked;
                } else {
                    val = _this.props.checked;
                }
                _this.props.onClick(val);
            }
        };
        return _this;
    }

    createClass_default()(Switch, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                prefixCls = _a.prefixCls,
                name = _a.name,
                checked = _a.checked,
                disabled = _a.disabled,
                className = _a.className,
                platform = _a.platform,
                color = _a.color,
                restProps = switch_rest(_a, ["prefixCls", "name", "checked", "disabled", "className", "platform", "color"]);
            var wrapCls = classnames_default()(prefixCls, className, defineProperty_default()({}, prefixCls + '-android', platform === 'android'));
            var fackInputCls = classnames_default()('checkbox', defineProperty_default()({}, 'checkbox-disabled', disabled));
            var globalProps = Object.keys(restProps).reduce(function (prev, key) {
                if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
                    prev[key] = restProps[key];
                }
                return prev;
            }, {});
            var style = this.props.style || {};
            if (color && checked) {
                style.backgroundColor = color;
            }
            return react["createElement"](
                'label',
                { className: wrapCls },
                react["createElement"]('input', extends_default()({ type: 'checkbox', name: name, className: prefixCls + '-checkbox', disabled: disabled, checked: checked, onChange: this.onChange, value: checked ? 'on' : 'off' }, !disabled ? { onClick: this.onClick } : {}, globalProps)),
                react["createElement"]('div', extends_default()({ className: fackInputCls, style: style }, disabled ? { onClick: this.onClick } : {}))
            );
        }
    }]);

    return Switch;
}(react["Component"]);

/* harmony default export */ var es_switch = (switch_Switch);

switch_Switch.defaultProps = {
    prefixCls: 'am-switch',
    name: '',
    checked: false,
    disabled: false,
    onChange: function onChange() {},

    platform: 'ios',
    onClick: function onClick() {}
};
// CONCATENATED MODULE: ./node_modules/rmc-tabs/es/util/index.js
function getTransformPropValue(v) {
    return {
        transform: v,
        WebkitTransform: v,
        MozTransform: v
    };
}
function getPxStyle(value) {
    var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'px';
    var vertical = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    value = vertical ? '0px, ' + value + unit + ', 0px' : '' + value + unit + ', 0px, 0px';
    return 'translate3d(' + value + ')';
}
function setPxStyle(el, value) {
    var unit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'px';
    var vertical = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var useLeft = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    if (useLeft) {
        if (vertical) {
            el.style.top = '' + value + unit;
        } else {
            el.style.left = '' + value + unit;
        }
    } else {
        util_setTransform(el.style, getPxStyle(value, unit, vertical));
    }
}
function util_setTransform(style, v) {
    style.transform = v;
    style.webkitTransform = v;
    style.mozTransform = v;
}
// CONCATENATED MODULE: ./node_modules/rmc-tabs/es/TabPane.js





var TabPane_rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};


var TabPane_TabPane = function (_React$PureComponent) {
    inherits_default()(TabPane, _React$PureComponent);

    function TabPane() {
        classCallCheck_default()(this, TabPane);

        var _this = possibleConstructorReturn_default()(this, (TabPane.__proto__ || Object.getPrototypeOf(TabPane)).apply(this, arguments));

        _this.offsetX = 0;
        _this.offsetY = 0;
        _this.setLayout = function (div) {
            _this.layout = div;
        };
        return _this;
    }

    createClass_default()(TabPane, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.active !== nextProps.active) {
                if (nextProps.active) {
                    this.offsetX = 0;
                    this.offsetY = 0;
                } else {
                    this.offsetX = this.layout.scrollLeft;
                    this.offsetY = this.layout.scrollTop;
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _a = this.props,
                active = _a.active,
                fixX = _a.fixX,
                fixY = _a.fixY,
                props = TabPane_rest(_a, ["active", "fixX", "fixY"]);
            var style = extends_default()({}, fixX && this.offsetX ? getTransformPropValue(getPxStyle(-this.offsetX, 'px', false)) : {}, fixY && this.offsetY ? getTransformPropValue(getPxStyle(-this.offsetY, 'px', true)) : {});
            return react_default.a.createElement(
                'div',
                extends_default()({}, props, { style: style, ref: this.setLayout }),
                props.children
            );
        }
    }]);

    return TabPane;
}(react_default.a.PureComponent);
TabPane_TabPane.defaultProps = {
    fixX: true,
    fixY: true
};
// CONCATENATED MODULE: ./node_modules/rmc-tabs/es/DefaultTabBar.js





var DefaultTabBar_rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};



var DefaultTabBar_StateType = function StateType() {
    classCallCheck_default()(this, StateType);

    this.transform = '';
    this.isMoving = false;
    this.showPrev = false;
    this.showNext = false;
};
var DefaultTabBar_DefaultTabBar = function (_React$PureComponent) {
    inherits_default()(DefaultTabBar, _React$PureComponent);

    function DefaultTabBar(props) {
        classCallCheck_default()(this, DefaultTabBar);

        var _this = possibleConstructorReturn_default()(this, (DefaultTabBar.__proto__ || Object.getPrototypeOf(DefaultTabBar)).call(this, props));

        _this.onPan = function () {
            var lastOffset = 0;
            var finalOffset = 0;
            var getLastOffset = function getLastOffset() {
                var isVertical = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.isTabBarVertical();

                var offset = +('' + lastOffset).replace('%', '');
                if (('' + lastOffset).indexOf('%') >= 0) {
                    offset /= 100;
                    offset *= isVertical ? _this.layout.clientHeight : _this.layout.clientWidth;
                }
                return offset;
            };
            return {
                onPanStart: function onPanStart() {
                    _this.setState({ isMoving: true });
                },
                onPanMove: function onPanMove(status) {
                    if (!status.moveStatus || !_this.layout) return;
                    var isVertical = _this.isTabBarVertical();
                    var offset = getLastOffset() + (isVertical ? status.moveStatus.y : status.moveStatus.x);
                    var canScrollOffset = isVertical ? -_this.layout.scrollHeight + _this.layout.clientHeight : -_this.layout.scrollWidth + _this.layout.clientWidth;
                    offset = Math.min(offset, 0);
                    offset = Math.max(offset, canScrollOffset);
                    setPxStyle(_this.layout, offset, 'px', isVertical);
                    finalOffset = offset;
                    _this.setState({
                        showPrev: -offset > 0,
                        showNext: offset > canScrollOffset
                    });
                },
                onPanEnd: function onPanEnd() {
                    var isVertical = _this.isTabBarVertical();
                    lastOffset = finalOffset;
                    _this.setState({
                        isMoving: false,
                        transform: getPxStyle(finalOffset, 'px', isVertical)
                    });
                },
                setCurrentOffset: function setCurrentOffset(offset) {
                    return lastOffset = offset;
                }
            };
        }();
        _this.getTransformByIndex = function (props) {
            var activeTab = props.activeTab,
                tabs = props.tabs,
                _props$page = props.page,
                page = _props$page === undefined ? 0 : _props$page;

            var isVertical = _this.isTabBarVertical();
            var size = _this.getTabSize(page, tabs.length);
            var center = page / 2;
            var pos = Math.min(activeTab, tabs.length - center - .5);
            var skipSize = Math.min(-(pos - center + .5) * size, 0);
            _this.onPan.setCurrentOffset(skipSize + '%');
            return {
                transform: getPxStyle(skipSize, '%', isVertical),
                showPrev: activeTab > center - .5 && tabs.length > page,
                showNext: activeTab < tabs.length - center - .5 && tabs.length > page
            };
        };
        _this.onPress = function (index) {
            var _this$props = _this.props,
                goToTab = _this$props.goToTab,
                onTabClick = _this$props.onTabClick,
                tabs = _this$props.tabs;

            onTabClick && onTabClick(tabs[index], index);
            goToTab && goToTab(index);
        };
        _this.isTabBarVertical = function () {
            var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props.tabBarPosition;
            return position === 'left' || position === 'right';
        };
        _this.renderTab = function (t, i, size, isTabBarVertical) {
            var _this$props2 = _this.props,
                prefixCls = _this$props2.prefixCls,
                renderTab = _this$props2.renderTab,
                activeTab = _this$props2.activeTab,
                tabBarTextStyle = _this$props2.tabBarTextStyle,
                tabBarActiveTextColor = _this$props2.tabBarActiveTextColor,
                tabBarInactiveTextColor = _this$props2.tabBarInactiveTextColor,
                instanceId = _this$props2.instanceId;

            var textStyle = extends_default()({}, tabBarTextStyle);
            var cls = prefixCls + '-tab';
            var ariaSelected = false;
            if (activeTab === i) {
                cls += ' ' + cls + '-active';
                ariaSelected = true;
                if (tabBarActiveTextColor) {
                    textStyle.color = tabBarActiveTextColor;
                }
            } else if (tabBarInactiveTextColor) {
                textStyle.color = tabBarInactiveTextColor;
            }
            return react_default.a.createElement(
                'div',
                { key: 't_' + i, style: extends_default()({}, textStyle, isTabBarVertical ? { height: size + '%' } : { width: size + '%' }), id: 'm-tabs-' + instanceId + '-' + i, role: 'tab', 'aria-selected': ariaSelected, className: cls, onClick: function onClick() {
                        return _this.onPress(i);
                    } },
                renderTab ? renderTab(t) : t.title
            );
        };
        _this.setContentLayout = function (div) {
            _this.layout = div;
        };
        _this.getTabSize = function (page, tabLength) {
            return 100 / Math.min(page, tabLength);
        };
        _this.state = extends_default()({}, new DefaultTabBar_StateType(), _this.getTransformByIndex(props));
        return _this;
    }

    createClass_default()(DefaultTabBar, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.activeTab !== nextProps.activeTab || this.props.tabs !== nextProps.tabs || this.props.tabs.length !== nextProps.tabs.length) {
                this.setState(extends_default()({}, this.getTransformByIndex(nextProps)));
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                animated = _props.animated,
                _props$tabs = _props.tabs,
                tabs = _props$tabs === undefined ? [] : _props$tabs,
                _props$page2 = _props.page,
                page = _props$page2 === undefined ? 0 : _props$page2,
                _props$activeTab = _props.activeTab,
                activeTab = _props$activeTab === undefined ? 0 : _props$activeTab,
                tabBarBackgroundColor = _props.tabBarBackgroundColor,
                tabBarUnderlineStyle = _props.tabBarUnderlineStyle,
                tabBarPosition = _props.tabBarPosition,
                renderUnderline = _props.renderUnderline;
            var _state = this.state,
                isMoving = _state.isMoving,
                transform = _state.transform,
                showNext = _state.showNext,
                showPrev = _state.showPrev;

            var isTabBarVertical = this.isTabBarVertical();
            var needScroll = tabs.length > page;
            var size = this.getTabSize(page, tabs.length);
            var Tabs = tabs.map(function (t, i) {
                return _this2.renderTab(t, i, size, isTabBarVertical);
            });
            var cls = prefixCls;
            if (animated && !isMoving) {
                cls += ' ' + prefixCls + '-animated';
            }
            var style = {
                backgroundColor: tabBarBackgroundColor || ''
            };
            var transformStyle = needScroll ? extends_default()({}, getTransformPropValue(transform)) : {};
            var _a = this.onPan,
                setCurrentOffset = _a.setCurrentOffset,
                onPan = DefaultTabBar_rest(_a, ["setCurrentOffset"]);
            var underlineProps = {
                style: extends_default()({}, isTabBarVertical ? { height: size + '%' } : { width: size + '%' }, isTabBarVertical ? { top: size * activeTab + '%' } : { left: size * activeTab + '%' }, tabBarUnderlineStyle),
                className: prefixCls + '-underline'
            };
            return react_default.a.createElement(
                'div',
                { className: cls + ' ' + prefixCls + '-' + tabBarPosition, style: style },
                showPrev && react_default.a.createElement('div', { className: prefixCls + '-prevpage' }),
                react_default.a.createElement(
                    rc_gesture_es,
                    extends_default()({}, onPan, { direction: isTabBarVertical ? 'vertical' : 'horizontal' }),
                    react_default.a.createElement(
                        'div',
                        { role: 'tablist', className: prefixCls + '-content', style: transformStyle, ref: this.setContentLayout },
                        Tabs,
                        renderUnderline ? renderUnderline(underlineProps) : react_default.a.createElement('div', underlineProps)
                    )
                ),
                showNext && react_default.a.createElement('div', { className: prefixCls + '-nextpage' })
            );
        }
    }]);

    return DefaultTabBar;
}(react_default.a.PureComponent);
DefaultTabBar_DefaultTabBar.defaultProps = {
    prefixCls: 'rmc-tabs-tab-bar',
    animated: true,
    tabs: [],
    goToTab: function goToTab() {},
    activeTab: 0,
    page: 5,
    tabBarUnderlineStyle: {},
    tabBarBackgroundColor: '#fff',
    tabBarActiveTextColor: '',
    tabBarInactiveTextColor: '',
    tabBarTextStyle: {}
};
// CONCATENATED MODULE: ./node_modules/rmc-tabs/es/Tabs.base.js






var Tabs_base_StateType = function StateType() {
    classCallCheck_default()(this, StateType);
};
var Tabs_base_instanceId = 0;
var Tabs_base_Tabs = function (_React$PureComponent) {
    inherits_default()(Tabs, _React$PureComponent);

    function Tabs(props) {
        classCallCheck_default()(this, Tabs);

        var _this = possibleConstructorReturn_default()(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

        _this.tabCache = {};
        _this.isTabVertical = function () {
            var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props.tabDirection;
            return direction === 'vertical';
        };
        _this.shouldRenderTab = function (idx) {
            var _this$props$prerender = _this.props.prerenderingSiblingsNumber,
                prerenderingSiblingsNumber = _this$props$prerender === undefined ? 0 : _this$props$prerender;
            var _this$state$currentTa = _this.state.currentTab,
                currentTab = _this$state$currentTa === undefined ? 0 : _this$state$currentTa;

            return currentTab - prerenderingSiblingsNumber <= idx && idx <= currentTab + prerenderingSiblingsNumber;
        };
        _this.getOffsetIndex = function (current, width) {
            var threshold = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this.props.distanceToChangeTab || 0;

            var ratio = Math.abs(current / width);
            var direction = ratio > _this.state.currentTab ? '<' : '>';
            var index = Math.floor(ratio);
            switch (direction) {
                case '<':
                    return ratio - index > threshold ? index + 1 : index;
                case '>':
                    return 1 - ratio + index > threshold ? index : index + 1;
                default:
                    return Math.round(ratio);
            }
        };
        _this.getSubElements = function () {
            var children = _this.props.children;

            var subElements = {};
            return function () {
                var defaultPrefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '$i$-';
                var allPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '$ALL$';

                if (Array.isArray(children)) {
                    children.forEach(function (child, index) {
                        if (child.key) {
                            subElements[child.key] = child;
                        }
                        subElements['' + defaultPrefix + index] = child;
                    });
                } else if (children) {
                    subElements[allPrefix] = children;
                }
                return subElements;
            };
        };
        _this.state = {
            currentTab: _this.getTabIndex(props)
        };
        _this.nextCurrentTab = _this.state.currentTab;
        _this.instanceId = Tabs_base_instanceId++;
        return _this;
    }

    createClass_default()(Tabs, [{
        key: 'getTabIndex',
        value: function getTabIndex(props) {
            var page = props.page,
                initialPage = props.initialPage,
                tabs = props.tabs;

            var param = (page !== undefined ? page : initialPage) || 0;
            var index = 0;
            if (typeof param === 'string') {
                tabs.forEach(function (t, i) {
                    if (t.key === param) {
                        index = i;
                    }
                });
            } else {
                index = param || 0;
            }
            return index < 0 ? 0 : index;
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.page !== nextProps.page && nextProps.page !== undefined) {
                this.goToTab(this.getTabIndex(nextProps), true, {}, nextProps);
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.prevCurrentTab = this.state.currentTab;
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.prevCurrentTab = this.state.currentTab;
        }
    }, {
        key: 'goToTab',
        value: function goToTab(index) {
            var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var newState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var props = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.props;

            if (!force && this.nextCurrentTab === index) {
                return false;
            }
            this.nextCurrentTab = index;
            var tabs = props.tabs,
                onChange = props.onChange;

            if (index >= 0 && index < tabs.length) {
                if (!force) {
                    onChange && onChange(tabs[index], index);
                    if (props.page !== undefined) {
                        return false;
                    }
                }
                this.setState(extends_default()({ currentTab: index }, newState));
            }
            return true;
        }
    }, {
        key: 'tabClickGoToTab',
        value: function tabClickGoToTab(index) {
            this.goToTab(index);
        }
    }, {
        key: 'getTabBarBaseProps',
        value: function getTabBarBaseProps() {
            var currentTab = this.state.currentTab;
            var _props = this.props,
                animated = _props.animated,
                onTabClick = _props.onTabClick,
                tabBarActiveTextColor = _props.tabBarActiveTextColor,
                tabBarBackgroundColor = _props.tabBarBackgroundColor,
                tabBarInactiveTextColor = _props.tabBarInactiveTextColor,
                tabBarPosition = _props.tabBarPosition,
                tabBarTextStyle = _props.tabBarTextStyle,
                tabBarUnderlineStyle = _props.tabBarUnderlineStyle,
                tabs = _props.tabs;

            return {
                activeTab: currentTab,
                animated: !!animated,
                goToTab: this.tabClickGoToTab.bind(this),
                onTabClick: onTabClick,
                tabBarActiveTextColor: tabBarActiveTextColor,
                tabBarBackgroundColor: tabBarBackgroundColor,
                tabBarInactiveTextColor: tabBarInactiveTextColor,
                tabBarPosition: tabBarPosition,
                tabBarTextStyle: tabBarTextStyle,
                tabBarUnderlineStyle: tabBarUnderlineStyle,
                tabs: tabs,
                instanceId: this.instanceId
            };
        }
    }, {
        key: 'renderTabBar',
        value: function renderTabBar(tabBarProps, DefaultTabBar) {
            var renderTabBar = this.props.renderTabBar;

            if (renderTabBar === false) {
                return null;
            } else if (renderTabBar) {
                // return React.cloneElement(this.props.renderTabBar(props), props);
                return renderTabBar(tabBarProps);
            } else {
                return react_default.a.createElement(DefaultTabBar, tabBarProps);
            }
        }
    }, {
        key: 'getSubElement',
        value: function getSubElement(tab, index, subElements) {
            var defaultPrefix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '$i$-';
            var allPrefix = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '$ALL$';

            var key = tab.key || '' + defaultPrefix + index;
            var elements = subElements(defaultPrefix, allPrefix);
            var component = elements[key] || elements[allPrefix];
            if (component instanceof Function) {
                component = component(tab, index);
            }
            return component || null;
        }
    }]);

    return Tabs;
}(react_default.a.PureComponent);
Tabs_base_Tabs.defaultProps = {
    tabBarPosition: 'top',
    initialPage: 0,
    swipeable: true,
    animated: true,
    prerenderingSiblingsNumber: 1,
    tabs: [],
    destroyInactiveTab: false,
    usePaged: true,
    tabDirection: 'horizontal',
    distanceToChangeTab: .3
};
// CONCATENATED MODULE: ./node_modules/rmc-tabs/es/Tabs.js












var getPanDirection = function getPanDirection(direction) {
    switch (direction) {
        case 2:
        case 4:
            return 'horizontal';
        case 8:
        case 16:
            return 'vertical';
        default:
            return 'none';
    }
};
var Tabs_StateType = function (_BaseStateType) {
    inherits_default()(StateType, _BaseStateType);

    function StateType() {
        classCallCheck_default()(this, StateType);

        var _this = possibleConstructorReturn_default()(this, (StateType.__proto__ || Object.getPrototypeOf(StateType)).apply(this, arguments));

        _this.contentPos = '';
        _this.isMoving = false;
        return _this;
    }

    return StateType;
}(Tabs_base_StateType);
var Tabs_Tabs = function (_Component) {
    inherits_default()(Tabs, _Component);

    function Tabs(props) {
        classCallCheck_default()(this, Tabs);

        var _this2 = possibleConstructorReturn_default()(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

        _this2.onPan = function () {
            var lastOffset = 0;
            var finalOffset = 0;
            var panDirection = void 0;
            var getLastOffset = function getLastOffset() {
                var isVertical = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this2.isTabVertical();

                var offset = +('' + lastOffset).replace('%', '');
                if (('' + lastOffset).indexOf('%') >= 0) {
                    offset /= 100;
                    offset *= isVertical ? _this2.layout.clientHeight : _this2.layout.clientWidth;
                }
                return offset;
            };
            return {
                onPanStart: function onPanStart(status) {
                    if (!_this2.props.swipeable || !_this2.props.animated) return;
                    panDirection = getPanDirection(status.direction);
                    _this2.setState({
                        isMoving: true
                    });
                },
                onPanMove: function onPanMove(status) {
                    var _this2$props = _this2.props,
                        swipeable = _this2$props.swipeable,
                        animated = _this2$props.animated,
                        useLeftInsteadTransform = _this2$props.useLeftInsteadTransform;

                    if (!status.moveStatus || !_this2.layout || !swipeable || !animated) return;
                    var isVertical = _this2.isTabVertical();
                    var offset = getLastOffset();
                    if (isVertical) {
                        offset += panDirection === 'horizontal' ? 0 : status.moveStatus.y;
                    } else {
                        offset += panDirection === 'vertical' ? 0 : status.moveStatus.x;
                    }
                    var canScrollOffset = isVertical ? -_this2.layout.scrollHeight + _this2.layout.clientHeight : -_this2.layout.scrollWidth + _this2.layout.clientWidth;
                    offset = Math.min(offset, 0);
                    offset = Math.max(offset, canScrollOffset);
                    setPxStyle(_this2.layout, offset, 'px', isVertical, useLeftInsteadTransform);
                    finalOffset = offset;
                },
                onPanEnd: function onPanEnd() {
                    if (!_this2.props.swipeable || !_this2.props.animated) return;
                    lastOffset = finalOffset;
                    var isVertical = _this2.isTabVertical();
                    var offsetIndex = _this2.getOffsetIndex(finalOffset, isVertical ? _this2.layout.clientHeight : _this2.layout.clientWidth);
                    _this2.setState({
                        isMoving: false
                    });
                    if (offsetIndex === _this2.state.currentTab) {
                        if (_this2.props.usePaged) {
                            util_setTransform(_this2.layout.style, _this2.getContentPosByIndex(offsetIndex, _this2.isTabVertical(), _this2.props.useLeftInsteadTransform));
                        }
                    } else {
                        _this2.goToTab(offsetIndex);
                    }
                },
                setCurrentOffset: function setCurrentOffset(offset) {
                    return lastOffset = offset;
                }
            };
        }();
        _this2.onSwipe = function (status) {
            var _this2$props2 = _this2.props,
                tabBarPosition = _this2$props2.tabBarPosition,
                swipeable = _this2$props2.swipeable,
                usePaged = _this2$props2.usePaged;

            if (!swipeable || !usePaged || _this2.isTabVertical()) return;
            // DIRECTION_NONE	1
            // DIRECTION_LEFT	2
            // DIRECTION_RIGHT	4
            // DIRECTION_UP	8
            // DIRECTION_DOWN	16
            // DIRECTION_HORIZONTAL	6
            // DIRECTION_VERTICAL	24
            // DIRECTION_ALL	30
            switch (tabBarPosition) {
                case 'top':
                case 'bottom':
                    switch (status.direction) {
                        case 2:
                            if (!_this2.isTabVertical()) {
                                _this2.goToTab(_this2.prevCurrentTab + 1);
                            }
                        case 8:
                            if (_this2.isTabVertical()) {
                                _this2.goToTab(_this2.prevCurrentTab + 1);
                            }
                            break;
                        case 4:
                            if (!_this2.isTabVertical()) {
                                _this2.goToTab(_this2.prevCurrentTab - 1);
                            }
                        case 16:
                            if (_this2.isTabVertical()) {
                                _this2.goToTab(_this2.prevCurrentTab - 1);
                            }
                            break;
                    }
                    break;
            }
        };
        _this2.setContentLayout = function (div) {
            _this2.layout = div;
        };
        _this2.state = extends_default()({}, _this2.state, new Tabs_StateType(), { contentPos: _this2.getContentPosByIndex(_this2.getTabIndex(props), _this2.isTabVertical(props.tabDirection), props.useLeftInsteadTransform) });
        return _this2;
    }

    createClass_default()(Tabs, [{
        key: 'goToTab',
        value: function goToTab(index) {
            var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var usePaged = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.props.usePaged;
            var props = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.props;
            var tabDirection = props.tabDirection,
                useLeftInsteadTransform = props.useLeftInsteadTransform;

            var newState = {};
            if (usePaged) {
                newState = {
                    contentPos: this.getContentPosByIndex(index, this.isTabVertical(tabDirection), useLeftInsteadTransform)
                };
            }
            return get_default()(Tabs.prototype.__proto__ || Object.getPrototypeOf(Tabs.prototype), 'goToTab', this).call(this, index, force, newState, props);
        }
    }, {
        key: 'tabClickGoToTab',
        value: function tabClickGoToTab(index) {
            this.goToTab(index, false, true);
        }
    }, {
        key: 'getContentPosByIndex',
        value: function getContentPosByIndex(index, isVertical) {
            var useLeft = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            var value = -index * 100 + '%';
            this.onPan.setCurrentOffset(value);
            if (useLeft) {
                return '' + value;
            } else {
                var translate = isVertical ? '0px, ' + value : value + ', 0px';
                // fix: content overlay TabBar on iOS 10. ( 0px -> 1px )
                return 'translate3d(' + translate + ', 1px)';
            }
        }
    }, {
        key: 'renderContent',
        value: function renderContent() {
            var _this3 = this;

            var getSubElements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getSubElements();
            var _props = this.props,
                prefixCls = _props.prefixCls,
                tabs = _props.tabs,
                animated = _props.animated,
                destroyInactiveTab = _props.destroyInactiveTab,
                useLeftInsteadTransform = _props.useLeftInsteadTransform;
            var _state = this.state,
                currentTab = _state.currentTab,
                isMoving = _state.isMoving,
                contentPos = _state.contentPos;

            var isTabVertical = this.isTabVertical();
            var contentCls = prefixCls + '-content-wrap';
            if (animated && !isMoving) {
                contentCls += ' ' + contentCls + '-animated';
            }
            var contentStyle = animated ? useLeftInsteadTransform ? extends_default()({ position: 'relative' }, this.isTabVertical() ? { top: contentPos } : { left: contentPos }) : getTransformPropValue(contentPos) : extends_default()({ position: 'relative' }, this.isTabVertical() ? { top: -currentTab * 100 + '%' } : { left: -currentTab * 100 + '%' });

            var _getTabBarBaseProps = this.getTabBarBaseProps(),
                instanceId = _getTabBarBaseProps.instanceId;

            return react_default.a.createElement(
                'div',
                { className: contentCls, style: contentStyle, ref: this.setContentLayout },
                tabs.map(function (tab, index) {
                    var cls = prefixCls + '-pane-wrap';
                    if (_this3.state.currentTab === index) {
                        cls += ' ' + cls + '-active';
                    } else {
                        cls += ' ' + cls + '-inactive';
                    }
                    var key = tab.key || 'tab_' + index;
                    // update tab cache
                    if (_this3.shouldRenderTab(index)) {
                        _this3.tabCache[index] = _this3.getSubElement(tab, index, getSubElements);
                    } else if (destroyInactiveTab) {
                        _this3.tabCache[index] = undefined;
                    }
                    return react_default.a.createElement(
                        TabPane_TabPane,
                        { key: key, className: cls, active: currentTab === index, role: 'tabpanel', 'aria-hidden': currentTab !== index, 'aria-labelledby': 'm-tabs-' + instanceId + '-' + index, fixX: isTabVertical, fixY: !isTabVertical },
                        _this3.tabCache[index]
                    );
                })
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                prefixCls = _props2.prefixCls,
                tabBarPosition = _props2.tabBarPosition,
                tabDirection = _props2.tabDirection,
                useOnPan = _props2.useOnPan,
                noRenderContent = _props2.noRenderContent;

            var isTabVertical = this.isTabVertical(tabDirection);
            var tabBarProps = extends_default()({}, this.getTabBarBaseProps());
            var onPan = !isTabVertical && useOnPan ? this.onPan : {};
            var content = [react_default.a.createElement(
                'div',
                { key: 'tabBar', className: prefixCls + '-tab-bar-wrap' },
                this.renderTabBar(tabBarProps, DefaultTabBar_DefaultTabBar)
            ), !noRenderContent && react_default.a.createElement(
                rc_gesture_es,
                extends_default()({ key: '$content', onSwipe: this.onSwipe }, onPan),
                this.renderContent()
            )];
            return react_default.a.createElement(
                'div',
                { className: prefixCls + ' ' + prefixCls + '-' + tabDirection + ' ' + prefixCls + '-' + tabBarPosition },
                tabBarPosition === 'top' || tabBarPosition === 'left' ? content : content.reverse()
            );
        }
    }]);

    return Tabs;
}(Tabs_base_Tabs);
Tabs_Tabs.DefaultTabBar = DefaultTabBar_DefaultTabBar;
Tabs_Tabs.defaultProps = extends_default()({}, Tabs_base_Tabs.defaultProps, { prefixCls: 'rmc-tabs', useOnPan: true });
// CONCATENATED MODULE: ./node_modules/rmc-tabs/es/index.js


// CONCATENATED MODULE: ./node_modules/antd-mobile/es/tabs/index.js







var tabs_DefaultTabBar = function (_RMCDefaultTabBar) {
    inherits_default()(DefaultTabBar, _RMCDefaultTabBar);

    function DefaultTabBar() {
        classCallCheck_default()(this, DefaultTabBar);

        return possibleConstructorReturn_default()(this, (DefaultTabBar.__proto__ || Object.getPrototypeOf(DefaultTabBar)).apply(this, arguments));
    }

    return DefaultTabBar;
}(DefaultTabBar_DefaultTabBar);
tabs_DefaultTabBar.defaultProps = extends_default()({}, DefaultTabBar_DefaultTabBar.defaultProps, { prefixCls: 'am-tabs-default-bar' });

var tabs_Tabs = function (_React$PureComponent) {
    inherits_default()(Tabs, _React$PureComponent);

    function Tabs() {
        classCallCheck_default()(this, Tabs);

        var _this2 = possibleConstructorReturn_default()(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));

        _this2.renderTabBar = function (props) {
            var renderTab = _this2.props.renderTab;

            return react["createElement"](tabs_DefaultTabBar, extends_default()({}, props, { renderTab: renderTab }));
        };
        return _this2;
    }

    createClass_default()(Tabs, [{
        key: 'render',
        value: function render() {
            return react["createElement"](Tabs_Tabs, extends_default()({ renderTabBar: this.renderTabBar }, this.props));
        }
    }]);

    return Tabs;
}(react["PureComponent"]);

/* harmony default export */ var es_tabs = (tabs_Tabs);

tabs_Tabs.DefaultTabBar = tabs_DefaultTabBar;
tabs_Tabs.defaultProps = {
    prefixCls: 'am-tabs'
};
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/tab-bar/Tab.js








var Tab_Tab = function (_React$PureComponent) {
    inherits_default()(Tab, _React$PureComponent);

    function Tab() {
        classCallCheck_default()(this, Tab);

        var _this = possibleConstructorReturn_default()(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).apply(this, arguments));

        _this.renderIcon = function () {
            var _this$props = _this.props,
                dot = _this$props.dot,
                badge = _this$props.badge,
                selected = _this$props.selected,
                selectedIcon = _this$props.selectedIcon,
                icon = _this$props.icon,
                title = _this$props.title,
                prefixCls = _this$props.prefixCls;

            var iconRes = selected ? selectedIcon : icon;
            var iconDom = react["isValidElement"](iconRes) ? iconRes : react["createElement"]('img', { className: prefixCls + '-image', src: iconRes ? iconRes.uri : iconRes, alt: title });
            if (badge) {
                return react["createElement"](
                    es_badge,
                    { text: badge, className: prefixCls + '-badge tab-badge' },
                    ' ',
                    iconDom,
                    ' '
                );
            }
            if (dot) {
                return react["createElement"](
                    es_badge,
                    { dot: true, className: prefixCls + '-badge tab-dot' },
                    iconDom
                );
            }
            return iconDom;
        };
        _this.onClick = function () {
            var onClick = _this.props.onClick;
            if (onClick) {
                onClick();
            }
        };
        return _this;
    }

    createClass_default()(Tab, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                title = _props.title,
                prefixCls = _props.prefixCls,
                selected = _props.selected,
                unselectedTintColor = _props.unselectedTintColor,
                tintColor = _props.tintColor;

            var iconColor = selected ? tintColor : unselectedTintColor;
            return react["createElement"](
                'div',
                extends_default()({}, this.props.dataAttrs, { onClick: this.onClick, className: '' + prefixCls }),
                react["createElement"](
                    'div',
                    { className: prefixCls + '-icon', style: { color: iconColor } },
                    this.renderIcon()
                ),
                react["createElement"](
                    'p',
                    { className: prefixCls + '-title', style: { color: selected ? tintColor : unselectedTintColor } },
                    title
                )
            );
        }
    }]);

    return Tab;
}(react["PureComponent"]);

/* harmony default export */ var tab_bar_Tab = (Tab_Tab);
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/tab-bar/index.js









var tab_bar_Item = function (_React$Component) {
    inherits_default()(Item, _React$Component);

    function Item() {
        classCallCheck_default()(this, Item);

        return possibleConstructorReturn_default()(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
    }

    createClass_default()(Item, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                style = _props.style;

            return react["createElement"](
                'div',
                { className: prefixCls, style: style },
                this.props.children
            );
        }
    }]);

    return Item;
}(react["Component"]);
tab_bar_Item.defaultProps = {
    prefixCls: 'am-tab-bar-item',
    title: ''
};

var tab_bar_AntTabBar = function (_React$Component2) {
    inherits_default()(AntTabBar, _React$Component2);

    function AntTabBar() {
        classCallCheck_default()(this, AntTabBar);

        var _this2 = possibleConstructorReturn_default()(this, (AntTabBar.__proto__ || Object.getPrototypeOf(AntTabBar)).apply(this, arguments));

        _this2.getTabs = function () {
            var tabs = [];
            react["Children"].forEach(_this2.props.children, function (c) {
                if (c) {
                    tabs.push(extends_default()({}, c.props));
                }
            });
            return tabs;
        };
        _this2.renderTabBar = function () {
            var _this2$props = _this2.props,
                barTintColor = _this2$props.barTintColor,
                prefixCls = _this2$props.prefixCls,
                tintColor = _this2$props.tintColor,
                unselectedTintColor = _this2$props.unselectedTintColor,
                hidden = _this2$props.hidden,
                tabBarPosition = _this2$props.tabBarPosition;

            var tabsData = _this2.getTabs();
            var content = Array.isArray(tabsData) ? tabsData.map(function (cProps, index) {
                return react["createElement"](tab_bar_Tab, { key: index, prefixCls: _this2.props.prefixCls + '-tab', badge: cProps.badge, dot: cProps.dot, selected: cProps.selected, icon: cProps.icon, selectedIcon: cProps.selectedIcon, title: cProps.title, tintColor: tintColor, unselectedTintColor: unselectedTintColor, dataAttrs: getDataAttr(cProps), onClick: function onClick() {
                        return cProps.onPress && cProps.onPress();
                    } });
            }) : null;
            var cls = prefixCls + '-bar';
            if (hidden) {
                cls += ' ' + prefixCls + '-bar-hidden-' + tabBarPosition;
            }
            return react["createElement"](
                'div',
                { className: cls, style: { backgroundColor: barTintColor } },
                content
            );
        };
        return _this2;
    }

    createClass_default()(AntTabBar, [{
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                prefixCls = _props2.prefixCls,
                children = _props2.children,
                animated = _props2.animated,
                swipeable = _props2.swipeable,
                noRenderContent = _props2.noRenderContent,
                prerenderingSiblingsNumber = _props2.prerenderingSiblingsNumber,
                tabBarPosition = _props2.tabBarPosition;

            var tabs = this.getTabs();
            var activeIndex = 0;
            if (Array.isArray(tabs)) {
                tabs.forEach(function (tab, index) {
                    if (tab.selected) {
                        activeIndex = index;
                    }
                });
            }
            return react["createElement"](
                'div',
                { className: prefixCls },
                react["createElement"](
                    es_tabs,
                    { tabs: tabs, renderTabBar: this.renderTabBar, tabBarPosition: tabBarPosition, page: activeIndex < 0 ? undefined : activeIndex, animated: animated, swipeable: swipeable, noRenderContent: noRenderContent, prerenderingSiblingsNumber: prerenderingSiblingsNumber },
                    children
                )
            );
        }
    }]);

    return AntTabBar;
}(react["Component"]);

tab_bar_AntTabBar.defaultProps = {
    prefixCls: 'am-tab-bar',
    barTintColor: 'white',
    tintColor: '#108ee9',
    hidden: false,
    unselectedTintColor: '#888',
    placeholder: '正在加载',
    animated: false,
    swipeable: false,
    prerenderingSiblingsNumber: 1,
    tabBarPosition: 'bottom'
};
tab_bar_AntTabBar.Item = tab_bar_Item;
/* harmony default export */ var tab_bar = (tab_bar_AntTabBar);
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/tag/index.js












var tag_Tag = function (_React$Component) {
    inherits_default()(Tag, _React$Component);

    function Tag(props) {
        classCallCheck_default()(this, Tag);

        var _this = possibleConstructorReturn_default()(this, (Tag.__proto__ || Object.getPrototypeOf(Tag)).call(this, props));

        _this.onClick = function () {
            var _this$props = _this.props,
                disabled = _this$props.disabled,
                onChange = _this$props.onChange;

            if (disabled) {
                return;
            }
            var isSelect = _this.state.selected;
            _this.setState({
                selected: !isSelect
            }, function () {
                if (onChange) {
                    onChange(!isSelect);
                }
            });
        };
        _this.onTagClose = function () {
            if (_this.props.onClose) {
                _this.props.onClose();
            }
            _this.setState({
                closed: true
            }, _this.props.afterClose);
        };
        _this.state = {
            selected: props.selected,
            closed: false
        };
        return _this;
    }

    createClass_default()(Tag, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.selected !== nextProps.selected) {
                this.setState({
                    selected: nextProps.selected
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _classnames;

            var _props = this.props,
                children = _props.children,
                className = _props.className,
                prefixCls = _props.prefixCls,
                disabled = _props.disabled,
                closable = _props.closable,
                small = _props.small,
                style = _props.style;

            var wrapCls = classnames_default()(className, prefixCls, (_classnames = {}, defineProperty_default()(_classnames, prefixCls + '-normal', !disabled && (!this.state.selected || small || closable)), defineProperty_default()(_classnames, prefixCls + '-small', small), defineProperty_default()(_classnames, prefixCls + '-active', this.state.selected && !disabled && !small && !closable), defineProperty_default()(_classnames, prefixCls + '-disabled', disabled), defineProperty_default()(_classnames, prefixCls + '-closable', closable), _classnames));
            var closableDom = closable && !disabled && !small ? react["createElement"](
                es_TouchFeedback,
                { activeClassName: prefixCls + '-close-active' },
                react["createElement"](
                    'div',
                    { className: prefixCls + '-close', role: 'button', onClick: this.onTagClose, 'aria-label': 'remove tag' },
                    react["createElement"](es_icon, { type: 'cross-circle', size: 'xs', 'aria-hidden': 'true' })
                )
            ) : null;
            return !this.state.closed ? react["createElement"](
                'div',
                extends_default()({}, getDataAttr(this.props), { className: wrapCls, onClick: this.onClick, style: style }),
                react["createElement"](
                    'div',
                    { className: prefixCls + '-text' },
                    children
                ),
                closableDom
            ) : null;
        }
    }]);

    return Tag;
}(react["Component"]);

/* harmony default export */ var tag = (tag_Tag);

tag_Tag.defaultProps = {
    prefixCls: 'am-tag',
    disabled: false,
    selected: false,
    closable: false,
    small: false,
    onChange: function onChange() {},
    onClose: function onClose() {},
    afterClose: function afterClose() {}
};
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/view/index.js





var view_rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};


var view_View = function (_React$Component) {
    inherits_default()(View, _React$Component);

    function View() {
        classCallCheck_default()(this, View);

        return possibleConstructorReturn_default()(this, (View.__proto__ || Object.getPrototypeOf(View)).apply(this, arguments));
    }

    createClass_default()(View, [{
        key: 'render',
        value: function render() {
            var props = extends_default()({}, this.props);
            if (Array.isArray(props.style)) {
                var style = {};
                props.style.forEach(function (s) {
                    style = extends_default()({}, style, s);
                });
                props.style = style;
            }

            var _props$Component = props.Component,
                Component = _props$Component === undefined ? 'div' : _props$Component,
                restProps = view_rest(props, ["Component"]);

            return react["createElement"](Component, restProps);
        }
    }]);

    return View;
}(react["Component"]);

/* harmony default export */ var view = (view_View);

view_View.defaultProps = {
    Component: 'div'
};
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/text/index.js







var text_Text = function (_React$Component) {
    inherits_default()(Text, _React$Component);

    function Text() {
        classCallCheck_default()(this, Text);

        return possibleConstructorReturn_default()(this, (Text.__proto__ || Object.getPrototypeOf(Text)).apply(this, arguments));
    }

    createClass_default()(Text, [{
        key: 'render',
        value: function render() {
            return react["createElement"](view, this.props);
        }
    }]);

    return Text;
}(react["Component"]);

/* harmony default export */ var es_text = (text_Text);

text_Text.defaultProps = {
    Component: 'span'
};
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/textarea-item/index.js






var textarea_item_rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
/* tslint:disable:jsx-no-multiline-js */




function textarea_item_noop() {}
function fixControlledValue(value) {
    if (typeof value === 'undefined' || value === null) {
        return '';
    }
    return value;
}
var regexAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]|\n/g;
function countSymbols() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    return text.replace(regexAstralSymbols, '_').length;
}

var textarea_item_TextareaItem = function (_React$Component) {
    inherits_default()(TextareaItem, _React$Component);

    function TextareaItem(props) {
        classCallCheck_default()(this, TextareaItem);

        var _this = possibleConstructorReturn_default()(this, (TextareaItem.__proto__ || Object.getPrototypeOf(TextareaItem)).call(this, props));

        _this.focus = function () {
            _this.textareaRef.focus();
        };
        _this.reAlignHeight = function () {
            var textareaDom = _this.textareaRef;
            textareaDom.style.height = ''; // 字数减少时能自动减小高度
            textareaDom.style.height = textareaDom.scrollHeight + 'px';
        };
        _this.onChange = function (e) {
            var value = e.target.value;
            if ('value' in _this.props) {
                _this.setState({ value: _this.props.value });
            } else {
                _this.setState({ value: value });
            }
            var onChange = _this.props.onChange;

            if (onChange) {
                onChange(value);
            }
            // 设置 defaultValue 时，用户输入不会触发 componentDidUpdate ，此处手工调用
            _this.componentDidUpdate();
        };
        _this.onBlur = function (e) {
            _this.debounceTimeout = setTimeout(function () {
                if (document.activeElement !== _this.textareaRef) {
                    _this.setState({
                        focus: false
                    });
                }
            }, 100);
            var value = e.currentTarget.value;
            if (_this.props.onBlur) {
                // fix autoFocus item blur with flash
                setTimeout(function () {
                    // fix ios12 wechat browser click failure after input
                    if (document.body) {
                        document.body.scrollTop = document.body.scrollTop;
                    }
                }, 100);
                _this.props.onBlur(value);
            }
        };
        _this.onFocus = function (e) {
            if (_this.debounceTimeout) {
                clearTimeout(_this.debounceTimeout);
                _this.debounceTimeout = null;
            }
            _this.setState({
                focus: true
            });
            var value = e.currentTarget.value;
            if (_this.props.onFocus) {
                _this.props.onFocus(value);
            }
        };
        _this.onErrorClick = function () {
            if (_this.props.onErrorClick) {
                _this.props.onErrorClick();
            }
        };
        _this.clearInput = function () {
            _this.setState({
                value: ''
            });
            if (_this.props.onChange) {
                _this.props.onChange('');
            }
        };
        _this.state = {
            focus: false,
            value: props.value || props.defaultValue || ''
        };
        return _this;
    }

    createClass_default()(TextareaItem, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('value' in nextProps) {
                this.setState({
                    value: fixControlledValue(nextProps.value)
                });
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.autoHeight) {
                this.reAlignHeight();
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (this.props.autoHeight && this.state.focus) {
                this.reAlignHeight();
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.debounceTimeout) {
                clearTimeout(this.debounceTimeout);
                this.debounceTimeout = null;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _classnames,
                _classnames2,
                _this2 = this;

            var _a = this.props,
                prefixCls = _a.prefixCls,
                prefixListCls = _a.prefixListCls,
                editable = _a.editable,
                style = _a.style,
                clear = _a.clear,
                children = _a.children,
                error = _a.error,
                className = _a.className,
                count = _a.count,
                labelNumber = _a.labelNumber,
                title = _a.title,
                onErrorClick = _a.onErrorClick,
                autoHeight = _a.autoHeight,
                defaultValue = _a.defaultValue,
                otherProps = textarea_item_rest(_a, ["prefixCls", "prefixListCls", "editable", "style", "clear", "children", "error", "className", "count", "labelNumber", "title", "onErrorClick", "autoHeight", "defaultValue"]);var disabled = otherProps.disabled;
            var _state = this.state,
                value = _state.value,
                focus = _state.focus;

            var hasCount = count > 0 && this.props.rows > 1;
            var wrapCls = classnames_default()(className, prefixListCls + '-item', prefixCls + '-item', (_classnames = {}, defineProperty_default()(_classnames, prefixCls + '-disabled', disabled), defineProperty_default()(_classnames, prefixCls + '-item-single-line', this.props.rows === 1 && !autoHeight), defineProperty_default()(_classnames, prefixCls + '-error', error), defineProperty_default()(_classnames, prefixCls + '-focus', focus), defineProperty_default()(_classnames, prefixCls + '-has-count', hasCount), _classnames));
            var labelCls = classnames_default()(prefixCls + '-label', (_classnames2 = {}, defineProperty_default()(_classnames2, prefixCls + '-label-2', labelNumber === 2), defineProperty_default()(_classnames2, prefixCls + '-label-3', labelNumber === 3), defineProperty_default()(_classnames2, prefixCls + '-label-4', labelNumber === 4), defineProperty_default()(_classnames2, prefixCls + '-label-5', labelNumber === 5), defineProperty_default()(_classnames2, prefixCls + '-label-6', labelNumber === 6), defineProperty_default()(_classnames2, prefixCls + '-label-7', labelNumber === 7), _classnames2));
            var characterLength = countSymbols(value);
            var lengthCtrlProps = {};
            if (count > 0) {
                // Note: If in the iOS environment of dev-tools, It will fail.
                if (IS_IOS) {
                    var entValue = value ? value.replace(regexAstralSymbols, '_') : '';
                    var entLen = entValue ? entValue.split('_').length - 1 : 0;
                    lengthCtrlProps.maxLength = count + entLen - characterLength + (value ? value.length : 0);
                } else {
                    lengthCtrlProps.maxLength = count - characterLength + (value ? value.length : 0);
                }
            }
            return react["createElement"](
                'div',
                { className: wrapCls },
                title && react["createElement"](
                    'div',
                    { className: labelCls },
                    title
                ),
                react["createElement"](
                    'div',
                    { className: prefixCls + '-control' },
                    react["createElement"]('textarea', extends_default()({ ref: function ref(el) {
                            return _this2.textareaRef = el;
                        } }, lengthCtrlProps, otherProps, { value: value, onChange: this.onChange, onBlur: this.onBlur, onFocus: this.onFocus, readOnly: !editable, style: style }))
                ),
                clear && editable && value && characterLength > 0 && react["createElement"](
                    es_TouchFeedback,
                    { activeClassName: prefixCls + '-clear-active' },
                    react["createElement"]('div', { className: prefixCls + '-clear', onClick: this.clearInput })
                ),
                error && react["createElement"]('div', { className: prefixCls + '-error-extra', onClick: this.onErrorClick }),
                hasCount && react["createElement"](
                    'span',
                    { className: prefixCls + '-count' },
                    react["createElement"](
                        'span',
                        null,
                        value ? characterLength : 0
                    ),
                    '/',
                    count
                )
            );
        }
    }]);

    return TextareaItem;
}(react["Component"]);

/* harmony default export */ var textarea_item = (textarea_item_TextareaItem);

textarea_item_TextareaItem.defaultProps = {
    prefixCls: 'am-textarea',
    prefixListCls: 'am-list',
    autoHeight: false,
    editable: true,
    disabled: false,
    placeholder: '',
    clear: false,
    rows: 1,
    onChange: textarea_item_noop,
    onBlur: textarea_item_noop,
    onFocus: textarea_item_noop,
    onErrorClick: textarea_item_noop,
    error: false,
    labelNumber: 5
};
// CONCATENATED MODULE: ./node_modules/rc-util/es/createChainedFunction.js
/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @returns {function|null}
 */
function createChainedFunction() {
  var args = [].slice.call(arguments, 0);

  if (args.length === 1) {
    return args[0];
  }

  return function chainedFunction() {
    for (var i = 0; i < args.length; i++) {
      if (args[i] && args[i].apply) {
        args[i].apply(this, arguments);
      }
    }
  };
}
// CONCATENATED MODULE: ./node_modules/rmc-notification/es/Notice.js









var Notice_Notice = function (_Component) {
  inherits_default()(Notice, _Component);

  function Notice() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck_default()(this, Notice);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn_default()(this, (_ref = Notice.__proto__ || Object.getPrototypeOf(Notice)).call.apply(_ref, [this].concat(args))), _this), _this.close = function () {
      _this.clearCloseTimer();
      _this.props.onClose();
    }, _this.startCloseTimer = function () {
      if (_this.props.duration) {
        _this.closeTimer = setTimeout(function () {
          _this.close();
        }, _this.props.duration * 1000);
      }
    }, _this.clearCloseTimer = function () {
      if (_this.closeTimer) {
        clearTimeout(_this.closeTimer);
        _this.closeTimer = null;
      }
    }, _temp), possibleConstructorReturn_default()(_this, _ret);
  }

  createClass_default()(Notice, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.startCloseTimer();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearCloseTimer();
    }
  }, {
    key: 'render',
    value: function render() {
      var _className;

      var props = this.props;
      var componentClass = props.prefixCls + '-notice';
      var className = (_className = {}, defineProperty_default()(_className, '' + componentClass, 1), defineProperty_default()(_className, componentClass + '-closable', props.closable), defineProperty_default()(_className, props.className, !!props.className), _className);
      return react_default.a.createElement(
        'div',
        { className: classnames_default()(className), style: props.style },
        react_default.a.createElement(
          'div',
          { className: componentClass + '-content' },
          props.children
        ),
        props.closable ? react_default.a.createElement(
          'a',
          { tabIndex: '0', onClick: this.close, className: componentClass + '-close' },
          react_default.a.createElement('span', { className: componentClass + '-close-x' })
        ) : null
      );
    }
  }]);

  return Notice;
}(react["Component"]);

Notice_Notice.propTypes = {
  duration: prop_types_default.a.number,
  onClose: prop_types_default.a.func,
  children: prop_types_default.a.any
};
Notice_Notice.defaultProps = {
  onEnd: function onEnd() {},
  onClose: function onClose() {},

  duration: 1.5,
  style: {
    right: '50%'
  }
};
/* harmony default export */ var es_Notice = (Notice_Notice);
// CONCATENATED MODULE: ./node_modules/rmc-notification/es/Notification.js















var seed = 0;
var Notification_now = Date.now();

function getUuid() {
  return 'rcNotification_' + Notification_now + '_' + seed++;
}

var Notification_Notification = function (_Component) {
  inherits_default()(Notification, _Component);

  function Notification() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck_default()(this, Notification);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn_default()(this, (_ref = Notification.__proto__ || Object.getPrototypeOf(Notification)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      notices: []
    }, _this.add = function (notice) {
      var key = notice.key = notice.key || getUuid();
      _this.setState(function (previousState) {
        var notices = previousState.notices;
        if (!notices.filter(function (v) {
          return v.key === key;
        }).length) {
          return {
            notices: notices.concat(notice)
          };
        }
      });
    }, _this.remove = function (key) {
      _this.setState(function (previousState) {
        return {
          notices: previousState.notices.filter(function (notice) {
            return notice.key !== key;
          })
        };
      });
    }, _temp), possibleConstructorReturn_default()(_this, _ret);
  }

  createClass_default()(Notification, [{
    key: 'getTransitionName',
    value: function getTransitionName() {
      var props = this.props;
      var transitionName = props.transitionName;
      if (!transitionName && props.animation) {
        transitionName = props.prefixCls + '-' + props.animation;
      }
      return transitionName;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this,
          _className;

      var props = this.props;
      var noticeNodes = this.state.notices.map(function (notice) {
        var onClose = createChainedFunction(_this2.remove.bind(_this2, notice.key), notice.onClose);
        return react_default.a.createElement(
          es_Notice,
          extends_default()({
            prefixCls: props.prefixCls
          }, notice, {
            onClose: onClose
          }),
          notice.content
        );
      });
      var className = (_className = {}, defineProperty_default()(_className, props.prefixCls, 1), defineProperty_default()(_className, props.className, !!props.className), _className);
      return react_default.a.createElement(
        'div',
        { className: classnames_default()(className), style: props.style },
        react_default.a.createElement(
          es_Animate,
          { transitionName: this.getTransitionName() },
          noticeNodes
        )
      );
    }
  }]);

  return Notification;
}(react["Component"]);

Notification_Notification.propTypes = {
  prefixCls: prop_types_default.a.string,
  transitionName: prop_types_default.a.string,
  animation: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.object]),
  style: prop_types_default.a.object
};
Notification_Notification.defaultProps = {
  prefixCls: 'rmc-notification',
  animation: 'fade',
  style: {
    top: 65,
    left: '50%'
  }
};


Notification_Notification.newInstance = function newNotificationInstance(properties, callback) {
  var _ref2 = properties || {},
      getContainer = _ref2.getContainer,
      props = objectWithoutProperties_default()(_ref2, ['getContainer']);

  var div = void 0;
  if (getContainer) {
    div = getContainer();
  } else {
    div = document.createElement('div');
    document.body.appendChild(div);
  }
  var called = false;
  function ref(notification) {
    if (called) {
      return;
    }
    called = true;
    callback({
      notice: function notice(noticeProps) {
        notification.add(noticeProps);
      },
      removeNotice: function removeNotice(key) {
        notification.remove(key);
      },

      component: notification,
      destroy: function destroy() {
        react_dom_default.a.unmountComponentAtNode(div);
        if (!getContainer) {
          document.body.removeChild(div);
        }
      }
    });
  }
  react_dom_default.a.render(react_default.a.createElement(Notification_Notification, extends_default()({}, props, { ref: ref })), div);
};

/* harmony default export */ var es_Notification = (Notification_Notification);
// CONCATENATED MODULE: ./node_modules/rmc-notification/es/index.js

/* harmony default export */ var rmc_notification_es = (es_Notification);
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/toast/index.js





var SHORT = 3;
var _config = {
    duration: SHORT,
    mask: true
};
var messageInstance = void 0;
var toast_prefixCls = 'am-toast';
function getMessageInstance(mask, callback) {
    var _classnames;

    if (messageInstance) {
        messageInstance.destroy();
        messageInstance = null;
    }
    rmc_notification_es.newInstance({
        prefixCls: toast_prefixCls,
        style: {},
        transitionName: 'am-fade',
        className: classnames_default()((_classnames = {}, defineProperty_default()(_classnames, toast_prefixCls + '-mask', mask), defineProperty_default()(_classnames, toast_prefixCls + '-nomask', !mask), _classnames))
    }, function (notification) {
        return callback && callback(notification);
    });
}
function toast_notice(content, type) {
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _config.duration;
    var _onClose = arguments[3];
    var mask = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _config.mask;

    var iconTypes = {
        info: '',
        success: 'success',
        fail: 'fail',
        offline: 'dislike',
        loading: 'loading'
    };
    var iconType = iconTypes[type];
    getMessageInstance(mask, function (notification) {
        messageInstance = notification;
        notification.notice({
            duration: duration,
            style: {},
            content: !!iconType ? react["createElement"](
                'div',
                { className: toast_prefixCls + '-text ' + toast_prefixCls + '-text-icon', role: 'alert', 'aria-live': 'assertive' },
                react["createElement"](es_icon, { type: iconType, size: 'lg' }),
                react["createElement"](
                    'div',
                    { className: toast_prefixCls + '-text-info' },
                    content
                )
            ) : react["createElement"](
                'div',
                { className: toast_prefixCls + '-text', role: 'alert', 'aria-live': 'assertive' },
                react["createElement"](
                    'div',
                    null,
                    content
                )
            ),
            closable: true,
            onClose: function onClose() {
                if (_onClose) {
                    _onClose();
                }
                notification.destroy();
                notification = null;
                messageInstance = null;
            }
        });
    });
}
/* harmony default export */ var es_toast = ({
    SHORT: SHORT,
    LONG: 8,
    show: function show(content, duration, mask) {
        return toast_notice(content, 'info', duration, function () {}, mask);
    },
    info: function info(content, duration, onClose, mask) {
        return toast_notice(content, 'info', duration, onClose, mask);
    },
    success: function success(content, duration, onClose, mask) {
        return toast_notice(content, 'success', duration, onClose, mask);
    },
    fail: function fail(content, duration, onClose, mask) {
        return toast_notice(content, 'fail', duration, onClose, mask);
    },
    offline: function offline(content, duration, onClose, mask) {
        return toast_notice(content, 'offline', duration, onClose, mask);
    },
    loading: function loading(content, duration, onClose, mask) {
        return toast_notice(content, 'loading', duration, onClose, mask);
    },
    hide: function hide() {
        if (messageInstance) {
            messageInstance.destroy();
            messageInstance = null;
        }
    },
    config: function config() {
        var conf = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var _conf$duration = conf.duration,
            duration = _conf$duration === undefined ? SHORT : _conf$duration,
            mask = conf.mask;

        _config.duration = duration;
        if (mask === false) {
            _config.mask = false;
        }
    }
});
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/white-space/index.js







var white_space_WhiteSpace = function (_React$Component) {
    inherits_default()(WhiteSpace, _React$Component);

    function WhiteSpace() {
        classCallCheck_default()(this, WhiteSpace);

        return possibleConstructorReturn_default()(this, (WhiteSpace.__proto__ || Object.getPrototypeOf(WhiteSpace)).apply(this, arguments));
    }

    createClass_default()(WhiteSpace, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                size = _props.size,
                className = _props.className,
                style = _props.style,
                onClick = _props.onClick;

            var wrapCls = classnames_default()(prefixCls, prefixCls + '-' + size, className);
            return react["createElement"]('div', { className: wrapCls, style: style, onClick: onClick });
        }
    }]);

    return WhiteSpace;
}(react["Component"]);

/* harmony default export */ var white_space = (white_space_WhiteSpace);

white_space_WhiteSpace.defaultProps = {
    prefixCls: 'am-whitespace',
    size: 'md'
};
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/wing-blank/index.js







var wing_blank_WingBlank = function (_React$Component) {
    inherits_default()(WingBlank, _React$Component);

    function WingBlank() {
        classCallCheck_default()(this, WingBlank);

        return possibleConstructorReturn_default()(this, (WingBlank.__proto__ || Object.getPrototypeOf(WingBlank)).apply(this, arguments));
    }

    createClass_default()(WingBlank, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                size = _props.size,
                className = _props.className,
                children = _props.children,
                style = _props.style;

            var wrapCls = classnames_default()(prefixCls, prefixCls + '-' + size, className);
            return react["createElement"](
                'div',
                { className: wrapCls, style: style },
                children
            );
        }
    }]);

    return WingBlank;
}(react["Component"]);

/* harmony default export */ var wing_blank = (wing_blank_WingBlank);

wing_blank_WingBlank.defaultProps = {
    prefixCls: 'am-wingblank',
    size: 'lg'
};
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/locale-provider/locale-provider.js








var locale_provider_LocaleProvider = function (_React$Component) {
    inherits_default()(LocaleProvider, _React$Component);

    function LocaleProvider() {
        classCallCheck_default()(this, LocaleProvider);

        return possibleConstructorReturn_default()(this, (LocaleProvider.__proto__ || Object.getPrototypeOf(LocaleProvider)).apply(this, arguments));
    }

    createClass_default()(LocaleProvider, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                antLocale: extends_default()({}, this.props.locale, { exist: true })
            };
        }
    }, {
        key: 'render',
        value: function render() {
            return react["Children"].only(this.props.children);
        }
    }]);

    return LocaleProvider;
}(react["Component"]);

/* harmony default export */ var locale_provider = (locale_provider_LocaleProvider);

locale_provider_LocaleProvider.propTypes = {
    locale: prop_types["object"]
};
locale_provider_LocaleProvider.childContextTypes = {
    antLocale: prop_types["object"]
};
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/locale-provider/index.js

/* harmony default export */ var es_locale_provider = (locale_provider);
// CONCATENATED MODULE: ./node_modules/antd-mobile/es/index.js
// this file is not used if use https://github.com/ant-design/babel-plugin-import
var ENV = "production";
if (ENV !== 'production' && ENV !== 'test' && typeof console !== 'undefined' && console.warn && typeof window !== 'undefined') {
    // tslint:disable-next-line:no-console
    console.warn('You are using a whole package of antd-mobile, ' + 'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.');
}


















































/***/ }),

/***/ "A5Xg":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("NsO/");
var gOPN = __webpack_require__("ar/p").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "AUvm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("5T2Y");
var has = __webpack_require__("B+OT");
var DESCRIPTORS = __webpack_require__("jmDH");
var $export = __webpack_require__("Y7ZC");
var redefine = __webpack_require__("kTiW");
var META = __webpack_require__("6/1s").KEY;
var $fails = __webpack_require__("KUxP");
var shared = __webpack_require__("29s/");
var setToStringTag = __webpack_require__("RfKB");
var uid = __webpack_require__("YqAc");
var wks = __webpack_require__("UWiX");
var wksExt = __webpack_require__("zLkG");
var wksDefine = __webpack_require__("Zxgi");
var enumKeys = __webpack_require__("R+7+");
var isArray = __webpack_require__("kAMH");
var anObject = __webpack_require__("5K7Z");
var isObject = __webpack_require__("93I4");
var toObject = __webpack_require__("JB68");
var toIObject = __webpack_require__("NsO/");
var toPrimitive = __webpack_require__("G8Mo");
var createDesc = __webpack_require__("rr1i");
var _create = __webpack_require__("oVml");
var gOPNExt = __webpack_require__("A5Xg");
var $GOPD = __webpack_require__("vwuL");
var $GOPS = __webpack_require__("mqlF");
var $DP = __webpack_require__("2faE");
var $keys = __webpack_require__("w6GO");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("ar/p").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("NV0k").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("uOPS")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("NegM")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "ApPD":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__("JB68");
var $getPrototypeOf = __webpack_require__("U+KD");

__webpack_require__("zn7N")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "AyUB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("3GJH"), __esModule: true };

/***/ }),

/***/ "B+OT":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "D0FO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    okText: '确定',
    cancelText: '取消'
});

/***/ }),

/***/ "D8kY":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("Ojgd");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "E0u0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @ignore
 * event object for dom
 * @author yiminghe@gmail.com
 */



Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _EventBaseObject = __webpack_require__("QDlc");

var _EventBaseObject2 = _interopRequireDefault(_EventBaseObject);

var _objectAssign = __webpack_require__("Qetd");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var TRUE = true;
var FALSE = false;
var commonProps = ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'eventPhase', 'metaKey', 'shiftKey', 'target', 'timeStamp', 'view', 'type'];

function isNullOrUndefined(w) {
  return w === null || w === undefined;
}

var eventNormalizers = [{
  reg: /^key/,
  props: ['char', 'charCode', 'key', 'keyCode', 'which'],
  fix: function fix(event, nativeEvent) {
    if (isNullOrUndefined(event.which)) {
      event.which = !isNullOrUndefined(nativeEvent.charCode) ? nativeEvent.charCode : nativeEvent.keyCode;
    }

    // add metaKey to non-Mac browsers (use ctrl for PC 's and Meta for Macs)
    if (event.metaKey === undefined) {
      event.metaKey = event.ctrlKey;
    }
  }
}, {
  reg: /^touch/,
  props: ['touches', 'changedTouches', 'targetTouches']
}, {
  reg: /^hashchange$/,
  props: ['newURL', 'oldURL']
}, {
  reg: /^gesturechange$/i,
  props: ['rotation', 'scale']
}, {
  reg: /^(mousewheel|DOMMouseScroll)$/,
  props: [],
  fix: function fix(event, nativeEvent) {
    var deltaX = undefined;
    var deltaY = undefined;
    var delta = undefined;
    var wheelDelta = nativeEvent.wheelDelta;
    var axis = nativeEvent.axis;
    var wheelDeltaY = nativeEvent.wheelDeltaY;
    var wheelDeltaX = nativeEvent.wheelDeltaX;
    var detail = nativeEvent.detail;

    // ie/webkit
    if (wheelDelta) {
      delta = wheelDelta / 120;
    }

    // gecko
    if (detail) {
      // press control e.detail == 1 else e.detail == 3
      delta = 0 - (detail % 3 === 0 ? detail / 3 : detail);
    }

    // Gecko
    if (axis !== undefined) {
      if (axis === event.HORIZONTAL_AXIS) {
        deltaY = 0;
        deltaX = 0 - delta;
      } else if (axis === event.VERTICAL_AXIS) {
        deltaX = 0;
        deltaY = delta;
      }
    }

    // Webkit
    if (wheelDeltaY !== undefined) {
      deltaY = wheelDeltaY / 120;
    }
    if (wheelDeltaX !== undefined) {
      deltaX = -1 * wheelDeltaX / 120;
    }

    // 默认 deltaY (ie)
    if (!deltaX && !deltaY) {
      deltaY = delta;
    }

    if (deltaX !== undefined) {
      /**
       * deltaX of mousewheel event
       * @property deltaX
       * @member Event.DomEvent.Object
       */
      event.deltaX = deltaX;
    }

    if (deltaY !== undefined) {
      /**
       * deltaY of mousewheel event
       * @property deltaY
       * @member Event.DomEvent.Object
       */
      event.deltaY = deltaY;
    }

    if (delta !== undefined) {
      /**
       * delta of mousewheel event
       * @property delta
       * @member Event.DomEvent.Object
       */
      event.delta = delta;
    }
  }
}, {
  reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
  props: ['buttons', 'clientX', 'clientY', 'button', 'offsetX', 'relatedTarget', 'which', 'fromElement', 'toElement', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY'],
  fix: function fix(event, nativeEvent) {
    var eventDoc = undefined;
    var doc = undefined;
    var body = undefined;
    var target = event.target;
    var button = nativeEvent.button;

    // Calculate pageX/Y if missing and clientX/Y available
    if (target && isNullOrUndefined(event.pageX) && !isNullOrUndefined(nativeEvent.clientX)) {
      eventDoc = target.ownerDocument || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;
      event.pageX = nativeEvent.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = nativeEvent.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
    }

    // which for click: 1 === left; 2 === middle; 3 === right
    // do not use button
    if (!event.which && button !== undefined) {
      if (button & 1) {
        event.which = 1;
      } else if (button & 2) {
        event.which = 3;
      } else if (button & 4) {
        event.which = 2;
      } else {
        event.which = 0;
      }
    }

    // add relatedTarget, if necessary
    if (!event.relatedTarget && event.fromElement) {
      event.relatedTarget = event.fromElement === target ? event.toElement : event.fromElement;
    }

    return event;
  }
}];

function retTrue() {
  return TRUE;
}

function retFalse() {
  return FALSE;
}

function DomEventObject(nativeEvent) {
  var type = nativeEvent.type;

  var isNative = typeof nativeEvent.stopPropagation === 'function' || typeof nativeEvent.cancelBubble === 'boolean';

  _EventBaseObject2['default'].call(this);

  this.nativeEvent = nativeEvent;

  // in case dom event has been mark as default prevented by lower dom node
  var isDefaultPrevented = retFalse;
  if ('defaultPrevented' in nativeEvent) {
    isDefaultPrevented = nativeEvent.defaultPrevented ? retTrue : retFalse;
  } else if ('getPreventDefault' in nativeEvent) {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=691151
    isDefaultPrevented = nativeEvent.getPreventDefault() ? retTrue : retFalse;
  } else if ('returnValue' in nativeEvent) {
    isDefaultPrevented = nativeEvent.returnValue === FALSE ? retTrue : retFalse;
  }

  this.isDefaultPrevented = isDefaultPrevented;

  var fixFns = [];
  var fixFn = undefined;
  var l = undefined;
  var prop = undefined;
  var props = commonProps.concat();

  eventNormalizers.forEach(function (normalizer) {
    if (type.match(normalizer.reg)) {
      props = props.concat(normalizer.props);
      if (normalizer.fix) {
        fixFns.push(normalizer.fix);
      }
    }
  });

  l = props.length;

  // clone properties of the original event object
  while (l) {
    prop = props[--l];
    this[prop] = nativeEvent[prop];
  }

  // fix target property, if necessary
  if (!this.target && isNative) {
    this.target = nativeEvent.srcElement || document; // srcElement might not be defined either
  }

  // check if target is a text node (safari)
  if (this.target && this.target.nodeType === 3) {
    this.target = this.target.parentNode;
  }

  l = fixFns.length;

  while (l) {
    fixFn = fixFns[--l];
    fixFn(this, nativeEvent);
  }

  this.timeStamp = nativeEvent.timeStamp || Date.now();
}

var EventBaseObjectProto = _EventBaseObject2['default'].prototype;

(0, _objectAssign2['default'])(DomEventObject.prototype, EventBaseObjectProto, {
  constructor: DomEventObject,

  preventDefault: function preventDefault() {
    var e = this.nativeEvent;

    // if preventDefault exists run it on the original event
    if (e.preventDefault) {
      e.preventDefault();
    } else {
      // otherwise set the returnValue property of the original event to FALSE (IE)
      e.returnValue = FALSE;
    }

    EventBaseObjectProto.preventDefault.call(this);
  },

  stopPropagation: function stopPropagation() {
    var e = this.nativeEvent;

    // if stopPropagation exists run it on the original event
    if (e.stopPropagation) {
      e.stopPropagation();
    } else {
      // otherwise set the cancelBubble property of the original event to TRUE (IE)
      e.cancelBubble = TRUE;
    }

    EventBaseObjectProto.stopPropagation.call(this);
  }
});

exports['default'] = DomEventObject;
module.exports = exports['default'];

/***/ }),

/***/ "EJiy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__("F+2o");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__("+JPL");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "F+2o":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("2Nb0"), __esModule: true };

/***/ }),

/***/ "FYw3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__("EJiy");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ "FlQf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("ccE7")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("MPFp")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "FpHa":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "G8Mo":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("93I4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "GqFC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var locale = {
    title: '日期选择',
    today: '今天',
    month: '月',
    year: '年',
    am: '上午',
    pm: '下午',
    dateTimeFormat: 'yyyy年MM月dd日 星期w hh:mm',
    dateFormat: 'yyyy年MM月dd日 星期w',
    noChoose: '未选择',
    week: ['日', '一', '二', '三', '四', '五', '六'],
    clear: '清除',
    selectTime: '选择时间',
    selectStartTime: '选择开始时间',
    selectEndTime: '选择结束时间',
    start: '开始',
    end: '结束',
    begin: '起',
    over: '止',
    begin_over: '起/止',
    confirm: '确认',
    monthTitle: 'yyyy年MM月',
    loadPrevMonth: '加载上一个月',
    yesterday: '昨天',
    lastWeek: '近一周',
    lastMonth: '近一个月'
};
/* harmony default export */ __webpack_exports__["a"] = (locale);

/***/ }),

/***/ "Gytx":
/***/ (function(module, exports) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ "Hfiw":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__("Y7ZC");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__("6tYh").set });


/***/ }),

/***/ "Hsns":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("93I4");
var document = __webpack_require__("5T2Y").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "IP1Z":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("2faE");
var createDesc = __webpack_require__("rr1i");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "JB68":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("Jes0");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "JO7F":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("/eQG"), __esModule: true };

/***/ }),

/***/ "JbBM":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("Hfiw");
module.exports = __webpack_require__("WEpk").Object.setPrototypeOf;


/***/ }),

/***/ "Jes0":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "KUxP":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "LIAx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = addEventListener;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _EventObject = __webpack_require__("E0u0");

var _EventObject2 = _interopRequireDefault(_EventObject);

function addEventListener(target, eventType, callback, option) {
  function wrapCallback(e) {
    var ne = new _EventObject2['default'](e);
    callback.call(target, ne);
  }

  if (target.addEventListener) {
    var _ret = (function () {
      var useCapture = false;
      if (typeof option === 'object') {
        useCapture = option.capture || false;
      } else if (typeof option === 'boolean') {
        useCapture = option;
      }

      target.addEventListener(eventType, wrapCallback, option || false);

      return {
        v: {
          remove: function remove() {
            target.removeEventListener(eventType, wrapCallback, useCapture);
          }
        }
      };
    })();

    if (typeof _ret === 'object') return _ret.v;
  } else if (target.attachEvent) {
    target.attachEvent('on' + eventType, wrapCallback);
    return {
      remove: function remove() {
        target.detachEvent('on' + eventType, wrapCallback);
      }
    };
  }
}

module.exports = exports['default'];

/***/ }),

/***/ "M1xp":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("a0xu");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "MPFp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("uOPS");
var $export = __webpack_require__("Y7ZC");
var redefine = __webpack_require__("kTiW");
var hide = __webpack_require__("NegM");
var Iterators = __webpack_require__("SBuE");
var $iterCreate = __webpack_require__("j2DC");
var setToStringTag = __webpack_require__("RfKB");
var getPrototypeOf = __webpack_require__("U+KD");
var ITERATOR = __webpack_require__("UWiX")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "Mv4v":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var React = _interopRequireWildcard(__webpack_require__("q1tI"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

;

var Item = function Item(_props) {
  return null;
};

function _default(ComposedComponent) {
  var _a;

  return _a =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(_a, _React$Component);

    function _a() {
      var _this;

      _classCallCheck(this, _a);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(_a).apply(this, arguments));

      _this.select = function (value, itemHeight, scrollTo) {
        var children = React.Children.toArray(_this.props.children);

        for (var i = 0, len = children.length; i < len; i++) {
          if (children[i].props.value === value) {
            _this.selectByIndex(i, itemHeight, scrollTo);

            return;
          }
        }

        _this.selectByIndex(0, itemHeight, scrollTo);
      };

      _this.doScrollingComplete = function (top, itemHeight, fireValueChange) {
        var children = React.Children.toArray(_this.props.children);

        var index = _this.computeChildIndex(top, itemHeight, children.length);

        var child = children[index];

        if (child) {
          fireValueChange(child.props.value);
        } else if (console.warn) {
          console.warn('child not found', children, index);
        }
      };

      return _this;
    }

    _createClass(_a, [{
      key: "selectByIndex",
      value: function selectByIndex(index, itemHeight, zscrollTo) {
        if (index < 0 || index >= React.Children.count(this.props.children) || !itemHeight) {
          return;
        }

        zscrollTo(index * itemHeight);
      }
    }, {
      key: "computeChildIndex",
      value: function computeChildIndex(top, itemHeight, childrenLength) {
        var index = Math.round(top / itemHeight);
        return Math.min(index, childrenLength - 1);
      }
    }, {
      key: "render",
      value: function render() {
        return React.createElement(ComposedComponent, _extends({}, this.props, {
          doScrollingComplete: this.doScrollingComplete,
          computeChildIndex: this.computeChildIndex,
          select: this.select
        }));
      }
    }]);

    return _a;
  }(React.Component), _a.Item = Item, _a;
}

/***/ }),

/***/ "MvwC":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("5T2Y").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "NV0k":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "NegM":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("2faE");
var createDesc = __webpack_require__("rr1i");
module.exports = __webpack_require__("jmDH") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "NsO/":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("M1xp");
var defined = __webpack_require__("Jes0");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "NwJ3":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("SBuE");
var ITERATOR = __webpack_require__("UWiX")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "ODBD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TyAF");



const useMessageBox = () => {
  const {
    store
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(mobx_react__WEBPACK_IMPORTED_MODULE_1__[/* MobXProviderContext */ "a"]);
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((type, title, message) => {
    store.showMessageBox(type, title, message);
  }, []);
};

/* harmony default export */ __webpack_exports__["a"] = (useMessageBox);

/***/ }),

/***/ "Ojgd":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "P2sY":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("UbbE"), __esModule: true };

/***/ }),

/***/ "PFWz":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

try {
  var index = __webpack_require__("zs13");
} catch (err) {
  var index = __webpack_require__("zs13");
}

/**
 * Whitespace regexp.
 */

var re = /\s+/;

/**
 * toString reference.
 */

var toString = Object.prototype.toString;

/**
 * Wrap `el` in a `ClassList`.
 *
 * @param {Element} el
 * @return {ClassList}
 * @api public
 */

module.exports = function(el){
  return new ClassList(el);
};

/**
 * Initialize a new ClassList for `el`.
 *
 * @param {Element} el
 * @api private
 */

function ClassList(el) {
  if (!el || !el.nodeType) {
    throw new Error('A DOM element reference is required');
  }
  this.el = el;
  this.list = el.classList;
}

/**
 * Add class `name` if not already present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.add = function(name){
  // classList
  if (this.list) {
    this.list.add(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = index(arr, name);
  if (!~i) arr.push(name);
  this.el.className = arr.join(' ');
  return this;
};

/**
 * Remove class `name` when present, or
 * pass a regular expression to remove
 * any which match.
 *
 * @param {String|RegExp} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.remove = function(name){
  if ('[object RegExp]' == toString.call(name)) {
    return this.removeMatching(name);
  }

  // classList
  if (this.list) {
    this.list.remove(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = index(arr, name);
  if (~i) arr.splice(i, 1);
  this.el.className = arr.join(' ');
  return this;
};

/**
 * Remove all classes matching `re`.
 *
 * @param {RegExp} re
 * @return {ClassList}
 * @api private
 */

ClassList.prototype.removeMatching = function(re){
  var arr = this.array();
  for (var i = 0; i < arr.length; i++) {
    if (re.test(arr[i])) {
      this.remove(arr[i]);
    }
  }
  return this;
};

/**
 * Toggle class `name`, can force state via `force`.
 *
 * For browsers that support classList, but do not support `force` yet,
 * the mistake will be detected and corrected.
 *
 * @param {String} name
 * @param {Boolean} force
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.toggle = function(name, force){
  // classList
  if (this.list) {
    if ("undefined" !== typeof force) {
      if (force !== this.list.toggle(name, force)) {
        this.list.toggle(name); // toggle again to correct
      }
    } else {
      this.list.toggle(name);
    }
    return this;
  }

  // fallback
  if ("undefined" !== typeof force) {
    if (!force) {
      this.remove(name);
    } else {
      this.add(name);
    }
  } else {
    if (this.has(name)) {
      this.remove(name);
    } else {
      this.add(name);
    }
  }

  return this;
};

/**
 * Return an array of classes.
 *
 * @return {Array}
 * @api public
 */

ClassList.prototype.array = function(){
  var className = this.el.getAttribute('class') || '';
  var str = className.replace(/^\s+|\s+$/g, '');
  var arr = str.split(re);
  if ('' === arr[0]) arr.shift();
  return arr;
};

/**
 * Check if class `name` is present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.has =
ClassList.prototype.contains = function(name){
  return this.list
    ? this.list.contains(name)
    : !! ~index(this.array(), name);
};


/***/ }),

/***/ "PyX8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rmc_date_picker_es_locale_zh_CN__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("t6uM");

/* harmony default export */ __webpack_exports__["default"] = ({
    okText: '确定',
    dismissText: '取消',
    extra: '请选择',
    DatePickerLocale: rmc_date_picker_es_locale_zh_CN__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]
});

/***/ }),

/***/ "QDlc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @ignore
 * base event object for custom and dom event.
 * @author yiminghe@gmail.com
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});
function returnFalse() {
  return false;
}

function returnTrue() {
  return true;
}

function EventBaseObject() {
  this.timeStamp = Date.now();
  this.target = undefined;
  this.currentTarget = undefined;
}

EventBaseObject.prototype = {
  isEventObject: 1,

  constructor: EventBaseObject,

  isDefaultPrevented: returnFalse,

  isPropagationStopped: returnFalse,

  isImmediatePropagationStopped: returnFalse,

  preventDefault: function preventDefault() {
    this.isDefaultPrevented = returnTrue;
  },

  stopPropagation: function stopPropagation() {
    this.isPropagationStopped = returnTrue;
  },

  stopImmediatePropagation: function stopImmediatePropagation() {
    this.isImmediatePropagationStopped = returnTrue;
    // fixed 1.2
    // call stopPropagation implicitly
    this.stopPropagation();
  },

  halt: function halt(immediate) {
    if (immediate) {
      this.stopImmediatePropagation();
    } else {
      this.stopPropagation();
    }
    this.preventDefault();
  }
};

exports["default"] = EventBaseObject;
module.exports = exports["default"];

/***/ }),

/***/ "QMMT":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("a0xu");
var TAG = __webpack_require__("UWiX")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "QbLZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__("P2sY");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
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

/***/ }),

/***/ "R+7+":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("w6GO");
var gOPS = __webpack_require__("mqlF");
var pIE = __webpack_require__("NV0k");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "RU/L":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("Rqdy");
var $Object = __webpack_require__("WEpk").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "RfKB":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("2faE").f;
var has = __webpack_require__("B+OT");
var TAG = __webpack_require__("UWiX")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "Rqdy":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("Y7ZC");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("jmDH"), 'Object', { defineProperty: __webpack_require__("2faE").f });


/***/ }),

/***/ "SBuE":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "SEkw":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("RU/L"), __esModule: true };

/***/ }),

/***/ "TSYQ":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "TuGD":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("UWiX")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "U+KD":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("B+OT");
var toObject = __webpack_require__("JB68");
var IE_PROTO = __webpack_require__("VVlx")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "UO39":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "UWiX":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("29s/")('wks');
var uid = __webpack_require__("YqAc");
var Symbol = __webpack_require__("5T2Y").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "UbbE":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("o8NH");
module.exports = __webpack_require__("WEpk").Object.assign;


/***/ }),

/***/ "V7oC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__("SEkw");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "VJsP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__("2GTP");
var $export = __webpack_require__("Y7ZC");
var toObject = __webpack_require__("JB68");
var call = __webpack_require__("sNwI");
var isArrayIter = __webpack_require__("NwJ3");
var toLength = __webpack_require__("tEej");
var createProperty = __webpack_require__("IP1Z");
var getIterFn = __webpack_require__("fNZA");

$export($export.S + $export.F * !__webpack_require__("TuGD")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "VVlx":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("29s/")('keys');
var uid = __webpack_require__("YqAc");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "W070":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("NsO/");
var toLength = __webpack_require__("tEej");
var toAbsoluteIndex = __webpack_require__("D8kY");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "WEpk":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "Y7ZC":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("5T2Y");
var core = __webpack_require__("WEpk");
var ctx = __webpack_require__("2GTP");
var hide = __webpack_require__("NegM");
var has = __webpack_require__("B+OT");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "Y9q/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



/* eslint-disable fb-www/typeof-undefined */
/* eslint-disable no-unused-vars */

var invariant = __webpack_require__("2NuI");

/**
 * Checks if a value is empty.
 */
function isEmpty(value) {
  if (Array.isArray(value)) {
    return value.length === 0;
  } else if (typeof value === 'object') {
    if (value) {
      !(!isIterable(value) || value.size === undefined) ?  false ? undefined : invariant(false) : void 0;
      for (var _ in value) {
        return false;
      }
    }
    return true;
  } else {
    return !value;
  }
}

function isIterable(value) {
  if (typeof Symbol === 'undefined') {
    return false;
  }
  return value[Symbol.iterator];
}

module.exports = isEmpty;

/***/ }),

/***/ "YEIV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__("SEkw");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ "YqAc":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "Yz+Y":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("+plK"), __esModule: true };

/***/ }),

/***/ "Zxgi":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("5T2Y");
var core = __webpack_require__("WEpk");
var LIBRARY = __webpack_require__("uOPS");
var wksExt = __webpack_require__("zLkG");
var defineProperty = __webpack_require__("2faE").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "a0xu":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "adOz":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("Zxgi")('asyncIterator');


/***/ }),

/***/ "ar/p":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("5vMV");
var hiddenKeys = __webpack_require__("FpHa").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "bBy9":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("w2d+");
var global = __webpack_require__("5T2Y");
var hide = __webpack_require__("NegM");
var Iterators = __webpack_require__("SBuE");
var TO_STRING_TAG = __webpack_require__("UWiX")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "bQgK":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

//# sourceMappingURL=performance-now.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("8oxB")))

/***/ }),

/***/ "ccE7":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("Ojgd");
var defined = __webpack_require__("Jes0");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "cqCx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Step = undefined;

var _Steps = __webpack_require__("sw/o");

var _Steps2 = _interopRequireDefault(_Steps);

var _Step = __webpack_require__("qDs0");

var _Step2 = _interopRequireDefault(_Step);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_Steps2['default'].Step = _Step2['default'];
exports.Step = _Step2['default'];
exports['default'] = _Steps2['default'];

/***/ }),

/***/ "dl0q":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("Zxgi")('observable');


/***/ }),

/***/ "eUtF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("jmDH") && !__webpack_require__("KUxP")(function () {
  return Object.defineProperty(__webpack_require__("Hsns")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "eaoh":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "fNZA":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("QMMT");
var ITERATOR = __webpack_require__("UWiX")('iterator');
var Iterators = __webpack_require__("SBuE");
module.exports = __webpack_require__("WEpk").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "fpC5":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("2faE");
var anObject = __webpack_require__("5K7Z");
var getKeys = __webpack_require__("w6GO");

module.exports = __webpack_require__("jmDH") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "g3cW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    prevText: '上一页',
    nextText: '下一页'
});

/***/ }),

/***/ "hDam":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "hZiy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    cancelText: '取消'
});

/***/ }),

/***/ "iCc5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "j2DC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("oVml");
var descriptor = __webpack_require__("rr1i");
var setToStringTag = __webpack_require__("RfKB");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("NegM")(IteratorPrototype, __webpack_require__("UWiX")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "jmDH":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("KUxP")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "jo6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),

/***/ "kAMH":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("a0xu");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "kTiW":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("NegM");


/***/ }),

/***/ "kwZ1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__("jmDH");
var getKeys = __webpack_require__("w6GO");
var gOPS = __webpack_require__("mqlF");
var pIE = __webpack_require__("NV0k");
var toObject = __webpack_require__("JB68");
var IObject = __webpack_require__("M1xp");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("KUxP")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "lCc8":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("Y7ZC");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__("oVml") });


/***/ }),

/***/ "m1cH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__("rfXi");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),

/***/ "mRg0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__("s3Ml");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__("AyUB");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__("EJiy");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ "mqlF":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "nmEG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    activateText: '松开立即刷新',
    deactivateText: '下拉可以刷新',
    finishText: '完成刷新'
});

/***/ }),

/***/ "o8NH":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("Y7ZC");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("kwZ1") });


/***/ }),

/***/ "oVml":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("5K7Z");
var dPs = __webpack_require__("fpC5");
var enumBugKeys = __webpack_require__("FpHa");
var IE_PROTO = __webpack_require__("VVlx")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("Hsns")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("MvwC").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "pKt7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rmc_date_picker_es_locale_zh_CN__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("t6uM");

/* harmony default export */ __webpack_exports__["default"] = (rmc_date_picker_es_locale_zh_CN__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),

/***/ "qDs0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("QbLZ");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("YEIV");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__("iCc5");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("V7oC");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("FYw3");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("mRg0");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("q1tI");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("TSYQ");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

function isString(str) {
    return typeof str === 'string';
}

var Step = function (_React$Component) {
    (0, _inherits3['default'])(Step, _React$Component);

    function Step() {
        (0, _classCallCheck3['default'])(this, Step);
        return (0, _possibleConstructorReturn3['default'])(this, (Step.__proto__ || Object.getPrototypeOf(Step)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Step, [{
        key: 'renderIconNode',
        value: function renderIconNode() {
            var _classNames;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                progressDot = _props.progressDot,
                stepNumber = _props.stepNumber,
                status = _props.status,
                title = _props.title,
                description = _props.description,
                icon = _props.icon,
                iconPrefix = _props.iconPrefix;

            var iconNode = void 0;
            var iconClassName = (0, _classnames2['default'])(prefixCls + '-icon', iconPrefix + 'icon', (_classNames = {}, (0, _defineProperty3['default'])(_classNames, iconPrefix + 'icon-' + icon, icon && isString(icon)), (0, _defineProperty3['default'])(_classNames, iconPrefix + 'icon-check', !icon && status === 'finish'), (0, _defineProperty3['default'])(_classNames, iconPrefix + 'icon-cross', !icon && status === 'error'), _classNames));
            var iconDot = _react2['default'].createElement('span', { className: prefixCls + '-icon-dot' });
            // `progressDot` enjoy the highest priority
            if (progressDot) {
                if (typeof progressDot === 'function') {
                    iconNode = _react2['default'].createElement(
                        'span',
                        { className: prefixCls + '-icon' },
                        progressDot(iconDot, { index: stepNumber - 1, status: status, title: title, description: description })
                    );
                } else {
                    iconNode = _react2['default'].createElement(
                        'span',
                        { className: prefixCls + '-icon' },
                        iconDot
                    );
                }
            } else if (icon && !isString(icon)) {
                iconNode = _react2['default'].createElement(
                    'span',
                    { className: prefixCls + '-icon' },
                    icon
                );
            } else if (icon || status === 'finish' || status === 'error') {
                iconNode = _react2['default'].createElement('span', { className: iconClassName });
            } else {
                iconNode = _react2['default'].createElement(
                    'span',
                    { className: prefixCls + '-icon' },
                    stepNumber
                );
            }
            return iconNode;
        }
    }, {
        key: 'render',
        value: function render() {
            var _a = this.props,
                className = _a.className,
                prefixCls = _a.prefixCls,
                style = _a.style,
                itemWidth = _a.itemWidth,
                _a$status = _a.status,
                status = _a$status === undefined ? 'wait' : _a$status,
                iconPrefix = _a.iconPrefix,
                icon = _a.icon,
                wrapperStyle = _a.wrapperStyle,
                adjustMarginRight = _a.adjustMarginRight,
                stepNumber = _a.stepNumber,
                description = _a.description,
                title = _a.title,
                progressDot = _a.progressDot,
                restProps = __rest(_a, ["className", "prefixCls", "style", "itemWidth", "status", "iconPrefix", "icon", "wrapperStyle", "adjustMarginRight", "stepNumber", "description", "title", "progressDot"]);
            var classString = (0, _classnames2['default'])(prefixCls + '-item', prefixCls + '-item-' + status, className, (0, _defineProperty3['default'])({}, prefixCls + '-item-custom', icon));
            var stepItemStyle = (0, _extends3['default'])({}, style);
            if (itemWidth) {
                stepItemStyle.width = itemWidth;
            }
            if (adjustMarginRight) {
                stepItemStyle.marginRight = adjustMarginRight;
            }
            return _react2['default'].createElement(
                'div',
                (0, _extends3['default'])({}, restProps, { className: classString, style: stepItemStyle }),
                _react2['default'].createElement('div', { className: prefixCls + '-item-tail' }),
                _react2['default'].createElement(
                    'div',
                    { className: prefixCls + '-item-icon' },
                    this.renderIconNode()
                ),
                _react2['default'].createElement(
                    'div',
                    { className: prefixCls + '-item-content' },
                    _react2['default'].createElement(
                        'div',
                        { className: prefixCls + '-item-title' },
                        title
                    ),
                    description && _react2['default'].createElement(
                        'div',
                        { className: prefixCls + '-item-description' },
                        description
                    )
                )
            );
        }
    }]);
    return Step;
}(_react2['default'].Component);

exports['default'] = Step;
module.exports = exports['default'];

/***/ }),

/***/ "rfXi":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("0tVQ"), __esModule: true };

/***/ }),

/***/ "rr1i":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "rsGM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addEventListenerWrap;

var _addDomEventListener = _interopRequireDefault(__webpack_require__("LIAx"));

var _reactDom = _interopRequireDefault(__webpack_require__("i8i4"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addEventListenerWrap(target, eventType, cb, option) {
  /* eslint camelcase: 2 */
  var callback = _reactDom.default.unstable_batchedUpdates ? function run(e) {
    _reactDom.default.unstable_batchedUpdates(cb, e);
  } : cb;
  return (0, _addDomEventListener.default)(target, eventType, callback, option);
}

/***/ }),

/***/ "s3Ml":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("JbBM"), __esModule: true };

/***/ }),

/***/ "sNwI":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("5K7Z");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "sQCU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rmc_calendar_es_locale_zh_CN__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GqFC");

/* harmony default export */ __webpack_exports__["default"] = (rmc_calendar_es_locale_zh_CN__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),

/***/ "sw/o":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("QbLZ");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("YEIV");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__("iCc5");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("V7oC");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("FYw3");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("mRg0");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("q1tI");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("TSYQ");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
/* eslint react/no-did-mount-set-state: 0 */

var Steps = function (_Component) {
    (0, _inherits3['default'])(Steps, _Component);

    function Steps() {
        (0, _classCallCheck3['default'])(this, Steps);
        return (0, _possibleConstructorReturn3['default'])(this, (Steps.__proto__ || Object.getPrototypeOf(Steps)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Steps, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var _a = this.props,
                prefixCls = _a.prefixCls,
                _a$style = _a.style,
                style = _a$style === undefined ? {} : _a$style,
                className = _a.className,
                children = _a.children,
                direction = _a.direction,
                labelPlacement = _a.labelPlacement,
                iconPrefix = _a.iconPrefix,
                status = _a.status,
                size = _a.size,
                current = _a.current,
                progressDot = _a.progressDot,
                restProps = __rest(_a, ["prefixCls", "style", "className", "children", "direction", "labelPlacement", "iconPrefix", "status", "size", "current", "progressDot"]);
            var filteredChildren = _react2['default'].Children.toArray(children).filter(function (c) {
                return !!c;
            });
            var adjustedlabelPlacement = !!progressDot ? 'vertical' : labelPlacement;
            var classString = (0, _classnames2['default'])(prefixCls, prefixCls + '-' + direction, className, (_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + size, size), (0, _defineProperty3['default'])(_classNames, prefixCls + '-label-' + adjustedlabelPlacement, direction === 'horizontal'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-dot', !!progressDot), _classNames));
            return _react2['default'].createElement(
                'div',
                (0, _extends3['default'])({ className: classString, style: style }, restProps),
                _react.Children.map(filteredChildren, function (child, index) {
                    if (!child) {
                        return null;
                    }
                    var childProps = (0, _extends3['default'])({ stepNumber: '' + (index + 1), prefixCls: prefixCls,
                        iconPrefix: iconPrefix, wrapperStyle: style, progressDot: progressDot }, child.props);
                    // fix tail color
                    if (status === 'error' && index === current - 1) {
                        childProps.className = prefixCls + '-next-error';
                    }
                    if (!child.props.status) {
                        if (index === current) {
                            childProps.status = status;
                        } else if (index < current) {
                            childProps.status = 'finish';
                        } else {
                            childProps.status = 'wait';
                        }
                    }
                    return (0, _react.cloneElement)(child, childProps);
                })
            );
        }
    }]);
    return Steps;
}(_react.Component);

exports['default'] = Steps;

Steps.defaultProps = {
    prefixCls: 'rmc-steps',
    iconPrefix: 'rmc',
    direction: 'horizontal',
    labelPlacement: 'horizontal',
    current: 0,
    status: 'process',
    size: '',
    progressDot: false
};
module.exports = exports['default'];

/***/ }),

/***/ "t6uM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    year: '年',
    month: '月',
    day: '日',
    hour: '时',
    minute: '分',
    am: '上午',
    pm: '下午'
});

/***/ }),

/***/ "tEej":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("Ojgd");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "tfYw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getPrototypeOf = __webpack_require__("Yz+Y");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = __webpack_require__("JO7F");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

  if (desc === undefined) {
    var parent = (0, _getPrototypeOf2.default)(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

/***/ }),

/***/ "uK0f":
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

function arrayTreeFilter(data, filterFn, options) {
    options = options || {};
    options.childrenKeyName = options.childrenKeyName || "children";
    var children = data || [];
    var result = [];
    var level = 0;
    do {
        var foundItem = children.filter(function (item) {
            return filterFn(item, level);
        })[0];
        if (!foundItem) {
            break;
        }
        result.push(foundItem);
        children = foundItem[options.childrenKeyName] || [];
        level += 1;
    } while (children.length > 0);
    return result;
}

return arrayTreeFilter;

})));


/***/ }),

/***/ "uOPS":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "v5Dd":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__("NsO/");
var $getOwnPropertyDescriptor = __webpack_require__("vwuL").f;

__webpack_require__("zn7N")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "vwuL":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("NV0k");
var createDesc = __webpack_require__("rr1i");
var toIObject = __webpack_require__("NsO/");
var toPrimitive = __webpack_require__("G8Mo");
var has = __webpack_require__("B+OT");
var IE8_DOM_DEFINE = __webpack_require__("eUtF");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("jmDH") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "w2d+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("hDam");
var step = __webpack_require__("UO39");
var Iterators = __webpack_require__("SBuE");
var toIObject = __webpack_require__("NsO/");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("MPFp")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "w6GO":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("5vMV");
var enumBugKeys = __webpack_require__("FpHa");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "wgeU":
/***/ (function(module, exports) {



/***/ }),

/***/ "xEkU":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__("bQgK")
  , root = typeof window === 'undefined' ? global : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix]
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
}
module.exports.cancel = function() {
  caf.apply(root, arguments)
}
module.exports.polyfill = function(object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf
  object.cancelAnimationFrame = caf
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("yLpj")))

/***/ }),

/***/ "zLkG":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("UWiX");


/***/ }),

/***/ "zVbs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    okText: '确定',
    dismissText: '取消',
    extra: '请选择'
});

/***/ }),

/***/ "zn7N":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("Y7ZC");
var core = __webpack_require__("WEpk");
var fails = __webpack_require__("KUxP");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "zs13":
/***/ (function(module, exports) {

module.exports = function(arr, obj){
  if (arr.indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};

/***/ })

}]);