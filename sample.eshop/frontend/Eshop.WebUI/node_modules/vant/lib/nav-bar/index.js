"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _constant = require("../utils/constant");

var _icon = _interopRequireDefault(require("../icon"));

var _createNamespace = (0, _utils.createNamespace)('nav-bar'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function NavBar(h, props, slots, ctx) {
  var _ref;

  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": [bem({
      fixed: props.fixed
    }), (_ref = {}, _ref[_constant.BORDER_BOTTOM] = props.border, _ref)],
    "style": {
      zIndex: props.zIndex
    }
  }, (0, _functional.inherit)(ctx)]), [h("div", {
    "class": bem('left'),
    "on": {
      "click": ctx.listeners['click-left'] || _utils.noop
    }
  }, [slots.left ? slots.left() : [props.leftArrow && h(_icon.default, {
    "class": bem('arrow'),
    "attrs": {
      "name": "arrow-left"
    }
  }), props.leftText && h("span", {
    "class": bem('text')
  }, [props.leftText])]]), h("div", {
    "class": [bem('title'), 'van-ellipsis']
  }, [slots.title ? slots.title() : props.title]), h("div", {
    "class": bem('right'),
    "on": {
      "click": ctx.listeners['click-right'] || _utils.noop
    }
  }, [slots.right ? slots.right() : props.rightText && h("span", {
    "class": bem('text')
  }, [props.rightText])])]);
}

NavBar.props = {
  title: String,
  fixed: Boolean,
  leftText: String,
  rightText: String,
  leftArrow: Boolean,
  border: {
    type: Boolean,
    default: true
  },
  zIndex: {
    type: Number,
    default: 1
  }
};

var _default = createComponent(NavBar);

exports.default = _default;