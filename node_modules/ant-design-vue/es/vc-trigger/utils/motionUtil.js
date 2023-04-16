export function getMotion(_ref) {
  var prefixCls = _ref.prefixCls,
    animation = _ref.animation,
    transitionName = _ref.transitionName;
  if (animation) {
    return {
      name: "".concat(prefixCls, "-").concat(animation)
    };
  }
  if (transitionName) {
    return {
      name: transitionName
    };
  }
  return {};
}