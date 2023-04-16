"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useProvideTable = exports.useInjectTable = exports.TableContextKey = void 0;
var _vue = require("vue");
var TableContextKey = Symbol('TableContextProps');
exports.TableContextKey = TableContextKey;
var useProvideTable = function useProvideTable(props) {
  (0, _vue.provide)(TableContextKey, props);
};
exports.useProvideTable = useProvideTable;
var useInjectTable = function useInjectTable() {
  return (0, _vue.inject)(TableContextKey, {});
};
exports.useInjectTable = useInjectTable;