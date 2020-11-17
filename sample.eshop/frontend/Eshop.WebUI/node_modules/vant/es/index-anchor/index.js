import { createNamespace } from '../utils';
import { ChildrenMixin } from '../mixins/relation';
import { BORDER_BOTTOM } from '../utils/constant';

var _createNamespace = createNamespace('index-anchor'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

export default createComponent({
  mixins: [ChildrenMixin('vanIndexBar', {
    indexKey: 'childrenIndex'
  })],
  props: {
    index: [Number, String]
  },
  data: function data() {
    return {
      top: 0,
      left: null,
      width: null,
      active: false
    };
  },
  computed: {
    sticky: function sticky() {
      return this.active && this.parent.sticky;
    },
    anchorStyle: function anchorStyle() {
      if (this.sticky) {
        return {
          zIndex: "" + this.parent.zIndex,
          left: this.left ? this.left + "px" : null,
          width: this.width ? this.width + "px" : null,
          transform: "translate3d(0, " + this.top + "px, 0)",
          color: this.parent.highlightColor
        };
      }
    }
  },
  mounted: function mounted() {
    this.height = this.$el.offsetHeight;
  },
  methods: {
    scrollIntoView: function scrollIntoView() {
      this.$el.scrollIntoView();
    }
  },
  render: function render() {
    var _ref;

    var h = arguments[0];
    var sticky = this.sticky;
    return h("div", {
      "style": {
        height: sticky ? this.height + "px" : null
      }
    }, [h("div", {
      "style": this.anchorStyle,
      "class": [bem({
        sticky: sticky
      }), (_ref = {}, _ref[BORDER_BOTTOM] = sticky, _ref)]
    }, [this.slots('default') || this.index])]);
  }
});