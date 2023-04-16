import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
import Trigger from '../vc-trigger';
import classNames from '../_util/classNames';
import useMergeProps from './hooks/useMergeProps';
var BUILT_IN_PLACEMENTS = {
  bottomLeft: {
    points: ['tl', 'bl'],
    offset: [0, 4],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  },
  bottomRight: {
    points: ['tr', 'br'],
    offset: [0, 4],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  },
  topLeft: {
    points: ['bl', 'tl'],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  },
  topRight: {
    points: ['br', 'tr'],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  }
};
function PickerTrigger(props, _ref) {
  var _classNames;
  var slots = _ref.slots;
  var _useMergeProps = useMergeProps(props),
    prefixCls = _useMergeProps.prefixCls,
    popupStyle = _useMergeProps.popupStyle,
    visible = _useMergeProps.visible,
    dropdownClassName = _useMergeProps.dropdownClassName,
    dropdownAlign = _useMergeProps.dropdownAlign,
    transitionName = _useMergeProps.transitionName,
    getPopupContainer = _useMergeProps.getPopupContainer,
    range = _useMergeProps.range,
    popupPlacement = _useMergeProps.popupPlacement,
    direction = _useMergeProps.direction;
  var dropdownPrefixCls = "".concat(prefixCls, "-dropdown");
  var getPopupPlacement = function getPopupPlacement() {
    if (popupPlacement !== undefined) {
      return popupPlacement;
    }
    return direction === 'rtl' ? 'bottomRight' : 'bottomLeft';
  };
  return _createVNode(Trigger, {
    "showAction": [],
    "hideAction": [],
    "popupPlacement": getPopupPlacement(),
    "builtinPlacements": BUILT_IN_PLACEMENTS,
    "prefixCls": dropdownPrefixCls,
    "popupTransitionName": transitionName,
    "popupAlign": dropdownAlign,
    "popupVisible": visible,
    "popupClassName": classNames(dropdownClassName, (_classNames = {}, _defineProperty(_classNames, "".concat(dropdownPrefixCls, "-range"), range), _defineProperty(_classNames, "".concat(dropdownPrefixCls, "-rtl"), direction === 'rtl'), _classNames)),
    "popupStyle": popupStyle,
    "getPopupContainer": getPopupContainer,
    "tryPopPortal": true
  }, {
    default: slots.default,
    popup: slots.popupElement
  });
}
export default PickerTrigger;