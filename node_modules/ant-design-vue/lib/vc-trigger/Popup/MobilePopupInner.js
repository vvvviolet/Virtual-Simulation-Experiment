"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _propsUtil = require("../../_util/props-util");
var _classNames = _interopRequireDefault(require("../../_util/classNames"));
var _interface = require("./interface");
var _default2 = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'MobilePopupInner',
  inheritAttrs: false,
  props: _interface.mobileProps,
  emits: ['mouseenter', 'mouseleave', 'mousedown', 'touchstart', 'align'],
  setup: function setup(props, _ref) {
    var expose = _ref.expose,
      slots = _ref.slots;
    var elementRef = (0, _vue.ref)();
    expose({
      forceAlign: function forceAlign() {},
      getElement: function getElement() {
        return elementRef.value;
      }
    });
    return function () {
      var _slots$default;
      var zIndex = props.zIndex,
        visible = props.visible,
        prefixCls = props.prefixCls,
        _props$mobile = props.mobile,
        _props$mobile2 = _props$mobile === void 0 ? {} : _props$mobile,
        popupClassName = _props$mobile2.popupClassName,
        popupStyle = _props$mobile2.popupStyle,
        _props$mobile2$popupM = _props$mobile2.popupMotion,
        popupMotion = _props$mobile2$popupM === void 0 ? {} : _props$mobile2$popupM,
        popupRender = _props$mobile2.popupRender;
      // ======================== Render ========================
      var mergedStyle = (0, _objectSpread2.default)({
        zIndex: zIndex
      }, popupStyle);
      var childNode = (0, _propsUtil.flattenChildren)((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
      // Wrapper when multiple children
      if (childNode.length > 1) {
        var _childNode = function () {
          return childNode;
        }();
        childNode = (0, _vue.createVNode)("div", {
          "class": "".concat(prefixCls, "-content")
        }, [childNode]);
      }
      // Mobile support additional render
      if (popupRender) {
        childNode = popupRender(childNode);
      }
      var mergedClassName = (0, _classNames.default)(prefixCls, popupClassName);
      return (0, _vue.createVNode)(_vue.Transition, (0, _objectSpread2.default)({
        "ref": elementRef
      }, popupMotion), {
        default: function _default() {
          return [visible ? (0, _vue.createVNode)("div", {
            "class": mergedClassName,
            "style": mergedStyle
          }, [childNode]) : null];
        }
      });
    };
  }
});
exports.default = _default2;