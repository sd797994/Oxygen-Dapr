"use strict";

exports.__esModule = true;
exports.default = void 0;

var _utils = require("../../utils");

var _utils2 = require("../utils");

var _createNamespace = (0, _utils.createNamespace)('calendar-header'),
    createComponent = _createNamespace[0];

var _default = createComponent({
  props: {
    title: String,
    monthTitle: String
  },
  methods: {
    genTitle: function genTitle() {
      var h = this.$createElement;
      var title = this.slots('title') || this.title || (0, _utils2.t)('title');
      return h("div", {
        "class": (0, _utils2.bem)('header-title')
      }, [title]);
    },
    genMonth: function genMonth() {
      var h = this.$createElement;
      return h("div", {
        "class": (0, _utils2.bem)('month-title')
      }, [this.monthTitle]);
    },
    genWeekDays: function genWeekDays() {
      var h = this.$createElement;
      var weekdays = (0, _utils2.t)('weekdays');
      return h("div", {
        "class": (0, _utils2.bem)('weekdays')
      }, [weekdays.map(function (item) {
        return h("span", {
          "class": (0, _utils2.bem)('weekday')
        }, [item]);
      })]);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": (0, _utils2.bem)('header')
    }, [this.genTitle(), this.genMonth(), this.genWeekDays()]);
  }
});

exports.default = _default;