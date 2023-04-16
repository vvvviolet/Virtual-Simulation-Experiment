"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.withConfirm = withConfirm;
exports.withError = withError;
exports.withInfo = withInfo;
exports.withSuccess = withSuccess;
exports.withWarn = withWarn;
var _vue = require("vue");
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _ConfirmDialog = _interopRequireDefault(require("./ConfirmDialog"));
var _Modal = require("./Modal");
var _configProvider = _interopRequireWildcard(require("../config-provider"));
var _omit = _interopRequireDefault(require("../_util/omit"));
var _InfoCircleOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/InfoCircleOutlined"));
var _CheckCircleOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CheckCircleOutlined"));
var _CloseCircleOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CloseCircleOutlined"));
var _ExclamationCircleOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/ExclamationCircleOutlined"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var confirm = function confirm(config) {
  var container = document.createDocumentFragment();
  var currentConfig = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _omit.default)(config, ['parentContext', 'appContext'])), {}, {
    close: close,
    visible: true
  });
  var confirmDialogInstance = null;
  function destroy() {
    if (confirmDialogInstance) {
      // destroy
      (0, _vue.render)(null, container);
      confirmDialogInstance.component.update();
      confirmDialogInstance = null;
    }
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var triggerCancel = args.some(function (param) {
      return param && param.triggerCancel;
    });
    if (config.onCancel && triggerCancel) {
      config.onCancel.apply(config, args);
    }
    for (var i = 0; i < _Modal.destroyFns.length; i++) {
      var fn = _Modal.destroyFns[i];
      if (fn === close) {
        _Modal.destroyFns.splice(i, 1);
        break;
      }
    }
  }
  function close() {
    var _this = this;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    currentConfig = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, currentConfig), {}, {
      visible: false,
      afterClose: function afterClose() {
        if (typeof config.afterClose === 'function') {
          config.afterClose();
        }
        destroy.apply(_this, args);
      }
    });
    update(currentConfig);
  }
  function update(configUpdate) {
    if (typeof configUpdate === 'function') {
      currentConfig = configUpdate(currentConfig);
    } else {
      currentConfig = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, currentConfig), configUpdate);
    }
    if (confirmDialogInstance) {
      (0, _extends2.default)(confirmDialogInstance.component.props, currentConfig);
      confirmDialogInstance.component.update();
    }
  }
  var Wrapper = function Wrapper(p) {
    var global = _configProvider.globalConfigForApi;
    var rootPrefixCls = global.prefixCls;
    var prefixCls = p.prefixCls || "".concat(rootPrefixCls, "-modal");
    return (0, _vue.createVNode)(_configProvider.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, global), {}, {
      "notUpdateGlobalConfig": true,
      "prefixCls": rootPrefixCls
    }), {
      default: function _default() {
        return [(0, _vue.createVNode)(_ConfirmDialog.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, p), {}, {
          "rootPrefixCls": rootPrefixCls,
          "prefixCls": prefixCls
        }), null)];
      }
    });
  };
  function render(props) {
    var vm = (0, _vue.createVNode)(Wrapper, (0, _objectSpread2.default)({}, props));
    vm.appContext = config.parentContext || config.appContext || vm.appContext;
    (0, _vue.render)(vm, container);
    return vm;
  }
  confirmDialogInstance = render(currentConfig);
  _Modal.destroyFns.push(close);
  return {
    destroy: close,
    update: update
  };
};
var _default2 = confirm;
exports.default = _default2;
function withWarn(props) {
  return (0, _objectSpread2.default)((0, _objectSpread2.default)({
    icon: function icon() {
      return (0, _vue.createVNode)(_ExclamationCircleOutlined.default, null, null);
    },
    okCancel: false
  }, props), {}, {
    type: 'warning'
  });
}
function withInfo(props) {
  return (0, _objectSpread2.default)((0, _objectSpread2.default)({
    icon: function icon() {
      return (0, _vue.createVNode)(_InfoCircleOutlined.default, null, null);
    },
    okCancel: false
  }, props), {}, {
    type: 'info'
  });
}
function withSuccess(props) {
  return (0, _objectSpread2.default)((0, _objectSpread2.default)({
    icon: function icon() {
      return (0, _vue.createVNode)(_CheckCircleOutlined.default, null, null);
    },
    okCancel: false
  }, props), {}, {
    type: 'success'
  });
}
function withError(props) {
  return (0, _objectSpread2.default)((0, _objectSpread2.default)({
    icon: function icon() {
      return (0, _vue.createVNode)(_CloseCircleOutlined.default, null, null);
    },
    okCancel: false
  }, props), {}, {
    type: 'error'
  });
}
function withConfirm(props) {
  return (0, _objectSpread2.default)((0, _objectSpread2.default)({
    icon: function icon() {
      return (0, _vue.createVNode)(_ExclamationCircleOutlined.default, null, null);
    },
    okCancel: true
  }, props), {}, {
    type: 'confirm'
  });
}