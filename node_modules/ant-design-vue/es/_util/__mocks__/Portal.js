import { defineComponent } from 'vue';
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'Portal',
  inheritAttrs: false,
  props: ['getContainer'],
  setup: function setup(_props, _ref) {
    var slots = _ref.slots;
    return function () {
      var _slots$default;
      return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
    };
  }
});