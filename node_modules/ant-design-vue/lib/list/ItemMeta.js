"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listItemMetaProps = exports.default = void 0;
var _vue = require("vue");
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var listItemMetaProps = function listItemMetaProps() {
  return {
    avatar: _vueTypes.default.any,
    description: _vueTypes.default.any,
    prefixCls: String,
    title: _vueTypes.default.any
  };
};
exports.listItemMetaProps = listItemMetaProps;
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'AListItemMeta',
  props: listItemMetaProps(),
  displayName: 'AListItemMeta',
  __ANT_LIST_ITEM_META: true,
  slots: ['avatar', 'description', 'title'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var _useConfigInject = (0, _useConfigInject2.default)('list', props),
      prefixCls = _useConfigInject.prefixCls;
    return function () {
      var _props$title, _slots$title, _props$description, _slots$description, _props$avatar, _slots$avatar;
      var classString = "".concat(prefixCls.value, "-item-meta");
      var title = (_props$title = props.title) !== null && _props$title !== void 0 ? _props$title : (_slots$title = slots.title) === null || _slots$title === void 0 ? void 0 : _slots$title.call(slots);
      var description = (_props$description = props.description) !== null && _props$description !== void 0 ? _props$description : (_slots$description = slots.description) === null || _slots$description === void 0 ? void 0 : _slots$description.call(slots);
      var avatar = (_props$avatar = props.avatar) !== null && _props$avatar !== void 0 ? _props$avatar : (_slots$avatar = slots.avatar) === null || _slots$avatar === void 0 ? void 0 : _slots$avatar.call(slots);
      var content = (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls.value, "-item-meta-content")
      }, [title && (0, _vue.createVNode)("h4", {
        "class": "".concat(prefixCls.value, "-item-meta-title")
      }, [title]), description && (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls.value, "-item-meta-description")
      }, [description])]);
      return (0, _vue.createVNode)("div", {
        "class": classString
      }, [avatar && (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls.value, "-item-meta-avatar")
      }, [avatar]), (title || description) && content]);
    };
  }
});
exports.default = _default;