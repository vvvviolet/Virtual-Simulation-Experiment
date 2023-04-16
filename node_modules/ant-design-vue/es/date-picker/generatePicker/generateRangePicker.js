import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
var _excluded = ["prefixCls", "bordered", "placeholder", "suffixIcon", "picker", "transitionName", "allowClear", "dateRender", "renderExtraFooter", "separator", "clearIcon", "id"];
import { createVNode as _createVNode } from "vue";
import CalendarOutlined from "@ant-design/icons-vue/es/icons/CalendarOutlined";
import ClockCircleOutlined from "@ant-design/icons-vue/es/icons/ClockCircleOutlined";
import CloseCircleFilled from "@ant-design/icons-vue/es/icons/CloseCircleFilled";
import SwapRightOutlined from "@ant-design/icons-vue/es/icons/SwapRightOutlined";
import { RangePicker as VCRangePicker } from '../../vc-picker';
import enUS from '../locale/en_US';
import { useLocaleReceiver } from '../../locale-provider/LocaleReceiver';
import { getRangePlaceholder } from '../util';
import { getTimeProps, Components } from '.';
import { computed, defineComponent, ref } from 'vue';
import useConfigInject from '../../_util/hooks/useConfigInject';
import classNames from '../../_util/classNames';
import { commonProps, rangePickerProps } from './props';
import devWarning from '../../vc-util/devWarning';
import { useInjectFormItemContext } from '../../form/FormItemContext';
import omit from '../../_util/omit';
export default function generateRangePicker(generateConfig, extraProps) {
  var RangePicker = defineComponent({
    compatConfig: {
      MODE: 3
    },
    name: 'ARangePicker',
    inheritAttrs: false,
    props: _objectSpread(_objectSpread(_objectSpread({}, commonProps()), rangePickerProps()), extraProps),
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
      var formItemContext = useInjectFormItemContext();
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
      var _useLocaleReceiver = useLocaleReceiver('DatePicker', enUS),
        _useLocaleReceiver2 = _slicedToArray(_useLocaleReceiver, 1),
        contextLocale = _useLocaleReceiver2[0];
      var value = computed(function () {
        if (props.value) {
          return props.valueFormat ? generateConfig.toDate(props.value, props.valueFormat) : props.value;
        }
        return props.value;
      });
      var defaultValue = computed(function () {
        if (props.defaultValue) {
          return props.valueFormat ? generateConfig.toDate(props.defaultValue, props.valueFormat) : props.defaultValue;
        }
        return props.defaultValue;
      });
      var defaultPickerValue = computed(function () {
        if (props.defaultPickerValue) {
          return props.valueFormat ? generateConfig.toDate(props.defaultPickerValue, props.valueFormat) : props.defaultPickerValue;
        }
        return props.defaultPickerValue;
      });
      return function () {
        var _slots$suffixIcon, _slots$separator, _slots$clearIcon, _classNames, _slots$prevIcon, _slots$nextIcon, _slots$superPrevIcon, _slots$superNextIcon;
        var locale = _objectSpread(_objectSpread({}, contextLocale.value), props.locale);
        var p = _objectSpread(_objectSpread({}, props), attrs);
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
          restProps = _objectWithoutProperties(p, _excluded);
        delete restProps['onUpdate:value'];
        delete restProps['onUpdate:open'];
        var format = p.format,
          showTime = p.showTime;
        var additionalOverrideProps = {};
        additionalOverrideProps = _objectSpread(_objectSpread(_objectSpread({}, additionalOverrideProps), showTime ? getTimeProps(_objectSpread({
          format: format,
          picker: picker
        }, showTime)) : {}), picker === 'time' ? getTimeProps(_objectSpread(_objectSpread({
          format: format
        }, omit(restProps, ['disabledTime'])), {}, {
          picker: picker
        })) : {});
        var pre = prefixCls.value;
        return _createVNode(VCRangePicker, _objectSpread(_objectSpread(_objectSpread({
          "dateRender": dateRender,
          "renderExtraFooter": renderExtraFooter,
          "separator": separator || _createVNode("span", {
            "aria-label": "to",
            "class": "".concat(pre, "-separator")
          }, [_createVNode(SwapRightOutlined, null, null)]),
          "ref": pickerRef,
          "placeholder": getRangePlaceholder(picker, locale, placeholder),
          "suffixIcon": suffixIcon || (picker === 'time' ? _createVNode(ClockCircleOutlined, null, null) : _createVNode(CalendarOutlined, null, null)),
          "clearIcon": clearIcon || _createVNode(CloseCircleFilled, null, null),
          "allowClear": allowClear,
          "transitionName": transitionName || "".concat(rootPrefixCls.value, "-slide-up")
        }, restProps), additionalOverrideProps), {}, {
          "id": id,
          "value": value.value,
          "defaultValue": defaultValue.value,
          "defaultPickerValue": defaultPickerValue.value,
          "picker": picker,
          "class": classNames((_classNames = {}, _defineProperty(_classNames, "".concat(pre, "-").concat(size.value), size.value), _defineProperty(_classNames, "".concat(pre, "-borderless"), !bordered), _classNames), attrs.class),
          "locale": locale.lang,
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
          "onOk": onOk,
          "onCalendarChange": onCalendarChange
        }), null);
      };
    }
  });
  return RangePicker;
}