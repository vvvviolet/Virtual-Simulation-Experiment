"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _vcTrigger = _interopRequireDefault(require("../vc-trigger"));
var _classNames2 = _interopRequireDefault(require("../_util/classNames"));
var _useMergeProps2 = _interopRequireDefault(require("./hooks/useMergeProps"));
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
  var _useMergeProps = (0, _useMergeProps2.default)(props),
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
  return (0, _vue.createVNode)(_vcTrigger.default, {
    "showAction": [],
    "hideAction": [],
    "popupPlacement": getPopupPlacement(),
    "builtinPlacements": BUILT_IN_PLACEMENTS,
    "prefixCls": dropdownPrefixCls,
    "popupTransitionName": transitionName,
    "popupAlign": dropdownAlign,
    "popupVisible": visible,
    "popupClassName": (0, _classNames2.default)(dropdownClassName, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(dropdownPrefixCls, "-range"), range), (0, _defineProperty2.default)(_classNames, "".concat(dropdownPrefixCls, "-rtl"), direction === 'rtl'), _classNames)),
    "popupStyle": popupStyle,
    "getPopupContainer": getPopupContainer,
    "tryPopPortal": true
  }, {
    default: slots.default,
    popup: slots.popupElement
  });
}
var _default = PickerTrigger;
exports.default = _default;