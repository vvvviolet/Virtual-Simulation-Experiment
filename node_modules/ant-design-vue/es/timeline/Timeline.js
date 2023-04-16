import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import { cloneVNode, defineComponent } from 'vue';
import classNames from '../_util/classNames';
import PropTypes from '../_util/vue-types';
import { filterEmpty } from '../_util/props-util';
import initDefaultProps from '../_util/props-util/initDefaultProps';
import TimelineItem from './TimelineItem';
import LoadingOutlined from "@ant-design/icons-vue/es/icons/LoadingOutlined";
import { tuple } from '../_util/type';
import useConfigInject from '../_util/hooks/useConfigInject';
export var timelineProps = function timelineProps() {
  return {
    prefixCls: String,
    /** 指定最后一个幽灵节点是否存在或内容 */
    pending: PropTypes.any,
    pendingDot: PropTypes.any,
    reverse: {
      type: Boolean,
      default: undefined
    },
    mode: PropTypes.oneOf(tuple('left', 'alternate', 'right', ''))
  };
};
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'ATimeline',
  props: initDefaultProps(timelineProps(), {
    reverse: false,
    mode: ''
  }),
  slots: ['pending', 'pendingDot'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var _useConfigInject = useConfigInject('timeline', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction;
    var getPositionCls = function getPositionCls(ele, idx) {
      var eleProps = ele.props || {};
      if (props.mode === 'alternate') {
        if (eleProps.position === 'right') return "".concat(prefixCls.value, "-item-right");
        if (eleProps.position === 'left') return "".concat(prefixCls.value, "-item-left");
        return idx % 2 === 0 ? "".concat(prefixCls.value, "-item-left") : "".concat(prefixCls.value, "-item-right");
      }
      if (props.mode === 'left') return "".concat(prefixCls.value, "-item-left");
      if (props.mode === 'right') return "".concat(prefixCls.value, "-item-right");
      if (eleProps.position === 'right') return "".concat(prefixCls.value, "-item-right");
      return '';
    };
    return function () {
      var _slots$pending, _slots$pendingDot, _slots$default, _classNames;
      var _props$pending = props.pending,
        pending = _props$pending === void 0 ? (_slots$pending = slots.pending) === null || _slots$pending === void 0 ? void 0 : _slots$pending.call(slots) : _props$pending,
        _props$pendingDot = props.pendingDot,
        pendingDot = _props$pendingDot === void 0 ? (_slots$pendingDot = slots.pendingDot) === null || _slots$pendingDot === void 0 ? void 0 : _slots$pendingDot.call(slots) : _props$pendingDot,
        reverse = props.reverse,
        mode = props.mode;
      var pendingNode = typeof pending === 'boolean' ? null : pending;
      var children = filterEmpty((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
      var pendingItem = pending ? _createVNode(TimelineItem, {
        "pending": !!pending,
        "dot": pendingDot || _createVNode(LoadingOutlined, null, null)
      }, {
        default: function _default() {
          return [pendingNode];
        }
      }) : null;
      if (pendingItem) {
        children.push(pendingItem);
      }
      var timeLineItems = reverse ? children.reverse() : children;
      var itemsCount = timeLineItems.length;
      var lastCls = "".concat(prefixCls.value, "-item-last");
      var items = timeLineItems.map(function (ele, idx) {
        var pendingClass = idx === itemsCount - 2 ? lastCls : '';
        var readyClass = idx === itemsCount - 1 ? lastCls : '';
        return cloneVNode(ele, {
          class: classNames([!reverse && !!pending ? pendingClass : readyClass, getPositionCls(ele, idx)])
        });
      });
      var hasLabelItem = timeLineItems.some(function (item) {
        var _item$props, _item$children;
        return !!((_item$props = item.props) !== null && _item$props !== void 0 && _item$props.label || (_item$children = item.children) !== null && _item$children !== void 0 && _item$children.label);
      });
      var classString = classNames(prefixCls.value, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls.value, "-pending"), !!pending), _defineProperty(_classNames, "".concat(prefixCls.value, "-reverse"), !!reverse), _defineProperty(_classNames, "".concat(prefixCls.value, "-").concat(mode), !!mode && !hasLabelItem), _defineProperty(_classNames, "".concat(prefixCls.value, "-label"), hasLabelItem), _defineProperty(_classNames, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), _classNames));
      return _createVNode("ul", {
        "class": classString
      }, [items]);
    };
  }
});