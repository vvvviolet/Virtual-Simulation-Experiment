"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = usePickerInput;
var _vue = require("vue");
var _KeyCode = _interopRequireDefault(require("../../_util/KeyCode"));
var _uiUtil = require("../utils/uiUtil");
var _raf = _interopRequireDefault(require("../../_util/raf"));
function usePickerInput(_ref) {
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
  var typing = (0, _vue.ref)(false);
  var focused = (0, _vue.ref)(false);
  /**
   * We will prevent blur to handle open event when user click outside,
   * since this will repeat trigger `onOpenChange` event.
   */
  var preventBlurRef = (0, _vue.ref)(false);
  var valueChangedRef = (0, _vue.ref)(false);
  var preventDefaultRef = (0, _vue.ref)(false);
  var inputProps = (0, _vue.computed)(function () {
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
          case _KeyCode.default.ENTER:
            {
              if (!open.value) {
                triggerOpen(true);
              } else if (onSubmit() !== false) {
                typing.value = true;
              }
              e.preventDefault();
              return;
            }
          case _KeyCode.default.TAB:
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
          case _KeyCode.default.ESC:
            {
              typing.value = true;
              onCancel();
              return;
            }
        }
        if (!open.value && ![_KeyCode.default.SHIFT].includes(e.which)) {
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
  (0, _vue.watch)(open, function () {
    valueChangedRef.value = false;
  });
  (0, _vue.watch)(value, function () {
    valueChangedRef.value = true;
  });
  var globalMousedownEvent = (0, _vue.ref)();
  // Global click handler
  (0, _vue.onMounted)(function () {
    globalMousedownEvent.value = (0, _uiUtil.addGlobalMousedownEvent)(function (e) {
      var target = (0, _uiUtil.getTargetFromEvent)(e);
      if (open.value) {
        var clickedOutside = isClickOutside(target);
        if (!clickedOutside) {
          preventBlurRef.value = true;
          // Always set back in case `onBlur` prevented by user
          (0, _raf.default)(function () {
            preventBlurRef.value = false;
          });
        } else if (!focused.value || clickedOutside) {
          triggerOpen(false);
        }
      }
    });
  });
  (0, _vue.onBeforeUnmount)(function () {
    globalMousedownEvent.value && globalMousedownEvent.value();
  });
  return [inputProps, {
    focused: focused,
    typing: typing
  }];
}