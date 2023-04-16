import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import { computed, defineComponent } from 'vue';
import RcDropdown from '../vc-dropdown';
import DropdownButton from './dropdown-button';
import { cloneElement } from '../_util/vnode';
import classNames from '../_util/classNames';
import { isValidElement, initDefaultProps } from '../_util/props-util';
import { dropdownProps } from './props';
import RightOutlined from "@ant-design/icons-vue/es/icons/RightOutlined";
import useConfigInject from '../_util/hooks/useConfigInject';
import devWarning from '../vc-util/devWarning';
import omit from '../_util/omit';
import getPlacements from '../tooltip/placements';
var Dropdown = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'ADropdown',
  inheritAttrs: false,
  props: initDefaultProps(dropdownProps(), {
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
    var _useConfigInject = useConfigInject('dropdown', props),
      prefixCls = _useConfigInject.prefixCls,
      rootPrefixCls = _useConfigInject.rootPrefixCls,
      direction = _useConfigInject.direction,
      getPopupContainer = _useConfigInject.getPopupContainer;
    var transitionName = computed(function () {
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
      devWarning(!overlayProps.mode || overlayProps.mode === 'vertical', 'Dropdown', "mode=\"".concat(overlayProps.mode, "\" is not supported for Dropdown's Menu."));
      // menu cannot be selectable in dropdown defaultly
      var _overlayProps$selecta = overlayProps.selectable,
        selectable = _overlayProps$selecta === void 0 ? false : _overlayProps$selecta,
        _overlayProps$expandI = overlayProps.expandIcon,
        expandIcon = _overlayProps$expandI === void 0 ? (_overlayNode$children = overlayNode.children) === null || _overlayNode$children === void 0 ? void 0 : (_overlayNode$children2 = _overlayNode$children.expandIcon) === null || _overlayNode$children2 === void 0 ? void 0 : _overlayNode$children2.call(_overlayNode$children) : _overlayProps$expandI;
      var overlayNodeExpandIcon = typeof expandIcon !== 'undefined' && isValidElement(expandIcon) ? expandIcon : _createVNode("span", {
        "class": "".concat(prefixCls.value, "-menu-submenu-arrow")
      }, [_createVNode(RightOutlined, {
        "class": "".concat(prefixCls.value, "-menu-submenu-arrow-icon")
      }, null)]);
      var fixedModeOverlay = isValidElement(overlayNode) ? cloneElement(overlayNode, {
        mode: 'vertical',
        selectable: selectable,
        expandIcon: function expandIcon() {
          return overlayNodeExpandIcon;
        }
      }) : overlayNode;
      return fixedModeOverlay;
    };
    var placement = computed(function () {
      var placement = props.placement;
      if (!placement) {
        return direction.value === 'rtl' ? 'bottomRight' : 'bottomLeft';
      }
      if (placement.includes('Center')) {
        var newPlacement = placement.slice(0, placement.indexOf('Center'));
        devWarning(!placement.includes('Center'), 'Dropdown', "You are using '".concat(placement, "' placement in Dropdown, which is deprecated. Try to use '").concat(newPlacement, "' instead."));
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
      var dropdownTrigger = cloneElement(child, _extends({
        class: classNames(child === null || child === void 0 ? void 0 : (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.class, _defineProperty({}, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), "".concat(prefixCls.value, "-trigger"))
      }, disabled ? {
        disabled: disabled
      } : {}));
      var overlayClassNameCustomized = classNames(overlayClassName, _defineProperty({}, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'));
      var triggerActions = disabled ? [] : trigger;
      var alignPoint;
      if (triggerActions && triggerActions.indexOf('contextmenu') !== -1) {
        alignPoint = true;
      }
      var builtinPlacements = getPlacements({
        arrowPointAtCenter: _typeof(arrow) === 'object' && arrow.pointAtCenter,
        autoAdjustOverflow: true
      });
      var dropdownProps = omit(_objectSpread(_objectSpread(_objectSpread({}, props), attrs), {}, {
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
      return _createVNode(RcDropdown, dropdownProps, {
        default: function _default() {
          return [dropdownTrigger];
        },
        overlay: renderOverlay
      });
    };
  }
});
Dropdown.Button = DropdownButton;
export default Dropdown;