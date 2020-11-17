import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { createNamespace } from '../utils';
import { inherit } from '../utils/functional';
import { BORDER_TOP } from '../utils/constant';
import Cell from '../cell';
import CellGroup from '../cell-group'; // Types

var _createNamespace = createNamespace('panel'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function Panel(h, props, slots, ctx) {
  var Content = function Content() {
    return [slots.header ? slots.header() : h(Cell, {
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
      "class": [bem('footer'), BORDER_TOP]
    }, [slots.footer()])];
  };

  return h(CellGroup, _mergeJSXProps([{
    "class": bem(),
    "scopedSlots": {
      default: Content
    }
  }, inherit(ctx, true)]));
}

Panel.props = {
  icon: String,
  desc: String,
  title: String,
  status: String
};
export default createComponent(Panel);