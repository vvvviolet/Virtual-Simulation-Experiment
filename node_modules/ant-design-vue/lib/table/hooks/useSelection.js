"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SELECTION_NONE = exports.SELECTION_INVERT = exports.SELECTION_COLUMN = exports.SELECTION_ALL = void 0;
exports.default = useSelection;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _DownOutlined = _interopRequireDefault(require("@ant-design/icons-vue/lib/icons/DownOutlined"));
var _vcTable = require("../../vc-table");
var _util = require("../../vc-tree/util");
var _conductUtil = require("../../vc-tree/utils/conductUtil");
var _treeUtil = require("../../vc-tree/utils/treeUtil");
var _devWarning = _interopRequireDefault(require("../../vc-util/devWarning"));
var _useMergedState3 = _interopRequireDefault(require("../../_util/hooks/useMergedState"));
var _useState3 = _interopRequireDefault(require("../../_util/hooks/useState"));
var _checkbox = _interopRequireDefault(require("../../checkbox"));
var _dropdown = _interopRequireDefault(require("../../dropdown"));
var _menu = _interopRequireDefault(require("../../menu"));
var _radio = _interopRequireDefault(require("../../radio"));
var _useMaxLevel2 = _interopRequireDefault(require("../../vc-tree/useMaxLevel"));
// TODO: warning if use ajax!!!
var SELECTION_COLUMN = {};
exports.SELECTION_COLUMN = SELECTION_COLUMN;
var SELECTION_ALL = 'SELECT_ALL';
exports.SELECTION_ALL = SELECTION_ALL;
var SELECTION_INVERT = 'SELECT_INVERT';
exports.SELECTION_INVERT = SELECTION_INVERT;
var SELECTION_NONE = 'SELECT_NONE';
exports.SELECTION_NONE = SELECTION_NONE;
var EMPTY_LIST = [];
function flattenData(data, childrenColumnName) {
  var list = [];
  (data || []).forEach(function (record) {
    list.push(record);
    if (record && (0, _typeof2.default)(record) === 'object' && childrenColumnName in record) {
      list = [].concat((0, _toConsumableArray2.default)(list), (0, _toConsumableArray2.default)(flattenData(record[childrenColumnName], childrenColumnName)));
    }
  });
  return list;
}
function useSelection(rowSelectionRef, configRef) {
  var mergedRowSelection = (0, _vue.computed)(function () {
    var temp = rowSelectionRef.value || {};
    var _temp$checkStrictly = temp.checkStrictly,
      checkStrictly = _temp$checkStrictly === void 0 ? true : _temp$checkStrictly;
    return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, temp), {}, {
      checkStrictly: checkStrictly
    });
  });
  // ========================= Keys =========================
  var _useMergedState = (0, _useMergedState3.default)(mergedRowSelection.value.selectedRowKeys || mergedRowSelection.value.defaultSelectedRowKeys || EMPTY_LIST, {
      value: (0, _vue.computed)(function () {
        return mergedRowSelection.value.selectedRowKeys;
      })
    }),
    _useMergedState2 = (0, _slicedToArray2.default)(_useMergedState, 2),
    mergedSelectedKeys = _useMergedState2[0],
    setMergedSelectedKeys = _useMergedState2[1];
  // ======================== Caches ========================
  var preserveRecordsRef = (0, _vue.shallowRef)(new Map());
  var updatePreserveRecordsCache = function updatePreserveRecordsCache(keys) {
    if (mergedRowSelection.value.preserveSelectedRowKeys) {
      var newCache = new Map();
      // Keep key if mark as preserveSelectedRowKeys
      keys.forEach(function (key) {
        var record = configRef.getRecordByKey(key);
        if (!record && preserveRecordsRef.value.has(key)) {
          record = preserveRecordsRef.value.get(key);
        }
        newCache.set(key, record);
      });
      // Refresh to new cache
      preserveRecordsRef.value = newCache;
    }
  };
  (0, _vue.watchEffect)(function () {
    updatePreserveRecordsCache(mergedSelectedKeys.value);
  });
  var keyEntities = (0, _vue.computed)(function () {
    return mergedRowSelection.value.checkStrictly ? null : (0, _treeUtil.convertDataToEntities)(configRef.data.value, {
      externalGetKey: configRef.getRowKey.value,
      childrenPropName: configRef.childrenColumnName.value
    }).keyEntities;
  });
  // Get flatten data
  var flattedData = (0, _vue.computed)(function () {
    return flattenData(configRef.pageData.value, configRef.childrenColumnName.value);
  });
  // Get all checkbox props
  var checkboxPropsMap = (0, _vue.computed)(function () {
    var map = new Map();
    var getRowKey = configRef.getRowKey.value;
    var getCheckboxProps = mergedRowSelection.value.getCheckboxProps;
    flattedData.value.forEach(function (record, index) {
      var key = getRowKey(record, index);
      var checkboxProps = (getCheckboxProps ? getCheckboxProps(record) : null) || {};
      map.set(key, checkboxProps);
      if (process.env.NODE_ENV !== 'production' && ('checked' in checkboxProps || 'defaultChecked' in checkboxProps)) {
        (0, _devWarning.default)(false, 'Table', 'Do not set `checked` or `defaultChecked` in `getCheckboxProps`. Please use `selectedRowKeys` instead.');
      }
    });
    return map;
  });
  var _useMaxLevel = (0, _useMaxLevel2.default)(keyEntities),
    maxLevel = _useMaxLevel.maxLevel,
    levelEntities = _useMaxLevel.levelEntities;
  var isCheckboxDisabled = function isCheckboxDisabled(r) {
    var _checkboxPropsMap$val;
    return !!((_checkboxPropsMap$val = checkboxPropsMap.value.get(configRef.getRowKey.value(r))) !== null && _checkboxPropsMap$val !== void 0 && _checkboxPropsMap$val.disabled);
  };
  var selectKeysState = (0, _vue.computed)(function () {
    if (mergedRowSelection.value.checkStrictly) {
      return [mergedSelectedKeys.value || [], []];
    }
    var _conductCheck = (0, _conductUtil.conductCheck)(mergedSelectedKeys.value, true, keyEntities.value, maxLevel.value, levelEntities.value, isCheckboxDisabled),
      checkedKeys = _conductCheck.checkedKeys,
      halfCheckedKeys = _conductCheck.halfCheckedKeys;
    return [checkedKeys || [], halfCheckedKeys];
  });
  var derivedSelectedKeys = (0, _vue.computed)(function () {
    return selectKeysState.value[0];
  });
  var derivedHalfSelectedKeys = (0, _vue.computed)(function () {
    return selectKeysState.value[1];
  });
  var derivedSelectedKeySet = (0, _vue.computed)(function () {
    var keys = mergedRowSelection.value.type === 'radio' ? derivedSelectedKeys.value.slice(0, 1) : derivedSelectedKeys.value;
    return new Set(keys);
  });
  var derivedHalfSelectedKeySet = (0, _vue.computed)(function () {
    return mergedRowSelection.value.type === 'radio' ? new Set() : new Set(derivedHalfSelectedKeys.value);
  });
  // Save last selected key to enable range selection
  var _useState = (0, _useState3.default)(null),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    lastSelectedKey = _useState2[0],
    setLastSelectedKey = _useState2[1];
  // // Reset if rowSelection reset
  // we use computed to reset, donot need setMergedSelectedKeys again like react
  // https://github.com/vueComponent/ant-design-vue/issues/4885
  // watchEffect(() => {
  //   if (!rowSelectionRef.value) {
  //     setMergedSelectedKeys([]);
  //   }
  // });
  var setSelectedKeys = function setSelectedKeys(keys) {
    var availableKeys;
    var records;
    updatePreserveRecordsCache(keys);
    var _mergedRowSelection$v = mergedRowSelection.value,
      preserveSelectedRowKeys = _mergedRowSelection$v.preserveSelectedRowKeys,
      onSelectionChange = _mergedRowSelection$v.onChange;
    var getRecordByKey = configRef.getRecordByKey;
    if (preserveSelectedRowKeys) {
      availableKeys = keys;
      records = keys.map(function (key) {
        return preserveRecordsRef.value.get(key);
      });
    } else {
      // Filter key which not exist in the `dataSource`
      availableKeys = [];
      records = [];
      keys.forEach(function (key) {
        var record = getRecordByKey(key);
        if (record !== undefined) {
          availableKeys.push(key);
          records.push(record);
        }
      });
    }
    setMergedSelectedKeys(availableKeys);
    onSelectionChange === null || onSelectionChange === void 0 ? void 0 : onSelectionChange(availableKeys, records);
  };
  // ====================== Selections ======================
  // Trigger single `onSelect` event
  var triggerSingleSelection = function triggerSingleSelection(key, selected, keys, event) {
    var onSelect = mergedRowSelection.value.onSelect;
    var _ref = configRef || {},
      getRecordByKey = _ref.getRecordByKey;
    if (onSelect) {
      var rows = keys.map(function (k) {
        return getRecordByKey(k);
      });
      onSelect(getRecordByKey(key), selected, rows, event);
    }
    setSelectedKeys(keys);
  };
  var mergedSelections = (0, _vue.computed)(function () {
    var _mergedRowSelection$v2 = mergedRowSelection.value,
      onSelectInvert = _mergedRowSelection$v2.onSelectInvert,
      onSelectNone = _mergedRowSelection$v2.onSelectNone,
      selections = _mergedRowSelection$v2.selections,
      hideSelectAll = _mergedRowSelection$v2.hideSelectAll;
    var data = configRef.data,
      pageData = configRef.pageData,
      getRowKey = configRef.getRowKey,
      tableLocale = configRef.locale;
    if (!selections || hideSelectAll) {
      return null;
    }
    var selectionList = selections === true ? [SELECTION_ALL, SELECTION_INVERT, SELECTION_NONE] : selections;
    return selectionList.map(function (selection) {
      if (selection === SELECTION_ALL) {
        return {
          key: 'all',
          text: tableLocale.value.selectionAll,
          onSelect: function onSelect() {
            setSelectedKeys(data.value.map(function (record, index) {
              return getRowKey.value(record, index);
            }).filter(function (key) {
              var checkProps = checkboxPropsMap.value.get(key);
              return !(checkProps !== null && checkProps !== void 0 && checkProps.disabled) || derivedSelectedKeySet.value.has(key);
            }));
          }
        };
      }
      if (selection === SELECTION_INVERT) {
        return {
          key: 'invert',
          text: tableLocale.value.selectInvert,
          onSelect: function onSelect() {
            var keySet = new Set(derivedSelectedKeySet.value);
            pageData.value.forEach(function (record, index) {
              var key = getRowKey.value(record, index);
              var checkProps = checkboxPropsMap.value.get(key);
              if (!(checkProps !== null && checkProps !== void 0 && checkProps.disabled)) {
                if (keySet.has(key)) {
                  keySet.delete(key);
                } else {
                  keySet.add(key);
                }
              }
            });
            var keys = Array.from(keySet);
            if (onSelectInvert) {
              (0, _devWarning.default)(false, 'Table', '`onSelectInvert` will be removed in future. Please use `onChange` instead.');
              onSelectInvert(keys);
            }
            setSelectedKeys(keys);
          }
        };
      }
      if (selection === SELECTION_NONE) {
        return {
          key: 'none',
          text: tableLocale.value.selectNone,
          onSelect: function onSelect() {
            onSelectNone === null || onSelectNone === void 0 ? void 0 : onSelectNone();
            setSelectedKeys(Array.from(derivedSelectedKeySet.value).filter(function (key) {
              var checkProps = checkboxPropsMap.value.get(key);
              return checkProps === null || checkProps === void 0 ? void 0 : checkProps.disabled;
            }));
          }
        };
      }
      return selection;
    });
  });
  var flattedDataLength = (0, _vue.computed)(function () {
    return flattedData.value.length;
  });
  // ======================= Columns ========================
  var transformColumns = function transformColumns(columns) {
    var _prevCol$INTERNAL_COL;
    var _mergedRowSelection$v3 = mergedRowSelection.value,
      onSelectAll = _mergedRowSelection$v3.onSelectAll,
      onSelectMultiple = _mergedRowSelection$v3.onSelectMultiple,
      selectionColWidth = _mergedRowSelection$v3.columnWidth,
      selectionType = _mergedRowSelection$v3.type,
      fixed = _mergedRowSelection$v3.fixed,
      customizeRenderCell = _mergedRowSelection$v3.renderCell,
      hideSelectAll = _mergedRowSelection$v3.hideSelectAll,
      checkStrictly = _mergedRowSelection$v3.checkStrictly;
    var prefixCls = configRef.prefixCls,
      getRecordByKey = configRef.getRecordByKey,
      getRowKey = configRef.getRowKey,
      expandType = configRef.expandType,
      getPopupContainer = configRef.getPopupContainer;
    if (!rowSelectionRef.value) {
      if (process.env.NODE_ENV !== 'production') {
        (0, _devWarning.default)(!columns.includes(SELECTION_COLUMN), 'Table', '`rowSelection` is not config but `SELECTION_COLUMN` exists in the `columns`.');
      }
      return columns.filter(function (col) {
        return col !== SELECTION_COLUMN;
      });
    }
    // Support selection
    var cloneColumns = columns.slice();
    var keySet = new Set(derivedSelectedKeySet.value);
    // Record key only need check with enabled
    var recordKeys = flattedData.value.map(getRowKey.value).filter(function (key) {
      return !checkboxPropsMap.value.get(key).disabled;
    });
    var checkedCurrentAll = recordKeys.every(function (key) {
      return keySet.has(key);
    });
    var checkedCurrentSome = recordKeys.some(function (key) {
      return keySet.has(key);
    });
    var onSelectAllChange = function onSelectAllChange() {
      var changeKeys = [];
      if (checkedCurrentAll) {
        recordKeys.forEach(function (key) {
          keySet.delete(key);
          changeKeys.push(key);
        });
      } else {
        recordKeys.forEach(function (key) {
          if (!keySet.has(key)) {
            keySet.add(key);
            changeKeys.push(key);
          }
        });
      }
      var keys = Array.from(keySet);
      onSelectAll === null || onSelectAll === void 0 ? void 0 : onSelectAll(!checkedCurrentAll, keys.map(function (k) {
        return getRecordByKey(k);
      }), changeKeys.map(function (k) {
        return getRecordByKey(k);
      }));
      setSelectedKeys(keys);
    };
    // ===================== Render =====================
    // Title Cell
    var title;
    if (selectionType !== 'radio') {
      var customizeSelections;
      if (mergedSelections.value) {
        var menu = (0, _vue.createVNode)(_menu.default, {
          "getPopupContainer": getPopupContainer.value
        }, {
          default: function _default() {
            return [mergedSelections.value.map(function (selection, index) {
              var key = selection.key,
                text = selection.text,
                onSelectionClick = selection.onSelect;
              return (0, _vue.createVNode)(_menu.default.Item, {
                "key": key || index,
                "onClick": function onClick() {
                  onSelectionClick === null || onSelectionClick === void 0 ? void 0 : onSelectionClick(recordKeys);
                }
              }, {
                default: function _default() {
                  return [text];
                }
              });
            })];
          }
        });
        customizeSelections = (0, _vue.createVNode)("div", {
          "class": "".concat(prefixCls.value, "-selection-extra")
        }, [(0, _vue.createVNode)(_dropdown.default, {
          "overlay": menu,
          "getPopupContainer": getPopupContainer.value
        }, {
          default: function _default() {
            return [(0, _vue.createVNode)("span", null, [(0, _vue.createVNode)(_DownOutlined.default, null, null)])];
          }
        })]);
      }
      var allDisabledData = flattedData.value.map(function (record, index) {
        var key = getRowKey.value(record, index);
        var checkboxProps = checkboxPropsMap.value.get(key) || {};
        return (0, _objectSpread2.default)({
          checked: keySet.has(key)
        }, checkboxProps);
      }).filter(function (_ref2) {
        var disabled = _ref2.disabled;
        return disabled;
      });
      var allDisabled = !!allDisabledData.length && allDisabledData.length === flattedDataLength.value;
      var allDisabledAndChecked = allDisabled && allDisabledData.every(function (_ref3) {
        var checked = _ref3.checked;
        return checked;
      });
      var allDisabledSomeChecked = allDisabled && allDisabledData.some(function (_ref4) {
        var checked = _ref4.checked;
        return checked;
      });
      title = !hideSelectAll && (0, _vue.createVNode)("div", {
        "class": "".concat(prefixCls.value, "-selection")
      }, [(0, _vue.createVNode)(_checkbox.default, {
        "checked": !allDisabled ? !!flattedDataLength.value && checkedCurrentAll : allDisabledAndChecked,
        "indeterminate": !allDisabled ? !checkedCurrentAll && checkedCurrentSome : !allDisabledAndChecked && allDisabledSomeChecked,
        "onChange": onSelectAllChange,
        "disabled": flattedDataLength.value === 0 || allDisabled,
        "skipGroup": true
      }, null), customizeSelections]);
    }
    // Body Cell
    var renderCell;
    if (selectionType === 'radio') {
      renderCell = function renderCell(_ref5) {
        var record = _ref5.record,
          index = _ref5.index;
        var key = getRowKey.value(record, index);
        var checked = keySet.has(key);
        return {
          node: (0, _vue.createVNode)(_radio.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, checkboxPropsMap.value.get(key)), {}, {
            "checked": checked,
            "onClick": function onClick(e) {
              return e.stopPropagation();
            },
            "onChange": function onChange(event) {
              if (!keySet.has(key)) {
                triggerSingleSelection(key, true, [key], event.nativeEvent);
              }
            }
          }), null),
          checked: checked
        };
      };
    } else {
      renderCell = function renderCell(_ref6) {
        var record = _ref6.record,
          index = _ref6.index;
        var key = getRowKey.value(record, index);
        var checked = keySet.has(key);
        var indeterminate = derivedHalfSelectedKeySet.value.has(key);
        var checkboxProps = checkboxPropsMap.value.get(key);
        var mergedIndeterminate;
        if (expandType.value === 'nest') {
          mergedIndeterminate = indeterminate;
          (0, _devWarning.default)(typeof (checkboxProps === null || checkboxProps === void 0 ? void 0 : checkboxProps.indeterminate) !== 'boolean', 'Table', 'set `indeterminate` using `rowSelection.getCheckboxProps` is not allowed with tree structured dataSource.');
        } else {
          var _checkboxProps$indete;
          mergedIndeterminate = (_checkboxProps$indete = checkboxProps === null || checkboxProps === void 0 ? void 0 : checkboxProps.indeterminate) !== null && _checkboxProps$indete !== void 0 ? _checkboxProps$indete : indeterminate;
        }
        // Record checked
        return {
          node: (0, _vue.createVNode)(_checkbox.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, checkboxProps), {}, {
            "indeterminate": mergedIndeterminate,
            "checked": checked,
            "skipGroup": true,
            "onClick": function onClick(e) {
              return e.stopPropagation();
            },
            "onChange": function onChange(_ref7) {
              var nativeEvent = _ref7.nativeEvent;
              var shiftKey = nativeEvent.shiftKey;
              var startIndex = -1;
              var endIndex = -1;
              // Get range of this
              if (shiftKey && checkStrictly) {
                var pointKeys = new Set([lastSelectedKey.value, key]);
                recordKeys.some(function (recordKey, recordIndex) {
                  if (pointKeys.has(recordKey)) {
                    if (startIndex === -1) {
                      startIndex = recordIndex;
                    } else {
                      endIndex = recordIndex;
                      return true;
                    }
                  }
                  return false;
                });
              }
              if (endIndex !== -1 && startIndex !== endIndex && checkStrictly) {
                // Batch update selections
                var rangeKeys = recordKeys.slice(startIndex, endIndex + 1);
                var changedKeys = [];
                if (checked) {
                  rangeKeys.forEach(function (recordKey) {
                    if (keySet.has(recordKey)) {
                      changedKeys.push(recordKey);
                      keySet.delete(recordKey);
                    }
                  });
                } else {
                  rangeKeys.forEach(function (recordKey) {
                    if (!keySet.has(recordKey)) {
                      changedKeys.push(recordKey);
                      keySet.add(recordKey);
                    }
                  });
                }
                var keys = Array.from(keySet);
                onSelectMultiple === null || onSelectMultiple === void 0 ? void 0 : onSelectMultiple(!checked, keys.map(function (recordKey) {
                  return getRecordByKey(recordKey);
                }), changedKeys.map(function (recordKey) {
                  return getRecordByKey(recordKey);
                }));
                setSelectedKeys(keys);
              } else {
                // Single record selected
                var originCheckedKeys = derivedSelectedKeys.value;
                if (checkStrictly) {
                  var checkedKeys = checked ? (0, _util.arrDel)(originCheckedKeys, key) : (0, _util.arrAdd)(originCheckedKeys, key);
                  triggerSingleSelection(key, !checked, checkedKeys, nativeEvent);
                } else {
                  // Always fill first
                  var result = (0, _conductUtil.conductCheck)([].concat((0, _toConsumableArray2.default)(originCheckedKeys), [key]), true, keyEntities.value, maxLevel.value, levelEntities.value, isCheckboxDisabled);
                  var _checkedKeys = result.checkedKeys,
                    halfCheckedKeys = result.halfCheckedKeys;
                  var nextCheckedKeys = _checkedKeys;
                  // If remove, we do it again to correction
                  if (checked) {
                    var tempKeySet = new Set(_checkedKeys);
                    tempKeySet.delete(key);
                    nextCheckedKeys = (0, _conductUtil.conductCheck)(Array.from(tempKeySet), {
                      checked: false,
                      halfCheckedKeys: halfCheckedKeys
                    }, keyEntities.value, maxLevel.value, levelEntities.value, isCheckboxDisabled).checkedKeys;
                  }
                  triggerSingleSelection(key, !checked, nextCheckedKeys, nativeEvent);
                }
              }
              setLastSelectedKey(key);
            }
          }), null),
          checked: checked
        };
      };
    }
    var renderSelectionCell = function renderSelectionCell(_ref8) {
      var record = _ref8.record,
        index = _ref8.index;
      var _renderCell = renderCell({
          record: record,
          index: index
        }),
        node = _renderCell.node,
        checked = _renderCell.checked;
      if (customizeRenderCell) {
        return customizeRenderCell(checked, record, index, node);
      }
      return node;
    };
    // Insert selection column if not exist
    if (!cloneColumns.includes(SELECTION_COLUMN)) {
      // Always after expand icon
      if (cloneColumns.findIndex(function (col) {
        var _col$INTERNAL_COL_DEF;
        return ((_col$INTERNAL_COL_DEF = col[_vcTable.INTERNAL_COL_DEFINE]) === null || _col$INTERNAL_COL_DEF === void 0 ? void 0 : _col$INTERNAL_COL_DEF.columnType) === 'EXPAND_COLUMN';
      }) === 0) {
        var _cloneColumns = cloneColumns,
          _cloneColumns2 = (0, _toArray2.default)(_cloneColumns),
          expandColumn = _cloneColumns2[0],
          restColumns = _cloneColumns2.slice(1);
        cloneColumns = [expandColumn, SELECTION_COLUMN].concat((0, _toConsumableArray2.default)(restColumns));
      } else {
        // Normal insert at first column
        cloneColumns = [SELECTION_COLUMN].concat((0, _toConsumableArray2.default)(cloneColumns));
      }
    }
    // Deduplicate selection column
    var selectionColumnIndex = cloneColumns.indexOf(SELECTION_COLUMN);
    if (process.env.NODE_ENV !== 'production' && cloneColumns.filter(function (col) {
      return col === SELECTION_COLUMN;
    }).length > 1) {
      (0, _devWarning.default)(false, 'Table', 'Multiple `SELECTION_COLUMN` exist in `columns`.');
    }
    cloneColumns = cloneColumns.filter(function (column, index) {
      return column !== SELECTION_COLUMN || index === selectionColumnIndex;
    });
    // Fixed column logic
    var prevCol = cloneColumns[selectionColumnIndex - 1];
    var nextCol = cloneColumns[selectionColumnIndex + 1];
    var mergedFixed = fixed;
    if (mergedFixed === undefined) {
      if ((nextCol === null || nextCol === void 0 ? void 0 : nextCol.fixed) !== undefined) {
        mergedFixed = nextCol.fixed;
      } else if ((prevCol === null || prevCol === void 0 ? void 0 : prevCol.fixed) !== undefined) {
        mergedFixed = prevCol.fixed;
      }
    }
    if (mergedFixed && prevCol && ((_prevCol$INTERNAL_COL = prevCol[_vcTable.INTERNAL_COL_DEFINE]) === null || _prevCol$INTERNAL_COL === void 0 ? void 0 : _prevCol$INTERNAL_COL.columnType) === 'EXPAND_COLUMN' && prevCol.fixed === undefined) {
      prevCol.fixed = mergedFixed;
    }
    // Replace with real selection column
    var selectionColumn = (0, _defineProperty2.default)({
      fixed: mergedFixed,
      width: selectionColWidth,
      className: "".concat(prefixCls.value, "-selection-column"),
      title: mergedRowSelection.value.columnTitle || title,
      customRender: renderSelectionCell
    }, _vcTable.INTERNAL_COL_DEFINE, {
      class: "".concat(prefixCls.value, "-selection-col")
    });
    return cloneColumns.map(function (col) {
      return col === SELECTION_COLUMN ? selectionColumn : col;
    });
  };
  return [transformColumns, derivedSelectedKeySet];
}