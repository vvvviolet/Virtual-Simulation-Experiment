import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import { isVNode, defineComponent, renderSlot } from 'vue';
import Tabs from '../tabs';
import Row from '../row';
import Col from '../col';
import PropTypes from '../_util/vue-types';
import { flattenChildren, isEmptyElement, filterEmptyWithUndefined } from '../_util/props-util';
import isPlainObject from 'lodash-es/isPlainObject';
import useConfigInject from '../_util/hooks/useConfigInject';
import devWarning from '../vc-util/devWarning';
var TabPane = Tabs.TabPane;
export var cardProps = function cardProps() {
  return {
    prefixCls: String,
    title: PropTypes.any,
    extra: PropTypes.any,
    bordered: {
      type: Boolean,
      default: true
    },
    bodyStyle: {
      type: Object,
      default: undefined
    },
    headStyle: {
      type: Object,
      default: undefined
    },
    loading: {
      type: Boolean,
      default: false
    },
    hoverable: {
      type: Boolean,
      default: false
    },
    type: {
      type: String
    },
    size: {
      type: String
    },
    actions: PropTypes.any,
    tabList: {
      type: Array
    },
    tabBarExtraContent: PropTypes.any,
    activeTabKey: String,
    defaultActiveTabKey: String,
    cover: PropTypes.any,
    onTabChange: {
      type: Function
    }
  };
};
var Card = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'ACard',
  props: cardProps(),
  slots: ['title', 'extra', 'tabBarExtraContent', 'actions', 'cover', 'customTab'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var _useConfigInject = useConfigInject('card', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction,
      size = _useConfigInject.size;
    var getAction = function getAction(actions) {
      var actionList = actions.map(function (action, index) {
        return isVNode(action) && !isEmptyElement(action) || !isVNode(action) ? _createVNode("li", {
          "style": {
            width: "".concat(100 / actions.length, "%")
          },
          "key": "action-".concat(index)
        }, [_createVNode("span", null, [action])]) : null;
      });
      return actionList;
    };
    var triggerTabChange = function triggerTabChange(key) {
      var _props$onTabChange;
      (_props$onTabChange = props.onTabChange) === null || _props$onTabChange === void 0 ? void 0 : _props$onTabChange.call(props, key);
    };
    var isContainGrid = function isContainGrid() {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var containGrid;
      obj.forEach(function (element) {
        if (element && isPlainObject(element.type) && element.type.__ANT_CARD_GRID) {
          containGrid = true;
        }
      });
      return containGrid;
    };
    return function () {
      var _slots$tabBarExtraCon, _slots$title, _slots$extra, _slots$actions, _slots$cover, _slots$default, _classString, _tabsProps;
      var _props$headStyle = props.headStyle,
        headStyle = _props$headStyle === void 0 ? {} : _props$headStyle,
        _props$bodyStyle = props.bodyStyle,
        bodyStyle = _props$bodyStyle === void 0 ? {} : _props$bodyStyle,
        loading = props.loading,
        _props$bordered = props.bordered,
        bordered = _props$bordered === void 0 ? true : _props$bordered,
        type = props.type,
        tabList = props.tabList,
        hoverable = props.hoverable,
        activeTabKey = props.activeTabKey,
        defaultActiveTabKey = props.defaultActiveTabKey,
        _props$tabBarExtraCon = props.tabBarExtraContent,
        tabBarExtraContent = _props$tabBarExtraCon === void 0 ? filterEmptyWithUndefined((_slots$tabBarExtraCon = slots.tabBarExtraContent) === null || _slots$tabBarExtraCon === void 0 ? void 0 : _slots$tabBarExtraCon.call(slots)) : _props$tabBarExtraCon,
        _props$title = props.title,
        title = _props$title === void 0 ? filterEmptyWithUndefined((_slots$title = slots.title) === null || _slots$title === void 0 ? void 0 : _slots$title.call(slots)) : _props$title,
        _props$extra = props.extra,
        extra = _props$extra === void 0 ? filterEmptyWithUndefined((_slots$extra = slots.extra) === null || _slots$extra === void 0 ? void 0 : _slots$extra.call(slots)) : _props$extra,
        _props$actions = props.actions,
        actions = _props$actions === void 0 ? filterEmptyWithUndefined((_slots$actions = slots.actions) === null || _slots$actions === void 0 ? void 0 : _slots$actions.call(slots)) : _props$actions,
        _props$cover = props.cover,
        cover = _props$cover === void 0 ? filterEmptyWithUndefined((_slots$cover = slots.cover) === null || _slots$cover === void 0 ? void 0 : _slots$cover.call(slots)) : _props$cover;
      var children = flattenChildren((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
      var pre = prefixCls.value;
      var classString = (_classString = {}, _defineProperty(_classString, "".concat(pre), true), _defineProperty(_classString, "".concat(pre, "-loading"), loading), _defineProperty(_classString, "".concat(pre, "-bordered"), bordered), _defineProperty(_classString, "".concat(pre, "-hoverable"), !!hoverable), _defineProperty(_classString, "".concat(pre, "-contain-grid"), isContainGrid(children)), _defineProperty(_classString, "".concat(pre, "-contain-tabs"), tabList && tabList.length), _defineProperty(_classString, "".concat(pre, "-").concat(size.value), size.value), _defineProperty(_classString, "".concat(pre, "-type-").concat(type), !!type), _defineProperty(_classString, "".concat(pre, "-rtl"), direction.value === 'rtl'), _classString);
      var loadingBlockStyle = bodyStyle.padding === 0 || bodyStyle.padding === '0px' ? {
        padding: '24px'
      } : undefined;
      var block = _createVNode("div", {
        "class": "".concat(pre, "-loading-block")
      }, null);
      var loadingBlock = _createVNode("div", {
        "class": "".concat(pre, "-loading-content"),
        "style": loadingBlockStyle
      }, [_createVNode(Row, {
        "gutter": 8
      }, {
        default: function _default() {
          return [_createVNode(Col, {
            "span": 22
          }, {
            default: function _default() {
              return [block];
            }
          })];
        }
      }), _createVNode(Row, {
        "gutter": 8
      }, {
        default: function _default() {
          return [_createVNode(Col, {
            "span": 8
          }, {
            default: function _default() {
              return [block];
            }
          }), _createVNode(Col, {
            "span": 15
          }, {
            default: function _default() {
              return [block];
            }
          })];
        }
      }), _createVNode(Row, {
        "gutter": 8
      }, {
        default: function _default() {
          return [_createVNode(Col, {
            "span": 6
          }, {
            default: function _default() {
              return [block];
            }
          }), _createVNode(Col, {
            "span": 18
          }, {
            default: function _default() {
              return [block];
            }
          })];
        }
      }), _createVNode(Row, {
        "gutter": 8
      }, {
        default: function _default() {
          return [_createVNode(Col, {
            "span": 13
          }, {
            default: function _default() {
              return [block];
            }
          }), _createVNode(Col, {
            "span": 9
          }, {
            default: function _default() {
              return [block];
            }
          })];
        }
      }), _createVNode(Row, {
        "gutter": 8
      }, {
        default: function _default() {
          return [_createVNode(Col, {
            "span": 4
          }, {
            default: function _default() {
              return [block];
            }
          }), _createVNode(Col, {
            "span": 3
          }, {
            default: function _default() {
              return [block];
            }
          }), _createVNode(Col, {
            "span": 16
          }, {
            default: function _default() {
              return [block];
            }
          })];
        }
      })]);
      var hasActiveTabKey = activeTabKey !== undefined;
      var tabsProps = (_tabsProps = {
        size: 'large'
      }, _defineProperty(_tabsProps, hasActiveTabKey ? 'activeKey' : 'defaultActiveKey', hasActiveTabKey ? activeTabKey : defaultActiveTabKey), _defineProperty(_tabsProps, "onChange", triggerTabChange), _defineProperty(_tabsProps, "class", "".concat(pre, "-head-tabs")), _tabsProps);
      var head;
      var tabs = tabList && tabList.length ? _createVNode(Tabs, tabsProps, {
        default: function _default() {
          return [tabList.map(function (item) {
            var temp = item.tab,
              itemSlots = item.slots;
            var name = itemSlots === null || itemSlots === void 0 ? void 0 : itemSlots.tab;
            devWarning(!itemSlots, 'Card', "tabList slots is deprecated, Please use `customTab` instead.");
            var tab = temp !== undefined ? temp : slots[name] ? slots[name](item) : null;
            tab = renderSlot(slots, 'customTab', item, function () {
              return [tab];
            });
            return _createVNode(TabPane, {
              "tab": tab,
              "key": item.key,
              "disabled": item.disabled
            }, null);
          })];
        },
        rightExtra: tabBarExtraContent ? function () {
          return tabBarExtraContent;
        } : null
      }) : null;
      if (title || extra || tabs) {
        head = _createVNode("div", {
          "class": "".concat(pre, "-head"),
          "style": headStyle
        }, [_createVNode("div", {
          "class": "".concat(pre, "-head-wrapper")
        }, [title && _createVNode("div", {
          "class": "".concat(pre, "-head-title")
        }, [title]), extra && _createVNode("div", {
          "class": "".concat(pre, "-extra")
        }, [extra])]), tabs]);
      }
      var coverDom = cover ? _createVNode("div", {
        "class": "".concat(pre, "-cover")
      }, [cover]) : null;
      var body = _createVNode("div", {
        "class": "".concat(pre, "-body"),
        "style": bodyStyle
      }, [loading ? loadingBlock : children]);
      var actionDom = actions && actions.length ? _createVNode("ul", {
        "class": "".concat(pre, "-actions")
      }, [getAction(actions)]) : null;
      return _createVNode("div", {
        "class": classString,
        "ref": "cardContainerRef"
      }, [head, coverDom, children && children.length ? body : null, actionDom]);
    };
  }
});
export default Card;