import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import { Teleport, computed, defineComponent, onMounted, watch, onUnmounted } from 'vue';
import classNames from '../_util/classNames';
export default defineComponent({
  name: 'Notice',
  inheritAttrs: false,
  props: ['prefixCls', 'duration', 'updateMark', 'noticeKey', 'closeIcon', 'closable', 'props', 'onClick', 'onClose', 'holder', 'visible'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      slots = _ref.slots;
    var closeTimer;
    var isUnMounted = false;
    var duration = computed(function () {
      return props.duration === undefined ? 4.5 : props.duration;
    });
    var startCloseTimer = function startCloseTimer() {
      if (duration.value && !isUnMounted) {
        closeTimer = setTimeout(function () {
          close();
        }, duration.value * 1000);
      }
    };
    var clearCloseTimer = function clearCloseTimer() {
      if (closeTimer) {
        clearTimeout(closeTimer);
        closeTimer = null;
      }
    };
    var close = function close(e) {
      if (e) {
        e.stopPropagation();
      }
      clearCloseTimer();
      var onClose = props.onClose,
        noticeKey = props.noticeKey;
      if (onClose) {
        onClose(noticeKey);
      }
    };
    var restartCloseTimer = function restartCloseTimer() {
      clearCloseTimer();
      startCloseTimer();
    };
    onMounted(function () {
      startCloseTimer();
    });
    onUnmounted(function () {
      isUnMounted = true;
      clearCloseTimer();
    });
    watch([duration, function () {
      return props.updateMark;
    }, function () {
      return props.visible;
    }], function (_ref2, _ref3) {
      var _ref4 = _slicedToArray(_ref2, 3),
        preDuration = _ref4[0],
        preUpdateMark = _ref4[1],
        preVisible = _ref4[2];
      var _ref5 = _slicedToArray(_ref3, 3),
        newDuration = _ref5[0],
        newUpdateMark = _ref5[1],
        newVisible = _ref5[2];
      if (preDuration !== newDuration || preUpdateMark !== newUpdateMark || preVisible !== newVisible && newVisible) {
        restartCloseTimer();
      }
    }, {
      flush: 'post'
    });
    return function () {
      var _slots$closeIcon, _slots$default;
      var prefixCls = props.prefixCls,
        closable = props.closable,
        _props$closeIcon = props.closeIcon,
        closeIcon = _props$closeIcon === void 0 ? (_slots$closeIcon = slots.closeIcon) === null || _slots$closeIcon === void 0 ? void 0 : _slots$closeIcon.call(slots) : _props$closeIcon,
        onClick = props.onClick,
        holder = props.holder;
      var className = attrs.class,
        style = attrs.style;
      var componentClass = "".concat(prefixCls, "-notice");
      var dataOrAriaAttributeProps = Object.keys(attrs).reduce(function (acc, key) {
        if (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-' || key === 'role') {
          acc[key] = attrs[key];
        }
        return acc;
      }, {});
      var node = _createVNode("div", _objectSpread({
        "class": classNames(componentClass, className, _defineProperty({}, "".concat(componentClass, "-closable"), closable)),
        "style": style,
        "onMouseenter": clearCloseTimer,
        "onMouseleave": startCloseTimer,
        "onClick": onClick
      }, dataOrAriaAttributeProps), [_createVNode("div", {
        "class": "".concat(componentClass, "-content")
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]), closable ? _createVNode("a", {
        "tabindex": 0,
        "onClick": close,
        "class": "".concat(componentClass, "-close")
      }, [closeIcon || _createVNode("span", {
        "class": "".concat(componentClass, "-close-x")
      }, null)]) : null]);
      if (holder) {
        return _createVNode(Teleport, {
          "to": holder
        }, {
          default: function _default() {
            return node;
          }
        });
      }
      return node;
    };
  }
});