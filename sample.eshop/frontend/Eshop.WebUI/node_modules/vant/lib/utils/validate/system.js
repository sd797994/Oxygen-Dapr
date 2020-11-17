"use strict";

exports.__esModule = true;
exports.isAndroid = isAndroid;
exports.isIOS = isIOS;

var _ = require("..");

function isAndroid() {
  /* istanbul ignore next */
  return _.isServer ? false : /android/.test(navigator.userAgent.toLowerCase());
}

function isIOS() {
  /* istanbul ignore next */
  return _.isServer ? false : /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
}