import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import PropTypes from '../_util/vue-types';
import classNames from '../_util/classNames';
import { defineComponent } from 'vue';
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'Pager',
  inheritAttrs: false,
  props: {
    rootPrefixCls: String,
    page: Number,
    active: {
      type: Boolean,
      default: undefined
    },
    last: {
      type: Boolean,
      default: undefined
    },
    locale: PropTypes.object,
    showTitle: {
      type: Boolean,
      default: undefined
    },
    itemRender: {
      type: Function,
      default: function _default() {}
    },
    onClick: {
      type: Function
    },
    onKeypress: {
      type: Function
    }
  },
  eimt: ['click', 'keypress'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
      attrs = _ref.attrs;
    var handleClick = function handleClick() {
      emit('click', props.page);
    };
    var handleKeyPress = function handleKeyPress(event) {
      emit('keypress', event, handleClick, props.page);
    };
    return function () {
      var _classNames;
      var showTitle = props.showTitle,
        page = props.page,
        itemRender = props.itemRender;
      var _cls = attrs.class,
        style = attrs.style;
      var prefixCls = "".concat(props.rootPrefixCls, "-item");
      var cls = classNames(prefixCls, "".concat(prefixCls, "-").concat(props.page), (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-active"), props.active), _defineProperty(_classNames, "".concat(prefixCls, "-disabled"), !props.page), _classNames), _cls);
      return _createVNode("li", {
        "onClick": handleClick,
        "onKeypress": handleKeyPress,
        "title": showTitle ? String(page) : null,
        "tabindex": "0",
        "class": cls,
        "style": style
      }, [itemRender({
        page: page,
        type: 'page',
        originalElement: _createVNode("a", {
          "rel": "nofollow"
        }, [page])
      })]);
    };
  }
});