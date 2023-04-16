"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.basicProps = exports.Header = exports.Footer = exports.Content = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _useConfigInject3 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var _injectionKey = require("./injectionKey");
var basicProps = function basicProps() {
  return {
    prefixCls: String,
    hasSider: {
      type: Boolean,
      default: undefined
    },
    tagName: String
  };
};
exports.basicProps = basicProps;
function generator(_ref) {
  var suffixCls = _ref.suffixCls,
    tagName = _ref.tagName,
    name = _ref.name;
  return function (BasicComponent) {
    var Adapter = (0, _vue.defineComponent)({
      compatConfig: {
        MODE: 3
      },
      name: name,
      props: basicProps(),
      setup: function setup(props, _ref2) {
        var slots = _ref2.slots;
        var _useConfigInject = (0, _useConfigInject3.default)(suffixCls, props),
          prefixCls = _useConfigInject.prefixCls;
        return function () {
          var basicComponentProps = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
            prefixCls: prefixCls.value,
            tagName: tagName
          });
          return (0, _vue.createVNode)(BasicComponent, basicComponentProps, slots);
        };
      }
    });
    return Adapter;
  };
}
var Basic = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  props: basicProps(),
  setup: function setup(props, _ref3) {
    var slots = _ref3.slots;
    return function () {
      return (0, _vue.createVNode)(props.tagName, {
        class: props.prefixCls
      }, slots);
    };
  }
});
var BasicLayout = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  props: basicProps(),
  setup: function setup(props, _ref4) {
    var slots = _ref4.slots;
    var _useConfigInject2 = (0, _useConfigInject3.default)('', props),
      direction = _useConfigInject2.direction;
    var siders = (0, _vue.ref)([]);
    var siderHookProvider = {
      addSider: function addSider(id) {
        siders.value = [].concat((0, _toConsumableArray2.default)(siders.value), [id]);
      },
      removeSider: function removeSider(id) {
        siders.value = siders.value.filter(function (currentId) {
          return currentId !== id;
        });
      }
    };
    (0, _vue.provide)(_injectionKey.SiderHookProviderKey, siderHookProvider);
    var divCls = (0, _vue.computed)(function () {
      var _ref5;
      var prefixCls = props.prefixCls,
        hasSider = props.hasSider;
      return _ref5 = {}, (0, _defineProperty2.default)(_ref5, "".concat(prefixCls), true), (0, _defineProperty2.default)(_ref5, "".concat(prefixCls, "-has-sider"), typeof hasSider === 'boolean' ? hasSider : siders.value.length > 0), (0, _defineProperty2.default)(_ref5, "".concat(prefixCls, "-rtl"), direction.value === 'rtl'), _ref5;
    });
    return function () {
      var tagName = props.tagName;
      return (0, _vue.createVNode)(tagName, {
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
exports.Header = Header;
var Footer = generator({
  suffixCls: 'layout-footer',
  tagName: 'footer',
  name: 'ALayoutFooter'
})(Basic);
exports.Footer = Footer;
var Content = generator({
  suffixCls: 'layout-content',
  tagName: 'main',
  name: 'ALayoutContent'
})(Basic);
exports.Content = Content;
var _default = Layout;
exports.default = _default;