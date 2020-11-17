"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vue = _interopRequireDefault(require("vue"));

var _Dialog = _interopRequireDefault(require("./Dialog"));

var _utils = require("../utils");

var instance;

function isInDocument(element) {
  return document.body.contains(element);
}

function initInstance() {
  if (instance) {
    instance.$destroy();
  }

  instance = new (_vue.default.extend(_Dialog.default))({
    el: document.createElement('div'),
    // avoid missing animation when first rendered
    propsData: {
      lazyRender: false
    }
  });
  instance.$on('input', function (value) {
    instance.value = value;
  });
}

function Dialog(options) {
  /* istanbul ignore if */
  if (_utils.isServer) {
    return Promise.resolve();
  }

  return new Promise(function (resolve, reject) {
    if (!instance || !isInDocument(instance.$el)) {
      initInstance();
    }

    (0, _extends2.default)(instance, Dialog.currentOptions, options, {
      resolve: resolve,
      reject: reject
    });
  });
}

Dialog.defaultOptions = {
  value: true,
  title: '',
  width: '',
  message: '',
  overlay: true,
  className: '',
  lockScroll: true,
  transition: 'van-dialog-bounce',
  beforeClose: null,
  overlayClass: '',
  overlayStyle: null,
  messageAlign: '',
  getContainer: 'body',
  cancelButtonText: '',
  cancelButtonColor: null,
  confirmButtonText: '',
  confirmButtonColor: null,
  showConfirmButton: true,
  showCancelButton: false,
  closeOnPopstate: false,
  closeOnClickOverlay: false,
  callback: function callback(action) {
    instance[action === 'confirm' ? 'resolve' : 'reject'](action);
  }
};
Dialog.alert = Dialog;

Dialog.confirm = function (options) {
  return Dialog((0, _extends2.default)({
    showCancelButton: true
  }, options));
};

Dialog.close = function () {
  if (instance) {
    instance.value = false;
  }
};

Dialog.setDefaultOptions = function (options) {
  (0, _extends2.default)(Dialog.currentOptions, options);
};

Dialog.resetDefaultOptions = function () {
  Dialog.currentOptions = (0, _extends2.default)({}, Dialog.defaultOptions);
};

Dialog.resetDefaultOptions();

Dialog.install = function () {
  _vue.default.use(_Dialog.default);
};

Dialog.Component = _Dialog.default;
_vue.default.prototype.$dialog = Dialog;
var _default = Dialog;
exports.default = _default;