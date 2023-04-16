import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
/**
 * Removed:
 *  - getCalendarContainer: use `getPopupContainer` instead
 *  - onOk
 *
 * New Feature:
 *  - picker
 *  - allowEmpty
 *  - selectable
 *
 * Tips: Should add faq about `datetime` mode with `defaultValue`
 */
import PickerPanel from './PickerPanel';
import PickerTrigger from './PickerTrigger';
import { formatValue, isEqual, parseValue } from './utils/dateUtil';
import getDataOrAriaProps, { toArray } from './utils/miscUtil';
import { useProvidePanel } from './PanelContext';
import { getDefaultFormat, getInputSize, elementsContains } from './utils/uiUtil';
import usePickerInput from './hooks/usePickerInput';
import useTextValueMapping from './hooks/useTextValueMapping';
import useValueTexts from './hooks/useValueTexts';
import useHoverValue from './hooks/useHoverValue';
import { computed, defineComponent, ref, toRef, watch } from 'vue';
import useMergedState from '../_util/hooks/useMergedState';
import { warning } from '../vc-util/warning';
import classNames from '../_util/classNames';
import { useProviderTrigger } from '../vc-trigger/context';
import { legacyPropsWarning } from './utils/warnUtil';
function Picker() {
  return defineComponent({
    name: 'Picker',
    inheritAttrs: false,
    props: ['prefixCls', 'id', 'tabindex', 'dropdownClassName', 'dropdownAlign', 'popupStyle', 'transitionName', 'generateConfig', 'locale', 'inputReadOnly', 'allowClear', 'autofocus', 'showTime', 'showNow', 'showHour', 'showMinute', 'showSecond', 'picker', 'format', 'use12Hours', 'value', 'defaultValue', 'open', 'defaultOpen', 'defaultOpenValue', 'suffixIcon', 'clearIcon', 'disabled', 'disabledDate', 'placeholder', 'getPopupContainer', 'panelRender', 'inputRender', 'onChange', 'onOpenChange', 'onFocus', 'onBlur', 'onMousedown', 'onMouseup', 'onMouseenter', 'onMouseleave', 'onContextmenu', 'onClick', 'onKeydown', 'onSelect', 'direction', 'autocomplete', 'showToday', 'renderExtraFooter', 'dateRender', 'minuteStep', 'hourStep', 'secondStep', 'hideDisabledOptions'],
    // slots: [
    //   'suffixIcon',
    //   'clearIcon',
    //   'prevIcon',
    //   'nextIcon',
    //   'superPrevIcon',
    //   'superNextIcon',
    //   'panelRender',
    // ],
    setup: function setup(props, _ref) {
      var attrs = _ref.attrs,
        expose = _ref.expose;
      var inputRef = ref(null);
      var picker = computed(function () {
        var _props$picker;
        return (_props$picker = props.picker) !== null && _props$picker !== void 0 ? _props$picker : 'date';
      });
      var needConfirmButton = computed(function () {
        return picker.value === 'date' && !!props.showTime || picker.value === 'time';
      });
      // ============================ Warning ============================
      if (process.env.NODE_ENV !== 'production') {
        legacyPropsWarning(props);
      }
      // ============================= State =============================
      var formatList = computed(function () {
        return toArray(getDefaultFormat(props.format, picker.value, props.showTime, props.use12Hours));
      });
      // Panel ref
      var panelDivRef = ref(null);
      var inputDivRef = ref(null);
      var containerRef = ref(null);
      // Real value
      var _useMergedState = useMergedState(null, {
          value: toRef(props, 'value'),
          defaultValue: props.defaultValue
        }),
        _useMergedState2 = _slicedToArray(_useMergedState, 2),
        mergedValue = _useMergedState2[0],
        setInnerValue = _useMergedState2[1];
      var selectedValue = ref(mergedValue.value);
      var setSelectedValue = function setSelectedValue(val) {
        selectedValue.value = val;
      };
      // Operation ref
      var operationRef = ref(null);
      // Open
      var _useMergedState3 = useMergedState(false, {
          value: toRef(props, 'open'),
          defaultValue: props.defaultOpen,
          postState: function postState(postOpen) {
            return props.disabled ? false : postOpen;
          },
          onChange: function onChange(newOpen) {
            if (props.onOpenChange) {
              props.onOpenChange(newOpen);
            }
            if (!newOpen && operationRef.value && operationRef.value.onClose) {
              operationRef.value.onClose();
            }
          }
        }),
        _useMergedState4 = _slicedToArray(_useMergedState3, 2),
        mergedOpen = _useMergedState4[0],
        triggerInnerOpen = _useMergedState4[1];
      // ============================= Text ==============================
      var _useValueTexts = useValueTexts(selectedValue, {
          formatList: formatList,
          generateConfig: toRef(props, 'generateConfig'),
          locale: toRef(props, 'locale')
        }),
        _useValueTexts2 = _slicedToArray(_useValueTexts, 2),
        valueTexts = _useValueTexts2[0],
        firstValueText = _useValueTexts2[1];
      var _useTextValueMapping = useTextValueMapping({
          valueTexts: valueTexts,
          onTextChange: function onTextChange(newText) {
            var inputDate = parseValue(newText, {
              locale: props.locale,
              formatList: formatList.value,
              generateConfig: props.generateConfig
            });
            if (inputDate && (!props.disabledDate || !props.disabledDate(inputDate))) {
              setSelectedValue(inputDate);
            }
          }
        }),
        _useTextValueMapping2 = _slicedToArray(_useTextValueMapping, 3),
        text = _useTextValueMapping2[0],
        triggerTextChange = _useTextValueMapping2[1],
        resetText = _useTextValueMapping2[2];
      // ============================ Trigger ============================
      var triggerChange = function triggerChange(newValue) {
        var onChange = props.onChange,
          generateConfig = props.generateConfig,
          locale = props.locale;
        setSelectedValue(newValue);
        setInnerValue(newValue);
        if (onChange && !isEqual(generateConfig, mergedValue.value, newValue)) {
          onChange(newValue, newValue ? formatValue(newValue, {
            generateConfig: generateConfig,
            locale: locale,
            format: formatList.value[0]
          }) : '');
        }
      };
      var triggerOpen = function triggerOpen(newOpen) {
        if (props.disabled && newOpen) {
          return;
        }
        triggerInnerOpen(newOpen);
      };
      var forwardKeydown = function forwardKeydown(e) {
        if (mergedOpen.value && operationRef.value && operationRef.value.onKeydown) {
          // Let popup panel handle keyboard
          return operationRef.value.onKeydown(e);
        }
        /* istanbul ignore next */
        /* eslint-disable no-lone-blocks */
        {
          warning(false, 'Picker not correct forward Keydown operation. Please help to fire issue about this.');
          return false;
        }
      };
      var onInternalMouseup = function onInternalMouseup() {
        if (props.onMouseup) {
          props.onMouseup.apply(props, arguments);
        }
        if (inputRef.value) {
          inputRef.value.focus();
          triggerOpen(true);
        }
      };
      // ============================= Input =============================
      var _usePickerInput = usePickerInput({
          blurToCancel: needConfirmButton,
          open: mergedOpen,
          value: text,
          triggerOpen: triggerOpen,
          forwardKeydown: forwardKeydown,
          isClickOutside: function isClickOutside(target) {
            return !elementsContains([panelDivRef.value, inputDivRef.value, containerRef.value], target);
          },
          onSubmit: function onSubmit() {
            if (
            // When user typing disabledDate with keyboard and enter, this value will be empty
            !selectedValue.value ||
            // Normal disabled check
            props.disabledDate && props.disabledDate(selectedValue.value)) {
              return false;
            }
            triggerChange(selectedValue.value);
            triggerOpen(false);
            resetText();
            return true;
          },
          onCancel: function onCancel() {
            triggerOpen(false);
            setSelectedValue(mergedValue.value);
            resetText();
          },
          onKeydown: function onKeydown(e, preventDefault) {
            var _props$onKeydown;
            (_props$onKeydown = props.onKeydown) === null || _props$onKeydown === void 0 ? void 0 : _props$onKeydown.call(props, e, preventDefault);
          },
          onFocus: function onFocus(e) {
            var _props$onFocus;
            (_props$onFocus = props.onFocus) === null || _props$onFocus === void 0 ? void 0 : _props$onFocus.call(props, e);
          },
          onBlur: function onBlur(e) {
            var _props$onBlur;
            (_props$onBlur = props.onBlur) === null || _props$onBlur === void 0 ? void 0 : _props$onBlur.call(props, e);
          }
        }),
        _usePickerInput2 = _slicedToArray(_usePickerInput, 2),
        inputProps = _usePickerInput2[0],
        _usePickerInput2$ = _usePickerInput2[1],
        focused = _usePickerInput2$.focused,
        typing = _usePickerInput2$.typing;
      // ============================= Sync ==============================
      // Close should sync back with text value
      watch([mergedOpen, valueTexts], function () {
        if (!mergedOpen.value) {
          setSelectedValue(mergedValue.value);
          if (!valueTexts.value.length || valueTexts.value[0] === '') {
            triggerTextChange('');
          } else if (firstValueText.value !== text.value) {
            resetText();
          }
        }
      });
      // Change picker should sync back with text value
      watch(picker, function () {
        if (!mergedOpen.value) {
          resetText();
        }
      });
      // Sync innerValue with control mode
      watch(mergedValue, function () {
        // Sync select value
        setSelectedValue(mergedValue.value);
      });
      var _useHoverValue = useHoverValue(text, {
          formatList: formatList,
          generateConfig: toRef(props, 'generateConfig'),
          locale: toRef(props, 'locale')
        }),
        _useHoverValue2 = _slicedToArray(_useHoverValue, 3),
        hoverValue = _useHoverValue2[0],
        onEnter = _useHoverValue2[1],
        onLeave = _useHoverValue2[2];
      var onContextSelect = function onContextSelect(date, type) {
        if (type === 'submit' || type !== 'key' && !needConfirmButton.value) {
          // triggerChange will also update selected values
          triggerChange(date);
          triggerOpen(false);
        }
      };
      useProvidePanel({
        operationRef: operationRef,
        hideHeader: computed(function () {
          return picker.value === 'time';
        }),
        panelRef: panelDivRef,
        onSelect: onContextSelect,
        open: mergedOpen,
        defaultOpenValue: toRef(props, 'defaultOpenValue'),
        onDateMouseenter: onEnter,
        onDateMouseleave: onLeave
      });
      expose({
        focus: function focus() {
          if (inputRef.value) {
            inputRef.value.focus();
          }
        },
        blur: function blur() {
          if (inputRef.value) {
            inputRef.value.blur();
          }
        }
      });
      var getPortal = useProviderTrigger();
      return function () {
        var _classNames2;
        var _props$prefixCls = props.prefixCls,
          prefixCls = _props$prefixCls === void 0 ? 'rc-picker' : _props$prefixCls,
          id = props.id,
          tabindex = props.tabindex,
          dropdownClassName = props.dropdownClassName,
          dropdownAlign = props.dropdownAlign,
          popupStyle = props.popupStyle,
          transitionName = props.transitionName,
          generateConfig = props.generateConfig,
          locale = props.locale,
          inputReadOnly = props.inputReadOnly,
          allowClear = props.allowClear,
          autofocus = props.autofocus,
          _props$picker2 = props.picker,
          picker = _props$picker2 === void 0 ? 'date' : _props$picker2,
          defaultOpenValue = props.defaultOpenValue,
          suffixIcon = props.suffixIcon,
          clearIcon = props.clearIcon,
          disabled = props.disabled,
          placeholder = props.placeholder,
          getPopupContainer = props.getPopupContainer,
          panelRender = props.panelRender,
          onMousedown = props.onMousedown,
          onMouseenter = props.onMouseenter,
          onMouseleave = props.onMouseleave,
          onContextmenu = props.onContextmenu,
          onClick = props.onClick,
          _onSelect = props.onSelect,
          direction = props.direction,
          _props$autocomplete = props.autocomplete,
          autocomplete = _props$autocomplete === void 0 ? 'off' : _props$autocomplete;
        // ============================= Panel =============================
        var panelProps = _objectSpread(_objectSpread(_objectSpread({}, props), attrs), {}, {
          class: classNames(_defineProperty({}, "".concat(prefixCls, "-panel-focused"), !typing.value)),
          style: undefined,
          pickerValue: undefined,
          onPickerValueChange: undefined,
          onChange: null
        });
        var panelNode = _createVNode(PickerPanel, _objectSpread(_objectSpread({}, panelProps), {}, {
          "generateConfig": generateConfig,
          "value": selectedValue.value,
          "locale": locale,
          "tabindex": -1,
          "onSelect": function onSelect(date) {
            _onSelect === null || _onSelect === void 0 ? void 0 : _onSelect(date);
            setSelectedValue(date);
          },
          "direction": direction,
          "onPanelChange": function onPanelChange(viewDate, mode) {
            var onPanelChange = props.onPanelChange;
            onLeave(true);
            onPanelChange === null || onPanelChange === void 0 ? void 0 : onPanelChange(viewDate, mode);
          }
        }), null);
        if (panelRender) {
          panelNode = panelRender(panelNode);
        }
        var panel = _createVNode("div", {
          "class": "".concat(prefixCls, "-panel-container"),
          "onMousedown": function onMousedown(e) {
            e.preventDefault();
          }
        }, [panelNode]);
        var suffixNode;
        if (suffixIcon) {
          suffixNode = _createVNode("span", {
            "class": "".concat(prefixCls, "-suffix")
          }, [suffixIcon]);
        }
        var clearNode;
        if (allowClear && mergedValue.value && !disabled) {
          clearNode = _createVNode("span", {
            "onMousedown": function onMousedown(e) {
              e.preventDefault();
              e.stopPropagation();
            },
            "onMouseup": function onMouseup(e) {
              e.preventDefault();
              e.stopPropagation();
              triggerChange(null);
              triggerOpen(false);
            },
            "class": "".concat(prefixCls, "-clear"),
            "role": "button"
          }, [clearIcon || _createVNode("span", {
            "class": "".concat(prefixCls, "-clear-btn")
          }, null)]);
        }
        var mergedInputProps = _objectSpread(_objectSpread(_objectSpread({
          id: id,
          tabindex: tabindex,
          disabled: disabled,
          readonly: inputReadOnly || typeof formatList.value[0] === 'function' || !typing.value,
          value: hoverValue.value || text.value,
          onInput: function onInput(e) {
            triggerTextChange(e.target.value);
          },
          autofocus: autofocus,
          placeholder: placeholder,
          ref: inputRef,
          title: text.value
        }, inputProps.value), {}, {
          size: getInputSize(picker, formatList.value[0], generateConfig)
        }, getDataOrAriaProps(props)), {}, {
          autocomplete: autocomplete
        });
        var inputNode = props.inputRender ? props.inputRender(mergedInputProps) : _createVNode("input", mergedInputProps, null);
        // ============================ Warning ============================
        if (process.env.NODE_ENV !== 'production') {
          warning(!defaultOpenValue, '`defaultOpenValue` may confuse user for the current value status. Please use `defaultValue` instead.');
        }
        // ============================ Return =============================
        var popupPlacement = direction === 'rtl' ? 'bottomRight' : 'bottomLeft';
        return _createVNode(PickerTrigger, {
          "visible": mergedOpen.value,
          "popupStyle": popupStyle,
          "prefixCls": prefixCls,
          "dropdownClassName": dropdownClassName,
          "dropdownAlign": dropdownAlign,
          "getPopupContainer": getPopupContainer,
          "transitionName": transitionName,
          "popupPlacement": popupPlacement,
          "direction": direction
        }, {
          default: function _default() {
            return [_createVNode("div", {
              "ref": containerRef,
              "class": classNames(prefixCls, attrs.class, (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_classNames2, "".concat(prefixCls, "-focused"), focused.value), _defineProperty(_classNames2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames2)),
              "style": attrs.style,
              "onMousedown": onMousedown,
              "onMouseup": onInternalMouseup,
              "onMouseenter": onMouseenter,
              "onMouseleave": onMouseleave,
              "onContextmenu": onContextmenu,
              "onClick": onClick
            }, [_createVNode("div", {
              "class": classNames("".concat(prefixCls, "-input"), _defineProperty({}, "".concat(prefixCls, "-input-placeholder"), !!hoverValue.value)),
              "ref": inputDivRef
            }, [inputNode, suffixNode, clearNode]), getPortal()])];
          },
          popupElement: function popupElement() {
            return panel;
          }
        });
      };
    }
  });
}
export default Picker();