"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ClickOutsideMixin = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _event = require("../utils/dom/event");

/**
 * Listen to click outside event
 */
var ClickOutsideMixin = function ClickOutsideMixin(config) {
  return _vue.default.extend({
    props: {
      closeOnClickOutside: {
        type: Boolean,
        default: true
      }
    },
    data: function data() {
      var _this = this;

      var clickOutsideHandler = function clickOutsideHandler(event) {
        if (_this.closeOnClickOutside && !_this.$el.contains(event.target)) {
          _this[config.method]();
        }
      };

      return {
        clickOutsideHandler: clickOutsideHandler
      };
    },
    mounted: function mounted() {
      (0, _event.on)(document, config.event, this.clickOutsideHandler);
    },
    beforeDestroy: function beforeDestroy() {
      (0, _event.off)(document, config.event, this.clickOutsideHandler);
    }
  });
};

exports.ClickOutsideMixin = ClickOutsideMixin;