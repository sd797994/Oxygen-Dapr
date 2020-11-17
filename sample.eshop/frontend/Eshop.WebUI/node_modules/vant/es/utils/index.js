import Vue from 'vue';
export { createNamespace } from './create';
export { addUnit } from './format/unit';
export var isServer = Vue.prototype.$isServer;
export function noop() {}
export function isDef(value) {
  return value !== undefined && value !== null;
}
export function isObj(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}
export function get(object, path) {
  var keys = path.split('.');
  var result = object;
  keys.forEach(function (key) {
    result = isDef(result[key]) ? result[key] : '';
  });
  return result;
}