"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toReactive = toReactive;
var _vue = require("vue");
/**
 * Converts ref to reactive.
 *
 * @see https://vueuse.org/toReactive
 * @param objectRef A ref of object
 */
function toReactive(objectRef) {
  if (!(0, _vue.isRef)(objectRef)) return (0, _vue.reactive)(objectRef);
  var proxy = new Proxy({}, {
    get: function get(_, p, receiver) {
      return Reflect.get(objectRef.value, p, receiver);
    },
    set: function set(_, p, value) {
      objectRef.value[p] = value;
      return true;
    },
    deleteProperty: function deleteProperty(_, p) {
      return Reflect.deleteProperty(objectRef.value, p);
    },
    has: function has(_, p) {
      return Reflect.has(objectRef.value, p);
    },
    ownKeys: function ownKeys() {
      return Object.keys(objectRef.value);
    },
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor() {
      return {
        enumerable: true,
        configurable: true
      };
    }
  });
  return (0, _vue.reactive)(proxy);
}