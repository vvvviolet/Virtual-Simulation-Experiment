"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _tooltip = _interopRequireWildcard(require("../tooltip"));
var _raf = _interopRequireDefault(require("../_util/raf"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'SliderTooltip',
  inheritAttrs: false,
  props: (0, _tooltip.tooltipProps)(),
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      slots = _ref.slots;
    var innerRef = (0, _vue.ref)(null);
    var rafRef = (0, _vue.ref)(null);
    function cancelKeepAlign() {
      _raf.default.cancel(rafRef.value);
      rafRef.value = null;
    }
    function keepAlign() {
      rafRef.value = (0, _raf.default)(function () {
        var _innerRef$value;
        (_innerRef$value = innerRef.value) === null || _innerRef$value === void 0 ? void 0 : _innerRef$value.forcePopupAlign();
        rafRef.value = null;
      });
    }
    var align = function align() {
      cancelKeepAlign();
      if (props.visible) {
        keepAlign();
      }
    };
    (0, _vue.watch)([function () {
      return props.visible;
    }, function () {
      return props.title;
    }], function () {
      align();
    }, {
      flush: 'post',
      immediate: true
    });
    (0, _vue.onActivated)(function () {
      align();
    });
    (0, _vue.onBeforeUnmount)(function () {
      cancelKeepAlign();
    });
    return function () {
      return (0, _vue.createVNode)(_tooltip.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({
        "ref": innerRef
      }, props), attrs), slots);
    };
  }
});
exports.default = _default;