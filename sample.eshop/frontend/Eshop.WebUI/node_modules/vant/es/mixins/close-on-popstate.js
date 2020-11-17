import Vue from 'vue';
import { on, off } from '../utils/dom/event';
import { BindEventMixin } from './bind-event';
export var CloseOnPopstateMixin = Vue.extend({
  mixins: [BindEventMixin(function (bind, isBind) {
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
        var action = bind ? on : off;
        action(window, 'popstate', this.close);
      }
    }
  }
});