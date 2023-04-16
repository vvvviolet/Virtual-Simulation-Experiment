import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
var initDefaultProps = function initDefaultProps(types, defaultProps) {
  var propTypes = _objectSpread({}, types);
  Object.keys(defaultProps).forEach(function (k) {
    var prop = propTypes[k];
    if (prop) {
      if (prop.type || prop.default) {
        prop.default = defaultProps[k];
      } else if (prop.def) {
        prop.def(defaultProps[k]);
      } else {
        propTypes[k] = {
          type: prop,
          default: defaultProps[k]
        };
      }
    } else {
      throw new Error("not have ".concat(k, " prop"));
    }
  });
  return propTypes;
};
export default initDefaultProps;