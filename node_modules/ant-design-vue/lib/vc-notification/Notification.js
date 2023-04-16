"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _transition = require("../_util/transition");
var _Notice = _interopRequireDefault(require("./Notice"));
var _configProvider = _interopRequireWildcard(require("../config-provider"));
var _excluded = ["name", "getContainer", "appContext", "prefixCls", "rootPrefixCls", "transitionName", "hasTransitionName"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var seed = 0;
var now = Date.now();
function getUuid() {
  var id = seed;
  seed += 1;
  return "rcNotification_".concat(now, "_").concat(id);
}
var Notification = (0, _vue.defineComponent)({
  name: 'Notification',
  inheritAttrs: false,
  props: ['prefixCls', 'transitionName', 'animation', 'maxCount', 'closeIcon'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      expose = _ref.expose,
      slots = _ref.slots;
    var hookRefs = new Map();
    var notices = (0, _vue.ref)([]);
    var transitionProps = (0, _vue.computed)(function () {
      var prefixCls = props.prefixCls,
        _props$animation = props.animation,
        animation = _props$animation === void 0 ? 'fade' : _props$animation;
      var name = props.transitionName;
      if (!name && animation) {
        name = "".concat(prefixCls, "-").concat(animation);
      }
      return (0, _transition.getTransitionGroupProps)(name);
    });
    var add = function add(originNotice, holderCallback) {
      var key = originNotice.key || getUuid();
      var notice = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, originNotice), {}, {
        key: key
      });
      var maxCount = props.maxCount;
      var noticeIndex = notices.value.map(function (v) {
        return v.notice.key;
      }).indexOf(key);
      var updatedNotices = notices.value.concat();
      if (noticeIndex !== -1) {
        updatedNotices.splice(noticeIndex, 1, {
          notice: notice,
          holderCallback: holderCallback
        });
      } else {
        if (maxCount && notices.value.length >= maxCount) {
          // XXX, use key of first item to update new added (let React to move exsiting
          // instead of remove and mount). Same key was used before for both a) external
          // manual control and b) internal react 'key' prop , which is not that good.
          // eslint-disable-next-line no-param-reassign
          // zombieJ: Not know why use `updateKey`. This makes Notice infinite loop in jest.
          // Change to `updateMark` for compare instead.
          // https://github.com/react-component/notification/commit/32299e6be396f94040bfa82517eea940db947ece
          notice.key = updatedNotices[0].notice.key;
          notice.updateMark = getUuid();
          // zombieJ: That's why. User may close by key directly.
          // We need record this but not re-render to avoid upper issue
          // https://github.com/react-component/notification/issues/129
          notice.userPassKey = key;
          updatedNotices.shift();
        }
        updatedNotices.push({
          notice: notice,
          holderCallback: holderCallback
        });
      }
      notices.value = updatedNotices;
    };
    var remove = function remove(removeKey) {
      notices.value = notices.value.filter(function (_ref2) {
        var _ref2$notice = _ref2.notice,
          key = _ref2$notice.key,
          userPassKey = _ref2$notice.userPassKey;
        var mergedKey = userPassKey || key;
        return mergedKey !== removeKey;
      });
    };
    expose({
      add: add,
      remove: remove,
      notices: notices
    });
    return function () {
      var _slots$closeIcon, _className;
      var prefixCls = props.prefixCls,
        _props$closeIcon = props.closeIcon,
        closeIcon = _props$closeIcon === void 0 ? (_slots$closeIcon = slots.closeIcon) === null || _slots$closeIcon === void 0 ? void 0 : _slots$closeIcon.call(slots, {
          prefixCls: prefixCls
        }) : _props$closeIcon;
      var noticeNodes = notices.value.map(function (_ref3, index) {
        var notice = _ref3.notice,
          holderCallback = _ref3.holderCallback;
        var updateMark = index === notices.value.length - 1 ? notice.updateMark : undefined;
        var key = notice.key,
          userPassKey = notice.userPassKey;
        var content = notice.content;
        var noticeProps = (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
          prefixCls: prefixCls,
          closeIcon: typeof closeIcon === 'function' ? closeIcon({
            prefixCls: prefixCls
          }) : closeIcon
        }, notice), notice.props), {}, {
          key: key,
          noticeKey: userPassKey || key,
          updateMark: updateMark,
          onClose: function onClose(noticeKey) {
            var _notice$onClose;
            remove(noticeKey);
            (_notice$onClose = notice.onClose) === null || _notice$onClose === void 0 ? void 0 : _notice$onClose.call(notice);
          },
          onClick: notice.onClick
        });
        if (holderCallback) {
          return (0, _vue.createVNode)("div", {
            "key": key,
            "class": "".concat(prefixCls, "-hook-holder"),
            "ref": function ref(div) {
              if (typeof key === 'undefined') {
                return;
              }
              if (div) {
                hookRefs.set(key, div);
                holderCallback(div, noticeProps);
              } else {
                hookRefs.delete(key);
              }
            }
          }, null);
        }
        return (0, _vue.createVNode)(_Notice.default, noticeProps, {
          default: function _default() {
            return [typeof content === 'function' ? content({
              prefixCls: prefixCls
            }) : content];
          }
        });
      });
      var className = (_className = {}, (0, _defineProperty2.default)(_className, prefixCls, 1), (0, _defineProperty2.default)(_className, attrs.class, !!attrs.class), _className);
      return (0, _vue.createVNode)("div", {
        "class": className,
        "style": attrs.style || {
          top: '65px',
          left: '50%'
        }
      }, [(0, _vue.createVNode)(_vue.TransitionGroup, (0, _objectSpread2.default)({
        "tag": "div"
      }, transitionProps.value), {
        default: function _default() {
          return [noticeNodes];
        }
      })]);
    };
  }
});
Notification.newInstance = function newNotificationInstance(properties, callback) {
  var _ref4 = properties || {},
    _ref4$name = _ref4.name,
    name = _ref4$name === void 0 ? 'notification' : _ref4$name,
    getContainer = _ref4.getContainer,
    appContext = _ref4.appContext,
    customizePrefixCls = _ref4.prefixCls,
    customRootPrefixCls = _ref4.rootPrefixCls,
    customTransitionName = _ref4.transitionName,
    hasTransitionName = _ref4.hasTransitionName,
    props = (0, _objectWithoutProperties2.default)(_ref4, _excluded);
  var div = document.createElement('div');
  if (getContainer) {
    var root = getContainer();
    root.appendChild(div);
  } else {
    document.body.appendChild(div);
  }
  var Wrapper = (0, _vue.defineComponent)({
    compatConfig: {
      MODE: 3
    },
    name: 'NotificationWrapper',
    setup: function setup(_props, _ref5) {
      var attrs = _ref5.attrs;
      var notiRef = (0, _vue.ref)();
      (0, _vue.onMounted)(function () {
        callback({
          notice: function notice(noticeProps) {
            var _notiRef$value;
            (_notiRef$value = notiRef.value) === null || _notiRef$value === void 0 ? void 0 : _notiRef$value.add(noticeProps);
          },
          removeNotice: function removeNotice(key) {
            var _notiRef$value2;
            (_notiRef$value2 = notiRef.value) === null || _notiRef$value2 === void 0 ? void 0 : _notiRef$value2.remove(key);
          },
          destroy: function destroy() {
            (0, _vue.render)(null, div);
            if (div.parentNode) {
              div.parentNode.removeChild(div);
            }
          },
          component: notiRef
        });
      });
      return function () {
        var global = _configProvider.globalConfigForApi;
        var prefixCls = global.getPrefixCls(name, customizePrefixCls);
        var rootPrefixCls = global.getRootPrefixCls(customRootPrefixCls, prefixCls);
        var transitionName = hasTransitionName ? customTransitionName : "".concat(rootPrefixCls, "-").concat(customTransitionName);
        return (0, _vue.createVNode)(_configProvider.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, global), {}, {
          "notUpdateGlobalConfig": true,
          "prefixCls": rootPrefixCls
        }), {
          default: function _default() {
            return [(0, _vue.createVNode)(Notification, (0, _objectSpread2.default)((0, _objectSpread2.default)({
              "ref": notiRef
            }, attrs), {}, {
              "prefixCls": prefixCls,
              "transitionName": transitionName
            }), null)];
          }
        });
      };
    }
  });
  var vm = (0, _vue.createVNode)(Wrapper, props);
  vm.appContext = appContext || vm.appContext;
  (0, _vue.render)(vm, div);
};
var _default2 = Notification;
exports.default = _default2;