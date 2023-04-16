"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _vcTrigger = _interopRequireDefault(require("../vc-trigger"));
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _classNames2 = _interopRequireDefault(require("../_util/classNames"));
var _excluded = ["empty"];
var getBuiltInPlacements = function getBuiltInPlacements(dropdownMatchSelectWidth) {
  // Enable horizontal overflow auto-adjustment when a custom dropdown width is provided
  var adjustX = dropdownMatchSelectWidth === true ? 0 : 1;
  return {
    bottomLeft: {
      points: ['tl', 'bl'],
      offset: [0, 4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      }
    },
    bottomRight: {
      points: ['tr', 'br'],
      offset: [0, 4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      }
    },
    topLeft: {
      points: ['bl', 'tl'],
      offset: [0, -4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      }
    },
    topRight: {
      points: ['br', 'tr'],
      offset: [0, -4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      }
    }
  };
};
var SelectTrigger = (0, _vue.defineComponent)({
  name: 'SelectTrigger',
  inheritAttrs: false,
  props: {
    dropdownAlign: Object,
    visible: {
      type: Boolean,
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: undefined
    },
    dropdownClassName: String,
    dropdownStyle: _vueTypes.default.object,
    placement: String,
    empty: {
      type: Boolean,
      default: undefined
    },
    prefixCls: String,
    popupClassName: String,
    animation: String,
    transitionName: String,
    getPopupContainer: Function,
    dropdownRender: Function,
    containerWidth: Number,
    dropdownMatchSelectWidth: _vueTypes.default.oneOfType([Number, Boolean]).def(true),
    popupElement: _vueTypes.default.any,
    direction: String,
    getTriggerDOMNode: Function,
    onPopupVisibleChange: Function,
    onPopupMouseEnter: Function
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      attrs = _ref.attrs,
      expose = _ref.expose;
    var builtInPlacements = (0, _vue.computed)(function () {
      var dropdownMatchSelectWidth = props.dropdownMatchSelectWidth;
      return getBuiltInPlacements(dropdownMatchSelectWidth);
    });
    var popupRef = (0, _vue.ref)();
    expose({
      getPopupElement: function getPopupElement() {
        return popupRef.value;
      }
    });
    return function () {
      var _props$attrs = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), attrs),
        _props$attrs$empty = _props$attrs.empty,
        empty = _props$attrs$empty === void 0 ? false : _props$attrs$empty,
        restProps = (0, _objectWithoutProperties2.default)(_props$attrs, _excluded);
      var visible = restProps.visible,
        dropdownAlign = restProps.dropdownAlign,
        prefixCls = restProps.prefixCls,
        popupElement = restProps.popupElement,
        dropdownClassName = restProps.dropdownClassName,
        dropdownStyle = restProps.dropdownStyle,
        _restProps$direction = restProps.direction,
        direction = _restProps$direction === void 0 ? 'ltr' : _restProps$direction,
        placement = restProps.placement,
        dropdownMatchSelectWidth = restProps.dropdownMatchSelectWidth,
        containerWidth = restProps.containerWidth,
        dropdownRender = restProps.dropdownRender,
        animation = restProps.animation,
        transitionName = restProps.transitionName,
        getPopupContainer = restProps.getPopupContainer,
        getTriggerDOMNode = restProps.getTriggerDOMNode,
        onPopupVisibleChange = restProps.onPopupVisibleChange,
        onPopupMouseEnter = restProps.onPopupMouseEnter;
      var dropdownPrefixCls = "".concat(prefixCls, "-dropdown");
      var popupNode = popupElement;
      if (dropdownRender) {
        popupNode = dropdownRender({
          menuNode: popupElement,
          props: props
        });
      }
      var mergedTransitionName = animation ? "".concat(dropdownPrefixCls, "-").concat(animation) : transitionName;
      var popupStyle = (0, _objectSpread2.default)({
        minWidth: "".concat(containerWidth, "px")
      }, dropdownStyle);
      if (typeof dropdownMatchSelectWidth === 'number') {
        popupStyle.width = "".concat(dropdownMatchSelectWidth, "px");
      } else if (dropdownMatchSelectWidth) {
        popupStyle.width = "".concat(containerWidth, "px");
      }
      return (0, _vue.createVNode)(_vcTrigger.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
        "showAction": onPopupVisibleChange ? ['click'] : [],
        "hideAction": onPopupVisibleChange ? ['click'] : [],
        "popupPlacement": placement || (direction === 'rtl' ? 'bottomRight' : 'bottomLeft'),
        "builtinPlacements": builtInPlacements.value,
        "prefixCls": dropdownPrefixCls,
        "popupTransitionName": mergedTransitionName,
        "popupAlign": dropdownAlign,
        "popupVisible": visible,
        "getPopupContainer": getPopupContainer,
        "popupClassName": (0, _classNames2.default)(dropdownClassName, (0, _defineProperty2.default)({}, "".concat(dropdownPrefixCls, "-empty"), empty)),
        "popupStyle": popupStyle,
        "getTriggerDOMNode": getTriggerDOMNode,
        "onPopupVisibleChange": onPopupVisibleChange
      }), {
        default: slots.default,
        popup: function popup() {
          return (0, _vue.createVNode)("div", {
            "ref": popupRef,
            "onMouseenter": onPopupMouseEnter
          }, [popupNode]);
        }
      });
    };
  }
});
var _default = SelectTrigger;
exports.default = _default;