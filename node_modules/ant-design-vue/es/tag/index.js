import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { Fragment as _Fragment, createVNode as _createVNode } from "vue";
import { ref, defineComponent, watchEffect, computed } from 'vue';
import classNames from '../_util/classNames';
import PropTypes from '../_util/vue-types';
import CloseOutlined from "@ant-design/icons-vue/es/icons/CloseOutlined";
import Wave from '../_util/wave';
import { PresetColorTypes, PresetStatusColorTypes } from '../_util/colors';
import CheckableTag from './CheckableTag';
import useConfigInject from '../_util/hooks/useConfigInject';
var PresetColorRegex = new RegExp("^(".concat(PresetColorTypes.join('|'), ")(-inverse)?$"));
var PresetStatusColorRegex = new RegExp("^(".concat(PresetStatusColorTypes.join('|'), ")$"));
export var tagProps = function tagProps() {
  return {
    prefixCls: String,
    color: {
      type: String
    },
    closable: {
      type: Boolean,
      default: false
    },
    closeIcon: PropTypes.any,
    visible: {
      type: Boolean,
      default: undefined
    },
    onClose: {
      type: Function
    },
    'onUpdate:visible': Function,
    icon: PropTypes.any
  };
};
var Tag = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'ATag',
  props: tagProps(),
  // emits: ['update:visible', 'close'],
  slots: ['closeIcon', 'icon'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      emit = _ref.emit,
      attrs = _ref.attrs;
    var _useConfigInject = useConfigInject('tag', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction;
    var visible = ref(true);
    watchEffect(function () {
      if (props.visible !== undefined) {
        visible.value = props.visible;
      }
    });
    var handleCloseClick = function handleCloseClick(e) {
      e.stopPropagation();
      emit('update:visible', false);
      emit('close', e);
      if (e.defaultPrevented) {
        return;
      }
      if (props.visible === undefined) {
        visible.value = false;
      }
    };
    var isPresetColor = computed(function () {
      var color = props.color;
      if (!color) {
        return false;
      }
      return PresetColorRegex.test(color) || PresetStatusColorRegex.test(color);
    });
    var tagClassName = computed(function () {
      var _classNames;
      return classNames(prefixCls.value, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls.value, "-").concat(props.color), isPresetColor.value), _defineProperty(_classNames, "".concat(prefixCls.value, "-has-color"), props.color && !isPresetColor.value), _defineProperty(_classNames, "".concat(prefixCls.value, "-hidden"), !visible.value), _defineProperty(_classNames, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'), _classNames));
    });
    return function () {
      var _slots$icon, _slots$closeIcon, _slots$default;
      var _props$icon = props.icon,
        icon = _props$icon === void 0 ? (_slots$icon = slots.icon) === null || _slots$icon === void 0 ? void 0 : _slots$icon.call(slots) : _props$icon,
        color = props.color,
        _props$closeIcon = props.closeIcon,
        closeIcon = _props$closeIcon === void 0 ? (_slots$closeIcon = slots.closeIcon) === null || _slots$closeIcon === void 0 ? void 0 : _slots$closeIcon.call(slots) : _props$closeIcon,
        _props$closable = props.closable,
        closable = _props$closable === void 0 ? false : _props$closable;
      var renderCloseIcon = function renderCloseIcon() {
        if (closable) {
          return closeIcon ? _createVNode("span", {
            "class": "".concat(prefixCls.value, "-close-icon"),
            "onClick": handleCloseClick
          }, [closeIcon]) : _createVNode(CloseOutlined, {
            "class": "".concat(prefixCls.value, "-close-icon"),
            "onClick": handleCloseClick
          }, null);
        }
        return null;
      };
      var tagStyle = {
        backgroundColor: color && !isPresetColor.value ? color : undefined
      };
      var iconNode = icon || null;
      var children = (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
      var kids = iconNode ? _createVNode(_Fragment, null, [iconNode, _createVNode("span", null, [children])]) : children;
      var isNeedWave = ('onClick' in attrs);
      var tagNode = _createVNode("span", {
        "class": tagClassName.value,
        "style": tagStyle
      }, [kids, renderCloseIcon()]);
      return isNeedWave ? _createVNode(Wave, null, {
        default: function _default() {
          return [tagNode];
        }
      }) : tagNode;
    };
  }
});
Tag.CheckableTag = CheckableTag;
Tag.install = function (app) {
  app.component(Tag.name, Tag);
  app.component(CheckableTag.name, CheckableTag);
  return app;
};
export { CheckableTag };
export default Tag;