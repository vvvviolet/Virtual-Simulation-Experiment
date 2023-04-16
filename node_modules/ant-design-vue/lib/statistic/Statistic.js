"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statisticProps = exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _initDefaultProps = _interopRequireDefault(require("../_util/props-util/initDefaultProps"));
var _Number = _interopRequireDefault(require("./Number"));
var _Skeleton = _interopRequireDefault(require("../skeleton/Skeleton"));
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var statisticProps = function statisticProps() {
  return {
    prefixCls: String,
    decimalSeparator: String,
    groupSeparator: String,
    format: String,
    value: {
      type: [String, Number, Object]
    },
    valueStyle: {
      type: Object,
      default: undefined
    },
    valueRender: _vueTypes.default.any,
    formatter: _vueTypes.default.any,
    precision: Number,
    prefix: _vueTypes.default.any,
    suffix: _vueTypes.default.any,
    title: _vueTypes.default.any,
    loading: {
      type: Boolean,
      default: undefined
    }
  };
};
exports.statisticProps = statisticProps;
var _default2 = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'AStatistic',
  props: (0, _initDefaultProps.default)(statisticProps(), {
    decimalSeparator: '.',
    groupSeparator: ',',
    loading: false
  }),
  slots: ['title', 'prefix', 'suffix', 'formatter'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var _useConfigInject = (0, _useConfigInject2.default)('statistic', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction;
    return function () {
      var _props$title, _slots$title, _props$prefix, _slots$prefix, _props$suffix, _slots$suffix, _props$formatter;
      var _props$value = props.value,
        value = _props$value === void 0 ? 0 : _props$value,
        valueStyle = props.valueStyle,
        valueRender = props.valueRender;
      var pre = prefixCls.value;
      var title = (_props$title = props.title) !== null && _props$title !== void 0 ? _props$title : (_slots$title = slots.title) === null || _slots$title === void 0 ? void 0 : _slots$title.call(slots);
      var prefix = (_props$prefix = props.prefix) !== null && _props$prefix !== void 0 ? _props$prefix : (_slots$prefix = slots.prefix) === null || _slots$prefix === void 0 ? void 0 : _slots$prefix.call(slots);
      var suffix = (_props$suffix = props.suffix) !== null && _props$suffix !== void 0 ? _props$suffix : (_slots$suffix = slots.suffix) === null || _slots$suffix === void 0 ? void 0 : _slots$suffix.call(slots);
      var formatter = (_props$formatter = props.formatter) !== null && _props$formatter !== void 0 ? _props$formatter : slots.formatter;
      // data-for-update just for update component
      // https://github.com/vueComponent/ant-design-vue/pull/3170
      var valueNode = (0, _vue.createVNode)(_Number.default, (0, _objectSpread2.default)({
        "data-for-update": Date.now()
      }, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
        prefixCls: pre,
        value: value,
        formatter: formatter
      })), null);
      if (valueRender) {
        valueNode = valueRender(valueNode);
      }
      return (0, _vue.createVNode)("div", {
        "class": [pre, (0, _defineProperty2.default)({}, "".concat(pre, "-rtl"), direction.value === 'rtl')]
      }, [title && (0, _vue.createVNode)("div", {
        "class": "".concat(pre, "-title")
      }, [title]), (0, _vue.createVNode)(_Skeleton.default, {
        "paragraph": false,
        "loading": props.loading
      }, {
        default: function _default() {
          return [(0, _vue.createVNode)("div", {
            "style": valueStyle,
            "class": "".concat(pre, "-content")
          }, [prefix && (0, _vue.createVNode)("span", {
            "class": "".concat(pre, "-content-prefix")
          }, [prefix]), valueNode, suffix && (0, _vue.createVNode)("span", {
            "class": "".concat(pre, "-content-suffix")
          }, [suffix])])];
        }
      })]);
    };
  }
});
exports.default = _default2;