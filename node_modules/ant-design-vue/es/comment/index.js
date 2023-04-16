import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import PropTypes from '../_util/vue-types';
import { flattenChildren } from '../_util/props-util';
import { withInstall } from '../_util/type';
import useConfigInject from '../_util/hooks/useConfigInject';
export var commentProps = function commentProps() {
  return {
    actions: Array,
    /** The element to display as the comment author. */
    author: PropTypes.any,
    /** The element to display as the comment avatar - generally an antd Avatar */
    avatar: PropTypes.any,
    /** The main content of the comment */
    content: PropTypes.any,
    /** Comment prefix defaults to '.ant-comment' */
    prefixCls: String,
    /** A datetime element containing the time to be displayed */
    datetime: PropTypes.any
  };
};
var Comment = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'AComment',
  props: commentProps(),
  slots: ['actions', 'author', 'avatar', 'content', 'datetime'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var _useConfigInject = useConfigInject('comment', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction;
    var renderNested = function renderNested(prefixCls, children) {
      return _createVNode("div", {
        "class": "".concat(prefixCls, "-nested")
      }, [children]);
    };
    var getAction = function getAction(actions) {
      if (!actions || !actions.length) {
        return null;
      }
      var actionList = actions.map(function (action, index) {
        return _createVNode("li", {
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
      var avatarDom = _createVNode("div", {
        "class": "".concat(pre, "-avatar")
      }, [typeof avatar === 'string' ? _createVNode("img", {
        "src": avatar,
        "alt": "comment-avatar"
      }, null) : avatar]);
      var actionDom = actions ? _createVNode("ul", {
        "class": "".concat(pre, "-actions")
      }, [getAction(Array.isArray(actions) ? actions : [actions])]) : null;
      var authorContent = _createVNode("div", {
        "class": "".concat(pre, "-content-author")
      }, [author && _createVNode("span", {
        "class": "".concat(pre, "-content-author-name")
      }, [author]), datetime && _createVNode("span", {
        "class": "".concat(pre, "-content-author-time")
      }, [datetime])]);
      var contentDom = _createVNode("div", {
        "class": "".concat(pre, "-content")
      }, [authorContent, _createVNode("div", {
        "class": "".concat(pre, "-content-detail")
      }, [content]), actionDom]);
      var comment = _createVNode("div", {
        "class": "".concat(pre, "-inner")
      }, [avatarDom, contentDom]);
      var children = flattenChildren((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
      return _createVNode("div", {
        "class": [pre, _defineProperty({}, "".concat(pre, "-rtl"), direction.value === 'rtl')]
      }, [comment, children && children.length ? renderNested(pre, children) : null]);
    };
  }
});
export default withInstall(Comment);