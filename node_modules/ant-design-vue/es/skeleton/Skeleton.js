import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import classNames from '../_util/classNames';
import { initDefaultProps } from '../_util/props-util';
import Title from './Title';
import Paragraph from './Paragraph';
import useConfigInject from '../_util/hooks/useConfigInject';
import Element from './Element';
export var skeletonProps = function skeletonProps() {
  return {
    active: {
      type: Boolean,
      default: undefined
    },
    loading: {
      type: Boolean,
      default: undefined
    },
    prefixCls: String,
    avatar: {
      type: [Boolean, Object],
      default: undefined
    },
    title: {
      type: [Boolean, Object],
      default: undefined
    },
    paragraph: {
      type: [Boolean, Object],
      default: undefined
    },
    round: {
      type: Boolean,
      default: undefined
    }
  };
};
function getComponentProps(prop) {
  if (prop && _typeof(prop) === 'object') {
    return prop;
  }
  return {};
}
function getAvatarBasicProps(hasTitle, hasParagraph) {
  if (hasTitle && !hasParagraph) {
    // Square avatar
    return {
      size: 'large',
      shape: 'square'
    };
  }
  return {
    size: 'large',
    shape: 'circle'
  };
}
function getTitleBasicProps(hasAvatar, hasParagraph) {
  if (!hasAvatar && hasParagraph) {
    return {
      width: '38%'
    };
  }
  if (hasAvatar && hasParagraph) {
    return {
      width: '50%'
    };
  }
  return {};
}
function getParagraphBasicProps(hasAvatar, hasTitle) {
  var basicProps = {};
  // Width
  if (!hasAvatar || !hasTitle) {
    basicProps.width = '61%';
  }
  // Rows
  if (!hasAvatar && hasTitle) {
    basicProps.rows = 3;
  } else {
    basicProps.rows = 2;
  }
  return basicProps;
}
var Skeleton = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'ASkeleton',
  props: initDefaultProps(skeletonProps(), {
    avatar: false,
    title: true,
    paragraph: true
  }),
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var _useConfigInject = useConfigInject('skeleton', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction;
    return function () {
      var _slots$default;
      var loading = props.loading,
        avatar = props.avatar,
        title = props.title,
        paragraph = props.paragraph,
        active = props.active,
        round = props.round;
      var pre = prefixCls.value;
      if (loading || props.loading === undefined) {
        var _classNames;
        var hasAvatar = !!avatar || avatar === '';
        var hasTitle = !!title || title === '';
        var hasParagraph = !!paragraph || paragraph === '';
        // Avatar
        var avatarNode;
        if (hasAvatar) {
          var avatarProps = _objectSpread(_objectSpread({
            prefixCls: "".concat(pre, "-avatar")
          }, getAvatarBasicProps(hasTitle, hasParagraph)), getComponentProps(avatar));
          avatarNode = _createVNode("div", {
            "class": "".concat(pre, "-header")
          }, [_createVNode(Element, avatarProps, null)]);
        }
        var contentNode;
        if (hasTitle || hasParagraph) {
          // Title
          var $title;
          if (hasTitle) {
            var titleProps = _objectSpread(_objectSpread({
              prefixCls: "".concat(pre, "-title")
            }, getTitleBasicProps(hasAvatar, hasParagraph)), getComponentProps(title));
            $title = _createVNode(Title, titleProps, null);
          }
          // Paragraph
          var paragraphNode;
          if (hasParagraph) {
            var paragraphProps = _objectSpread(_objectSpread({
              prefixCls: "".concat(pre, "-paragraph")
            }, getParagraphBasicProps(hasAvatar, hasTitle)), getComponentProps(paragraph));
            paragraphNode = _createVNode(Paragraph, paragraphProps, null);
          }
          contentNode = _createVNode("div", {
            "class": "".concat(pre, "-content")
          }, [$title, paragraphNode]);
        }
        var cls = classNames(pre, (_classNames = {}, _defineProperty(_classNames, "".concat(pre, "-with-avatar"), hasAvatar), _defineProperty(_classNames, "".concat(pre, "-active"), active), _defineProperty(_classNames, "".concat(pre, "-rtl"), direction.value === 'rtl'), _defineProperty(_classNames, "".concat(pre, "-round"), round), _classNames));
        return _createVNode("div", {
          "class": cls
        }, [avatarNode, contentNode]);
      }
      return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
    };
  }
});
export default Skeleton;