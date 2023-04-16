"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _interface = require("./interface");
var _Mask = _interopRequireDefault(require("./Mask"));
var _MobilePopupInner = _interopRequireDefault(require("./MobilePopupInner"));
var _PopupInner = _interopRequireDefault(require("./PopupInner"));
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'Popup',
  inheritAttrs: false,
  props: _interface.popupProps,
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      slots = _ref.slots,
      expose = _ref.expose;
    var innerVisible = (0, _vue.ref)(false);
    var inMobile = (0, _vue.ref)(false);
    var popupRef = (0, _vue.ref)();
    (0, _vue.watch)([function () {
      return props.visible;
    }, function () {
      return props.mobile;
    }], function () {
      innerVisible.value = props.visible;
      if (props.visible && props.mobile) {
        inMobile.value = true;
      }
    }, {
      immediate: true,
      flush: 'post'
    });
    expose({
      forceAlign: function forceAlign() {
        var _popupRef$value;
        (_popupRef$value = popupRef.value) === null || _popupRef$value === void 0 ? void 0 : _popupRef$value.forceAlign();
      },
      getElement: function getElement() {
        var _popupRef$value2;
        return (_popupRef$value2 = popupRef.value) === null || _popupRef$value2 === void 0 ? void 0 : _popupRef$value2.getElement();
      }
    });
    return function () {
      var cloneProps = (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), attrs), {}, {
        visible: innerVisible.value
      });
      var popupNode = inMobile.value ? (0, _vue.createVNode)(_MobilePopupInner.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, cloneProps), {}, {
        "mobile": props.mobile,
        "ref": popupRef
      }), {
        default: slots.default
      }) : (0, _vue.createVNode)(_PopupInner.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, cloneProps), {}, {
        "ref": popupRef
      }), {
        default: slots.default
      });
      return (0, _vue.createVNode)("div", null, [(0, _vue.createVNode)(_Mask.default, cloneProps, null), popupNode]);
    };
  }
});
exports.default = _default;