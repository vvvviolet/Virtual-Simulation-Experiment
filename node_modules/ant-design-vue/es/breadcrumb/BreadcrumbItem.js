import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["class", "style"];
import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import PropTypes from '../_util/vue-types';
import { getPropsSlot } from '../_util/props-util';
import DropDown from '../dropdown/dropdown';
import DownOutlined from "@ant-design/icons-vue/es/icons/DownOutlined";
import useConfigInject from '../_util/hooks/useConfigInject';
export var breadcrumbItemProps = function breadcrumbItemProps() {
  return {
    prefixCls: String,
    href: String,
    separator: PropTypes.any,
    overlay: PropTypes.any,
    onClick: Function
  };
};
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'ABreadcrumbItem',
  inheritAttrs: false,
  __ANT_BREADCRUMB_ITEM: true,
  props: breadcrumbItemProps(),
  // emits: ['click'],
  slots: ['separator', 'overlay'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      attrs = _ref.attrs;
    var _useConfigInject = useConfigInject('breadcrumb', props),
      prefixCls = _useConfigInject.prefixCls;
    /**
     * if overlay is have
     * Wrap a DropDown
     */
    var renderBreadcrumbNode = function renderBreadcrumbNode(breadcrumbItem, prefixCls) {
      var overlay = getPropsSlot(slots, props, 'overlay');
      if (overlay) {
        return _createVNode(DropDown, {
          "overlay": overlay,
          "placement": "bottom"
        }, {
          default: function _default() {
            return [_createVNode("span", {
              "class": "".concat(prefixCls, "-overlay-link")
            }, [breadcrumbItem, _createVNode(DownOutlined, null, null)])];
          }
        });
      }
      return breadcrumbItem;
    };
    return function () {
      var _getPropsSlot;
      var separator = (_getPropsSlot = getPropsSlot(slots, props, 'separator')) !== null && _getPropsSlot !== void 0 ? _getPropsSlot : '/';
      var children = getPropsSlot(slots, props);
      var cls = attrs.class,
        style = attrs.style,
        restAttrs = _objectWithoutProperties(attrs, _excluded);
      var link;
      if (props.href !== undefined) {
        link = _createVNode("a", _objectSpread({
          "class": "".concat(prefixCls.value, "-link"),
          "onClick": props.onClick
        }, restAttrs), [children]);
      } else {
        link = _createVNode("span", _objectSpread({
          "class": "".concat(prefixCls.value, "-link"),
          "onClick": props.onClick
        }, restAttrs), [children]);
      }
      // wrap to dropDown
      link = renderBreadcrumbNode(link, prefixCls.value);
      if (children) {
        return _createVNode("span", {
          "class": cls,
          "style": style
        }, [link, separator && _createVNode("span", {
          "class": "".concat(prefixCls.value, "-separator")
        }, [separator])]);
      }
      return null;
    };
  }
});