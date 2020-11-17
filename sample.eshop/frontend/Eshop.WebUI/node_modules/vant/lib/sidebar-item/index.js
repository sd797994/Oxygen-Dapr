"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("../utils");

var _relation = require("../mixins/relation");

var _router = require("../utils/router");

var _info = _interopRequireDefault(require("../info"));

var _createNamespace = (0, _utils.createNamespace)('sidebar-item'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  mixins: [(0, _relation.ChildrenMixin)('vanSidebar')],
  props: (0, _extends2.default)({}, _router.routeProps, {
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
      (0, _router.route)(this.$router, this);
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
    }, [this.title, h(_info.default, {
      "attrs": {
        "dot": this.dot,
        "info": this.info
      },
      "class": bem('info')
    })])]);
  }
});

exports.default = _default;