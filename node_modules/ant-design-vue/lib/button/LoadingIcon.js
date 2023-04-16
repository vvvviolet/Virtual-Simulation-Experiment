"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _LoadingOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/LoadingOutlined"));
var _transition = _interopRequireDefault(require("../_util/transition"));
var getCollapsedWidth = function getCollapsedWidth(node) {
  if (node) {
    node.style.width = '0px';
    node.style.opacity = '0';
    node.style.transform = 'scale(0)';
  }
};
var getRealWidth = function getRealWidth(node) {
  (0, _vue.nextTick)(function () {
    if (node) {
      node.style.width = "".concat(node.scrollWidth, "px");
      node.style.opacity = '1';
      node.style.transform = 'scale(1)';
    }
  });
};
var resetStyle = function resetStyle(node) {
  if (node && node.style) {
    node.style.width = null;
    node.style.opacity = null;
    node.style.transform = null;
  }
};
var _default2 = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'LoadingIcon',
  props: {
    prefixCls: String,
    loading: [Boolean, Object],
    existIcon: Boolean
  },
  setup: function setup(props) {
    return function () {
      var existIcon = props.existIcon,
        prefixCls = props.prefixCls,
        loading = props.loading;
      if (existIcon) {
        return (0, _vue.createVNode)("span", {
          "class": "".concat(prefixCls, "-loading-icon")
        }, [(0, _vue.createVNode)(_LoadingOutlined.default, null, null)]);
      }
      var visible = !!loading;
      return (0, _vue.createVNode)(_transition.default, {
        "name": "".concat(prefixCls, "-loading-icon-motion"),
        "onBeforeEnter": getCollapsedWidth,
        "onEnter": getRealWidth,
        "onAfterEnter": resetStyle,
        "onBeforeLeave": getRealWidth,
        "onLeave": function onLeave(node) {
          setTimeout(function () {
            getCollapsedWidth(node);
          });
        },
        "onAfterLeave": resetStyle
      }, {
        default: function _default() {
          return [visible ? (0, _vue.createVNode)("span", {
            "class": "".concat(prefixCls, "-loading-icon")
          }, [(0, _vue.createVNode)(_LoadingOutlined.default, null, null)]) : null];
        }
      });
    };
  }
});
exports.default = _default2;