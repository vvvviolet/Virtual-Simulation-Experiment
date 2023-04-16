"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _LoadingOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/LoadingOutlined"));
var _CloseCircleFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CloseCircleFilled"));
var _CheckCircleFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CheckCircleFilled"));
var _ExclamationCircleFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/ExclamationCircleFilled"));
var _Col = _interopRequireDefault(require("../grid/Col"));
var _context = require("./context");
var _ErrorList = _interopRequireDefault(require("./ErrorList"));
var _classNames = _interopRequireDefault(require("../_util/classNames"));
var iconMap = {
  success: _CheckCircleFilled.default,
  warning: _ExclamationCircleFilled.default,
  error: _CloseCircleFilled.default,
  validating: _LoadingOutlined.default
};
var FormItemInput = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  slots: ['help', 'extra', 'errors'],
  inheritAttrs: false,
  props: ['prefixCls', 'errors', 'hasFeedback', 'onDomErrorVisibleChange', 'wrapperCol', 'help', 'extra', 'status'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var formContext = (0, _context.useInjectForm)();
    var contextWrapperCol = formContext.wrapperCol;
    // Pass to sub FormItem should not with col info
    var subFormContext = (0, _objectSpread2.default)({}, formContext);
    delete subFormContext.labelCol;
    delete subFormContext.wrapperCol;
    (0, _context.useProvideForm)(subFormContext);
    (0, _context.useProvideFormItemPrefix)({
      prefixCls: (0, _vue.computed)(function () {
        return props.prefixCls;
      }),
      status: (0, _vue.computed)(function () {
        return props.status;
      })
    });
    return function () {
      var _slots$help, _slots$errors, _slots$extra;
      var prefixCls = props.prefixCls,
        wrapperCol = props.wrapperCol,
        _props$help = props.help,
        help = _props$help === void 0 ? (_slots$help = slots.help) === null || _slots$help === void 0 ? void 0 : _slots$help.call(slots) : _props$help,
        _props$errors = props.errors,
        errors = _props$errors === void 0 ? (_slots$errors = slots.errors) === null || _slots$errors === void 0 ? void 0 : _slots$errors.call(slots) : _props$errors,
        hasFeedback = props.hasFeedback,
        status = props.status,
        _props$extra = props.extra,
        extra = _props$extra === void 0 ? (_slots$extra = slots.extra) === null || _slots$extra === void 0 ? void 0 : _slots$extra.call(slots) : _props$extra;
      var baseClassName = "".concat(prefixCls, "-item");
      var mergedWrapperCol = wrapperCol || (contextWrapperCol === null || contextWrapperCol === void 0 ? void 0 : contextWrapperCol.value) || {};
      var className = (0, _classNames.default)("".concat(baseClassName, "-control"), mergedWrapperCol.class);
      // Should provides additional icon if `hasFeedback`
      var IconNode = status && iconMap[status];
      return (0, _vue.createVNode)(_Col.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, mergedWrapperCol), {}, {
        "class": className
      }), {
        default: function _default() {
          var _slots$default;
          return (0, _vue.createVNode)(_vue.Fragment, null, [(0, _vue.createVNode)("div", {
            "class": "".concat(baseClassName, "-control-input")
          }, [(0, _vue.createVNode)("div", {
            "class": "".concat(baseClassName, "-control-input-content")
          }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]), hasFeedback && IconNode ? (0, _vue.createVNode)("span", {
            "class": "".concat(baseClassName, "-children-icon")
          }, [(0, _vue.createVNode)(IconNode, null, null)]) : null]), (0, _vue.createVNode)(_ErrorList.default, {
            "errors": errors,
            "help": help,
            "class": "".concat(baseClassName, "-explain-connected")
          }, null), extra ? (0, _vue.createVNode)("div", {
            "class": "".concat(baseClassName, "-extra")
          }, [extra]) : null]);
        }
      });
    };
  }
});
var _default2 = FormItemInput;
exports.default = _default2;