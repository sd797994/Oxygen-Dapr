"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.unifySlots = unifySlots;
exports.createComponent = createComponent;

require("../../locale");

var _string = require("../format/string");

var _slots = require("../../mixins/slots");

var _vue = _interopRequireDefault(require("vue"));

/**
 * Create a basic component with common options
 */
function install(Vue) {
  var name = this.name;
  Vue.component(name, this);
  Vue.component((0, _string.camelize)("-" + name), this);
} // unify slots & scopedSlots


function unifySlots(context) {
  // use data.scopedSlots in lower Vue version
  var scopedSlots = context.scopedSlots || context.data.scopedSlots || {};
  var slots = context.slots();
  Object.keys(slots).forEach(function (key) {
    if (!scopedSlots[key]) {
      scopedSlots[key] = function () {
        return slots[key];
      };
    }
  });
  return scopedSlots;
} // should be removed after Vue 3


function transformFunctionComponent(pure) {
  return {
    functional: true,
    props: pure.props,
    model: pure.model,
    render: function render(h, context) {
      return pure(h, context.props, unifySlots(context), context);
    }
  };
}

function createComponent(name) {
  return function (sfc) {
    if (typeof sfc === 'function') {
      sfc = transformFunctionComponent(sfc);
    }

    if (!sfc.functional) {
      sfc.mixins = sfc.mixins || [];
      sfc.mixins.push(_slots.SlotsMixin);
    }

    sfc.name = name;
    sfc.install = install;
    return sfc;
  };
}