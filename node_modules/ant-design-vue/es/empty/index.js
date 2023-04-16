import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["image", "description", "imageStyle", "class"];
import { createVNode as _createVNode } from "vue";
import classNames from '../_util/classNames';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import DefaultEmptyImg from './empty';
import SimpleEmptyImg from './simple';
import { filterEmpty } from '../_util/props-util';
import PropTypes from '../_util/vue-types';
import { withInstall } from '../_util/type';
import useConfigInject from '../_util/hooks/useConfigInject';
var defaultEmptyImg = _createVNode(DefaultEmptyImg, null, null);
var simpleEmptyImg = _createVNode(SimpleEmptyImg, null, null);
var Empty = function Empty(props, _ref) {
  var _slots$description;
  var _ref$slots = _ref.slots,
    slots = _ref$slots === void 0 ? {} : _ref$slots,
    attrs = _ref.attrs;
  var _useConfigInject = useConfigInject('empty', props),
    direction = _useConfigInject.direction,
    prefixClsRef = _useConfigInject.prefixCls;
  var prefixCls = prefixClsRef.value;
  var _props$attrs = _objectSpread(_objectSpread({}, props), attrs),
    _props$attrs$image = _props$attrs.image,
    image = _props$attrs$image === void 0 ? defaultEmptyImg : _props$attrs$image,
    _props$attrs$descript = _props$attrs.description,
    description = _props$attrs$descript === void 0 ? ((_slots$description = slots.description) === null || _slots$description === void 0 ? void 0 : _slots$description.call(slots)) || undefined : _props$attrs$descript,
    imageStyle = _props$attrs.imageStyle,
    _props$attrs$class = _props$attrs.class,
    className = _props$attrs$class === void 0 ? '' : _props$attrs$class,
    restProps = _objectWithoutProperties(_props$attrs, _excluded);
  return _createVNode(LocaleReceiver, {
    "componentName": "Empty",
    "children": function children(locale) {
      var _classNames;
      var des = typeof description !== 'undefined' ? description : locale.description;
      var alt = typeof des === 'string' ? des : 'empty';
      var imageNode = null;
      if (typeof image === 'string') {
        imageNode = _createVNode("img", {
          "alt": alt,
          "src": image
        }, null);
      } else {
        imageNode = image;
      }
      return _createVNode("div", _objectSpread({
        "class": classNames(prefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-normal"), image === simpleEmptyImg), _defineProperty(_classNames, "".concat(prefixCls, "-rtl"), direction.value === 'rtl'), _classNames))
      }, restProps), [_createVNode("div", {
        "class": "".concat(prefixCls, "-image"),
        "style": imageStyle
      }, [imageNode]), des && _createVNode("p", {
        "class": "".concat(prefixCls, "-description")
      }, [des]), slots.default && _createVNode("div", {
        "class": "".concat(prefixCls, "-footer")
      }, [filterEmpty(slots.default())])]);
    }
  }, null);
};
Empty.displayName = 'AEmpty';
Empty.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
Empty.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;
Empty.inheritAttrs = false;
Empty.props = {
  prefixCls: String,
  image: PropTypes.any,
  description: PropTypes.any,
  imageStyle: {
    type: Object,
    default: undefined
  }
};
export default withInstall(Empty);