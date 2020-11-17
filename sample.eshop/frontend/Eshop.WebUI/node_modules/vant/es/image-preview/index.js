import _extends from "@babel/runtime/helpers/esm/extends";
import Vue from 'vue';
import VueImagePreview from './ImagePreview';
import { isServer } from '../utils';
var instance;
var defaultConfig = {
  loop: true,
  images: [],
  value: true,
  minZoom: 1 / 3,
  maxZoom: 3,
  className: '',
  onClose: null,
  onChange: null,
  lazyLoad: false,
  showIndex: true,
  asyncClose: false,
  startPosition: 0,
  swipeDuration: 500,
  showIndicators: false,
  closeOnPopstate: false
};

var initInstance = function initInstance() {
  instance = new (Vue.extend(VueImagePreview))({
    el: document.createElement('div')
  });
  document.body.appendChild(instance.$el);
  instance.$on('change', function (index) {
    if (instance.onChange) {
      instance.onChange(index);
    }
  });
};

var ImagePreview = function ImagePreview(images, startPosition) {
  if (startPosition === void 0) {
    startPosition = 0;
  }

  /* istanbul ignore if */
  if (isServer) {
    return;
  }

  if (!instance) {
    initInstance();
  }

  var options = Array.isArray(images) ? {
    images: images,
    startPosition: startPosition
  } : images;

  _extends(instance, defaultConfig, options);

  instance.$once('input', function (show) {
    instance.value = show;
  });

  if (options.onClose) {
    instance.$off('close');
    instance.$once('close', options.onClose);
  }

  return instance;
};

ImagePreview.install = function () {
  Vue.use(VueImagePreview);
};

export default ImagePreview;