import _extends from "@babel/runtime/helpers/esm/extends";
import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { createNamespace } from '../utils';
import { inherit } from '../utils/functional';
import Cell from '../cell';
import Switch from '../switch';
import { switchProps } from '../switch/shared'; // Types

var _createNamespace = createNamespace('switch-cell'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function SwitchCell(h, props, slots, ctx) {
  return h(Cell, _mergeJSXProps([{
    "attrs": {
      "center": true,
      "size": props.cellSize,
      "title": props.title,
      "border": props.border
    },
    "class": bem([props.cellSize])
  }, inherit(ctx)]), [h(Switch, {
    "props": _extends({}, props),
    "on": _extends({}, ctx.listeners)
  })]);
}

SwitchCell.props = _extends({}, switchProps, {
  title: String,
  cellSize: String,
  border: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    default: '24px'
  }
});
export default createComponent(SwitchCell);