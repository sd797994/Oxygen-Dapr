"use strict";

exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _relation = require("../mixins/relation");

var _createNamespace = (0, _utils.createNamespace)('sidebar'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var _default = createComponent({
  mixins: [(0, _relation.ParentMixin)('vanSidebar')],
  model: {
    prop: 'activeKey'
  },
  props: {
    activeKey: {
      type: [Number, String],
      default: 0
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem()
    }, [this.slots()]);
  }
});

exports.default = _default;