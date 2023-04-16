"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timelineProps = exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classNames2 = _interopRequireDefault(require("../_util/classNames"));
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _propsUtil = require("../_util/props-util");
var _initDefaultProps = _interopRequireDefault(require("../_util/props-util/initDefaultProps"));
var _TimelineItem = _interopRequireDefault(require("./TimelineItem"));
var _LoadingOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/LoadingOutlined"));
var _type = require("../_util/type");
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var timelineProps = function timelineProps() {
  return {
    prefixCls: String,
    /** 指定最后一个幽灵节点是否存在或内容 */
    pending: _vueTypes.default.any,
    pendingDot: _vueTypes.default.any,
    reverse: {
      type: Boolean,
      default: undefined
    },
    mode: _vueTypes.default.oneOf((0, _type.tuple)('left', 'alternate', 'right', ''))
  };
};
exports.timelineProps = timelineProps;
var _default2 = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'ATimeline',
  props: (0, _initDefaultProps.default)(timelineProps(), {
    reverse: false,
    mode: ''
  }),
  slots: ['pending', 'pendingDot'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var _useConfigInject = (0, _useConfigInject2.default)('timeline', props),
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
      var children = (0, _propsUtil.filterEmpty)((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
      var pendingItem = pending ? (0, _vue.createVNode)(_TimelineItem.default, {
        "pending": !!pending,
        "dot": pendingDot || (0, _vue.createVNode)(_LoadingOutlined.default, null, null)
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
        return (0, _vue.cloneVNode)(ele, {
          class: (0, _classNames2.default)([!reverse && !!pending ? pendingClass : readyClass, getPositionCls(ele, idx)])
        });
      });
      var hasLabelItem = timeLineItems.some(function (item) {
        var _item$props, _item$children;
        return !!((_item$props = item.props) !== null && _item$props !== void 0 && _item$props.label || (_item$children = item.children) !== null && _item$children !== void 0 && _item$children.label);
      });
      var classString = (0, _classNames2.default)(prefixCls.value, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-pending"), !!pending), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-reverse"), !!reverse), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-").concat(mode), !!mode && !hasLabelItem), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-label"), hasLabelItem), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), _classNames));
      return (0, _vue.createVNode)("ul", {
        "class": classString
      }, [items]);
    };
  }
});
exports.default = _default2;