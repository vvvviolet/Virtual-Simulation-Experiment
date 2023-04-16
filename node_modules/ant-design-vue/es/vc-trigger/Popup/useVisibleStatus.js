import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import { onBeforeUnmount, ref, watch, onMounted } from 'vue';
import raf from '../../_util/raf';
var StatusQueue = ['measure', 'align', null, 'motion'];
export default (function (visible, doMeasure) {
  var status = ref(null);
  var rafRef = ref();
  var destroyRef = ref(false);
  function setStatus(nextStatus) {
    if (!destroyRef.value) {
      status.value = nextStatus;
    }
  }
  function cancelRaf() {
    raf.cancel(rafRef.value);
  }
  function goNextStatus(callback) {
    cancelRaf();
    rafRef.value = raf(function () {
      // Only align should be manually trigger
      var newStatus = status.value;
      switch (status.value) {
        case 'align':
          newStatus = 'motion';
          break;
        case 'motion':
          newStatus = 'stable';
          break;
        default:
      }
      setStatus(newStatus);
      callback === null || callback === void 0 ? void 0 : callback();
    });
  }
  watch(visible, function () {
    setStatus('measure');
  }, {
    immediate: true,
    flush: 'post'
  });
  onMounted(function () {
    // Go next status
    watch(status, function () {
      switch (status.value) {
        case 'measure':
          doMeasure();
          break;
        default:
      }
      if (status.value) {
        rafRef.value = raf( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
          var index, nextStatus;
          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                index = StatusQueue.indexOf(status.value);
                nextStatus = StatusQueue[index + 1];
                if (nextStatus && index !== -1) {
                  setStatus(nextStatus);
                }
              case 3:
              case "end":
                return _context.stop();
            }
          }, _callee);
        })));
      }
    }, {
      immediate: true,
      flush: 'post'
    });
  });
  onBeforeUnmount(function () {
    destroyRef.value = true;
    cancelRaf();
  });
  return [status, goNextStatus];
});