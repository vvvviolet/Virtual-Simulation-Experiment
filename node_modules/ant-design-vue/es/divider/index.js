import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import { flattenChildren } from '../_util/props-util';
import { computed, defineComponent } from 'vue';
import { withInstall } from '../_util/type';
import useConfigInject from '../_util/hooks/useConfigInject';
export var dividerProps = function dividerProps() {
  return {
    prefixCls: String,
    type: {
      type: String,
      default: 'horizontal'
    },
    dashed: {
      type: Boolean,
      default: false
    },
    orientation: {
      type: String,
      default: 'center'
    },
    plain: {
      type: Boolean,
      default: false
    },
    orientationMargin: [String, Number]
  };
};
var Divider = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'ADivider',
  props: dividerProps(),
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var _useConfigInject = useConfigInject('divider', props),
      prefixClsRef = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction;
    var hasCustomMarginLeft = computed(function () {
      return props.orientation === 'left' && props.orientationMargin != null;
    });
    var hasCustomMarginRight = computed(function () {
      return props.orientation === 'right' && props.orientationMargin != null;
    });
    var classString = computed(function () {
      var _ref2;
      var type = props.type,
        dashed = props.dashed,
        plain = props.plain;
      var prefixCls = prefixClsRef.value;
      return _ref2 = {}, _defineProperty(_ref2, prefixCls, true), _defineProperty(_ref2, "".concat(prefixCls, "-").concat(type), true), _defineProperty(_ref2, "".concat(prefixCls, "-dashed"), !!dashed), _defineProperty(_ref2, "".concat(prefixCls, "-plain"), !!plain), _defineProperty(_ref2, "".concat(prefixCls, "-rtl"), direction.value === 'rtl'), _defineProperty(_ref2, "".concat(prefixCls, "-no-default-orientation-margin-left"), hasCustomMarginLeft.value), _defineProperty(_ref2, "".concat(prefixCls, "-no-default-orientation-margin-right"), hasCustomMarginRight.value), _ref2;
    });
    var innerStyle = computed(function () {
      var marginValue = typeof props.orientationMargin === 'number' ? "".concat(props.orientationMargin, "px") : props.orientationMargin;
      return _objectSpread(_objectSpread({}, hasCustomMarginLeft.value && {
        marginLeft: marginValue
      }), hasCustomMarginRight.value && {
        marginRight: marginValue
      });
    });
    var orientationPrefix = computed(function () {
      return props.orientation.length > 0 ? '-' + props.orientation : props.orientation;
    });
    return function () {
      var _slots$default;
      var children = flattenChildren((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
      return _createVNode("div", {
        "class": [classString.value, children.length ? "".concat(prefixClsRef.value, "-with-text ").concat(prefixClsRef.value, "-with-text").concat(orientationPrefix.value) : ''],
        "role": "separator"
      }, [children.length ? _createVNode("span", {
        "class": "".concat(prefixClsRef.value, "-inner-text"),
        "style": innerStyle.value
      }, [children]) : null]);
    };
  }
});
export default withInstall(Divider);