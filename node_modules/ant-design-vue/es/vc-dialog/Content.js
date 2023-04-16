import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { withDirectives as _withDirectives, vShow as _vShow, createVNode as _createVNode } from "vue";
import { computed, ref, defineComponent, nextTick } from 'vue';
import Transition, { getTransitionProps } from '../_util/transition';
import dialogPropTypes from './IDialogPropTypes';
import { offset } from './util';
var sentinelStyle = {
  width: 0,
  height: 0,
  overflow: 'hidden',
  outline: 'none'
};
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'Content',
  inheritAttrs: false,
  props: _objectSpread(_objectSpread({}, dialogPropTypes()), {}, {
    motionName: String,
    ariaId: String,
    onVisibleChanged: Function,
    onMousedown: Function,
    onMouseup: Function
  }),
  setup: function setup(props, _ref) {
    var expose = _ref.expose,
      slots = _ref.slots,
      attrs = _ref.attrs;
    var sentinelStartRef = ref();
    var sentinelEndRef = ref();
    var dialogRef = ref();
    expose({
      focus: function focus() {
        var _sentinelStartRef$val;
        (_sentinelStartRef$val = sentinelStartRef.value) === null || _sentinelStartRef$val === void 0 ? void 0 : _sentinelStartRef$val.focus();
      },
      changeActive: function changeActive(next) {
        var _document = document,
          activeElement = _document.activeElement;
        if (next && activeElement === sentinelEndRef.value) {
          sentinelStartRef.value.focus();
        } else if (!next && activeElement === sentinelStartRef.value) {
          sentinelEndRef.value.focus();
        }
      }
    });
    var transformOrigin = ref();
    var contentStyleRef = computed(function () {
      var width = props.width,
        height = props.height;
      var contentStyle = {};
      if (width !== undefined) {
        contentStyle.width = typeof width === 'number' ? "".concat(width, "px") : width;
      }
      if (height !== undefined) {
        contentStyle.height = typeof height === 'number' ? "".concat(height, "px") : height;
      }
      if (transformOrigin.value) {
        contentStyle.transformOrigin = transformOrigin.value;
      }
      return contentStyle;
    });
    var onPrepare = function onPrepare() {
      nextTick(function () {
        if (dialogRef.value) {
          var elementOffset = offset(dialogRef.value);
          transformOrigin.value = props.mousePosition ? "".concat(props.mousePosition.x - elementOffset.left, "px ").concat(props.mousePosition.y - elementOffset.top, "px") : '';
        }
      });
    };
    var onVisibleChanged = function onVisibleChanged(visible) {
      props.onVisibleChanged(visible);
    };
    return function () {
      var _slots$footer, _slots$title, _slots$closeIcon, _slots$default;
      var prefixCls = props.prefixCls,
        _props$footer = props.footer,
        footer = _props$footer === void 0 ? (_slots$footer = slots.footer) === null || _slots$footer === void 0 ? void 0 : _slots$footer.call(slots) : _props$footer,
        _props$title = props.title,
        title = _props$title === void 0 ? (_slots$title = slots.title) === null || _slots$title === void 0 ? void 0 : _slots$title.call(slots) : _props$title,
        ariaId = props.ariaId,
        closable = props.closable,
        _props$closeIcon = props.closeIcon,
        closeIcon = _props$closeIcon === void 0 ? (_slots$closeIcon = slots.closeIcon) === null || _slots$closeIcon === void 0 ? void 0 : _slots$closeIcon.call(slots) : _props$closeIcon,
        onClose = props.onClose,
        bodyStyle = props.bodyStyle,
        bodyProps = props.bodyProps,
        onMousedown = props.onMousedown,
        onMouseup = props.onMouseup,
        visible = props.visible,
        _props$modalRender = props.modalRender,
        modalRender = _props$modalRender === void 0 ? slots.modalRender : _props$modalRender,
        destroyOnClose = props.destroyOnClose,
        motionName = props.motionName;
      var footerNode;
      if (footer) {
        footerNode = _createVNode("div", {
          "class": "".concat(prefixCls, "-footer")
        }, [footer]);
      }
      var headerNode;
      if (title) {
        headerNode = _createVNode("div", {
          "class": "".concat(prefixCls, "-header")
        }, [_createVNode("div", {
          "class": "".concat(prefixCls, "-title"),
          "id": ariaId
        }, [title])]);
      }
      var closer;
      if (closable) {
        closer = _createVNode("button", {
          "type": "button",
          "onClick": onClose,
          "aria-label": "Close",
          "class": "".concat(prefixCls, "-close")
        }, [closeIcon || _createVNode("span", {
          "class": "".concat(prefixCls, "-close-x")
        }, null)]);
      }
      var content = _createVNode("div", {
        "class": "".concat(prefixCls, "-content")
      }, [closer, headerNode, _createVNode("div", _objectSpread({
        "class": "".concat(prefixCls, "-body"),
        "style": bodyStyle
      }, bodyProps), [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]), footerNode]);
      var transitionProps = getTransitionProps(motionName);
      return _createVNode(Transition, _objectSpread(_objectSpread({}, transitionProps), {}, {
        "onBeforeEnter": onPrepare,
        "onAfterEnter": function onAfterEnter() {
          return onVisibleChanged(true);
        },
        "onAfterLeave": function onAfterLeave() {
          return onVisibleChanged(false);
        }
      }), {
        default: function _default() {
          return [visible || !destroyOnClose ? _withDirectives(_createVNode("div", _objectSpread(_objectSpread({}, attrs), {}, {
            "ref": dialogRef,
            "key": "dialog-element",
            "role": "document",
            "style": [contentStyleRef.value, attrs.style],
            "class": [prefixCls, attrs.class],
            "onMousedown": onMousedown,
            "onMouseup": onMouseup
          }), [_createVNode("div", {
            "tabindex": 0,
            "ref": sentinelStartRef,
            "style": sentinelStyle,
            "aria-hidden": "true"
          }, null), modalRender ? modalRender({
            originVNode: content
          }) : content, _createVNode("div", {
            "tabindex": 0,
            "ref": sentinelEndRef,
            "style": sentinelStyle,
            "aria-hidden": "true"
          }, null)]), [[_vShow, visible]]) : null];
        }
      });
    };
  }
});