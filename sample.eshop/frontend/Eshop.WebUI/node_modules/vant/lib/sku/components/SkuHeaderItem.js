"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../../utils");

var _functional = require("../../utils/functional");

var _createNamespace = (0, _utils.createNamespace)('sku-header-item'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function SkuHeader(h, props, slots, ctx) {
  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": bem()
  }, (0, _functional.inherit)(ctx)]), [slots.default && slots.default()]);
}

var _default = createComponent(SkuHeader);

exports.default = _default;