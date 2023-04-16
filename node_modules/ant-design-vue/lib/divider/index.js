"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dividerProps = exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _propsUtil = require("../_util/props-util");
var _type = require("../_util/type");
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var dividerProps = function dividerProps() {
  return {
    prefixCls: String,
    type: {
      type: String,
      default: 'horizontal'
    },
    dashed: {
      type: Boolean,
      default: false
    },
    orientation: {
      type: String,
      default: 'center'
    },
    plain: {
      type: Boolean,
      default: false
    },
    orientationMargin: [String, Number]
  };
};
exports.dividerProps = dividerProps;
var Divider = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'ADivider',
  props: dividerProps(),
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var _useConfigInject = (0, _useConfigInject2.default)('divider', props),
      prefixClsRef = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction;
    var hasCustomMarginLeft = (0, _vue.computed)(function () {
      return props.orientation === 'left' && props.orientationMargin != null;
    });
    var hasCustomMarginRight = (0, _vue.computed)(function () {
      return props.orientation === 'right' && props.orientationMargin != null;
    });
    var classString = (0, _vue.computed)(function () {
      var _ref2;
      var type = props.type,
        dashed = props.dashed,
        plain = props.plain;
      var prefixCls = prefixClsRef.value;
      return _ref2 = {}, (0, _defineProperty2.default)(_ref2, prefixCls, true), (0, _defineProperty2.default)(_ref2, "".concat(prefixCls, "-").concat(type), true), (0, _defineProperty2.default)(_ref2, "".concat(prefixCls, "-dashed"), !!dashed), (0, _defineProperty2.default)(_ref2, "".concat(prefixCls, "-plain"), !!plain), (0, _defineProperty2.default)(_ref2, "".concat(prefixCls, "-rtl"), direction.value === 'rtl'), (0, _defineProperty2.default)(_ref2, "".concat(prefixCls, "-no-default-orientation-margin-left"), hasCustomMarginLeft.value), (0, _defineProperty2.default)(_ref2, "".concat(prefixCls, "-no-default-orientation-margin-right"), hasCustomMarginRight.value), _ref2;
    });
    var innerStyle = (0, _vue.computed)(function () {
      var marginValue = typeof props.orientationMargin === 'number' ? "".concat(props.orientationMargin, "px") : props.orientationMargin;
      return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, hasCustomMarginLeft.value && {
        marginLeft: marginValue
      }), hasCustomMarginRight.value && {
        marginRight: marginValue
      });
    });
    var orientationPrefix = (0, _vue.computed)(function () {
      return props.orientation.length > 0 ? '-' + props.orientation : props.orientation;
    });
    return function () {
      var _slots$default;
      var children = (0, _propsUtil.flattenChildren)((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
      return (0, _vue.createVNode)("div", {
        "class": [classString.value, children.length ? "".concat(prefixClsRef.value, "-with-text ").concat(prefixClsRef.value, "-with-text").concat(orientationPrefix.value) : ''],
        "role": "separator"
      }, [children.length ? (0, _vue.createVNode)("span", {
        "class": "".concat(prefixClsRef.value, "-inner-text"),
        "style": innerStyle.value
      }, [children]) : null]);
    };
  }
});
var _default = (0, _type.withInstall)(Divider);
exports.default = _default;