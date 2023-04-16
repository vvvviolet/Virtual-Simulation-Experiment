import { onBeforeUnmount, onMounted, watch, ref, computed } from 'vue';
import KeyCode from '../../_util/KeyCode';
import { addGlobalMousedownEvent, getTargetFromEvent } from '../utils/uiUtil';
import raf from '../../_util/raf';
export default function usePickerInput(_ref) {
  var open = _ref.open,
    value = _ref.value,
    isClickOutside = _ref.isClickOutside,
    triggerOpen = _ref.triggerOpen,
    forwardKeydown = _ref.forwardKeydown,
    _onKeydown = _ref.onKeydown,
    blurToCancel = _ref.blurToCancel,
    onSubmit = _ref.onSubmit,
    onCancel = _ref.onCancel,
    _onFocus = _ref.onFocus,
    _onBlur = _ref.onBlur;
  var typing = ref(false);
  var focused = ref(false);
  /**
   * We will prevent blur to handle open event when user click outside,
   * since this will repeat trigger `onOpenChange` event.
   */
  var preventBlurRef = ref(false);
  var valueChangedRef = ref(false);
  var preventDefaultRef = ref(false);
  var inputProps = computed(function () {
    return {
      onMousedown: function onMousedown() {
        typing.value = true;
        triggerOpen(true);
      },
      onKeydown: function onKeydown(e) {
        var preventDefault = function preventDefault() {
          preventDefaultRef.value = true;
        };
        _onKeydown(e, preventDefault);
        if (preventDefaultRef.value) return;
        switch (e.which) {
          case KeyCode.ENTER:
            {
              if (!open.value) {
                triggerOpen(true);
              } else if (onSubmit() !== false) {
                typing.value = true;
              }
              e.preventDefault();
              return;
            }
          case KeyCode.TAB:
            {
              if (typing.value && open.value && !e.shiftKey) {
                typing.value = false;
                e.preventDefault();
              } else if (!typing.value && open.value) {
                if (!forwardKeydown(e) && e.shiftKey) {
                  typing.value = true;
                  e.preventDefault();
                }
              }
              return;
            }
          case KeyCode.ESC:
            {
              typing.value = true;
              onCancel();
              return;
            }
        }
        if (!open.value && ![KeyCode.SHIFT].includes(e.which)) {
          triggerOpen(true);
        } else if (!typing.value) {
          // Let popup panel handle keyboard
          forwardKeydown(e);
        }
      },
      onFocus: function onFocus(e) {
        typing.value = true;
        focused.value = true;
        if (_onFocus) {
          _onFocus(e);
        }
      },
      onBlur: function onBlur(e) {
        if (preventBlurRef.value || !isClickOutside(document.activeElement)) {
          preventBlurRef.value = false;
          return;
        }
        if (blurToCancel.value) {
          setTimeout(function () {
            var _document = document,
              activeElement = _document.activeElement;
            while (activeElement && activeElement.shadowRoot) {
              activeElement = activeElement.shadowRoot.activeElement;
            }
            if (isClickOutside(activeElement)) {
              onCancel();
            }
          }, 0);
        } else if (open.value) {
          triggerOpen(false);
          if (valueChangedRef.value) {
            onSubmit();
          }
        }
        focused.value = false;
        if (_onBlur) {
          _onBlur(e);
        }
      }
    };
  });
  // check if value changed
  watch(open, function () {
    valueChangedRef.value = false;
  });
  watch(value, function () {
    valueChangedRef.value = true;
  });
  var globalMousedownEvent = ref();
  // Global click handler
  onMounted(function () {
    globalMousedownEvent.value = addGlobalMousedownEvent(function (e) {
      var target = getTargetFromEvent(e);
      if (open.value) {
        var clickedOutside = isClickOutside(target);
        if (!clickedOutside) {
          preventBlurRef.value = true;
          // Always set back in case `onBlur` prevented by user
          raf(function () {
            preventBlurRef.value = false;
          });
        } else if (!focused.value || clickedOutside) {
          triggerOpen(false);
        }
      }
    });
  });
  onBeforeUnmount(function () {
    globalMousedownEvent.value && globalMousedownEvent.value();
  });
  return [inputProps, {
    focused: focused,
    typing: typing
  }];
}