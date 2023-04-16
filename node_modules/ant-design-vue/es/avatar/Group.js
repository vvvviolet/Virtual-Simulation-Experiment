import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import { cloneElement } from '../_util/vnode';
import Avatar from './Avatar';
import Popover from '../popover';
import { defineComponent } from 'vue';
import { flattenChildren, getPropsSlot } from '../_util/props-util';
import useConfigInject from '../_util/hooks/useConfigInject';
import useProvideSize from '../_util/hooks/useSize';
export var groupProps = function groupProps() {
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
var Group = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'AAvatarGroup',
  inheritAttrs: false,
  props: groupProps(),
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      attrs = _ref.attrs;
    var _useConfigInject = useConfigInject('avatar-group', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction;
    useProvideSize(props);
    return function () {
      var _cls;
      var _props$maxPopoverPlac = props.maxPopoverPlacement,
        maxPopoverPlacement = _props$maxPopoverPlac === void 0 ? 'top' : _props$maxPopoverPlac,
        maxCount = props.maxCount,
        maxStyle = props.maxStyle,
        _props$maxPopoverTrig = props.maxPopoverTrigger,
        maxPopoverTrigger = _props$maxPopoverTrig === void 0 ? 'hover' : _props$maxPopoverTrig;
      var cls = (_cls = {}, _defineProperty(_cls, prefixCls.value, true), _defineProperty(_cls, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), _defineProperty(_cls, "".concat(attrs.class), !!attrs.class), _cls);
      var children = getPropsSlot(slots, props);
      var childrenWithProps = flattenChildren(children).map(function (child, index) {
        return cloneElement(child, {
          key: "avatar-key-".concat(index)
        });
      });
      var numOfChildren = childrenWithProps.length;
      if (maxCount && maxCount < numOfChildren) {
        var childrenShow = childrenWithProps.slice(0, maxCount);
        var childrenHidden = childrenWithProps.slice(maxCount, numOfChildren);
        childrenShow.push(_createVNode(Popover, {
          "key": "avatar-popover-key",
          "content": childrenHidden,
          "trigger": maxPopoverTrigger,
          "placement": maxPopoverPlacement,
          "overlayClassName": "".concat(prefixCls.value, "-popover")
        }, {
          default: function _default() {
            return [_createVNode(Avatar, {
              "style": maxStyle
            }, {
              default: function _default() {
                return ["+".concat(numOfChildren - maxCount)];
              }
            })];
          }
        }));
        return _createVNode("div", _objectSpread(_objectSpread({}, attrs), {}, {
          "class": cls,
          "style": attrs.style
        }), [childrenShow]);
      }
      return _createVNode("div", _objectSpread(_objectSpread({}, attrs), {}, {
        "class": cls,
        "style": attrs.style
      }), [childrenWithProps]);
    };
  }
});
export default Group;