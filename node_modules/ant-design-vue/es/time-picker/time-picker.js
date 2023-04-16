import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
import { defineComponent, ref } from 'vue';
import generatePicker from '../date-picker/generatePicker';
import { commonProps, datePickerProps, rangePickerProps } from '../date-picker/generatePicker/props';
import devWarning from '../vc-util/devWarning';
import { useInjectFormItemContext } from '../form/FormItemContext';
import omit from '../_util/omit';
export var timePickerProps = function timePickerProps() {
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
function createTimePicker(generateConfig) {
  var DatePicker = generatePicker(generateConfig, _objectSpread(_objectSpread({}, timePickerProps()), {}, {
    order: {
      type: Boolean,
      default: true
    }
  }));
  var InternalTimePicker = DatePicker.TimePicker,
    InternalRangePicker = DatePicker.RangePicker;
  var TimePicker = defineComponent({
    name: 'ATimePicker',
    inheritAttrs: false,
    props: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, commonProps()), datePickerProps()), timePickerProps()), {}, {
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
      var formItemContext = useInjectFormItemContext();
      devWarning(!(slots.addon || props.addon), 'TimePicker', '`addon` is deprecated. Please use `v-slot:renderExtraFooter` instead.');
      var pickerRef = ref();
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
        return _createVNode(InternalTimePicker, _objectSpread(_objectSpread(_objectSpread({}, attrs), omit(props, ['onUpdate:value', 'onUpdate:open'])), {}, {
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
  var TimeRangePicker = defineComponent({
    name: 'ATimeRangePicker',
    inheritAttrs: false,
    props: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, commonProps()), rangePickerProps()), timePickerProps()), {}, {
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
      var pickerRef = ref();
      var formItemContext = useInjectFormItemContext();
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
        return _createVNode(InternalRangePicker, _objectSpread(_objectSpread(_objectSpread({}, attrs), omit(props, ['onUpdate:open', 'onUpdate:value'])), {}, {
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
export default createTimePicker;