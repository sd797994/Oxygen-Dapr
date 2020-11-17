"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _babelHelperVueJsxMergeProps = _interopRequireDefault(require("@vue/babel-helper-vue-jsx-merge-props"));

var _utils = require("../../utils");

var _functional = require("../../utils/functional");

var _constant = require("../../utils/constant");

var _createNamespace = (0, _utils.createNamespace)('sku-header'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function getSkuImg(sku, selectedSku) {
  var img;
  sku.tree.some(function (item) {
    var id = selectedSku[item.k_s];

    if (id && item.v) {
      var matchedSku = item.v.filter(function (skuValue) {
        return skuValue.id === id;
      })[0] || {};
      img = matchedSku.previewImgUrl || matchedSku.imgUrl || matchedSku.img_url;
      return img;
    }

    return false;
  });
  return img;
}

function SkuHeader(h, props, slots, ctx) {
  var sku = props.sku,
      goods = props.goods,
      skuEventBus = props.skuEventBus,
      selectedSku = props.selectedSku;
  var goodsImg = getSkuImg(sku, selectedSku) || goods.picture;

  var previewImage = function previewImage() {
    skuEventBus.$emit('sku:previewImage', goodsImg);
  };

  return h("div", (0, _babelHelperVueJsxMergeProps.default)([{
    "class": [bem(), _constant.BORDER_BOTTOM]
  }, (0, _functional.inherit)(ctx)]), [h("div", {
    "class": bem('img-wrap'),
    "on": {
      "click": previewImage
    }
  }, [h("img", {
    "attrs": {
      "src": goodsImg
    }
  })]), h("div", {
    "class": bem('goods-info')
  }, [slots.default && slots.default()])]);
}

SkuHeader.props = {
  sku: Object,
  goods: Object,
  skuEventBus: Object,
  selectedSku: Object
};

var _default = createComponent(SkuHeader);

exports.default = _default;