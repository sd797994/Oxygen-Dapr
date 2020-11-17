"use strict";

exports.__esModule = true;
exports.range = range;

function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
}