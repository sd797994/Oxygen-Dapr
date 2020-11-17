import { raf, cancelRaf } from '../utils/dom/raf';
import { getRootScrollTop, setRootScrollTop } from '../utils/dom/scroll';
var scrollLeftRafId;
export function scrollLeftTo(el, to, duration) {
  cancelRaf(scrollLeftRafId);
  var count = 0;
  var from = el.scrollLeft;
  var frames = duration === 0 ? 1 : Math.round(duration * 1000 / 16);

  function animate() {
    el.scrollLeft += (to - from) / frames;

    if (++count < frames) {
      scrollLeftRafId = raf(animate);
    }
  }

  animate();
}
export function scrollTopTo(to, duration, cb) {
  var current = getRootScrollTop();
  var isDown = current < to;
  var frames = duration === 0 ? 1 : Math.round(duration * 1000 / 16);
  var step = (to - current) / frames;

  function animate() {
    current += step;

    if (isDown && current > to || !isDown && current < to) {
      current = to;
    }

    setRootScrollTop(current);

    if (isDown && current < to || !isDown && current > to) {
      raf(animate);
    } else {
      cb && cb();
    }
  }

  animate();
}