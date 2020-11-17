"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.updateOverlay = updateOverlay;
exports.openOverlay = openOverlay;
exports.closeOverlay = closeOverlay;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _overlay = _interopRequireDefault(require("../../overlay"));

var _context = require("./context");

var _functional = require("../../utils/functional");

var defaultConfig = {
  className: '',
  customStyle: {}
};
var overlay; // close popup when click overlay && closeOnClickOverlay is true

function onClickOverlay() {
  if (_context.context.top) {
    var vm = _context.context.top.vm;
    vm.$emit('click-overlay');

    if (vm.closeOnClickOverlay) {
      if (vm.onClickOverlay) {
        vm.onClickOverlay();
      } else {
        vm.close();
      }
    }
  }
}

function mountOverlay() {
  overlay = (0, _functional.mount)(_overlay.default, {
    on: {
      click: onClickOverlay
    }
  });
}

function updateOverlay() {
  if (!overlay) {
    mountOverlay();
  }

  if (_context.context.top) {
    var _context$top = _context.context.top,
        vm = _context$top.vm,
        config = _context$top.config;
    var el = vm.$el;

    if (el && el.parentNode) {
      el.parentNode.insertBefore(overlay.$el, el);
    } else {
      document.body.appendChild(overlay.$el);
    }

    (0, _extends2.default)(overlay, defaultConfig, config, {
      show: true
    });
  } else {
    overlay.show = false;
  }
}

function openOverlay(vm, config) {
  if (!_context.context.stack.some(function (item) {
    return item.vm === vm;
  })) {
    _context.context.stack.push({
      vm: vm,
      config: config
    });

    updateOverlay();
  }
}

function closeOverlay(vm) {
  var stack = _context.context.stack;

  if (stack.length) {
    if (_context.context.top.vm === vm) {
      stack.pop();
      updateOverlay();
    } else {
      _context.context.stack = stack.filter(function (item) {
        return item.vm !== vm;
      });
    }
  }
}