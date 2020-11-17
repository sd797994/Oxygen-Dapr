"use strict";

exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _checkbox = require("../mixins/checkbox");

var _createNamespace = (0, _utils.createNamespace)('radio'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  mixins: [(0, _checkbox.CheckboxMixin)({
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

exports.default = _default;