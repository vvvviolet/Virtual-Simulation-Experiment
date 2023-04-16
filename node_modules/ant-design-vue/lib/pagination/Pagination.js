"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.paginationProps = exports.paginationConfig = exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _LeftOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/LeftOutlined"));
var _RightOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/RightOutlined"));
var _DoubleLeftOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/DoubleLeftOutlined"));
var _DoubleRightOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/DoubleRightOutlined"));
var _select = _interopRequireDefault(require("../select"));
var _MiniSelect = _interopRequireDefault(require("./MiniSelect"));
var _LocaleReceiver = require("../locale-provider/LocaleReceiver");
var _vcPagination = _interopRequireDefault(require("../vc-pagination"));
var _en_US = _interopRequireDefault(require("../vc-pagination/locale/en_US"));
var _classNames2 = _interopRequireDefault(require("../_util/classNames"));
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var _useBreakpoint = _interopRequireDefault(require("../_util/hooks/useBreakpoint"));
var _excluded = ["size", "itemRender", "buildOptionText", "selectComponentClass", "responsive"];
var paginationProps = function paginationProps() {
  return {
    total: Number,
    defaultCurrent: Number,
    disabled: {
      type: Boolean,
      default: undefined
    },
    current: Number,
    defaultPageSize: Number,
    pageSize: Number,
    hideOnSinglePage: {
      type: Boolean,
      default: undefined
    },
    showSizeChanger: {
      type: Boolean,
      default: undefined
    },
    pageSizeOptions: Array,
    buildOptionText: Function,
    showQuickJumper: {
      type: [Boolean, Object],
      default: undefined
    },
    showTotal: Function,
    size: String,
    simple: {
      type: Boolean,
      default: undefined
    },
    locale: Object,
    prefixCls: String,
    selectPrefixCls: String,
    totalBoundaryShowSizeChanger: Number,
    selectComponentClass: String,
    itemRender: Function,
    role: String,
    responsive: Boolean,
    showLessItems: {
      type: Boolean,
      default: undefined
    },
    onChange: Function,
    onShowSizeChange: Function,
    'onUpdate:current': Function,
    'onUpdate:pageSize': Function
  };
};
exports.paginationProps = paginationProps;
var paginationConfig = function paginationConfig() {
  return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, paginationProps()), {}, {
    position: String
  });
};
exports.paginationConfig = paginationConfig;
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'APagination',
  inheritAttrs: false,
  props: paginationProps(),
  // emits: ['change', 'showSizeChange', 'update:current', 'update:pageSize'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      attrs = _ref.attrs;
    var _useConfigInject = (0, _useConfigInject2.default)('pagination', props),
      prefixCls = _useConfigInject.prefixCls,
      configProvider = _useConfigInject.configProvider,
      direction = _useConfigInject.direction;
    var selectPrefixCls = (0, _vue.computed)(function () {
      return configProvider.getPrefixCls('select', props.selectPrefixCls);
    });
    var breakpoint = (0, _useBreakpoint.default)();
    var _useLocaleReceiver = (0, _LocaleReceiver.useLocaleReceiver)('Pagination', _en_US.default, (0, _vue.toRef)(props, 'locale')),
      _useLocaleReceiver2 = (0, _slicedToArray2.default)(_useLocaleReceiver, 1),
      locale = _useLocaleReceiver2[0];
    var getIconsProps = function getIconsProps(pre) {
      var ellipsis = (0, _vue.createVNode)("span", {
        "class": "".concat(pre, "-item-ellipsis")
      }, [(0, _vue.createTextVNode)("\u2022\u2022\u2022")]);
      var prevIcon = (0, _vue.createVNode)("button", {
        "class": "".concat(pre, "-item-link"),
        "type": "button",
        "tabindex": -1
      }, [(0, _vue.createVNode)(_LeftOutlined.default, null, null)]);
      var nextIcon = (0, _vue.createVNode)("button", {
        "class": "".concat(pre, "-item-link"),
        "type": "button",
        "tabindex": -1
      }, [(0, _vue.createVNode)(_RightOutlined.default, null, null)]);
      var jumpPrevIcon = (0, _vue.createVNode)("a", {
        "rel": "nofollow",
        "class": "".concat(pre, "-item-link")
      }, [(0, _vue.createVNode)("div", {
        "class": "".concat(pre, "-item-container")
      }, [(0, _vue.createVNode)(_DoubleLeftOutlined.default, {
        "class": "".concat(pre, "-item-link-icon")
      }, null), ellipsis])]);
      var jumpNextIcon = (0, _vue.createVNode)("a", {
        "rel": "nofollow",
        "class": "".concat(pre, "-item-link")
      }, [(0, _vue.createVNode)("div", {
        "class": "".concat(pre, "-item-container")
      }, [(0, _vue.createVNode)(_DoubleRightOutlined.default, {
        "class": "".concat(pre, "-item-link-icon")
      }, null), ellipsis])]);
      // change arrows direction in right-to-left direction
      if (direction.value === 'rtl') {
        var _ref2 = [nextIcon, prevIcon];
        prevIcon = _ref2[0];
        nextIcon = _ref2[1];
        var _ref3 = [jumpNextIcon, jumpPrevIcon];
        jumpPrevIcon = _ref3[0];
        jumpNextIcon = _ref3[1];
      }
      return {
        prevIcon: prevIcon,
        nextIcon: nextIcon,
        jumpPrevIcon: jumpPrevIcon,
        jumpNextIcon: jumpNextIcon
      };
    };
    return function () {
      var _breakpoint$value;
      var size = props.size,
        _props$itemRender = props.itemRender,
        itemRender = _props$itemRender === void 0 ? slots.itemRender : _props$itemRender,
        _props$buildOptionTex = props.buildOptionText,
        buildOptionText = _props$buildOptionTex === void 0 ? slots.buildOptionText : _props$buildOptionTex,
        selectComponentClass = props.selectComponentClass,
        responsive = props.responsive,
        restProps = (0, _objectWithoutProperties2.default)(props, _excluded);
      var isSmall = size === 'small' || !!((_breakpoint$value = breakpoint.value) !== null && _breakpoint$value !== void 0 && _breakpoint$value.xs && !size && responsive);
      var paginationProps = (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, restProps), getIconsProps(prefixCls.value)), {}, {
        prefixCls: prefixCls.value,
        selectPrefixCls: selectPrefixCls.value,
        selectComponentClass: selectComponentClass || (isSmall ? _MiniSelect.default : _select.default),
        locale: locale.value,
        buildOptionText: buildOptionText
      }, attrs), {}, {
        class: (0, _classNames2.default)((0, _defineProperty2.default)({
          mini: isSmall
        }, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), attrs.class),
        itemRender: itemRender
      });
      return (0, _vue.createVNode)(_vcPagination.default, paginationProps, null);
    };
  }
});
exports.default = _default;