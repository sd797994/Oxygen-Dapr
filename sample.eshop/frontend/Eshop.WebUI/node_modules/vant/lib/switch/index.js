"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _constant = require("../utils/constant");

var _shared = require("./shared");

var _functional = require("../utils/functional");

var _loading = _interopRequireDefault(require("../loading"));

var _createNamespace = (0, _utils.createNamespace)('switch'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function Switch(h, props, slots, ctx) {
  var size = props.size,
      value = props.value,
      loading = props.loading,
      disabled = props.disabled,
      activeColor = props.activeColor,
      activeValue = props.activeValue,
      inactiveColor = props.inactiveColor,
      inactiveValue = props.inactiveValue;
  var checked = value === activeValue;
  var switchStyle = {
    fontSize: (0, _utils.addUnit)(size),
    backgroundColor: checked ? activeColor : inactiveColor
  };
  var loadingColor = checked ? activeColor || _constant.BLUE : inactiveColor || '';

  function onClick(event) {
    (0, _functional.emit)(ctx, 'click', event);

    if (!disabled && !loading) {
      var newValue = checked ? inactiveValue : activeValue;
      (0, _functional.emit)(ctx, 'input', newValue);
      (0, _functional.emit)(ctx, 'change', newValue);
    }
  }

  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem({
      on: checked,
      disabled: disabled
    }),
    "attrs": {
      "role": "switch",
      "aria-checked": String(checked)
    },
    "style": switchStyle,
    "on": {
      "click": onClick
    }
  }, (0, _functional.inherit)(ctx)]), [h("div", {
    "class": bem('node')
  }, [loading && h(_loading.default, {
    "class": bem('loading'),
    "attrs": {
      "color": loadingColor
    }
  })])]);
}

Switch.props = _shared.switchProps;

var _default = createComponent(Switch);

exports.default = _default;