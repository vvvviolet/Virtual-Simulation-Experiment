"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useProvideExpandedRow = exports.useInjectExpandedRow = exports.ExpandedRowContextKey = void 0;
var _vue = require("vue");
var ExpandedRowContextKey = Symbol('ExpandedRowProps');
exports.ExpandedRowContextKey = ExpandedRowContextKey;
var useProvideExpandedRow = function useProvideExpandedRow(props) {
  (0, _vue.provide)(ExpandedRowContextKey, props);
};
exports.useProvideExpandedRow = useProvideExpandedRow;
var useInjectExpandedRow = function useInjectExpandedRow() {
  return (0, _vue.inject)(ExpandedRowContextKey, {});
};
exports.useInjectExpandedRow = useInjectExpandedRow;