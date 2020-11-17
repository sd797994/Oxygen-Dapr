"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vue = _interopRequireDefault(require("vue"));

var _Notify = _interopRequireDefault(require("./Notify"));

var _constant = require("../utils/constant");

var _utils = require("../utils");

var _functional = require("../utils/functional");

var timer;
var instance;

function parseOptions(message) {
  return (0, _utils.isObj)(message) ? message : {
    message: message
  };
}

function Notify(options) {
  /* istanbul ignore if */
  if (_utils.isServer) {
    return;
  }

  if (!instance) {
    instance = (0, _functional.mount)(_Notify.default, {
      on: {
        click: function click(event) {
          if (instance.onClick) {
            instance.onClick(event);
          }
        },
        close: function close() {
          if (instance.onClose) {
            instance.onClose();
          }
        },
        opened: function opened() {
          if (instance.onOpened) {
            instance.onOpened();
          }
        }
      }
    });
  }

  options = (0, _extends2.default)({}, Notify.currentOptions, {}, parseOptions(options));
  (0, _extends2.default)(instance, options);
  clearTimeout(timer);

  if (options.duration && options.duration > 0) {
    timer = setTimeout(Notify.clear, options.duration);
  }

  return instance;
}

function defaultOptions() {
  return {
    type: 'danger',
    value: true,
    message: '',
    color: _constant.WHITE,
    background: undefined,
    duration: 3000,
    className: '',
    onClose: null,
    onClick: null,
    onOpened: null
  };
}

Notify.clear = function () {
  if (instance) {
    instance.value = false;
  }
};

Notify.currentOptions = defaultOptions();

Notify.setDefaultOptions = function (options) {
  (0, _extends2.default)(Notify.currentOptions, options);
};

Notify.resetDefaultOptions = function () {
  Notify.currentOptions = defaultOptions();
};

Notify.install = function () {
  _vue.default.use(_Notify.default);
};

_vue.default.prototype.$notify = Notify;
var _default = Notify;
exports.default = _default;