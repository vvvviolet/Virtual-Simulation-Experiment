import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import { computed, watch, defineComponent, onMounted, ref } from 'vue';
import VcTooltip from '../vc-tooltip';
import classNames from '../_util/classNames';
import PropTypes from '../_util/vue-types';
import { PresetColorTypes } from '../_util/colors';
import warning from '../_util/warning';
import { getStyle, filterEmpty, isValidElement, initDefaultProps } from '../_util/props-util';
import { cloneElement } from '../_util/vnode';
import abstractTooltipProps from './abstractTooltipProps';
import useConfigInject from '../_util/hooks/useConfigInject';
import getPlacements from './placements';
import firstNotUndefined from '../_util/firstNotUndefined';
import raf from '../_util/raf';
var splitObject = function splitObject(obj, keys) {
  var picked = {};
  var omitted = _objectSpread({}, obj);
  keys.forEach(function (key) {
    if (obj && key in obj) {
      picked[key] = obj[key];
      delete omitted[key];
    }
  });
  return {
    picked: picked,
    omitted: omitted
  };
};
var PresetColorRegex = new RegExp("^(".concat(PresetColorTypes.join('|'), ")(-inverse)?$"));
export var tooltipProps = function tooltipProps() {
  return _objectSpread(_objectSpread({}, abstractTooltipProps()), {}, {
    title: PropTypes.any
  });
};
export var tooltipDefaultProps = function tooltipDefaultProps() {
  return {
    trigger: 'hover',
    transitionName: 'zoom-big-fast',
    align: {},
    placement: 'top',
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    arrowPointAtCenter: false,
    autoAdjustOverflow: true
  };
};
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'ATooltip',
  inheritAttrs: false,
  props: initDefaultProps(tooltipProps(), {
    trigger: 'hover',
    transitionName: 'zoom-big-fast',
    align: {},
    placement: 'top',
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    arrowPointAtCenter: false,
    autoAdjustOverflow: true
  }),
  slots: ['title'],
  // emits: ['update:visible', 'visibleChange'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      emit = _ref.emit,
      attrs = _ref.attrs,
      expose = _ref.expose;
    var _useConfigInject = useConfigInject('tooltip', props),
      prefixCls = _useConfigInject.prefixCls,
      getPopupContainer = _useConfigInject.getPopupContainer;
    var visible = ref(firstNotUndefined([props.visible, props.defaultVisible]));
    var tooltip = ref();
    onMounted(function () {
      warning(props.defaultVisible === undefined, 'Tooltip', "'defaultVisible' is deprecated, please use 'v-model:visible'");
    });
    var rafId;
    watch(function () {
      return props.visible;
    }, function (val) {
      raf.cancel(rafId);
      rafId = raf(function () {
        visible.value = !!val;
      });
    });
    var isNoTitle = function isNoTitle() {
      var _props$title;
      var title = (_props$title = props.title) !== null && _props$title !== void 0 ? _props$title : slots.title;
      return !title && title !== 0;
    };
    var handleVisibleChange = function handleVisibleChange(val) {
      var noTitle = isNoTitle();
      if (props.visible === undefined) {
        visible.value = noTitle ? false : val;
      }
      if (!noTitle) {
        emit('update:visible', val);
        emit('visibleChange', val);
      }
    };
    var getPopupDomNode = function getPopupDomNode() {
      return tooltip.value.getPopupDomNode();
    };
    expose({
      getPopupDomNode: getPopupDomNode,
      visible: visible,
      forcePopupAlign: function forcePopupAlign() {
        var _tooltip$value;
        return (_tooltip$value = tooltip.value) === null || _tooltip$value === void 0 ? void 0 : _tooltip$value.forcePopupAlign();
      }
    });
    var tooltipPlacements = computed(function () {
      var builtinPlacements = props.builtinPlacements,
        arrowPointAtCenter = props.arrowPointAtCenter,
        autoAdjustOverflow = props.autoAdjustOverflow;
      return builtinPlacements || getPlacements({
        arrowPointAtCenter: arrowPointAtCenter,
        autoAdjustOverflow: autoAdjustOverflow
      });
    });
    var isTrueProps = function isTrueProps(val) {
      return val || val === '';
    };
    var getDisabledCompatibleChildren = function getDisabledCompatibleChildren(ele) {
      var elementType = ele.type;
      if (_typeof(elementType) === 'object' && ele.props) {
        if ((elementType.__ANT_BUTTON === true || elementType === 'button') && isTrueProps(ele.props.disabled) || elementType.__ANT_SWITCH === true && (isTrueProps(ele.props.disabled) || isTrueProps(ele.props.loading))) {
          // Pick some layout related style properties up to span
          // Prevent layout bugs like https://github.com/ant-design/ant-design/issues/5254
          var _splitObject = splitObject(getStyle(ele), ['position', 'left', 'right', 'top', 'bottom', 'float', 'display', 'zIndex']),
            picked = _splitObject.picked,
            omitted = _splitObject.omitted;
          var spanStyle = _objectSpread(_objectSpread({
            display: 'inline-block'
          }, picked), {}, {
            cursor: 'not-allowed',
            lineHeight: 1,
            width: ele.props && ele.props.block ? '100%' : null
          });
          var buttonStyle = _objectSpread(_objectSpread({}, omitted), {}, {
            pointerEvents: 'none'
          });
          var child = cloneElement(ele, {
            style: buttonStyle
          }, true);
          return _createVNode("span", {
            "style": spanStyle,
            "class": "".concat(prefixCls.value, "-disabled-compatible-wrapper")
          }, [child]);
        }
      }
      return ele;
    };
    var getOverlay = function getOverlay() {
      var _props$title2, _slots$title;
      return (_props$title2 = props.title) !== null && _props$title2 !== void 0 ? _props$title2 : (_slots$title = slots.title) === null || _slots$title === void 0 ? void 0 : _slots$title.call(slots);
    };
    var onPopupAlign = function onPopupAlign(domNode, align) {
      var placements = tooltipPlacements.value;
      // 当前返回的位置
      var placement = Object.keys(placements).filter(function (key) {
        return placements[key].points[0] === align.points[0] && placements[key].points[1] === align.points[1];
      })[0];
      if (!placement) {
        return;
      }
      // 根据当前坐标设置动画点
      var rect = domNode.getBoundingClientRect();
      var transformOrigin = {
        top: '50%',
        left: '50%'
      };
      if (placement.indexOf('top') >= 0 || placement.indexOf('Bottom') >= 0) {
        transformOrigin.top = "".concat(rect.height - align.offset[1], "px");
      } else if (placement.indexOf('Top') >= 0 || placement.indexOf('bottom') >= 0) {
        transformOrigin.top = "".concat(-align.offset[1], "px");
      }
      if (placement.indexOf('left') >= 0 || placement.indexOf('Right') >= 0) {
        transformOrigin.left = "".concat(rect.width - align.offset[0], "px");
      } else if (placement.indexOf('right') >= 0 || placement.indexOf('Left') >= 0) {
        transformOrigin.left = "".concat(-align.offset[0], "px");
      }
      domNode.style.transformOrigin = "".concat(transformOrigin.left, " ").concat(transformOrigin.top);
    };
    return function () {
      var _filterEmpty, _slots$default, _classNames;
      var openClassName = props.openClassName,
        color = props.color,
        overlayClassName = props.overlayClassName;
      var children = (_filterEmpty = filterEmpty((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots))) !== null && _filterEmpty !== void 0 ? _filterEmpty : null;
      children = children.length === 1 ? children[0] : children;
      var tempVisible = visible.value;
      // Hide tooltip when there is no title
      if (props.visible === undefined && isNoTitle()) {
        tempVisible = false;
      }
      if (!children) {
        return null;
      }
      var child = getDisabledCompatibleChildren(isValidElement(children) ? children : _createVNode("span", null, [children]));
      var childCls = classNames((_classNames = {}, _defineProperty(_classNames, openClassName || "".concat(prefixCls.value, "-open"), true), _defineProperty(_classNames, child.props && child.props.class, child.props && child.props.class), _classNames));
      var customOverlayClassName = classNames(overlayClassName, _defineProperty({}, "".concat(prefixCls.value, "-").concat(color), color && PresetColorRegex.test(color)));
      var formattedOverlayInnerStyle;
      var arrowContentStyle;
      if (color && !PresetColorRegex.test(color)) {
        formattedOverlayInnerStyle = {
          backgroundColor: color
        };
        arrowContentStyle = {
          backgroundColor: color
        };
      }
      var vcTooltipProps = _objectSpread(_objectSpread(_objectSpread({}, attrs), props), {}, {
        prefixCls: prefixCls.value,
        getPopupContainer: getPopupContainer.value,
        builtinPlacements: tooltipPlacements.value,
        visible: tempVisible,
        ref: tooltip,
        overlayClassName: customOverlayClassName,
        overlayInnerStyle: formattedOverlayInnerStyle,
        onVisibleChange: handleVisibleChange,
        onPopupAlign: onPopupAlign
      });
      return _createVNode(VcTooltip, vcTooltipProps, {
        default: function _default() {
          return [visible.value ? cloneElement(child, {
            class: childCls
          }) : child];
        },
        arrowContent: function arrowContent() {
          return _createVNode("span", {
            "class": "".concat(prefixCls.value, "-arrow-content"),
            "style": arrowContentStyle
          }, null);
        },
        overlay: getOverlay
      });
    };
  }
});