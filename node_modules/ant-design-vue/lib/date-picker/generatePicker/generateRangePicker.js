"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateRangePicker;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _CalendarOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CalendarOutlined"));
var _ClockCircleOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/ClockCircleOutlined"));
var _CloseCircleFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CloseCircleFilled"));
var _SwapRightOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/SwapRightOutlined"));
var _vcPicker = require("../../vc-picker");
var _en_US = _interopRequireDefault(require("../locale/en_US"));
var _LocaleReceiver = require("../../locale-provider/LocaleReceiver");
var _util = require("../util");
var _ = require(".");
var _useConfigInject2 = _interopRequireDefault(require("../../_util/hooks/useConfigInject"));
var _classNames2 = _interopRequireDefault(require("../../_util/classNames"));
var _props2 = require("./props");
var _devWarning = _interopRequireDefault(require("../../vc-util/devWarning"));
var _FormItemContext = require("../../form/FormItemContext");
var _omit = _interopRequireDefault(require("../../_util/omit"));
var _excluded = ["prefixCls", "bordered", "placeholder", "suffixIcon", "picker", "transitionName", "allowClear", "dateRender", "renderExtraFooter", "separator", "clearIcon", "id"];
function generateRangePicker(generateConfig, extraProps) {
  var RangePicker = (0, _vue.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: 'ARangePicker',
    inheritAttrs: false,
    props: (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _props2.commonProps)()), (0, _props2.rangePickerProps)()), extraProps),
    slots: ['suffixIcon',
    // 'clearIcon',
    'prevIcon', 'nextIcon', 'superPrevIcon', 'superNextIcon',
    // 'panelRender',
    'dateRender', 'renderExtraFooter'
    // 'separator',
    ],
    setup: function setup(_props, _ref) {
      var expose = _ref.expose,
        slots = _ref.slots,
        attrs = _ref.attrs,
        emit = _ref.emit;
      var props = _props;
      var formItemContext = (0, _FormItemContext.useInjectFormItemContext)();
      (0, _devWarning.default)(!attrs.getCalendarContainer, 'DatePicker', '`getCalendarContainer` is deprecated. Please use `getPopupContainer"` instead.');
      var _useConfigInject = (0, _useConfigInject2.default)('picker', props),
        prefixCls = _useConfigInject.prefixCls,
        direction = _useConfigInject.direction,
        getPopupContainer = _useConfigInject.getPopupContainer,
        size = _useConfigInject.size,
        rootPrefixCls = _useConfigInject.rootPrefixCls;
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
      var maybeToStrings = function maybeToStrings(dates) {
        return props.valueFormat ? generateConfig.toString(dates, props.valueFormat) : dates;
      };
      var onChange = function onChange(dates, dateStrings) {
        var values = maybeToStrings(dates);
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
      var onPanelChange = function onPanelChange(dates, modes) {
        var values = maybeToStrings(dates);
        emit('panelChange', values, modes);
      };
      var onOk = function onOk(dates) {
        var value = maybeToStrings(dates);
        emit('ok', value);
      };
      var onCalendarChange = function onCalendarChange(dates, dateStrings, info) {
        var values = maybeToStrings(dates);
        emit('calendarChange', values, dateStrings, info);
      };
      var _useLocaleReceiver = (0, _LocaleReceiver.useLocaleReceiver)('DatePicker', _en_US.default),
        _useLocaleReceiver2 = (0, _slicedToArray2.default)(_useLocaleReceiver, 1),
        contextLocale = _useLocaleReceiver2[0];
      var value = (0, _vue.computed)(function () {
        if (props.value) {
          return props.valueFormat ? generateConfig.toDate(props.value, props.valueFormat) : props.value;
        }
        return props.value;
      });
      var defaultValue = (0, _vue.computed)(function () {
        if (props.defaultValue) {
          return props.valueFormat ? generateConfig.toDate(props.defaultValue, props.valueFormat) : props.defaultValue;
        }
        return props.defaultValue;
      });
      var defaultPickerValue = (0, _vue.computed)(function () {
        if (props.defaultPickerValue) {
          return props.valueFormat ? generateConfig.toDate(props.defaultPickerValue, props.valueFormat) : props.defaultPickerValue;
        }
        return props.defaultPickerValue;
      });
      return function () {
        var _slots$suffixIcon, _slots$separator, _slots$clearIcon, _classNames, _slots$prevIcon, _slots$nextIcon, _slots$superPrevIcon, _slots$superNextIcon;
        var locale = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, contextLocale.value), props.locale);
        var p = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), attrs);
        var customizePrefixCls = p.prefixCls,
          _p$bordered = p.bordered,
          bordered = _p$bordered === void 0 ? true : _p$bordered,
          placeholder = p.placeholder,
          _p$suffixIcon = p.suffixIcon,
          suffixIcon = _p$suffixIcon === void 0 ? (_slots$suffixIcon = slots.suffixIcon) === null || _slots$suffixIcon === void 0 ? void 0 : _slots$suffixIcon.call(slots) : _p$suffixIcon,
          _p$picker = p.picker,
          picker = _p$picker === void 0 ? 'date' : _p$picker,
          transitionName = p.transitionName,
          _p$allowClear = p.allowClear,
          allowClear = _p$allowClear === void 0 ? true : _p$allowClear,
          _p$dateRender = p.dateRender,
          dateRender = _p$dateRender === void 0 ? slots.dateRender : _p$dateRender,
          _p$renderExtraFooter = p.renderExtraFooter,
          renderExtraFooter = _p$renderExtraFooter === void 0 ? slots.renderExtraFooter : _p$renderExtraFooter,
          _p$separator = p.separator,
          separator = _p$separator === void 0 ? (_slots$separator = slots.separator) === null || _slots$separator === void 0 ? void 0 : _slots$separator.call(slots) : _p$separator,
          _p$clearIcon = p.clearIcon,
          clearIcon = _p$clearIcon === void 0 ? (_slots$clearIcon = slots.clearIcon) === null || _slots$clearIcon === void 0 ? void 0 : _slots$clearIcon.call(slots) : _p$clearIcon,
          _p$id = p.id,
          id = _p$id === void 0 ? formItemContext.id.value : _p$id,
          restProps = (0, _objectWithoutProperties2.default)(p, _excluded);
        delete restProps['onUpdate:value'];
        delete restProps['onUpdate:open'];
        var format = p.format,
          showTime = p.showTime;
        var additionalOverrideProps = {};
        additionalOverrideProps = (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, additionalOverrideProps), showTime ? (0, _.getTimeProps)((0, _objectSpread2.default)({
          format: format,
          picker: picker
        }, showTime)) : {}), picker === 'time' ? (0, _.getTimeProps)((0, _objectSpread2.default)((0, _objectSpread2.default)({
          format: format
        }, (0, _omit.default)(restProps, ['disabledTime'])), {}, {
          picker: picker
        })) : {});
        var pre = prefixCls.value;
        return (0, _vue.createVNode)(_vcPicker.RangePicker, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
          "dateRender": dateRender,
          "renderExtraFooter": renderExtraFooter,
          "separator": separator || (0, _vue.createVNode)("span", {
            "aria-label": "to",
            "class": "".concat(pre, "-separator")
          }, [(0, _vue.createVNode)(_SwapRightOutlined.default, null, null)]),
          "ref": pickerRef,
          "placeholder": (0, _util.getRangePlaceholder)(picker, locale, placeholder),
          "suffixIcon": suffixIcon || (picker === 'time' ? (0, _vue.createVNode)(_ClockCircleOutlined.default, null, null) : (0, _vue.createVNode)(_CalendarOutlined.default, null, null)),
          "clearIcon": clearIcon || (0, _vue.createVNode)(_CloseCircleFilled.default, null, null),
          "allowClear": allowClear,
          "transitionName": transitionName || "".concat(rootPrefixCls.value, "-slide-up")
        }, restProps), additionalOverrideProps), {}, {
          "id": id,
          "value": value.value,
          "defaultValue": defaultValue.value,
          "defaultPickerValue": defaultPickerValue.value,
          "picker": picker,
          "class": (0, _classNames2.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(pre, "-").concat(size.value), size.value), (0, _defineProperty2.default)(_classNames, "".concat(pre, "-borderless"), !bordered), _classNames), attrs.class),
          "locale": locale.lang,
          "prefixCls": pre,
          "getPopupContainer": attrs.getCalendarContainer || getPopupContainer.value,
          "generateConfig": generateConfig,
          "prevIcon": ((_slots$prevIcon = slots.prevIcon) === null || _slots$prevIcon === void 0 ? void 0 : _slots$prevIcon.call(slots)) || (0, _vue.createVNode)("span", {
            "class": "".concat(pre, "-prev-icon")
          }, null),
          "nextIcon": ((_slots$nextIcon = slots.nextIcon) === null || _slots$nextIcon === void 0 ? void 0 : _slots$nextIcon.call(slots)) || (0, _vue.createVNode)("span", {
            "class": "".concat(pre, "-next-icon")
          }, null),
          "superPrevIcon": ((_slots$superPrevIcon = slots.superPrevIcon) === null || _slots$superPrevIcon === void 0 ? void 0 : _slots$superPrevIcon.call(slots)) || (0, _vue.createVNode)("span", {
            "class": "".concat(pre, "-super-prev-icon")
          }, null),
          "superNextIcon": ((_slots$superNextIcon = slots.superNextIcon) === null || _slots$superNextIcon === void 0 ? void 0 : _slots$superNextIcon.call(slots)) || (0, _vue.createVNode)("span", {
            "class": "".concat(pre, "-super-next-icon")
          }, null),
          "components": _.Components,
          "direction": direction.value,
          "onChange": onChange,
          "onOpenChange": onOpenChange,
          "onFocus": onFocus,
          "onBlur": onBlur,
          "onPanelChange": onPanelChange,
          "onOk": onOk,
          "onCalendarChange": onCalendarChange
        }), null);
      };
    }
  });
  return RangePicker;
}