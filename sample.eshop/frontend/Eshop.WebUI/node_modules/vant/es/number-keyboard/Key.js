import { createNamespace } from '../utils';
import { TouchMixin } from '../mixins/touch';
import { BORDER } from '../utils/constant';

var _createNamespace = createNamespace('key'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

export default createComponent({
  mixins: [TouchMixin],
  props: {
    type: String,
    text: [Number, String],
    theme: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      active: false
    };
  },
  computed: {
    className: function className() {
      var classNames = this.theme.slice(0);

      if (this.active) {
        classNames.push('active');
      }

      if (this.type) {
        classNames.push(this.type);
      }

      return bem(classNames);
    }
  },
  mounted: function mounted() {
    this.bindTouchEvent(this.$el);
  },
  methods: {
    onTouchStart: function onTouchStart(event) {
      // compatible with Vue 2.6 event bubble bug
      event.stopPropagation();
      this.touchStart(event);
      this.active = true;
    },
    onTouchMove: function onTouchMove(event) {
      this.touchMove(event);

      if (this.direction) {
        this.active = false;
      }
    },
    onTouchEnd: function onTouchEnd() {
      if (this.active) {
        this.active = false;
        this.$emit('press', this.text, this.type);
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("i", {
      "attrs": {
        "role": "button",
        "tabindex": "0"
      },
      "class": [BORDER, this.className]
    }, [this.slots('default') || this.text]);
  }
});