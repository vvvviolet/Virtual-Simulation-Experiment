"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _initDefaultProps = _interopRequireDefault(require("../_util/props-util/initDefaultProps"));
var _CloseOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CloseOutlined"));
var _CheckOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CheckOutlined"));
var _CheckCircleFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CheckCircleFilled"));
var _CloseCircleFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CloseCircleFilled"));
var _Line = _interopRequireDefault(require("./Line"));
var _Circle = _interopRequireDefault(require("./Circle"));
var _Steps = _interopRequireDefault(require("./Steps"));
var _utils = require("./utils");
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var _devWarning = _interopRequireDefault(require("../vc-util/devWarning"));
var _props = require("./props");
var _default2 = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'AProgress',
  props: (0, _initDefaultProps.default)((0, _props.progressProps)(), {
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
    var _useConfigInject = (0, _useConfigInject2.default)('progress', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction;
    (0, _devWarning.default)(props.successPercent == undefined, 'Progress', '`successPercent` is deprecated. Please use `success.percent` instead.');
    var classString = (0, _vue.computed)(function () {
      var _ref2;
      var type = props.type,
        showInfo = props.showInfo,
        size = props.size;
      var pre = prefixCls.value;
      return _ref2 = {}, (0, _defineProperty2.default)(_ref2, pre, true), (0, _defineProperty2.default)(_ref2, "".concat(pre, "-").concat(type === 'dashboard' && 'circle' || type), true), (0, _defineProperty2.default)(_ref2, "".concat(pre, "-show-info"), showInfo), (0, _defineProperty2.default)(_ref2, "".concat(pre, "-").concat(size), size), (0, _defineProperty2.default)(_ref2, "".concat(pre, "-rtl"), direction.value === 'rtl'), _ref2;
    });
    var percentNumber = (0, _vue.computed)(function () {
      var _props$percent = props.percent,
        percent = _props$percent === void 0 ? 0 : _props$percent;
      var successPercent = (0, _utils.getSuccessPercent)(props);
      return parseInt(successPercent !== undefined ? successPercent.toString() : percent.toString(), 10);
    });
    var progressStatus = (0, _vue.computed)(function () {
      var status = props.status;
      if (_props.progressStatuses.indexOf(status) < 0 && percentNumber.value >= 100) {
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
      var successPercent = (0, _utils.getSuccessPercent)(props);
      if (!showInfo) return null;
      var text;
      var textFormatter = format || (slots === null || slots === void 0 ? void 0 : slots.format) || function (val) {
        return "".concat(val, "%");
      };
      var isLineType = type === 'line';
      if (format || slots !== null && slots !== void 0 && slots.format || progressStatus.value !== 'exception' && progressStatus.value !== 'success') {
        text = textFormatter((0, _utils.validProgress)(percent), (0, _utils.validProgress)(successPercent));
      } else if (progressStatus.value === 'exception') {
        text = isLineType ? (0, _vue.createVNode)(_CloseCircleFilled.default, null, null) : (0, _vue.createVNode)(_CloseOutlined.default, null, null);
      } else if (progressStatus.value === 'success') {
        text = isLineType ? (0, _vue.createVNode)(_CheckCircleFilled.default, null, null) : (0, _vue.createVNode)(_CheckOutlined.default, null, null);
      }
      return (0, _vue.createVNode)("span", {
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
        progress = steps ? (0, _vue.createVNode)(_Steps.default, (0, _objectSpread3.default)((0, _objectSpread3.default)({}, props), {}, {
          "strokeColor": typeof strokeColor === 'string' ? strokeColor : undefined,
          "prefixCls": prefixCls.value,
          "steps": steps
        }), {
          default: function _default() {
            return [progressInfo];
          }
        }) : (0, _vue.createVNode)(_Line.default, (0, _objectSpread3.default)((0, _objectSpread3.default)({}, props), {}, {
          "prefixCls": prefixCls.value
        }), {
          default: function _default() {
            return [progressInfo];
          }
        });
      } else if (type === 'circle' || type === 'dashboard') {
        progress = (0, _vue.createVNode)(_Circle.default, (0, _objectSpread3.default)((0, _objectSpread3.default)({}, props), {}, {
          "prefixCls": prefixCls.value
        }), {
          default: function _default() {
            return [progressInfo];
          }
        });
      }
      var classNames = (0, _objectSpread3.default)((0, _objectSpread3.default)({}, classString.value), {}, (0, _defineProperty2.default)({}, "".concat(prefixCls.value, "-status-").concat(progressStatus.value), true));
      return (0, _vue.createVNode)("div", {
        "class": classNames,
        "title": title
      }, [progress]);
    };
  }
});
exports.default = _default2;