import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import TimeHeader from './TimeHeader';
import TimeBody from './TimeBody';
import { createKeydownHandler } from '../../utils/uiUtil';
import classNames from '../../../_util/classNames';
import { ref } from 'vue';
import useMergeProps from '../../hooks/useMergeProps';
var countBoolean = function countBoolean(boolList) {
  return boolList.filter(function (bool) {
    return bool !== false;
  }).length;
};
function TimePanel(_props) {
  var props = useMergeProps(_props);
  var generateConfig = props.generateConfig,
    _props$format = props.format,
    format = _props$format === void 0 ? 'HH:mm:ss' : _props$format,
    prefixCls = props.prefixCls,
    active = props.active,
    operationRef = props.operationRef,
    showHour = props.showHour,
    showMinute = props.showMinute,
    showSecond = props.showSecond,
    _props$use12Hours = props.use12Hours,
    use12Hours = _props$use12Hours === void 0 ? false : _props$use12Hours,
    onSelect = props.onSelect,
    value = props.value;
  var panelPrefixCls = "".concat(prefixCls, "-time-panel");
  var bodyOperationRef = ref();
  // ======================= Keyboard =======================
  var activeColumnIndex = ref(-1);
  var columnsCount = countBoolean([showHour, showMinute, showSecond, use12Hours]);
  operationRef.value = {
    onKeydown: function onKeydown(event) {
      return createKeydownHandler(event, {
        onLeftRight: function onLeftRight(diff) {
          activeColumnIndex.value = (activeColumnIndex.value + diff + columnsCount) % columnsCount;
        },
        onUpDown: function onUpDown(diff) {
          if (activeColumnIndex.value === -1) {
            activeColumnIndex.value = 0;
          } else if (bodyOperationRef.value) {
            bodyOperationRef.value.onUpDown(diff);
          }
        },
        onEnter: function onEnter() {
          onSelect(value || generateConfig.getNow(), 'key');
          activeColumnIndex.value = -1;
        }
      });
    },
    onBlur: function onBlur() {
      activeColumnIndex.value = -1;
    }
  };
  return _createVNode("div", {
    "class": classNames(panelPrefixCls, _defineProperty({}, "".concat(panelPrefixCls, "-active"), active))
  }, [_createVNode(TimeHeader, _objectSpread(_objectSpread({}, props), {}, {
    "format": format,
    "prefixCls": prefixCls
  }), null), _createVNode(TimeBody, _objectSpread(_objectSpread({}, props), {}, {
    "prefixCls": prefixCls,
    "activeColumnIndex": activeColumnIndex.value,
    "operationRef": bodyOperationRef
  }), null)]);
}
TimePanel.displayName = 'TimePanel';
TimePanel.inheritAttrs = false;
export default TimePanel;