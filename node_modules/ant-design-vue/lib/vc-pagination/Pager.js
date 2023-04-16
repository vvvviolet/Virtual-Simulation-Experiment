"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _classNames2 = _interopRequireDefault(require("../_util/classNames"));
var _default2 = (0, _vue.defineComponent)({
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
    locale: _vueTypes.default.object,
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
      var cls = (0, _classNames2.default)(prefixCls, "".concat(prefixCls, "-").concat(props.page), (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-active"), props.active), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-disabled"), !props.page), _classNames), _cls);
      return (0, _vue.createVNode)("li", {
        "onClick": handleClick,
        "onKeypress": handleKeyPress,
        "title": showTitle ? String(page) : null,
        "tabindex": "0",
        "class": cls,
        "style": style
      }, [itemRender({
        page: page,
        type: 'page',
        originalElement: (0, _vue.createVNode)("a", {
          "rel": "nofollow"
        }, [page])
      })]);
    };
  }
});
exports.default = _default2;