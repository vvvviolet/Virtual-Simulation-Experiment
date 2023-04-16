import { isClient } from './is';
export var defaultWindow = /* #__PURE__ */isClient ? window : undefined;
export var defaultDocument = /* #__PURE__ */isClient ? window.document : undefined;
export var defaultNavigator = /* #__PURE__ */isClient ? window.navigator : undefined;
export var defaultLocation = /* #__PURE__ */isClient ? window.location : undefined;