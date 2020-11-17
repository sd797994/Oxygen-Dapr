import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { createNamespace, isDef } from '../utils';
import { inherit } from '../utils/functional'; // Types

var _createNamespace = createNamespace('info'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function Info(h, props, slots, ctx) {
  var dot = props.dot,
      info = props.info;
  var showInfo = isDef(info) && info !== '';

  if (!dot && !showInfo) {
    return;
  }

  return h("div", _mergeJSXProps([{
    "class": bem({
      dot: dot
    })
  }, inherit(ctx, true)]), [dot ? '' : props.info]);
}

Info.props = {
  dot: Boolean,
  info: [Number, String]
};
export default createComponent(Info);