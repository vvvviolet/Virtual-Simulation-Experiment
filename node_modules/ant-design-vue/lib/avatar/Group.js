"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.groupProps = exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _vnode = require("../_util/vnode");
var _Avatar = _interopRequireDefault(require("./Avatar"));
var _popover = _interopRequireDefault(require("../popover"));
var _propsUtil = require("../_util/props-util");
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var _useSize = _interopRequireDefault(require("../_util/hooks/useSize"));
var groupProps = function groupProps() {
  return {
    prefixCls: String,
    maxCount: Number,
    maxStyle: {
      type: Object,
      default: undefined
    },
    maxPopoverPlacement: {
      type: String,
      default: 'top'
    },
    maxPopoverTrigger: String,
    /*
     * Size of avatar, options: `large`, `small`, `default`
     * or a custom number size
     * */
    size: {
      type: [Number, String, Object],
      default: 'default'
    }
  };
};
exports.groupProps = groupProps;
var Group = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'AAvatarGroup',
  inheritAttrs: false,
  props: groupProps(),
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      attrs = _ref.attrs;
    var _useConfigInject = (0, _useConfigInject2.default)('avatar-group', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction;
    (0, _useSize.default)(props);
    return function () {
      var _cls;
      var _props$maxPopoverPlac = props.maxPopoverPlacement,
        maxPopoverPlacement = _props$maxPopoverPlac === void 0 ? 'top' : _props$maxPopoverPlac,
        maxCount = props.maxCount,
        maxStyle = props.maxStyle,
        _props$maxPopoverTrig = props.maxPopoverTrigger,
        maxPopoverTrigger = _props$maxPopoverTrig === void 0 ? 'hover' : _props$maxPopoverTrig;
      var cls = (_cls = {}, (0, _defineProperty2.default)(_cls, prefixCls.value, true), (0, _defineProperty2.default)(_cls, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), (0, _defineProperty2.default)(_cls, "".concat(attrs.class), !!attrs.class), _cls);
      var children = (0, _propsUtil.getPropsSlot)(slots, props);
      var childrenWithProps = (0, _propsUtil.flattenChildren)(children).map(function (child, index) {
        return (0, _vnode.cloneElement)(child, {
          key: "avatar-key-".concat(index)
        });
      });
      var numOfChildren = childrenWithProps.length;
      if (maxCount && maxCount < numOfChildren) {
        var childrenShow = childrenWithProps.slice(0, maxCount);
        var childrenHidden = childrenWithProps.slice(maxCount, numOfChildren);
        childrenShow.push((0, _vue.createVNode)(_popover.default, {
          "key": "avatar-popover-key",
          "content": childrenHidden,
          "trigger": maxPopoverTrigger,
          "placement": maxPopoverPlacement,
          "overlayClassName": "".concat(prefixCls.value, "-popover")
        }, {
          default: function _default() {
            return [(0, _vue.createVNode)(_Avatar.default, {
              "style": maxStyle
            }, {
              default: function _default() {
                return ["+".concat(numOfChildren - maxCount)];
              }
            })];
          }
        }));
        return (0, _vue.createVNode)("div", (0, _objectSpread2.default)((0, _objectSpread2.default)({}, attrs), {}, {
          "class": cls,
          "style": attrs.style
        }), [childrenShow]);
      }
      return (0, _vue.createVNode)("div", (0, _objectSpread2.default)((0, _objectSpread2.default)({}, attrs), {}, {
        "class": cls,
        "style": attrs.style
      }), [childrenWithProps]);
    };
  }
});
var _default2 = Group;
exports.default = _default2;