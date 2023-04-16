import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
var _excluded = ["notFoundContent", "expandIcon", "multiple", "bordered", "allowClear", "choiceTransitionName", "transitionName", "id"];
import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import VcCascader, { cascaderProps as vcCascaderProps } from '../vc-cascader';
import RightOutlined from "@ant-design/icons-vue/es/icons/RightOutlined";
import LoadingOutlined from "@ant-design/icons-vue/es/icons/LoadingOutlined";
import LeftOutlined from "@ant-design/icons-vue/es/icons/LeftOutlined";
import getIcons from '../select/utils/iconUtil';
import { withInstall } from '../_util/type';
import omit from '../_util/omit';
import { computed, defineComponent, ref, watchEffect } from 'vue';
import PropTypes from '../_util/vue-types';
import { initDefaultProps } from '../_util/props-util';
import useConfigInject from '../_util/hooks/useConfigInject';
import classNames from '../_util/classNames';
import devWarning from '../vc-util/devWarning';
import { getTransitionDirection, getTransitionName } from '../_util/transition';
import { useInjectFormItemContext } from '../form';
function highlightKeyword(str, lowerKeyword, prefixCls) {
  var cells = str.toLowerCase().split(lowerKeyword).reduce(function (list, cur, index) {
    return index === 0 ? [cur] : [].concat(_toConsumableArray(list), [lowerKeyword, cur]);
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
      originWorld = _createVNode("span", {
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
    var type = _typeof(label);
    if (type === 'string' || type === 'number') {
      label = highlightKeyword(String(label), lower, prefixCls);
    }
    optionList.push(label);
  });
  return optionList;
};
export function cascaderProps() {
  return _objectSpread(_objectSpread({}, omit(vcCascaderProps(), ['customSlots', 'checkable', 'options'])), {}, {
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
    suffixIcon: PropTypes.any,
    options: Array,
    'onUpdate:value': Function
  });
}
var Cascader = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'ACascader',
  inheritAttrs: false,
  props: initDefaultProps(cascaderProps(), {
    bordered: true,
    choiceTransitionName: '',
    allowClear: true
  }),
  setup: function setup(props, _ref2) {
    var attrs = _ref2.attrs,
      expose = _ref2.expose,
      slots = _ref2.slots,
      emit = _ref2.emit;
    var formItemContext = useInjectFormItemContext();
    var _useConfigInject = useConfigInject('cascader', props),
      cascaderPrefixCls = _useConfigInject.prefixCls,
      rootPrefixCls = _useConfigInject.rootPrefixCls,
      getPrefixCls = _useConfigInject.getPrefixCls,
      direction = _useConfigInject.direction,
      getPopupContainer = _useConfigInject.getPopupContainer,
      renderEmpty = _useConfigInject.renderEmpty,
      size = _useConfigInject.size;
    var prefixCls = computed(function () {
      return getPrefixCls('select', props.prefixCls);
    });
    var isRtl = computed(function () {
      return direction.value === 'rtl';
    });
    // =================== Warning =====================
    if (process.env.NODE_ENV !== 'production') {
      watchEffect(function () {
        devWarning(!props.multiple || !props.displayRender || !slots.displayRender, 'Cascader', '`displayRender` not work on `multiple`. Please use `tagRender` instead.');
      });
    }
    // ==================== Search =====================
    var mergedShowSearch = computed(function () {
      if (!props.showSearch) {
        return props.showSearch;
      }
      var searchConfig = {
        render: defaultSearchRender
      };
      if (_typeof(props.showSearch) === 'object') {
        searchConfig = _objectSpread(_objectSpread({}, searchConfig), props.showSearch);
      }
      return searchConfig;
    });
    // =================== Dropdown ====================
    var mergedDropdownClassName = computed(function () {
      return classNames(props.dropdownClassName || props.popupClassName, "".concat(cascaderPrefixCls.value, "-dropdown"), _defineProperty({}, "".concat(cascaderPrefixCls.value, "-dropdown-rtl"), isRtl.value));
    });
    var selectRef = ref();
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
    var mergedShowArrow = computed(function () {
      return props.showArrow !== undefined ? props.showArrow : props.loading || !props.multiple;
    });
    var placement = computed(function () {
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
        restProps = _objectWithoutProperties(props, _excluded);
      // =================== No Found ====================
      var mergedNotFoundContent = notFoundContent || renderEmpty.value('Cascader');
      // ===================== Icon ======================
      var mergedExpandIcon = expandIcon;
      if (!expandIcon) {
        mergedExpandIcon = isRtl.value ? _createVNode(LeftOutlined, null, null) : _createVNode(RightOutlined, null, null);
      }
      var loadingIcon = _createVNode("span", {
        "class": "".concat(prefixCls.value, "-menu-item-loading-icon")
      }, [_createVNode(LoadingOutlined, {
        "spin": true
      }, null)]);
      // ===================== Icons =====================
      var _getIcons = getIcons(_objectSpread(_objectSpread({}, props), {}, {
          multiple: multiple,
          prefixCls: prefixCls.value,
          showArrow: mergedShowArrow.value
        }), slots),
        suffixIcon = _getIcons.suffixIcon,
        removeIcon = _getIcons.removeIcon,
        clearIcon = _getIcons.clearIcon;
      return _createVNode(VcCascader, _objectSpread(_objectSpread(_objectSpread({}, restProps), attrs), {}, {
        "id": id,
        "prefixCls": prefixCls.value,
        "class": [cascaderPrefixCls.value, (_ref3 = {}, _defineProperty(_ref3, "".concat(prefixCls.value, "-lg"), size.value === 'large'), _defineProperty(_ref3, "".concat(prefixCls.value, "-sm"), size.value === 'small'), _defineProperty(_ref3, "".concat(prefixCls.value, "-rtl"), isRtl.value), _defineProperty(_ref3, "".concat(prefixCls.value, "-borderless"), !bordered), _ref3), attrs.class],
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
        "choiceTransitionName": getTransitionName(rootPrefixCls.value, '', choiceTransitionName),
        "transitionName": getTransitionName(rootPrefixCls.value, getTransitionDirection(placement.value), transitionName),
        "getPopupContainer": getPopupContainer.value,
        "customSlots": _objectSpread(_objectSpread({}, slots), {}, {
          checkable: function checkable() {
            return _createVNode("span", {
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
export default withInstall(Cascader);