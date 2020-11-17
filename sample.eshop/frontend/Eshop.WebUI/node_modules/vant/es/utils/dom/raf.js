/**
 * requestAnimationFrame polyfill
 */
import { isServer } from '..';
var prev = Date.now();
/* istanbul ignore next */

function fallback(fn) {
  var curr = Date.now();
  var ms = Math.max(0, 16 - (curr - prev));
  var id = setTimeout(fn, ms);
  prev = curr + ms;
  return id;
}
/* istanbul ignore next */


var root = isServer ? global : window;
/* istanbul ignore next */

var iRaf = root.requestAnimationFrame || fallback;
/* istanbul ignore next */

var iCancel = root.cancelAnimationFrame || root.clearTimeout;
export function raf(fn) {
  return iRaf.call(root, fn);
} // double raf for animation

export function doubleRaf(fn) {
  raf(function () {
    raf(fn);
  });
}
export function cancelRaf(id) {
  iCancel.call(root, id);
}