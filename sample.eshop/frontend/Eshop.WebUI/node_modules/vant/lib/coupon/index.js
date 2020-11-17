"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _constant = require("../utils/constant");

var _string = require("../utils/format/string");

var _checkbox = _interopRequireDefault(require("../checkbox"));

var _createNamespace = (0, _utils.createNamespace)('coupon'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

function getDate(timeStamp) {
  var date = new Date(timeStamp * 1000);
  return date.getFullYear() + "." + (0, _string.padZero)(date.getMonth() + 1) + "." + (0, _string.padZero)(date.getDate());
}

function formatDiscount(discount) {
  return (discount / 10).toFixed(discount % 10 === 0 ? 0 : 1);
}

function formatAmount(amount) {
  return (amount / 100).toFixed(amount % 100 === 0 ? 0 : amount % 10 === 0 ? 1 : 2);
}

var _default = createComponent({
  props: {
    coupon: Object,
    chosen: Boolean,
    disabled: Boolean,
    currency: {
      type: String,
      default: '¥'
    }
  },
  computed: {
    validPeriod: function validPeriod() {
      var _this$coupon = this.coupon,
          startAt = _this$coupon.startAt,
          endAt = _this$coupon.endAt;
      return getDate(startAt) + " - " + getDate(endAt);
    },
    faceAmount: function faceAmount() {
      var coupon = this.coupon;

      if (coupon.valueDesc) {
        return coupon.valueDesc + "<span>" + (coupon.unitDesc || '') + "</span>";
      }

      if (coupon.denominations) {
        return "<span>" + this.currency + "</span> " + formatAmount(this.coupon.denominations);
      }

      if (coupon.discount) {
        return t('discount', formatDiscount(this.coupon.discount));
      }

      return '';
    },
    conditionMessage: function conditionMessage() {
      var condition = formatAmount(this.coupon.originCondition);
      return condition === '0' ? t('unlimited') : t('condition', condition);
    }
  },
  render: function render() {
    var h = arguments[0];
    var coupon = this.coupon,
        disabled = this.disabled;
    var description = disabled && coupon.reason || coupon.description;
    return h("div", {
      "class": bem({
        disabled: disabled
      })
    }, [h("div", {
      "class": bem('content')
    }, [h("div", {
      "class": bem('head')
    }, [h("h2", {
      "class": bem('amount'),
      "domProps": {
        "innerHTML": this.faceAmount
      }
    }), h("p", {
      "class": bem('condition')
    }, [this.coupon.condition || this.conditionMessage])]), h("div", {
      "class": bem('body')
    }, [h("p", {
      "class": bem('name')
    }, [coupon.name]), h("p", {
      "class": bem('valid')
    }, [this.validPeriod]), !this.disabled && h(_checkbox.default, {
      "attrs": {
        "value": this.chosen,
        "size": 18,
        "checked-color": _constant.RED
      },
      "class": bem('corner')
    })])]), description && h("p", {
      "class": bem('description')
    }, [description])]);
  }
});

exports.default = _default;