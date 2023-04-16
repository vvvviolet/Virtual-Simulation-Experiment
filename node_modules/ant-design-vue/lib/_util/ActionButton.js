"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _button = _interopRequireDefault(require("../button"));
var _buttonTypes = require("../button/buttonTypes");
var _useDestroyed = _interopRequireDefault(require("./hooks/useDestroyed"));
var actionButtonProps = {
  type: {
    type: String
  },
  actionFn: Function,
  close: Function,
  autofocus: Boolean,
  prefixCls: String,
  buttonProps: Object,
  emitEvent: Boolean,
  quitOnNullishReturnValue: Boolean
};
function isThenable(thing) {
  return !!(thing && !!thing.then);
}
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'ActionButton',
  props: actionButtonProps,
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var clickedRef = (0, _vue.ref)(false);
    var buttonRef = (0, _vue.ref)();
    var loading = (0, _vue.ref)(false);
    var timeoutId;
    var isDestroyed = (0, _useDestroyed.default)();
    (0, _vue.onMounted)(function () {
      if (props.autofocus) {
        timeoutId = setTimeout(function () {
          var _buttonRef$value$$el;
          return (_buttonRef$value$$el = buttonRef.value.$el) === null || _buttonRef$value$$el === void 0 ? void 0 : _buttonRef$value$$el.focus();
        });
      }
    });
    (0, _vue.onBeforeUnmount)(function () {
      clearTimeout(timeoutId);
    });
    var handlePromiseOnOk = function handlePromiseOnOk(returnValueOfOnOk) {
      var close = props.close;
      if (!isThenable(returnValueOfOnOk)) {
        return;
      }
      loading.value = true;
      returnValueOfOnOk.then(function () {
        if (!isDestroyed.value) {
          loading.value = false;
        }
        close.apply(void 0, arguments);
        clickedRef.value = false;
      }, function (e) {
        // Emit error when catch promise reject
        // eslint-disable-next-line no-console
        console.error(e);
        // See: https://github.com/ant-design/ant-design/issues/6183
        if (!isDestroyed.value) {
          loading.value = false;
        }
        clickedRef.value = false;
      });
    };
    var onClick = function onClick(e) {
      var actionFn = props.actionFn,
        _props$close = props.close,
        close = _props$close === void 0 ? function () {} : _props$close;
      if (clickedRef.value) {
        return;
      }
      clickedRef.value = true;
      if (!actionFn) {
        close();
        return;
      }
      var returnValueOfOnOk;
      if (props.emitEvent) {
        returnValueOfOnOk = actionFn(e);
        if (props.quitOnNullishReturnValue && !isThenable(returnValueOfOnOk)) {
          clickedRef.value = false;
          close(e);
          return;
        }
      } else if (actionFn.length) {
        returnValueOfOnOk = actionFn(close);
        // https://github.com/ant-design/ant-design/issues/23358
        clickedRef.value = false;
      } else {
        returnValueOfOnOk = actionFn();
        if (!returnValueOfOnOk) {
          close();
          return;
        }
      }
      handlePromiseOnOk(returnValueOfOnOk);
    };
    return function () {
      var type = props.type,
        prefixCls = props.prefixCls,
        buttonProps = props.buttonProps;
      return (0, _vue.createVNode)(_button.default, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _buttonTypes.convertLegacyProps)(type)), {}, {
        "onClick": onClick,
        "loading": loading.value,
        "prefixCls": prefixCls
      }, buttonProps), {}, {
        "ref": buttonRef
      }), slots);
    };
  }
});
exports.default = _default;