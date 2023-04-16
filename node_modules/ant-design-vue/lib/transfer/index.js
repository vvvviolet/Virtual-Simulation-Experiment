"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transferProps = exports.default = void 0;
var _vue = require("vue");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _vueTypes = _interopRequireDefault(require("../_util/vue-types"));
var _propsUtil = require("../_util/props-util");
var _classNames2 = _interopRequireDefault(require("../_util/classNames"));
var _list = _interopRequireDefault(require("./list"));
var _operation = _interopRequireDefault(require("./operation"));
var _LocaleReceiver = _interopRequireDefault(require("../locale-provider/LocaleReceiver"));
var _default3 = _interopRequireDefault(require("../locale-provider/default"));
var _type = require("../_util/type");
var _useConfigInject2 = _interopRequireDefault(require("../_util/hooks/useConfigInject"));
var _FormItemContext = require("../form/FormItemContext");
var transferProps = function transferProps() {
  return {
    id: String,
    prefixCls: String,
    dataSource: {
      type: Array,
      default: []
    },
    disabled: {
      type: Boolean,
      default: undefined
    },
    targetKeys: {
      type: Array,
      default: undefined
    },
    selectedKeys: {
      type: Array,
      default: undefined
    },
    render: {
      type: Function
    },
    listStyle: {
      type: [Function, Object],
      default: function _default() {
        return {};
      }
    },
    operationStyle: {
      type: Object,
      default: undefined
    },
    titles: {
      type: Array
    },
    operations: {
      type: Array
    },
    showSearch: {
      type: Boolean,
      default: false
    },
    filterOption: {
      type: Function
    },
    searchPlaceholder: String,
    notFoundContent: _vueTypes.default.any,
    locale: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    rowKey: {
      type: Function
    },
    showSelectAll: {
      type: Boolean,
      default: undefined
    },
    selectAllLabels: {
      type: Array
    },
    children: {
      type: Function
    },
    oneWay: {
      type: Boolean,
      default: undefined
    },
    pagination: {
      type: [Object, Boolean],
      default: undefined
    },
    onChange: Function,
    onSelectChange: Function,
    onSearch: Function,
    onScroll: Function,
    'onUpdate:targetKeys': Function,
    'onUpdate:selectedKeys': Function
  };
};
exports.transferProps = transferProps;
var Transfer = (0, _vue.defineComponent)({
  compatConfig: {
    MODE: 3
  },
  name: 'ATransfer',
  inheritAttrs: false,
  props: transferProps(),
  slots: ['leftTitle', 'rightTitle', 'children', 'render', 'notFoundContent', 'leftSelectAllLabel', 'rightSelectAllLabel', 'footer'],
  // emits: ['update:targetKeys', 'update:selectedKeys', 'change', 'search', 'scroll', 'selectChange'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
      attrs = _ref.attrs,
      slots = _ref.slots,
      expose = _ref.expose;
    var _useConfigInject = (0, _useConfigInject2.default)('transfer', props),
      configProvider = _useConfigInject.configProvider,
      prefixCls = _useConfigInject.prefixCls,
      direction = _useConfigInject.direction;
    var sourceSelectedKeys = (0, _vue.ref)([]);
    var targetSelectedKeys = (0, _vue.ref)([]);
    var formItemContext = (0, _FormItemContext.useInjectFormItemContext)();
    (0, _vue.watch)(function () {
      return props.selectedKeys;
    }, function () {
      var _props$selectedKeys, _props$selectedKeys2;
      sourceSelectedKeys.value = ((_props$selectedKeys = props.selectedKeys) === null || _props$selectedKeys === void 0 ? void 0 : _props$selectedKeys.filter(function (key) {
        return props.targetKeys.indexOf(key) === -1;
      })) || [];
      targetSelectedKeys.value = ((_props$selectedKeys2 = props.selectedKeys) === null || _props$selectedKeys2 === void 0 ? void 0 : _props$selectedKeys2.filter(function (key) {
        return props.targetKeys.indexOf(key) > -1;
      })) || [];
    }, {
      immediate: true
    });
    var getLocale = function getLocale(transferLocale, renderEmpty) {
      // Keep old locale props still working.
      var oldLocale = {
        notFoundContent: renderEmpty('Transfer')
      };
      var notFoundContent = (0, _propsUtil.getPropsSlot)(slots, props, 'notFoundContent');
      if (notFoundContent) {
        oldLocale.notFoundContent = notFoundContent;
      }
      if (props.searchPlaceholder !== undefined) {
        oldLocale.searchPlaceholder = props.searchPlaceholder;
      }
      return (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, transferLocale), oldLocale), props.locale);
    };
    var moveTo = function moveTo(direction) {
      var _props$targetKeys = props.targetKeys,
        targetKeys = _props$targetKeys === void 0 ? [] : _props$targetKeys,
        _props$dataSource = props.dataSource,
        dataSource = _props$dataSource === void 0 ? [] : _props$dataSource;
      var moveKeys = direction === 'right' ? sourceSelectedKeys.value : targetSelectedKeys.value;
      // filter the disabled options
      var newMoveKeys = moveKeys.filter(function (key) {
        return !dataSource.some(function (data) {
          return !!(key === data.key && data.disabled);
        });
      });
      // move items to target box
      var newTargetKeys = direction === 'right' ? newMoveKeys.concat(targetKeys) : targetKeys.filter(function (targetKey) {
        return newMoveKeys.indexOf(targetKey) === -1;
      });
      // empty checked keys
      var oppositeDirection = direction === 'right' ? 'left' : 'right';
      direction === 'right' ? sourceSelectedKeys.value = [] : targetSelectedKeys.value = [];
      emit('update:targetKeys', newTargetKeys);
      handleSelectChange(oppositeDirection, []);
      emit('change', newTargetKeys, direction, newMoveKeys);
      formItemContext.onFieldChange();
    };
    var moveToLeft = function moveToLeft() {
      moveTo('left');
    };
    var moveToRight = function moveToRight() {
      moveTo('right');
    };
    var onItemSelectAll = function onItemSelectAll(direction, selectedKeys) {
      handleSelectChange(direction, selectedKeys);
    };
    var onLeftItemSelectAll = function onLeftItemSelectAll(selectedKeys) {
      return onItemSelectAll('left', selectedKeys);
    };
    var onRightItemSelectAll = function onRightItemSelectAll(selectedKeys) {
      return onItemSelectAll('right', selectedKeys);
    };
    var handleSelectChange = function handleSelectChange(direction, holder) {
      if (direction === 'left') {
        if (!props.selectedKeys) {
          sourceSelectedKeys.value = holder;
        }
        emit('update:selectedKeys', [].concat((0, _toConsumableArray2.default)(holder), (0, _toConsumableArray2.default)(targetSelectedKeys.value)));
        emit('selectChange', holder, (0, _vue.toRaw)(targetSelectedKeys.value));
      } else {
        if (!props.selectedKeys) {
          targetSelectedKeys.value = holder;
        }
        emit('update:selectedKeys', [].concat((0, _toConsumableArray2.default)(holder), (0, _toConsumableArray2.default)(sourceSelectedKeys.value)));
        emit('selectChange', (0, _vue.toRaw)(sourceSelectedKeys.value), holder);
      }
    };
    var handleFilter = function handleFilter(direction, e) {
      var value = e.target.value;
      emit('search', direction, value);
    };
    var handleLeftFilter = function handleLeftFilter(e) {
      handleFilter('left', e);
    };
    var handleRightFilter = function handleRightFilter(e) {
      handleFilter('right', e);
    };
    var handleClear = function handleClear(direction) {
      emit('search', direction, '');
    };
    var handleLeftClear = function handleLeftClear() {
      handleClear('left');
    };
    var handleRightClear = function handleRightClear() {
      handleClear('right');
    };
    var onItemSelect = function onItemSelect(direction, selectedKey, checked) {
      var holder = direction === 'left' ? (0, _toConsumableArray2.default)(sourceSelectedKeys.value) : (0, _toConsumableArray2.default)(targetSelectedKeys.value);
      var index = holder.indexOf(selectedKey);
      if (index > -1) {
        holder.splice(index, 1);
      }
      if (checked) {
        holder.push(selectedKey);
      }
      handleSelectChange(direction, holder);
    };
    var onLeftItemSelect = function onLeftItemSelect(selectedKey, checked) {
      return onItemSelect('left', selectedKey, checked);
    };
    var onRightItemSelect = function onRightItemSelect(selectedKey, checked) {
      return onItemSelect('right', selectedKey, checked);
    };
    var onRightItemRemove = function onRightItemRemove(targetedKeys) {
      var _props$targetKeys2 = props.targetKeys,
        targetKeys = _props$targetKeys2 === void 0 ? [] : _props$targetKeys2;
      var newTargetKeys = targetKeys.filter(function (key) {
        return !targetedKeys.includes(key);
      });
      emit('update:targetKeys', newTargetKeys);
      emit('change', newTargetKeys, 'left', (0, _toConsumableArray2.default)(targetedKeys));
    };
    var handleScroll = function handleScroll(direction, e) {
      emit('scroll', direction, e);
    };
    var handleLeftScroll = function handleLeftScroll(e) {
      handleScroll('left', e);
    };
    var handleRightScroll = function handleRightScroll(e) {
      handleScroll('right', e);
    };
    var handleListStyle = function handleListStyle(listStyle, direction) {
      if (typeof listStyle === 'function') {
        return listStyle({
          direction: direction
        });
      }
      return listStyle;
    };
    var leftDataSource = (0, _vue.ref)([]);
    var rightDataSource = (0, _vue.ref)([]);
    (0, _vue.watchEffect)(function () {
      var dataSource = props.dataSource,
        rowKey = props.rowKey,
        _props$targetKeys3 = props.targetKeys,
        targetKeys = _props$targetKeys3 === void 0 ? [] : _props$targetKeys3;
      var ld = [];
      var rd = new Array(targetKeys.length);
      dataSource.forEach(function (record) {
        if (rowKey) {
          record.key = rowKey(record);
        }
        // rightDataSource should be ordered by targetKeys
        // leftDataSource should be ordered by dataSource
        var indexOfKey = targetKeys.indexOf(record.key);
        if (indexOfKey !== -1) {
          rd[indexOfKey] = record;
        } else {
          ld.push(record);
        }
      });
      leftDataSource.value = ld;
      rightDataSource.value = rd;
    });
    expose({
      handleSelectChange: handleSelectChange
    });
    var renderTransfer = function renderTransfer(transferLocale) {
      var _classNames, _ref2, _ref3, _slots$leftTitle, _ref4, _ref5, _slots$rightTitle;
      var disabled = props.disabled,
        _props$operations = props.operations,
        operations = _props$operations === void 0 ? [] : _props$operations,
        showSearch = props.showSearch,
        listStyle = props.listStyle,
        operationStyle = props.operationStyle,
        filterOption = props.filterOption,
        showSelectAll = props.showSelectAll,
        _props$selectAllLabel = props.selectAllLabels,
        selectAllLabels = _props$selectAllLabel === void 0 ? [] : _props$selectAllLabel,
        oneWay = props.oneWay,
        pagination = props.pagination,
        _props$id = props.id,
        id = _props$id === void 0 ? formItemContext.id.value : _props$id;
      var className = attrs.class,
        style = attrs.style;
      var children = slots.children;
      var mergedPagination = !children && pagination;
      var renderEmpty = configProvider.renderEmpty;
      var locale = getLocale(transferLocale, renderEmpty);
      var footer = slots.footer;
      var renderItem = props.render || slots.render;
      var leftActive = targetSelectedKeys.value.length > 0;
      var rightActive = sourceSelectedKeys.value.length > 0;
      var cls = (0, _classNames2.default)(prefixCls.value, className, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-disabled"), disabled), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls.value, "-customize-list"), !!children), _classNames));
      var titles = props.titles;
      var leftTitle = (_ref2 = (_ref3 = titles && titles[0]) !== null && _ref3 !== void 0 ? _ref3 : (_slots$leftTitle = slots.leftTitle) === null || _slots$leftTitle === void 0 ? void 0 : _slots$leftTitle.call(slots)) !== null && _ref2 !== void 0 ? _ref2 : (locale.titles || ['', ''])[0];
      var rightTitle = (_ref4 = (_ref5 = titles && titles[1]) !== null && _ref5 !== void 0 ? _ref5 : (_slots$rightTitle = slots.rightTitle) === null || _slots$rightTitle === void 0 ? void 0 : _slots$rightTitle.call(slots)) !== null && _ref4 !== void 0 ? _ref4 : (locale.titles || ['', ''])[1];
      return (0, _vue.createVNode)("div", {
        "class": cls,
        "style": style,
        "id": id
      }, [(0, _vue.createVNode)(_list.default, (0, _objectSpread2.default)({
        "key": "leftList",
        "prefixCls": "".concat(prefixCls.value, "-list"),
        "dataSource": leftDataSource.value,
        "filterOption": filterOption,
        "style": handleListStyle(listStyle, 'left'),
        "checkedKeys": sourceSelectedKeys.value,
        "handleFilter": handleLeftFilter,
        "handleClear": handleLeftClear,
        "onItemSelect": onLeftItemSelect,
        "onItemSelectAll": onLeftItemSelectAll,
        "renderItem": renderItem,
        "showSearch": showSearch,
        "renderList": children,
        "onScroll": handleLeftScroll,
        "disabled": disabled,
        "direction": direction.value === 'rtl' ? 'right' : 'left',
        "showSelectAll": showSelectAll,
        "selectAllLabel": selectAllLabels[0] || slots.leftSelectAllLabel,
        "pagination": mergedPagination
      }, locale), {
        titleText: function titleText() {
          return leftTitle;
        },
        footer: footer
      }), (0, _vue.createVNode)(_operation.default, {
        "key": "operation",
        "class": "".concat(prefixCls.value, "-operation"),
        "rightActive": rightActive,
        "rightArrowText": operations[0],
        "moveToRight": moveToRight,
        "leftActive": leftActive,
        "leftArrowText": operations[1],
        "moveToLeft": moveToLeft,
        "style": operationStyle,
        "disabled": disabled,
        "direction": direction.value,
        "oneWay": oneWay
      }, null), (0, _vue.createVNode)(_list.default, (0, _objectSpread2.default)({
        "key": "rightList",
        "prefixCls": "".concat(prefixCls.value, "-list"),
        "dataSource": rightDataSource.value,
        "filterOption": filterOption,
        "style": handleListStyle(listStyle, 'right'),
        "checkedKeys": targetSelectedKeys.value,
        "handleFilter": handleRightFilter,
        "handleClear": handleRightClear,
        "onItemSelect": onRightItemSelect,
        "onItemSelectAll": onRightItemSelectAll,
        "onItemRemove": onRightItemRemove,
        "renderItem": renderItem,
        "showSearch": showSearch,
        "renderList": children,
        "onScroll": handleRightScroll,
        "disabled": disabled,
        "direction": direction.value === 'rtl' ? 'left' : 'right',
        "showSelectAll": showSelectAll,
        "selectAllLabel": selectAllLabels[1] || slots.rightSelectAllLabel,
        "showRemove": oneWay,
        "pagination": mergedPagination
      }, locale), {
        titleText: function titleText() {
          return rightTitle;
        },
        footer: footer
      })]);
    };
    return function () {
      return (0, _vue.createVNode)(_LocaleReceiver.default, {
        "componentName": "Transfer",
        "defaultLocale": _default3.default.Transfer,
        "children": renderTransfer
      }, null);
    };
  }
});
var _default2 = (0, _type.withInstall)(Transfer);
exports.default = _default2;