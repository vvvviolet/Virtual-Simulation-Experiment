import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import PropTypes, { withUndefined } from '../_util/vue-types';
import { defineComponent } from 'vue';
function isString(str) {
  return typeof str === 'string';
}
function noop() {}
export var VcStepProps = function VcStepProps() {
  return {
    prefixCls: String,
    wrapperStyle: {
      type: Object,
      default: undefined
    },
    itemWidth: String,
    active: {
      type: Boolean,
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: undefined
    },
    status: String,
    iconPrefix: String,
    icon: PropTypes.any,
    adjustMarginRight: String,
    stepNumber: Number,
    stepIndex: Number,
    description: PropTypes.any,
    title: PropTypes.any,
    subTitle: PropTypes.any,
    progressDot: withUndefined(PropTypes.oneOfType([PropTypes.looseBool, PropTypes.func])),
    tailContent: PropTypes.any,
    icons: PropTypes.shape({
      finish: PropTypes.any,
      error: PropTypes.any
    }).loose,
    onClick: Function,
    onStepClick: Function,
    stepIcon: Function
  };
};
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'Step',
  props: VcStepProps(),
  slots: ['title', 'subTitle', 'description', 'tailContent', 'stepIcon', 'progressDot'],
  emits: ['click', 'stepClick'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      emit = _ref.emit;
    var onItemClick = function onItemClick(e) {
      emit('click', e);
      emit('stepClick', props.stepIndex);
    };
    var renderIconNode = function renderIconNode(_ref2) {
      var _iconClassName;
      var icon = _ref2.icon,
        title = _ref2.title,
        description = _ref2.description;
      var prefixCls = props.prefixCls,
        stepNumber = props.stepNumber,
        status = props.status,
        iconPrefix = props.iconPrefix,
        icons = props.icons,
        _props$progressDot = props.progressDot,
        progressDot = _props$progressDot === void 0 ? slots.progressDot : _props$progressDot,
        _props$stepIcon = props.stepIcon,
        stepIcon = _props$stepIcon === void 0 ? slots.stepIcon : _props$stepIcon;
      var iconNode;
      var iconClassName = (_iconClassName = {}, _defineProperty(_iconClassName, "".concat(prefixCls, "-icon"), true), _defineProperty(_iconClassName, "".concat(iconPrefix, "icon"), true), _defineProperty(_iconClassName, "".concat(iconPrefix, "icon-").concat(icon), icon && isString(icon)), _defineProperty(_iconClassName, "".concat(iconPrefix, "icon-check"), !icon && status === 'finish' && icons && !icons.finish), _defineProperty(_iconClassName, "".concat(iconPrefix, "icon-close"), !icon && status === 'error' && icons && !icons.error), _iconClassName);
      var iconDot = _createVNode("span", {
        "class": "".concat(prefixCls, "-icon-dot")
      }, null);
      // `progressDot` enjoy the highest priority
      if (progressDot) {
        if (typeof progressDot === 'function') {
          iconNode = _createVNode("span", {
            "class": "".concat(prefixCls, "-icon")
          }, [progressDot({
            iconDot: iconDot,
            index: stepNumber - 1,
            status: status,
            title: title,
            description: description,
            prefixCls: prefixCls
          })]);
        } else {
          iconNode = _createVNode("span", {
            "class": "".concat(prefixCls, "-icon")
          }, [iconDot]);
        }
      } else if (icon && !isString(icon)) {
        iconNode = _createVNode("span", {
          "class": "".concat(prefixCls, "-icon")
        }, [icon]);
      } else if (icons && icons.finish && status === 'finish') {
        iconNode = _createVNode("span", {
          "class": "".concat(prefixCls, "-icon")
        }, [icons.finish]);
      } else if (icons && icons.error && status === 'error') {
        iconNode = _createVNode("span", {
          "class": "".concat(prefixCls, "-icon")
        }, [icons.error]);
      } else if (icon || status === 'finish' || status === 'error') {
        iconNode = _createVNode("span", {
          "class": iconClassName
        }, null);
      } else {
        iconNode = _createVNode("span", {
          "class": "".concat(prefixCls, "-icon")
        }, [stepNumber]);
      }
      if (stepIcon) {
        iconNode = stepIcon({
          index: stepNumber - 1,
          status: status,
          title: title,
          description: description,
          node: iconNode
        });
      }
      return iconNode;
    };
    return function () {
      var _slots$title, _slots$description, _slots$subTitle, _slots$icon, _classString;
      var prefixCls = props.prefixCls,
        itemWidth = props.itemWidth,
        active = props.active,
        _props$status = props.status,
        status = _props$status === void 0 ? 'wait' : _props$status,
        tailContent = props.tailContent,
        adjustMarginRight = props.adjustMarginRight,
        disabled = props.disabled,
        _props$title = props.title,
        title = _props$title === void 0 ? (_slots$title = slots.title) === null || _slots$title === void 0 ? void 0 : _slots$title.call(slots) : _props$title,
        _props$description = props.description,
        description = _props$description === void 0 ? (_slots$description = slots.description) === null || _slots$description === void 0 ? void 0 : _slots$description.call(slots) : _props$description,
        _props$subTitle = props.subTitle,
        subTitle = _props$subTitle === void 0 ? (_slots$subTitle = slots.subTitle) === null || _slots$subTitle === void 0 ? void 0 : _slots$subTitle.call(slots) : _props$subTitle,
        _props$icon = props.icon,
        icon = _props$icon === void 0 ? (_slots$icon = slots.icon) === null || _slots$icon === void 0 ? void 0 : _slots$icon.call(slots) : _props$icon,
        onClick = props.onClick,
        onStepClick = props.onStepClick;
      var classString = (_classString = {}, _defineProperty(_classString, "".concat(prefixCls, "-item"), true), _defineProperty(_classString, "".concat(prefixCls, "-item-").concat(status), true), _defineProperty(_classString, "".concat(prefixCls, "-item-custom"), icon), _defineProperty(_classString, "".concat(prefixCls, "-item-active"), active), _defineProperty(_classString, "".concat(prefixCls, "-item-disabled"), disabled === true), _classString);
      var stepProps = {
        class: classString
      };
      var stepItemStyle = {};
      if (itemWidth) {
        stepItemStyle.width = itemWidth;
      }
      if (adjustMarginRight) {
        stepItemStyle.marginRight = adjustMarginRight;
      }
      var accessibilityProps = {
        onClick: onClick || noop
      };
      if (onStepClick && !disabled) {
        accessibilityProps.role = 'button';
        accessibilityProps.tabindex = 0;
        accessibilityProps.onClick = onItemClick;
      }
      return _createVNode("div", _objectSpread(_objectSpread({}, stepProps), {}, {
        "style": stepItemStyle
      }), [_createVNode("div", _objectSpread(_objectSpread({}, accessibilityProps), {}, {
        "class": "".concat(prefixCls, "-item-container")
      }), [_createVNode("div", {
        "class": "".concat(prefixCls, "-item-tail")
      }, [tailContent]), _createVNode("div", {
        "class": "".concat(prefixCls, "-item-icon")
      }, [renderIconNode({
        icon: icon,
        title: title,
        description: description
      })]), _createVNode("div", {
        "class": "".concat(prefixCls, "-item-content")
      }, [_createVNode("div", {
        "class": "".concat(prefixCls, "-item-title")
      }, [title, subTitle && _createVNode("div", {
        "title": subTitle,
        "class": "".concat(prefixCls, "-item-subtitle")
      }, [subTitle])]), description && _createVNode("div", {
        "class": "".concat(prefixCls, "-item-description")
      }, [description])])])]);
    };
  }
});