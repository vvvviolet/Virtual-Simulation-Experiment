import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createVNode as _createVNode } from "vue";
import { useInjectPanel } from '../PanelContext';
import { getLastDay } from '../utils/timeUtil';
import { getCellDateDisabled } from '../utils/dateUtil';
import classNames from '../../_util/classNames';
import useMergeProps from '../hooks/useMergeProps';
function PanelBody(_props) {
  var _useMergeProps = useMergeProps(_props),
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
  var _useInjectPanel = useInjectPanel(),
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
      var disabled = getCellDateDisabled({
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
      row.push(_createVNode("td", {
        "key": j,
        "title": title,
        "class": classNames(cellPrefixCls, _objectSpread((_objectSpread2 = {}, _defineProperty(_objectSpread2, "".concat(cellPrefixCls, "-disabled"), disabled), _defineProperty(_objectSpread2, "".concat(cellPrefixCls, "-start"), getCellText(currentDate) === 1 || picker === 'year' && Number(title) % 10 === 0), _defineProperty(_objectSpread2, "".concat(cellPrefixCls, "-end"), title === getLastDay(generateConfig, currentDate) || picker === 'year' && Number(title) % 10 === 9), _objectSpread2), getCellClassName(currentDate))),
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
      }, [getCellNode ? getCellNode(currentDate) : _createVNode("div", {
        "class": "".concat(cellPrefixCls, "-inner")
      }, [getCellText(currentDate)])]));
    };
    for (var j = 0; j < colNum; j += 1) {
      _loop();
    }
    rows.push(_createVNode("tr", {
      "key": i,
      "class": rowClassName && rowClassName(rowStartDate)
    }, [row]));
  }
  return _createVNode("div", {
    "class": "".concat(prefixCls, "-body")
  }, [_createVNode("table", {
    "class": "".concat(prefixCls, "-content")
  }, [headerCells && _createVNode("thead", null, [_createVNode("tr", null, [headerCells])]), _createVNode("tbody", null, [rows])])]);
}
PanelBody.displayName = 'PanelBody';
PanelBody.inheritAttrs = false;
export default PanelBody;