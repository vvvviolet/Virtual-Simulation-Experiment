"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderSwitcherIcon;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _LoadingOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/LoadingOutlined"));
var _FileOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/FileOutlined"));
var _MinusSquareOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/MinusSquareOutlined"));
var _PlusSquareOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/PlusSquareOutlined"));
var _CaretDownFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CaretDownFilled"));
var _propsUtil = require("../../_util/props-util");
function renderSwitcherIcon(prefixCls, switcherIcon, showLine, props) {
  var isLeaf = props.isLeaf,
    expanded = props.expanded,
    loading = props.loading;
  var icon = switcherIcon;
  if (loading) {
    return (0, _vue.createVNode)(_LoadingOutlined.default, {
      "class": "".concat(prefixCls, "-switcher-loading-icon")
    }, null);
  }
  var showLeafIcon;
  if (showLine && (0, _typeof2.default)(showLine) === 'object') {
    showLeafIcon = showLine.showLeafIcon;
  }
  var defaultIcon = null;
  var switcherCls = "".concat(prefixCls, "-switcher-icon");
  if (isLeaf) {
    if (showLine) {
      if ((0, _typeof2.default)(showLine) === 'object' && !showLeafIcon) {
        defaultIcon = (0, _vue.createVNode)("span", {
          "class": "".concat(prefixCls, "-switcher-leaf-line")
        }, null);
      } else {
        defaultIcon = (0, _vue.createVNode)(_FileOutlined.default, {
          "class": "".concat(prefixCls, "-switcher-line-icon")
        }, null);
      }
    }
    return defaultIcon;
  } else {
    defaultIcon = (0, _vue.createVNode)(_CaretDownFilled.default, {
      "class": switcherCls
    }, null);
    if (showLine) {
      defaultIcon = expanded ? (0, _vue.createVNode)(_MinusSquareOutlined.default, {
        "class": "".concat(prefixCls, "-switcher-line-icon")
      }, null) : (0, _vue.createVNode)(_PlusSquareOutlined.default, {
        "class": "".concat(prefixCls, "-switcher-line-icon")
      }, null);
    }
  }
  if (typeof switcherIcon === 'function') {
    icon = switcherIcon((0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
      defaultIcon: defaultIcon,
      switcherCls: switcherCls
    }));
  } else if ((0, _propsUtil.isValidElement)(icon)) {
    icon = (0, _vue.cloneVNode)(icon, {
      class: switcherCls
    });
  }
  return icon || defaultIcon;
}