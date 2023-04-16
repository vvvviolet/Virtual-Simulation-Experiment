import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import { defineComponent, ref, computed } from 'vue';
import PropTypes from '../_util/vue-types';
import { filterEmpty, flattenChildren, isEmptyContent } from '../_util/props-util';
import ArrowLeftOutlined from "@ant-design/icons-vue/es/icons/ArrowLeftOutlined";
import ArrowRightOutlined from "@ant-design/icons-vue/es/icons/ArrowRightOutlined";
import Breadcrumb from '../breadcrumb';
import Avatar from '../avatar';
import TransButton from '../_util/transButton';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import { withInstall } from '../_util/type';
import useConfigInject from '../_util/hooks/useConfigInject';
import classNames from '../_util/classNames';
import ResizeObserver from '../vc-resize-observer';
import useDestroyed from '../_util/hooks/useDestroyed';
export var pageHeaderProps = function pageHeaderProps() {
  return {
    backIcon: PropTypes.any,
    prefixCls: String,
    title: PropTypes.any,
    subTitle: PropTypes.any,
    breadcrumb: PropTypes.object,
    tags: PropTypes.any,
    footer: PropTypes.any,
    extra: PropTypes.any,
    avatar: PropTypes.object,
    ghost: {
      type: Boolean,
      default: undefined
    },
    onBack: Function
  };
};
var PageHeader = defineComponent({
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
    var _useConfigInject = useConfigInject('page-header', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction,
      pageHeader = _useConfigInject.pageHeader;
    var compact = ref(false);
    var isDestroyed = useDestroyed();
    var onResize = function onResize(_ref2) {
      var width = _ref2.width;
      if (!isDestroyed.value) {
        compact.value = width < 768;
      }
    };
    var ghost = computed(function () {
      var _ref3, _props$ghost, _pageHeader$value;
      return (_ref3 = (_props$ghost = props.ghost) !== null && _props$ghost !== void 0 ? _props$ghost : (_pageHeader$value = pageHeader.value) === null || _pageHeader$value === void 0 ? void 0 : _pageHeader$value.ghost) !== null && _ref3 !== void 0 ? _ref3 : true;
    });
    var getBackIcon = function getBackIcon() {
      var _ref4, _props$backIcon, _slots$backIcon;
      return (_ref4 = (_props$backIcon = props.backIcon) !== null && _props$backIcon !== void 0 ? _props$backIcon : (_slots$backIcon = slots.backIcon) === null || _slots$backIcon === void 0 ? void 0 : _slots$backIcon.call(slots)) !== null && _ref4 !== void 0 ? _ref4 : direction.value === 'rtl' ? _createVNode(ArrowRightOutlined, null, null) : _createVNode(ArrowLeftOutlined, null, null);
    };
    var renderBack = function renderBack(backIcon) {
      if (!backIcon || !props.onBack) {
        return null;
      }
      return _createVNode(LocaleReceiver, {
        "componentName": "PageHeader",
        "children": function children(_ref5) {
          var back = _ref5.back;
          return _createVNode("div", {
            "class": "".concat(prefixCls.value, "-back")
          }, [_createVNode(TransButton, {
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
      return props.breadcrumb ? _createVNode(Breadcrumb, props.breadcrumb, null) : (_slots$breadcrumb = slots.breadcrumb) === null || _slots$breadcrumb === void 0 ? void 0 : _slots$breadcrumb.call(slots);
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
      return _createVNode("div", {
        "class": headingPrefixCls
      }, [hasTitle && _createVNode("div", {
        "class": "".concat(headingPrefixCls, "-left")
      }, [backIconDom, avatar ? _createVNode(Avatar, avatar, null) : (_slots$avatar = slots.avatar) === null || _slots$avatar === void 0 ? void 0 : _slots$avatar.call(slots), title && _createVNode("span", {
        "class": "".concat(headingPrefixCls, "-title"),
        "title": typeof title === 'string' ? title : undefined
      }, [title]), subTitle && _createVNode("span", {
        "class": "".concat(headingPrefixCls, "-sub-title"),
        "title": typeof subTitle === 'string' ? subTitle : undefined
      }, [subTitle]), tags && _createVNode("span", {
        "class": "".concat(headingPrefixCls, "-tags")
      }, [tags])]), extra && _createVNode("span", {
        "class": "".concat(headingPrefixCls, "-extra")
      }, [extra])]);
    };
    var renderFooter = function renderFooter() {
      var _props$footer, _slots$footer;
      var footer = (_props$footer = props.footer) !== null && _props$footer !== void 0 ? _props$footer : filterEmpty((_slots$footer = slots.footer) === null || _slots$footer === void 0 ? void 0 : _slots$footer.call(slots));
      return isEmptyContent(footer) ? null : _createVNode("div", {
        "class": "".concat(prefixCls.value, "-footer")
      }, [footer]);
    };
    var renderChildren = function renderChildren(children) {
      return _createVNode("div", {
        "class": "".concat(prefixCls.value, "-content")
      }, [children]);
    };
    return function () {
      var _props$breadcrumb, _slots$default, _classNames;
      var hasBreadcrumb = ((_props$breadcrumb = props.breadcrumb) === null || _props$breadcrumb === void 0 ? void 0 : _props$breadcrumb.routes) || slots.breadcrumb;
      var hasFooter = props.footer || slots.footer;
      var children = flattenChildren((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
      var className = classNames(prefixCls.value, (_classNames = {
        'has-breadcrumb': hasBreadcrumb,
        'has-footer': hasFooter
      }, _defineProperty(_classNames, "".concat(prefixCls.value, "-ghost"), ghost.value), _defineProperty(_classNames, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), _defineProperty(_classNames, "".concat(prefixCls.value, "-compact"), compact.value), _classNames));
      return _createVNode(ResizeObserver, {
        "onResize": onResize
      }, {
        default: function _default() {
          return [_createVNode("div", {
            "class": className
          }, [renderBreadcrumb(), renderTitle(), children.length ? renderChildren(children) : null, renderFooter()])];
        }
      });
    };
  }
});
export default withInstall(PageHeader);