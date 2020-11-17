"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _constant = require("../utils/constant");

var _cell = _interopRequireDefault(require("../cell"));

var _cellGroup = _interopRequireDefault(require("../cell-group"));

var _createNamespace = (0, _utils.createNamespace)('panel'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function Panel(h, props, slots, ctx) {
  var Content = function Content() {
    return [slots.header ? slots.header() : h(_cell.default, {
      "attrs": {
        "icon": props.icon,
        "label": props.desc,
        "title": props.title,
        "value": props.status,
        "valueClass": bem('header-value')
      },
      "class": bem('header')
    }), h("div", {
      "class": bem('content')
    }, [slots.default && slots.default()]), slots.footer && h("div", {
      "class": [bem('footer'), _constant.BORDER_TOP]
    }, [slots.footer()])];
  };

  return h(_cellGroup.default, (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem(),
    "scopedSlots": {
      default: Content
    }
  }, (0, _functional.inherit)(ctx, true)]));
}

Panel.props = {
  icon: String,
  desc: String,
  title: String,
  status: String
};

var _default = createComponent(Panel);

exports.default = _default;