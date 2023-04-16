"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof3 = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cascaderProps = cascaderProps;
exports.default = void 0;
var _vue = require("vue");
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _vcCascader = _interopRequireWildcard(require("../vc-cascader"));
var _RightOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/RightOutlined"));
var _LoadingOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/LoadingOutlined"));
var _LeftOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/LeftOutlined"));
var _iconUtil = _interopRequireDefault(require("../select/utils/iconUtil"));
var _type = require("../_util/type");
var _omit = _interopRequireDefault(require("../_util/omit"));
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _propsUtil = require("../_util/props-util");
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var _classNames2 = _interopRequireDefault(require("../_util/classNames"));
var _devWarning = _interopRequireDefault(require("../vc-util/devWarning"));
var _transition = require("../_util/transition");
var _form = require("../form");
var _excluded = ["notFoundContent", "expandIcon", "multiple", "bordered", "allowClear", "choiceTransitionName", "transitionName", "id"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function highlightKeyword(str, lowerKeyword, prefixCls) {
  var cells = str.toLowerCase().split(lowerKeyword).reduce(function (list, cur, index) {
    return index === 0 ? [cur] : [].concat((0, _toConsumableArray2.default)(list), [lowerKeyword, cur]);
  }, []);
  var fillCells = [];
  var start = 0;
  cells.forEach(function (cell, index) {
    var end = start + cell.length;
    var originWorld = str.slice(start, end);
    start = end;
    if (index % 2 === 1) {
      var _originWorld = function () {
        return originWorld;
      }();
      originWorld = (0, _vue.createVNode)("span", {
        "class": "".concat(prefixCls, "-menu-item-keyword"),
        "key": "seperator"
      }, [originWorld]);
    }
    fillCells.push(originWorld);
  });
  return fillCells;
}
var defaultSearchRender = function defaultSearchRender(_ref) {
  var inputValue = _ref.inputValue,
    path = _ref.path,
    prefixCls = _ref.prefixCls,
    fieldNames = _ref.fieldNames;
  var optionList = [];
  // We do lower here to save perf
  var lower = inputValue.toLowerCase();
  path.forEach(function (node, index) {
    if (index !== 0) {
      optionList.push(' / ');
    }
    var label = node[fieldNames.label];
    var type = (0, _typeof2.default)(label);
    if (type === 'string' || type === 'number') {
      label = highlightKeyword(String(label), lower, prefixCls);
    }
    optionList.push(label);
  });
  return optionList;
};
function cascaderProps() {
  return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _omit.default)((0, _vcCascader.cascaderProps)(), ['customSlots', 'checkable', 'options'])), {}, {
    multiple: {
      type: Boolean,
      default: undefined
    },
    size: String,
    bordered: {
      type: Boolean,
      default: undefined
    },
    placement: {
      type: String
    },
    suffixIcon: _vueTypes.default.any,
    options: Array,
    'onUpdate:value': Function
  });
}
var Cascader = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'ACascader',
  inheritAttrs: false,
  props: (0, _propsUtil.initDefaultProps)(cascaderProps(), {
    bordered: true,
    choiceTransitionName: '',
    allowClear: true
  }),
  setup: function setup(props, _ref2) {
    var attrs = _ref2.attrs,
      expose = _ref2.expose,
      slots = _ref2.slots,
      emit = _ref2.emit;
    var formItemContext = (0, _form.useInjectFormItemContext)();
    var _useConfigInject = (0, _useConfigInject2.default)('cascader', props),
      cascaderPrefixCls = _useConfigInject.prefixCls,
      rootPrefixCls = _useConfigInject.rootPrefixCls,
      getPrefixCls = _useConfigInject.getPrefixCls,
      direction = _useConfigInject.direction,
      getPopupContainer = _useConfigInject.getPopupContainer,
      renderEmpty = _useConfigInject.renderEmpty,
      size = _useConfigInject.size;
    var prefixCls = (0, _vue.computed)(function () {
      return getPrefixCls('select', props.prefixCls);
    });
    var isRtl = (0, _vue.computed)(function () {
      return direction.value === 'rtl';
    });
    // =================== Warning =====================
    if (process.env.NODE_ENV !== 'production') {
      (0, _vue.watchEffect)(function () {
        (0, _devWarning.default)(!props.multiple || !props.displayRender || !slots.displayRender, 'Cascader', '`displayRender` not work on `multiple`. Please use `tagRender` instead.');
      });
    }
    // ==================== Search =====================
    var mergedShowSearch = (0, _vue.computed)(function () {
      if (!props.showSearch) {
        return props.showSearch;
      }
      var searchConfig = {
        render: defaultSearchRender
      };
      if ((0, _typeof2.default)(props.showSearch) === 'object') {
        searchConfig = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, searchConfig), props.showSearch);
      }
      return searchConfig;
    });
    // =================== Dropdown ====================
    var mergedDropdownClassName = (0, _vue.computed)(function () {
      return (0, _classNames2.default)(props.dropdownClassName || props.popupClassName, "".concat(cascaderPrefixCls.value, "-dropdown"), (0, _defineProperty2.default)({}, "".concat(cascaderPrefixCls.value, "-dropdown-rtl"), isRtl.value));
    });
    var selectRef = (0, _vue.ref)();
    expose({
      focus: function focus() {
        var _selectRef$value;
        (_selectRef$value = selectRef.value) === null || _selectRef$value === void 0 ? void 0 : _selectRef$value.focus();
      },
      blur: function blur() {
        var _selectRef$value2;
        (_selectRef$value2 = selectRef.value) === null || _selectRef$value2 === void 0 ? void 0 : _selectRef$value2.blur();
      }
    });
    var handleChange = function handleChange() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      emit('update:value', args[0]);
      emit.apply(void 0, ['change'].concat(args));
      formItemContext.onFieldChange();
    };
    var handleBlur = function handleBlur() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      emit.apply(void 0, ['blur'].concat(args));
      formItemContext.onFieldBlur();
    };
    var mergedShowArrow = (0, _vue.computed)(function () {
      return props.showArrow !== undefined ? props.showArrow : props.loading || !props.multiple;
    });
    var placement = (0, _vue.computed)(function () {
      if (props.placement !== undefined) {
        return props.placement;
      }
      return direction.value === 'rtl' ? 'bottomRight' : 'bottomLeft';
    });
    return function () {
      var _slots$notFoundConten, _slots$expandIcon, _ref3;
      var _props$notFoundConten = props.notFoundContent,
        notFoundContent = _props$notFoundConten === void 0 ? (_slots$notFoundConten = slots.notFoundContent) === null || _slots$notFoundConten === void 0 ? void 0 : _slots$notFoundConten.call(slots) : _props$notFoundConten,
        _props$expandIcon = props.expandIcon,
        expandIcon = _props$expandIcon === void 0 ? (_slots$expandIcon = slots.expandIcon) === null || _slots$expandIcon === void 0 ? void 0 : _slots$expandIcon.call(slots) : _props$expandIcon,
        multiple = props.multiple,
        bordered = props.bordered,
        allowClear = props.allowClear,
        choiceTransitionName = props.choiceTransitionName,
        transitionName = props.transitionName,
        _props$id = props.id,
        id = _props$id === void 0 ? formItemContext.id.value : _props$id,
        restProps = (0, _objectWithoutProperties2.default)(props, _excluded);
      // =================== No Found ====================
      var mergedNotFoundContent = notFoundContent || renderEmpty.value('Cascader');
      // ===================== Icon ======================
      var mergedExpandIcon = expandIcon;
      if (!expandIcon) {
        mergedExpandIcon = isRtl.value ? (0, _vue.createVNode)(_LeftOutlined.default, null, null) : (0, _vue.createVNode)(_RightOutlined.default, null, null);
      }
      var loadingIcon = (0, _vue.createVNode)("span", {
        "class": "".concat(prefixCls.value, "-menu-item-loading-icon")
      }, [(0, _vue.createVNode)(_LoadingOutlined.default, {
        "spin": true
      }, null)]);
      // ===================== Icons =====================
      var _getIcons = (0, _iconUtil.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
          multiple: multiple,
          prefixCls: prefixCls.value,
          showArrow: mergedShowArrow.value
        }), slots),
        suffixIcon = _getIcons.suffixIcon,
        removeIcon = _getIcons.removeIcon,
        clearIcon = _getIcons.clearIcon;
      return (0, _vue.createVNode)(_vcCascader.default, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, restProps), attrs), {}, {
        "id": id,
        "prefixCls": prefixCls.value,
        "class": [cascaderPrefixCls.value, (_ref3 = {}, (0, _defineProperty2.default)(_ref3, "".concat(prefixCls.value, "-lg"), size.value === 'large'), (0, _defineProperty2.default)(_ref3, "".concat(prefixCls.value, "-sm"), size.value === 'small'), (0, _defineProperty2.default)(_ref3, "".concat(prefixCls.value, "-rtl"), isRtl.value), (0, _defineProperty2.default)(_ref3, "".concat(prefixCls.value, "-borderless"), !bordered), _ref3), attrs.class],
        "direction": direction.value,
        "placement": placement.value,
        "notFoundContent": mergedNotFoundContent,
        "allowClear": allowClear,
        "showSearch": mergedShowSearch.value,
        "expandIcon": mergedExpandIcon,
        "inputIcon": suffixIcon,
        "removeIcon": removeIcon,
        "clearIcon": clearIcon,
        "loadingIcon": loadingIcon,
        "checkable": !!multiple,
        "dropdownClassName": mergedDropdownClassName.value,
        "dropdownPrefixCls": cascaderPrefixCls.value,
        "choiceTransitionName": (0, _transition.getTransitionName)(rootPrefixCls.value, '', choiceTransitionName),
        "transitionName": (0, _transition.getTransitionName)(rootPrefixCls.value, (0, _transition.getTransitionDirection)(placement.value), transitionName),
        "getPopupContainer": getPopupContainer.value,
        "customSlots": (0, _objectSpread2.default)((0, _objectSpread2.default)({}, slots), {}, {
          checkable: function checkable() {
            return (0, _vue.createVNode)("span", {
              "class": "".concat(cascaderPrefixCls.value, "-checkbox-inner")
            }, null);
          }
        }),
        "tagRender": props.tagRender || slots.tagRender,
        "displayRender": props.displayRender || slots.displayRender,
        "maxTagPlaceholder": props.maxTagPlaceholder || slots.maxTagPlaceholder,
        "showArrow": props.showArrow,
        "onChange": handleChange,
        "onBlur": handleBlur,
        "ref": selectRef
      }), slots);
    };
  }
});
var _default = (0, _type.withInstall)(Cascader);
exports.default = _default;