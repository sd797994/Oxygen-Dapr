import _extends from "@babel/runtime/helpers/esm/extends";
import { createNamespace, isObj, isDef } from '../utils';
import Icon from '../icon';
import Info from '../info';
import { route, routeProps } from '../utils/router';
import { ChildrenMixin } from '../mixins/relation';

var _createNamespace = createNamespace('tabbar-item'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

export default createComponent({
  mixins: [ChildrenMixin('vanTabbar')],
  props: _extends({}, routeProps, {
    dot: Boolean,
    icon: String,
    name: [Number, String],
    info: [Number, String]
  }),
  data: function data() {
    return {
      active: false
    };
  },
  computed: {
    routeActive: function routeActive() {
      var to = this.to,
          $route = this.$route;

      if (to && $route) {
        var config = isObj(to) ? to : {
          path: to
        };
        var pathMatched = config.path === $route.path;
        var nameMatched = isDef(config.name) && config.name === $route.name;
        return pathMatched || nameMatched;
      }
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.parent.onChange(this.name || this.index);
      this.$emit('click', event);
      route(this.$router, this);
    }
  },
  render: function render() {
    var h = arguments[0];
    var icon = this.icon,
        slots = this.slots;
    var active = this.parent.route ? this.routeActive : this.active;
    var color = this.parent[active ? 'activeColor' : 'inactiveColor'];
    return h("div", {
      "class": bem({
        active: active
      }),
      "style": {
        color: color
      },
      "on": {
        "click": this.onClick
      }
    }, [h("div", {
      "class": bem('icon')
    }, [slots('icon', {
      active: active
    }) || icon && h(Icon, {
      "attrs": {
        "name": icon
      }
    }), h(Info, {
      "attrs": {
        "dot": this.dot,
        "info": this.info
      }
    })]), h("div", {
      "class": bem('text')
    }, [slots('default', {
      active: active
    })])]);
  }
});