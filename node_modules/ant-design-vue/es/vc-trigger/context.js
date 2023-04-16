import { computed, inject, provide } from 'vue';
var TriggerContextKey = Symbol('TriggerContextKey');
export var useProviderTrigger = function useProviderTrigger() {
  var portal = null;
  provide(TriggerContextKey, {
    setPortal: function setPortal(val) {
      portal = val;
    },
    popPortal: true
  });
  return function () {
    return portal;
  };
};
export var useInjectTrigger = function useInjectTrigger(tryPopPortal) {
  return tryPopPortal ? inject(TriggerContextKey, {
    setPortal: function setPortal() {},
    popPortal: false
  }) : {
    setPortal: function setPortal() {},
    popPortal: false
  };
};
var PortalContextKey = Symbol('PortalContextKey');
export var useProvidePortal = function useProvidePortal(instance) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    inTriggerContext: true
  };
  provide(PortalContextKey, {
    inTriggerContext: config.inTriggerContext,
    shouldRender: computed(function () {
      var _ref = instance || {},
        sPopupVisible = _ref.sPopupVisible,
        popupRef = _ref.popupRef,
        forceRender = _ref.forceRender,
        autoDestroy = _ref.autoDestroy;
      // if (popPortal) return true;
      var shouldRender = false;
      if (sPopupVisible || popupRef || forceRender) {
        shouldRender = true;
      }
      if (!sPopupVisible && autoDestroy) {
        shouldRender = false;
      }
      return shouldRender;
    })
  });
};
export var useInjectPortal = function useInjectPortal() {
  useProvidePortal({}, {
    inTriggerContext: false
  });
  var portalContext = inject(PortalContextKey, {
    shouldRender: computed(function () {
      return false;
    }),
    inTriggerContext: false
  });
  return {
    shouldRender: computed(function () {
      return portalContext.shouldRender.value || portalContext.inTriggerContext === false;
    })
  };
};