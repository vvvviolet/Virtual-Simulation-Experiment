"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.breadcrumbItemProps = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _propsUtil = require("../_util/props-util");
var _dropdown = _interopRequireDefault(require("../dropdown/dropdown"));
var _DownOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/DownOutlined"));
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var _excluded = ["class", "style"];
var breadcrumbItemProps = function breadcrumbItemProps() {
  return {
    prefixCls: String,
    href: String,
    separator: _vueTypes.default.any,
    overlay: _vueTypes.default.any,
    onClick: Function
  };
};
exports.breadcrumbItemProps = breadcrumbItemProps;
var _default2 = (0, _vue.defineComponent)({
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
    var _useConfigInject = (0, _useConfigInject2.default)('breadcrumb', props),
      prefixCls = _useConfigInject.prefixCls;
    /**
     * if overlay is have
     * Wrap a DropDown
     */
    var renderBreadcrumbNode = function renderBreadcrumbNode(breadcrumbItem, prefixCls) {
      var overlay = (0, _propsUtil.getPropsSlot)(slots, props, 'overlay');
      if (overlay) {
        return (0, _vue.createVNode)(_dropdown.default, {
          "overlay": overlay,
          "placement": "bottom"
        }, {
          default: function _default() {
            return [(0, _vue.createVNode)("span", {
              "class": "".concat(prefixCls, "-overlay-link")
            }, [breadcrumbItem, (0, _vue.createVNode)(_DownOutlined.default, null, null)])];
          }
        });
      }
      return breadcrumbItem;
    };
    return function () {
      var _getPropsSlot;
      var separator = (_getPropsSlot = (0, _propsUtil.getPropsSlot)(slots, props, 'separator')) !== null && _getPropsSlot !== void 0 ? _getPropsSlot : '/';
      var children = (0, _propsUtil.getPropsSlot)(slots, props);
      var cls = attrs.class,
        style = attrs.style,
        restAttrs = (0, _objectWithoutProperties2.default)(attrs, _excluded);
      var link;
      if (props.href !== undefined) {
        link = (0, _vue.createVNode)("a", (0, _objectSpread2.default)({
          "class": "".concat(prefixCls.value, "-link"),
          "onClick": props.onClick
        }, restAttrs), [children]);
      } else {
        link = (0, _vue.createVNode)("span", (0, _objectSpread2.default)({
          "class": "".concat(prefixCls.value, "-link"),
          "onClick": props.onClick
        }, restAttrs), [children]);
      }
      // wrap to dropDown
      link = renderBreadcrumbNode(link, prefixCls.value);
      if (children) {
        return (0, _vue.createVNode)("span", {
          "class": cls,
          "style": style
        }, [link, separator && (0, _vue.createVNode)("span", {
          "class": "".concat(prefixCls.value, "-separator")
        }, [separator])]);
      }
      return null;
    };
  }
});
exports.default = _default2;