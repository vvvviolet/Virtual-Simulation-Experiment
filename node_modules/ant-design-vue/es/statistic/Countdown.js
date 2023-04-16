import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
import { defineComponent, onBeforeUnmount, onMounted, onUpdated, ref } from 'vue';
import omit from '../_util/omit';
import initDefaultProps from '../_util/props-util/initDefaultProps';
import Statistic, { statisticProps } from './Statistic';
import { formatCountdown as formatCD } from './utils';
var REFRESH_INTERVAL = 1000 / 30;
function getTime(value) {
  return new Date(value).getTime();
}
export var countdownProps = function countdownProps() {
  return _objectSpread(_objectSpread({}, statisticProps()), {}, {
    value: [Number, String, Object],
    format: String,
    onFinish: Function,
    onChange: Function
  });
};
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'AStatisticCountdown',
  props: initDefaultProps(countdownProps(), {
    format: 'HH:mm:ss'
  }),
  // emits: ['finish', 'change'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
      slots = _ref.slots;
    var countdownId = ref();
    var statistic = ref();
    var syncTimer = function syncTimer() {
      var value = props.value;
      var timestamp = getTime(value);
      if (timestamp >= Date.now()) {
        startTimer();
      } else {
        stopTimer();
      }
    };
    var startTimer = function startTimer() {
      if (countdownId.value) return;
      var timestamp = getTime(props.value);
      countdownId.value = setInterval(function () {
        statistic.value.$forceUpdate();
        if (timestamp > Date.now()) {
          emit('change', timestamp - Date.now());
        }
        syncTimer();
      }, REFRESH_INTERVAL);
    };
    var stopTimer = function stopTimer() {
      var value = props.value;
      if (countdownId.value) {
        clearInterval(countdownId.value);
        countdownId.value = undefined;
        var timestamp = getTime(value);
        if (timestamp < Date.now()) {
          emit('finish');
        }
      }
    };
    var formatCountdown = function formatCountdown(_ref2) {
      var value = _ref2.value,
        config = _ref2.config;
      var format = props.format;
      return formatCD(value, _objectSpread(_objectSpread({}, config), {}, {
        format: format
      }));
    };
    var valueRenderHtml = function valueRenderHtml(node) {
      return node;
    };
    onMounted(function () {
      syncTimer();
    });
    onUpdated(function () {
      syncTimer();
    });
    onBeforeUnmount(function () {
      stopTimer();
    });
    return function () {
      var value = props.value;
      return _createVNode(Statistic, _objectSpread({
        "ref": statistic
      }, _objectSpread(_objectSpread({}, omit(props, ['onFinish', 'onChange'])), {}, {
        value: value,
        valueRender: valueRenderHtml,
        formatter: formatCountdown
      })), slots);
    };
  }
});