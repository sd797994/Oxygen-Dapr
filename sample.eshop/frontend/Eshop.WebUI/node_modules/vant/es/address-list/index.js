import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { createNamespace } from '../utils';
import { emit, inherit } from '../utils/functional';
import Button from '../button';
import RadioGroup from '../radio-group';
import AddressItem from './Item'; // Types

var _createNamespace = createNamespace('address-list'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

function AddressList(h, props, slots, ctx) {
  var _slots$top, _slots$default;

  function genList(list, disabled) {
    if (!list) {
      return;
    }

    return list.map(function (item, index) {
      return h(AddressItem, {
        "attrs": {
          "data": item,
          "disabled": disabled,
          "switchable": props.switchable,
          "defaultTagText": props.defaultTagText
        },
        "key": item.id,
        "on": {
          "select": function select() {
            emit(ctx, disabled ? 'select-disabled' : 'select', item, index);

            if (!disabled) {
              emit(ctx, 'input', item.id);
            }
          },
          "edit": function edit() {
            emit(ctx, disabled ? 'edit-disabled' : 'edit', item, index);
          },
          "click": function click() {
            emit(ctx, 'click-item', item, index);
          }
        }
      });
    });
  }

  var List = genList(props.list);
  var DisabledList = genList(props.disabledList, true);
  return h("div", _mergeJSXProps([{
    "class": bem()
  }, inherit(ctx)]), [(_slots$top = slots.top) === null || _slots$top === void 0 ? void 0 : _slots$top.call(slots), h(RadioGroup, {
    "attrs": {
      "value": props.value
    }
  }, [List]), props.disabledText && h("div", {
    "class": bem('disabled-text')
  }, [props.disabledText]), DisabledList, (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots), h("div", {
    "class": bem('bottom')
  }, [h(Button, {
    "attrs": {
      "round": true,
      "block": true,
      "type": "danger",
      "text": props.addButtonText || t('add')
    },
    "class": bem('add'),
    "on": {
      "click": function click() {
        emit(ctx, 'add');
      }
    }
  })])]);
}

AddressList.props = {
  list: Array,
  value: [Number, String],
  disabledList: Array,
  disabledText: String,
  addButtonText: String,
  defaultTagText: String,
  switchable: {
    type: Boolean,
    default: true
  }
};
export default createComponent(AddressList);