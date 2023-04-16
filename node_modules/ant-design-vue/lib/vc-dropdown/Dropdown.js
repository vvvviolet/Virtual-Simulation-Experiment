"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _vcTrigger = _interopRequireDefault(require("../vc-trigger"));
var _placements = _interopRequireDefault(require("./placements"));
var _vnode = require("../_util/vnode");
var _classNames2 = _interopRequireDefault(require("../_util/classNames"));
var _excluded = ["prefixCls", "arrow", "showAction", "overlayStyle", "trigger", "placement", "align", "getPopupContainer", "transitionName", "animation", "overlayClassName"];
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  props: {
    minOverlayWidthMatchTrigger: {
      type: Boolean,
      default: undefined
    },
    arrow: {
      type: Boolean,
      default: false
    },
    prefixCls: _vueTypes.default.string.def('rc-dropdown'),
    transitionName: String,
    overlayClassName: _vueTypes.default.string.def(''),
    openClassName: String,
    animation: _vueTypes.default.any,
    align: _vueTypes.default.object,
    overlayStyle: {
      type: Object,
      default: undefined
    },
    placement: _vueTypes.default.string.def('bottomLeft'),
    overlay: _vueTypes.default.any,
    trigger: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.arrayOf(_vueTypes.default.string)]).def('hover'),
    alignPoint: {
      type: Boolean,
      default: undefined
    },
    showAction: _vueTypes.default.array,
    hideAction: _vueTypes.default.array,
    getPopupContainer: Function,
    visible: {
      type: Boolean,
      default: undefined
    },
    defaultVisible: {
      type: Boolean,
      default: false
    },
    mouseEnterDelay: _vueTypes.default.number.def(0.15),
    mouseLeaveDelay: _vueTypes.default.number.def(0.1)
  },
  emits: ['visibleChange', 'overlayClick'],
  slots: ['overlay'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      emit = _ref.emit,
      expose = _ref.expose;
    var triggerVisible = (0, _vue.ref)(!!props.visible);
    (0, _vue.watch)(function () {
      return props.visible;
    }, function (val) {
      if (val !== undefined) {
        triggerVisible.value = val;
      }
    });
    var triggerRef = (0, _vue.ref)();
    expose({
      triggerRef: triggerRef
    });
    var onClick = function onClick(e) {
      if (props.visible === undefined) {
        triggerVisible.value = false;
      }
      emit('overlayClick', e);
    };
    var onVisibleChange = function onVisibleChange(visible) {
      if (props.visible === undefined) {
        triggerVisible.value = visible;
      }
      emit('visibleChange', visible);
    };
    var getMenuElement = function getMenuElement() {
      var _slots$overlay;
      var overlayElement = (_slots$overlay = slots.overlay) === null || _slots$overlay === void 0 ? void 0 : _slots$overlay.call(slots);
      var extraOverlayProps = {
        prefixCls: "".concat(props.prefixCls, "-menu"),
        onClick: onClick,
        getPopupContainer: function getPopupContainer() {
          return triggerRef.value.getPopupDomNode();
        }
      };
      return (0, _vue.createVNode)(_vue.Fragment, null, [props.arrow && (0, _vue.createVNode)("div", {
        "class": "".concat(props.prefixCls, "-arrow")
      }, null), (0, _vnode.cloneElement)(overlayElement, extraOverlayProps, false)]);
    };
    var minOverlayWidthMatchTrigger = (0, _vue.computed)(function () {
      var _props$minOverlayWidt = props.minOverlayWidthMatchTrigger,
        matchTrigger = _props$minOverlayWidt === void 0 ? !props.alignPoint : _props$minOverlayWidt;
      return matchTrigger;
    });
    var renderChildren = function renderChildren() {
      var _slots$default;
      var children = (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
      return triggerVisible.value && children ? (0, _vnode.cloneElement)(children[0], {
        class: props.openClassName || "".concat(props.prefixCls, "-open")
      }, false) : children;
    };
    var triggerHideAction = (0, _vue.computed)(function () {
      if (!props.hideAction && props.trigger.indexOf('contextmenu') !== -1) {
        return ['click'];
      }
      return props.hideAction;
    });
    return function () {
      var prefixCls = props.prefixCls,
        arrow = props.arrow,
        showAction = props.showAction,
        overlayStyle = props.overlayStyle,
        trigger = props.trigger,
        placement = props.placement,
        align = props.align,
        getPopupContainer = props.getPopupContainer,
        transitionName = props.transitionName,
        animation = props.animation,
        overlayClassName = props.overlayClassName,
        otherProps = (0, _objectWithoutProperties2.default)(props, _excluded);
      return (0, _vue.createVNode)(_vcTrigger.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, otherProps), {}, {
        "prefixCls": prefixCls,
        "ref": triggerRef,
        "popupClassName": (0, _classNames2.default)(overlayClassName, (0, _defineProperty2.default)({}, "".concat(prefixCls, "-show-arrow"), arrow)),
        "popupStyle": overlayStyle,
        "builtinPlacements": _placements.default,
        "action": trigger,
        "showAction": showAction,
        "hideAction": triggerHideAction.value || [],
        "popupPlacement": placement,
        "popupAlign": align,
        "popupTransitionName": transitionName,
        "popupAnimation": animation,
        "popupVisible": triggerVisible.value,
        "stretch": minOverlayWidthMatchTrigger.value ? 'minWidth' : '',
        "onPopupVisibleChange": onVisibleChange,
        "getPopupContainer": getPopupContainer
      }), {
        popup: getMenuElement,
        default: renderChildren
      });
    };
  }
});
exports.default = _default;