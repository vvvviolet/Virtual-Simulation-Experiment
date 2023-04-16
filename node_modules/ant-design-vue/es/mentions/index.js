import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
var _excluded = ["disabled", "getPopupContainer", "rows", "id"],
  _excluded2 = ["class"];
import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
import { watch, ref, defineComponent } from 'vue';
import classNames from '../_util/classNames';
import PropTypes from '../_util/vue-types';
import VcMentions, { Option } from '../vc-mentions';
import { mentionsProps as baseMentionsProps } from '../vc-mentions/src/mentionsProps';
import useConfigInject from '../_util/hooks/useConfigInject';
import { flattenChildren, getOptionProps } from '../_util/props-util';
import { useInjectFormItemContext } from '../form/FormItemContext';
import omit from '../_util/omit';
import { optionProps } from '../vc-mentions/src/Option';
var getMentions = function getMentions() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _config$prefix = config.prefix,
    prefix = _config$prefix === void 0 ? '@' : _config$prefix,
    _config$split = config.split,
    split = _config$split === void 0 ? ' ' : _config$split;
  var prefixList = Array.isArray(prefix) ? prefix : [prefix];
  return value.split(split).map(function () {
    var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var hitPrefix = null;
    prefixList.some(function (prefixStr) {
      var startStr = str.slice(0, prefixStr.length);
      if (startStr === prefixStr) {
        hitPrefix = prefixStr;
        return true;
      }
      return false;
    });
    if (hitPrefix !== null) {
      return {
        prefix: hitPrefix,
        value: str.slice(hitPrefix.length)
      };
    }
    return null;
  }).filter(function (entity) {
    return !!entity && !!entity.value;
  });
};
export var mentionsProps = function mentionsProps() {
  return _objectSpread(_objectSpread({}, baseMentionsProps), {}, {
    loading: {
      type: Boolean,
      default: undefined
    },
    onFocus: {
      type: Function
    },
    onBlur: {
      type: Function
    },
    onSelect: {
      type: Function
    },
    onChange: {
      type: Function
    },
    onPressenter: {
      type: Function
    },
    'onUpdate:value': {
      type: Function
    },
    notFoundContent: PropTypes.any,
    defaultValue: String,
    id: String
  });
};
var Mentions = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'AMentions',
  inheritAttrs: false,
  props: mentionsProps(),
  slots: ['notFoundContent', 'option'],
  setup: function setup(props, _ref) {
    var _ref2, _props$value;
    var slots = _ref.slots,
      emit = _ref.emit,
      attrs = _ref.attrs,
      expose = _ref.expose;
    var _useConfigInject = useConfigInject('mentions', props),
      prefixCls = _useConfigInject.prefixCls,
      renderEmpty = _useConfigInject.renderEmpty,
      direction = _useConfigInject.direction;
    var focused = ref(false);
    var vcMentions = ref(null);
    var value = ref((_ref2 = (_props$value = props.value) !== null && _props$value !== void 0 ? _props$value : props.defaultValue) !== null && _ref2 !== void 0 ? _ref2 : '');
    var formItemContext = useInjectFormItemContext();
    watch(function () {
      return props.value;
    }, function (val) {
      value.value = val;
    });
    var handleFocus = function handleFocus(e) {
      focused.value = true;
      emit('focus', e);
    };
    var handleBlur = function handleBlur(e) {
      focused.value = false;
      emit('blur', e);
      formItemContext.onFieldBlur();
    };
    var handleSelect = function handleSelect() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      emit.apply(void 0, ['select'].concat(args));
      focused.value = true;
    };
    var handleChange = function handleChange(val) {
      if (props.value === undefined) {
        value.value = val;
      }
      emit('update:value', val);
      emit('change', val);
      formItemContext.onFieldChange();
    };
    var getNotFoundContent = function getNotFoundContent() {
      var notFoundContent = props.notFoundContent;
      if (notFoundContent !== undefined) {
        return notFoundContent;
      }
      if (slots.notFoundContent) {
        return slots.notFoundContent();
      }
      return renderEmpty.value('Select');
    };
    var getOptions = function getOptions() {
      var _slots$default;
      return flattenChildren(((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)) || []).map(function (item) {
        var _item$children, _item$children$defaul;
        return _objectSpread(_objectSpread({}, getOptionProps(item)), {}, {
          label: (_item$children = item.children) === null || _item$children === void 0 ? void 0 : (_item$children$defaul = _item$children.default) === null || _item$children$defaul === void 0 ? void 0 : _item$children$defaul.call(_item$children)
        });
      });
    };
    var focus = function focus() {
      vcMentions.value.focus();
    };
    var blur = function blur() {
      vcMentions.value.blur();
    };
    expose({
      focus: focus,
      blur: blur
    });
    return function () {
      var _classNames;
      var disabled = props.disabled,
        getPopupContainer = props.getPopupContainer,
        _props$rows = props.rows,
        rows = _props$rows === void 0 ? 1 : _props$rows,
        _props$id = props.id,
        id = _props$id === void 0 ? formItemContext.id.value : _props$id,
        restProps = _objectWithoutProperties(props, _excluded);
      var className = attrs.class,
        otherAttrs = _objectWithoutProperties(attrs, _excluded2);
      var otherProps = omit(restProps, ['defaultValue', 'onUpdate:value', 'prefixCls']);
      var mergedClassName = classNames(className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls.value, "-disabled"), disabled), _defineProperty(_classNames, "".concat(prefixCls.value, "-focused"), focused.value), _defineProperty(_classNames, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), _classNames));
      var mentionsProps = _objectSpread(_objectSpread(_objectSpread({
        prefixCls: prefixCls.value
      }, otherProps), {}, {
        disabled: disabled,
        direction: direction.value,
        filterOption: props.filterOption,
        getPopupContainer: getPopupContainer,
        options: props.options || getOptions(),
        class: mergedClassName
      }, otherAttrs), {}, {
        rows: rows,
        onChange: handleChange,
        onSelect: handleSelect,
        onFocus: handleFocus,
        onBlur: handleBlur,
        ref: vcMentions,
        value: value.value,
        id: id
      });
      return _createVNode(VcMentions, mentionsProps, {
        notFoundContent: getNotFoundContent,
        option: slots.option
      });
    };
  }
});
/* istanbul ignore next */
export var MentionsOption = defineComponent(_objectSpread(_objectSpread({
  compatConfig: {
    MODE: 3
  }
}, Option), {}, {
  name: 'AMentionsOption',
  props: optionProps
}));
export default _extends(Mentions, {
  Option: MentionsOption,
  getMentions: getMentions,
  install: function install(app) {
    app.component(Mentions.name, Mentions);
    app.component(MentionsOption.name, MentionsOption);
    return app;
  }
});