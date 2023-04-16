import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
var _excluded = ["width", "height", "visible", "placement", "mask", "wrapClassName", "class"];
import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import { inject, nextTick, defineComponent, ref, onMounted, provide, onUnmounted, watch, computed } from 'vue';
import { getPropsSlot, initDefaultProps } from '../_util/props-util';
import classnames from '../_util/classNames';
import VcDrawer from '../vc-drawer';
import PropTypes from '../_util/vue-types';
import CloseOutlined from "@ant-design/icons-vue/es/icons/CloseOutlined";
import useConfigInject from '../_util/hooks/useConfigInject';
import { tuple, withInstall } from '../_util/type';
import omit from '../_util/omit';
import devWarning from '../vc-util/devWarning';
var PlacementTypes = tuple('top', 'right', 'bottom', 'left');
var SizeTypes = tuple('default', 'large');
var defaultPushState = {
  distance: 180
};
export var drawerProps = function drawerProps() {
  return {
    autofocus: {
      type: Boolean,
      default: undefined
    },
    closable: {
      type: Boolean,
      default: undefined
    },
    closeIcon: PropTypes.any,
    destroyOnClose: {
      type: Boolean,
      default: undefined
    },
    forceRender: {
      type: Boolean,
      default: undefined
    },
    getContainer: PropTypes.any,
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
    class: PropTypes.any,
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
    title: PropTypes.any,
    visible: {
      type: Boolean,
      default: undefined
    },
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    zIndex: Number,
    prefixCls: String,
    push: PropTypes.oneOfType([PropTypes.looseBool, {
      type: Object
    }]),
    placement: PropTypes.oneOf(PlacementTypes),
    keyboard: {
      type: Boolean,
      default: undefined
    },
    extra: PropTypes.any,
    footer: PropTypes.any,
    footerStyle: {
      type: Object,
      default: undefined
    },
    level: PropTypes.any,
    levelMove: {
      type: [Number, Array, Function]
    },
    handle: PropTypes.any,
    /** @deprecated Use `@afterVisibleChange` instead */
    afterVisibleChange: Function,
    onAfterVisibleChange: Function,
    'onUpdate:visible': Function,
    onClose: Function
  };
};
var Drawer = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'ADrawer',
  inheritAttrs: false,
  props: initDefaultProps(drawerProps(), {
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
    var sPush = ref(false);
    var destroyClose = ref(false);
    var vcDrawer = ref(null);
    var parentDrawerOpts = inject('parentDrawerOpts', null);
    var _useConfigInject = useConfigInject('drawer', props),
      prefixCls = _useConfigInject.prefixCls;
    devWarning(!props.afterVisibleChange, 'Drawer', '`afterVisibleChange` prop is deprecated, please use `@afterVisibleChange` event instead');
    devWarning(props.wrapStyle === undefined, 'Drawer', '`wrapStyle` prop is deprecated, please use `style` instead');
    devWarning(props.wrapClassName === undefined, 'Drawer', '`wrapClassName` prop is deprecated, please use `class` instead');
    var setPush = function setPush() {
      sPush.value = true;
    };
    var setPull = function setPull() {
      sPush.value = false;
      nextTick(function () {
        domFocus();
      });
    };
    provide('parentDrawerOpts', {
      setPush: setPush,
      setPull: setPull
    });
    onMounted(function () {
      var visible = props.visible;
      if (visible && parentDrawerOpts) {
        parentDrawerOpts.setPush();
      }
    });
    onUnmounted(function () {
      if (parentDrawerOpts) {
        parentDrawerOpts.setPull();
      }
    });
    watch(function () {
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
    var destroyOnClose = computed(function () {
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
    var pushTransform = computed(function () {
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
    var offsetStyle = computed(function () {
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
    var drawerStyle = computed(function () {
      var zIndex = props.zIndex,
        wrapStyle = props.wrapStyle,
        mask = props.mask,
        style = props.style;
      var val = mask ? {} : offsetStyle.value;
      return _objectSpread(_objectSpread(_objectSpread({
        zIndex: zIndex,
        transform: sPush.value ? pushTransform.value : undefined
      }, val), wrapStyle), style);
    });
    var renderHeader = function renderHeader(prefixCls) {
      var closable = props.closable,
        headerStyle = props.headerStyle;
      var extra = getPropsSlot(slots, props, 'extra');
      var title = getPropsSlot(slots, props, 'title');
      if (!title && !closable) {
        return null;
      }
      return _createVNode("div", {
        "class": classnames("".concat(prefixCls, "-header"), _defineProperty({}, "".concat(prefixCls, "-header-close-only"), closable && !title && !extra)),
        "style": headerStyle
      }, [_createVNode("div", {
        "class": "".concat(prefixCls, "-header-title")
      }, [renderCloseIcon(prefixCls), title && _createVNode("div", {
        "class": "".concat(prefixCls, "-title")
      }, [title])]), extra && _createVNode("div", {
        "class": "".concat(prefixCls, "-extra")
      }, [extra])]);
    };
    var renderCloseIcon = function renderCloseIcon(prefixCls) {
      var _slots$closeIcon;
      var closable = props.closable;
      var $closeIcon = slots.closeIcon ? (_slots$closeIcon = slots.closeIcon) === null || _slots$closeIcon === void 0 ? void 0 : _slots$closeIcon.call(slots) : props.closeIcon;
      return closable && _createVNode("button", {
        "key": "closer",
        "onClick": close,
        "aria-label": "Close",
        "class": "".concat(prefixCls, "-close")
      }, [$closeIcon === undefined ? _createVNode(CloseOutlined, null, null) : $closeIcon]);
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
      return _createVNode("div", {
        "class": "".concat(prefixCls, "-wrapper-body"),
        "style": _objectSpread(_objectSpread({}, containerStyle), drawerStyle),
        "onTransitionend": onDestroyTransitionEnd
      }, [renderHeader(prefixCls), _createVNode("div", {
        "key": "body",
        "class": "".concat(prefixCls, "-body"),
        "style": bodyStyle
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]), renderFooter(prefixCls)]);
    };
    var renderFooter = function renderFooter(prefixCls) {
      var footer = getPropsSlot(slots, props, 'footer');
      if (!footer) {
        return null;
      }
      var footerClassName = "".concat(prefixCls, "-footer");
      return _createVNode("div", {
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
        rest = _objectWithoutProperties(props, _excluded);
      var val = mask ? offsetStyle.value : {};
      var haveMask = mask ? '' : 'no-mask';
      var vcDrawerProps = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, attrs), omit(rest, ['size', 'closeIcon', 'closable', 'destroyOnClose', 'drawerStyle', 'headerStyle', 'bodyStyle', 'title', 'push', 'wrapStyle', 'onAfterVisibleChange', 'onClose', 'onUpdate:visible'])), val), {}, {
        onClose: close,
        afterVisibleChange: afterVisibleChange,
        handler: false,
        prefixCls: prefixCls.value,
        open: visible,
        showMask: mask,
        placement: placement,
        class: classnames((_classnames2 = {}, _defineProperty(_classnames2, className, className), _defineProperty(_classnames2, wrapClassName, !!wrapClassName), _defineProperty(_classnames2, haveMask, !!haveMask), _classnames2)),
        style: drawerStyle.value,
        ref: vcDrawer
      });
      return _createVNode(VcDrawer, vcDrawerProps, {
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
export default withInstall(Drawer);