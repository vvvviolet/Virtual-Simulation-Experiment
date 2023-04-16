import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/esm/extends";
var _excluded = ["prefixCls", "placement", "transitionName", "getPopupContainer", "direction"],
  _excluded2 = ["class", "style"];
import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import { toRef, watchEffect, defineComponent, provide, withDirectives, ref, reactive, onUpdated, nextTick, computed } from 'vue';
import classNames from '../../_util/classNames';
import KeyCode from '../../_util/KeyCode';
import { initDefaultProps } from '../../_util/props-util';
import { getBeforeSelectionText, getLastMeasureIndex, replaceWithMeasure, setInputSelection } from './util';
import KeywordTrigger from './KeywordTrigger';
import { vcMentionsProps, defaultProps } from './mentionsProps';
import MentionsContextKey from './MentionsContext';
import antInputDirective from '../../_util/antInputDirective';
import omit from '../../_util/omit';
function noop() {}
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'Mentions',
  inheritAttrs: false,
  props: initDefaultProps(vcMentionsProps, defaultProps),
  slots: ['notFoundContent', 'option'],
  emits: ['change', 'select', 'search', 'focus', 'blur', 'pressenter'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
      attrs = _ref.attrs,
      expose = _ref.expose,
      slots = _ref.slots;
    var measure = ref(null);
    var textarea = ref(null);
    var focusId = ref();
    var state = reactive({
      value: props.value || '',
      measuring: false,
      measureLocation: 0,
      measureText: null,
      measurePrefix: '',
      activeIndex: 0,
      isFocus: false
    });
    watchEffect(function () {
      state.value = props.value;
    });
    var triggerChange = function triggerChange(val) {
      emit('change', val);
    };
    var onChange = function onChange(_ref2) {
      var _ref2$target = _ref2.target,
        value = _ref2$target.value,
        composing = _ref2$target.composing,
        isComposing = _ref2.isComposing;
      if (isComposing || composing) return;
      triggerChange(value);
    };
    var startMeasure = function startMeasure(measureText, measurePrefix, measureLocation) {
      _extends(state, {
        measuring: true,
        measureText: measureText,
        measurePrefix: measurePrefix,
        measureLocation: measureLocation,
        activeIndex: 0
      });
    };
    var stopMeasure = function stopMeasure(callback) {
      _extends(state, {
        measuring: false,
        measureLocation: 0,
        measureText: null
      });
      callback === null || callback === void 0 ? void 0 : callback();
    };
    var onKeyDown = function onKeyDown(event) {
      var which = event.which;
      // Skip if not measuring
      if (!state.measuring) {
        return;
      }
      if (which === KeyCode.UP || which === KeyCode.DOWN) {
        // Control arrow function
        var optionLen = options.value.length;
        var offset = which === KeyCode.UP ? -1 : 1;
        var newActiveIndex = (state.activeIndex + offset + optionLen) % optionLen;
        state.activeIndex = newActiveIndex;
        event.preventDefault();
      } else if (which === KeyCode.ESC) {
        stopMeasure();
      } else if (which === KeyCode.ENTER) {
        // Measure hit
        event.preventDefault();
        if (!options.value.length) {
          stopMeasure();
          return;
        }
        var option = options.value[state.activeIndex];
        selectOption(option);
      }
    };
    var onKeyUp = function onKeyUp(event) {
      var key = event.key,
        which = event.which;
      var prevMeasureText = state.measureText,
        measuring = state.measuring;
      var prefix = props.prefix,
        validateSearch = props.validateSearch;
      var target = event.target;
      if (target.composing) {
        return;
      }
      var selectionStartText = getBeforeSelectionText(target);
      var _getLastMeasureIndex = getLastMeasureIndex(selectionStartText, prefix),
        measureIndex = _getLastMeasureIndex.location,
        measurePrefix = _getLastMeasureIndex.prefix;
      // Skip if match the white key list
      if ([KeyCode.ESC, KeyCode.UP, KeyCode.DOWN, KeyCode.ENTER].indexOf(which) !== -1) {
        return;
      }
      if (measureIndex !== -1) {
        var measureText = selectionStartText.slice(measureIndex + measurePrefix.length);
        var validateMeasure = validateSearch(measureText, props);
        var matchOption = !!getOptions(measureText).length;
        if (validateMeasure) {
          if (key === measurePrefix || key === 'Shift' || measuring || measureText !== prevMeasureText && matchOption) {
            startMeasure(measureText, measurePrefix, measureIndex);
          }
        } else if (measuring) {
          // Stop if measureText is invalidate
          stopMeasure();
        }
        /**
         * We will trigger `onSearch` to developer since they may use for async update.
         * If met `space` means user finished searching.
         */
        if (validateMeasure) {
          emit('search', measureText, measurePrefix);
        }
      } else if (measuring) {
        stopMeasure();
      }
    };
    var onPressEnter = function onPressEnter(event) {
      if (!state.measuring) {
        emit('pressenter', event);
      }
    };
    var onInputFocus = function onInputFocus(event) {
      onFocus(event);
    };
    var onInputBlur = function onInputBlur(event) {
      onBlur(event);
    };
    var onFocus = function onFocus(event) {
      clearTimeout(focusId.value);
      var isFocus = state.isFocus;
      if (!isFocus && event) {
        emit('focus', event);
      }
      state.isFocus = true;
    };
    var onBlur = function onBlur(event) {
      focusId.value = setTimeout(function () {
        state.isFocus = false;
        stopMeasure();
        emit('blur', event);
      }, 100);
    };
    var selectOption = function selectOption(option) {
      var split = props.split;
      var _option$value = option.value,
        mentionValue = _option$value === void 0 ? '' : _option$value;
      var _replaceWithMeasure = replaceWithMeasure(state.value, {
          measureLocation: state.measureLocation,
          targetText: mentionValue,
          prefix: state.measurePrefix,
          selectionStart: textarea.value.selectionStart,
          split: split
        }),
        text = _replaceWithMeasure.text,
        selectionLocation = _replaceWithMeasure.selectionLocation;
      triggerChange(text);
      stopMeasure(function () {
        // We need restore the selection position
        setInputSelection(textarea.value, selectionLocation);
      });
      emit('select', option, state.measurePrefix);
    };
    var setActiveIndex = function setActiveIndex(activeIndex) {
      state.activeIndex = activeIndex;
    };
    var getOptions = function getOptions(measureText) {
      var targetMeasureText = measureText || state.measureText || '';
      var filterOption = props.filterOption;
      var list = props.options.filter(function (option) {
        /** Return all result if `filterOption` is false. */
        if (!!filterOption === false) {
          return true;
        }
        return filterOption(targetMeasureText, option);
      });
      return list;
    };
    var options = computed(function () {
      return getOptions();
    });
    var focus = function focus() {
      textarea.value.focus();
    };
    var blur = function blur() {
      textarea.value.blur();
    };
    expose({
      blur: blur,
      focus: focus
    });
    provide(MentionsContextKey, {
      activeIndex: toRef(state, 'activeIndex'),
      setActiveIndex: setActiveIndex,
      selectOption: selectOption,
      onFocus: onFocus,
      onBlur: onBlur,
      loading: toRef(props, 'loading')
    });
    onUpdated(function () {
      nextTick(function () {
        if (state.measuring) {
          measure.value.scrollTop = textarea.value.scrollTop;
        }
      });
    });
    return function () {
      var measureLocation = state.measureLocation,
        measurePrefix = state.measurePrefix,
        measuring = state.measuring;
      var prefixCls = props.prefixCls,
        placement = props.placement,
        transitionName = props.transitionName,
        getPopupContainer = props.getPopupContainer,
        direction = props.direction,
        restProps = _objectWithoutProperties(props, _excluded);
      var className = attrs.class,
        style = attrs.style,
        otherAttrs = _objectWithoutProperties(attrs, _excluded2);
      var inputProps = omit(restProps, ['value', 'prefix', 'split', 'validateSearch', 'filterOption', 'options', 'loading']);
      var textareaProps = _objectSpread(_objectSpread(_objectSpread({}, inputProps), otherAttrs), {}, {
        onChange: noop,
        onSelect: noop,
        value: state.value,
        onInput: onChange,
        onBlur: onInputBlur,
        onKeydown: onKeyDown,
        onKeyup: onKeyUp,
        onFocus: onInputFocus,
        onPressenter: onPressEnter
      });
      return _createVNode("div", {
        "class": classNames(prefixCls, className),
        "style": style
      }, [withDirectives(_createVNode("textarea", _objectSpread({
        "ref": textarea
      }, textareaProps), null), [[antInputDirective]]), measuring && _createVNode("div", {
        "ref": measure,
        "class": "".concat(prefixCls, "-measure")
      }, [state.value.slice(0, measureLocation), _createVNode(KeywordTrigger, {
        "prefixCls": prefixCls,
        "transitionName": transitionName,
        "placement": placement,
        "options": measuring ? options.value : [],
        "visible": true,
        "direction": direction,
        "getPopupContainer": getPopupContainer
      }, {
        default: function _default() {
          return [_createVNode("span", null, [measurePrefix])];
        },
        notFoundContent: slots.notFoundContent,
        option: slots.option
      }), state.value.slice(measureLocation + measurePrefix.length)])]);
    };
  }
});