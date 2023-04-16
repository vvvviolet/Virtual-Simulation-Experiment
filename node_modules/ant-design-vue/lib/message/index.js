"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.attachTypeApi = attachTypeApi;
exports.getInstance = exports.default = void 0;
exports.getKeyThenIncreaseKey = getKeyThenIncreaseKey;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _vcNotification = _interopRequireDefault(require("../vc-notification"));
var _LoadingOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/LoadingOutlined"));
var _ExclamationCircleFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/ExclamationCircleFilled"));
var _CloseCircleFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CloseCircleFilled"));
var _CheckCircleFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/CheckCircleFilled"));
var _InfoCircleFilled = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/InfoCircleFilled"));
var _classNames2 = _interopRequireDefault(require("../_util/classNames"));
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
function getKeyThenIncreaseKey() {
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
  _vcNotification.default.newInstance({
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
  info: _InfoCircleFilled.default,
  success: _CheckCircleFilled.default,
  error: _CloseCircleFilled.default,
  warning: _ExclamationCircleFilled.default,
  loading: _LoadingOutlined.default
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
          var iconNode = Icon ? (0, _vue.createVNode)(Icon, null, null) : '';
          var messageClass = (0, _classNames2.default)("".concat(prefixCls, "-custom-content"), (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-").concat(args.type), args.type), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-rtl"), rtl === true), _classNames));
          return (0, _vue.createVNode)("div", {
            "class": messageClass
          }, [typeof args.icon === 'function' ? args.icon() : args.icon || iconNode, (0, _vue.createVNode)("span", null, [typeof args.content === 'function' ? args.content() : args.content])]);
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
function attachTypeApi(originalApi, type) {
  originalApi[type] = function (content, duration, onClose) {
    if (isArgsProps(content)) {
      return originalApi.open((0, _objectSpread2.default)((0, _objectSpread2.default)({}, content), {}, {
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
var getInstance = function getInstance() {
  return process.env.NODE_ENV === 'test' ? messageInstance : null;
};
exports.getInstance = getInstance;
var _default = api;
exports.default = _default;