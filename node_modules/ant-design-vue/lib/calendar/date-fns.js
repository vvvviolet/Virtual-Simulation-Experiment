"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _dateFns = _interopRequireDefault(require("../vc-picker/generate/dateFns"));
var _type = require("../_util/type");
var _generateCalendar = _interopRequireDefault(require("./generateCalendar"));
var Calendar = (0, _generateCalendar.default)(_dateFns.default);
var _default = (0, _type.withInstall)(Calendar);
exports.default = _default;