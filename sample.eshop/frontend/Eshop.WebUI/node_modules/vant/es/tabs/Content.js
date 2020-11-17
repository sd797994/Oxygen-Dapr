import _extends from "@babel/runtime/helpers/esm/extends";
import { createNamespace } from '../utils';
import { TouchMixin } from '../mixins/touch';

var _createNamespace = createNamespace('tabs'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var MIN_SWIPE_DISTANCE = 50;
export default createComponent({
  mixins: [TouchMixin],
  props: {
    count: Number,
    duration: Number,
    animated: Boolean,
    swipeable: Boolean,
    currentIndex: Number
  },
  computed: {
    style: function style() {
      if (this.animated) {
        return {
          transform: "translate3d(" + -1 * this.currentIndex * 100 + "%, 0, 0)",
          transitionDuration: this.duration + "s"
        };
      }
    },
    listeners: function listeners() {
      if (this.swipeable) {
        return {
          touchstart: this.touchStart,
          touchmove: this.touchMove,
          touchend: this.onTouchEnd,
          touchcancel: this.onTouchEnd
        };
      }
    }
  },
  methods: {
    // watch swipe touch end
    onTouchEnd: function onTouchEnd() {
      var direction = this.direction,
          deltaX = this.deltaX,
          currentIndex = this.currentIndex;
      /* istanbul ignore else */

      if (direction === 'horizontal' && this.offsetX >= MIN_SWIPE_DISTANCE) {
        /* istanbul ignore else */
        if (deltaX > 0 && currentIndex !== 0) {
          this.$emit('change', currentIndex - 1);
        } else if (deltaX < 0 && currentIndex !== this.count - 1) {
          this.$emit('change', currentIndex + 1);
        }
      }
    },
    genChildren: function genChildren() {
      var h = this.$createElement;

      if (this.animated) {
        return h("div", {
          "class": bem('track'),
          "style": this.style
        }, [this.slots()]);
      }

      return this.slots();
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem('content', {
        animated: this.animated
      }),
      "on": _extends({}, this.listeners)
    }, [this.genChildren()]);
  }
});