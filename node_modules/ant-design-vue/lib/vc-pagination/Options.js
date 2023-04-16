"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _KeyCode = _interopRequireDefault(require("./KeyCode"));
var _antInputDirective = _interopRequireDefault(require("../_util/antInputDirective"));
var _default2 = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  props: {
    disabled: {
      type: Boolean,
      default: undefined
    },
    changeSize: Function,
    quickGo: Function,
    selectComponentClass: _vueTypes.default.any,
    current: Number,
    pageSizeOptions: _vueTypes.default.array.def(['10', '20', '50', '100']),
    pageSize: Number,
    buildOptionText: Function,
    locale: _vueTypes.default.object,
    rootPrefixCls: String,
    selectPrefixCls: String,
    goButton: _vueTypes.default.any
  },
  setup: function setup(props) {
    var goInputText = (0, _vue.ref)('');
    var validValue = (0, _vue.computed)(function () {
      return !goInputText.value || isNaN(goInputText.value) ? undefined : Number(goInputText.value);
    });
    var defaultBuildOptionText = function defaultBuildOptionText(opt) {
      return "".concat(opt.value, " ").concat(props.locale.items_per_page);
    };
    var handleChange = function handleChange(e) {
      var _e$target = e.target,
        value = _e$target.value,
        composing = _e$target.composing;
      if (e.isComposing || composing || goInputText.value === value) return;
      goInputText.value = value;
    };
    var handleBlur = function handleBlur(e) {
      var goButton = props.goButton,
        quickGo = props.quickGo,
        rootPrefixCls = props.rootPrefixCls;
      if (goButton || goInputText.value === '') {
        return;
      }
      if (e.relatedTarget && (e.relatedTarget.className.indexOf("".concat(rootPrefixCls, "-item-link")) >= 0 || e.relatedTarget.className.indexOf("".concat(rootPrefixCls, "-item")) >= 0)) {
        goInputText.value = '';
        return;
      } else {
        quickGo(validValue.value);
        goInputText.value = '';
      }
    };
    var go = function go(e) {
      if (goInputText.value === '') {
        return;
      }
      if (e.keyCode === _KeyCode.default.ENTER || e.type === 'click') {
        // https://github.com/vueComponent/ant-design-vue/issues/1316
        props.quickGo(validValue.value);
        goInputText.value = '';
      }
    };
    var pageSizeOptions = (0, _vue.computed)(function () {
      var pageSize = props.pageSize,
        pageSizeOptions = props.pageSizeOptions;
      if (pageSizeOptions.some(function (option) {
        return option.toString() === pageSize.toString();
      })) {
        return pageSizeOptions;
      }
      return pageSizeOptions.concat([pageSize.toString()]).sort(function (a, b) {
        // eslint-disable-next-line no-restricted-globals
        var numberA = isNaN(Number(a)) ? 0 : Number(a);
        // eslint-disable-next-line no-restricted-globals
        var numberB = isNaN(Number(b)) ? 0 : Number(b);
        return numberA - numberB;
      });
    });
    return function () {
      var rootPrefixCls = props.rootPrefixCls,
        locale = props.locale,
        changeSize = props.changeSize,
        quickGo = props.quickGo,
        goButton = props.goButton,
        Select = props.selectComponentClass,
        selectPrefixCls = props.selectPrefixCls,
        pageSize = props.pageSize,
        disabled = props.disabled;
      var prefixCls = "".concat(rootPrefixCls, "-options");
      var changeSelect = null;
      var goInput = null;
      var gotoButton = null;
      if (!changeSize && !quickGo) {
        return null;
      }
      if (changeSize && Select) {
        var buildOptionText = props.buildOptionText || defaultBuildOptionText;
        var options = pageSizeOptions.value.map(function (opt, i) {
          return (0, _vue.createVNode)(Select.Option, {
            "key": i,
            "value": opt
          }, {
            default: function _default() {
              return [buildOptionText({
                value: opt
              })];
            }
          });
        });
        changeSelect = (0, _vue.createVNode)(Select, {
          "disabled": disabled,
          "prefixCls": selectPrefixCls,
          "showSearch": false,
          "class": "".concat(prefixCls, "-size-changer"),
          "optionLabelProp": "children",
          "value": (pageSize || pageSizeOptions.value[0]).toString(),
          "onChange": function onChange(value) {
            return changeSize(Number(value));
          },
          "getPopupContainer": function getPopupContainer(triggerNode) {
            return triggerNode.parentNode;
          }
        }, {
          default: function _default() {
            return [options];
          }
        });
      }
      if (quickGo) {
        if (goButton) {
          gotoButton = typeof goButton === 'boolean' ? (0, _vue.createVNode)("button", {
            "type": "button",
            "onClick": go,
            "onKeyup": go,
            "disabled": disabled,
            "class": "".concat(prefixCls, "-quick-jumper-button")
          }, [locale.jump_to_confirm]) : (0, _vue.createVNode)("span", {
            "onClick": go,
            "onKeyup": go
          }, [goButton]);
        }
        goInput = (0, _vue.createVNode)("div", {
          "class": "".concat(prefixCls, "-quick-jumper")
        }, [locale.jump_to, (0, _vue.withDirectives)((0, _vue.createVNode)("input", {
          "disabled": disabled,
          "type": "text",
          "value": goInputText.value,
          "onInput": handleChange,
          "onChange": handleChange,
          "onKeyup": go,
          "onBlur": handleBlur
        }, null), [[_antInputDirective.default]]), locale.page, gotoButton]);
      }
      return (0, _vue.createVNode)("li", {
        "class": "".concat(prefixCls)
      }, [changeSelect, goInput]);
    };
  }
});
exports.default = _default2;