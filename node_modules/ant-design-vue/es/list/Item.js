import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["class"];
import { createVNode as _createVNode } from "vue";
import PropTypes from '../_util/vue-types';
import classNames from '../_util/classNames';
import { isStringElement, isEmptyElement, flattenChildren } from '../_util/props-util';
import { Col } from '../grid';
import { cloneElement } from '../_util/vnode';
import { defineComponent, inject, ref } from 'vue';
import ItemMeta from './ItemMeta';
import useConfigInject from '../_util/hooks/useConfigInject';
import { ListContextKey } from './contextKey';
export var listItemProps = function listItemProps() {
  return {
    prefixCls: String,
    extra: PropTypes.any,
    actions: PropTypes.array,
    grid: Object,
    colStyle: {
      type: Object,
      default: undefined
    }
  };
};
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'AListItem',
  inheritAttrs: false,
  Meta: ItemMeta,
  props: listItemProps(),
  slots: ['actions', 'extra'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      attrs = _ref.attrs;
    var _inject = inject(ListContextKey, {
        grid: ref(),
        itemLayout: ref()
      }),
      itemLayout = _inject.itemLayout,
      grid = _inject.grid;
    var _useConfigInject = useConfigInject('list', props),
      prefixCls = _useConfigInject.prefixCls;
    var isItemContainsTextNodeAndNotSingular = function isItemContainsTextNodeAndNotSingular() {
      var _slots$default;
      var children = ((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)) || [];
      var result;
      children.forEach(function (element) {
        if (isStringElement(element) && !isEmptyElement(element)) {
          result = true;
        }
      });
      return result && children.length > 1;
    };
    var isFlexMode = function isFlexMode() {
      var _props$extra, _slots$extra;
      var extra = (_props$extra = props.extra) !== null && _props$extra !== void 0 ? _props$extra : (_slots$extra = slots.extra) === null || _slots$extra === void 0 ? void 0 : _slots$extra.call(slots);
      if (itemLayout.value === 'vertical') {
        return !!extra;
      }
      return !isItemContainsTextNodeAndNotSingular();
    };
    return function () {
      var _props$extra2, _slots$extra2, _slots$default2, _props$actions, _slots$actions;
      var className = attrs.class,
        restAttrs = _objectWithoutProperties(attrs, _excluded);
      var pre = prefixCls.value;
      var extra = (_props$extra2 = props.extra) !== null && _props$extra2 !== void 0 ? _props$extra2 : (_slots$extra2 = slots.extra) === null || _slots$extra2 === void 0 ? void 0 : _slots$extra2.call(slots);
      var children = (_slots$default2 = slots.default) === null || _slots$default2 === void 0 ? void 0 : _slots$default2.call(slots);
      var actions = (_props$actions = props.actions) !== null && _props$actions !== void 0 ? _props$actions : flattenChildren((_slots$actions = slots.actions) === null || _slots$actions === void 0 ? void 0 : _slots$actions.call(slots));
      actions = actions && !Array.isArray(actions) ? [actions] : actions;
      var actionsContent = actions && actions.length > 0 && _createVNode("ul", {
        "class": "".concat(pre, "-item-action"),
        "key": "actions"
      }, [actions.map(function (action, i) {
        return _createVNode("li", {
          "key": "".concat(pre, "-item-action-").concat(i)
        }, [action, i !== actions.length - 1 && _createVNode("em", {
          "class": "".concat(pre, "-item-action-split")
        }, null)]);
      })]);
      var Element = grid.value ? 'div' : 'li';
      var itemChildren = _createVNode(Element, _objectSpread(_objectSpread({}, restAttrs), {}, {
        "class": classNames("".concat(pre, "-item"), _defineProperty({}, "".concat(pre, "-item-no-flex"), !isFlexMode()), className)
      }), {
        default: function _default() {
          return [itemLayout.value === 'vertical' && extra ? [_createVNode("div", {
            "class": "".concat(pre, "-item-main"),
            "key": "content"
          }, [children, actionsContent]), _createVNode("div", {
            "class": "".concat(pre, "-item-extra"),
            "key": "extra"
          }, [extra])] : [children, actionsContent, cloneElement(extra, {
            key: 'extra'
          })]];
        }
      });
      return grid.value ? _createVNode(Col, {
        "flex": 1,
        "style": props.colStyle
      }, {
        default: function _default() {
          return [itemChildren];
        }
      }) : itemChildren;
    };
  }
});