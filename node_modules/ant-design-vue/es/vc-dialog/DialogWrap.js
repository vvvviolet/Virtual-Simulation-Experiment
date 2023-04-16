import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
import Dialog from './Dialog';
import getDialogPropTypes from './IDialogPropTypes';
import Portal from '../_util/PortalWrapper';
import { defineComponent, ref, watch } from 'vue';
import { useProvidePortal } from '../vc-trigger/context';
import { initDefaultProps } from '../_util/props-util';
var IDialogPropTypes = getDialogPropTypes();
var DialogWrap = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'DialogWrap',
  inheritAttrs: false,
  props: initDefaultProps(IDialogPropTypes, {
    visible: false
  }),
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      slots = _ref.slots;
    var animatedVisible = ref(props.visible);
    useProvidePortal({}, {
      inTriggerContext: false
    });
    watch(function () {
      return props.visible;
    }, function () {
      if (props.visible) {
        animatedVisible.value = true;
      }
    }, {
      flush: 'post'
    });
    return function () {
      var visible = props.visible,
        getContainer = props.getContainer,
        forceRender = props.forceRender,
        _props$destroyOnClose = props.destroyOnClose,
        destroyOnClose = _props$destroyOnClose === void 0 ? false : _props$destroyOnClose,
        _afterClose = props.afterClose;
      var dialogProps = _objectSpread(_objectSpread(_objectSpread({}, props), attrs), {}, {
        ref: '_component',
        key: 'dialog'
      });
      // 渲染在当前 dom 里；
      if (getContainer === false) {
        return _createVNode(Dialog, _objectSpread(_objectSpread({}, dialogProps), {}, {
          "getOpenCount": function getOpenCount() {
            return 2;
          }
        }), slots);
      }
      // Destroy on close will remove wrapped div
      if (!forceRender && destroyOnClose && !animatedVisible.value) {
        return null;
      }
      return _createVNode(Portal, {
        "visible": visible,
        "forceRender": forceRender,
        "getContainer": getContainer
      }, {
        default: function _default(childProps) {
          dialogProps = _objectSpread(_objectSpread(_objectSpread({}, dialogProps), childProps), {}, {
            afterClose: function afterClose() {
              _afterClose === null || _afterClose === void 0 ? void 0 : _afterClose();
              animatedVisible.value = false;
            }
          });
          return _createVNode(Dialog, dialogProps, slots);
        }
      });
    };
  }
});
export default DialogWrap;