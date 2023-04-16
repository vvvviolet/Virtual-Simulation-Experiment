"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getRanges;
var _vue = require("vue");
function getRanges(_ref) {
  var prefixCls = _ref.prefixCls,
    _ref$rangeList = _ref.rangeList,
    rangeList = _ref$rangeList === void 0 ? [] : _ref$rangeList,
    _ref$components = _ref.components,
    components = _ref$components === void 0 ? {} : _ref$components,
    needConfirmButton = _ref.needConfirmButton,
    onNow = _ref.onNow,
    onOk = _ref.onOk,
    okDisabled = _ref.okDisabled,
    showNow = _ref.showNow,
    locale = _ref.locale;
  var presetNode;
  var okNode;
  if (rangeList.length) {
    var Item = components.rangeItem || 'span';
    presetNode = (0, _vue.createVNode)(_vue.Fragment, null, [rangeList.map(function (_ref2) {
      var label = _ref2.label,
        onClick = _ref2.onClick,
        onMouseenter = _ref2.onMouseenter,
        onMouseleave = _ref2.onMouseleave;
      return (0, _vue.createVNode)("li", {
        "key": label,
        "class": "".concat(prefixCls, "-preset")
      }, [(0, _vue.createVNode)(Item, {
        "onClick": onClick,
        "onMouseenter": onMouseenter,
        "onMouseleave": onMouseleave
      }, {
        default: function _default() {
          return [label];
        }
      })]);
    })]);
  }
  if (needConfirmButton) {
    var Button = components.button || 'button';
    if (onNow && !presetNode && showNow !== false) {
      presetNode = (0, _vue.createVNode)("li", {
        "class": "".concat(prefixCls, "-now")
      }, [(0, _vue.createVNode)("a", {
        "class": "".concat(prefixCls, "-now-btn"),
        "onClick": onNow
      }, [locale.now])]);
    }
    okNode = needConfirmButton && (0, _vue.createVNode)("li", {
      "class": "".concat(prefixCls, "-ok")
    }, [(0, _vue.createVNode)(Button, {
      "disabled": okDisabled,
      "onClick": onOk
    }, {
      default: function _default() {
        return [locale.ok];
      }
    })]);
  }
  if (!presetNode && !okNode) {
    return null;
  }
  return (0, _vue.createVNode)("ul", {
    "class": "".concat(prefixCls, "-ranges")
  }, [presetNode, okNode]);
}