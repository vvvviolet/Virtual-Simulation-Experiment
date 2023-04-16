"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timePickerProps = exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _generatePicker = _interopRequireDefault(require("../date-picker/generatePicker"));
var _props = require("../date-picker/generatePicker/props");
var _devWarning = _interopRequireDefault(require("../vc-util/devWarning"));
var _FormItemContext = require("../form/FormItemContext");
var _omit = _interopRequireDefault(require("../_util/omit"));
var timePickerProps = function timePickerProps() {
  return {
    format: String,
    showNow: {
      type: Boolean,
      default: undefined
    },
    showHour: {
      type: Boolean,
      default: undefined
    },
    showMinute: {
      type: Boolean,
      default: undefined
    },
    showSecond: {
      type: Boolean,
      default: undefined
    },
    use12Hours: {
      type: Boolean,
      default: undefined
    },
    hourStep: Number,
    minuteStep: Number,
    secondStep: Number,
    hideDisabledOptions: {
      type: Boolean,
      default: undefined
    },
    popupClassName: String
  };
};
exports.timePickerProps = timePickerProps;
function createTimePicker(generateConfig) {
  var DatePicker = (0, _generatePicker.default)(generateConfig, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, timePickerProps()), {}, {
    order: {
      type: Boolean,
      default: true
    }
  }));
  var InternalTimePicker = DatePicker.TimePicker,
    InternalRangePicker = DatePicker.RangePicker;
  var TimePicker = (0, _vue.defineComponent)({
    name: 'ATimePicker',
    inheritAttrs: false,
    props: (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _props.commonProps)()), (0, _props.datePickerProps)()), timePickerProps()), {}, {
      addon: {
        type: Function
      }
    }),
    slot: ['addon', 'renderExtraFooter', 'suffixIcon', 'clearIcon'],
    setup: function setup(props, _ref) {
      var slots = _ref.slots,
        expose = _ref.expose,
        emit = _ref.emit,
        attrs = _ref.attrs;
      var formItemContext = (0, _FormItemContext.useInjectFormItemContext)();
      (0, _devWarning.default)(!(slots.addon || props.addon), 'TimePicker', '`addon` is deprecated. Please use `v-slot:renderExtraFooter` instead.');
      var pickerRef = (0, _vue.ref)();
      expose({
        focus: function focus() {
          var _pickerRef$value;
          (_pickerRef$value = pickerRef.value) === null || _pickerRef$value === void 0 ? void 0 : _pickerRef$value.focus();
        },
        blur: function blur() {
          var _pickerRef$value2;
          (_pickerRef$value2 = pickerRef.value) === null || _pickerRef$value2 === void 0 ? void 0 : _pickerRef$value2.blur();
        }
      });
      var onChange = function onChange(value, dateString) {
        emit('update:value', value);
        emit('change', value, dateString);
        formItemContext.onFieldChange();
      };
      var onOpenChange = function onOpenChange(open) {
        emit('update:open', open);
        emit('openChange', open);
      };
      var onFocus = function onFocus(e) {
        emit('focus', e);
      };
      var onBlur = function onBlur(e) {
        emit('blur', e);
        formItemContext.onFieldBlur();
      };
      var onOk = function onOk(value) {
        emit('ok', value);
      };
      return function () {
        var _props$id = props.id,
          id = _props$id === void 0 ? formItemContext.id.value : _props$id;
        //restProps.addon
        return (0, _vue.createVNode)(InternalTimePicker, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, attrs), (0, _omit.default)(props, ['onUpdate:value', 'onUpdate:open'])), {}, {
          "id": id,
          "dropdownClassName": props.popupClassName,
          "mode": undefined,
          "ref": pickerRef,
          "renderExtraFooter": props.addon || slots.addon || props.renderExtraFooter || slots.renderExtraFooter,
          "onChange": onChange,
          "onOpenChange": onOpenChange,
          "onFocus": onFocus,
          "onBlur": onBlur,
          "onOk": onOk
        }), slots);
      };
    }
  });
  var TimeRangePicker = (0, _vue.defineComponent)({
    name: 'ATimeRangePicker',
    inheritAttrs: false,
    props: (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _props.commonProps)()), (0, _props.rangePickerProps)()), timePickerProps()), {}, {
      order: {
        type: Boolean,
        default: true
      }
    }),
    slot: ['renderExtraFooter', 'suffixIcon', 'clearIcon'],
    setup: function setup(props, _ref2) {
      var slots = _ref2.slots,
        expose = _ref2.expose,
        emit = _ref2.emit,
        attrs = _ref2.attrs;
      var pickerRef = (0, _vue.ref)();
      var formItemContext = (0, _FormItemContext.useInjectFormItemContext)();
      expose({
        focus: function focus() {
          var _pickerRef$value3;
          (_pickerRef$value3 = pickerRef.value) === null || _pickerRef$value3 === void 0 ? void 0 : _pickerRef$value3.focus();
        },
        blur: function blur() {
          var _pickerRef$value4;
          (_pickerRef$value4 = pickerRef.value) === null || _pickerRef$value4 === void 0 ? void 0 : _pickerRef$value4.blur();
        }
      });
      var onChange = function onChange(values, dateStrings) {
        emit('update:value', values);
        emit('change', values, dateStrings);
        formItemContext.onFieldChange();
      };
      var onOpenChange = function onOpenChange(open) {
        emit('update:open', open);
        emit('openChange', open);
      };
      var onFocus = function onFocus(e) {
        emit('focus', e);
      };
      var onBlur = function onBlur(e) {
        emit('blur', e);
        formItemContext.onFieldBlur();
      };
      var onPanelChange = function onPanelChange(values, modes) {
        emit('panelChange', values, modes);
      };
      var onOk = function onOk(values) {
        emit('ok', values);
      };
      var onCalendarChange = function onCalendarChange(values, dateStrings, info) {
        emit('calendarChange', values, dateStrings, info);
      };
      return function () {
        var _props$id2 = props.id,
          id = _props$id2 === void 0 ? formItemContext.id.value : _props$id2;
        return (0, _vue.createVNode)(InternalRangePicker, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, attrs), (0, _omit.default)(props, ['onUpdate:open', 'onUpdate:value'])), {}, {
          "id": id,
          "dropdownClassName": props.popupClassName,
          "picker": "time",
          "mode": undefined,
          "ref": pickerRef,
          "onChange": onChange,
          "onOpenChange": onOpenChange,
          "onFocus": onFocus,
          "onBlur": onBlur,
          "onPanelChange": onPanelChange,
          "onOk": onOk,
          "onCalendarChange": onCalendarChange
        }), slots);
      };
    }
  });
  return {
    TimePicker: TimePicker,
    TimeRangePicker: TimeRangePicker
  };
}
var _default = createTimePicker;
exports.default = _default;