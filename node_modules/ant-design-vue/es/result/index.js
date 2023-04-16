import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import { defineComponent, computed } from 'vue';
import PropTypes from '../_util/vue-types';
import CheckCircleFilled from "@ant-design/icons-vue/es/icons/CheckCircleFilled";
import CloseCircleFilled from "@ant-design/icons-vue/es/icons/CloseCircleFilled";
import ExclamationCircleFilled from "@ant-design/icons-vue/es/icons/ExclamationCircleFilled";
import WarningFilled from "@ant-design/icons-vue/es/icons/WarningFilled";
import noFound from './noFound';
import serverError from './serverError';
import unauthorized from './unauthorized';
import useConfigInject from '../_util/hooks/useConfigInject';
import classNames from '../_util/classNames';
export var IconMap = {
  success: CheckCircleFilled,
  error: CloseCircleFilled,
  info: ExclamationCircleFilled,
  warning: WarningFilled
};
export var ExceptionMap = {
  '404': noFound,
  '500': serverError,
  '403': unauthorized
};
// ExceptionImageMap keys
var ExceptionStatus = Object.keys(ExceptionMap);
export var resultProps = function resultProps() {
  return {
    prefixCls: String,
    icon: PropTypes.any,
    status: {
      type: [Number, String],
      default: 'info'
    },
    title: PropTypes.any,
    subTitle: PropTypes.any,
    extra: PropTypes.any
  };
};
var renderIcon = function renderIcon(prefixCls, _ref) {
  var status = _ref.status,
    icon = _ref.icon;
  if (ExceptionStatus.includes("".concat(status))) {
    var SVGComponent = ExceptionMap[status];
    return _createVNode("div", {
      "class": "".concat(prefixCls, "-icon ").concat(prefixCls, "-image")
    }, [_createVNode(SVGComponent, null, null)]);
  }
  var IconComponent = IconMap[status];
  var iconNode = icon || _createVNode(IconComponent, null, null);
  return _createVNode("div", {
    "class": "".concat(prefixCls, "-icon")
  }, [iconNode]);
};
var renderExtra = function renderExtra(prefixCls, extra) {
  return extra && _createVNode("div", {
    "class": "".concat(prefixCls, "-extra")
  }, [extra]);
};
var Result = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'AResult',
  props: resultProps(),
  slots: ['title', 'subTitle', 'icon', 'extra'],
  setup: function setup(props, _ref2) {
    var slots = _ref2.slots;
    var _useConfigInject = useConfigInject('result', props),
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction;
    var className = computed(function () {
      return classNames(prefixCls.value, "".concat(prefixCls.value, "-").concat(props.status), _defineProperty({}, "".concat(prefixCls.value, "-rtl"), direction.value === 'rtl'));
    });
    return function () {
      var _props$title, _slots$title, _props$subTitle, _slots$subTitle, _props$icon, _slots$icon, _props$extra, _slots$extra;
      var title = (_props$title = props.title) !== null && _props$title !== void 0 ? _props$title : (_slots$title = slots.title) === null || _slots$title === void 0 ? void 0 : _slots$title.call(slots);
      var subTitle = (_props$subTitle = props.subTitle) !== null && _props$subTitle !== void 0 ? _props$subTitle : (_slots$subTitle = slots.subTitle) === null || _slots$subTitle === void 0 ? void 0 : _slots$subTitle.call(slots);
      var icon = (_props$icon = props.icon) !== null && _props$icon !== void 0 ? _props$icon : (_slots$icon = slots.icon) === null || _slots$icon === void 0 ? void 0 : _slots$icon.call(slots);
      var extra = (_props$extra = props.extra) !== null && _props$extra !== void 0 ? _props$extra : (_slots$extra = slots.extra) === null || _slots$extra === void 0 ? void 0 : _slots$extra.call(slots);
      var pre = prefixCls.value;
      return _createVNode("div", {
        "class": className.value
      }, [renderIcon(pre, {
        status: props.status,
        icon: icon
      }), _createVNode("div", {
        "class": "".concat(pre, "-title")
      }, [title]), subTitle && _createVNode("div", {
        "class": "".concat(pre, "-subtitle")
      }, [subTitle]), renderExtra(pre, extra), slots.default && _createVNode("div", {
        "class": "".concat(pre, "-content")
      }, [slots.default()])]);
    };
  }
});
/* add resource */
Result.PRESENTED_IMAGE_403 = ExceptionMap[403];
Result.PRESENTED_IMAGE_404 = ExceptionMap[404];
Result.PRESENTED_IMAGE_500 = ExceptionMap[500];
/* istanbul ignore next */
Result.install = function (app) {
  app.component(Result.name, Result);
  return app;
};
export default Result;