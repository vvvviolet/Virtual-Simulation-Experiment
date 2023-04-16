import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["prefixCls", "arrow", "showAction", "overlayStyle", "trigger", "placement", "align", "getPopupContainer", "transitionName", "animation", "overlayClassName"];
import { resolveDirective as _resolveDirective, createVNode as _createVNode, Fragment as _Fragment } from "vue";
import { computed, defineComponent, ref, watch } from 'vue';
import PropTypes from '../_util/vue-types';
import Trigger from '../vc-trigger';
import placements from './placements';
import { cloneElement } from '../_util/vnode';
import classNames from '../_util/classNames';
export default defineComponent({
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
    prefixCls: PropTypes.string.def('rc-dropdown'),
    transitionName: String,
    overlayClassName: PropTypes.string.def(''),
    openClassName: String,
    animation: PropTypes.any,
    align: PropTypes.object,
    overlayStyle: {
      type: Object,
      default: undefined
    },
    placement: PropTypes.string.def('bottomLeft'),
    overlay: PropTypes.any,
    trigger: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).def('hover'),
    alignPoint: {
      type: Boolean,
      default: undefined
    },
    showAction: PropTypes.array,
    hideAction: PropTypes.array,
    getPopupContainer: Function,
    visible: {
      type: Boolean,
      default: undefined
    },
    defaultVisible: {
      type: Boolean,
      default: false
    },
    mouseEnterDelay: PropTypes.number.def(0.15),
    mouseLeaveDelay: PropTypes.number.def(0.1)
  },
  emits: ['visibleChange', 'overlayClick'],
  slots: ['overlay'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      emit = _ref.emit,
      expose = _ref.expose;
    var triggerVisible = ref(!!props.visible);
    watch(function () {
      return props.visible;
    }, function (val) {
      if (val !== undefined) {
        triggerVisible.value = val;
      }
    });
    var triggerRef = ref();
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
      return _createVNode(_Fragment, null, [props.arrow && _createVNode("div", {
        "class": "".concat(props.prefixCls, "-arrow")
      }, null), cloneElement(overlayElement, extraOverlayProps, false)]);
    };
    var minOverlayWidthMatchTrigger = computed(function () {
      var _props$minOverlayWidt = props.minOverlayWidthMatchTrigger,
        matchTrigger = _props$minOverlayWidt === void 0 ? !props.alignPoint : _props$minOverlayWidt;
      return matchTrigger;
    });
    var renderChildren = function renderChildren() {
      var _slots$default;
      var children = (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
      return triggerVisible.value && children ? cloneElement(children[0], {
        class: props.openClassName || "".concat(props.prefixCls, "-open")
      }, false) : children;
    };
    var triggerHideAction = computed(function () {
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
        otherProps = _objectWithoutProperties(props, _excluded);
      return _createVNode(Trigger, _objectSpread(_objectSpread({}, otherProps), {}, {
        "prefixCls": prefixCls,
        "ref": triggerRef,
        "popupClassName": classNames(overlayClassName, _defineProperty({}, "".concat(prefixCls, "-show-arrow"), arrow)),
        "popupStyle": overlayStyle,
        "builtinPlacements": placements,
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