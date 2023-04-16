import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';
import SearchOutlined from "@ant-design/icons-vue/es/icons/SearchOutlined";
import Input from '../../../input';
export default defineComponent({
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
      return _createVNode("div", {
        "class": "".concat(tablePrefixCls, "-filter-dropdown-search")
      }, [_createVNode(Input, {
        "placeholder": locale.filterSearchPlaceholder,
        "onChange": onChange,
        "value": value,
        "htmlSize": 1,
        "class": "".concat(tablePrefixCls, "-filter-dropdown-search-input")
      }, {
        prefix: function prefix() {
          return _createVNode(SearchOutlined, null, null);
        }
      })]);
    };
  }
});