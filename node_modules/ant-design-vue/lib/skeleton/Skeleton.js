"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.skeletonProps = exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _classNames2 = _interopRequireDefault(require("../_util/classNames"));
var _propsUtil = require("../_util/props-util");
var _Title = _interopRequireDefault(require("./Title"));
var _Paragraph = _interopRequireDefault(require("./Paragraph"));
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var _Element = _interopRequireDefault(require("./Element"));
var skeletonProps = function skeletonProps() {
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
exports.skeletonProps = skeletonProps;
function getComponentProps(prop) {
  if (prop && (0, _typeof2.default)(prop) === 'object') {
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
var Skeleton = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'ASkeleton',
  props: (0, _propsUtil.initDefaultProps)(skeletonProps(), {
    avatar: false,
    title: true,
    paragraph: true
  }),
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var _useConfigInject = (0, _useConfigInject2.default)('skeleton', props),
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
          var avatarProps = (0, _objectSpread2.default)((0, _objectSpread2.default)({
            prefixCls: "".concat(pre, "-avatar")
          }, getAvatarBasicProps(hasTitle, hasParagraph)), getComponentProps(avatar));
          avatarNode = (0, _vue.createVNode)("div", {
            "class": "".concat(pre, "-header")
          }, [(0, _vue.createVNode)(_Element.default, avatarProps, null)]);
        }
        var contentNode;
        if (hasTitle || hasParagraph) {
          // Title
          var $title;
          if (hasTitle) {
            var titleProps = (0, _objectSpread2.default)((0, _objectSpread2.default)({
              prefixCls: "".concat(pre, "-title")
            }, getTitleBasicProps(hasAvatar, hasParagraph)), getComponentProps(title));
            $title = (0, _vue.createVNode)(_Title.default, titleProps, null);
          }
          // Paragraph
          var paragraphNode;
          if (hasParagraph) {
            var paragraphProps = (0, _objectSpread2.default)((0, _objectSpread2.default)({
              prefixCls: "".concat(pre, "-paragraph")
            }, getParagraphBasicProps(hasAvatar, hasTitle)), getComponentProps(paragraph));
            paragraphNode = (0, _vue.createVNode)(_Paragraph.default, paragraphProps, null);
          }
          contentNode = (0, _vue.createVNode)("div", {
            "class": "".concat(pre, "-content")
          }, [$title, paragraphNode]);
        }
        var cls = (0, _classNames2.default)(pre, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(pre, "-with-avatar"), hasAvatar), (0, _defineProperty2.default)(_classNames, "".concat(pre, "-active"), active), (0, _defineProperty2.default)(_classNames, "".concat(pre, "-rtl"), direction.value === 'rtl'), (0, _defineProperty2.default)(_classNames, "".concat(pre, "-round"), round), _classNames));
        return (0, _vue.createVNode)("div", {
          "class": cls
        }, [avatarNode, contentNode]);
      }
      return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
    };
  }
});
var _default = Skeleton;
exports.default = _default;