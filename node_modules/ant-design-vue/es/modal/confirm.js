import _extends from "@babel/runtime/helpers/esm/extends";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode } from "vue";
import { createVNode, render as vueRender } from 'vue';
import ConfirmDialog from './ConfirmDialog';
import { destroyFns } from './Modal';
import ConfigProvider, { globalConfigForApi } from '../config-provider';
import omit from '../_util/omit';
import InfoCircleOutlined from "@ant-design/icons-vue/es/icons/InfoCircleOutlined";
import CheckCircleOutlined from "@ant-design/icons-vue/es/icons/CheckCircleOutlined";
import CloseCircleOutlined from "@ant-design/icons-vue/es/icons/CloseCircleOutlined";
import ExclamationCircleOutlined from "@ant-design/icons-vue/es/icons/ExclamationCircleOutlined";
var confirm = function confirm(config) {
  var container = document.createDocumentFragment();
  var currentConfig = _objectSpread(_objectSpread({}, omit(config, ['parentContext', 'appContext'])), {}, {
    close: close,
    visible: true
  });
  var confirmDialogInstance = null;
  function destroy() {
    if (confirmDialogInstance) {
      // destroy
      vueRender(null, container);
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
    for (var i = 0; i < destroyFns.length; i++) {
      var fn = destroyFns[i];
      if (fn === close) {
        destroyFns.splice(i, 1);
        break;
      }
    }
  }
  function close() {
    var _this = this;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    currentConfig = _objectSpread(_objectSpread({}, currentConfig), {}, {
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
      currentConfig = _objectSpread(_objectSpread({}, currentConfig), configUpdate);
    }
    if (confirmDialogInstance) {
      _extends(confirmDialogInstance.component.props, currentConfig);
      confirmDialogInstance.component.update();
    }
  }
  var Wrapper = function Wrapper(p) {
    var global = globalConfigForApi;
    var rootPrefixCls = global.prefixCls;
    var prefixCls = p.prefixCls || "".concat(rootPrefixCls, "-modal");
    return _createVNode(ConfigProvider, _objectSpread(_objectSpread({}, global), {}, {
      "notUpdateGlobalConfig": true,
      "prefixCls": rootPrefixCls
    }), {
      default: function _default() {
        return [_createVNode(ConfirmDialog, _objectSpread(_objectSpread({}, p), {}, {
          "rootPrefixCls": rootPrefixCls,
          "prefixCls": prefixCls
        }), null)];
      }
    });
  };
  function render(props) {
    var vm = createVNode(Wrapper, _objectSpread({}, props));
    vm.appContext = config.parentContext || config.appContext || vm.appContext;
    vueRender(vm, container);
    return vm;
  }
  confirmDialogInstance = render(currentConfig);
  destroyFns.push(close);
  return {
    destroy: close,
    update: update
  };
};
export default confirm;
export function withWarn(props) {
  return _objectSpread(_objectSpread({
    icon: function icon() {
      return _createVNode(ExclamationCircleOutlined, null, null);
    },
    okCancel: false
  }, props), {}, {
    type: 'warning'
  });
}
export function withInfo(props) {
  return _objectSpread(_objectSpread({
    icon: function icon() {
      return _createVNode(InfoCircleOutlined, null, null);
    },
    okCancel: false
  }, props), {}, {
    type: 'info'
  });
}
export function withSuccess(props) {
  return _objectSpread(_objectSpread({
    icon: function icon() {
      return _createVNode(CheckCircleOutlined, null, null);
    },
    okCancel: false
  }, props), {}, {
    type: 'success'
  });
}
export function withError(props) {
  return _objectSpread(_objectSpread({
    icon: function icon() {
      return _createVNode(CloseCircleOutlined, null, null);
    },
    okCancel: false
  }, props), {}, {
    type: 'error'
  });
}
export function withConfirm(props) {
  return _objectSpread(_objectSpread({
    icon: function icon() {
      return _createVNode(ExclamationCircleOutlined, null, null);
    },
    okCancel: true
  }, props), {}, {
    type: 'confirm'
  });
}