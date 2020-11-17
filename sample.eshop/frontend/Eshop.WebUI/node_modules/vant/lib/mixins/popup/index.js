"use strict";

exports.__esModule = true;
exports.PopupMixin = PopupMixin;
exports.popupMixinProps = void 0;

var _context = require("./context");

var _touch = require("../touch");

var _portal = require("../portal");

var _closeOnPopstate = require("../close-on-popstate");

var _event = require("../../utils/dom/event");

var _overlay = require("./overlay");

var _scroll = require("../../utils/dom/scroll");

var popupMixinProps = {
  // whether to show popup
  value: Boolean,
  // whether to show overlay
  overlay: Boolean,
  // overlay custom style
  overlayStyle: Object,
  // overlay custom class name
  overlayClass: String,
  // whether to close popup when click overlay
  closeOnClickOverlay: Boolean,
  // z-index
  zIndex: [Number, String],
  // prevent body scroll
  lockScroll: {
    type: Boolean,
    default: true
  },
  // whether to lazy render
  lazyRender: {
    type: Boolean,
    default: true
  }
};
exports.popupMixinProps = popupMixinProps;

function PopupMixin(options) {
  if (options === void 0) {
    options = {};
  }

  return {
    mixins: [_touch.TouchMixin, _closeOnPopstate.CloseOnPopstateMixin, (0, _portal.PortalMixin)({
      afterPortal: function afterPortal() {
        if (this.overlay) {
          (0, _overlay.updateOverlay)();
        }
      }
    })],
    props: popupMixinProps,
    data: function data() {
      return {
        inited: this.value
      };
    },
    computed: {
      shouldRender: function shouldRender() {
        return this.inited || !this.lazyRender;
      }
    },
    watch: {
      value: function value(val) {
        var type = val ? 'open' : 'close';
        this.inited = this.inited || this.value;
        this[type]();

        if (!options.skipToggleEvent) {
          this.$emit(type);
        }
      },
      overlay: 'renderOverlay'
    },
    mounted: function mounted() {
      if (this.value) {
        this.open();
      }
    },

    /* istanbul ignore next */
    activated: function activated() {
      if (this.shouldReopen) {
        this.$emit('input', true);
        this.shouldReopen = false;
      }
    },
    beforeDestroy: function beforeDestroy() {
      this.close();

      if (this.getContainer && this.$parent && this.$parent.$el) {
        this.$parent.$el.appendChild(this.$el);
      }
    },

    /* istanbul ignore next */
    deactivated: function deactivated() {
      if (this.value) {
        this.close();
        this.shouldReopen = true;
      }
    },
    methods: {
      open: function open() {
        /* istanbul ignore next */
        if (this.$isServer || this.opened) {
          return;
        } // cover default zIndex


        if (this.zIndex !== undefined) {
          _context.context.zIndex = this.zIndex;
        }

        this.opened = true;
        this.renderOverlay();

        if (this.lockScroll) {
          (0, _event.on)(document, 'touchstart', this.touchStart);
          (0, _event.on)(document, 'touchmove', this.onTouchMove);

          if (!_context.context.lockCount) {
            document.body.classList.add('van-overflow-hidden');
          }

          _context.context.lockCount++;
        }
      },
      close: function close() {
        if (!this.opened) {
          return;
        }

        if (this.lockScroll) {
          _context.context.lockCount--;
          (0, _event.off)(document, 'touchstart', this.touchStart);
          (0, _event.off)(document, 'touchmove', this.onTouchMove);

          if (!_context.context.lockCount) {
            document.body.classList.remove('van-overflow-hidden');
          }
        }

        this.opened = false;
        (0, _overlay.closeOverlay)(this);
        this.$emit('input', false);
      },
      onTouchMove: function onTouchMove(event) {
        this.touchMove(event);
        var direction = this.deltaY > 0 ? '10' : '01';
        var el = (0, _scroll.getScrollEventTarget)(event.target, this.$el);
        var scrollHeight = el.scrollHeight,
            offsetHeight = el.offsetHeight,
            scrollTop = el.scrollTop;
        var status = '11';
        /* istanbul ignore next */

        if (scrollTop === 0) {
          status = offsetHeight >= scrollHeight ? '00' : '01';
        } else if (scrollTop + offsetHeight >= scrollHeight) {
          status = '10';
        }
        /* istanbul ignore next */


        if (status !== '11' && this.direction === 'vertical' && !(parseInt(status, 2) & parseInt(direction, 2))) {
          (0, _event.preventDefault)(event, true);
        }
      },
      renderOverlay: function renderOverlay() {
        var _this = this;

        if (this.$isServer || !this.value) {
          return;
        }

        this.$nextTick(function () {
          _this.updateZIndex(_this.overlay ? 1 : 0);

          if (_this.overlay) {
            (0, _overlay.openOverlay)(_this, {
              zIndex: _context.context.zIndex++,
              duration: _this.duration,
              className: _this.overlayClass,
              customStyle: _this.overlayStyle
            });
          } else {
            (0, _overlay.closeOverlay)(_this);
          }
        });
      },
      updateZIndex: function updateZIndex(value) {
        if (value === void 0) {
          value = 0;
        }

        this.$el.style.zIndex = ++_context.context.zIndex + value;
      }
    }
  };
}