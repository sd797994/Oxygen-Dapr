import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
import { createNamespace } from '../../utils';
import { inherit } from '../../utils/functional';
import { BORDER_BOTTOM } from '../../utils/constant'; // Types

var _createNamespace = createNamespace('sku-row'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function SkuRow(h, props, slots, ctx) {
  return h("div", _mergeJSXProps([{
    "class": [bem(), BORDER_BOTTOM]
  }, inherit(ctx)]), [h("div", {
    "class": bem('title')
  }, [props.skuRow.k]), slots.default && slots.default()]);
}

SkuRow.props = {
  skuRow: Object
};
export default createComponent(SkuRow);