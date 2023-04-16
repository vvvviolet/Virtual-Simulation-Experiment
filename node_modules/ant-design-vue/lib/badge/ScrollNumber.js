"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _classNames = _interopRequireDefault(require("../_util/classNames"));
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _vnode = require("../_util/vnode");
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var _SingleNumber = _interopRequireDefault(require("./SingleNumber"));
var _propsUtil = require("../_util/props-util");
var _excluded = ["prefixCls", "count", "title", "show", "component", "class", "style"];
var scrollNumberProps = {
  prefixCls: String,
  count: _vueTypes.default.any,
  component: String,
  title: _vueTypes.default.any,
  show: Boolean
};
var _default2 = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'ScrollNumber',
  inheritAttrs: false,
  props: scrollNumberProps,
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      slots = _ref.slots;
    var _useConfigInject = (0, _useConfigInject2.default)('scroll-number', props),
      prefixCls = _useConfigInject.prefixCls;
    return function () {
      var _slots$default;
      var _props$attrs = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), attrs),
        customizePrefixCls = _props$attrs.prefixCls,
        count = _props$attrs.count,
        title = _props$attrs.title,
        show = _props$attrs.show,
        _props$attrs$componen = _props$attrs.component,
        Tag = _props$attrs$componen === void 0 ? 'sup' : _props$attrs$componen,
        className = _props$attrs.class,
        style = _props$attrs.style,
        restProps = (0, _objectWithoutProperties2.default)(_props$attrs, _excluded);
      // ============================ Render ============================
      var newProps = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, restProps), {}, {
        style: style,
        'data-show': props.show,
        class: (0, _classNames.default)(prefixCls.value, className),
        title: title
      });
      // Only integer need motion
      var numberNodes = count;
      if (count && Number(count) % 1 === 0) {
        var numberList = String(count).split('');
        numberNodes = numberList.map(function (num, i) {
          return (0, _vue.createVNode)(_SingleNumber.default, {
            "prefixCls": prefixCls.value,
            "count": Number(count),
            "value": num,
            "key": numberList.length - i
          }, null);
        });
      }
      // allow specify the border
      // mock border-color by box-shadow for compatible with old usage:
      // <Badge count={4} style={{ backgroundColor: '#fff', color: '#999', borderColor: '#d9d9d9' }} />
      if (style && style.borderColor) {
        newProps.style = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, style), {}, {
          boxShadow: "0 0 0 1px ".concat(style.borderColor, " inset")
        });
      }
      var children = (0, _propsUtil.filterEmpty)((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
      if (children && children.length) {
        return (0, _vnode.cloneElement)(children, {
          class: (0, _classNames.default)("".concat(prefixCls.value, "-custom-component"))
        }, false);
      }
      return (0, _vue.createVNode)(Tag, newProps, {
        default: function _default() {
          return [numberNodes];
        }
      });
    };
  }
});
exports.default = _default2;