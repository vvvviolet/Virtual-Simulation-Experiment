import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode } from "vue";
import { defineComponent, ref, Transition } from 'vue';
import { flattenChildren } from '../../_util/props-util';
import classNames from '../../_util/classNames';
import { mobileProps } from './interface';
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'MobilePopupInner',
  inheritAttrs: false,
  props: mobileProps,
  emits: ['mouseenter', 'mouseleave', 'mousedown', 'touchstart', 'align'],
  setup: function setup(props, _ref) {
    var expose = _ref.expose,
      slots = _ref.slots;
    var elementRef = ref();
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
      var mergedStyle = _objectSpread({
        zIndex: zIndex
      }, popupStyle);
      var childNode = flattenChildren((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
      // Wrapper when multiple children
      if (childNode.length > 1) {
        var _childNode = function () {
          return childNode;
        }();
        childNode = _createVNode("div", {
          "class": "".concat(prefixCls, "-content")
        }, [childNode]);
      }
      // Mobile support additional render
      if (popupRender) {
        childNode = popupRender(childNode);
      }
      var mergedClassName = classNames(prefixCls, popupClassName);
      return _createVNode(Transition, _objectSpread({
        "ref": elementRef
      }, popupMotion), {
        default: function _default() {
          return [visible ? _createVNode("div", {
            "class": mergedClassName,
            "style": mergedStyle
          }, [childNode]) : null];
        }
      });
    };
  }
});