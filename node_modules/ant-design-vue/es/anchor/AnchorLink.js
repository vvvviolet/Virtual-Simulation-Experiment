import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import { defineComponent, nextTick, onBeforeUnmount, onMounted, watch } from 'vue';
import PropTypes from '../_util/vue-types';
import { getPropsSlot, initDefaultProps } from '../_util/props-util';
import classNames from '../_util/classNames';
import useConfigInject from '../_util/hooks/useConfigInject';
import { useInjectAnchor } from './context';
export var anchorLinkProps = function anchorLinkProps() {
  return {
    prefixCls: String,
    href: String,
    title: PropTypes.any,
    target: String
  };
};
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'AAnchorLink',
  props: initDefaultProps(anchorLinkProps(), {
    href: '#'
  }),
  slots: ['title'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var mergedTitle = null;
    var _useInjectAnchor = useInjectAnchor(),
      contextHandleClick = _useInjectAnchor.handleClick,
      scrollTo = _useInjectAnchor.scrollTo,
      unregisterLink = _useInjectAnchor.unregisterLink,
      registerLink = _useInjectAnchor.registerLink,
      activeLink = _useInjectAnchor.activeLink;
    var _useConfigInject = useConfigInject('anchor', props),
      prefixCls = _useConfigInject.prefixCls;
    var handleClick = function handleClick(e) {
      var href = props.href;
      contextHandleClick(e, {
        title: mergedTitle,
        href: href
      });
      scrollTo(href);
    };
    watch(function () {
      return props.href;
    }, function (val, oldVal) {
      nextTick(function () {
        unregisterLink(oldVal);
        registerLink(val);
      });
    });
    onMounted(function () {
      registerLink(props.href);
    });
    onBeforeUnmount(function () {
      unregisterLink(props.href);
    });
    return function () {
      var _slots$default;
      var href = props.href,
        target = props.target;
      var pre = prefixCls.value;
      var title = getPropsSlot(slots, props, 'title');
      mergedTitle = title;
      var active = activeLink.value === href;
      var wrapperClassName = classNames("".concat(pre, "-link"), _defineProperty({}, "".concat(pre, "-link-active"), active));
      var titleClassName = classNames("".concat(pre, "-link-title"), _defineProperty({}, "".concat(pre, "-link-title-active"), active));
      return _createVNode("div", {
        "class": wrapperClassName
      }, [_createVNode("a", {
        "class": titleClassName,
        "href": href,
        "title": typeof title === 'string' ? title : '',
        "target": target,
        "onClick": handleClick
      }, [title]), (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
});