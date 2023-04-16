"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _default = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'AddButton',
  inheritAttrs: false,
  props: {
    prefixCls: String,
    editable: {
      type: Object
    },
    locale: {
      type: Object,
      default: undefined
    }
  },
  setup: function setup(props, _ref) {
    var expose = _ref.expose,
      attrs = _ref.attrs;
    var domRef = (0, _vue.ref)();
    expose({
      domRef: domRef
    });
    return function () {
      var prefixCls = props.prefixCls,
        editable = props.editable,
        locale = props.locale;
      if (!editable || editable.showAdd === false) {
        return null;
      }
      return (0, _vue.createVNode)("button", {
        "ref": domRef,
        "type": "button",
        "class": "".concat(prefixCls, "-nav-add"),
        "style": attrs.style,
        "aria-label": (locale === null || locale === void 0 ? void 0 : locale.addAriaLabel) || 'Add tab',
        "onClick": function onClick(event) {
          editable.onEdit('add', {
            event: event
          });
        }
      }, [editable.addIcon ? editable.addIcon() : '+']);
    };
  }
});
exports.default = _default;