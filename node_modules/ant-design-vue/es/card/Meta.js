import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import PropTypes from '../_util/vue-types';
import { getPropsSlot } from '../_util/props-util';
import useConfigInject from '../_util/hooks/useConfigInject';
export var cardMetaProps = function cardMetaProps() {
  return {
    prefixCls: String,
    title: PropTypes.any,
    description: PropTypes.any,
    avatar: PropTypes.any
  };
};
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'ACardMeta',
  props: cardMetaProps(),
  slots: ['title', 'description', 'avatar'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var _useConfigInject = useConfigInject('card', props),
      prefixCls = _useConfigInject.prefixCls;
    return function () {
      var classString = _defineProperty({}, "".concat(prefixCls.value, "-meta"), true);
      var avatar = getPropsSlot(slots, props, 'avatar');
      var title = getPropsSlot(slots, props, 'title');
      var description = getPropsSlot(slots, props, 'description');
      var avatarDom = avatar ? _createVNode("div", {
        "class": "".concat(prefixCls.value, "-meta-avatar")
      }, [avatar]) : null;
      var titleDom = title ? _createVNode("div", {
        "class": "".concat(prefixCls.value, "-meta-title")
      }, [title]) : null;
      var descriptionDom = description ? _createVNode("div", {
        "class": "".concat(prefixCls.value, "-meta-description")
      }, [description]) : null;
      var MetaDetail = titleDom || descriptionDom ? _createVNode("div", {
        "class": "".concat(prefixCls.value, "-meta-detail")
      }, [titleDom, descriptionDom]) : null;
      return _createVNode("div", {
        "class": classString
      }, [avatarDom, MetaDetail]);
    };
  }
});