import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["empty"];
import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import Trigger from '../vc-trigger';
import PropTypes from '../_util/vue-types';
import classNames from '../_util/classNames';
import { computed, ref, defineComponent } from 'vue';
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
var SelectTrigger = defineComponent({
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
    dropdownStyle: PropTypes.object,
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
    dropdownMatchSelectWidth: PropTypes.oneOfType([Number, Boolean]).def(true),
    popupElement: PropTypes.any,
    direction: String,
    getTriggerDOMNode: Function,
    onPopupVisibleChange: Function,
    onPopupMouseEnter: Function
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      attrs = _ref.attrs,
      expose = _ref.expose;
    var builtInPlacements = computed(function () {
      var dropdownMatchSelectWidth = props.dropdownMatchSelectWidth;
      return getBuiltInPlacements(dropdownMatchSelectWidth);
    });
    var popupRef = ref();
    expose({
      getPopupElement: function getPopupElement() {
        return popupRef.value;
      }
    });
    return function () {
      var _props$attrs = _objectSpread(_objectSpread({}, props), attrs),
        _props$attrs$empty = _props$attrs.empty,
        empty = _props$attrs$empty === void 0 ? false : _props$attrs$empty,
        restProps = _objectWithoutProperties(_props$attrs, _excluded);
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
      var popupStyle = _objectSpread({
        minWidth: "".concat(containerWidth, "px")
      }, dropdownStyle);
      if (typeof dropdownMatchSelectWidth === 'number') {
        popupStyle.width = "".concat(dropdownMatchSelectWidth, "px");
      } else if (dropdownMatchSelectWidth) {
        popupStyle.width = "".concat(containerWidth, "px");
      }
      return _createVNode(Trigger, _objectSpread(_objectSpread({}, props), {}, {
        "showAction": onPopupVisibleChange ? ['click'] : [],
        "hideAction": onPopupVisibleChange ? ['click'] : [],
        "popupPlacement": placement || (direction === 'rtl' ? 'bottomRight' : 'bottomLeft'),
        "builtinPlacements": builtInPlacements.value,
        "prefixCls": dropdownPrefixCls,
        "popupTransitionName": mergedTransitionName,
        "popupAlign": dropdownAlign,
        "popupVisible": visible,
        "getPopupContainer": getPopupContainer,
        "popupClassName": classNames(dropdownClassName, _defineProperty({}, "".concat(dropdownPrefixCls, "-empty"), empty)),
        "popupStyle": popupStyle,
        "getTriggerDOMNode": getTriggerDOMNode,
        "onPopupVisibleChange": onPopupVisibleChange
      }), {
        default: slots.default,
        popup: function popup() {
          return _createVNode("div", {
            "ref": popupRef,
            "onMouseenter": onPopupMouseEnter
          }, [popupNode]);
        }
      });
    };
  }
});
export default SelectTrigger;