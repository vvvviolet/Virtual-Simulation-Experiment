"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectProps = exports.default = exports.SelectOption = exports.SelectOptGroup = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _classNames3 = _interopRequireDefault(require("../_util/classNames"));
var _vcSelect = _interopRequireWildcard(require("../vc-select"));
var _iconUtil = _interopRequireDefault(require("./utils/iconUtil"));
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var _omit = _interopRequireDefault(require("../_util/omit"));
var _FormItemContext = require("../form/FormItemContext");
var _transition = require("../_util/transition");
var _propsUtil = require("../_util/props-util");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var selectProps = function selectProps() {
  return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _omit.default)((0, _vcSelect.selectProps)(), ['inputIcon', 'mode', 'getInputElement', 'getRawInputElement', 'backfill'])), {}, {
    value: {
      type: [Array, Object, String, Number]
    },
    defaultValue: {
      type: [Array, Object, String, Number]
    },
    notFoundContent: _vueTypes.default.any,
    suffixIcon: _vueTypes.default.any,
    itemIcon: _vueTypes.default.any,
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
exports.selectProps = selectProps;
var SECRET_COMBOBOX_MODE_DO_NOT_USE = 'SECRET_COMBOBOX_MODE_DO_NOT_USE';
var Select = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'ASelect',
  Option: _vcSelect.Option,
  OptGroup: _vcSelect.OptGroup,
  inheritAttrs: false,
  props: (0, _propsUtil.initDefaultProps)(selectProps(), {
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
    var selectRef = (0, _vue.ref)();
    var formItemContext = (0, _FormItemContext.useInjectFormItemContext)();
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
    var mode = (0, _vue.computed)(function () {
      var mode = props.mode;
      if (mode === 'combobox') {
        return undefined;
      }
      if (mode === SECRET_COMBOBOX_MODE_DO_NOT_USE) {
        return 'combobox';
      }
      return mode;
    });
    var _useConfigInject = (0, _useConfigInject2.default)('select', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction,
      configProvider = _useConfigInject.configProvider,
      size = _useConfigInject.size,
      getPrefixCls = _useConfigInject.getPrefixCls;
    var rootPrefixCls = (0, _vue.computed)(function () {
      return getPrefixCls();
    });
    var transitionName = (0, _vue.computed)(function () {
      return (0, _transition.getTransitionName)(rootPrefixCls.value, 'slide-up', props.transitionName);
    });
    var mergedClassName = (0, _vue.computed)(function () {
      var _classNames;
      return (0, _classNames3.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-lg"), size.value === 'large'), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-sm"), size.value === 'small'), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-borderless"), !props.bordered), _classNames));
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
    var isMultiple = (0, _vue.computed)(function () {
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
      var _getIcons = (0, _iconUtil.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
          multiple: isMultiple.value,
          prefixCls: prefixCls.value
        }), slots),
        suffixIcon = _getIcons.suffixIcon,
        itemIcon = _getIcons.itemIcon,
        removeIcon = _getIcons.removeIcon,
        clearIcon = _getIcons.clearIcon;
      var selectProps = (0, _omit.default)(props, ['prefixCls', 'suffixIcon', 'itemIcon', 'removeIcon', 'clearIcon', 'size', 'bordered']);
      var rcSelectRtlDropDownClassName = (0, _classNames3.default)(dropdownClassName, (0, _defineProperty2.default)({}, "".concat(prefixCls.value, "-dropdown-").concat(direction.value), direction.value === 'rtl'));
      return (0, _vue.createVNode)(_vcSelect.default, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
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
var SelectOption = Select.Option;
exports.SelectOption = SelectOption;
var SelectOptGroup = Select.OptGroup;
exports.SelectOptGroup = SelectOptGroup;
var _default = Select;
exports.default = _default;