"use strict";

exports.__esModule = true;
exports.BindEventMixin = BindEventMixin;

var _event = require("../utils/dom/event");

/**
 * Bind event when mounted or activated
 */
function BindEventMixin(handler) {
  function bind() {
    if (!this.binded) {
      handler.call(this, _event.on, true);
      this.binded = true;
    }
  }

  function unbind() {
    if (this.binded) {
      handler.call(this, _event.off, false);
      this.binded = false;
    }
  }

  return {
    mounted: bind,
    activated: bind,
    deactivated: unbind,
    beforeDestroy: unbind
  };
}