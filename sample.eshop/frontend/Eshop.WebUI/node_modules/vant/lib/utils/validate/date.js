"use strict";

exports.__esModule = true;
exports.isDate = isDate;

var _number = require("./number");

function isDate(date) {
  return Object.prototype.toString.call(date) === '[object Date]' && !(0, _number.isNaN)(date.getTime());
}