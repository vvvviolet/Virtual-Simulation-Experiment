"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _SearchOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/SearchOutlined"));
var _input = _interopRequireDefault(require("../../../input"));
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'FilterSearch',
  inheritAttrs: false,
  props: {
    value: String,
    onChange: Function,
    filterSearch: Boolean,
    tablePrefixCls: String,
    locale: {
      type: Object,
      default: undefined
    }
  },
  setup: function setup(props) {
    return function () {
      var value = props.value,
        onChange = props.onChange,
        filterSearch = props.filterSearch,
        tablePrefixCls = props.tablePrefixCls,
        locale = props.locale;
      if (!filterSearch) {
        return null;
      }
      return (0, _vue.createVNode)("div", {
        "class": "".concat(tablePrefixCls, "-filter-dropdown-search")
      }, [(0, _vue.createVNode)(_input.default, {
        "placeholder": locale.filterSearchPlaceholder,
        "onChange": onChange,
        "value": value,
        "htmlSize": 1,
        "class": "".concat(tablePrefixCls, "-filter-dropdown-search-input")
      }, {
        prefix: function prefix() {
          return (0, _vue.createVNode)(_SearchOutlined.default, null, null);
        }
      })]);
    };
  }
});
exports.default = _default;