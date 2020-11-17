import _extends from "@babel/runtime/helpers/esm/extends";
import { createNamespace } from '../utils';
import { route, routeProps } from '../utils/router';
import { ChildrenMixin } from '../mixins/relation';
import Button from '../button';

var _createNamespace = createNamespace('goods-action-button'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

export default createComponent({
  mixins: [ChildrenMixin('vanGoodsAction')],
  props: _extends({}, routeProps, {
    type: String,
    text: String,
    color: String,
    loading: Boolean,
    disabled: Boolean
  }),
  computed: {
    isFirst: function isFirst() {
      var prev = this.parent && this.parent.children[this.index - 1];
      return !prev || prev.$options.name !== this.$options.name;
    },
    isLast: function isLast() {
      var next = this.parent && this.parent.children[this.index + 1];
      return !next || next.$options.name !== this.$options.name;
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
      route(this.$router, this);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h(Button, {
      "class": bem([{
        first: this.isFirst,
        last: this.isLast
      }, this.type]),
      "attrs": {
        "square": true,
        "size": "large",
        "type": this.type,
        "color": this.color,
        "loading": this.loading,
        "disabled": this.disabled
      },
      "on": {
        "click": this.onClick
      }
    }, [this.slots() || this.text]);
  }
});