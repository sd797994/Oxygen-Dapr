"use strict";

exports.__esModule = true;
exports.switchProps = void 0;

/**
 * Common Switch Props
 */
var switchProps = {
  size: [String, Number],
  value: null,
  loading: Boolean,
  disabled: Boolean,
  activeColor: String,
  inactiveColor: String,
  activeValue: {
    type: null,
    default: true
  },
  inactiveValue: {
    type: null,
    default: false
  }
};
exports.switchProps = switchProps;