"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _transition = _interopRequireWildcard(require("../_util/transition"));
var _IDialogPropTypes = _interopRequireDefault(require("./IDialogPropTypes"));
var _util = require("./util");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var sentinelStyle = {
  width: 0,
  height: 0,
  overflow: 'hidden',
  outline: 'none'
};
var _default2 = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'Content',
  inheritAttrs: false,
  props: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _IDialogPropTypes.default)()), {}, {
    motionName: String,
    ariaId: String,
    onVisibleChanged: Function,
    onMousedown: Function,
    onMouseup: Function
  }),
  setup: function setup(props, _ref) {
    var expose = _ref.expose,
      slots = _ref.slots,
      attrs = _ref.attrs;
    var sentinelStartRef = (0, _vue.ref)();
    var sentinelEndRef = (0, _vue.ref)();
    var dialogRef = (0, _vue.ref)();
    expose({
      focus: function focus() {
        var _sentinelStartRef$val;
        (_sentinelStartRef$val = sentinelStartRef.value) === null || _sentinelStartRef$val === void 0 ? void 0 : _sentinelStartRef$val.focus();
      },
      changeActive: function changeActive(next) {
        var _document = document,
          activeElement = _document.activeElement;
        if (next && activeElement === sentinelEndRef.value) {
          sentinelStartRef.value.focus();
        } else if (!next && activeElement === sentinelStartRef.value) {
          sentinelEndRef.value.focus();
        }
      }
    });
    var transformOrigin = (0, _vue.ref)();
    var contentStyleRef = (0, _vue.computed)(function () {
      var width = props.width,
        height = props.height;
      var contentStyle = {};
      if (width !== undefined) {
        contentStyle.width = typeof width === 'number' ? "".concat(width, "px") : width;
      }
      if (height !== undefined) {
        contentStyle.height = typeof height === 'number' ? "".concat(height, "px") : height;
      }
      if (transformOrigin.value) {
        contentStyle.transformOrigin = transformOrigin.value;
      }
      return contentStyle;
    });
    var onPrepare = function onPrepare() {
      (0, _vue.nextTick)(function () {
        if (dialogRef.value) {
          var elementOffset = (0, _util.offset)(dialogRef.value);
          transformOrigin.value = props.mousePosition ? "".concat(props.mousePosition.x - elementOffset.left, "px ").concat(props.mousePosition.y - elementOffset.top, "px") : '';
        }
      });
    };
    var onVisibleChanged = function onVisibleChanged(visible) {
      props.onVisibleChanged(visible);
    };
    return function () {
      var _slots$footer, _slots$title, _slots$closeIcon, _slots$default;
      var prefixCls = props.prefixCls,
        _props$footer = props.footer,
        footer = _props$footer === void 0 ? (_slots$footer = slots.footer) === null || _slots$footer === void 0 ? void 0 : _slots$footer.call(slots) : _props$footer,
        _props$title = props.title,
        title = _props$title === void 0 ? (_slots$title = slots.title) === null || _slots$title === void 0 ? void 0 : _slots$title.call(slots) : _props$title,
        ariaId = props.ariaId,
        closable = props.closable,
        _props$closeIcon = props.closeIcon,
        closeIcon = _props$closeIcon === void 0 ? (_slots$closeIcon = slots.closeIcon) === null || _slots$closeIcon === void 0 ? void 0 : _slots$closeIcon.call(slots) : _props$closeIcon,
        onClose = props.onClose,
        bodyStyle = props.bodyStyle,
        bodyProps = props.bodyProps,
        onMousedown = props.onMousedown,
        onMouseup = props.onMouseup,
        visible = props.visible,
        _props$modalRender = props.modalRender,
        modalRender = _props$modalRender === void 0 ? slots.modalRender : _props$modalRender,
        destroyOnClose = props.destroyOnClose,
        motionName = props.motionName;
      var footerNode;
      if (footer) {
        footerNode = (0, _vue.createVNode)("div", {
          "class": "".concat(prefixCls, "-footer")
        }, [footer]);
      }
      var headerNode;
      if (title) {
        headerNode = (0, _vue.createVNode)("div", {
          "class": "".concat(prefixCls, "-header")
        }, [(0, _vue.createVNode)("div", {
          "class": "".concat(prefixCls, "-title"),
          "id": ariaId
        }, [title])]);
      }
      var closer;
      if (closable) {
        closer = (0, _vue.createVNode)("button", {
          "type": "button",
          "onClick": onClose,
          "aria-label": "Close",
          "class": "".concat(prefixCls, "-close")
        }, [closeIcon || (0, _vue.createVNode)("span", {
          "class": "".concat(prefixCls, "-close-x")
        }, null)]);
      }
      var content = (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-content")
      }, [closer, headerNode, (0, _vue.createVNode)("div", (0, _objectSpread2.default)({
        "class": "".concat(prefixCls, "-body"),
        "style": bodyStyle
      }, bodyProps), [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]), footerNode]);
      var transitionProps = (0, _transition.getTransitionProps)(motionName);
      return (0, _vue.createVNode)(_transition.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, transitionProps), {}, {
        "onBeforeEnter": onPrepare,
        "onAfterEnter": function onAfterEnter() {
          return onVisibleChanged(true);
        },
        "onAfterLeave": function onAfterLeave() {
          return onVisibleChanged(false);
        }
      }), {
        default: function _default() {
          return [visible || !destroyOnClose ? (0, _vue.withDirectives)((0, _vue.createVNode)("div", (0, _objectSpread2.default)((0, _objectSpread2.default)({}, attrs), {}, {
            "ref": dialogRef,
            "key": "dialog-element",
            "role": "document",
            "style": [contentStyleRef.value, attrs.style],
            "class": [prefixCls, attrs.class],
            "onMousedown": onMousedown,
            "onMouseup": onMouseup
          }), [(0, _vue.createVNode)("div", {
            "tabindex": 0,
            "ref": sentinelStartRef,
            "style": sentinelStyle,
            "aria-hidden": "true"
          }, null), modalRender ? modalRender({
            originVNode: content
          }) : content, (0, _vue.createVNode)("div", {
            "tabindex": 0,
            "ref": sentinelEndRef,
            "style": sentinelStyle,
            "aria-hidden": "true"
          }, null)]), [[_vue.vShow, visible]]) : null];
        }
      });
    };
  }
});
exports.default = _default2;