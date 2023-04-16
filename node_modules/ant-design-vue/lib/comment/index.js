"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.commentProps = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _propsUtil = require("../_util/props-util");
var _type = require("../_util/type");
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var commentProps = function commentProps() {
  return {
    actions: Array,
    /** The element to display as the comment author. */
    author: _vueTypes.default.any,
    /** The element to display as the comment avatar - generally an antd Avatar */
    avatar: _vueTypes.default.any,
    /** The main content of the comment */
    content: _vueTypes.default.any,
    /** Comment prefix defaults to '.ant-comment' */
    prefixCls: String,
    /** A datetime element containing the time to be displayed */
    datetime: _vueTypes.default.any
  };
};
exports.commentProps = commentProps;
var Comment = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'AComment',
  props: commentProps(),
  slots: ['actions', 'author', 'avatar', 'content', 'datetime'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var _useConfigInject = (0, _useConfigInject2.default)('comment', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction;
    var renderNested = function renderNested(prefixCls, children) {
      return (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls, "-nested")
      }, [children]);
    };
    var getAction = function getAction(actions) {
      if (!actions || !actions.length) {
        return null;
      }
      var actionList = actions.map(function (action, index) {
        return (0, _vue.createVNode)("li", {
          "key": "action-".concat(index)
        }, [action]);
      });
      return actionList;
    };
    return function () {
      var _props$actions, _slots$actions, _props$author, _slots$author, _props$avatar, _slots$avatar, _props$content, _slots$content, _props$datetime, _slots$datetime, _slots$default;
      var pre = prefixCls.value;
      var actions = (_props$actions = props.actions) !== null && _props$actions !== void 0 ? _props$actions : (_slots$actions = slots.actions) === null || _slots$actions === void 0 ? void 0 : _slots$actions.call(slots);
      var author = (_props$author = props.author) !== null && _props$author !== void 0 ? _props$author : (_slots$author = slots.author) === null || _slots$author === void 0 ? void 0 : _slots$author.call(slots);
      var avatar = (_props$avatar = props.avatar) !== null && _props$avatar !== void 0 ? _props$avatar : (_slots$avatar = slots.avatar) === null || _slots$avatar === void 0 ? void 0 : _slots$avatar.call(slots);
      var content = (_props$content = props.content) !== null && _props$content !== void 0 ? _props$content : (_slots$content = slots.content) === null || _slots$content === void 0 ? void 0 : _slots$content.call(slots);
      var datetime = (_props$datetime = props.datetime) !== null && _props$datetime !== void 0 ? _props$datetime : (_slots$datetime = slots.datetime) === null || _slots$datetime === void 0 ? void 0 : _slots$datetime.call(slots);
      var avatarDom = (0, _vue.createVNode)("div", {
        "class": "".concat(pre, "-avatar")
      }, [typeof avatar === 'string' ? (0, _vue.createVNode)("img", {
        "src": avatar,
        "alt": "comment-avatar"
      }, null) : avatar]);
      var actionDom = actions ? (0, _vue.createVNode)("ul", {
        "class": "".concat(pre, "-actions")
      }, [getAction(Array.isArray(actions) ? actions : [actions])]) : null;
      var authorContent = (0, _vue.createVNode)("div", {
        "class": "".concat(pre, "-content-author")
      }, [author && (0, _vue.createVNode)("span", {
        "class": "".concat(pre, "-content-author-name")
      }, [author]), datetime && (0, _vue.createVNode)("span", {
        "class": "".concat(pre, "-content-author-time")
      }, [datetime])]);
      var contentDom = (0, _vue.createVNode)("div", {
        "class": "".concat(pre, "-content")
      }, [authorContent, (0, _vue.createVNode)("div", {
        "class": "".concat(pre, "-content-detail")
      }, [content]), actionDom]);
      var comment = (0, _vue.createVNode)("div", {
        "class": "".concat(pre, "-inner")
      }, [avatarDom, contentDom]);
      var children = (0, _propsUtil.flattenChildren)((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
      return (0, _vue.createVNode)("div", {
        "class": [pre, (0, _defineProperty2.default)({}, "".concat(pre, "-rtl"), direction.value === 'rtl')]
      }, [comment, children && children.length ? renderNested(pre, children) : null]);
    };
  }
});
var _default = (0, _type.withInstall)(Comment);
exports.default = _default;