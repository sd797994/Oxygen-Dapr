"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _event = require("../utils/dom/event");

var _createNamespace = (0, _utils.createNamespace)('overlay'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function preventTouchMove(event) {
  (0, _event.preventDefault)(event, true);
}

function Overlay(h, props, slots, ctx) {
  var style = (0, _extends2.default)({
    zIndex: props.zIndex
  }, props.customStyle);

  if ((0, _utils.isDef)(props.duration)) {
    style.animationDuration = props.duration + "s";
  }

  return h("transition", {
    "attrs": {
      "name": "van-fade"
    }
  }, [h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "directives": [{
      name: "show",
      value: props.show
    }],
    "style": style,
    "class": [bem(), props.className],
    "on": {
      "touchmove": preventTouchMove
    }
  }, (0, _functional.inherit)(ctx, true)]), [slots.default && slots.default()])]);
}

Overlay.props = {
  show: Boolean,
  duration: [Number, String],
  className: null,
  customStyle: Object,
  zIndex: {
    type: [Number, String],
    default: 1
  }
};

var _default = createComponent(Overlay);

exports.default = _default;