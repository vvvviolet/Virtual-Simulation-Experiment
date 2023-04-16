"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transferListItemProps = exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _classNames2 = _interopRequireDefault(require("../_util/classNames"));
var _DeleteOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/DeleteOutlined"));
var _default3 = _interopRequireDefault(require("../locale/default"));
var _checkbox = _interopRequireDefault(require("../checkbox"));
var _transButton = _interopRequireDefault(require("../_util/transButton"));
var _LocaleReceiver = _interopRequireDefault(require("../locale-provider/LocaleReceiver"));
function noop() {}
var transferListItemProps = {
  renderedText: _vueTypes.default.any,
  renderedEl: _vueTypes.default.any,
  item: _vueTypes.default.any,
  checked: {
    type: Boolean,
    default: undefined
  },
  prefixCls: String,
  disabled: {
    type: Boolean,
    default: undefined
  },
  showRemove: {
    type: Boolean,
    default: undefined
  },
  onClick: Function,
  onRemove: Function
};
exports.transferListItemProps = transferListItemProps;
var _default2 = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'ListItem',
  inheritAttrs: false,
  props: transferListItemProps,
  emits: ['click', 'remove'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    return function () {
      var _classNames;
      var renderedText = props.renderedText,
        renderedEl = props.renderedEl,
        item = props.item,
        checked = props.checked,
        disabled = props.disabled,
        prefixCls = props.prefixCls,
        showRemove = props.showRemove;
      var className = (0, _classNames2.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-content-item"), true), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-content-item-disabled"), disabled || item.disabled), _classNames));
      var title;
      if (typeof renderedText === 'string' || typeof renderedText === 'number') {
        title = String(renderedText);
      }
      return (0, _vue.createVNode)(_LocaleReceiver.default, {
        "componentName": "Transfer",
        "defaultLocale": _default3.default.Transfer
      }, {
        default: function _default(transferLocale) {
          var labelNode = (0, _vue.createVNode)("span", {
            "class": "".concat(prefixCls, "-content-item-text")
          }, [renderedEl]);
          if (showRemove) {
            return (0, _vue.createVNode)("li", {
              "class": className,
              "title": title
            }, [labelNode, (0, _vue.createVNode)(_transButton.default, {
              "disabled": disabled || item.disabled,
              "class": "".concat(prefixCls, "-content-item-remove"),
              "aria-label": transferLocale.remove,
              "onClick": function onClick() {
                emit('remove', item);
              }
            }, {
              default: function _default() {
                return [(0, _vue.createVNode)(_DeleteOutlined.default, null, null)];
              }
            })]);
          }
          return (0, _vue.createVNode)("li", {
            "class": className,
            "title": title,
            "onClick": disabled || item.disabled ? noop : function () {
              emit('click', item);
            }
          }, [(0, _vue.createVNode)(_checkbox.default, {
            "class": "".concat(prefixCls, "-checkbox"),
            "checked": checked,
            "disabled": disabled || item.disabled
          }, null), labelNode]);
        }
      });
    };
  }
});
exports.default = _default2;