"use strict";

exports.__esModule = true;
exports.isHidden = isHidden;

function isHidden(element) {
  return window.getComputedStyle(element).display === 'none' || element.offsetParent === null;
}