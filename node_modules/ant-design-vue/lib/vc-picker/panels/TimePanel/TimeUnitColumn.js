"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _uiUtil = require("../../utils/uiUtil");
var _PanelContext = require("../../PanelContext");
var _classNames3 = _interopRequireDefault(require("../../../_util/classNames"));
var _default = (0, _vue.defineComponent)({
  name: 'TimeUnitColumn',
  props: ['prefixCls', 'units', 'onSelect', 'value', 'active', 'hideDisabledOptions'],
  setup: function setup(props) {
    var _useInjectPanel = (0, _PanelContext.useInjectPanel)(),
      open = _useInjectPanel.open;
    var ulRef = (0, _vue.ref)(null);
    var liRefs = (0, _vue.ref)(new Map());
    var scrollRef = (0, _vue.ref)();
    (0, _vue.watch)(function () {
      return props.value;
    }, function () {
      var li = liRefs.value.get(props.value);
      if (li && open.value !== false) {
        (0, _uiUtil.scrollTo)(ulRef.value, li.offsetTop, 120);
      }
    });
    (0, _vue.onBeforeUnmount)(function () {
      var _scrollRef$value;
      (_scrollRef$value = scrollRef.value) === null || _scrollRef$value === void 0 ? void 0 : _scrollRef$value.call(scrollRef);
    });
    (0, _vue.watch)(open, function () {
      var _scrollRef$value2;
      (_scrollRef$value2 = scrollRef.value) === null || _scrollRef$value2 === void 0 ? void 0 : _scrollRef$value2.call(scrollRef);
      (0, _vue.nextTick)(function () {
        if (open.value) {
          var li = liRefs.value.get(props.value);
          if (li) {
            scrollRef.value = (0, _uiUtil.waitElementReady)(li, function () {
              (0, _uiUtil.scrollTo)(ulRef.value, li.offsetTop, 0);
            });
          }
        }
      });
    }, {
      immediate: true,
      flush: 'post'
    });
    return function () {
      var prefixCls = props.prefixCls,
        units = props.units,
        onSelect = props.onSelect,
        value = props.value,
        active = props.active,
        hideDisabledOptions = props.hideDisabledOptions;
      var cellPrefixCls = "".concat(prefixCls, "-cell");
      return (0, _vue.createVNode)("ul", {
        "class": (0, _classNames3.default)("".concat(prefixCls, "-column"), (0, _defineProperty2.default)({}, "".concat(prefixCls, "-column-active"), active)),
        "ref": ulRef,
        "style": {
          position: 'relative'
        }
      }, [units.map(function (unit) {
        var _classNames2;
        if (hideDisabledOptions && unit.disabled) {
          return null;
        }
        return (0, _vue.createVNode)("li", {
          "key": unit.value,
          "ref": function ref(element) {
            liRefs.value.set(unit.value, element);
          },
          "class": (0, _classNames3.default)(cellPrefixCls, (_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, "".concat(cellPrefixCls, "-disabled"), unit.disabled), (0, _defineProperty2.default)(_classNames2, "".concat(cellPrefixCls, "-selected"), value === unit.value), _classNames2)),
          "onClick": function onClick() {
            if (unit.disabled) {
              return;
            }
            onSelect(unit.value);
          }
        }, [(0, _vue.createVNode)("div", {
          "class": "".concat(cellPrefixCls, "-inner")
        }, [unit.label])]);
      })]);
    };
  }
});
exports.default = _default;