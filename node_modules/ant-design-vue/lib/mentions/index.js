"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mentionsProps = exports.default = exports.MentionsOption = void 0;
var _vue = require("vue");
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _classNames2 = _interopRequireDefault(require("../_util/classNames"));
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _vcMentions = _interopRequireWildcard(require("../vc-mentions"));
var _mentionsProps = require("../vc-mentions/src/mentionsProps");
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var _propsUtil = require("../_util/props-util");
var _FormItemContext = require("../form/FormItemContext");
var _omit = _interopRequireDefault(require("../_util/omit"));
var _Option = require("../vc-mentions/src/Option");
var _excluded = ["disabled", "getPopupContainer", "rows", "id"],
  _excluded2 = ["class"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
var mentionsProps = function mentionsProps() {
  return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _mentionsProps.mentionsProps), {}, {
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
    notFoundContent: _vueTypes.default.any,
    defaultValue: String,
    id: String
  });
};
exports.mentionsProps = mentionsProps;
var Mentions = (0, _vue.defineComponent)({
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
    var _useConfigInject = (0, _useConfigInject2.default)('mentions', props),
      prefixCls = _useConfigInject.prefixCls,
      renderEmpty = _useConfigInject.renderEmpty,
      direction = _useConfigInject.direction;
    var focused = (0, _vue.ref)(false);
    var vcMentions = (0, _vue.ref)(null);
    var value = (0, _vue.ref)((_ref2 = (_props$value = props.value) !== null && _props$value !== void 0 ? _props$value : props.defaultValue) !== null && _ref2 !== void 0 ? _ref2 : '');
    var formItemContext = (0, _FormItemContext.useInjectFormItemContext)();
    (0, _vue.watch)(function () {
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
      return (0, _propsUtil.flattenChildren)(((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)) || []).map(function (item) {
        var _item$children, _item$children$defaul;
        return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _propsUtil.getOptionProps)(item)), {}, {
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
        restProps = (0, _objectWithoutProperties2.default)(props, _excluded);
      var className = attrs.class,
        otherAttrs = (0, _objectWithoutProperties2.default)(attrs, _excluded2);
      var otherProps = (0, _omit.default)(restProps, ['defaultValue', 'onUpdate:value', 'prefixCls']);
      var mergedClassName = (0, _classNames2.default)(className, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-disabled"), disabled), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-focused"), focused.value), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), _classNames));
      var mentionsProps = (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
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
      return (0, _vue.createVNode)(_vcMentions.default, mentionsProps, {
        notFoundContent: getNotFoundContent,
        option: slots.option
      });
    };
  }
});
/* istanbul ignore next */
var MentionsOption = (0, _vue.defineComponent)((0, _objectSpread2.default)((0, _objectSpread2.default)({
  compatConfig: {
    MODE: 3
  }
}, _vcMentions.Option), {}, {
  name: 'AMentionsOption',
  props: _Option.optionProps
}));
exports.MentionsOption = MentionsOption;
var _default = (0, _extends2.default)(Mentions, {
  Option: MentionsOption,
  getMentions: getMentions,
  install: function install(app) {
    app.component(Mentions.name, Mentions);
    app.component(MentionsOption.name, MentionsOption);
    return app;
  }
});
exports.default = _default;