"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commonProps = commonProps;
exports.datePickerProps = datePickerProps;
exports.rangePickerProps = rangePickerProps;
function commonProps() {
  return {
    id: String,
    dropdownClassName: String,
    dropdownAlign: {
      type: Object
    },
    popupStyle: {
      type: Object
    },
    transitionName: String,
    placeholder: String,
    allowClear: {
      type: Boolean,
      default: undefined
    },
    autofocus: {
      type: Boolean,
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: undefined
    },
    tabindex: Number,
    open: {
      type: Boolean,
      default: undefined
    },
    defaultOpen: {
      type: Boolean,
      default: undefined
    },
    /** Make input readOnly to avoid popup keyboard in mobile */
    inputReadOnly: {
      type: Boolean,
      default: undefined
    },
    format: {
      type: [String, Function, Array]
    },
    // Value
    // format:  string | CustomFormat<DateType> | (string | CustomFormat<DateType>)[];
    // Render
    // suffixIcon?: VueNode;
    // clearIcon?: VueNode;
    // prevIcon?: VueNode;
    // nextIcon?: VueNode;
    // superPrevIcon?: VueNode;
    // superNextIcon?: VueNode;
    getPopupContainer: {
      type: Function
    },
    panelRender: {
      type: Function
    },
    // // Events
    onChange: {
      type: Function
    },
    'onUpdate:value': {
      type: Function
    },
    onOk: {
      type: Function
    },
    onOpenChange: {
      type: Function
    },
    'onUpdate:open': {
      type: Function
    },
    onFocus: {
      type: Function
    },
    onBlur: {
      type: Function
    },
    onMousedown: {
      type: Function
    },
    onMouseup: {
      type: Function
    },
    onMouseenter: {
      type: Function
    },
    onMouseleave: {
      type: Function
    },
    onClick: {
      type: Function
    },
    onContextmenu: {
      type: Function
    },
    onKeydown: {
      type: Function
    },
    // WAI-ARIA
    role: String,
    name: String,
    autocomplete: String,
    direction: {
      type: String
    },
    showToday: {
      type: Boolean,
      default: undefined
    },
    showTime: {
      type: [Boolean, Object],
      default: undefined
    },
    locale: {
      type: Object
    },
    size: {
      type: String
    },
    bordered: {
      type: Boolean,
      default: undefined
    },
    dateRender: {
      type: Function
    },
    disabledDate: {
      type: Function
    },
    mode: {
      type: String
    },
    picker: {
      type: String
    },
    valueFormat: String,
    /** @deprecated Please use `disabledTime` instead. */
    disabledHours: Function,
    /** @deprecated Please use `disabledTime` instead. */
    disabledMinutes: Function,
    /** @deprecated Please use `disabledTime` instead. */
    disabledSeconds: Function
  };
}
function datePickerProps() {
  return {
    defaultPickerValue: {
      type: [String, Object]
    },
    defaultValue: {
      type: [String, Object]
    },
    value: {
      type: [String, Object]
    },
    disabledTime: {
      type: Function
    },
    renderExtraFooter: {
      type: Function
    },
    showNow: {
      type: Boolean,
      default: undefined
    },
    monthCellRender: {
      type: Function
    },
    // deprecated  Please use `monthCellRender"` instead.',
    monthCellContentRender: {
      type: Function
    }
  };
}
function rangePickerProps() {
  return {
    allowEmpty: {
      type: Array
    },
    dateRender: {
      type: Function
    },
    defaultPickerValue: {
      type: Array
    },
    defaultValue: {
      type: Array
    },
    value: {
      type: Array
    },
    disabledTime: {
      type: Function
    },
    disabled: {
      type: [Boolean, Array]
    },
    renderExtraFooter: {
      type: Function
    },
    separator: {
      type: String
    },
    ranges: {
      type: Object
    },
    placeholder: Array,
    mode: {
      type: Array
    },
    onChange: {
      type: Function
    },
    'onUpdate:value': {
      type: Function
    },
    onCalendarChange: {
      type: Function
    },
    onPanelChange: {
      type: Function
    },
    onOk: {
      type: Function
    }
  };
}