import { createVNode as _createVNode, createTextVNode as _createTextVNode } from "vue";
import { defineComponent, onMounted, ref } from 'vue';
import VCResizeObserver from '../../vc-resize-observer';
export default defineComponent({
  name: 'MeasureCell',
  props: ['columnKey'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var tdRef = ref();
    onMounted(function () {
      if (tdRef.value) {
        emit('columnResize', props.columnKey, tdRef.value.offsetWidth);
      }
    });
    return function () {
      return _createVNode(VCResizeObserver, {
        "onResize": function onResize(_ref2) {
          var offsetWidth = _ref2.offsetWidth;
          emit('columnResize', props.columnKey, offsetWidth);
        }
      }, {
        default: function _default() {
          return [_createVNode("td", {
            "ref": tdRef,
            "style": {
              padding: 0,
              border: 0,
              height: 0
            }
          }, [_createVNode("div", {
            "style": {
              height: 0,
              overflow: 'hidden'
            }
          }, [_createTextVNode("\xA0")])])];
        }
      });
    };
  }
});