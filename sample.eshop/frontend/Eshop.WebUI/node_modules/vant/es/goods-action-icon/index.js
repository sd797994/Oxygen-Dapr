import _extends from "@babel/runtime/helpers/esm/extends";
import { createNamespace } from '../utils';
import { route, routeProps } from '../utils/router';
import { ChildrenMixin } from '../mixins/relation';
import Icon from '../icon';

var _createNamespace = createNamespace('goods-action-icon'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

export default createComponent({
  mixins: [ChildrenMixin('vanGoodsAction')],
  props: _extends({}, routeProps, {
    text: String,
    icon: String,
    info: [Number, String],
    iconClass: null
  }),
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
      route(this.$router, this);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "attrs": {
        "role": "button",
        "tabindex": "0"
      },
      "class": bem(),
      "on": {
        "click": this.onClick
      }
    }, [this.slots('icon') ? h("div", {
      "class": bem('icon')
    }, [this.slots('icon')]) : h(Icon, {
      "class": [bem('icon'), this.iconClass],
      "attrs": {
        "tag": "div",
        "info": this.info,
        "name": this.icon
      }
    }), this.slots() || this.text]);
  }
});