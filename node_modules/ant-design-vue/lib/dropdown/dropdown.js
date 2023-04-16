"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _vcDropdown = _interopRequireDefault(require("../vc-dropdown"));
var _dropdownButton = _interopRequireDefault(require("./dropdown-button"));
var _vnode = require("../_util/vnode");
var _classNames3 = _interopRequireDefault(require("../_util/classNames"));
var _propsUtil = require("../_util/props-util");
var _props = require("./props");
var _RightOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/RightOutlined"));
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var _devWarning = _interopRequireDefault(require("../vc-util/devWarning"));
var _omit = _interopRequireDefault(require("../_util/omit"));
var _placements = _interopRequireDefault(require("../tooltip/placements"));
var Dropdown = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'ADropdown',
  inheritAttrs: false,
  props: (0, _propsUtil.initDefaultProps)((0, _props.dropdownProps)(), {
    mouseEnterDelay: 0.15,
    mouseLeaveDelay: 0.1,
    placement: 'bottomLeft',
    trigger: 'hover'
  }),
  // emits: ['visibleChange', 'update:visible'],
  slots: ['overlay'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      attrs = _ref.attrs,
      emit = _ref.emit;
    var _useConfigInject = (0, _useConfigInject2.default)('dropdown', props),
      prefixCls = _useConfigInject.prefixCls,
      rootPrefixCls = _useConfigInject.rootPrefixCls,
      direction = _useConfigInject.direction,
      getPopupContainer = _useConfigInject.getPopupContainer;
    var transitionName = (0, _vue.computed)(function () {
      var _props$placement = props.placement,
        placement = _props$placement === void 0 ? '' : _props$placement,
        transitionName = props.transitionName;
      if (transitionName !== undefined) {
        return transitionName;
      }
      if (placement.indexOf('top') >= 0) {
        return "".concat(rootPrefixCls.value, "-slide-down");
      }
      return "".concat(rootPrefixCls.value, "-slide-up");
    });
    var renderOverlay = function renderOverlay() {
      var _slots$overlay, _overlayNode$children, _overlayNode$children2;
      // rc-dropdown already can process the function of overlay, but we have check logic here.
      // So we need render the element to check and pass back to rc-dropdown.
      var overlay = props.overlay || ((_slots$overlay = slots.overlay) === null || _slots$overlay === void 0 ? void 0 : _slots$overlay.call(slots));
      var overlayNode = Array.isArray(overlay) ? overlay[0] : overlay;
      if (!overlayNode) return null;
      var overlayProps = overlayNode.props || {};
      // Warning if use other mode
      (0, _devWarning.default)(!overlayProps.mode || overlayProps.mode === 'vertical', 'Dropdown', "mode=\"".concat(overlayProps.mode, "\" is not supported for Dropdown's Menu."));
      // menu cannot be selectable in dropdown defaultly
      var _overlayProps$selecta = overlayProps.selectable,
        selectable = _overlayProps$selecta === void 0 ? false : _overlayProps$selecta,
        _overlayProps$expandI = overlayProps.expandIcon,
        expandIcon = _overlayProps$expandI === void 0 ? (_overlayNode$children = overlayNode.children) === null || _overlayNode$children === void 0 ? void 0 : (_overlayNode$children2 = _overlayNode$children.expandIcon) === null || _overlayNode$children2 === void 0 ? void 0 : _overlayNode$children2.call(_overlayNode$children) : _overlayProps$expandI;
      var overlayNodeExpandIcon = typeof expandIcon !== 'undefined' && (0, _propsUtil.isValidElement)(expandIcon) ? expandIcon : (0, _vue.createVNode)("span", {
        "class": "".concat(prefixCls.value, "-menu-submenu-arrow")
      }, [(0, _vue.createVNode)(_RightOutlined.default, {
        "class": "".concat(prefixCls.value, "-menu-submenu-arrow-icon")
      }, null)]);
      var fixedModeOverlay = (0, _propsUtil.isValidElement)(overlayNode) ? (0, _vnode.cloneElement)(overlayNode, {
        mode: 'vertical',
        selectable: selectable,
        expandIcon: function expandIcon() {
          return overlayNodeExpandIcon;
        }
      }) : overlayNode;
      return fixedModeOverlay;
    };
    var placement = (0, _vue.computed)(function () {
      var placement = props.placement;
      if (!placement) {
        return direction.value === 'rtl' ? 'bottomRight' : 'bottomLeft';
      }
      if (placement.includes('Center')) {
        var newPlacement = placement.slice(0, placement.indexOf('Center'));
        (0, _devWarning.default)(!placement.includes('Center'), 'Dropdown', "You are using '".concat(placement, "' placement in Dropdown, which is deprecated. Try to use '").concat(newPlacement, "' instead."));
        return newPlacement;
      }
      return placement;
    });
    var handleVisibleChange = function handleVisibleChange(val) {
      emit('update:visible', val);
      emit('visibleChange', val);
    };
    return function () {
      var _slots$default, _child$props;
      var arrow = props.arrow,
        trigger = props.trigger,
        disabled = props.disabled,
        overlayClassName = props.overlayClassName;
      var child = (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)[0];
      var dropdownTrigger = (0, _vnode.cloneElement)(child, (0, _extends2.default)({
        class: (0, _classNames3.default)(child === null || child === void 0 ? void 0 : (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.class, (0, _defineProperty2.default)({}, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), "".concat(prefixCls.value, "-trigger"))
      }, disabled ? {
        disabled: disabled
      } : {}));
      var overlayClassNameCustomized = (0, _classNames3.default)(overlayClassName, (0, _defineProperty2.default)({}, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'));
      var triggerActions = disabled ? [] : trigger;
      var alignPoint;
      if (triggerActions && triggerActions.indexOf('contextmenu') !== -1) {
        alignPoint = true;
      }
      var builtinPlacements = (0, _placements.default)({
        arrowPointAtCenter: (0, _typeof2.default)(arrow) === 'object' && arrow.pointAtCenter,
        autoAdjustOverflow: true
      });
      var dropdownProps = (0, _omit.default)((0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), attrs), {}, {
        builtinPlacements: builtinPlacements,
        overlayClassName: overlayClassNameCustomized,
        arrow: arrow,
        alignPoint: alignPoint,
        prefixCls: prefixCls.value,
        getPopupContainer: getPopupContainer.value,
        transitionName: transitionName.value,
        trigger: triggerActions,
        onVisibleChange: handleVisibleChange,
        placement: placement.value
      }), ['overlay', 'onUpdate:visible']);
      return (0, _vue.createVNode)(_vcDropdown.default, dropdownProps, {
        default: function _default() {
          return [dropdownTrigger];
        },
        overlay: renderOverlay
      });
    };
  }
});
Dropdown.Button = _dropdownButton.default;
var _default2 = Dropdown;
exports.default = _default2;