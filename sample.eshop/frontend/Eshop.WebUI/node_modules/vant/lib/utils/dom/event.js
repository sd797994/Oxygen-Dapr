"use strict";

exports.__esModule = true;
exports.on = on;
exports.off = off;
exports.stopPropagation = stopPropagation;
exports.preventDefault = preventDefault;
exports.supportsPassive = void 0;

var _ = require("..");

// eslint-disable-next-line import/no-mutable-exports
var supportsPassive = false;
exports.supportsPassive = supportsPassive;

if (!_.isServer) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', {
      // eslint-disable-next-line getter-return
      get: function get() {
        /* istanbul ignore next */
        exports.supportsPassive = supportsPassive = true;
      }
    });
    window.addEventListener('test-passive', null, opts); // eslint-disable-next-line no-empty
  } catch (e) {}
}

function on(target, event, handler, passive) {
  if (passive === void 0) {
    passive = false;
  }

  if (!_.isServer) {
    target.addEventListener(event, handler, supportsPassive ? {
      capture: false,
      passive: passive
    } : false);
  }
}

function off(target, event, handler) {
  if (!_.isServer) {
    target.removeEventListener(event, handler);
  }
}

function stopPropagation(event) {
  event.stopPropagation();
}

function preventDefault(event, isStopPropagation) {
  /* istanbul ignore else */
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault();
  }

  if (isStopPropagation) {
    stopPropagation(event);
  }
}