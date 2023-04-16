import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["component"],
  _excluded2 = ["className"],
  _excluded3 = ["class"];
import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import classNames from '../_util/classNames';
import PropTypes from '../_util/vue-types';
import { OverflowContextProvider, useInjectOverflowContext } from './context';
import Item from './Item';
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'RawItem',
  inheritAttrs: false,
  props: {
    component: PropTypes.any,
    title: PropTypes.any,
    id: String,
    onMouseenter: {
      type: Function
    },
    onMouseleave: {
      type: Function
    },
    onClick: {
      type: Function
    },
    onKeydown: {
      type: Function
    },
    onFocus: {
      type: Function
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      attrs = _ref.attrs;
    var context = useInjectOverflowContext();
    return function () {
      // Render directly when context not provided
      if (!context.value) {
        var _slots$default;
        var _props$component = props.component,
          Component = _props$component === void 0 ? 'div' : _props$component,
          _restProps = _objectWithoutProperties(props, _excluded);
        return _createVNode(Component, _objectSpread(_objectSpread({}, _restProps), attrs), {
          default: function _default() {
            return [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)];
          }
        });
      }
      var _context$value = context.value,
        contextClassName = _context$value.className,
        restContext = _objectWithoutProperties(_context$value, _excluded2);
      var className = attrs.class,
        restProps = _objectWithoutProperties(attrs, _excluded3);
      // Do not pass context to sub item to avoid multiple measure
      return _createVNode(OverflowContextProvider, {
        "value": null
      }, {
        default: function _default() {
          return [_createVNode(Item, _objectSpread(_objectSpread(_objectSpread({
            "class": classNames(contextClassName, className)
          }, restContext), restProps), props), slots)];
        }
      });
    };
  }
});