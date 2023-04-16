"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
// We only handle element & text node.
var TEXT_NODE = 3;
var COMMENT_NODE = 8;
var ellipsisContainer;
var wrapperStyle = {
  padding: 0,
  margin: 0,
  display: 'inline',
  lineHeight: 'inherit'
};
function styleToString(style) {
  // There are some different behavior between Firefox & Chrome.
  // We have to handle this ourself.
  var styleNames = Array.prototype.slice.apply(style);
  return styleNames.map(function (name) {
    return "".concat(name, ": ").concat(style.getPropertyValue(name), ";");
  }).join('');
}
function resetDomStyles(target, origin) {
  target.setAttribute('aria-hidden', 'true');
  var originStyle = window.getComputedStyle(origin);
  var originCSS = styleToString(originStyle);
  // Set shadow
  target.setAttribute('style', originCSS);
  target.style.position = 'fixed';
  target.style.left = '0';
  target.style.height = 'auto';
  target.style.minHeight = 'auto';
  target.style.maxHeight = 'auto';
  target.style.paddingTop = '0';
  target.style.paddingBottom = '0';
  target.style.borderTopWidth = '0';
  target.style.borderBottomWidth = '0';
  target.style.top = '-999999px';
  target.style.zIndex = '-1000';
  // clean up css overflow
  target.style.textOverflow = 'clip';
  target.style.whiteSpace = 'normal';
  target.style.webkitLineClamp = 'none';
}
function getRealLineHeight(originElement) {
  var heightContainer = document.createElement('div');
  resetDomStyles(heightContainer, originElement);
  heightContainer.appendChild(document.createTextNode('text'));
  document.body.appendChild(heightContainer);
  // The element real height is always less than multiple of line-height
  // Use getBoundingClientRect to get actual single row height of the element
  var realHeight = heightContainer.getBoundingClientRect().height;
  document.body.removeChild(heightContainer);
  return realHeight;
}
var _default = function _default(originElement, option, content, fixedContent, ellipsisStr) {
  if (!ellipsisContainer) {
    ellipsisContainer = document.createElement('div');
    ellipsisContainer.setAttribute('aria-hidden', 'true');
    document.body.appendChild(ellipsisContainer);
  }
  var rows = option.rows,
    _option$suffix = option.suffix,
    suffix = _option$suffix === void 0 ? '' : _option$suffix;
  var lineHeight = getRealLineHeight(originElement);
  var maxHeight = Math.round(lineHeight * rows * 100) / 100;
  resetDomStyles(ellipsisContainer, originElement);
  // Render in the fake container
  var vm = (0, _vue.createApp)({
    render: function render() {
      return (0, _vue.createVNode)("div", {
        "style": wrapperStyle
      }, [(0, _vue.createVNode)("span", {
        "style": wrapperStyle
      }, [content, suffix]), (0, _vue.createVNode)("span", {
        "style": wrapperStyle
      }, [fixedContent])]);
    }
  });
  vm.mount(ellipsisContainer);
  // Check if ellipsis in measure div is height enough for content
  function inRange() {
    var currentHeight = Math.round(ellipsisContainer.getBoundingClientRect().height * 100) / 100;
    return currentHeight - 0.1 <= maxHeight; // -.1 for firefox
  }
  // Skip ellipsis if already match
  if (inRange()) {
    vm.unmount();
    return {
      content: content,
      text: ellipsisContainer.innerHTML,
      ellipsis: false
    };
  }
  var childNodes = Array.prototype.slice.apply(ellipsisContainer.childNodes[0].childNodes[0].cloneNode(true).childNodes).filter(function (_ref) {
    var nodeType = _ref.nodeType,
      data = _ref.data;
    return nodeType !== COMMENT_NODE && data !== '';
  });
  var fixedNodes = Array.prototype.slice.apply(ellipsisContainer.childNodes[0].childNodes[1].cloneNode(true).childNodes);
  vm.unmount();
  // ========================= Find match ellipsis content =========================
  var ellipsisChildren = [];
  ellipsisContainer.innerHTML = '';
  // Create origin content holder
  var ellipsisContentHolder = document.createElement('span');
  ellipsisContainer.appendChild(ellipsisContentHolder);
  var ellipsisTextNode = document.createTextNode(ellipsisStr + suffix);
  ellipsisContentHolder.appendChild(ellipsisTextNode);
  fixedNodes.forEach(function (childNode) {
    ellipsisContainer.appendChild(childNode);
  });
  // Append before fixed nodes
  function appendChildNode(node) {
    ellipsisContentHolder.insertBefore(node, ellipsisTextNode);
  }
  // Get maximum text
  function measureText(textNode, fullText) {
    var startLoc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var endLoc = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : fullText.length;
    var lastSuccessLoc = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var midLoc = Math.floor((startLoc + endLoc) / 2);
    var currentText = fullText.slice(0, midLoc);
    textNode.textContent = currentText;
    if (startLoc >= endLoc - 1) {
      // Loop when step is small
      for (var step = endLoc; step >= startLoc; step -= 1) {
        var currentStepText = fullText.slice(0, step);
        textNode.textContent = currentStepText;
        if (inRange() || !currentStepText) {
          return step === fullText.length ? {
            finished: false,
            vNode: fullText
          } : {
            finished: true,
            vNode: currentStepText
          };
        }
      }
    }
    if (inRange()) {
      return measureText(textNode, fullText, midLoc, endLoc, midLoc);
    }
    return measureText(textNode, fullText, startLoc, midLoc, lastSuccessLoc);
  }
  function measureNode(childNode) {
    var type = childNode.nodeType;
    // console.log('type', type);
    // if (type === ELEMENT_NODE) {
    //   // We don't split element, it will keep if whole element can be displayed.
    //   appendChildNode(childNode);
    //   if (inRange()) {
    //     return {
    //       finished: false,
    //       vNode: contentList[index],
    //     };
    //   }
    //   // Clean up if can not pull in
    //   ellipsisContentHolder.removeChild(childNode);
    //   return {
    //     finished: true,
    //     vNode: null,
    //   };
    // }
    if (type === TEXT_NODE) {
      var fullText = childNode.textContent || '';
      var textNode = document.createTextNode(fullText);
      appendChildNode(textNode);
      return measureText(textNode, fullText);
    }
    // Not handle other type of content
    return {
      finished: false,
      vNode: null
    };
  }
  childNodes.some(function (childNode) {
    var _measureNode = measureNode(childNode),
      finished = _measureNode.finished,
      vNode = _measureNode.vNode;
    if (vNode) {
      ellipsisChildren.push(vNode);
    }
    return finished;
  });
  return {
    content: ellipsisChildren,
    text: ellipsisContainer.innerHTML,
    ellipsis: true
  };
};
exports.default = _default;