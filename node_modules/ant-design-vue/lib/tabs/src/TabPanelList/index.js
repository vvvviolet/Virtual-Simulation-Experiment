"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _TabContext = require("../TabContext");
var _vnode = require("../../../_util/vnode");
var _default = (0, _vue.defineComponent)({
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
    var _useInjectTabs = (0, _TabContext.useInjectTabs)(),
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
      return (0, _vue.createVNode)("div", {
        "class": "".concat(pre, "-content-holder")
      }, [(0, _vue.createVNode)("div", {
        "class": ["".concat(pre, "-content"), "".concat(pre, "-content-").concat(tabPosition), (0, _defineProperty2.default)({}, "".concat(pre, "-content-animated"), tabPaneAnimated)],
        "style": activeIndex && tabPaneAnimated ? (0, _defineProperty2.default)({}, rtl ? 'marginRight' : 'marginLeft', "-".concat(activeIndex, "00%")) : null
      }, [tabs.value.map(function (tab) {
        return (0, _vnode.cloneElement)(tab.node, {
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
exports.default = _default;