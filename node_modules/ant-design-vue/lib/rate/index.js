"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rateProps = exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _propsUtil = require("../_util/props-util");
var _type = require("../_util/type");
var _util = require("./util");
var _classNames2 = _interopRequireDefault(require("../_util/classNames"));
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _KeyCode = _interopRequireDefault(require("../_util/KeyCode"));
var _StarFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/StarFilled"));
var _tooltip = _interopRequireDefault(require("../tooltip"));
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var _Star = _interopRequireDefault(require("./Star"));
var _useRefs3 = _interopRequireDefault(require("../_util/hooks/useRefs"));
var _FormItemContext = require("../form/FormItemContext");
var rateProps = function rateProps() {
  return {
    prefixCls: String,
    count: Number,
    value: Number,
    allowHalf: {
      type: Boolean,
      default: undefined
    },
    allowClear: {
      type: Boolean,
      default: undefined
    },
    tooltips: Array,
    disabled: {
      type: Boolean,
      default: undefined
    },
    character: _vueTypes.default.any,
    autofocus: {
      type: Boolean,
      default: undefined
    },
    tabindex: _vueTypes.default.oneOfType([_vueTypes.default.number, _vueTypes.default.string]),
    direction: String,
    id: String,
    onChange: Function,
    onHoverChange: Function,
    'onUpdate:value': Function,
    onFocus: Function,
    onBlur: Function,
    onKeydown: Function
  };
};
exports.rateProps = rateProps;
var Rate = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'ARate',
  inheritAttrs: false,
  props: (0, _propsUtil.initDefaultProps)(rateProps(), {
    value: 0,
    count: 5,
    allowHalf: false,
    allowClear: true,
    tabindex: 0,
    direction: 'ltr'
  }),
  // emits: ['hoverChange', 'update:value', 'change', 'focus', 'blur', 'keydown'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      attrs = _ref.attrs,
      emit = _ref.emit,
      expose = _ref.expose;
    var _useConfigInject = (0, _useConfigInject2.default)('rate', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction;
    var formItemContext = (0, _FormItemContext.useInjectFormItemContext)();
    var rateRef = (0, _vue.ref)();
    var _useRefs = (0, _useRefs3.default)(),
      _useRefs2 = (0, _slicedToArray2.default)(_useRefs, 2),
      setRef = _useRefs2[0],
      starRefs = _useRefs2[1];
    var state = (0, _vue.reactive)({
      value: props.value,
      focused: false,
      cleanedValue: null,
      hoverValue: undefined
    });
    (0, _vue.watch)(function () {
      return props.value;
    }, function () {
      state.value = props.value;
    });
    var getStarDOM = function getStarDOM(index) {
      return (0, _propsUtil.findDOMNode)(starRefs.value.get(index));
    };
    var getStarValue = function getStarValue(index, x) {
      var reverse = direction.value === 'rtl';
      var value = index + 1;
      if (props.allowHalf) {
        var starEle = getStarDOM(index);
        var leftDis = (0, _util.getOffsetLeft)(starEle);
        var width = starEle.clientWidth;
        if (reverse && x - leftDis > width / 2) {
          value -= 0.5;
        } else if (!reverse && x - leftDis < width / 2) {
          value -= 0.5;
        }
      }
      return value;
    };
    var changeValue = function changeValue(value) {
      if (props.value === undefined) {
        state.value = value;
      }
      emit('update:value', value);
      emit('change', value);
      formItemContext.onFieldChange();
    };
    var onHover = function onHover(e, index) {
      var hoverValue = getStarValue(index, e.pageX);
      if (hoverValue !== state.cleanedValue) {
        state.hoverValue = hoverValue;
        state.cleanedValue = null;
      }
      emit('hoverChange', hoverValue);
    };
    var onMouseLeave = function onMouseLeave() {
      state.hoverValue = undefined;
      state.cleanedValue = null;
      emit('hoverChange', undefined);
    };
    var onClick = function onClick(event, index) {
      var allowClear = props.allowClear;
      var newValue = getStarValue(index, event.pageX);
      var isReset = false;
      if (allowClear) {
        isReset = newValue === state.value;
      }
      onMouseLeave();
      changeValue(isReset ? 0 : newValue);
      state.cleanedValue = isReset ? newValue : null;
    };
    var onFocus = function onFocus(e) {
      state.focused = true;
      emit('focus', e);
    };
    var onBlur = function onBlur(e) {
      state.focused = false;
      emit('blur', e);
      formItemContext.onFieldBlur();
    };
    var onKeyDown = function onKeyDown(event) {
      var keyCode = event.keyCode;
      var count = props.count,
        allowHalf = props.allowHalf;
      var reverse = direction.value === 'rtl';
      if (keyCode === _KeyCode.default.RIGHT && state.value < count && !reverse) {
        if (allowHalf) {
          state.value += 0.5;
        } else {
          state.value += 1;
        }
        changeValue(state.value);
        event.preventDefault();
      } else if (keyCode === _KeyCode.default.LEFT && state.value > 0 && !reverse) {
        if (allowHalf) {
          state.value -= 0.5;
        } else {
          state.value -= 1;
        }
        changeValue(state.value);
        event.preventDefault();
      } else if (keyCode === _KeyCode.default.RIGHT && state.value > 0 && reverse) {
        if (allowHalf) {
          state.value -= 0.5;
        } else {
          state.value -= 1;
        }
        changeValue(state.value);
        event.preventDefault();
      } else if (keyCode === _KeyCode.default.LEFT && state.value < count && reverse) {
        if (allowHalf) {
          state.value += 0.5;
        } else {
          state.value += 1;
        }
        changeValue(state.value);
        event.preventDefault();
      }
      emit('keydown', event);
    };
    var focus = function focus() {
      if (!props.disabled) {
        rateRef.value.focus();
      }
    };
    var blur = function blur() {
      if (!props.disabled) {
        rateRef.value.blur();
      }
    };
    expose({
      focus: focus,
      blur: blur
    });
    (0, _vue.onMounted)(function () {
      var autofocus = props.autofocus,
        disabled = props.disabled;
      if (autofocus && !disabled) {
        focus();
      }
    });
    var characterRender = function characterRender(node, _ref2) {
      var index = _ref2.index;
      var tooltips = props.tooltips;
      if (!tooltips) return node;
      return (0, _vue.createVNode)(_tooltip.default, {
        "title": tooltips[index]
      }, {
        default: function _default() {
          return [node];
        }
      });
    };
    var character = (0, _propsUtil.getPropsSlot)(slots, props, 'character') || (0, _vue.createVNode)(_StarFilled.default, null, null);
    return function () {
      var count = props.count,
        allowHalf = props.allowHalf,
        disabled = props.disabled,
        tabindex = props.tabindex,
        _props$id = props.id,
        id = _props$id === void 0 ? formItemContext.id.value : _props$id;
      var className = attrs.class,
        style = attrs.style;
      var stars = [];
      var disabledClass = disabled ? "".concat(prefixCls.value, "-disabled") : '';
      for (var index = 0; index < count; index++) {
        stars.push((0, _vue.createVNode)(_Star.default, {
          "ref": setRef(index),
          "key": index,
          "index": index,
          "count": count,
          "disabled": disabled,
          "prefixCls": "".concat(prefixCls.value, "-star"),
          "allowHalf": allowHalf,
          "value": state.hoverValue === undefined ? state.value : state.hoverValue,
          "onClick": onClick,
          "onHover": onHover,
          "character": character,
          "characterRender": characterRender,
          "focused": state.focused
        }, null));
      }
      var rateClassName = (0, _classNames2.default)(prefixCls.value, disabledClass, className, (0, _defineProperty2.default)({}, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'));
      return (0, _vue.createVNode)("ul", (0, _objectSpread2.default)((0, _objectSpread2.default)({}, attrs), {}, {
        "id": id,
        "class": rateClassName,
        "style": style,
        "onMouseleave": disabled ? null : onMouseLeave,
        "tabindex": disabled ? -1 : tabindex,
        "onFocus": disabled ? null : onFocus,
        "onBlur": disabled ? null : onBlur,
        "onKeydown": disabled ? null : onKeyDown,
        "ref": rateRef,
        "role": "radiogroup"
      }), [stars]);
    };
  }
});
var _default2 = (0, _type.withInstall)(Rate);
exports.default = _default2;