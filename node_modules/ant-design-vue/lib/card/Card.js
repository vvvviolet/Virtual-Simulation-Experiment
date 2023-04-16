"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.cardProps = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _tabs = _interopRequireDefault(require("../tabs"));
var _row = _interopRequireDefault(require("../row"));
var _col = _interopRequireDefault(require("../col"));
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _propsUtil = require("../_util/props-util");
var _isPlainObject = _interopRequireDefault(require("lodash/isPlainObject"));
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var _devWarning = _interopRequireDefault(require("../vc-util/devWarning"));
var TabPane = _tabs.default.TabPane;
var cardProps = function cardProps() {
  return {
    prefixCls: String,
    title: _vueTypes.default.any,
    extra: _vueTypes.default.any,
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
    actions: _vueTypes.default.any,
    tabList: {
      type: Array
    },
    tabBarExtraContent: _vueTypes.default.any,
    activeTabKey: String,
    defaultActiveTabKey: String,
    cover: _vueTypes.default.any,
    onTabChange: {
      type: Function
    }
  };
};
exports.cardProps = cardProps;
var Card = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'ACard',
  props: cardProps(),
  slots: ['title', 'extra', 'tabBarExtraContent', 'actions', 'cover', 'customTab'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var _useConfigInject = (0, _useConfigInject2.default)('card', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction,
      size = _useConfigInject.size;
    var getAction = function getAction(actions) {
      var actionList = actions.map(function (action, index) {
        return (0, _vue.isVNode)(action) && !(0, _propsUtil.isEmptyElement)(action) || !(0, _vue.isVNode)(action) ? (0, _vue.createVNode)("li", {
          "style": {
            width: "".concat(100 / actions.length, "%")
          },
          "key": "action-".concat(index)
        }, [(0, _vue.createVNode)("span", null, [action])]) : null;
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
        if (element && (0, _isPlainObject.default)(element.type) && element.type.__ANT_CARD_GRID) {
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
        tabBarExtraContent = _props$tabBarExtraCon === void 0 ? (0, _propsUtil.filterEmptyWithUndefined)((_slots$tabBarExtraCon = slots.tabBarExtraContent) === null || _slots$tabBarExtraCon === void 0 ? void 0 : _slots$tabBarExtraCon.call(slots)) : _props$tabBarExtraCon,
        _props$title = props.title,
        title = _props$title === void 0 ? (0, _propsUtil.filterEmptyWithUndefined)((_slots$title = slots.title) === null || _slots$title === void 0 ? void 0 : _slots$title.call(slots)) : _props$title,
        _props$extra = props.extra,
        extra = _props$extra === void 0 ? (0, _propsUtil.filterEmptyWithUndefined)((_slots$extra = slots.extra) === null || _slots$extra === void 0 ? void 0 : _slots$extra.call(slots)) : _props$extra,
        _props$actions = props.actions,
        actions = _props$actions === void 0 ? (0, _propsUtil.filterEmptyWithUndefined)((_slots$actions = slots.actions) === null || _slots$actions === void 0 ? void 0 : _slots$actions.call(slots)) : _props$actions,
        _props$cover = props.cover,
        cover = _props$cover === void 0 ? (0, _propsUtil.filterEmptyWithUndefined)((_slots$cover = slots.cover) === null || _slots$cover === void 0 ? void 0 : _slots$cover.call(slots)) : _props$cover;
      var children = (0, _propsUtil.flattenChildren)((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
      var pre = prefixCls.value;
      var classString = (_classString = {}, (0, _defineProperty2.default)(_classString, "".concat(pre), true), (0, _defineProperty2.default)(_classString, "".concat(pre, "-loading"), loading), (0, _defineProperty2.default)(_classString, "".concat(pre, "-bordered"), bordered), (0, _defineProperty2.default)(_classString, "".concat(pre, "-hoverable"), !!hoverable), (0, _defineProperty2.default)(_classString, "".concat(pre, "-contain-grid"), isContainGrid(children)), (0, _defineProperty2.default)(_classString, "".concat(pre, "-contain-tabs"), tabList && tabList.length), (0, _defineProperty2.default)(_classString, "".concat(pre, "-").concat(size.value), size.value), (0, _defineProperty2.default)(_classString, "".concat(pre, "-type-").concat(type), !!type), (0, _defineProperty2.default)(_classString, "".concat(pre, "-rtl"), direction.value === 'rtl'), _classString);
      var loadingBlockStyle = bodyStyle.padding === 0 || bodyStyle.padding === '0px' ? {
        padding: '24px'
      } : undefined;
      var block = (0, _vue.createVNode)("div", {
        "class": "".concat(pre, "-loading-block")
      }, null);
      var loadingBlock = (0, _vue.createVNode)("div", {
        "class": "".concat(pre, "-loading-content"),
        "style": loadingBlockStyle
      }, [(0, _vue.createVNode)(_row.default, {
        "gutter": 8
      }, {
        default: function _default() {
          return [(0, _vue.createVNode)(_col.default, {
            "span": 22
          }, {
            default: function _default() {
              return [block];
            }
          })];
        }
      }), (0, _vue.createVNode)(_row.default, {
        "gutter": 8
      }, {
        default: function _default() {
          return [(0, _vue.createVNode)(_col.default, {
            "span": 8
          }, {
            default: function _default() {
              return [block];
            }
          }), (0, _vue.createVNode)(_col.default, {
            "span": 15
          }, {
            default: function _default() {
              return [block];
            }
          })];
        }
      }), (0, _vue.createVNode)(_row.default, {
        "gutter": 8
      }, {
        default: function _default() {
          return [(0, _vue.createVNode)(_col.default, {
            "span": 6
          }, {
            default: function _default() {
              return [block];
            }
          }), (0, _vue.createVNode)(_col.default, {
            "span": 18
          }, {
            default: function _default() {
              return [block];
            }
          })];
        }
      }), (0, _vue.createVNode)(_row.default, {
        "gutter": 8
      }, {
        default: function _default() {
          return [(0, _vue.createVNode)(_col.default, {
            "span": 13
          }, {
            default: function _default() {
              return [block];
            }
          }), (0, _vue.createVNode)(_col.default, {
            "span": 9
          }, {
            default: function _default() {
              return [block];
            }
          })];
        }
      }), (0, _vue.createVNode)(_row.default, {
        "gutter": 8
      }, {
        default: function _default() {
          return [(0, _vue.createVNode)(_col.default, {
            "span": 4
          }, {
            default: function _default() {
              return [block];
            }
          }), (0, _vue.createVNode)(_col.default, {
            "span": 3
          }, {
            default: function _default() {
              return [block];
            }
          }), (0, _vue.createVNode)(_col.default, {
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
      }, (0, _defineProperty2.default)(_tabsProps, hasActiveTabKey ? 'activeKey' : 'defaultActiveKey', hasActiveTabKey ? activeTabKey : defaultActiveTabKey), (0, _defineProperty2.default)(_tabsProps, "onChange", triggerTabChange), (0, _defineProperty2.default)(_tabsProps, "class", "".concat(pre, "-head-tabs")), _tabsProps);
      var head;
      var tabs = tabList && tabList.length ? (0, _vue.createVNode)(_tabs.default, tabsProps, {
        default: function _default() {
          return [tabList.map(function (item) {
            var temp = item.tab,
              itemSlots = item.slots;
            var name = itemSlots === null || itemSlots === void 0 ? void 0 : itemSlots.tab;
            (0, _devWarning.default)(!itemSlots, 'Card', "tabList slots is deprecated, Please use `customTab` instead.");
            var tab = temp !== undefined ? temp : slots[name] ? slots[name](item) : null;
            tab = (0, _vue.renderSlot)(slots, 'customTab', item, function () {
              return [tab];
            });
            return (0, _vue.createVNode)(TabPane, {
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
        head = (0, _vue.createVNode)("div", {
          "class": "".concat(pre, "-head"),
          "style": headStyle
        }, [(0, _vue.createVNode)("div", {
          "class": "".concat(pre, "-head-wrapper")
        }, [title && (0, _vue.createVNode)("div", {
          "class": "".concat(pre, "-head-title")
        }, [title]), extra && (0, _vue.createVNode)("div", {
          "class": "".concat(pre, "-extra")
        }, [extra])]), tabs]);
      }
      var coverDom = cover ? (0, _vue.createVNode)("div", {
        "class": "".concat(pre, "-cover")
      }, [cover]) : null;
      var body = (0, _vue.createVNode)("div", {
        "class": "".concat(pre, "-body"),
        "style": bodyStyle
      }, [loading ? loadingBlock : children]);
      var actionDom = actions && actions.length ? (0, _vue.createVNode)("ul", {
        "class": "".concat(pre, "-actions")
      }, [getAction(actions)]) : null;
      return (0, _vue.createVNode)("div", {
        "class": classString,
        "ref": "cardContainerRef"
      }, [head, coverDom, children && children.length ? body : null, actionDom]);
    };
  }
});
var _default2 = Card;
exports.default = _default2;