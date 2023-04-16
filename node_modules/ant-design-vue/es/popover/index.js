import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { resolveDirective as _resolveDirective, createVNode as _createVNode, Fragment as _Fragment } from "vue";
import { computed, defineComponent, ref } from 'vue';
import Tooltip from '../tooltip';
import abstractTooltipProps from '../tooltip/abstractTooltipProps';
import PropTypes from '../_util/vue-types';
import { filterEmpty, initDefaultProps } from '../_util/props-util';
import { withInstall } from '../_util/type';
import useConfigInject from '../_util/hooks/useConfigInject';
import omit from '../_util/omit';
import { getTransitionName } from '../_util/transition';
import { tooltipDefaultProps } from '../tooltip/Tooltip';
export var popoverProps = function popoverProps() {
  return _objectSpread(_objectSpread({}, abstractTooltipProps()), {}, {
    content: PropTypes.any,
    title: PropTypes.any
  });
};
var Popover = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'APopover',
  props: initDefaultProps(popoverProps(), _objectSpread(_objectSpread({}, tooltipDefaultProps()), {}, {
    trigger: 'hover',
    transitionName: 'zoom-big',
    placement: 'top',
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1
  })),
  setup: function setup(props, _ref) {
    var expose = _ref.expose,
      slots = _ref.slots;
    var tooltipRef = ref();
    expose({
      getPopupDomNode: function getPopupDomNode() {
        var _tooltipRef$value, _tooltipRef$value$get;
        return (_tooltipRef$value = tooltipRef.value) === null || _tooltipRef$value === void 0 ? void 0 : (_tooltipRef$value$get = _tooltipRef$value.getPopupDomNode) === null || _tooltipRef$value$get === void 0 ? void 0 : _tooltipRef$value$get.call(_tooltipRef$value);
      }
    });
    var _useConfigInject = useConfigInject('popover', props),
      prefixCls = _useConfigInject.prefixCls,
      configProvider = _useConfigInject.configProvider;
    var rootPrefixCls = computed(function () {
      return configProvider.getPrefixCls();
    });
    var getOverlay = function getOverlay() {
      var _slots$title, _slots$content;
      var _props$title = props.title,
        title = _props$title === void 0 ? filterEmpty((_slots$title = slots.title) === null || _slots$title === void 0 ? void 0 : _slots$title.call(slots)) : _props$title,
        _props$content = props.content,
        content = _props$content === void 0 ? filterEmpty((_slots$content = slots.content) === null || _slots$content === void 0 ? void 0 : _slots$content.call(slots)) : _props$content;
      var hasTitle = !!(Array.isArray(title) ? title.length : title);
      var hasContent = !!(Array.isArray(content) ? content.length : title);
      if (!hasTitle && !hasContent) return undefined;
      return _createVNode(_Fragment, null, [hasTitle && _createVNode("div", {
        "class": "".concat(prefixCls.value, "-title")
      }, [title]), _createVNode("div", {
        "class": "".concat(prefixCls.value, "-inner-content")
      }, [content])]);
    };
    return function () {
      return _createVNode(Tooltip, _objectSpread(_objectSpread({}, omit(props, ['title', 'content'])), {}, {
        "prefixCls": prefixCls.value,
        "ref": tooltipRef,
        "transitionName": getTransitionName(rootPrefixCls.value, 'zoom-big', props.transitionName)
      }), {
        title: getOverlay,
        default: slots.default
      });
    };
  }
});
export default withInstall(Popover);