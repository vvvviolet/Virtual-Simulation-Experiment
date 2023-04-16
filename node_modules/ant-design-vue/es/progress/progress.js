import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import { computed, defineComponent } from 'vue';
import initDefaultProps from '../_util/props-util/initDefaultProps';
import CloseOutlined from "@ant-design/icons-vue/es/icons/CloseOutlined";
import CheckOutlined from "@ant-design/icons-vue/es/icons/CheckOutlined";
import CheckCircleFilled from "@ant-design/icons-vue/es/icons/CheckCircleFilled";
import CloseCircleFilled from "@ant-design/icons-vue/es/icons/CloseCircleFilled";
import Line from './Line';
import Circle from './Circle';
import Steps from './Steps';
import { getSuccessPercent, validProgress } from './utils';
import useConfigInject from '../_util/hooks/useConfigInject';
import devWarning from '../vc-util/devWarning';
import { progressProps, progressStatuses } from './props';
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'AProgress',
  props: initDefaultProps(progressProps(), {
    type: 'line',
    percent: 0,
    showInfo: true,
    // null for different theme definition
    trailColor: null,
    size: 'default',
    strokeLinecap: 'round'
  }),
  slots: ['format'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var _useConfigInject = useConfigInject('progress', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction;
    devWarning(props.successPercent == undefined, 'Progress', '`successPercent` is deprecated. Please use `success.percent` instead.');
    var classString = computed(function () {
      var _ref2;
      var type = props.type,
        showInfo = props.showInfo,
        size = props.size;
      var pre = prefixCls.value;
      return _ref2 = {}, _defineProperty(_ref2, pre, true), _defineProperty(_ref2, "".concat(pre, "-").concat(type === 'dashboard' && 'circle' || type), true), _defineProperty(_ref2, "".concat(pre, "-show-info"), showInfo), _defineProperty(_ref2, "".concat(pre, "-").concat(size), size), _defineProperty(_ref2, "".concat(pre, "-rtl"), direction.value === 'rtl'), _ref2;
    });
    var percentNumber = computed(function () {
      var _props$percent = props.percent,
        percent = _props$percent === void 0 ? 0 : _props$percent;
      var successPercent = getSuccessPercent(props);
      return parseInt(successPercent !== undefined ? successPercent.toString() : percent.toString(), 10);
    });
    var progressStatus = computed(function () {
      var status = props.status;
      if (progressStatuses.indexOf(status) < 0 && percentNumber.value >= 100) {
        return 'success';
      }
      return status || 'normal';
    });
    var renderProcessInfo = function renderProcessInfo() {
      var showInfo = props.showInfo,
        format = props.format,
        type = props.type,
        percent = props.percent,
        title = props.title;
      var successPercent = getSuccessPercent(props);
      if (!showInfo) return null;
      var text;
      var textFormatter = format || (slots === null || slots === void 0 ? void 0 : slots.format) || function (val) {
        return "".concat(val, "%");
      };
      var isLineType = type === 'line';
      if (format || slots !== null && slots !== void 0 && slots.format || progressStatus.value !== 'exception' && progressStatus.value !== 'success') {
        text = textFormatter(validProgress(percent), validProgress(successPercent));
      } else if (progressStatus.value === 'exception') {
        text = isLineType ? _createVNode(CloseCircleFilled, null, null) : _createVNode(CloseOutlined, null, null);
      } else if (progressStatus.value === 'success') {
        text = isLineType ? _createVNode(CheckCircleFilled, null, null) : _createVNode(CheckOutlined, null, null);
      }
      return _createVNode("span", {
        "class": "".concat(prefixCls.value, "-text"),
        "title": title === undefined && typeof text === 'string' ? text : undefined
      }, [text]);
    };
    return function () {
      var type = props.type,
        steps = props.steps,
        strokeColor = props.strokeColor,
        title = props.title;
      var progressInfo = renderProcessInfo();
      var progress;
      // Render progress shape
      if (type === 'line') {
        progress = steps ? _createVNode(Steps, _objectSpread(_objectSpread({}, props), {}, {
          "strokeColor": typeof strokeColor === 'string' ? strokeColor : undefined,
          "prefixCls": prefixCls.value,
          "steps": steps
        }), {
          default: function _default() {
            return [progressInfo];
          }
        }) : _createVNode(Line, _objectSpread(_objectSpread({}, props), {}, {
          "prefixCls": prefixCls.value
        }), {
          default: function _default() {
            return [progressInfo];
          }
        });
      } else if (type === 'circle' || type === 'dashboard') {
        progress = _createVNode(Circle, _objectSpread(_objectSpread({}, props), {}, {
          "prefixCls": prefixCls.value
        }), {
          default: function _default() {
            return [progressInfo];
          }
        });
      }
      var classNames = _objectSpread(_objectSpread({}, classString.value), {}, _defineProperty({}, "".concat(prefixCls.value, "-status-").concat(progressStatus.value), true));
      return _createVNode("div", {
        "class": classNames,
        "title": title
      }, [progress]);
    };
  }
});