import { onBeforeUnmount } from 'vue';
/**
 * Locker return cached mark.
 * If set to `true`, will return `true` in a short time even if set `false`.
 * If set to `false` and then set to `true`, will change to `true`.
 * And after time duration, it will back to `null` automatically.
 */
export default function useLock() {
  var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 250;
  var lock = null;
  var timeout;
  onBeforeUnmount(function () {
    clearTimeout(timeout);
  });
  function doLock(locked) {
    if (locked || lock === null) {
      lock = locked;
    }
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      lock = null;
    }, duration);
  }
  return [function () {
    return lock;
  }, doLock];
}