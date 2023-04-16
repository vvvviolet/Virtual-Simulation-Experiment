"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _PanelContext = require("../PanelContext");
var _timeUtil = require("../utils/timeUtil");
var _dateUtil = require("../utils/dateUtil");
var _classNames = _interopRequireDefault(require("../../_util/classNames"));
var _useMergeProps2 = _interopRequireDefault(require("../hooks/useMergeProps"));
function PanelBody(_props) {
  var _useMergeProps = (0, _useMergeProps2.default)(_props),
    prefixCls = _useMergeProps.prefixCls,
    disabledDate = _useMergeProps.disabledDate,
    onSelect = _useMergeProps.onSelect,
    picker = _useMergeProps.picker,
    rowNum = _useMergeProps.rowNum,
    colNum = _useMergeProps.colNum,
    prefixColumn = _useMergeProps.prefixColumn,
    rowClassName = _useMergeProps.rowClassName,
    baseDate = _useMergeProps.baseDate,
    getCellClassName = _useMergeProps.getCellClassName,
    getCellText = _useMergeProps.getCellText,
    getCellNode = _useMergeProps.getCellNode,
    getCellDate = _useMergeProps.getCellDate,
    generateConfig = _useMergeProps.generateConfig,
    titleCell = _useMergeProps.titleCell,
    headerCells = _useMergeProps.headerCells;
  var _useInjectPanel = (0, _PanelContext.useInjectPanel)(),
    onDateMouseenter = _useInjectPanel.onDateMouseenter,
    onDateMouseleave = _useInjectPanel.onDateMouseleave,
    mode = _useInjectPanel.mode;
  var cellPrefixCls = "".concat(prefixCls, "-cell");
  // =============================== Body ===============================
  var rows = [];
  for (var i = 0; i < rowNum; i += 1) {
    var row = [];
    var rowStartDate = void 0;
    var _loop = function _loop() {
      var _objectSpread2;
      var offset = i * colNum + j;
      var currentDate = getCellDate(baseDate, offset);
      var disabled = (0, _dateUtil.getCellDateDisabled)({
        cellDate: currentDate,
        mode: mode.value,
        disabledDate: disabledDate,
        generateConfig: generateConfig
      });
      if (j === 0) {
        rowStartDate = currentDate;
        if (prefixColumn) {
          row.push(prefixColumn(rowStartDate));
        }
      }
      var title = titleCell && titleCell(currentDate);
      row.push((0, _vue.createVNode)("td", {
        "key": j,
        "title": title,
        "class": (0, _classNames.default)(cellPrefixCls, (0, _objectSpread3.default)((_objectSpread2 = {}, (0, _defineProperty2.default)(_objectSpread2, "".concat(cellPrefixCls, "-disabled"), disabled), (0, _defineProperty2.default)(_objectSpread2, "".concat(cellPrefixCls, "-start"), getCellText(currentDate) === 1 || picker === 'year' && Number(title) % 10 === 0), (0, _defineProperty2.default)(_objectSpread2, "".concat(cellPrefixCls, "-end"), title === (0, _timeUtil.getLastDay)(generateConfig, currentDate) || picker === 'year' && Number(title) % 10 === 9), _objectSpread2), getCellClassName(currentDate))),
        "onClick": function onClick() {
          if (!disabled) {
            onSelect(currentDate);
          }
        },
        "onMouseenter": function onMouseenter() {
          if (!disabled && onDateMouseenter) {
            onDateMouseenter(currentDate);
          }
        },
        "onMouseleave": function onMouseleave() {
          if (!disabled && onDateMouseleave) {
            onDateMouseleave(currentDate);
          }
        }
      }, [getCellNode ? getCellNode(currentDate) : (0, _vue.createVNode)("div", {
        "class": "".concat(cellPrefixCls, "-inner")
      }, [getCellText(currentDate)])]));
    };
    for (var j = 0; j < colNum; j += 1) {
      _loop();
    }
    rows.push((0, _vue.createVNode)("tr", {
      "key": i,
      "class": rowClassName && rowClassName(rowStartDate)
    }, [row]));
  }
  return (0, _vue.createVNode)("div", {
    "class": "".concat(prefixCls, "-body")
  }, [(0, _vue.createVNode)("table", {
    "class": "".concat(prefixCls, "-content")
  }, [headerCells && (0, _vue.createVNode)("thead", null, [(0, _vue.createVNode)("tr", null, [headerCells])]), (0, _vue.createVNode)("tbody", null, [rows])])]);
}
PanelBody.displayName = 'PanelBody';
PanelBody.inheritAttrs = false;
var _default = PanelBody;
exports.default = _default;