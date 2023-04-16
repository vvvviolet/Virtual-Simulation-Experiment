"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detectFlexGapSupported = exports.default = exports.canUseDocElement = void 0;
exports.isStyleSupport = isStyleSupport;
var _canUseDom = _interopRequireDefault(require("./canUseDom"));
var canUseDocElement = function canUseDocElement() {
  return (0, _canUseDom.default)() && window.document.documentElement;
};
exports.canUseDocElement = canUseDocElement;
var isStyleNameSupport = function isStyleNameSupport(styleName) {
  if ((0, _canUseDom.default)() && window.document.documentElement) {
    var styleNameList = Array.isArray(styleName) ? styleName : [styleName];
    var documentElement = window.document.documentElement;
    return styleNameList.some(function (name) {
      return name in documentElement.style;
    });
  }
  return false;
};
var isStyleValueSupport = function isStyleValueSupport(styleName, value) {
  if (!isStyleNameSupport(styleName)) {
    return false;
  }
  var ele = document.createElement('div');
  var origin = ele.style[styleName];
  ele.style[styleName] = value;
  return ele.style[styleName] !== origin;
};
function isStyleSupport(styleName, styleValue) {
  if (!Array.isArray(styleName) && styleValue !== undefined) {
    return isStyleValueSupport(styleName, styleValue);
  }
  return isStyleNameSupport(styleName);
}
var flexGapSupported;
var detectFlexGapSupported = function detectFlexGapSupported() {
  if (!canUseDocElement()) {
    return false;
  }
  if (flexGapSupported !== undefined) {
    return flexGapSupported;
  }
  // create flex container with row-gap set
  var flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';
  // create two, elements inside it
  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));
  // append to the DOM (needed to obtain scrollHeight)
  document.body.appendChild(flex);
  flexGapSupported = flex.scrollHeight === 1; // flex container should be 1px high from the row-gap
  document.body.removeChild(flex);
  return flexGapSupported;
};
exports.detectFlexGapSupported = detectFlexGapSupported;
var _default = isStyleSupport;
exports.default = _default;