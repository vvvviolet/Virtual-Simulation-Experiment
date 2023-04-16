import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import PropTypes from '../_util/vue-types';
import initDefaultProps from '../_util/props-util/initDefaultProps';
import StatisticNumber from './Number';
import Skeleton from '../skeleton/Skeleton';
import useConfigInject from '../_util/hooks/useConfigInject';
export var statisticProps = function statisticProps() {
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
    valueRender: PropTypes.any,
    formatter: PropTypes.any,
    precision: Number,
    prefix: PropTypes.any,
    suffix: PropTypes.any,
    title: PropTypes.any,
    loading: {
      type: Boolean,
      default: undefined
    }
  };
};
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'AStatistic',
  props: initDefaultProps(statisticProps(), {
    decimalSeparator: '.',
    groupSeparator: ',',
    loading: false
  }),
  slots: ['title', 'prefix', 'suffix', 'formatter'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var _useConfigInject = useConfigInject('statistic', props),
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
      var valueNode = _createVNode(StatisticNumber, _objectSpread({
        "data-for-update": Date.now()
      }, _objectSpread(_objectSpread({}, props), {}, {
        prefixCls: pre,
        value: value,
        formatter: formatter
      })), null);
      if (valueRender) {
        valueNode = valueRender(valueNode);
      }
      return _createVNode("div", {
        "class": [pre, _defineProperty({}, "".concat(pre, "-rtl"), direction.value === 'rtl')]
      }, [title && _createVNode("div", {
        "class": "".concat(pre, "-title")
      }, [title]), _createVNode(Skeleton, {
        "paragraph": false,
        "loading": props.loading
      }, {
        default: function _default() {
          return [_createVNode("div", {
            "style": valueStyle,
            "class": "".concat(pre, "-content")
          }, [prefix && _createVNode("span", {
            "class": "".concat(pre, "-content-prefix")
          }, [prefix]), valueNode, suffix && _createVNode("span", {
            "class": "".concat(pre, "-content-suffix")
          }, [suffix])])];
        }
      })]);
    };
  }
});