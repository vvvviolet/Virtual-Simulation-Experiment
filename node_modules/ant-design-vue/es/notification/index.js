import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import Notification from '../vc-notification';
import CheckCircleOutlined from "@ant-design/icons-vue/es/icons/CheckCircleOutlined";
import InfoCircleOutlined from "@ant-design/icons-vue/es/icons/InfoCircleOutlined";
import CloseCircleOutlined from "@ant-design/icons-vue/es/icons/CloseCircleOutlined";
import ExclamationCircleOutlined from "@ant-design/icons-vue/es/icons/ExclamationCircleOutlined";
import CloseOutlined from "@ant-design/icons-vue/es/icons/CloseOutlined";
import { renderHelper } from '../_util/util';
import { globalConfig } from '../config-provider';
import classNames from '../_util/classNames';
var notificationInstance = {};
var defaultDuration = 4.5;
var defaultTop = '24px';
var defaultBottom = '24px';
var defaultPrefixCls = '';
var defaultPlacement = 'topRight';
var defaultGetContainer = function defaultGetContainer() {
  return document.body;
};
var defaultCloseIcon = null;
var rtl = false;
var maxCount;
function setNotificationConfig(options) {
  var duration = options.duration,
    placement = options.placement,
    bottom = options.bottom,
    top = options.top,
    getContainer = options.getContainer,
    closeIcon = options.closeIcon,
    prefixCls = options.prefixCls;
  if (prefixCls !== undefined) {
    defaultPrefixCls = prefixCls;
  }
  if (duration !== undefined) {
    defaultDuration = duration;
  }
  if (placement !== undefined) {
    defaultPlacement = placement;
  }
  if (bottom !== undefined) {
    defaultBottom = typeof bottom === 'number' ? "".concat(bottom, "px") : bottom;
  }
  if (top !== undefined) {
    defaultTop = typeof top === 'number' ? "".concat(top, "px") : top;
  }
  if (getContainer !== undefined) {
    defaultGetContainer = getContainer;
  }
  if (closeIcon !== undefined) {
    defaultCloseIcon = closeIcon;
  }
  if (options.rtl !== undefined) {
    rtl = options.rtl;
  }
  if (options.maxCount !== undefined) {
    maxCount = options.maxCount;
  }
}
function getPlacementStyle(placement) {
  var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultTop;
  var bottom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultBottom;
  var style;
  switch (placement) {
    case 'topLeft':
      style = {
        left: '0px',
        top: top,
        bottom: 'auto'
      };
      break;
    case 'topRight':
      style = {
        right: '0px',
        top: top,
        bottom: 'auto'
      };
      break;
    case 'bottomLeft':
      style = {
        left: '0px',
        top: 'auto',
        bottom: bottom
      };
      break;
    default:
      style = {
        right: '0px',
        top: 'auto',
        bottom: bottom
      };
      break;
  }
  return style;
}
function getNotificationInstance(_ref, callback) {
  var customizePrefixCls = _ref.prefixCls,
    _ref$placement = _ref.placement,
    placement = _ref$placement === void 0 ? defaultPlacement : _ref$placement,
    _ref$getContainer = _ref.getContainer,
    getContainer = _ref$getContainer === void 0 ? defaultGetContainer : _ref$getContainer,
    top = _ref.top,
    bottom = _ref.bottom,
    _ref$closeIcon = _ref.closeIcon,
    _closeIcon = _ref$closeIcon === void 0 ? defaultCloseIcon : _ref$closeIcon,
    appContext = _ref.appContext;
  var _globalConfig = globalConfig(),
    getPrefixCls = _globalConfig.getPrefixCls;
  var prefixCls = getPrefixCls('notification', customizePrefixCls || defaultPrefixCls);
  var cacheKey = "".concat(prefixCls, "-").concat(placement, "-").concat(rtl);
  var cacheInstance = notificationInstance[cacheKey];
  if (cacheInstance) {
    Promise.resolve(cacheInstance).then(function (instance) {
      callback(instance);
    });
    return;
  }
  var notificationClass = classNames("".concat(prefixCls, "-").concat(placement), _defineProperty({}, "".concat(prefixCls, "-rtl"), rtl === true));
  Notification.newInstance({
    name: 'notification',
    prefixCls: customizePrefixCls || defaultPrefixCls,
    class: notificationClass,
    style: getPlacementStyle(placement, top, bottom),
    appContext: appContext,
    getContainer: getContainer,
    closeIcon: function closeIcon(_ref2) {
      var prefixCls = _ref2.prefixCls;
      var closeIconToRender = _createVNode("span", {
        "class": "".concat(prefixCls, "-close-x")
      }, [renderHelper(_closeIcon, {}, _createVNode(CloseOutlined, {
        "class": "".concat(prefixCls, "-close-icon")
      }, null))]);
      return closeIconToRender;
    },
    maxCount: maxCount,
    hasTransitionName: true
  }, function (notification) {
    notificationInstance[cacheKey] = notification;
    callback(notification);
  });
}
var typeToIcon = {
  success: CheckCircleOutlined,
  info: InfoCircleOutlined,
  error: CloseCircleOutlined,
  warning: ExclamationCircleOutlined
};
function notice(args) {
  var icon = args.icon,
    type = args.type,
    description = args.description,
    message = args.message,
    btn = args.btn;
  var duration = args.duration === undefined ? defaultDuration : args.duration;
  getNotificationInstance(args, function (notification) {
    notification.notice({
      content: function content(_ref3) {
        var outerPrefixCls = _ref3.prefixCls;
        var prefixCls = "".concat(outerPrefixCls, "-notice");
        var iconNode = null;
        if (icon) {
          iconNode = function iconNode() {
            return _createVNode("span", {
              "class": "".concat(prefixCls, "-icon")
            }, [renderHelper(icon)]);
          };
        } else if (type) {
          var Icon = typeToIcon[type];
          iconNode = function iconNode() {
            return _createVNode(Icon, {
              "class": "".concat(prefixCls, "-icon ").concat(prefixCls, "-icon-").concat(type)
            }, null);
          };
        }
        return _createVNode("div", {
          "class": iconNode ? "".concat(prefixCls, "-with-icon") : ''
        }, [iconNode && iconNode(), _createVNode("div", {
          "class": "".concat(prefixCls, "-message")
        }, [!description && iconNode ? _createVNode("span", {
          "class": "".concat(prefixCls, "-message-single-line-auto-margin")
        }, null) : null, renderHelper(message)]), _createVNode("div", {
          "class": "".concat(prefixCls, "-description")
        }, [renderHelper(description)]), btn ? _createVNode("span", {
          "class": "".concat(prefixCls, "-btn")
        }, [renderHelper(btn)]) : null]);
      },
      duration: duration,
      closable: true,
      onClose: args.onClose,
      onClick: args.onClick,
      key: args.key,
      style: args.style || {},
      class: args.class
    });
  });
}
var api = {
  open: notice,
  close: function close(key) {
    Object.keys(notificationInstance).forEach(function (cacheKey) {
      return Promise.resolve(notificationInstance[cacheKey]).then(function (instance) {
        instance.removeNotice(key);
      });
    });
  },
  config: setNotificationConfig,
  destroy: function destroy() {
    Object.keys(notificationInstance).forEach(function (cacheKey) {
      Promise.resolve(notificationInstance[cacheKey]).then(function (instance) {
        instance.destroy();
      });
      delete notificationInstance[cacheKey]; // lgtm[js/missing-await]
    });
  }
};

var iconTypes = ['success', 'info', 'warning', 'error'];
iconTypes.forEach(function (type) {
  api[type] = function (args) {
    return api.open(_objectSpread(_objectSpread({}, args), {}, {
      type: type
    }));
  };
});
api.warn = api.warning;
/** @private test Only function. Not work on production */
export var getInstance = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(cacheKey) {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", process.env.NODE_ENV === 'test' ? notificationInstance[cacheKey] : null);
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getInstance(_x) {
    return _ref4.apply(this, arguments);
  };
}();
export default api;