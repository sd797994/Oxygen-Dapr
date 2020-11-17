"use strict";

exports.__esModule = true;
exports.pickerProps = void 0;
var pickerProps = {
  title: String,
  loading: Boolean,
  showToolbar: Boolean,
  cancelButtonText: String,
  confirmButtonText: String,
  allowHtml: {
    type: Boolean,
    default: true
  },
  visibleItemCount: {
    type: Number,
    default: 5
  },
  itemHeight: {
    type: Number,
    default: 44
  },
  swipeDuration: {
    type: Number,
    default: 1000
  }
};
exports.pickerProps = pickerProps;