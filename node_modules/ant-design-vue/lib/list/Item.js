"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listItemProps = exports.default = void 0;
var _vue = require("vue");
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _classNames2 = _interopRequireDefault(require("../_util/classNames"));
var _propsUtil = require("../_util/props-util");
var _grid = require("../grid");
var _vnode = require("../_util/vnode");
var _ItemMeta = _interopRequireDefault(require("./ItemMeta"));
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var _contextKey = require("./contextKey");
var _excluded = ["class"];
var listItemProps = function listItemProps() {
  return {
    prefixCls: String,
    extra: _vueTypes.default.any,
    actions: _vueTypes.default.array,
    grid: Object,
    colStyle: {
      type: Object,
      default: undefined
    }
  };
};
exports.listItemProps = listItemProps;
var _default2 = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'AListItem',
  inheritAttrs: false,
  Meta: _ItemMeta.default,
  props: listItemProps(),
  slots: ['actions', 'extra'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      attrs = _ref.attrs;
    var _inject = (0, _vue.inject)(_contextKey.ListContextKey, {
        grid: (0, _vue.ref)(),
        itemLayout: (0, _vue.ref)()
      }),
      itemLayout = _inject.itemLayout,
      grid = _inject.grid;
    var _useConfigInject = (0, _useConfigInject2.default)('list', props),
      prefixCls = _useConfigInject.prefixCls;
    var isItemContainsTextNodeAndNotSingular = function isItemContainsTextNodeAndNotSingular() {
      var _slots$default;
      var children = ((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)) || [];
      var result;
      children.forEach(function (element) {
        if ((0, _propsUtil.isStringElement)(element) && !(0, _propsUtil.isEmptyElement)(element)) {
          result = true;
        }
      });
      return result && children.length > 1;
    };
    var isFlexMode = function isFlexMode() {
      var _props$extra, _slots$extra;
      var extra = (_props$extra = props.extra) !== null && _props$extra !== void 0 ? _props$extra : (_slots$extra = slots.extra) === null || _slots$extra === void 0 ? void 0 : _slots$extra.call(slots);
      if (itemLayout.value === 'vertical') {
        return !!extra;
      }
      return !isItemContainsTextNodeAndNotSingular();
    };
    return function () {
      var _props$extra2, _slots$extra2, _slots$default2, _props$actions, _slots$actions;
      var className = attrs.class,
        restAttrs = (0, _objectWithoutProperties2.default)(attrs, _excluded);
      var pre = prefixCls.value;
      var extra = (_props$extra2 = props.extra) !== null && _props$extra2 !== void 0 ? _props$extra2 : (_slots$extra2 = slots.extra) === null || _slots$extra2 === void 0 ? void 0 : _slots$extra2.call(slots);
      var children = (_slots$default2 = slots.default) === null || _slots$default2 === void 0 ? void 0 : _slots$default2.call(slots);
      var actions = (_props$actions = props.actions) !== null && _props$actions !== void 0 ? _props$actions : (0, _propsUtil.flattenChildren)((_slots$actions = slots.actions) === null || _slots$actions === void 0 ? void 0 : _slots$actions.call(slots));
      actions = actions && !Array.isArray(actions) ? [actions] : actions;
      var actionsContent = actions && actions.length > 0 && (0, _vue.createVNode)("ul", {
        "class": "".concat(pre, "-item-action"),
        "key": "actions"
      }, [actions.map(function (action, i) {
        return (0, _vue.createVNode)("li", {
          "key": "".concat(pre, "-item-action-").concat(i)
        }, [action, i !== actions.length - 1 && (0, _vue.createVNode)("em", {
          "class": "".concat(pre, "-item-action-split")
        }, null)]);
      })]);
      var Element = grid.value ? 'div' : 'li';
      var itemChildren = (0, _vue.createVNode)(Element, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, restAttrs), {}, {
        "class": (0, _classNames2.default)("".concat(pre, "-item"), (0, _defineProperty2.default)({}, "".concat(pre, "-item-no-flex"), !isFlexMode()), className)
      }), {
        default: function _default() {
          return [itemLayout.value === 'vertical' && extra ? [(0, _vue.createVNode)("div", {
            "class": "".concat(pre, "-item-main"),
            "key": "content"
          }, [children, actionsContent]), (0, _vue.createVNode)("div", {
            "class": "".concat(pre, "-item-extra"),
            "key": "extra"
          }, [extra])] : [children, actionsContent, (0, _vnode.cloneElement)(extra, {
            key: 'extra'
          })]];
        }
      });
      return grid.value ? (0, _vue.createVNode)(_grid.Col, {
        "flex": 1,
        "style": props.colStyle
      }, {
        default: function _default() {
          return [itemChildren];
        }
      }) : itemChildren;
    };
  }
});
exports.default = _default2;