import _extends from "@babel/runtime/helpers/esm/extends";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
import { computed, defineComponent } from 'vue';
import CloseOutlined from "@ant-design/icons-vue/es/icons/CloseOutlined";
import CheckOutlined from "@ant-design/icons-vue/es/icons/CheckOutlined";
import PropTypes from '../_util/vue-types';
import initDefaultProps from '../_util/props-util/initDefaultProps';
import VcSteps, { Step as VcStep } from '../vc-steps';
import useConfigInject from '../_util/hooks/useConfigInject';
import useBreakpoint from '../_util/hooks/useBreakpoint';
import classNames from '../_util/classNames';
import Progress from '../progress';
import omit from '../_util/omit';
import { VcStepProps } from '../vc-steps/Step';
export var stepsProps = function stepsProps() {
  return {
    prefixCls: String,
    iconPrefix: String,
    current: Number,
    initial: Number,
    percent: Number,
    responsive: {
      type: Boolean,
      default: undefined
    },
    labelPlacement: String,
    status: String,
    size: String,
    direction: String,
    progressDot: {
      type: [Boolean, Function],
      default: undefined
    },
    type: String,
    onChange: Function,
    'onUpdate:current': Function
  };
};
export var stepProps = function stepProps() {
  return {
    description: PropTypes.any,
    icon: PropTypes.any,
    status: String,
    disabled: {
      type: Boolean,
      default: undefined
    },
    title: PropTypes.any,
    subTitle: PropTypes.any,
    onClick: Function
  };
};
var Steps = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'ASteps',
  inheritAttrs: false,
  props: initDefaultProps(stepsProps(), {
    current: 0,
    responsive: true,
    labelPlacement: 'horizontal'
  }),
  slots: ['progressDot'],
  // emits: ['update:current', 'change'],
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      slots = _ref.slots,
      emit = _ref.emit;
    var _useConfigInject = useConfigInject('steps', props),
      prefixCls = _useConfigInject.prefixCls,
      rtlDirection = _useConfigInject.direction,
      configProvider = _useConfigInject.configProvider;
    var screens = useBreakpoint();
    var direction = computed(function () {
      return props.responsive && screens.value.xs ? 'vertical' : props.direction;
    });
    var iconPrefix = computed(function () {
      return configProvider.getPrefixCls('', props.iconPrefix);
    });
    var handleChange = function handleChange(current) {
      emit('update:current', current);
      emit('change', current);
    };
    var stepIconRender = function stepIconRender(_ref2) {
      var node = _ref2.node,
        status = _ref2.status;
      if (status === 'process' && props.percent !== undefined) {
        // currently it's hard-coded, since we can't easily read the actually width of icon
        var progressWidth = props.size === 'small' ? 32 : 40;
        var iconWithProgress = _createVNode("div", {
          "class": "".concat(prefixCls, "-progress-icon")
        }, [_createVNode(Progress, {
          "type": "circle",
          "percent": props.percent,
          "width": progressWidth,
          "strokeWidth": 4,
          "format": function format() {
            return null;
          }
        }, null), node]);
        return iconWithProgress;
      }
      return node;
    };
    return function () {
      var _classNames;
      var stepsClassName = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls.value, "-rtl"), rtlDirection.value === 'rtl'), _defineProperty(_classNames, "".concat(prefixCls.value, "-with-progress"), props.percent !== undefined), _classNames), attrs.class);
      var icons = {
        finish: _createVNode(CheckOutlined, {
          "class": "".concat(prefixCls, "-finish-icon")
        }, null),
        error: _createVNode(CloseOutlined, {
          "class": "".concat(prefixCls, "-error-icon")
        }, null)
      };
      return _createVNode(VcSteps, _objectSpread(_objectSpread({
        "icons": icons
      }, omit(props, ['percent', 'responsive'])), {}, {
        "direction": direction.value,
        "prefixCls": prefixCls.value,
        "iconPrefix": iconPrefix.value,
        "class": stepsClassName,
        "onChange": handleChange
      }), _objectSpread(_objectSpread({}, slots), {}, {
        stepIcon: stepIconRender
      }));
    };
  }
});
/* istanbul ignore next */
export var Step = defineComponent(_objectSpread(_objectSpread({
  compatConfig: {
    MODE: 3
  }
}, VcStep), {}, {
  name: 'AStep',
  props: VcStepProps()
}));
export default _extends(Steps, {
  Step: Step,
  install: function install(app) {
    app.component(Steps.name, Steps);
    app.component(Step.name, Step);
    return app;
  }
});