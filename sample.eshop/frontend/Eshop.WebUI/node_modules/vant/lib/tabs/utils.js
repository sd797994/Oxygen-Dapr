"use strict";

exports.__esModule = true;
exports.scrollLeftTo = scrollLeftTo;
exports.scrollTopTo = scrollTopTo;

var _raf = require("../utils/dom/raf");

var _scroll = require("../utils/dom/scroll");

var scrollLeftRafId;

function scrollLeftTo(el, to, duration) {
  (0, _raf.cancelRaf)(scrollLeftRafId);
  var count = 0;
  var from = el.scrollLeft;
  var frames = duration === 0 ? 1 : Math.round(duration * 1000 / 16);

  function animate() {
    el.scrollLeft += (to - from) / frames;

    if (++count < frames) {
      scrollLeftRafId = (0, _raf.raf)(animate);
    }
  }

  animate();
}

function scrollTopTo(to, duration, cb) {
  var current = (0, _scroll.getRootScrollTop)();
  var isDown = current < to;
  var frames = duration === 0 ? 1 : Math.round(duration * 1000 / 16);
  var step = (to - current) / frames;

  function animate() {
    current += step;

    if (isDown && current > to || !isDown && current < to) {
      current = to;
    }

    (0, _scroll.setRootScrollTop)(current);

    if (isDown && current < to || !isDown && current > to) {
      (0, _raf.raf)(animate);
    } else {
      cb && cb();
    }
  }

  animate();
}