import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["prefixCls", "count", "title", "show", "component", "class", "style"];
import { createVNode as _createVNode } from "vue";
import classNames from '../_util/classNames';
import PropTypes from '../_util/vue-types';
import { cloneElement } from '../_util/vnode';
import { defineComponent } from 'vue';
import useConfigInject from '../_util/hooks/useConfigInject';
import SingleNumber from './SingleNumber';
import { filterEmpty } from '../_util/props-util';
var scrollNumberProps = {
  prefixCls: String,
  count: PropTypes.any,
  component: String,
  title: PropTypes.any,
  show: Boolean
};
export default defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: 'ScrollNumber',
  inheritAttrs: false,
  props: scrollNumberProps,
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      slots = _ref.slots;
    var _useConfigInject = useConfigInject('scroll-number', props),
      prefixCls = _useConfigInject.prefixCls;
    return function () {
      var _slots$default;
      var _props$attrs = _objectSpread(_objectSpread({}, props), attrs),
        customizePrefixCls = _props$attrs.prefixCls,
        count = _props$attrs.count,
        title = _props$attrs.title,
        show = _props$attrs.show,
        _props$attrs$componen = _props$attrs.component,
        Tag = _props$attrs$componen === void 0 ? 'sup' : _props$attrs$componen,
        className = _props$attrs.class,
        style = _props$attrs.style,
        restProps = _objectWithoutProperties(_props$attrs, _excluded);
      // ============================ Render ============================
      var newProps = _objectSpread(_objectSpread({}, restProps), {}, {
        style: style,
        'data-show': props.show,
        class: classNames(prefixCls.value, className),
        title: title
      });
      // Only integer need motion
      var numberNodes = count;
      if (count && Number(count) % 1 === 0) {
        var numberList = String(count).split('');
        numberNodes = numberList.map(function (num, i) {
          return _createVNode(SingleNumber, {
            "prefixCls": prefixCls.value,
            "count": Number(count),
            "value": num,
            "key": numberList.length - i
          }, null);
        });
      }
      // allow specify the border
      // mock border-color by box-shadow for compatible with old usage:
      // <Badge count={4} style={{ backgroundColor: '#fff', color: '#999', borderColor: '#d9d9d9' }} />
      if (style && style.borderColor) {
        newProps.style = _objectSpread(_objectSpread({}, style), {}, {
          boxShadow: "0 0 0 1px ".concat(style.borderColor, " inset")
        });
      }
      var children = filterEmpty((_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots));
      if (children && children.length) {
        return cloneElement(children, {
          class: classNames("".concat(prefixCls.value, "-custom-component"))
        }, false);
      }
      return _createVNode(Tag, newProps, {
        default: function _default() {
          return [numberNodes];
        }
      });
    };
  }
});