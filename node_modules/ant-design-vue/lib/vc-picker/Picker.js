"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _PickerPanel = _interopRequireDefault(require("./PickerPanel"));
var _PickerTrigger = _interopRequireDefault(require("./PickerTrigger"));
var _dateUtil = require("./utils/dateUtil");
var _miscUtil = _interopRequireWildcard(require("./utils/miscUtil"));
var _PanelContext = require("./PanelContext");
var _uiUtil = require("./utils/uiUtil");
var _usePickerInput3 = _interopRequireDefault(require("./hooks/usePickerInput"));
var _useTextValueMapping3 = _interopRequireDefault(require("./hooks/useTextValueMapping"));
var _useValueTexts3 = _interopRequireDefault(require("./hooks/useValueTexts"));
var _useHoverValue3 = _interopRequireDefault(require("./hooks/useHoverValue"));
var _useMergedState5 = _interopRequireDefault(require("../_util/hooks/useMergedState"));
var _warning = require("../vc-util/warning");
var _classNames4 = _interopRequireDefault(require("../_util/classNames"));
var _context = require("../vc-trigger/context");
var _warnUtil = require("./utils/warnUtil");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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

function Picker() {
  return (0, _vue.defineComponent)({
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
      var inputRef = (0, _vue.ref)(null);
      var picker = (0, _vue.computed)(function () {
        var _props$picker;
        return (_props$picker = props.picker) !== null && _props$picker !== void 0 ? _props$picker : 'date';
      });
      var needConfirmButton = (0, _vue.computed)(function () {
        return picker.value === 'date' && !!props.showTime || picker.value === 'time';
      });
      // ============================ Warning ============================
      if (process.env.NODE_ENV !== 'production') {
        (0, _warnUtil.legacyPropsWarning)(props);
      }
      // ============================= State =============================
      var formatList = (0, _vue.computed)(function () {
        return (0, _miscUtil.toArray)((0, _uiUtil.getDefaultFormat)(props.format, picker.value, props.showTime, props.use12Hours));
      });
      // Panel ref
      var panelDivRef = (0, _vue.ref)(null);
      var inputDivRef = (0, _vue.ref)(null);
      var containerRef = (0, _vue.ref)(null);
      // Real value
      var _useMergedState = (0, _useMergedState5.default)(null, {
          value: (0, _vue.toRef)(props, 'value'),
          defaultValue: props.defaultValue
        }),
        _useMergedState2 = (0, _slicedToArray2.default)(_useMergedState, 2),
        mergedValue = _useMergedState2[0],
        setInnerValue = _useMergedState2[1];
      var selectedValue = (0, _vue.ref)(mergedValue.value);
      var setSelectedValue = function setSelectedValue(val) {
        selectedValue.value = val;
      };
      // Operation ref
      var operationRef = (0, _vue.ref)(null);
      // Open
      var _useMergedState3 = (0, _useMergedState5.default)(false, {
          value: (0, _vue.toRef)(props, 'open'),
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
        _useMergedState4 = (0, _slicedToArray2.default)(_useMergedState3, 2),
        mergedOpen = _useMergedState4[0],
        triggerInnerOpen = _useMergedState4[1];
      // ============================= Text ==============================
      var _useValueTexts = (0, _useValueTexts3.default)(selectedValue, {
          formatList: formatList,
          generateConfig: (0, _vue.toRef)(props, 'generateConfig'),
          locale: (0, _vue.toRef)(props, 'locale')
        }),
        _useValueTexts2 = (0, _slicedToArray2.default)(_useValueTexts, 2),
        valueTexts = _useValueTexts2[0],
        firstValueText = _useValueTexts2[1];
      var _useTextValueMapping = (0, _useTextValueMapping3.default)({
          valueTexts: valueTexts,
          onTextChange: function onTextChange(newText) {
            var inputDate = (0, _dateUtil.parseValue)(newText, {
              locale: props.locale,
              formatList: formatList.value,
              generateConfig: props.generateConfig
            });
            if (inputDate && (!props.disabledDate || !props.disabledDate(inputDate))) {
              setSelectedValue(inputDate);
            }
          }
        }),
        _useTextValueMapping2 = (0, _slicedToArray2.default)(_useTextValueMapping, 3),
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
        if (onChange && !(0, _dateUtil.isEqual)(generateConfig, mergedValue.value, newValue)) {
          onChange(newValue, newValue ? (0, _dateUtil.formatValue)(newValue, {
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
          (0, _warning.warning)(false, 'Picker not correct forward Keydown operation. Please help to fire issue about this.');
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
      var _usePickerInput = (0, _usePickerInput3.default)({
          blurToCancel: needConfirmButton,
          open: mergedOpen,
          value: text,
          triggerOpen: triggerOpen,
          forwardKeydown: forwardKeydown,
          isClickOutside: function isClickOutside(target) {
            return !(0, _uiUtil.elementsContains)([panelDivRef.value, inputDivRef.value, containerRef.value], target);
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
        _usePickerInput2 = (0, _slicedToArray2.default)(_usePickerInput, 2),
        inputProps = _usePickerInput2[0],
        _usePickerInput2$ = _usePickerInput2[1],
        focused = _usePickerInput2$.focused,
        typing = _usePickerInput2$.typing;
      // ============================= Sync ==============================
      // Close should sync back with text value
      (0, _vue.watch)([mergedOpen, valueTexts], function () {
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
      (0, _vue.watch)(picker, function () {
        if (!mergedOpen.value) {
          resetText();
        }
      });
      // Sync innerValue with control mode
      (0, _vue.watch)(mergedValue, function () {
        // Sync select value
        setSelectedValue(mergedValue.value);
      });
      var _useHoverValue = (0, _useHoverValue3.default)(text, {
          formatList: formatList,
          generateConfig: (0, _vue.toRef)(props, 'generateConfig'),
          locale: (0, _vue.toRef)(props, 'locale')
        }),
        _useHoverValue2 = (0, _slicedToArray2.default)(_useHoverValue, 3),
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
      (0, _PanelContext.useProvidePanel)({
        operationRef: operationRef,
        hideHeader: (0, _vue.computed)(function () {
          return picker.value === 'time';
        }),
        panelRef: panelDivRef,
        onSelect: onContextSelect,
        open: mergedOpen,
        defaultOpenValue: (0, _vue.toRef)(props, 'defaultOpenValue'),
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
      var getPortal = (0, _context.useProviderTrigger)();
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
        var panelProps = (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), attrs), {}, {
          class: (0, _classNames4.default)((0, _defineProperty2.default)({}, "".concat(prefixCls, "-panel-focused"), !typing.value)),
          style: undefined,
          pickerValue: undefined,
          onPickerValueChange: undefined,
          onChange: null
        });
        var panelNode = (0, _vue.createVNode)(_PickerPanel.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, panelProps), {}, {
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
        var panel = (0, _vue.createVNode)("div", {
          "class": "".concat(prefixCls, "-panel-container"),
          "onMousedown": function onMousedown(e) {
            e.preventDefault();
          }
        }, [panelNode]);
        var suffixNode;
        if (suffixIcon) {
          suffixNode = (0, _vue.createVNode)("span", {
            "class": "".concat(prefixCls, "-suffix")
          }, [suffixIcon]);
        }
        var clearNode;
        if (allowClear && mergedValue.value && !disabled) {
          clearNode = (0, _vue.createVNode)("span", {
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
          }, [clearIcon || (0, _vue.createVNode)("span", {
            "class": "".concat(prefixCls, "-clear-btn")
          }, null)]);
        }
        var mergedInputProps = (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
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
          size: (0, _uiUtil.getInputSize)(picker, formatList.value[0], generateConfig)
        }, (0, _miscUtil.default)(props)), {}, {
          autocomplete: autocomplete
        });
        var inputNode = props.inputRender ? props.inputRender(mergedInputProps) : (0, _vue.createVNode)("input", mergedInputProps, null);
        // ============================ Warning ============================
        if (process.env.NODE_ENV !== 'production') {
          (0, _warning.warning)(!defaultOpenValue, '`defaultOpenValue` may confuse user for the current value status. Please use `defaultValue` instead.');
        }
        // ============================ Return =============================
        var popupPlacement = direction === 'rtl' ? 'bottomRight' : 'bottomLeft';
        return (0, _vue.createVNode)(_PickerTrigger.default, {
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
            return [(0, _vue.createVNode)("div", {
              "ref": containerRef,
              "class": (0, _classNames4.default)(prefixCls, attrs.class, (_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-disabled"), disabled), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-focused"), focused.value), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames2)),
              "style": attrs.style,
              "onMousedown": onMousedown,
              "onMouseup": onInternalMouseup,
              "onMouseenter": onMouseenter,
              "onMouseleave": onMouseleave,
              "onContextmenu": onContextmenu,
              "onClick": onClick
            }, [(0, _vue.createVNode)("div", {
              "class": (0, _classNames4.default)("".concat(prefixCls, "-input"), (0, _defineProperty2.default)({}, "".concat(prefixCls, "-input-placeholder"), !!hoverValue.value)),
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
var _default2 = Picker();
exports.default = _default2;