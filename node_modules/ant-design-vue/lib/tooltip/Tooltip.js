"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tooltipProps = exports.tooltipDefaultProps = exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _vcTooltip = _interopRequireDefault(require("../vc-tooltip"));
var _classNames3 = _interopRequireDefault(require("../_util/classNames"));
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _colors = require("../_util/colors");
var _warning = _interopRequireDefault(require("../_util/warning"));
var _propsUtil = require("../_util/props-util");
var _vnode = require("../_util/vnode");
var _abstractTooltipProps = _interopRequireDefault(require("./abstractTooltipProps"));
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var _placements = _interopRequireDefault(require("./placements"));
var _firstNotUndefined = _interopRequireDefault(require("../_util/firstNotUndefined"));
var _raf = _interopRequireDefault(require("../_util/raf"));
var splitObject = function splitObject(obj, keys) {
  var picked = {};
  var omitted = (0, _objectSpread2.default)({}, obj);
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
var PresetColorRegex = new RegExp("^(".concat(_colors.PresetColorTypes.join('|'), ")(-inverse)?$"));
var tooltipProps = function tooltipProps() {
  return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _abstractTooltipProps.default)()), {}, {
    title: _vueTypes.default.any
  });
};
exports.tooltipProps = tooltipProps;
var tooltipDefaultProps = function tooltipDefaultProps() {
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
exports.tooltipDefaultProps = tooltipDefaultProps;
var _default2 = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'ATooltip',
  inheritAttrs: false,
  props: (0, _propsUtil.initDefaultProps)(tooltipProps(), {
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
    var _useConfigInject = (0, _useConfigInject2.default)('tooltip', props),
      prefixCls = _useConfigInject.prefixCls,
      getPopupContainer = _useConfigInject.getPopupContainer;
    var visible = (0, _vue.ref)((0, _firstNotUndefined.default)([props.visible, props.defaultVisible]));
    var tooltip = (0, _vue.ref)();
    (0, _vue.onMounted)(function () {
      (0, _warning.default)(props.defaultVisible === undefined, 'Tooltip', "'defaultVisible' is deprecated, please use 'v-model:visible'");
    });
    var rafId;
    (0, _vue.watch)(function () {
      return props.visible;
    }, function (val) {
      _raf.default.cancel(rafId);
      rafId = (0, _raf.default)(function () {
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
    var tooltipPlacements = (0, _vue.computed)(function () {
      var builtinPlacements = props.builtinPlacements,
        arrowPointAtCenter = props.arrowPointAtCenter,
        autoAdjustOverflow = props.autoAdjustOverflow;
      return builtinPlacements || (0, _placements.default)({
        arrowPointAtCenter: arrowPointAtCenter,
        autoAdjustOverflow: autoAdjustOverflow
      });
    });
    var isTrueProps = function isTrueProps(val) {
      return val || val === '';
    };
    var getDisabledCompatibleChildren = function getDisabledCompatibleChildren(ele) {
      var elementType = ele.type;
      if ((0, _typeof2.default)(elementType) === 'object' && ele.props) {
        if ((elementType.__ANT_BUTTON === true || elementType === 'button') && isTrueProps(ele.props.disabled) || elementType.__ANT_SWITCH === true && (isTrueProps(ele.props.disabled) || isTrueProps(ele.props.loading))) {
          // Pick some layout related style properties up to span
          // Prevent layout bugs like https://github.com/ant-design/ant-design/issues/5254
          var _splitObject = splitObject((0, _propsUtil.getStyle)(ele), ['position', 'left', 'right', 'top', 'bottom', 'float', 'display', 'zIndex']),
            picked = _splitObject.picked,
            omitted = _splitObject.omitted;
          var spanStyle = (0, _objectSpread2.default)((0, _objectSpread2.default)({
            display: 'inline-block'
          }, picked), {}, {
            cursor: 'not-allowed',
            lineHeight: 1,
            width: ele.props && ele.props.block ? '100%' : null
          });
          var buttonStyle = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, omitted), {}, {
            pointerEvents: 'none'
          });
          var child = (0, _vnode.cloneElement)(ele, {
            style: buttonStyle
          }, true);
          return (0, _vue.createVNode)("span", {
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
      var children = (_filterEmpty = (0, _propsUtil.filterEmpty)((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots))) !== null && _filterEmpty !== void 0 ? _filterEmpty : null;
      children = children.length === 1 ? children[0] : children;
      var tempVisible = visible.value;
      // Hide tooltip when there is no title
      if (props.visible === undefined && isNoTitle()) {
        tempVisible = false;
      }
      if (!children) {
        return null;
      }
      var child = getDisabledCompatibleChildren((0, _propsUtil.isValidElement)(children) ? children : (0, _vue.createVNode)("span", null, [children]));
      var childCls = (0, _classNames3.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, openClassName || "".concat(prefixCls.value, "-open"), true), (0, _defineProperty2.default)(_classNames, child.props && child.props.class, child.props && child.props.class), _classNames));
      var customOverlayClassName = (0, _classNames3.default)(overlayClassName, (0, _defineProperty2.default)({}, "".concat(prefixCls.value, "-").concat(color), color && PresetColorRegex.test(color)));
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
      var vcTooltipProps = (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, attrs), props), {}, {
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
      return (0, _vue.createVNode)(_vcTooltip.default, vcTooltipProps, {
        default: function _default() {
          return [visible.value ? (0, _vnode.cloneElement)(child, {
            class: childCls
          }) : child];
        },
        arrowContent: function arrowContent() {
          return (0, _vue.createVNode)("span", {
            "class": "".concat(prefixCls.value, "-arrow-content"),
            "style": arrowContentStyle
          }, null);
        },
        overlay: getOverlay
      });
    };
  }
});
exports.default = _default2;