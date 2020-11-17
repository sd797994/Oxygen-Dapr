"use strict";

exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _relation = require("../mixins/relation");

var _createNamespace = (0, _utils.createNamespace)('radio-group'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  mixins: [(0, _relation.ParentMixin)('vanRadio')],
  props: {
    value: null,
    disabled: Boolean,
    checkedColor: String,
    iconSize: [Number, String]
  },
  watch: {
    value: function value(_value) {
      this.$emit('change', _value);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem(),
      "attrs": {
        "role": "radiogroup"
      }
    }, [this.slots()]);
  }
});

exports.default = _default;