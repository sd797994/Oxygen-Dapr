import { createNamespace } from '../utils';
import { raf, cancelRaf } from '../utils/dom/raf';
import { isSameSecond, parseTimeData, parseFormat } from './utils';

var _createNamespace = createNamespace('count-down'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

export default createComponent({
  props: {
    millisecond: Boolean,
    time: {
      type: Number,
      default: 0
    },
    format: {
      type: String,
      default: 'HH:mm:ss'
    },
    autoStart: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      remain: 0
    };
  },
  computed: {
    timeData: function timeData() {
      return parseTimeData(this.remain);
    },
    formattedTime: function formattedTime() {
      return parseFormat(this.format, this.timeData);
    }
  },
  watch: {
    time: {
      immediate: true,
      handler: 'reset'
    }
  },
  activated: function activated() {
    if (this.keepAlivePaused) {
      this.counting = true;
      this.keepAlivePaused = false;
      this.tick();
    }
  },
  deactivated: function deactivated() {
    if (this.counting) {
      this.pause();
      this.keepAlivePaused = true;
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.pause();
  },
  methods: {
    // @exposed-api
    start: function start() {
      if (this.counting) {
        return;
      }

      this.counting = true;
      this.endTime = Date.now() + this.remain;
      this.tick();
    },
    // @exposed-api
    pause: function pause() {
      this.counting = false;
      cancelRaf(this.rafId);
    },
    // @exposed-api
    reset: function reset() {
      this.pause();
      this.remain = this.time;

      if (this.autoStart) {
        this.start();
      }
    },
    tick: function tick() {
      if (this.millisecond) {
        this.microTick();
      } else {
        this.macroTick();
      }
    },
    microTick: function microTick() {
      var _this = this;

      this.rafId = raf(function () {
        /* istanbul ignore if */
        // in case of call reset immediately after finish
        if (!_this.counting) {
          return;
        }

        _this.setRemain(_this.getRemain());

        if (_this.remain > 0) {
          _this.microTick();
        }
      });
    },
    macroTick: function macroTick() {
      var _this2 = this;

      this.rafId = raf(function () {
        /* istanbul ignore if */
        // in case of call reset immediately after finish
        if (!_this2.counting) {
          return;
        }

        var remain = _this2.getRemain();

        if (!isSameSecond(remain, _this2.remain) || remain === 0) {
          _this2.setRemain(remain);
        }

        if (_this2.remain > 0) {
          _this2.macroTick();
        }
      });
    },
    getRemain: function getRemain() {
      return Math.max(this.endTime - Date.now(), 0);
    },
    setRemain: function setRemain(remain) {
      this.remain = remain;

      if (remain === 0) {
        this.pause();
        this.$emit('finish');
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem()
    }, [this.slots('default', this.timeData) || this.formattedTime]);
  }
});