import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import _extends from "@babel/runtime/helpers/esm/extends";
import { createNamespace, isDef } from '../utils';
import { inherit } from '../utils/functional';
import { preventDefault } from '../utils/dom/event'; // Types

var _createNamespace = createNamespace('overlay'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function preventTouchMove(event) {
  preventDefault(event, true);
}

function Overlay(h, props, slots, ctx) {
  var style = _extends({
    zIndex: props.zIndex
  }, props.customStyle);

  if (isDef(props.duration)) {
    style.animationDuration = props.duration + "s";
  }

  return h("transition", {
    "attrs": {
      "name": "van-fade"
    }
  }, [h("div", _mergeJSXProps([{
    "directives": [{
      name: "show",
      value: props.show
    }],
    "style": style,
    "class": [bem(), props.className],
    "on": {
      "touchmove": preventTouchMove
    }
  }, inherit(ctx, true)]), [slots.default && slots.default()])]);
}

Overlay.props = {
  show: Boolean,
  duration: [Number, String],
  className: null,
  customStyle: Object,
  zIndex: {
    type: [Number, String],
    default: 1
  }
};
export default createComponent(Overlay);