/**
 * Use scopedSlots in Vue 2.6+
 * downgrade to slots in lower version
 */
import Vue from 'vue';
export var SlotsMixin = Vue.extend({
  methods: {
    slots: function slots(name, props) {
      if (name === void 0) {
        name = 'default';
      }

      var $slots = this.$slots,
          $scopedSlots = this.$scopedSlots;
      var scopedSlot = $scopedSlots[name];

      if (scopedSlot) {
        return scopedSlot(props);
      }

      return $slots[name];
    }
  }
});