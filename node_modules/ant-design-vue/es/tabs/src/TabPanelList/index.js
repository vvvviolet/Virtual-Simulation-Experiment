import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import { useInjectTabs } from '../TabContext';
import { defineComponent } from 'vue';
import { cloneElement } from '../../../_util/vnode';
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'TabPanelList',
  inheritAttrs: false,
  props: {
    activeKey: {
      type: [String, Number]
    },
    id: {
      type: String
    },
    rtl: {
      type: Boolean
    },
    animated: {
      type: Object,
      default: undefined
    },
    tabPosition: {
      type: String
    },
    destroyInactiveTabPane: {
      type: Boolean
    }
  },
  setup: function setup(props) {
    var _useInjectTabs = useInjectTabs(),
      tabs = _useInjectTabs.tabs,
      prefixCls = _useInjectTabs.prefixCls;
    return function () {
      var id = props.id,
        activeKey = props.activeKey,
        animated = props.animated,
        tabPosition = props.tabPosition,
        rtl = props.rtl,
        destroyInactiveTabPane = props.destroyInactiveTabPane;
      var tabPaneAnimated = animated.tabPane;
      var pre = prefixCls.value;
      var activeIndex = tabs.value.findIndex(function (tab) {
        return tab.key === activeKey;
      });
      return _createVNode("div", {
        "class": "".concat(pre, "-content-holder")
      }, [_createVNode("div", {
        "class": ["".concat(pre, "-content"), "".concat(pre, "-content-").concat(tabPosition), _defineProperty({}, "".concat(pre, "-content-animated"), tabPaneAnimated)],
        "style": activeIndex && tabPaneAnimated ? _defineProperty({}, rtl ? 'marginRight' : 'marginLeft', "-".concat(activeIndex, "00%")) : null
      }, [tabs.value.map(function (tab) {
        return cloneElement(tab.node, {
          key: tab.key,
          prefixCls: pre,
          tabKey: tab.key,
          id: id,
          animated: tabPaneAnimated,
          active: tab.key === activeKey,
          destroyInactiveTabPane: destroyInactiveTabPane
        });
      })])]);
    };
  }
});