import _mergeJSXProps2 from "@vue/babel-helper-vue-jsx-merge-props";
import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { createNamespace, isDef, addUnit } from '../utils';
import { resetScroll } from '../utils/dom/reset-scroll';
import { preventDefault } from '../utils/dom/event';

var _createNamespace = createNamespace('stepper'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var LONG_PRESS_START_TIME = 600;
var LONG_PRESS_INTERVAL = 200;

function equal(value1, value2) {
  return String(value1) === String(value2);
} // add num and avoid float number


function add(num1, num2) {
  var cardinal = Math.pow(10, 10);
  return Math.round((num1 + num2) * cardinal) / cardinal;
}

export default createComponent({
  props: {
    value: null,
    integer: Boolean,
    disabled: Boolean,
    inputWidth: [Number, String],
    buttonSize: [Number, String],
    asyncChange: Boolean,
    disablePlus: Boolean,
    disableMinus: Boolean,
    disableInput: Boolean,
    decimalLength: Number,
    name: {
      type: [Number, String],
      default: ''
    },
    min: {
      type: [Number, String],
      default: 1
    },
    max: {
      type: [Number, String],
      default: Infinity
    },
    step: {
      type: [Number, String],
      default: 1
    },
    defaultValue: {
      type: [Number, String],
      default: 1
    },
    showPlus: {
      type: Boolean,
      default: true
    },
    showMinus: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    var defaultValue = isDef(this.value) ? this.value : this.defaultValue;
    var value = this.format(defaultValue);

    if (!equal(value, this.value)) {
      this.$emit('input', value);
    }

    return {
      currentValue: value
    };
  },
  computed: {
    minusDisabled: function minusDisabled() {
      return this.disabled || this.disableMinus || this.currentValue <= this.min;
    },
    plusDisabled: function plusDisabled() {
      return this.disabled || this.disablePlus || this.currentValue >= this.max;
    },
    inputStyle: function inputStyle() {
      var style = {};

      if (this.inputWidth) {
        style.width = addUnit(this.inputWidth);
      }

      if (this.buttonSize) {
        style.height = addUnit(this.buttonSize);
      }

      return style;
    },
    buttonStyle: function buttonStyle() {
      if (this.buttonSize) {
        var size = addUnit(this.buttonSize);
        return {
          width: size,
          height: size
        };
      }
    }
  },
  watch: {
    value: function value(val) {
      if (!equal(val, this.currentValue)) {
        this.currentValue = this.format(val);
      }
    },
    max: 'check',
    min: 'check',
    integer: 'check',
    decimalLength: 'check',
    currentValue: function currentValue(val) {
      this.$emit('input', val);
      this.$emit('change', val, {
        name: this.name
      });
    }
  },
  methods: {
    check: function check() {
      var val = this.format(this.currentValue);

      if (!equal(val, this.currentValue)) {
        this.currentValue = val;
      }
    },
    // filter illegal characters
    filter: function filter(value) {
      value = String(value).replace(/[^0-9.-]/g, '');

      if (this.integer && value.indexOf('.') !== -1) {
        value = value.split('.')[0];
      }

      return value;
    },
    format: function format(value) {
      value = this.filter(value); // format range

      value = value === '' ? 0 : +value;
      value = Math.max(Math.min(this.max, value), this.min); // format decimal

      if (isDef(this.decimalLength)) {
        value = value.toFixed(this.decimalLength);
      }

      return value;
    },
    onInput: function onInput(event) {
      var value = event.target.value; // allow input to be empty

      if (value === '') {
        return;
      }

      var formatted = this.filter(value); // limit max decimal length

      if (isDef(this.decimalLength) && formatted.indexOf('.') !== -1) {
        var pair = formatted.split('.');
        formatted = pair[0] + "." + pair[1].slice(0, this.decimalLength);
      }

      if (!equal(value, formatted)) {
        event.target.value = formatted;
      }

      this.emitChange(formatted);
    },
    emitChange: function emitChange(value) {
      if (this.asyncChange) {
        this.$emit('input', value);
        this.$emit('change', value, {
          name: this.name
        });
      } else {
        this.currentValue = value;
      }
    },
    onChange: function onChange() {
      var type = this.type;

      if (this[type + "Disabled"]) {
        this.$emit('overlimit', type);
        return;
      }

      var diff = type === 'minus' ? -this.step : +this.step;
      var value = this.format(add(+this.currentValue, diff));
      this.emitChange(value);
      this.$emit(type);
    },
    onFocus: function onFocus(event) {
      this.$emit('focus', event);
    },
    onBlur: function onBlur(event) {
      var value = this.format(event.target.value);
      event.target.value = value;
      this.currentValue = value;
      this.$emit('blur', event);
      resetScroll();
    },
    longPressStep: function longPressStep() {
      var _this = this;

      this.longPressTimer = setTimeout(function () {
        _this.onChange(_this.type);

        _this.longPressStep(_this.type);
      }, LONG_PRESS_INTERVAL);
    },
    onTouchStart: function onTouchStart() {
      var _this2 = this;

      clearTimeout(this.longPressTimer);
      this.isLongPress = false;
      this.longPressTimer = setTimeout(function () {
        _this2.isLongPress = true;

        _this2.onChange();

        _this2.longPressStep();
      }, LONG_PRESS_START_TIME);
    },
    onTouchEnd: function onTouchEnd(event) {
      clearTimeout(this.longPressTimer);

      if (this.isLongPress) {
        preventDefault(event);
      }
    }
  },
  render: function render() {
    var _this3 = this;

    var h = arguments[0];

    var createListeners = function createListeners(type) {
      return {
        on: {
          click: function click() {
            _this3.type = type;

            _this3.onChange();
          },
          touchstart: function touchstart() {
            _this3.type = type;

            _this3.onTouchStart(type);
          },
          touchend: _this3.onTouchEnd,
          touchcancel: _this3.onTouchEnd
        }
      };
    };

    return h("div", {
      "class": bem()
    }, [h("button", _mergeJSXProps([{
      "directives": [{
        name: "show",
        value: this.showMinus
      }],
      "attrs": {
        "type": "button"
      },
      "style": this.buttonStyle,
      "class": bem('minus', {
        disabled: this.minusDisabled
      })
    }, createListeners('minus')])), h("input", {
      "attrs": {
        "type": "number",
        "role": "spinbutton",
        "aria-valuemax": this.max,
        "aria-valuemin": this.min,
        "aria-valuenow": this.currentValue,
        "disabled": this.disabled || this.disableInput
      },
      "class": bem('input'),
      "domProps": {
        "value": this.currentValue
      },
      "style": this.inputStyle,
      "on": {
        "input": this.onInput,
        "focus": this.onFocus,
        "blur": this.onBlur
      }
    }), h("button", _mergeJSXProps2([{
      "directives": [{
        name: "show",
        value: this.showPlus
      }],
      "attrs": {
        "type": "button"
      },
      "style": this.buttonStyle,
      "class": bem('plus', {
        disabled: this.plusDisabled
      })
    }, createListeners('plus')]))]);
  }
});