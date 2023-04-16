import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import PropTypes from '../_util/vue-types';
import classNames from '../_util/classNames';
import DeleteOutlined from "@ant-design/icons-vue/es/icons/DeleteOutlined";
import defaultLocale from '../locale/default';
import Checkbox from '../checkbox';
import TransButton from '../_util/transButton';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import { defineComponent } from 'vue';
function noop() {}
export var transferListItemProps = {
  renderedText: PropTypes.any,
  renderedEl: PropTypes.any,
  item: PropTypes.any,
  checked: {
    type: Boolean,
    default: undefined
  },
  prefixCls: String,
  disabled: {
    type: Boolean,
    default: undefined
  },
  showRemove: {
    type: Boolean,
    default: undefined
  },
  onClick: Function,
  onRemove: Function
};
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'ListItem',
  inheritAttrs: false,
  props: transferListItemProps,
  emits: ['click', 'remove'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    return function () {
      var _classNames;
      var renderedText = props.renderedText,
        renderedEl = props.renderedEl,
        item = props.item,
        checked = props.checked,
        disabled = props.disabled,
        prefixCls = props.prefixCls,
        showRemove = props.showRemove;
      var className = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-content-item"), true), _defineProperty(_classNames, "".concat(prefixCls, "-content-item-disabled"), disabled || item.disabled), _classNames));
      var title;
      if (typeof renderedText === 'string' || typeof renderedText === 'number') {
        title = String(renderedText);
      }
      return _createVNode(LocaleReceiver, {
        "componentName": "Transfer",
        "defaultLocale": defaultLocale.Transfer
      }, {
        default: function _default(transferLocale) {
          var labelNode = _createVNode("span", {
            "class": "".concat(prefixCls, "-content-item-text")
          }, [renderedEl]);
          if (showRemove) {
            return _createVNode("li", {
              "class": className,
              "title": title
            }, [labelNode, _createVNode(TransButton, {
              "disabled": disabled || item.disabled,
              "class": "".concat(prefixCls, "-content-item-remove"),
              "aria-label": transferLocale.remove,
              "onClick": function onClick() {
                emit('remove', item);
              }
            }, {
              default: function _default() {
                return [_createVNode(DeleteOutlined, null, null)];
              }
            })]);
          }
          return _createVNode("li", {
            "class": className,
            "title": title,
            "onClick": disabled || item.disabled ? noop : function () {
              emit('click', item);
            }
          }, [_createVNode(Checkbox, {
            "class": "".concat(prefixCls, "-checkbox"),
            "checked": checked,
            "disabled": disabled || item.disabled
          }, null), labelNode]);
        }
      });
    };
  }
});