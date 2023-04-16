import _extends from "@babel/runtime/helpers/esm/extends";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import { defineComponent, ref } from 'vue';
import Select, { selectProps } from '../select';
import { isValidElement, flattenChildren } from '../_util/props-util';
import warning from '../_util/warning';
import Option from './Option';
import OptGroup from './OptGroup';
import omit from '../_util/omit';
import useConfigInject from '../_util/hooks/useConfigInject';
function isSelectOptionOrSelectOptGroup(child) {
  var _child$type, _child$type2;
  return (child === null || child === void 0 ? void 0 : (_child$type = child.type) === null || _child$type === void 0 ? void 0 : _child$type.isSelectOption) || (child === null || child === void 0 ? void 0 : (_child$type2 = child.type) === null || _child$type2 === void 0 ? void 0 : _child$type2.isSelectOptGroup);
}
export var autoCompleteProps = function autoCompleteProps() {
  return _objectSpread(_objectSpread({}, omit(selectProps(), ['loading', 'mode', 'optionLabelProp', 'labelInValue'])), {}, {
    dataSource: Array,
    dropdownMenuStyle: {
      type: Object,
      default: undefined
    },
    // optionLabelProp: String,
    dropdownMatchSelectWidth: {
      type: [Number, Boolean],
      default: true
    },
    prefixCls: String,
    showSearch: {
      type: Boolean,
      default: undefined
    },
    transitionName: String,
    choiceTransitionName: {
      type: String,
      default: 'zoom'
    },
    autofocus: {
      type: Boolean,
      default: undefined
    },
    backfill: {
      type: Boolean,
      default: undefined
    },
    // optionLabelProp: PropTypes.string.def('children'),
    filterOption: {
      type: [Boolean, Function],
      default: false
    },
    defaultActiveFirstOption: {
      type: Boolean,
      default: true
    }
  });
};
export var AutoCompleteOption = Option;
export var AutoCompleteOptGroup = OptGroup;
var AutoComplete = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'AAutoComplete',
  inheritAttrs: false,
  props: autoCompleteProps(),
  // emits: ['change', 'select', 'focus', 'blur'],
  slots: ['option'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      attrs = _ref.attrs,
      expose = _ref.expose;
    warning(!('dataSource' in slots), 'AutoComplete', '`dataSource` slot is deprecated, please use props `options` instead.');
    warning(!('options' in slots), 'AutoComplete', '`options` slot is deprecated, please use props `options` instead.');
    var selectRef = ref();
    var getInputElement = function getInputElement() {
      var _slots$default;
      var children = flattenChildren((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
      var element = children.length ? children[0] : undefined;
      return element;
    };
    var focus = function focus() {
      var _selectRef$value;
      (_selectRef$value = selectRef.value) === null || _selectRef$value === void 0 ? void 0 : _selectRef$value.focus();
    };
    var blur = function blur() {
      var _selectRef$value2;
      (_selectRef$value2 = selectRef.value) === null || _selectRef$value2 === void 0 ? void 0 : _selectRef$value2.blur();
    };
    expose({
      focus: focus,
      blur: blur
    });
    var _useConfigInject = useConfigInject('select', props),
      prefixCls = _useConfigInject.prefixCls;
    return function () {
      var _slots$notFoundConten, _cls;
      var size = props.size,
        dataSource = props.dataSource,
        _props$notFoundConten = props.notFoundContent,
        notFoundContent = _props$notFoundConten === void 0 ? (_slots$notFoundConten = slots.notFoundContent) === null || _slots$notFoundConten === void 0 ? void 0 : _slots$notFoundConten.call(slots) : _props$notFoundConten;
      var optionChildren;
      var className = attrs.class;
      var cls = (_cls = {}, _defineProperty(_cls, className, !!className), _defineProperty(_cls, "".concat(prefixCls.value, "-lg"), size === 'large'), _defineProperty(_cls, "".concat(prefixCls.value, "-sm"), size === 'small'), _defineProperty(_cls, "".concat(prefixCls.value, "-show-search"), true), _defineProperty(_cls, "".concat(prefixCls.value, "-auto-complete"), true), _cls);
      if (props.options === undefined) {
        var _slots$dataSource, _slots$options;
        var childArray = ((_slots$dataSource = slots.dataSource) === null || _slots$dataSource === void 0 ? void 0 : _slots$dataSource.call(slots)) || ((_slots$options = slots.options) === null || _slots$options === void 0 ? void 0 : _slots$options.call(slots)) || [];
        if (childArray.length && isSelectOptionOrSelectOptGroup(childArray[0])) {
          optionChildren = childArray;
        } else {
          optionChildren = dataSource ? dataSource.map(function (item) {
            if (isValidElement(item)) {
              return item;
            }
            switch (_typeof(item)) {
              case 'string':
                return _createVNode(Option, {
                  "key": item,
                  "value": item
                }, {
                  default: function _default() {
                    return [item];
                  }
                });
              case 'object':
                return _createVNode(Option, {
                  "key": item.value,
                  "value": item.value
                }, {
                  default: function _default() {
                    return [item.text];
                  }
                });
              default:
                throw new Error('AutoComplete[dataSource] only supports type `string[] | Object[]`.');
            }
          }) : [];
        }
      }
      var selectProps = omit(_objectSpread(_objectSpread(_objectSpread({}, props), attrs), {}, {
        mode: Select.SECRET_COMBOBOX_MODE_DO_NOT_USE,
        // optionLabelProp,
        getInputElement: getInputElement,
        notFoundContent: notFoundContent,
        // placeholder: '',
        class: cls,
        ref: selectRef
      }), ['dataSource', 'loading']);
      return _createVNode(Select, selectProps, _objectSpread({
        default: function _default() {
          return [optionChildren];
        }
      }, omit(slots, ['default', 'dataSource', 'options'])));
    };
  }
});
/* istanbul ignore next */
export default _extends(AutoComplete, {
  Option: Option,
  OptGroup: OptGroup,
  install: function install(app) {
    app.component(AutoComplete.name, AutoComplete);
    app.component(Option.displayName, Option);
    app.component(OptGroup.displayName, OptGroup);
    return app;
  }
});