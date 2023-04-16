"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _Dialog = _interopRequireDefault(require("./Dialog"));
var _IDialogPropTypes = _interopRequireDefault(require("./IDialogPropTypes"));
var _PortalWrapper = _interopRequireDefault(require("../_util/PortalWrapper"));
var _context = require("../vc-trigger/context");
var _propsUtil = require("../_util/props-util");
var IDialogPropTypes = (0, _IDialogPropTypes.default)();
var DialogWrap = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'DialogWrap',
  inheritAttrs: false,
  props: (0, _propsUtil.initDefaultProps)(IDialogPropTypes, {
    visible: false
  }),
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      slots = _ref.slots;
    var animatedVisible = (0, _vue.ref)(props.visible);
    (0, _context.useProvidePortal)({}, {
      inTriggerContext: false
    });
    (0, _vue.watch)(function () {
      return props.visible;
    }, function () {
      if (props.visible) {
        animatedVisible.value = true;
      }
    }, {
      flush: 'post'
    });
    return function () {
      var visible = props.visible,
        getContainer = props.getContainer,
        forceRender = props.forceRender,
        _props$destroyOnClose = props.destroyOnClose,
        destroyOnClose = _props$destroyOnClose === void 0 ? false : _props$destroyOnClose,
        _afterClose = props.afterClose;
      var dialogProps = (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), attrs), {}, {
        ref: '_component',
        key: 'dialog'
      });
      // 渲染在当前 dom 里；
      if (getContainer === false) {
        return (0, _vue.createVNode)(_Dialog.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, dialogProps), {}, {
          "getOpenCount": function getOpenCount() {
            return 2;
          }
        }), slots);
      }
      // Destroy on close will remove wrapped div
      if (!forceRender && destroyOnClose && !animatedVisible.value) {
        return null;
      }
      return (0, _vue.createVNode)(_PortalWrapper.default, {
        "visible": visible,
        "forceRender": forceRender,
        "getContainer": getContainer
      }, {
        default: function _default(childProps) {
          dialogProps = (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, dialogProps), childProps), {}, {
            afterClose: function afterClose() {
              _afterClose === null || _afterClose === void 0 ? void 0 : _afterClose();
              animatedVisible.value = false;
            }
          });
          return (0, _vue.createVNode)(_Dialog.default, dialogProps, slots);
        }
      });
    };
  }
});
var _default2 = DialogWrap;
exports.default = _default2;