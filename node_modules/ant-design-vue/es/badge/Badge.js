import _typeof from "@babel/runtime/helpers/esm/typeof";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { withDirectives as _withDirectives, vShow as _vShow, createVNode as _createVNode } from "vue";
import PropTypes from '../_util/vue-types';
import ScrollNumber from './ScrollNumber';
import classNames from '../_util/classNames';
import { getPropsSlot, flattenChildren } from '../_util/props-util';
import { cloneElement } from '../_util/vnode';
import { getTransitionProps, Transition } from '../_util/transition';
import { defineComponent, computed, ref, watch } from 'vue';
import Ribbon from './Ribbon';
import { isPresetColor } from './utils';
import useConfigInject from '../_util/hooks/useConfigInject';
import isNumeric from '../_util/isNumeric';
export var badgeProps = function badgeProps() {
  return {
    /** Number to show in badge */
    count: PropTypes.any,
    showZero: {
      type: Boolean,
      default: undefined
    },
    /** Max count to show */
    overflowCount: {
      type: Number,
      default: 99
    },
    /** whether to show red dot without number */
    dot: {
      type: Boolean,
      default: undefined
    },
    prefixCls: String,
    scrollNumberPrefixCls: String,
    status: {
      type: String
    },
    size: {
      type: String,
      default: 'default'
    },
    color: String,
    text: PropTypes.any,
    offset: Array,
    numberStyle: {
      type: Object,
      default: undefined
    },
    title: String
  };
};
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'ABadge',
  Ribbon: Ribbon,
  inheritAttrs: false,
  props: badgeProps(),
  slots: ['text', 'count'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      attrs = _ref.attrs;
    var _useConfigInject = useConfigInject('badge', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction;
    // ================================ Misc ================================
    var numberedDisplayCount = computed(function () {
      return props.count > props.overflowCount ? "".concat(props.overflowCount, "+") : props.count;
    });
    var hasStatus = computed(function () {
      return props.status !== null && props.status !== undefined || props.color !== null && props.color !== undefined;
    });
    var isZero = computed(function () {
      return numberedDisplayCount.value === '0' || numberedDisplayCount.value === 0;
    });
    var showAsDot = computed(function () {
      return props.dot && !isZero.value;
    });
    var mergedCount = computed(function () {
      return showAsDot.value ? '' : numberedDisplayCount.value;
    });
    var isHidden = computed(function () {
      var isEmpty = mergedCount.value === null || mergedCount.value === undefined || mergedCount.value === '';
      return (isEmpty || isZero.value && !props.showZero) && !showAsDot.value;
    });
    // Count should be cache in case hidden change it
    var livingCount = ref(props.count);
    // We need cache count since remove motion should not change count display
    var displayCount = ref(mergedCount.value);
    // We will cache the dot status to avoid shaking on leaved motion
    var isDotRef = ref(showAsDot.value);
    watch([function () {
      return props.count;
    }, mergedCount, showAsDot], function () {
      if (!isHidden.value) {
        livingCount.value = props.count;
        displayCount.value = mergedCount.value;
        isDotRef.value = showAsDot.value;
      }
    }, {
      immediate: true
    });
    // Shared styles
    var statusCls = computed(function () {
      var _ref2;
      return _ref2 = {}, _defineProperty(_ref2, "".concat(prefixCls.value, "-status-dot"), hasStatus.value), _defineProperty(_ref2, "".concat(prefixCls.value, "-status-").concat(props.status), !!props.status), _defineProperty(_ref2, "".concat(prefixCls.value, "-status-").concat(props.color), isPresetColor(props.color)), _ref2;
    });
    var statusStyle = computed(function () {
      if (props.color && !isPresetColor(props.color)) {
        return {
          background: props.color
        };
      } else {
        return {};
      }
    });
    var scrollNumberCls = computed(function () {
      var _ref3;
      return _ref3 = {}, _defineProperty(_ref3, "".concat(prefixCls.value, "-dot"), isDotRef.value), _defineProperty(_ref3, "".concat(prefixCls.value, "-count"), !isDotRef.value), _defineProperty(_ref3, "".concat(prefixCls.value, "-count-sm"), props.size === 'small'), _defineProperty(_ref3, "".concat(prefixCls.value, "-multiple-words"), !isDotRef.value && displayCount.value && displayCount.value.toString().length > 1), _defineProperty(_ref3, "".concat(prefixCls.value, "-status-").concat(props.status), !!props.status), _defineProperty(_ref3, "".concat(prefixCls.value, "-status-").concat(props.color), isPresetColor(props.color)), _ref3;
    });
    return function () {
      var _slots$default, _slots$count, _classNames;
      var offset = props.offset,
        title = props.title,
        color = props.color;
      var style = attrs.style;
      var text = getPropsSlot(slots, props, 'text');
      var pre = prefixCls.value;
      var count = livingCount.value;
      var children = flattenChildren((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
      children = children.length ? children : null;
      var visible = !!(!isHidden.value || slots.count);
      // =============================== Styles ===============================
      var mergedStyle = function () {
        if (!offset) {
          return _objectSpread({}, style);
        }
        var offsetStyle = {
          marginTop: isNumeric(offset[1]) ? "".concat(offset[1], "px") : offset[1]
        };
        if (direction.value === 'rtl') {
          offsetStyle.left = "".concat(parseInt(offset[0], 10), "px");
        } else {
          offsetStyle.right = "".concat(-parseInt(offset[0], 10), "px");
        }
        return _objectSpread(_objectSpread({}, offsetStyle), style);
      }();
      // =============================== Render ===============================
      // >>> Title
      var titleNode = title !== null && title !== void 0 ? title : typeof count === 'string' || typeof count === 'number' ? count : undefined;
      // >>> Status Text
      var statusTextNode = visible || !text ? null : _createVNode("span", {
        "class": "".concat(pre, "-status-text")
      }, [text]);
      // >>> Display Component
      var displayNode = _typeof(count) === 'object' || count === undefined && slots.count ? cloneElement(count !== null && count !== void 0 ? count : (_slots$count = slots.count) === null || _slots$count === void 0 ? void 0 : _slots$count.call(slots), {
        style: mergedStyle
      }, false) : null;
      var badgeClassName = classNames(pre, (_classNames = {}, _defineProperty(_classNames, "".concat(pre, "-status"), hasStatus.value), _defineProperty(_classNames, "".concat(pre, "-not-a-wrapper"), !children), _defineProperty(_classNames, "".concat(pre, "-rtl"), direction.value === 'rtl'), _classNames), attrs.class);
      // <Badge status="success" />
      if (!children && hasStatus.value) {
        var statusTextColor = mergedStyle.color;
        return _createVNode("span", _objectSpread(_objectSpread({}, attrs), {}, {
          "class": badgeClassName,
          "style": mergedStyle
        }), [_createVNode("span", {
          "class": statusCls.value,
          "style": statusStyle.value
        }, null), _createVNode("span", {
          "style": {
            color: statusTextColor
          },
          "class": "".concat(pre, "-status-text")
        }, [text])]);
      }
      var transitionProps = getTransitionProps(children ? "".concat(pre, "-zoom") : '', {
        appear: false
      });
      var scrollNumberStyle = _objectSpread(_objectSpread({}, mergedStyle), props.numberStyle);
      if (color && !isPresetColor(color)) {
        scrollNumberStyle = scrollNumberStyle || {};
        scrollNumberStyle.background = color;
      }
      return _createVNode("span", _objectSpread(_objectSpread({}, attrs), {}, {
        "class": badgeClassName
      }), [children, _createVNode(Transition, transitionProps, {
        default: function _default() {
          return [_withDirectives(_createVNode(ScrollNumber, {
            "prefixCls": props.scrollNumberPrefixCls,
            "show": visible,
            "class": scrollNumberCls.value,
            "count": displayCount.value,
            "title": titleNode,
            "style": scrollNumberStyle,
            "key": "scrollNumber"
          }, {
            default: function _default() {
              return [displayNode];
            }
          }), [[_vShow, visible]])];
        }
      }), statusTextNode]);
    };
  }
});