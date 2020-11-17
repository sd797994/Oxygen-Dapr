"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("../utils");

var _constant = require("../utils/constant");

var _raf = require("../utils/dom/raf");

var _cell = _interopRequireDefault(require("../cell"));

var _shared = require("../cell/shared");

var _relation = require("../mixins/relation");

var _createNamespace = (0, _utils.createNamespace)('collapse-item'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var CELL_SLOTS = ['title', 'icon', 'right-icon'];

var _default = createComponent({
  mixins: [(0, _relation.ChildrenMixin)('vanCollapse')],
  props: (0, _extends2.default)({}, _shared.cellProps, {
    name: [Number, String],
    disabled: Boolean,
    isLink: {
      type: Boolean,
      default: true
    }
  }),
  data: function data() {
    return {
      show: null,
      inited: null
    };
  },
  computed: {
    currentName: function currentName() {
      return (0, _utils.isDef)(this.name) ? this.name : this.index;
    },
    expanded: function expanded() {
      var _this = this;

      if (!this.parent) {
        return null;
      }

      var _this$parent = this.parent,
          value = _this$parent.value,
          accordion = _this$parent.accordion;

      if (process.env.NODE_ENV !== 'production' && !accordion && !Array.isArray(value)) {
        console.error('[Vant] Collapse: type of prop "value" should be Array');
        return;
      }

      return accordion ? value === this.currentName : value.some(function (name) {
        return name === _this.currentName;
      });
    }
  },
  created: function created() {
    this.show = this.expanded;
    this.inited = this.expanded;
  },
  watch: {
    expanded: function expanded(_expanded, prev) {
      var _this2 = this;

      if (prev === null) {
        return;
      }

      if (_expanded) {
        this.show = true;
        this.inited = true;
      } // Use raf: flick when opened in safari
      // Use nextTick: closing animation failed when set `user-select: none`


      var nextTick = _expanded ? this.$nextTick : _raf.raf;
      nextTick(function () {
        var _this2$$refs = _this2.$refs,
            content = _this2$$refs.content,
            wrapper = _this2$$refs.wrapper;

        if (!content || !wrapper) {
          return;
        }

        var offsetHeight = content.offsetHeight;

        if (offsetHeight) {
          var contentHeight = offsetHeight + "px";
          wrapper.style.height = _expanded ? 0 : contentHeight; // use double raf to ensure animation can start in mobile safari

          (0, _raf.doubleRaf)(function () {
            wrapper.style.height = _expanded ? contentHeight : 0;
          });
        } else {
          _this2.onTransitionEnd();
        }
      });
    }
  },
  methods: {
    onClick: function onClick() {
      if (this.disabled) {
        return;
      }

      var parent = this.parent,
          currentName = this.currentName;
      var name = parent.accordion && currentName === parent.value ? '' : currentName;
      this.parent.switch(name, !this.expanded);
    },
    onTransitionEnd: function onTransitionEnd() {
      if (!this.expanded) {
        this.show = false;
      } else {
        this.$refs.wrapper.style.height = '';
      }
    },
    genTitle: function genTitle() {
      var _this3 = this;

      var h = this.$createElement;
      var disabled = this.disabled,
          expanded = this.expanded;
      var titleSlots = CELL_SLOTS.reduce(function (slots, name) {
        if (_this3.slots(name)) {
          slots[name] = function () {
            return _this3.slots(name);
          };
        }

        return slots;
      }, {});

      if (this.slots('value')) {
        titleSlots.default = function () {
          return _this3.slots('value');
        };
      }

      return h(_cell.default, {
        "attrs": {
          "role": "button",
          "tabindex": disabled ? -1 : 0,
          "aria-expanded": String(expanded)
        },
        "class": bem('title', {
          disabled: disabled,
          expanded: expanded
        }),
        "on": {
          "click": this.onClick
        },
        "scopedSlots": titleSlots,
        "props": (0, _extends2.default)({}, this.$props)
      });
    },
    genContent: function genContent() {
      var h = this.$createElement;

      if (this.inited) {
        return h("div", {
          "directives": [{
            name: "show",
            value: this.show
          }],
          "ref": "wrapper",
          "class": bem('wrapper'),
          "on": {
            "transitionend": this.onTransitionEnd
          }
        }, [h("div", {
          "ref": "content",
          "class": bem('content')
        }, [this.slots()])]);
      }
    }
  },
  render: function render() {
    var _ref;

    var h = arguments[0];
    return h("div", {
      "class": [bem(), (_ref = {}, _ref[_constant.BORDER_TOP] = this.index, _ref)]
    }, [this.genTitle(), this.genContent()]);
  }
});

exports.default = _default;