import { createVNode as _createVNode } from "vue";
import { defineComponent, ref } from 'vue';
export default defineComponent({
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
    var domRef = ref();
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
      return _createVNode("button", {
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