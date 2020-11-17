import { createNamespace } from '../utils';
import { ParentMixin } from '../mixins/relation';

var _createNamespace = createNamespace('goods-action'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

export default createComponent({
  mixins: [ParentMixin('vanGoodsAction')],
  props: {
    safeAreaInsetBottom: Boolean
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem({
        'safe-area-inset-bottom': this.safeAreaInsetBottom
      })
    }, [this.slots()]);
  }
});