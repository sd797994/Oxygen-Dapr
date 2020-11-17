"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../../utils");

var _functional = require("../../utils/functional");

var _constant = require("../../utils/constant");

var _createNamespace = (0, _utils.createNamespace)('sku-row'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function SkuRow(h, props, slots, ctx) {
  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": [bem(), _constant.BORDER_BOTTOM]
  }, (0, _functional.inherit)(ctx)]), [h("div", {
    "class": bem('title')
  }, [props.skuRow.k]), slots.default && slots.default()]);
}

SkuRow.props = {
  skuRow: Object
};

var _default = createComponent(SkuRow);

exports.default = _default;