import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
import { defineComponent, ref, watch } from 'vue';
import { popupProps } from './interface';
import Mask from './Mask';
import MobilePopupInner from './MobilePopupInner';
import PopupInner from './PopupInner';
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'Popup',
  inheritAttrs: false,
  props: popupProps,
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      slots = _ref.slots,
      expose = _ref.expose;
    var innerVisible = ref(false);
    var inMobile = ref(false);
    var popupRef = ref();
    watch([function () {
      return props.visible;
    }, function () {
      return props.mobile;
    }], function () {
      innerVisible.value = props.visible;
      if (props.visible && props.mobile) {
        inMobile.value = true;
      }
    }, {
      immediate: true,
      flush: 'post'
    });
    expose({
      forceAlign: function forceAlign() {
        var _popupRef$value;
        (_popupRef$value = popupRef.value) === null || _popupRef$value === void 0 ? void 0 : _popupRef$value.forceAlign();
      },
      getElement: function getElement() {
        var _popupRef$value2;
        return (_popupRef$value2 = popupRef.value) === null || _popupRef$value2 === void 0 ? void 0 : _popupRef$value2.getElement();
      }
    });
    return function () {
      var cloneProps = _objectSpread(_objectSpread(_objectSpread({}, props), attrs), {}, {
        visible: innerVisible.value
      });
      var popupNode = inMobile.value ? _createVNode(MobilePopupInner, _objectSpread(_objectSpread({}, cloneProps), {}, {
        "mobile": props.mobile,
        "ref": popupRef
      }), {
        default: slots.default
      }) : _createVNode(PopupInner, _objectSpread(_objectSpread({}, cloneProps), {}, {
        "ref": popupRef
      }), {
        default: slots.default
      });
      return _createVNode("div", null, [_createVNode(Mask, cloneProps, null), popupNode]);
    };
  }
});