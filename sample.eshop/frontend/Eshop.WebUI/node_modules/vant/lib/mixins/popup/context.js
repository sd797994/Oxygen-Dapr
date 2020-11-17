"use strict";

exports.__esModule = true;
exports.context = void 0;
var context = {
  zIndex: 2000,
  lockCount: 0,
  stack: [],

  get top() {
    return this.stack[this.stack.length - 1];
  }

};
exports.context = context;