import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { createNamespace } from '../utils';
import { emit, inherit } from '../utils/functional';
import Icon from '../icon';
import Cell from '../cell';
import Radio from '../radio';
import Tag from '../tag'; // Types

var _createNamespace = createNamespace('address-item'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function AddressItem(h, props, slots, ctx) {
  var disabled = props.disabled,
      switchable = props.switchable;

  function onClick() {
    if (switchable) {
      emit(ctx, 'select');
    }

    emit(ctx, 'click');
  }

  var genRightIcon = function genRightIcon() {
    return h(Icon, {
      "attrs": {
        "name": "edit"
      },
      "class": bem('edit'),
      "on": {
        "click": function click(event) {
          event.stopPropagation();
          emit(ctx, 'edit');
          emit(ctx, 'click');
        }
      }
    });
  };

  function genTag() {
    if (props.data.isDefault && props.defaultTagText) {
      return h(Tag, {
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
      return h(Radio, {
        "attrs": {
          "name": data.id,
          "iconSize": 16
        }
      }, [Info]);
    }

    return Info;
  }

  return h(Cell, _mergeJSXProps([{
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
  }, inherit(ctx)]));
}

AddressItem.props = {
  data: Object,
  disabled: Boolean,
  switchable: Boolean,
  defaultTagText: String
};
export default createComponent(AddressItem);