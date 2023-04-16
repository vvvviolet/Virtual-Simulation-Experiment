import _extends from "@babel/runtime/helpers/esm/extends";
function omit(obj, fields) {
  // eslint-disable-next-line prefer-object-spread
  var shallowCopy = _extends({}, obj);
  for (var i = 0; i < fields.length; i += 1) {
    var key = fields[i];
    delete shallowCopy[key];
  }
  return shallowCopy;
}
export default omit;