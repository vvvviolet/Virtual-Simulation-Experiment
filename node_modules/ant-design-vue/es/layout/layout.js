import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
import { computed, createVNode, defineComponent, provide, ref } from 'vue';
import useConfigInject from '../_util/hooks/useConfigInject';
import { SiderHookProviderKey } from './injectionKey';
export var basicProps = function basicProps() {
  return {
    prefixCls: String,
    hasSider: {
      type: Boolean,
      default: undefined
    },
    tagName: String
  };
};
function generator(_ref) {
  var suffixCls = _ref.suffixCls,
    tagName = _ref.tagName,
    name = _ref.name;
  return function (BasicComponent) {
    var Adapter = defineComponent({
      compatConfig: {
        MODE: 3
      },
      name: name,
      props: basicProps(),
      setup: function setup(props, _ref2) {
        var slots = _ref2.slots;
        var _useConfigInject = useConfigInject(suffixCls, props),
          prefixCls = _useConfigInject.prefixCls;
        return function () {
          var basicComponentProps = _objectSpread(_objectSpread({}, props), {}, {
            prefixCls: prefixCls.value,
            tagName: tagName
          });
          return _createVNode(BasicComponent, basicComponentProps, slots);
        };
      }
    });
    return Adapter;
  };
}
var Basic = defineComponent({
  compatConfig: {
    MODE: 3
  },
  props: basicProps(),
  setup: function setup(props, _ref3) {
    var slots = _ref3.slots;
    return function () {
      return createVNode(props.tagName, {
        class: props.prefixCls
      }, slots);
    };
  }
});
var BasicLayout = defineComponent({
  compatConfig: {
    MODE: 3
  },
  props: basicProps(),
  setup: function setup(props, _ref4) {
    var slots = _ref4.slots;
    var _useConfigInject2 = useConfigInject('', props),
      direction = _useConfigInject2.direction;
    var siders = ref([]);
    var siderHookProvider = {
      addSider: function addSider(id) {
        siders.value = [].concat(_toConsumableArray(siders.value), [id]);
      },
      removeSider: function removeSider(id) {
        siders.value = siders.value.filter(function (currentId) {
          return currentId !== id;
        });
      }
    };
    provide(SiderHookProviderKey, siderHookProvider);
    var divCls = computed(function () {
      var _ref5;
      var prefixCls = props.prefixCls,
        hasSider = props.hasSider;
      return _ref5 = {}, _defineProperty(_ref5, "".concat(prefixCls), true), _defineProperty(_ref5, "".concat(prefixCls, "-has-sider"), typeof hasSider === 'boolean' ? hasSider : siders.value.length > 0), _defineProperty(_ref5, "".concat(prefixCls, "-rtl"), direction.value === 'rtl'), _ref5;
    });
    return function () {
      var tagName = props.tagName;
      return createVNode(tagName, {
        class: divCls.value
      }, slots);
    };
  }
});
var Layout = generator({
  suffixCls: 'layout',
  tagName: 'section',
  name: 'ALayout'
})(BasicLayout);
var Header = generator({
  suffixCls: 'layout-header',
  tagName: 'header',
  name: 'ALayoutHeader'
})(Basic);
var Footer = generator({
  suffixCls: 'layout-footer',
  tagName: 'footer',
  name: 'ALayoutFooter'
})(Basic);
var Content = generator({
  suffixCls: 'layout-content',
  tagName: 'main',
  name: 'ALayoutContent'
})(Basic);
export { Header, Footer, Content };
export default Layout;