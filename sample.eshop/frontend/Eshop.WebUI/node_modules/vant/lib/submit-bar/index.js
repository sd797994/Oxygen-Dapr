"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _button = _interopRequireDefault(require("../button"));

var _icon = _interopRequireDefault(require("../icon"));

var _createNamespace = (0, _utils.createNamespace)('submit-bar'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

function SubmitBar(h, props, slots, ctx) {
  var tip = props.tip,
      price = props.price,
      tipIcon = props.tipIcon;

  function Text() {
    if (typeof price === 'number') {
      var priceArr = (price / 100).toFixed(props.decimalLength).split('.');
      var decimalStr = props.decimalLength ? "." + priceArr[1] : '';
      return h("div", {
        "style": {
          textAlign: props.textAlign ? props.textAlign : ''
        },
        "class": bem('text')
      }, [h("span", [props.label || t('label')]), h("span", {
        "class": bem('price')
      }, [props.currency, h("span", {
        "class": bem('price', 'integer')
      }, [priceArr[0]]), decimalStr]), props.suffixLabel && h("span", {
        "class": bem('suffix-label')
      }, [props.suffixLabel])]);
    }
  }

  function Tip() {
    if (slots.tip || tip) {
      return h("div", {
        "class": bem('tip')
      }, [tipIcon && h(_icon.default, {
        "class": bem('tip-icon'),
        "attrs": {
          "name": tipIcon
        }
      }), tip && h("span", {
        "class": bem('tip-text')
      }, [tip]), slots.tip && slots.tip()]);
    }
  }

  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem({
      'safe-area-inset-bottom': props.safeAreaInsetBottom
    })
  }, (0, _functional.inherit)(ctx)]), [slots.top && slots.top(), Tip(), h("div", {
    "class": bem('bar')
  }, [slots.default && slots.default(), Text(), h(_button.default, {
    "attrs": {
      "round": true,
      "type": props.buttonType,
      "loading": props.loading,
      "disabled": props.disabled,
      "text": props.loading ? '' : props.buttonText
    },
    "class": bem('button', props.buttonType),
    "on": {
      "click": function click() {
        (0, _functional.emit)(ctx, 'submit');
      }
    }
  })])]);
}

SubmitBar.props = {
  tip: String,
  label: String,
  price: Number,
  tipIcon: String,
  loading: Boolean,
  disabled: Boolean,
  buttonText: String,
  suffixLabel: String,
  safeAreaInsetBottom: Boolean,
  decimalLength: {
    type: Number,
    default: 2
  },
  currency: {
    type: String,
    default: '¥'
  },
  buttonType: {
    type: String,
    default: 'danger'
  },
  textAlign: String
};

var _default = createComponent(SubmitBar);

exports.default = _default;