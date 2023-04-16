"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _TableContext = require("../context/TableContext");
var indexGuid = 0;
var Summary = (0, _vue.defineComponent)({
  name: 'Summary',
  props: ['fixed'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var tableContext = (0, _TableContext.useInjectTable)();
    var uniKey = "table-summary-uni-key-".concat(++indexGuid);
    var fixed = (0, _vue.computed)(function () {
      return props.fixed === '' || props.fixed;
    });
    (0, _vue.watchEffect)(function () {
      tableContext.summaryCollect(uniKey, fixed.value);
    });
    (0, _vue.onBeforeUnmount)(function () {
      tableContext.summaryCollect(uniKey, false);
    });
    return function () {
      var _slots$default;
      return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
    };
  }
});
var _default = Summary;
exports.default = _default;