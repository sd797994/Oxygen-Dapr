import { createNamespace } from '../utils';

var _createNamespace = createNamespace('col'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

export default createComponent({
  props: {
    span: [Number, String],
    offset: [Number, String],
    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    gutter: function gutter() {
      return this.$parent && Number(this.$parent.gutter) || 0;
    },
    style: function style() {
      var padding = this.gutter / 2 + "px";
      return this.gutter ? {
        paddingLeft: padding,
        paddingRight: padding
      } : {};
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
    }
  },
  render: function render() {
    var _bem;

    var h = arguments[0];
    var span = this.span,
        offset = this.offset;
    return h(this.tag, {
      "style": this.style,
      "class": bem((_bem = {}, _bem[span] = span, _bem["offset-" + offset] = offset, _bem)),
      "on": {
        "click": this.onClick
      }
    }, [this.slots()]);
  }
});