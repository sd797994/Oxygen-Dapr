import { createNamespace } from '../../utils';
import { t, bem } from '../utils';

var _createNamespace = createNamespace('calendar-header'),
    createComponent = _createNamespace[0];

export default createComponent({
  props: {
    title: String,
    monthTitle: String
  },
  methods: {
    genTitle: function genTitle() {
      var h = this.$createElement;
      var title = this.slots('title') || this.title || t('title');
      return h("div", {
        "class": bem('header-title')
      }, [title]);
    },
    genMonth: function genMonth() {
      var h = this.$createElement;
      return h("div", {
        "class": bem('month-title')
      }, [this.monthTitle]);
    },
    genWeekDays: function genWeekDays() {
      var h = this.$createElement;
      var weekdays = t('weekdays');
      return h("div", {
        "class": bem('weekdays')
      }, [weekdays.map(function (item) {
        return h("span", {
          "class": bem('weekday')
        }, [item]);
      })]);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem('header')
    }, [this.genTitle(), this.genMonth(), this.genWeekDays()]);
  }
});