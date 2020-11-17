import _extends from "@babel/runtime/helpers/esm/extends";
import { createNamespace } from '../utils';
import { ChildrenMixin } from '../mixins/relation';
import { route, routeProps } from '../utils/router';
import Info from '../info';

var _createNamespace = createNamespace('sidebar-item'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

export default createComponent({
  mixins: [ChildrenMixin('vanSidebar')],
  props: _extends({}, routeProps, {
    dot: Boolean,
    info: [Number, String],
    title: String,
    disabled: Boolean
  }),
  computed: {
    select: function select() {
      return this.index === +this.parent.activeKey;
    }
  },
  methods: {
    onClick: function onClick() {
      if (this.disabled) {
        return;
      }

      this.$emit('click', this.index);
      this.parent.$emit('input', this.index);
      this.parent.$emit('change', this.index);
      route(this.$router, this);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("a", {
      "class": bem({
        select: this.select,
        disabled: this.disabled
      }),
      "on": {
        "click": this.onClick
      }
    }, [h("div", {
      "class": bem('text')
    }, [this.title, h(Info, {
      "attrs": {
        "dot": this.dot,
        "info": this.info
      },
      "class": bem('info')
    })])]);
  }
});