"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useId;
exports.getUUID = getUUID;
exports.isBrowserClient = void 0;
var _vue = require("vue");
var _canUseDom = _interopRequireDefault(require("../../_util/canUseDom"));
var uuid = 0;
/** Is client side and not jsdom */
var isBrowserClient = process.env.NODE_ENV !== 'test' && (0, _canUseDom.default)();
/** Get unique id for accessibility usage */
exports.isBrowserClient = isBrowserClient;
function getUUID() {
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
function useId() {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _vue.ref)('');
  // Inner id for accessibility usage. Only work in client side
  var innerId = "rc_select_".concat(getUUID());
  return id.value || innerId;
}