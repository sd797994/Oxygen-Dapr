"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.CloseOnPopstateMixin = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _event = require("../utils/dom/event");

var _bindEvent = require("./bind-event");

var CloseOnPopstateMixin = _vue.default.extend({
  mixins: [(0, _bindEvent.BindEventMixin)(function (bind, isBind) {
    this.handlePopstate(isBind && this.closeOnPopstate);
  })],
  props: {
    closeOnPopstate: Boolean
  },
  data: function data() {
    return {
      bindStatus: false
    };
  },
  watch: {
    closeOnPopstate: function closeOnPopstate(val) {
      this.handlePopstate(val);
    }
  },
  methods: {
    handlePopstate: function handlePopstate(bind) {
      /* istanbul ignore if */
      if (this.$isServer) {
        return;
      }

      if (this.bindStatus !== bind) {
        this.bindStatus = bind;
        var action = bind ? _event.on : _event.off;
        action(window, 'popstate', this.close);
      }
    }
  }
});

exports.CloseOnPopstateMixin = CloseOnPopstateMixin;