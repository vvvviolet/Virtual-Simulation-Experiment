"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useProvideSummary = exports.useInjectSummary = exports.SummaryContextKey = void 0;
var _vue = require("vue");
var SummaryContextKey = Symbol('SummaryContextProps');
exports.SummaryContextKey = SummaryContextKey;
var useProvideSummary = function useProvideSummary(props) {
  (0, _vue.provide)(SummaryContextKey, props);
};
exports.useProvideSummary = useProvideSummary;
var useInjectSummary = function useInjectSummary() {
  return (0, _vue.inject)(SummaryContextKey, {});
};
exports.useInjectSummary = useInjectSummary;