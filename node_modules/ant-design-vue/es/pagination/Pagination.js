import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
var _excluded = ["size", "itemRender", "buildOptionText", "selectComponentClass", "responsive"];
import { createVNode as _createVNode, createTextVNode as _createTextVNode } from "vue";
import { computed, toRef, defineComponent } from 'vue';
import LeftOutlined from "@ant-design/icons-vue/es/icons/LeftOutlined";
import RightOutlined from "@ant-design/icons-vue/es/icons/RightOutlined";
import DoubleLeftOutlined from "@ant-design/icons-vue/es/icons/DoubleLeftOutlined";
import DoubleRightOutlined from "@ant-design/icons-vue/es/icons/DoubleRightOutlined";
import VcSelect from '../select';
import MiniSelect from './MiniSelect';
import { useLocaleReceiver } from '../locale-provider/LocaleReceiver';
import VcPagination from '../vc-pagination';
import enUS from '../vc-pagination/locale/en_US';
import classNames from '../_util/classNames';
import useConfigInject from '../_util/hooks/useConfigInject';
import useBreakpoint from '../_util/hooks/useBreakpoint';
export var paginationProps = function paginationProps() {
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
export var paginationConfig = function paginationConfig() {
  return _objectSpread(_objectSpread({}, paginationProps()), {}, {
    position: String
  });
};
export default defineComponent({
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
    var _useConfigInject = useConfigInject('pagination', props),
      prefixCls = _useConfigInject.prefixCls,
      configProvider = _useConfigInject.configProvider,
      direction = _useConfigInject.direction;
    var selectPrefixCls = computed(function () {
      return configProvider.getPrefixCls('select', props.selectPrefixCls);
    });
    var breakpoint = useBreakpoint();
    var _useLocaleReceiver = useLocaleReceiver('Pagination', enUS, toRef(props, 'locale')),
      _useLocaleReceiver2 = _slicedToArray(_useLocaleReceiver, 1),
      locale = _useLocaleReceiver2[0];
    var getIconsProps = function getIconsProps(pre) {
      var ellipsis = _createVNode("span", {
        "class": "".concat(pre, "-item-ellipsis")
      }, [_createTextVNode("\u2022\u2022\u2022")]);
      var prevIcon = _createVNode("button", {
        "class": "".concat(pre, "-item-link"),
        "type": "button",
        "tabindex": -1
      }, [_createVNode(LeftOutlined, null, null)]);
      var nextIcon = _createVNode("button", {
        "class": "".concat(pre, "-item-link"),
        "type": "button",
        "tabindex": -1
      }, [_createVNode(RightOutlined, null, null)]);
      var jumpPrevIcon = _createVNode("a", {
        "rel": "nofollow",
        "class": "".concat(pre, "-item-link")
      }, [_createVNode("div", {
        "class": "".concat(pre, "-item-container")
      }, [_createVNode(DoubleLeftOutlined, {
        "class": "".concat(pre, "-item-link-icon")
      }, null), ellipsis])]);
      var jumpNextIcon = _createVNode("a", {
        "rel": "nofollow",
        "class": "".concat(pre, "-item-link")
      }, [_createVNode("div", {
        "class": "".concat(pre, "-item-container")
      }, [_createVNode(DoubleRightOutlined, {
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
        restProps = _objectWithoutProperties(props, _excluded);
      var isSmall = size === 'small' || !!((_breakpoint$value = breakpoint.value) !== null && _breakpoint$value !== void 0 && _breakpoint$value.xs && !size && responsive);
      var paginationProps = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, restProps), getIconsProps(prefixCls.value)), {}, {
        prefixCls: prefixCls.value,
        selectPrefixCls: selectPrefixCls.value,
        selectComponentClass: selectComponentClass || (isSmall ? MiniSelect : VcSelect),
        locale: locale.value,
        buildOptionText: buildOptionText
      }, attrs), {}, {
        class: classNames(_defineProperty({
          mini: isSmall
        }, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), attrs.class),
        itemRender: itemRender
      });
      return _createVNode(VcPagination, paginationProps, null);
    };
  }
});