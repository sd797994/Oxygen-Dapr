"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../utils");

var _constant = require("../utils/constant");

var _functional = require("../utils/functional");

var _icon = _interopRequireDefault(require("../icon"));

var _cell = _interopRequireDefault(require("../cell"));

var _tag = _interopRequireDefault(require("../tag"));

var _button = _interopRequireDefault(require("../button"));

var _radio = _interopRequireDefault(require("../radio"));

var _radioGroup = _interopRequireDefault(require("../radio-group"));

var _createNamespace = (0, _utils.createNamespace)('contact-list'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

function ContactList(h, props, slots, ctx) {
  var List = props.list && props.list.map(function (item, index) {
    function onClick() {
      (0, _functional.emit)(ctx, 'input', item.id);
      (0, _functional.emit)(ctx, 'select', item, index);
    }

    function RightIcon() {
      return h(_radio.default, {
        "attrs": {
          "name": item.id,
          "iconSize": 16,
          "checkedColor": _constant.RED
        },
        "on": {
          "click": onClick
        }
      });
    }

    function LeftIcon() {
      return h(_icon.default, {
        "attrs": {
          "name": "edit"
        },
        "class": bem('edit'),
        "on": {
          "click": function click(event) {
            event.stopPropagation();
            (0, _functional.emit)(ctx, 'edit', item, index);
          }
        }
      });
    }

    function Content() {
      var nodes = [item.name + "\uFF0C" + item.tel];

      if (item.isDefault && props.defaultTagText) {
        nodes.push(h(_tag.default, {
          "attrs": {
            "type": "danger",
            "round": true
          },
          "class": bem('item-tag')
        }, [props.defaultTagText]));
      }

      return nodes;
    }

    return h(_cell.default, {
      "key": item.id,
      "attrs": {
        "isLink": true,
        "center": true,
        "valueClass": bem('item-value')
      },
      "class": bem('item'),
      "scopedSlots": {
        icon: LeftIcon,
        default: Content,
        'right-icon': RightIcon
      },
      "on": {
        "click": onClick
      }
    });
  });
  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem()
  }, (0, _functional.inherit)(ctx)]), [h(_radioGroup.default, {
    "attrs": {
      "value": props.value
    },
    "class": bem('group')
  }, [List]), h("div", {
    "class": bem('bottom')
  }, [h(_button.default, {
    "attrs": {
      "round": true,
      "block": true,
      "type": "danger",
      "text": props.addText || t('addText')
    },
    "class": bem('add'),
    "on": {
      "click": function click() {
        (0, _functional.emit)(ctx, 'add');
      }
    }
  })])]);
}

ContactList.props = {
  value: null,
  list: Array,
  addText: String,
  defaultTagText: String
};

var _default = createComponent(ContactList);

exports.default = _default;