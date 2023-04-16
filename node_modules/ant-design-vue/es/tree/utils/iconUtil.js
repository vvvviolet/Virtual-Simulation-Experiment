import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import { createVNode as _createVNode } from "vue";
import LoadingOutlined from "@ant-design/icons-vue/es/icons/LoadingOutlined";
import FileOutlined from "@ant-design/icons-vue/es/icons/FileOutlined";
import MinusSquareOutlined from "@ant-design/icons-vue/es/icons/MinusSquareOutlined";
import PlusSquareOutlined from "@ant-design/icons-vue/es/icons/PlusSquareOutlined";
import CaretDownFilled from "@ant-design/icons-vue/es/icons/CaretDownFilled";
import { isValidElement } from '../../_util/props-util';
import { cloneVNode } from 'vue';
export default function renderSwitcherIcon(prefixCls, switcherIcon, showLine, props) {
  var isLeaf = props.isLeaf,
    expanded = props.expanded,
    loading = props.loading;
  var icon = switcherIcon;
  if (loading) {
    return _createVNode(LoadingOutlined, {
      "class": "".concat(prefixCls, "-switcher-loading-icon")
    }, null);
  }
  var showLeafIcon;
  if (showLine && _typeof(showLine) === 'object') {
    showLeafIcon = showLine.showLeafIcon;
  }
  var defaultIcon = null;
  var switcherCls = "".concat(prefixCls, "-switcher-icon");
  if (isLeaf) {
    if (showLine) {
      if (_typeof(showLine) === 'object' && !showLeafIcon) {
        defaultIcon = _createVNode("span", {
          "class": "".concat(prefixCls, "-switcher-leaf-line")
        }, null);
      } else {
        defaultIcon = _createVNode(FileOutlined, {
          "class": "".concat(prefixCls, "-switcher-line-icon")
        }, null);
      }
    }
    return defaultIcon;
  } else {
    defaultIcon = _createVNode(CaretDownFilled, {
      "class": switcherCls
    }, null);
    if (showLine) {
      defaultIcon = expanded ? _createVNode(MinusSquareOutlined, {
        "class": "".concat(prefixCls, "-switcher-line-icon")
      }, null) : _createVNode(PlusSquareOutlined, {
        "class": "".concat(prefixCls, "-switcher-line-icon")
      }, null);
    }
  }
  if (typeof switcherIcon === 'function') {
    icon = switcherIcon(_objectSpread(_objectSpread({}, props), {}, {
      defaultIcon: defaultIcon,
      switcherCls: switcherCls
    }));
  } else if (isValidElement(icon)) {
    icon = cloneVNode(icon, {
      class: switcherCls
    });
  }
  return icon || defaultIcon;
}