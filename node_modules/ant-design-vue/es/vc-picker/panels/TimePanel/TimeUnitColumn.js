import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { createVNode as _createVNode } from "vue";
import { scrollTo, waitElementReady } from '../../utils/uiUtil';
import { useInjectPanel } from '../../PanelContext';
import classNames from '../../../_util/classNames';
import { ref, onBeforeUnmount, watch, defineComponent, nextTick } from 'vue';
export default defineComponent({
  name: 'TimeUnitColumn',
  props: ['prefixCls', 'units', 'onSelect', 'value', 'active', 'hideDisabledOptions'],
  setup: function setup(props) {
    var _useInjectPanel = useInjectPanel(),
      open = _useInjectPanel.open;
    var ulRef = ref(null);
    var liRefs = ref(new Map());
    var scrollRef = ref();
    watch(function () {
      return props.value;
    }, function () {
      var li = liRefs.value.get(props.value);
      if (li && open.value !== false) {
        scrollTo(ulRef.value, li.offsetTop, 120);
      }
    });
    onBeforeUnmount(function () {
      var _scrollRef$value;
      (_scrollRef$value = scrollRef.value) === null || _scrollRef$value === void 0 ? void 0 : _scrollRef$value.call(scrollRef);
    });
    watch(open, function () {
      var _scrollRef$value2;
      (_scrollRef$value2 = scrollRef.value) === null || _scrollRef$value2 === void 0 ? void 0 : _scrollRef$value2.call(scrollRef);
      nextTick(function () {
        if (open.value) {
          var li = liRefs.value.get(props.value);
          if (li) {
            scrollRef.value = waitElementReady(li, function () {
              scrollTo(ulRef.value, li.offsetTop, 0);
            });
          }
        }
      });
    }, {
      immediate: true,
      flush: 'post'
    });
    return function () {
      var prefixCls = props.prefixCls,
        units = props.units,
        onSelect = props.onSelect,
        value = props.value,
        active = props.active,
        hideDisabledOptions = props.hideDisabledOptions;
      var cellPrefixCls = "".concat(prefixCls, "-cell");
      return _createVNode("ul", {
        "class": classNames("".concat(prefixCls, "-column"), _defineProperty({}, "".concat(prefixCls, "-column-active"), active)),
        "ref": ulRef,
        "style": {
          position: 'relative'
        }
      }, [units.map(function (unit) {
        var _classNames2;
        if (hideDisabledOptions && unit.disabled) {
          return null;
        }
        return _createVNode("li", {
          "key": unit.value,
          "ref": function ref(element) {
            liRefs.value.set(unit.value, element);
          },
          "class": classNames(cellPrefixCls, (_classNames2 = {}, _defineProperty(_classNames2, "".concat(cellPrefixCls, "-disabled"), unit.disabled), _defineProperty(_classNames2, "".concat(cellPrefixCls, "-selected"), value === unit.value), _classNames2)),
          "onClick": function onClick() {
            if (unit.disabled) {
              return;
            }
            onSelect(unit.value);
          }
        }, [_createVNode("div", {
          "class": "".concat(cellPrefixCls, "-inner")
        }, [unit.label])]);
      })]);
    };
  }
});