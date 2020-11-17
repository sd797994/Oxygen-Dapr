"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.TimePickerMixin = exports.sharedProps = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("./utils");

var _string = require("../utils/format/string");

var _shared = require("../picker/shared");

var _picker = _interopRequireDefault(require("../picker"));

var sharedProps = (0, _extends2.default)({}, _shared.pickerProps, {
  value: null,
  filter: Function,
  showToolbar: {
    type: Boolean,
    default: true
  },
  formatter: {
    type: Function,
    default: function _default(type, value) {
      return value;
    }
  }
});
exports.sharedProps = sharedProps;
var TimePickerMixin = {
  data: function data() {
    return {
      innerValue: this.formatValue(this.value)
    };
  },
  computed: {
    originColumns: function originColumns() {
      var _this = this;

      return this.ranges.map(function (_ref) {
        var type = _ref.type,
            rangeArr = _ref.range;
        var values = (0, _utils.times)(rangeArr[1] - rangeArr[0] + 1, function (index) {
          var value = (0, _string.padZero)(rangeArr[0] + index);
          return value;
        });

        if (_this.filter) {
          values = _this.filter(type, values);
        }

        return {
          type: type,
          values: values
        };
      });
    },
    columns: function columns() {
      var _this2 = this;

      return this.originColumns.map(function (column) {
        return {
          values: column.values.map(function (value) {
            return _this2.formatter(column.type, value);
          })
        };
      });
    }
  },
  watch: {
    columns: 'updateColumnValue',
    innerValue: function innerValue(val) {
      this.$emit('input', val);
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.updateColumnValue();
    this.$nextTick(function () {
      _this3.updateInnerValue();
    });
  },
  methods: {
    // @exposed-api
    getPicker: function getPicker() {
      return this.$refs.picker;
    },
    onConfirm: function onConfirm() {
      this.$emit('confirm', this.innerValue);
    },
    onCancel: function onCancel() {
      this.$emit('cancel');
    }
  },
  render: function render() {
    var _this4 = this;

    var h = arguments[0];
    var props = {};
    Object.keys(_shared.pickerProps).forEach(function (key) {
      props[key] = _this4[key];
    });
    return h(_picker.default, {
      "ref": "picker",
      "attrs": {
        "columns": this.columns
      },
      "on": {
        "change": this.onChange,
        "confirm": this.onConfirm,
        "cancel": this.onCancel
      },
      "props": (0, _extends2.default)({}, props)
    });
  }
};
exports.TimePickerMixin = TimePickerMixin;