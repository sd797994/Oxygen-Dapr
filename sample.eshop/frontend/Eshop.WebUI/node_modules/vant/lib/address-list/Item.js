"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _functional = require("../utils/functional");

var _icon = _interopRequireDefault(require("../icon"));

var _cell = _interopRequireDefault(require("../cell"));

var _radio = _interopRequireDefault(require("../radio"));

var _tag = _interopRequireDefault(require("../tag"));

var _createNamespace = (0, _utils.createNamespace)('address-item'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function AddressItem(h, props, slots, ctx) {
  var disabled = props.disabled,
      switchable = props.switchable;

  function onClick() {
    if (switchable) {
      (0, _functional.emit)(ctx, 'select');
    }

    (0, _functional.emit)(ctx, 'click');
  }

  var genRightIcon = function genRightIcon() {
    return h(_icon.default, {
      "attrs": {
        "name": "edit"
      },
      "class": bem('edit'),
      "on": {
        "click": function click(event) {
          event.stopPropagation();
          (0, _functional.emit)(ctx, 'edit');
          (0, _functional.emit)(ctx, 'click');
        }
      }
    });
  };

  function genTag() {
    if (props.data.isDefault && props.defaultTagText) {
      return h(_tag.default, {
        "attrs": {
          "type": "danger",
          "round": true
        },
        "class": bem('tag')
      }, [props.defaultTagText]);
    }
  }

  function genContent() {
    var data = props.data;
    var Info = [h("div", {
      "class": bem('name')
    }, [data.name + " " + data.tel, genTag()]), h("div", {
      "class": bem('address')
    }, [data.address])];

    if (switchable && !disabled) {
      return h(_radio.default, {
        "attrs": {
          "name": data.id,
          "iconSize": 16
        }
      }, [Info]);
    }

    return Info;
  }

  return h(_cell.default, (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem({
      disabled: disabled
    }),
    "attrs": {
      "border": false,
      "valueClass": bem('value'),
      "clickable": switchable && !disabled
    },
    "scopedSlots": {
      default: genContent,
      'right-icon': genRightIcon
    },
    "on": {
      "click": onClick
    }
  }, (0, _functional.inherit)(ctx)]));
}

AddressItem.props = {
  data: Object,
  disabled: Boolean,
  switchable: Boolean,
  defaultTagText: String
};

var _default = createComponent(AddressItem);

exports.default = _default;