import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
var _excluded = ["bordered", "placeholder", "suffixIcon", "showToday", "transitionName", "allowClear", "dateRender", "renderExtraFooter", "monthCellRender", "clearIcon", "id"];
import { createVNode as _createVNode } from "vue";
import CalendarOutlined from "@ant-design/icons-vue/es/icons/CalendarOutlined";
import ClockCircleOutlined from "@ant-design/icons-vue/es/icons/ClockCircleOutlined";
import CloseCircleFilled from "@ant-design/icons-vue/es/icons/CloseCircleFilled";
import RCPicker from '../../vc-picker';
import enUS from '../locale/en_US';
import { getPlaceholder } from '../util';
import { useLocaleReceiver } from '../../locale-provider/LocaleReceiver';
import { getTimeProps, Components } from '.';
import { computed, defineComponent, ref } from 'vue';
import useConfigInject from '../../_util/hooks/useConfigInject';
import classNames from '../../_util/classNames';
import { commonProps, datePickerProps } from './props';
import devWarning from '../../vc-util/devWarning';
import { useInjectFormItemContext } from '../../form/FormItemContext';
export default function generateSinglePicker(generateConfig, extraProps) {
  function getPicker(picker, displayName) {
    var comProps = _objectSpread(_objectSpread(_objectSpread({}, commonProps()), datePickerProps()), extraProps);
    return defineComponent({
      compatConfig: {
        MODE: 3
      },
      name: displayName,
      inheritAttrs: false,
      props: comProps,
      slots: ['suffixIcon',
      // 'clearIcon',
      'prevIcon', 'nextIcon', 'superPrevIcon', 'superNextIcon',
      // 'panelRender',
      'dateRender', 'renderExtraFooter', 'monthCellRender'],
      setup: function setup(_props, _ref) {
        var slots = _ref.slots,
          expose = _ref.expose,
          attrs = _ref.attrs,
          emit = _ref.emit;
        // 兼容 vue 3.2.7
        var props = _props;
        var formItemContext = useInjectFormItemContext();
        devWarning(!(props.monthCellContentRender || slots.monthCellContentRender), 'DatePicker', '`monthCellContentRender` is deprecated. Please use `monthCellRender"` instead.');
        devWarning(!attrs.getCalendarContainer, 'DatePicker', '`getCalendarContainer` is deprecated. Please use `getPopupContainer"` instead.');
        var _useConfigInject = useConfigInject('picker', props),
          prefixCls = _useConfigInject.prefixCls,
          direction = _useConfigInject.direction,
          getPopupContainer = _useConfigInject.getPopupContainer,
          size = _useConfigInject.size,
          rootPrefixCls = _useConfigInject.rootPrefixCls;
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
        var maybeToString = function maybeToString(date) {
          return props.valueFormat ? generateConfig.toString(date, props.valueFormat) : date;
        };
        var onChange = function onChange(date, dateString) {
          var value = maybeToString(date);
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
        var onPanelChange = function onPanelChange(date, mode) {
          var value = maybeToString(date);
          emit('panelChange', value, mode);
        };
        var onOk = function onOk(date) {
          var value = maybeToString(date);
          emit('ok', value);
        };
        var _useLocaleReceiver = useLocaleReceiver('DatePicker', enUS),
          _useLocaleReceiver2 = _slicedToArray(_useLocaleReceiver, 1),
          contextLocale = _useLocaleReceiver2[0];
        var value = computed(function () {
          if (props.value) {
            return props.valueFormat ? generateConfig.toDate(props.value, props.valueFormat) : props.value;
          }
          return props.value === '' ? undefined : props.value;
        });
        var defaultValue = computed(function () {
          if (props.defaultValue) {
            return props.valueFormat ? generateConfig.toDate(props.defaultValue, props.valueFormat) : props.defaultValue;
          }
          return props.defaultValue === '' ? undefined : props.defaultValue;
        });
        var defaultPickerValue = computed(function () {
          if (props.defaultPickerValue) {
            return props.valueFormat ? generateConfig.toDate(props.defaultPickerValue, props.valueFormat) : props.defaultPickerValue;
          }
          return props.defaultPickerValue === '' ? undefined : props.defaultPickerValue;
        });
        return function () {
          var _slots$suffixIcon, _slots$clearIcon, _classNames, _slots$prevIcon, _slots$nextIcon, _slots$superPrevIcon, _slots$superNextIcon;
          var locale = _objectSpread(_objectSpread({}, contextLocale.value), props.locale);
          var p = _objectSpread(_objectSpread({}, props), attrs);
          var _p$bordered = p.bordered,
            bordered = _p$bordered === void 0 ? true : _p$bordered,
            placeholder = p.placeholder,
            _p$suffixIcon = p.suffixIcon,
            suffixIcon = _p$suffixIcon === void 0 ? (_slots$suffixIcon = slots.suffixIcon) === null || _slots$suffixIcon === void 0 ? void 0 : _slots$suffixIcon.call(slots) : _p$suffixIcon,
            _p$showToday = p.showToday,
            showToday = _p$showToday === void 0 ? true : _p$showToday,
            transitionName = p.transitionName,
            _p$allowClear = p.allowClear,
            allowClear = _p$allowClear === void 0 ? true : _p$allowClear,
            _p$dateRender = p.dateRender,
            dateRender = _p$dateRender === void 0 ? slots.dateRender : _p$dateRender,
            _p$renderExtraFooter = p.renderExtraFooter,
            renderExtraFooter = _p$renderExtraFooter === void 0 ? slots.renderExtraFooter : _p$renderExtraFooter,
            _p$monthCellRender = p.monthCellRender,
            monthCellRender = _p$monthCellRender === void 0 ? slots.monthCellRender || props.monthCellContentRender || slots.monthCellContentRender : _p$monthCellRender,
            _p$clearIcon = p.clearIcon,
            clearIcon = _p$clearIcon === void 0 ? (_slots$clearIcon = slots.clearIcon) === null || _slots$clearIcon === void 0 ? void 0 : _slots$clearIcon.call(slots) : _p$clearIcon,
            _p$id = p.id,
            id = _p$id === void 0 ? formItemContext.id.value : _p$id,
            restProps = _objectWithoutProperties(p, _excluded);
          var showTime = p.showTime === '' ? true : p.showTime;
          var format = p.format;
          var additionalOverrideProps = {};
          if (picker) {
            additionalOverrideProps.picker = picker;
          }
          var mergedPicker = picker || p.picker || 'date';
          additionalOverrideProps = _objectSpread(_objectSpread(_objectSpread({}, additionalOverrideProps), showTime ? getTimeProps(_objectSpread({
            format: format,
            picker: mergedPicker
          }, _typeof(showTime) === 'object' ? showTime : {})) : {}), mergedPicker === 'time' ? getTimeProps(_objectSpread(_objectSpread({
            format: format
          }, restProps), {}, {
            picker: mergedPicker
          })) : {});
          var pre = prefixCls.value;
          return _createVNode(RCPicker, _objectSpread(_objectSpread(_objectSpread({
            "monthCellRender": monthCellRender,
            "dateRender": dateRender,
            "renderExtraFooter": renderExtraFooter,
            "ref": pickerRef,
            "placeholder": getPlaceholder(mergedPicker, locale, placeholder),
            "suffixIcon": suffixIcon || (mergedPicker === 'time' ? _createVNode(ClockCircleOutlined, null, null) : _createVNode(CalendarOutlined, null, null)),
            "clearIcon": clearIcon || _createVNode(CloseCircleFilled, null, null),
            "allowClear": allowClear,
            "transitionName": transitionName || "".concat(rootPrefixCls.value, "-slide-up")
          }, restProps), additionalOverrideProps), {}, {
            "id": id,
            "picker": mergedPicker,
            "value": value.value,
            "defaultValue": defaultValue.value,
            "defaultPickerValue": defaultPickerValue.value,
            "showToday": showToday,
            "locale": locale.lang,
            "class": classNames((_classNames = {}, _defineProperty(_classNames, "".concat(pre, "-").concat(size.value), size.value), _defineProperty(_classNames, "".concat(pre, "-borderless"), !bordered), _classNames), attrs.class),
            "prefixCls": pre,
            "getPopupContainer": attrs.getCalendarContainer || getPopupContainer.value,
            "generateConfig": generateConfig,
            "prevIcon": ((_slots$prevIcon = slots.prevIcon) === null || _slots$prevIcon === void 0 ? void 0 : _slots$prevIcon.call(slots)) || _createVNode("span", {
              "class": "".concat(pre, "-prev-icon")
            }, null),
            "nextIcon": ((_slots$nextIcon = slots.nextIcon) === null || _slots$nextIcon === void 0 ? void 0 : _slots$nextIcon.call(slots)) || _createVNode("span", {
              "class": "".concat(pre, "-next-icon")
            }, null),
            "superPrevIcon": ((_slots$superPrevIcon = slots.superPrevIcon) === null || _slots$superPrevIcon === void 0 ? void 0 : _slots$superPrevIcon.call(slots)) || _createVNode("span", {
              "class": "".concat(pre, "-super-prev-icon")
            }, null),
            "superNextIcon": ((_slots$superNextIcon = slots.superNextIcon) === null || _slots$superNextIcon === void 0 ? void 0 : _slots$superNextIcon.call(slots)) || _createVNode("span", {
              "class": "".concat(pre, "-super-next-icon")
            }, null),
            "components": Components,
            "direction": direction.value,
            "onChange": onChange,
            "onOpenChange": onOpenChange,
            "onFocus": onFocus,
            "onBlur": onBlur,
            "onPanelChange": onPanelChange,
            "onOk": onOk
          }), null);
        };
      }
    });
  }
  var DatePicker = getPicker(undefined, 'ADatePicker');
  var WeekPicker = getPicker('week', 'AWeekPicker');
  var MonthPicker = getPicker('month', 'AMonthPicker');
  var YearPicker = getPicker('year', 'AYearPicker');
  var TimePicker = getPicker('time', 'TimePicker'); // 给独立组件 TimePicker 使用，此处名称不用更改
  var QuarterPicker = getPicker('quarter', 'AQuarterPicker');
  return {
    DatePicker: DatePicker,
    WeekPicker: WeekPicker,
    MonthPicker: MonthPicker,
    YearPicker: YearPicker,
    TimePicker: TimePicker,
    QuarterPicker: QuarterPicker
  };
}