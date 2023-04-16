"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.menuDividerProps = exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _useConfigInject2 = _interopRequireDefault(require("../../_util/hooks/useConfigInject"));
var menuDividerProps = function menuDividerProps() {
  return {
    prefixCls: String,
    dashed: Boolean
  };
};
exports.menuDividerProps = menuDividerProps;
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'AMenuDivider',
  props: menuDividerProps(),
  setup: function setup(props) {
    var _useConfigInject = (0, _useConfigInject2.default)('menu', props),
      prefixCls = _useConfigInject.prefixCls;
    var cls = (0, _vue.computed)(function () {
      var _ref;
      return _ref = {}, (0, _defineProperty2.default)(_ref, "".concat(prefixCls.value, "-item-divider"), true), (0, _defineProperty2.default)(_ref, "".concat(prefixCls.value, "-item-divider-dashed"), !!props.dashed), _ref;
    });
    return function () {
      return (0, _vue.createVNode)("li", {
        "class": cls.value
      }, null);
    };
  }
});
exports.default = _default;