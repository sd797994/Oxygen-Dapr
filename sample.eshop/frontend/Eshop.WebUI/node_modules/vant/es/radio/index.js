import { createNamespace } from '../utils';
import { CheckboxMixin } from '../mixins/checkbox';

var _createNamespace = createNamespace('radio'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

export default createComponent({
  mixins: [CheckboxMixin({
    bem: bem,
    role: 'radio',
    parent: 'vanRadio'
  })],
  computed: {
    currentValue: {
      get: function get() {
        return this.parent ? this.parent.value : this.value;
      },
      set: function set(val) {
        (this.parent || this).$emit('input', val);
      }
    },
    checked: function checked() {
      return this.currentValue === this.name;
    }
  },
  methods: {
    toggle: function toggle() {
      this.currentValue = this.name;
    }
  }
});