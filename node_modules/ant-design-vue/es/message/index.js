import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import Notification from '../vc-notification';
import LoadingOutlined from "@ant-design/icons-vue/es/icons/LoadingOutlined";
import ExclamationCircleFilled from "@ant-design/icons-vue/es/icons/ExclamationCircleFilled";
import CloseCircleFilled from "@ant-design/icons-vue/es/icons/CloseCircleFilled";
import CheckCircleFilled from "@ant-design/icons-vue/es/icons/CheckCircleFilled";
import InfoCircleFilled from "@ant-design/icons-vue/es/icons/InfoCircleFilled";
import classNames from '../_util/classNames';
var defaultDuration = 3;
var defaultTop;
var messageInstance;
var key = 1;
var localPrefixCls = '';
var transitionName = 'move-up';
var hasTransitionName = false;
var getContainer = function getContainer() {
  return document.body;
};
var maxCount;
var rtl = false;
export function getKeyThenIncreaseKey() {
  return key++;
}
function setMessageConfig(options) {
  if (options.top !== undefined) {
    defaultTop = options.top;
    messageInstance = null; // delete messageInstance for new defaultTop
  }

  if (options.duration !== undefined) {
    defaultDuration = options.duration;
  }
  if (options.prefixCls !== undefined) {
    localPrefixCls = options.prefixCls;
  }
  if (options.getContainer !== undefined) {
    getContainer = options.getContainer;
    messageInstance = null; // delete messageInstance for new getContainer
  }

  if (options.transitionName !== undefined) {
    transitionName = options.transitionName;
    messageInstance = null; // delete messageInstance for new transitionName
    hasTransitionName = true;
  }
  if (options.maxCount !== undefined) {
    maxCount = options.maxCount;
    messageInstance = null;
  }
  if (options.rtl !== undefined) {
    rtl = options.rtl;
  }
}
function getMessageInstance(args, callback) {
  if (messageInstance) {
    callback(messageInstance);
    return;
  }
  Notification.newInstance({
    appContext: args.appContext,
    prefixCls: args.prefixCls || localPrefixCls,
    rootPrefixCls: args.rootPrefixCls,
    transitionName: transitionName,
    hasTransitionName: hasTransitionName,
    style: {
      top: defaultTop
    },
    getContainer: getContainer || args.getPopupContainer,
    maxCount: maxCount,
    name: 'message'
  }, function (instance) {
    if (messageInstance) {
      callback(messageInstance);
      return;
    }
    messageInstance = instance;
    callback(instance);
  });
}
var typeToIcon = {
  info: InfoCircleFilled,
  success: CheckCircleFilled,
  error: CloseCircleFilled,
  warning: ExclamationCircleFilled,
  loading: LoadingOutlined
};
function notice(args) {
  var duration = args.duration !== undefined ? args.duration : defaultDuration;
  var target = args.key || getKeyThenIncreaseKey();
  var closePromise = new Promise(function (resolve) {
    var callback = function callback() {
      if (typeof args.onClose === 'function') {
        args.onClose();
      }
      return resolve(true);
    };
    getMessageInstance(args, function (instance) {
      instance.notice({
        key: target,
        duration: duration,
        style: args.style || {},
        class: args.class,
        content: function content(_ref) {
          var _classNames;
          var prefixCls = _ref.prefixCls;
          var Icon = typeToIcon[args.type];
          var iconNode = Icon ? _createVNode(Icon, null, null) : '';
          var messageClass = classNames("".concat(prefixCls, "-custom-content"), (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-").concat(args.type), args.type), _defineProperty(_classNames, "".concat(prefixCls, "-rtl"), rtl === true), _classNames));
          return _createVNode("div", {
            "class": messageClass
          }, [typeof args.icon === 'function' ? args.icon() : args.icon || iconNode, _createVNode("span", null, [typeof args.content === 'function' ? args.content() : args.content])]);
        },
        onClose: callback,
        onClick: args.onClick
      });
    });
  });
  var result = function result() {
    if (messageInstance) {
      messageInstance.removeNotice(target);
    }
  };
  result.then = function (filled, rejected) {
    return closePromise.then(filled, rejected);
  };
  result.promise = closePromise;
  return result;
}
function isArgsProps(content) {
  return Object.prototype.toString.call(content) === '[object Object]' && !!content.content;
}
var api = {
  open: notice,
  config: setMessageConfig,
  destroy: function destroy(messageKey) {
    if (messageInstance) {
      if (messageKey) {
        var _messageInstance = messageInstance,
          removeNotice = _messageInstance.removeNotice;
        removeNotice(messageKey);
      } else {
        var _messageInstance2 = messageInstance,
          destroy = _messageInstance2.destroy;
        destroy();
        messageInstance = null;
      }
    }
  }
};
export function attachTypeApi(originalApi, type) {
  originalApi[type] = function (content, duration, onClose) {
    if (isArgsProps(content)) {
      return originalApi.open(_objectSpread(_objectSpread({}, content), {}, {
        type: type
      }));
    }
    if (typeof duration === 'function') {
      onClose = duration;
      duration = undefined;
    }
    return originalApi.open({
      content: content,
      duration: duration,
      type: type,
      onClose: onClose
    });
  };
}
['success', 'info', 'warning', 'error', 'loading'].forEach(function (type) {
  return attachTypeApi(api, type);
});
api.warn = api.warning;
/** @private test Only function. Not work on production */
export var getInstance = function getInstance() {
  return process.env.NODE_ENV === 'test' ? messageInstance : null;
};
export default api;