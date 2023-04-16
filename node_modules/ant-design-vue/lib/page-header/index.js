"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pageHeaderProps = exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _propsUtil = require("../_util/props-util");
var _ArrowLeftOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/ArrowLeftOutlined"));
var _ArrowRightOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/ArrowRightOutlined"));
var _breadcrumb = _interopRequireDefault(require("../breadcrumb"));
var _avatar = _interopRequireDefault(require("../avatar"));
var _transButton = _interopRequireDefault(require("../_util/transButton"));
var _LocaleReceiver = _interopRequireDefault(require("../locale-provider/LocaleReceiver"));
var _type = require("../_util/type");
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var _classNames2 = _interopRequireDefault(require("../_util/classNames"));
var _vcResizeObserver = _interopRequireDefault(require("../vc-resize-observer"));
var _useDestroyed = _interopRequireDefault(require("../_util/hooks/useDestroyed"));
var pageHeaderProps = function pageHeaderProps() {
  return {
    backIcon: _vueTypes.default.any,
    prefixCls: String,
    title: _vueTypes.default.any,
    subTitle: _vueTypes.default.any,
    breadcrumb: _vueTypes.default.object,
    tags: _vueTypes.default.any,
    footer: _vueTypes.default.any,
    extra: _vueTypes.default.any,
    avatar: _vueTypes.default.object,
    ghost: {
      type: Boolean,
      default: undefined
    },
    onBack: Function
  };
};
exports.pageHeaderProps = pageHeaderProps;
var PageHeader = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'APageHeader',
  props: pageHeaderProps(),
  // emits: ['back'],
  slots: ['backIcon', 'avatar', 'breadcrumb', 'title', 'subTitle', 'tags', 'extra', 'footer'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
      slots = _ref.slots;
    var _useConfigInject = (0, _useConfigInject2.default)('page-header', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction,
      pageHeader = _useConfigInject.pageHeader;
    var compact = (0, _vue.ref)(false);
    var isDestroyed = (0, _useDestroyed.default)();
    var onResize = function onResize(_ref2) {
      var width = _ref2.width;
      if (!isDestroyed.value) {
        compact.value = width < 768;
      }
    };
    var ghost = (0, _vue.computed)(function () {
      var _ref3, _props$ghost, _pageHeader$value;
      return (_ref3 = (_props$ghost = props.ghost) !== null && _props$ghost !== void 0 ? _props$ghost : (_pageHeader$value = pageHeader.value) === null || _pageHeader$value === void 0 ? void 0 : _pageHeader$value.ghost) !== null && _ref3 !== void 0 ? _ref3 : true;
    });
    var getBackIcon = function getBackIcon() {
      var _ref4, _props$backIcon, _slots$backIcon;
      return (_ref4 = (_props$backIcon = props.backIcon) !== null && _props$backIcon !== void 0 ? _props$backIcon : (_slots$backIcon = slots.backIcon) === null || _slots$backIcon === void 0 ? void 0 : _slots$backIcon.call(slots)) !== null && _ref4 !== void 0 ? _ref4 : direction.value === 'rtl' ? (0, _vue.createVNode)(_ArrowRightOutlined.default, null, null) : (0, _vue.createVNode)(_ArrowLeftOutlined.default, null, null);
    };
    var renderBack = function renderBack(backIcon) {
      if (!backIcon || !props.onBack) {
        return null;
      }
      return (0, _vue.createVNode)(_LocaleReceiver.default, {
        "componentName": "PageHeader",
        "children": function children(_ref5) {
          var back = _ref5.back;
          return (0, _vue.createVNode)("div", {
            "class": "".concat(prefixCls.value, "-back")
          }, [(0, _vue.createVNode)(_transButton.default, {
            "onClick": function onClick(e) {
              emit('back', e);
            },
            "class": "".concat(prefixCls.value, "-back-button"),
            "aria-label": back
          }, {
            default: function _default() {
              return [backIcon];
            }
          })]);
        }
      }, null);
    };
    var renderBreadcrumb = function renderBreadcrumb() {
      var _slots$breadcrumb;
      return props.breadcrumb ? (0, _vue.createVNode)(_breadcrumb.default, props.breadcrumb, null) : (_slots$breadcrumb = slots.breadcrumb) === null || _slots$breadcrumb === void 0 ? void 0 : _slots$breadcrumb.call(slots);
    };
    var renderTitle = function renderTitle() {
      var _props$title, _slots$title, _props$subTitle, _slots$subTitle, _props$tags, _slots$tags, _props$extra, _slots$extra, _slots$avatar;
      var avatar = props.avatar;
      var title = (_props$title = props.title) !== null && _props$title !== void 0 ? _props$title : (_slots$title = slots.title) === null || _slots$title === void 0 ? void 0 : _slots$title.call(slots);
      var subTitle = (_props$subTitle = props.subTitle) !== null && _props$subTitle !== void 0 ? _props$subTitle : (_slots$subTitle = slots.subTitle) === null || _slots$subTitle === void 0 ? void 0 : _slots$subTitle.call(slots);
      var tags = (_props$tags = props.tags) !== null && _props$tags !== void 0 ? _props$tags : (_slots$tags = slots.tags) === null || _slots$tags === void 0 ? void 0 : _slots$tags.call(slots);
      var extra = (_props$extra = props.extra) !== null && _props$extra !== void 0 ? _props$extra : (_slots$extra = slots.extra) === null || _slots$extra === void 0 ? void 0 : _slots$extra.call(slots);
      var headingPrefixCls = "".concat(prefixCls.value, "-heading");
      var hasHeading = title || subTitle || tags || extra;
      // If there is nothing, return a null
      if (!hasHeading) {
        return null;
      }
      var backIcon = getBackIcon();
      var backIconDom = renderBack(backIcon);
      var hasTitle = backIconDom || avatar || hasHeading;
      return (0, _vue.createVNode)("div", {
        "class": headingPrefixCls
      }, [hasTitle && (0, _vue.createVNode)("div", {
        "class": "".concat(headingPrefixCls, "-left")
      }, [backIconDom, avatar ? (0, _vue.createVNode)(_avatar.default, avatar, null) : (_slots$avatar = slots.avatar) === null || _slots$avatar === void 0 ? void 0 : _slots$avatar.call(slots), title && (0, _vue.createVNode)("span", {
        "class": "".concat(headingPrefixCls, "-title"),
        "title": typeof title === 'string' ? title : undefined
      }, [title]), subTitle && (0, _vue.createVNode)("span", {
        "class": "".concat(headingPrefixCls, "-sub-title"),
        "title": typeof subTitle === 'string' ? subTitle : undefined
      }, [subTitle]), tags && (0, _vue.createVNode)("span", {
        "class": "".concat(headingPrefixCls, "-tags")
      }, [tags])]), extra && (0, _vue.createVNode)("span", {
        "class": "".concat(headingPrefixCls, "-extra")
      }, [extra])]);
    };
    var renderFooter = function renderFooter() {
      var _props$footer, _slots$footer;
      var footer = (_props$footer = props.footer) !== null && _props$footer !== void 0 ? _props$footer : (0, _propsUtil.filterEmpty)((_slots$footer = slots.footer) === null || _slots$footer === void 0 ? void 0 : _slots$footer.call(slots));
      return (0, _propsUtil.isEmptyContent)(footer) ? null : (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls.value, "-footer")
      }, [footer]);
    };
    var renderChildren = function renderChildren(children) {
      return (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls.value, "-content")
      }, [children]);
    };
    return function () {
      var _props$breadcrumb, _slots$default, _classNames;
      var hasBreadcrumb = ((_props$breadcrumb = props.breadcrumb) === null || _props$breadcrumb === void 0 ? void 0 : _props$breadcrumb.routes) || slots.breadcrumb;
      var hasFooter = props.footer || slots.footer;
      var children = (0, _propsUtil.flattenChildren)((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
      var className = (0, _classNames2.default)(prefixCls.value, (_classNames = {
        'has-breadcrumb': hasBreadcrumb,
        'has-footer': hasFooter
      }, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-ghost"), ghost.value), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-compact"), compact.value), _classNames));
      return (0, _vue.createVNode)(_vcResizeObserver.default, {
        "onResize": onResize
      }, {
        default: function _default() {
          return [(0, _vue.createVNode)("div", {
            "class": className
          }, [renderBreadcrumb(), renderTitle(), children.length ? renderChildren(children) : null, renderFooter()])];
        }
      });
    };
  }
});
var _default2 = (0, _type.withInstall)(PageHeader);
exports.default = _default2;