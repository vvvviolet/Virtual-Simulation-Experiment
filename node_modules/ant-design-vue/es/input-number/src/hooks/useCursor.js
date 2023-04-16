import { warning } from '../../../vc-util/warning';
import { ref } from 'vue';
/**
 * Keep input cursor in the correct position if possible.
 * Is this necessary since we have `formatter` which may mass the content?
 */
export default function useCursor(inputRef, focused) {
  var selectionRef = ref(null);
  function recordCursor() {
    // Record position
    try {
      var _inputRef$value = inputRef.value,
        start = _inputRef$value.selectionStart,
        end = _inputRef$value.selectionEnd,
        value = _inputRef$value.value;
      var beforeTxt = value.substring(0, start);
      var afterTxt = value.substring(end);
      selectionRef.value = {
        start: start,
        end: end,
        value: value,
        beforeTxt: beforeTxt,
        afterTxt: afterTxt
      };
    } catch (e) {
      // Fix error in Chrome:
      // Failed to read the 'selectionStart' property from 'HTMLInputElement'
      // http://stackoverflow.com/q/21177489/3040605
    }
  }
  /**
   * Restore logic:
   *  1. back string same
   *  2. start string same
   */
  function restoreCursor() {
    if (inputRef.value && selectionRef.value && focused.value) {
      try {
        var value = inputRef.value.value;
        var _selectionRef$value = selectionRef.value,
          beforeTxt = _selectionRef$value.beforeTxt,
          afterTxt = _selectionRef$value.afterTxt,
          start = _selectionRef$value.start;
        var startPos = value.length;
        if (value.endsWith(afterTxt)) {
          startPos = value.length - selectionRef.value.afterTxt.length;
        } else if (value.startsWith(beforeTxt)) {
          startPos = beforeTxt.length;
        } else {
          var beforeLastChar = beforeTxt[start - 1];
          var newIndex = value.indexOf(beforeLastChar, start - 1);
          if (newIndex !== -1) {
            startPos = newIndex + 1;
          }
        }
        inputRef.value.setSelectionRange(startPos, startPos);
      } catch (e) {
        warning(false, "Something warning of cursor restore. Please fire issue about this: ".concat(e.message));
      }
    }
  }
  return [recordCursor, restoreCursor];
}