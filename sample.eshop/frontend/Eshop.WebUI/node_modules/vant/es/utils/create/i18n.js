import { get } from '..';
import { camelize } from '../format/string';
import locale from '../../locale';
export function createI18N(name) {
  var prefix = camelize(name) + '.';
  return function (path) {
    var message = get(locale.messages(), prefix + path) || get(locale.messages(), path);

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return typeof message === 'function' ? message.apply(void 0, args) : message;
  };
}