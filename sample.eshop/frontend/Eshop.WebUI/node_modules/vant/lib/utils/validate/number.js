"use strict";

exports.__esModule = true;
exports.isNumber = isNumber;
exports.isNaN = isNaN;

function isNumber(value) {
  return /^\d+(\.\d+)?$/.test(value);
}

function isNaN(value) {
  if (Number.isNaN) {
    return Number.isNaN(value);
  } // eslint-disable-next-line no-self-compare


  return value !== value;
}