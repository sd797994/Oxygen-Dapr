import { createNamespace, addUnit } from '../utils';
import { ParentMixin } from '../mixins/relation';
import { BORDER_TOP } from '../utils/constant';

var _createNamespace = createNamespace('grid'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

export default createComponent({
  mixins: [ParentMixin('vanGrid')],
  props: {
    square: Boolean,
    gutter: [Number, String],
    iconSize: [Number, String],
    clickable: Boolean,
    columnNum: {
      type: Number,
      default: 4
    },
    center: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    style: function style() {
      var gutter = this.gutter;

      if (gutter) {
        return {
          paddingLeft: addUnit(gutter)
        };
      }
    }
  },
  render: function render() {
    var _ref;

    var h = arguments[0];
    return h("div", {
      "style": this.style,
      "class": [bem(), (_ref = {}, _ref[BORDER_TOP] = this.border && !this.gutter, _ref)]
    }, [this.slots()]);
  }
});