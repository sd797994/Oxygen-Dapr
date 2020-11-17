"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("../utils");

var _icon = _interopRequireDefault(require("../icon"));

var _info = _interopRequireDefault(require("../info"));

var _router = require("../utils/router");

var _relation = require("../mixins/relation");

var _createNamespace = (0, _utils.createNamespace)('tabbar-item'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  mixins: [(0, _relation.ChildrenMixin)('vanTabbar')],
  props: (0, _extends2.default)({}, _router.routeProps, {
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
        var config = (0, _utils.isObj)(to) ? to : {
          path: to
        };
        var pathMatched = config.path === $route.path;
        var nameMatched = (0, _utils.isDef)(config.name) && config.name === $route.name;
        return pathMatched || nameMatched;
      }
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.parent.onChange(this.name || this.index);
      this.$emit('click', event);
      (0, _router.route)(this.$router, this);
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
    }) || icon && h(_icon.default, {
      "attrs": {
        "name": icon
      }
    }), h(_info.default, {
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

exports.default = _default;