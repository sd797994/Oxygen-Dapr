import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { createNamespace, addUnit } from '../utils';
import { BLUE } from '../utils/constant';
import { switchProps } from './shared';
import { emit, inherit } from '../utils/functional';
import Loading from '../loading'; // Types

var _createNamespace = createNamespace('switch'),
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
    fontSize: addUnit(size),
    backgroundColor: checked ? activeColor : inactiveColor
  };
  var loadingColor = checked ? activeColor || BLUE : inactiveColor || '';

  function onClick(event) {
    emit(ctx, 'click', event);

    if (!disabled && !loading) {
      var newValue = checked ? inactiveValue : activeValue;
      emit(ctx, 'input', newValue);
      emit(ctx, 'change', newValue);
    }
  }

  return h("div", _mergeJSXProps([{
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
  }, inherit(ctx)]), [h("div", {
    "class": bem('node')
  }, [loading && h(Loading, {
    "class": bem('loading'),
    "attrs": {
      "color": loadingColor
    }
  })])]);
}

Switch.props = switchProps;
export default createComponent(Switch);