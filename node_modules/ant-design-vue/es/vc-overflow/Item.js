import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "registerSize", "itemKey", "display", "order", "component"];
import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import { computed, defineComponent, onUnmounted, ref } from 'vue';
import ResizeObserver from '../vc-resize-observer';
import classNames from '../_util/classNames';
import PropTypes from '../_util/vue-types';
var UNDEFINED = undefined;
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'Item',
  props: {
    prefixCls: String,
    item: PropTypes.any,
    renderItem: Function,
    responsive: Boolean,
    itemKey: {
      type: [String, Number]
    },
    registerSize: Function,
    display: Boolean,
    order: Number,
    component: PropTypes.any,
    invalidate: Boolean
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      expose = _ref.expose;
    var mergedHidden = computed(function () {
      return props.responsive && !props.display;
    });
    var itemNodeRef = ref();
    expose({
      itemNodeRef: itemNodeRef
    });
    // ================================ Effect ================================
    function internalRegisterSize(width) {
      props.registerSize(props.itemKey, width);
    }
    onUnmounted(function () {
      internalRegisterSize(null);
    });
    return function () {
      var _slots$default;
      var prefixCls = props.prefixCls,
        invalidate = props.invalidate,
        item = props.item,
        renderItem = props.renderItem,
        responsive = props.responsive,
        registerSize = props.registerSize,
        itemKey = props.itemKey,
        display = props.display,
        order = props.order,
        _props$component = props.component,
        Component = _props$component === void 0 ? 'div' : _props$component,
        restProps = _objectWithoutProperties(props, _excluded);
      var children = (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
      // ================================ Render ================================
      var childNode = renderItem && item !== UNDEFINED ? renderItem(item) : children;
      var overflowStyle;
      if (!invalidate) {
        overflowStyle = {
          opacity: mergedHidden.value ? 0 : 1,
          height: mergedHidden.value ? 0 : UNDEFINED,
          overflowY: mergedHidden.value ? 'hidden' : UNDEFINED,
          order: responsive ? order : UNDEFINED,
          pointerEvents: mergedHidden.value ? 'none' : UNDEFINED,
          position: mergedHidden.value ? 'absolute' : UNDEFINED
        };
      }
      var overflowProps = {};
      if (mergedHidden.value) {
        overflowProps['aria-hidden'] = true;
      }
      // 使用 disabled  避免结构不一致 导致子组件 rerender
      return _createVNode(ResizeObserver, {
        "disabled": !responsive,
        "onResize": function onResize(_ref2) {
          var offsetWidth = _ref2.offsetWidth;
          internalRegisterSize(offsetWidth);
        }
      }, {
        default: function _default() {
          return _createVNode(Component, _objectSpread(_objectSpread(_objectSpread({
            "class": classNames(!invalidate && prefixCls),
            "style": overflowStyle
          }, overflowProps), restProps), {}, {
            "ref": itemNodeRef
          }), {
            default: function _default() {
              return [childNode];
            }
          });
        }
      });
    };
  }
});