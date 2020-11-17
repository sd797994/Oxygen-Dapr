import _mergeJSXProps2 from "@vue/babel-helper-vue-jsx-merge-props";
import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createNamespace } from '../utils';
import { inherit, emit } from '../utils/functional';
import { preventDefault } from '../utils/dom/event';
import Field from '../field'; // Types

var _createNamespace = createNamespace('search'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

function Search(h, props, slots, ctx) {
  function Label() {
    if (slots.label || props.label) {
      return h("div", {
        "class": bem('label')
      }, [slots.label ? slots.label() : props.label]);
    }
  }

  function Action() {
    if (!props.showAction) {
      return;
    }

    function onCancel() {
      if (slots.action) {
        return;
      }

      emit(ctx, 'input', '');
      emit(ctx, 'cancel');
    }

    return h("div", {
      "class": bem('action'),
      "attrs": {
        "role": "button",
        "tabindex": "0"
      },
      "on": {
        "click": onCancel
      }
    }, [slots.action ? slots.action() : props.actionText || t('cancel')]);
  }

  var fieldData = {
    attrs: ctx.data.attrs,
    on: _extends({}, ctx.listeners, {
      keypress: function keypress(event) {
        // press enter
        if (event.keyCode === 13) {
          preventDefault(event);
          emit(ctx, 'search', props.value);
        }

        emit(ctx, 'keypress', event);
      }
    })
  };
  var inheritData = inherit(ctx);
  inheritData.attrs = undefined;
  return h("div", _mergeJSXProps2([{
    "class": bem({
      'show-action': props.showAction
    }),
    "style": {
      background: props.background
    }
  }, inheritData]), [h("div", {
    "class": bem('content', props.shape)
  }, [Label(), h(Field, _mergeJSXProps([{
    "attrs": {
      "type": "search",
      "border": false,
      "value": props.value,
      "leftIcon": props.leftIcon,
      "rightIcon": props.rightIcon,
      "clearable": props.clearable
    },
    "scopedSlots": {
      'left-icon': slots['left-icon'],
      'right-icon': slots['right-icon']
    }
  }, fieldData]))]), Action()]);
}

Search.props = {
  value: String,
  label: String,
  rightIcon: String,
  actionText: String,
  showAction: Boolean,
  shape: {
    type: String,
    default: 'square'
  },
  clearable: {
    type: Boolean,
    default: true
  },
  background: {
    type: String,
    default: '#fff'
  },
  leftIcon: {
    type: String,
    default: 'search'
  }
};
export default createComponent(Search);