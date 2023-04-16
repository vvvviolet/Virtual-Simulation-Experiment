import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import useConfigInject from '../_util/hooks/useConfigInject';
import PropTypes from '../_util/vue-types';
export var listItemMetaProps = function listItemMetaProps() {
  return {
    avatar: PropTypes.any,
    description: PropTypes.any,
    prefixCls: String,
    title: PropTypes.any
  };
};
export default defineComponent({
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
    var _useConfigInject = useConfigInject('list', props),
      prefixCls = _useConfigInject.prefixCls;
    return function () {
      var _props$title, _slots$title, _props$description, _slots$description, _props$avatar, _slots$avatar;
      var classString = "".concat(prefixCls.value, "-item-meta");
      var title = (_props$title = props.title) !== null && _props$title !== void 0 ? _props$title : (_slots$title = slots.title) === null || _slots$title === void 0 ? void 0 : _slots$title.call(slots);
      var description = (_props$description = props.description) !== null && _props$description !== void 0 ? _props$description : (_slots$description = slots.description) === null || _slots$description === void 0 ? void 0 : _slots$description.call(slots);
      var avatar = (_props$avatar = props.avatar) !== null && _props$avatar !== void 0 ? _props$avatar : (_slots$avatar = slots.avatar) === null || _slots$avatar === void 0 ? void 0 : _slots$avatar.call(slots);
      var content = _createVNode("div", {
        "class": "".concat(prefixCls.value, "-item-meta-content")
      }, [title && _createVNode("h4", {
        "class": "".concat(prefixCls.value, "-item-meta-title")
      }, [title]), description && _createVNode("div", {
        "class": "".concat(prefixCls.value, "-item-meta-description")
      }, [description])]);
      return _createVNode("div", {
        "class": classString
      }, [avatar && _createVNode("div", {
        "class": "".concat(prefixCls.value, "-item-meta-avatar")
      }, [avatar]), (title || description) && content]);
    };
  }
});