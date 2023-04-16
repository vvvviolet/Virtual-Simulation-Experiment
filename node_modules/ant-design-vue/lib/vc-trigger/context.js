"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useProviderTrigger = exports.useProvidePortal = exports.useInjectTrigger = exports.useInjectPortal = void 0;
var _vue = require("vue");
var TriggerContextKey = Symbol('TriggerContextKey');
var useProviderTrigger = function useProviderTrigger() {
  var portal = null;
  (0, _vue.provide)(TriggerContextKey, {
    setPortal: function setPortal(val) {
      portal = val;
    },
    popPortal: true
  });
  return function () {
    return portal;
  };
};
exports.useProviderTrigger = useProviderTrigger;
var useInjectTrigger = function useInjectTrigger(tryPopPortal) {
  return tryPopPortal ? (0, _vue.inject)(TriggerContextKey, {
    setPortal: function setPortal() {},
    popPortal: false
  }) : {
    setPortal: function setPortal() {},
    popPortal: false
  };
};
exports.useInjectTrigger = useInjectTrigger;
var PortalContextKey = Symbol('PortalContextKey');
var useProvidePortal = function useProvidePortal(instance) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    inTriggerContext: true
  };
  (0, _vue.provide)(PortalContextKey, {
    inTriggerContext: config.inTriggerContext,
    shouldRender: (0, _vue.computed)(function () {
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
exports.useProvidePortal = useProvidePortal;
var useInjectPortal = function useInjectPortal() {
  useProvidePortal({}, {
    inTriggerContext: false
  });
  var portalContext = (0, _vue.inject)(PortalContextKey, {
    shouldRender: (0, _vue.computed)(function () {
      return false;
    }),
    inTriggerContext: false
  });
  return {
    shouldRender: (0, _vue.computed)(function () {
      return portalContext.shouldRender.value || portalContext.inTriggerContext === false;
    })
  };
};
exports.useInjectPortal = useInjectPortal;