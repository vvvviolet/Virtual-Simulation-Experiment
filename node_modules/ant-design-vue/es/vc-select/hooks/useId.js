import { ref } from 'vue';
import canUseDom from '../../_util/canUseDom';
var uuid = 0;
/** Is client side and not jsdom */
export var isBrowserClient = process.env.NODE_ENV !== 'test' && canUseDom();
/** Get unique id for accessibility usage */
export function getUUID() {
  var retId;
  // Test never reach
  /* istanbul ignore if */
  if (isBrowserClient) {
    retId = uuid;
    uuid += 1;
  } else {
    retId = 'TEST_OR_SSR';
  }
  return retId;
}
export default function useId() {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ref('');
  // Inner id for accessibility usage. Only work in client side
  var innerId = "rc_select_".concat(getUUID());
  return id.value || innerId;
}