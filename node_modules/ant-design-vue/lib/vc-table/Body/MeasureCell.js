"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _vcResizeObserver = _interopRequireDefault(require("../../vc-resize-observer"));
var _default2 = (0, _vue.defineComponent)({
  name: 'MeasureCell',
  props: ['columnKey'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var tdRef = (0, _vue.ref)();
    (0, _vue.onMounted)(function () {
      if (tdRef.value) {
        emit('columnResize', props.columnKey, tdRef.value.offsetWidth);
      }
    });
    return function () {
      return (0, _vue.createVNode)(_vcResizeObserver.default, {
        "onResize": function onResize(_ref2) {
          var offsetWidth = _ref2.offsetWidth;
          emit('columnResize', props.columnKey, offsetWidth);
        }
      }, {
        default: function _default() {
          return [(0, _vue.createVNode)("td", {
            "ref": tdRef,
            "style": {
              padding: 0,
              border: 0,
              height: 0
            }
          }, [(0, _vue.createVNode)("div", {
            "style": {
              height: 0,
              overflow: 'hidden'
            }
          }, [(0, _vue.createTextVNode)("\xA0")])])];
        }
      });
    };
  }
});
exports.default = _default2;