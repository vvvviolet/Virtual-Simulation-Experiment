import { createVNode as _createVNode } from "vue";
import { defineComponent, nextTick } from 'vue';
import LoadingOutlined from "@ant-design/icons-vue/es/icons/LoadingOutlined";
import Transition from '../_util/transition';
var getCollapsedWidth = function getCollapsedWidth(node) {
  if (node) {
    node.style.width = '0px';
    node.style.opacity = '0';
    node.style.transform = 'scale(0)';
  }
};
var getRealWidth = function getRealWidth(node) {
  nextTick(function () {
    if (node) {
      node.style.width = "".concat(node.scrollWidth, "px");
      node.style.opacity = '1';
      node.style.transform = 'scale(1)';
    }
  });
};
var resetStyle = function resetStyle(node) {
  if (node && node.style) {
    node.style.width = null;
    node.style.opacity = null;
    node.style.transform = null;
  }
};
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'LoadingIcon',
  props: {
    prefixCls: String,
    loading: [Boolean, Object],
    existIcon: Boolean
  },
  setup: function setup(props) {
    return function () {
      var existIcon = props.existIcon,
        prefixCls = props.prefixCls,
        loading = props.loading;
      if (existIcon) {
        return _createVNode("span", {
          "class": "".concat(prefixCls, "-loading-icon")
        }, [_createVNode(LoadingOutlined, null, null)]);
      }
      var visible = !!loading;
      return _createVNode(Transition, {
        "name": "".concat(prefixCls, "-loading-icon-motion"),
        "onBeforeEnter": getCollapsedWidth,
        "onEnter": getRealWidth,
        "onAfterEnter": resetStyle,
        "onBeforeLeave": getRealWidth,
        "onLeave": function onLeave(node) {
          setTimeout(function () {
            getCollapsedWidth(node);
          });
        },
        "onAfterLeave": resetStyle
      }, {
        default: function _default() {
          return [visible ? _createVNode("span", {
            "class": "".concat(prefixCls, "-loading-icon")
          }, [_createVNode(LoadingOutlined, null, null)]) : null];
        }
      });
    };
  }
});