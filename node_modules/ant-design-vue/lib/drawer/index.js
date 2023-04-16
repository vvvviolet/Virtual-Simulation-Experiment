"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawerProps = exports.default = void 0;
var _vue = require("vue");
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _propsUtil = require("../_util/props-util");
var _classNames = _interopRequireDefault(require("../_util/classNames"));
var _vcDrawer = _interopRequireDefault(require("../vc-drawer"));
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _CloseOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CloseOutlined"));
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var _type = require("../_util/type");
var _omit = _interopRequireDefault(require("../_util/omit"));
var _devWarning = _interopRequireDefault(require("../vc-util/devWarning"));
var _excluded = ["width", "height", "visible", "placement", "mask", "wrapClassName", "class"];
var PlacementTypes = (0, _type.tuple)('top', 'right', 'bottom', 'left');
var SizeTypes = (0, _type.tuple)('default', 'large');
var defaultPushState = {
  distance: 180
};
var drawerProps = function drawerProps() {
  return {
    autofocus: {
      type: Boolean,
      default: undefined
    },
    closable: {
      type: Boolean,
      default: undefined
    },
    closeIcon: _vueTypes.default.any,
    destroyOnClose: {
      type: Boolean,
      default: undefined
    },
    forceRender: {
      type: Boolean,
      default: undefined
    },
    getContainer: _vueTypes.default.any,
    maskClosable: {
      type: Boolean,
      default: undefined
    },
    mask: {
      type: Boolean,
      default: undefined
    },
    maskStyle: {
      type: Object,
      default: undefined
    },
    /** @deprecated Use `style` instead */
    wrapStyle: {
      type: Object,
      default: undefined
    },
    style: {
      type: Object,
      default: undefined
    },
    class: _vueTypes.default.any,
    /** @deprecated Use `class` instead */
    wrapClassName: String,
    size: {
      type: String
    },
    drawerStyle: {
      type: Object,
      default: undefined
    },
    headerStyle: {
      type: Object,
      default: undefined
    },
    bodyStyle: {
      type: Object,
      default: undefined
    },
    contentWrapperStyle: {
      type: Object,
      default: undefined
    },
    title: _vueTypes.default.any,
    visible: {
      type: Boolean,
      default: undefined
    },
    width: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number]),
    height: _vueTypes.default.oneOfType([_vueTypes.default.string, _vueTypes.default.number]),
    zIndex: Number,
    prefixCls: String,
    push: _vueTypes.default.oneOfType([_vueTypes.default.looseBool, {
      type: Object
    }]),
    placement: _vueTypes.default.oneOf(PlacementTypes),
    keyboard: {
      type: Boolean,
      default: undefined
    },
    extra: _vueTypes.default.any,
    footer: _vueTypes.default.any,
    footerStyle: {
      type: Object,
      default: undefined
    },
    level: _vueTypes.default.any,
    levelMove: {
      type: [Number, Array, Function]
    },
    handle: _vueTypes.default.any,
    /** @deprecated Use `@afterVisibleChange` instead */
    afterVisibleChange: Function,
    onAfterVisibleChange: Function,
    'onUpdate:visible': Function,
    onClose: Function
  };
};
exports.drawerProps = drawerProps;
var Drawer = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'ADrawer',
  inheritAttrs: false,
  props: (0, _propsUtil.initDefaultProps)(drawerProps(), {
    closable: true,
    placement: 'right',
    maskClosable: true,
    mask: true,
    level: null,
    keyboard: true,
    push: defaultPushState
  }),
  slots: ['closeIcon', 'title', 'extra', 'footer', 'handle'],
  // emits: ['update:visible', 'close', 'afterVisibleChange'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
      slots = _ref.slots,
      attrs = _ref.attrs;
    var sPush = (0, _vue.ref)(false);
    var destroyClose = (0, _vue.ref)(false);
    var vcDrawer = (0, _vue.ref)(null);
    var parentDrawerOpts = (0, _vue.inject)('parentDrawerOpts', null);
    var _useConfigInject = (0, _useConfigInject2.default)('drawer', props),
      prefixCls = _useConfigInject.prefixCls;
    (0, _devWarning.default)(!props.afterVisibleChange, 'Drawer', '`afterVisibleChange` prop is deprecated, please use `@afterVisibleChange` event instead');
    (0, _devWarning.default)(props.wrapStyle === undefined, 'Drawer', '`wrapStyle` prop is deprecated, please use `style` instead');
    (0, _devWarning.default)(props.wrapClassName === undefined, 'Drawer', '`wrapClassName` prop is deprecated, please use `class` instead');
    var setPush = function setPush() {
      sPush.value = true;
    };
    var setPull = function setPull() {
      sPush.value = false;
      (0, _vue.nextTick)(function () {
        domFocus();
      });
    };
    (0, _vue.provide)('parentDrawerOpts', {
      setPush: setPush,
      setPull: setPull
    });
    (0, _vue.onMounted)(function () {
      var visible = props.visible;
      if (visible && parentDrawerOpts) {
        parentDrawerOpts.setPush();
      }
    });
    (0, _vue.onUnmounted)(function () {
      if (parentDrawerOpts) {
        parentDrawerOpts.setPull();
      }
    });
    (0, _vue.watch)(function () {
      return props.visible;
    }, function (visible) {
      if (parentDrawerOpts) {
        if (visible) {
          parentDrawerOpts.setPush();
        } else {
          parentDrawerOpts.setPull();
        }
      }
    }, {
      flush: 'post'
    });
    var domFocus = function domFocus() {
      var _vcDrawer$value, _vcDrawer$value$domFo;
      (_vcDrawer$value = vcDrawer.value) === null || _vcDrawer$value === void 0 ? void 0 : (_vcDrawer$value$domFo = _vcDrawer$value.domFocus) === null || _vcDrawer$value$domFo === void 0 ? void 0 : _vcDrawer$value$domFo.call(_vcDrawer$value);
    };
    var close = function close(e) {
      emit('update:visible', false);
      emit('close', e);
    };
    var afterVisibleChange = function afterVisibleChange(visible) {
      var _props$afterVisibleCh;
      (_props$afterVisibleCh = props.afterVisibleChange) === null || _props$afterVisibleCh === void 0 ? void 0 : _props$afterVisibleCh.call(props, visible);
      emit('afterVisibleChange', visible);
    };
    var destroyOnClose = (0, _vue.computed)(function () {
      return props.destroyOnClose && !props.visible;
    });
    var onDestroyTransitionEnd = function onDestroyTransitionEnd() {
      var isDestroyOnClose = destroyOnClose.value;
      if (!isDestroyOnClose) {
        return;
      }
      if (!props.visible) {
        destroyClose.value = true;
      }
    };
    var pushTransform = (0, _vue.computed)(function () {
      var push = props.push,
        placement = props.placement;
      var distance;
      if (typeof push === 'boolean') {
        distance = push ? defaultPushState.distance : 0;
      } else {
        distance = push.distance;
      }
      distance = parseFloat(String(distance || 0));
      if (placement === 'left' || placement === 'right') {
        return "translateX(".concat(placement === 'left' ? distance : -distance, "px)");
      }
      if (placement === 'top' || placement === 'bottom') {
        return "translateY(".concat(placement === 'top' ? distance : -distance, "px)");
      }
      return null;
    });
    var offsetStyle = (0, _vue.computed)(function () {
      // https://github.com/ant-design/ant-design/issues/24287
      var visible = props.visible,
        mask = props.mask,
        placement = props.placement,
        _props$size = props.size,
        size = _props$size === void 0 ? 'default' : _props$size,
        width = props.width,
        height = props.height;
      if (!visible && !mask) {
        return {};
      }
      var val = {};
      if (placement === 'left' || placement === 'right') {
        var defaultWidth = size === 'large' ? 736 : 378;
        val.width = typeof width === 'undefined' ? defaultWidth : width;
        val.width = typeof val.width === 'string' ? val.width : "".concat(val.width, "px");
      } else {
        var defaultHeight = size === 'large' ? 736 : 378;
        val.height = typeof height === 'undefined' ? defaultHeight : height;
        val.height = typeof val.height === 'string' ? val.height : "".concat(val.height, "px");
      }
      return val;
    });
    var drawerStyle = (0, _vue.computed)(function () {
      var zIndex = props.zIndex,
        wrapStyle = props.wrapStyle,
        mask = props.mask,
        style = props.style;
      var val = mask ? {} : offsetStyle.value;
      return (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
        zIndex: zIndex,
        transform: sPush.value ? pushTransform.value : undefined
      }, val), wrapStyle), style);
    });
    var renderHeader = function renderHeader(prefixCls) {
      var closable = props.closable,
        headerStyle = props.headerStyle;
      var extra = (0, _propsUtil.getPropsSlot)(slots, props, 'extra');
      var title = (0, _propsUtil.getPropsSlot)(slots, props, 'title');
      if (!title && !closable) {
        return null;
      }
      return (0, _vue.createVNode)("div", {
        "class": (0, _classNames.default)("".concat(prefixCls, "-header"), (0, _defineProperty2.default)({}, "".concat(prefixCls, "-header-close-only"), closable && !title && !extra)),
        "style": headerStyle
      }, [(0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-header-title")
      }, [renderCloseIcon(prefixCls), title && (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-title")
      }, [title])]), extra && (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-extra")
      }, [extra])]);
    };
    var renderCloseIcon = function renderCloseIcon(prefixCls) {
      var _slots$closeIcon;
      var closable = props.closable;
      var $closeIcon = slots.closeIcon ? (_slots$closeIcon = slots.closeIcon) === null || _slots$closeIcon === void 0 ? void 0 : _slots$closeIcon.call(slots) : props.closeIcon;
      return closable && (0, _vue.createVNode)("button", {
        "key": "closer",
        "onClick": close,
        "aria-label": "Close",
        "class": "".concat(prefixCls, "-close")
      }, [$closeIcon === undefined ? (0, _vue.createVNode)(_CloseOutlined.default, null, null) : $closeIcon]);
    };
    var renderBody = function renderBody(prefixCls) {
      var _slots$default;
      if (destroyClose.value && !props.visible) {
        return null;
      }
      destroyClose.value = false;
      var bodyStyle = props.bodyStyle,
        drawerStyle = props.drawerStyle;
      var containerStyle = {};
      var isDestroyOnClose = destroyOnClose.value;
      if (isDestroyOnClose) {
        // Increase the opacity transition, delete children after closing.
        containerStyle.opacity = 0;
        containerStyle.transition = 'opacity .3s';
      }
      return (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-wrapper-body"),
        "style": (0, _objectSpread2.default)((0, _objectSpread2.default)({}, containerStyle), drawerStyle),
        "onTransitionend": onDestroyTransitionEnd
      }, [renderHeader(prefixCls), (0, _vue.createVNode)("div", {
        "key": "body",
        "class": "".concat(prefixCls, "-body"),
        "style": bodyStyle
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]), renderFooter(prefixCls)]);
    };
    var renderFooter = function renderFooter(prefixCls) {
      var footer = (0, _propsUtil.getPropsSlot)(slots, props, 'footer');
      if (!footer) {
        return null;
      }
      var footerClassName = "".concat(prefixCls, "-footer");
      return (0, _vue.createVNode)("div", {
        "class": footerClassName,
        "style": props.footerStyle
      }, [footer]);
    };
    return function () {
      var _classnames2;
      var width = props.width,
        height = props.height,
        visible = props.visible,
        placement = props.placement,
        mask = props.mask,
        wrapClassName = props.wrapClassName,
        className = props.class,
        rest = (0, _objectWithoutProperties2.default)(props, _excluded);
      var val = mask ? offsetStyle.value : {};
      var haveMask = mask ? '' : 'no-mask';
      var vcDrawerProps = (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, attrs), (0, _omit.default)(rest, ['size', 'closeIcon', 'closable', 'destroyOnClose', 'drawerStyle', 'headerStyle', 'bodyStyle', 'title', 'push', 'wrapStyle', 'onAfterVisibleChange', 'onClose', 'onUpdate:visible'])), val), {}, {
        onClose: close,
        afterVisibleChange: afterVisibleChange,
        handler: false,
        prefixCls: prefixCls.value,
        open: visible,
        showMask: mask,
        placement: placement,
        class: (0, _classNames.default)((_classnames2 = {}, (0, _defineProperty2.default)(_classnames2, className, className), (0, _defineProperty2.default)(_classnames2, wrapClassName, !!wrapClassName), (0, _defineProperty2.default)(_classnames2, haveMask, !!haveMask), _classnames2)),
        style: drawerStyle.value,
        ref: vcDrawer
      });
      return (0, _vue.createVNode)(_vcDrawer.default, vcDrawerProps, {
        handler: props.handle ? function () {
          return props.handle;
        } : slots.handle,
        default: function _default() {
          return renderBody(prefixCls.value);
        }
      });
    };
  }
});
var _default2 = (0, _type.withInstall)(Drawer);
exports.default = _default2;