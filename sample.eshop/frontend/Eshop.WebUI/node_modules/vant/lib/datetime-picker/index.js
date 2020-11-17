"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("../utils");

var _TimePicker = _interopRequireDefault(require("./TimePicker"));

var _DatePicker = _interopRequireDefault(require("./DatePicker"));

var _createNamespace = (0, _utils.createNamespace)('datetime-picker'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  props: (0, _extends2.default)({}, _TimePicker.default.props, {}, _DatePicker.default.props),
  render: function render() {
    var h = arguments[0];
    var Component = this.type === 'time' ? _TimePicker.default : _DatePicker.default;
    return h(Component, {
      "class": bem(),
      "props": (0, _extends2.default)({}, this.$props),
      "on": (0, _extends2.default)({}, this.$listeners)
    });
  }
});

exports.default = _default;