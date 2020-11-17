"use strict";

exports.__esModule = true;
exports.addUnit = addUnit;

var _ = require("..");

var _number = require("../validate/number");

function addUnit(value) {
  if (!(0, _.isDef)(value)) {
    return undefined;
  }

  value = String(value);
  return (0, _number.isNumber)(value) ? value + "px" : value;
}