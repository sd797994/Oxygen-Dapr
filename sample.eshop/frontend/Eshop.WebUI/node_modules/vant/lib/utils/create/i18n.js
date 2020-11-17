"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.createI18N = createI18N;

var _ = require("..");

var _string = require("../format/string");

var _locale = _interopRequireDefault(require("../../locale"));

function createI18N(name) {
  var prefix = (0, _string.camelize)(name) + '.';
  return function (path) {
    var message = (0, _.get)(_locale.default.messages(), prefix + path) || (0, _.get)(_locale.default.messages(), path);

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return typeof message === 'function' ? message.apply(void 0, args) : message;
  };
}