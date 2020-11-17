import { isServer } from '..';
// eslint-disable-next-line import/no-mutable-exports
export var supportsPassive = false;

if (!isServer) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', {
      // eslint-disable-next-line getter-return
      get: function get() {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    });
    window.addEventListener('test-passive', null, opts); // eslint-disable-next-line no-empty
  } catch (e) {}
}

export function on(target, event, handler, passive) {
  if (passive === void 0) {
    passive = false;
  }

  if (!isServer) {
    target.addEventListener(event, handler, supportsPassive ? {
      capture: false,
      passive: passive
    } : false);
  }
}
export function off(target, event, handler) {
  if (!isServer) {
    target.removeEventListener(event, handler);
  }
}
export function stopPropagation(event) {
  event.stopPropagation();
}
export function preventDefault(event, isStopPropagation) {
  /* istanbul ignore else */
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault();
  }

  if (isStopPropagation) {
    stopPropagation(event);
  }
}