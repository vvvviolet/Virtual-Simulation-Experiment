import supportsPassive from '../../_util/supportsPassive';
export default function addEventListenerWrap(target, eventType, cb, option) {
  if (target && target.addEventListener) {
    var opt = option;
    if (opt === undefined && supportsPassive && (eventType === 'touchstart' || eventType === 'touchmove' || eventType === 'wheel')) {
      opt = {
        passive: false
      };
    }
    target.addEventListener(eventType, cb, opt);
  }
  return {
    remove: function remove() {
      if (target && target.removeEventListener) {
        target.removeEventListener(eventType, cb);
      }
    }
  };
}