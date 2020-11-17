import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { createNamespace } from '../../utils';
import { inherit } from '../../utils/functional'; // Types

var _createNamespace = createNamespace('sku-header-item'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function SkuHeader(h, props, slots, ctx) {
  return h("div", _mergeJSXProps([{
    "class": bem()
  }, inherit(ctx)]), [slots.default && slots.default()]);
}

export default createComponent(SkuHeader);