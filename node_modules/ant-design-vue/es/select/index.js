import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
import { computed, defineComponent, ref } from 'vue';
import classNames from '../_util/classNames';
import RcSelect, { selectProps as vcSelectProps, Option, OptGroup } from '../vc-select';
import getIcons from './utils/iconUtil';
import PropTypes from '../_util/vue-types';
import useConfigInject from '../_util/hooks/useConfigInject';
import omit from '../_util/omit';
import { useInjectFormItemContext } from '../form/FormItemContext';
import { getTransitionName } from '../_util/transition';
import { initDefaultProps } from '../_util/props-util';
export var selectProps = function selectProps() {
  return _objectSpread(_objectSpread({}, omit(vcSelectProps(), ['inputIcon', 'mode', 'getInputElement', 'getRawInputElement', 'backfill'])), {}, {
    value: {
      type: [Array, Object, String, Number]
    },
    defaultValue: {
      type: [Array, Object, String, Number]
    },
    notFoundContent: PropTypes.any,
    suffixIcon: PropTypes.any,
    itemIcon: PropTypes.any,
    size: String,
    mode: String,
    bordered: {
      type: Boolean,
      default: true
    },
    transitionName: String,
    choiceTransitionName: {
      type: String,
      default: ''
    },
    'onUpdate:value': Function
  });
};
var SECRET_COMBOBOX_MODE_DO_NOT_USE = 'SECRET_COMBOBOX_MODE_DO_NOT_USE';
var Select = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'ASelect',
  Option: Option,
  OptGroup: OptGroup,
  inheritAttrs: false,
  props: initDefaultProps(selectProps(), {
    listHeight: 256,
    listItemHeight: 24
  }),
  SECRET_COMBOBOX_MODE_DO_NOT_USE: SECRET_COMBOBOX_MODE_DO_NOT_USE,
  // emits: ['change', 'update:value', 'blur'],
  slots: ['notFoundContent', 'suffixIcon', 'itemIcon', 'removeIcon', 'clearIcon', 'dropdownRender', 'option', 'placeholder', 'tagRender', 'maxTagPlaceholder', 'optionLabel' // donot use, maybe remove it
  ],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      emit = _ref.emit,
      slots = _ref.slots,
      expose = _ref.expose;
    var selectRef = ref();
    var formItemContext = useInjectFormItemContext();
    var focus = function focus() {
      var _selectRef$value;
      (_selectRef$value = selectRef.value) === null || _selectRef$value === void 0 ? void 0 : _selectRef$value.focus();
    };
    var blur = function blur() {
      var _selectRef$value2;
      (_selectRef$value2 = selectRef.value) === null || _selectRef$value2 === void 0 ? void 0 : _selectRef$value2.blur();
    };
    var scrollTo = function scrollTo(arg) {
      var _selectRef$value3;
      (_selectRef$value3 = selectRef.value) === null || _selectRef$value3 === void 0 ? void 0 : _selectRef$value3.scrollTo(arg);
    };
    var mode = computed(function () {
      var mode = props.mode;
      if (mode === 'combobox') {
        return undefined;
      }
      if (mode === SECRET_COMBOBOX_MODE_DO_NOT_USE) {
        return 'combobox';
      }
      return mode;
    });
    var _useConfigInject = useConfigInject('select', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction,
      configProvider = _useConfigInject.configProvider,
      size = _useConfigInject.size,
      getPrefixCls = _useConfigInject.getPrefixCls;
    var rootPrefixCls = computed(function () {
      return getPrefixCls();
    });
    var transitionName = computed(function () {
      return getTransitionName(rootPrefixCls.value, 'slide-up', props.transitionName);
    });
    var mergedClassName = computed(function () {
      var _classNames;
      return classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls.value, "-lg"), size.value === 'large'), _defineProperty(_classNames, "".concat(prefixCls.value, "-sm"), size.value === 'small'), _defineProperty(_classNames, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), _defineProperty(_classNames, "".concat(prefixCls.value, "-borderless"), !props.bordered), _classNames));
    });
    var triggerChange = function triggerChange() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      emit('update:value', args[0]);
      emit.apply(void 0, ['change'].concat(args));
      formItemContext.onFieldChange();
    };
    var handleBlur = function handleBlur(e) {
      emit('blur', e);
      formItemContext.onFieldBlur();
    };
    expose({
      blur: blur,
      focus: focus,
      scrollTo: scrollTo
    });
    var isMultiple = computed(function () {
      return mode.value === 'multiple' || mode.value === 'tags';
    });
    return function () {
      var _slots$placeholder, _slots$default;
      var notFoundContent = props.notFoundContent,
        _props$listHeight = props.listHeight,
        listHeight = _props$listHeight === void 0 ? 256 : _props$listHeight,
        _props$listItemHeight = props.listItemHeight,
        listItemHeight = _props$listItemHeight === void 0 ? 24 : _props$listItemHeight,
        getPopupContainer = props.getPopupContainer,
        dropdownClassName = props.dropdownClassName,
        virtual = props.virtual,
        dropdownMatchSelectWidth = props.dropdownMatchSelectWidth,
        _props$id = props.id,
        id = _props$id === void 0 ? formItemContext.id.value : _props$id,
        _props$placeholder = props.placeholder,
        placeholder = _props$placeholder === void 0 ? (_slots$placeholder = slots.placeholder) === null || _slots$placeholder === void 0 ? void 0 : _slots$placeholder.call(slots) : _props$placeholder;
      var renderEmpty = configProvider.renderEmpty,
        getContextPopupContainer = configProvider.getPopupContainer;
      // ===================== Empty =====================
      var mergedNotFound;
      if (notFoundContent !== undefined) {
        mergedNotFound = notFoundContent;
      } else if (slots.notFoundContent) {
        mergedNotFound = slots.notFoundContent();
      } else if (mode.value === 'combobox') {
        mergedNotFound = null;
      } else {
        mergedNotFound = renderEmpty('Select');
      }
      // ===================== Icons =====================
      var _getIcons = getIcons(_objectSpread(_objectSpread({}, props), {}, {
          multiple: isMultiple.value,
          prefixCls: prefixCls.value
        }), slots),
        suffixIcon = _getIcons.suffixIcon,
        itemIcon = _getIcons.itemIcon,
        removeIcon = _getIcons.removeIcon,
        clearIcon = _getIcons.clearIcon;
      var selectProps = omit(props, ['prefixCls', 'suffixIcon', 'itemIcon', 'removeIcon', 'clearIcon', 'size', 'bordered']);
      var rcSelectRtlDropDownClassName = classNames(dropdownClassName, _defineProperty({}, "".concat(prefixCls.value, "-dropdown-").concat(direction.value), direction.value === 'rtl'));
      return _createVNode(RcSelect, _objectSpread(_objectSpread(_objectSpread({
        "ref": selectRef,
        "virtual": virtual,
        "dropdownMatchSelectWidth": dropdownMatchSelectWidth
      }, selectProps), attrs), {}, {
        "placeholder": placeholder,
        "listHeight": listHeight,
        "listItemHeight": listItemHeight,
        "mode": mode.value,
        "prefixCls": prefixCls.value,
        "direction": direction.value,
        "inputIcon": suffixIcon,
        "menuItemSelectedIcon": itemIcon,
        "removeIcon": removeIcon,
        "clearIcon": clearIcon,
        "notFoundContent": mergedNotFound,
        "class": [mergedClassName.value, attrs.class],
        "getPopupContainer": getPopupContainer || getContextPopupContainer,
        "dropdownClassName": rcSelectRtlDropDownClassName,
        "onChange": triggerChange,
        "onBlur": handleBlur,
        "id": id,
        "dropdownRender": selectProps.dropdownRender || slots.dropdownRender,
        "transitionName": transitionName.value,
        "children": (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots),
        "tagRender": props.tagRender || slots.tagRender,
        "optionLabelRender": slots.optionLabel,
        "maxTagPlaceholder": props.maxTagPlaceholder || slots.maxTagPlaceholder
      }), {
        option: slots.option
      });
    };
  }
});
/* istanbul ignore next */
Select.install = function (app) {
  app.component(Select.name, Select);
  app.component(Select.Option.displayName, Select.Option);
  app.component(Select.OptGroup.displayName, Select.OptGroup);
  return app;
};
export var SelectOption = Select.Option;
export var SelectOptGroup = Select.OptGroup;
export default Select;