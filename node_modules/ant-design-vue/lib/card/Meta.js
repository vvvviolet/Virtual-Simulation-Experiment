"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.cardMetaProps = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _propsUtil = require("../_util/props-util");
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var cardMetaProps = function cardMetaProps() {
  return {
    prefixCls: String,
    title: _vueTypes.default.any,
    description: _vueTypes.default.any,
    avatar: _vueTypes.default.any
  };
};
exports.cardMetaProps = cardMetaProps;
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'ACardMeta',
  props: cardMetaProps(),
  slots: ['title', 'description', 'avatar'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var _useConfigInject = (0, _useConfigInject2.default)('card', props),
      prefixCls = _useConfigInject.prefixCls;
    return function () {
      var classString = (0, _defineProperty2.default)({}, "".concat(prefixCls.value, "-meta"), true);
      var avatar = (0, _propsUtil.getPropsSlot)(slots, props, 'avatar');
      var title = (0, _propsUtil.getPropsSlot)(slots, props, 'title');
      var description = (0, _propsUtil.getPropsSlot)(slots, props, 'description');
      var avatarDom = avatar ? (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls.value, "-meta-avatar")
      }, [avatar]) : null;
      var titleDom = title ? (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls.value, "-meta-title")
      }, [title]) : null;
      var descriptionDom = description ? (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls.value, "-meta-description")
      }, [description]) : null;
      var MetaDetail = titleDom || descriptionDom ? (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls.value, "-meta-detail")
      }, [titleDom, descriptionDom]) : null;
      return (0, _vue.createVNode)("div", {
        "class": classString
      }, [avatarDom, MetaDetail]);
    };
  }
});
exports.default = _default;