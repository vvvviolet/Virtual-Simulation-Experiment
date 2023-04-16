import { defineComponent, inject, provide, ref, toRef, watch } from 'vue';
var RangeContextKey = Symbol('RangeContextProps');
export var useProvideRange = function useProvideRange(props) {
  provide(RangeContextKey, props);
};
export var useInjectRange = function useInjectRange() {
  return inject(RangeContextKey, {
    rangedValue: ref(),
    hoverRangedValue: ref(),
    inRange: ref(),
    panelPosition: ref()
  });
};
export var RangeContextProvider = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'PanelContextProvider',
  inheritAttrs: false,
  props: {
    value: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var value = {
      rangedValue: ref(props.value.rangedValue),
      hoverRangedValue: ref(props.value.hoverRangedValue),
      inRange: ref(props.value.inRange),
      panelPosition: ref(props.value.panelPosition)
    };
    useProvideRange(value);
    toRef;
    watch(function () {
      return props.value;
    }, function () {
      Object.keys(props.value).forEach(function (key) {
        if (value[key]) {
          value[key].value = props.value[key];
        }
      });
    });
    return function () {
      var _slots$default;
      return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
    };
  }
});
export default RangeContextKey;