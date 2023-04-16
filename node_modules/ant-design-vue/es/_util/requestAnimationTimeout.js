import getRequestAnimationFrame, { cancelRequestAnimationFrame as caf } from './getRequestAnimationFrame';
var raf = getRequestAnimationFrame();
export var cancelAnimationTimeout = function cancelAnimationTimeout(frame) {
  return caf(frame.id);
};
export var requestAnimationTimeout = function requestAnimationTimeout(callback) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var start = Date.now();
  function timeout() {
    if (Date.now() - start >= delay) {
      callback.call();
    } else {
      frame.id = raf(timeout);
    }
  }
  var frame = {
    id: raf(timeout)
  };
  return frame;
};