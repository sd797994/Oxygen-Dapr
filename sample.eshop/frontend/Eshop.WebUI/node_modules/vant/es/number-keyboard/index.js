import { createNamespace } from '../utils';
import { stopPropagation } from '../utils/dom/event';
import { BORDER_TOP } from '../utils/constant';
import { BindEventMixin } from '../mixins/bind-event';
import Key from './Key';

var _createNamespace = createNamespace('number-keyboard'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

var CLOSE_KEY_THEME = ['blue', 'big'];
var DELETE_KEY_THEME = ['delete', 'big', 'gray'];
export default createComponent({
  mixins: [BindEventMixin(function (bind) {
    if (this.hideOnClickOutside) {
      bind(document.body, 'touchstart', this.onBlur);
    }
  })],
  model: {
    event: 'update:value'
  },
  props: {
    show: Boolean,
    title: String,
    closeButtonText: String,
    deleteButtonText: String,
    theme: {
      type: String,
      default: 'default'
    },
    value: {
      type: String,
      default: ''
    },
    extraKey: {
      type: String,
      default: ''
    },
    maxlength: {
      type: [Number, String],
      default: Number.MAX_VALUE
    },
    zIndex: {
      type: Number,
      default: 100
    },
    transition: {
      type: Boolean,
      default: true
    },
    showDeleteKey: {
      type: Boolean,
      default: true
    },
    hideOnClickOutside: {
      type: Boolean,
      default: true
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    show: function show() {
      if (!this.transition) {
        this.$emit(this.show ? 'show' : 'hide');
      }
    }
  },
  computed: {
    keys: function keys() {
      var keys = [];

      for (var i = 1; i <= 9; i++) {
        keys.push({
          text: i
        });
      }

      switch (this.theme) {
        case 'default':
          keys.push({
            text: this.extraKey,
            theme: ['gray'],
            type: 'extra'
          }, {
            text: 0
          }, {
            text: this.deleteText,
            theme: ['gray'],
            type: 'delete'
          });
          break;

        case 'custom':
          keys.push({
            text: 0,
            theme: ['middle']
          }, {
            text: this.extraKey,
            type: 'extra'
          });
          break;
      }

      return keys;
    },
    deleteText: function deleteText() {
      return this.deleteButtonText || t('delete');
    }
  },
  methods: {
    onBlur: function onBlur() {
      this.show && this.$emit('blur');
    },
    onClose: function onClose() {
      this.$emit('close');
      this.onBlur();
    },
    onAnimationEnd: function onAnimationEnd() {
      this.$emit(this.show ? 'show' : 'hide');
    },
    onPress: function onPress(text, type) {
      if (text === '') {
        return;
      }

      var value = this.value;

      if (type === 'delete') {
        this.$emit('delete');
        this.$emit('update:value', value.slice(0, value.length - 1));
      } else if (type === 'close') {
        this.onClose();
      } else if (value.length < this.maxlength) {
        this.$emit('input', text);
        this.$emit('update:value', value + text);
      }
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    var title = this.title,
        theme = this.theme,
        onPress = this.onPress,
        closeButtonText = this.closeButtonText;
    var titleLeftSlot = this.slots('title-left');
    var showTitleClose = closeButtonText && theme === 'default';
    var showTitle = title || showTitleClose || titleLeftSlot;
    var Title = showTitle && h("div", {
      "class": [bem('title'), BORDER_TOP]
    }, [titleLeftSlot && h("span", {
      "class": bem('title-left')
    }, [titleLeftSlot]), title && h("span", [title]), showTitleClose && h("span", {
      "attrs": {
        "role": "button",
        "tabindex": "0"
      },
      "class": bem('close'),
      "on": {
        "click": this.onClose
      }
    }, [closeButtonText])]);
    var Keys = this.keys.map(function (key) {
      return h(Key, {
        "key": key.text,
        "attrs": {
          "text": key.text,
          "type": key.type,
          "theme": key.theme
        },
        "on": {
          "press": onPress
        }
      }, [key.type === 'delete' && _this.slots('delete'), key.type === 'extra' && _this.slots('extra-key')]);
    });
    var Sidebar = theme === 'custom' && h("div", {
      "class": bem('sidebar')
    }, [h(Key, {
      "attrs": {
        "text": this.deleteText,
        "type": "delete",
        "theme": DELETE_KEY_THEME
      },
      "on": {
        "press": onPress
      }
    }, [this.slots('delete')]), h(Key, {
      "attrs": {
        "text": closeButtonText,
        "type": "close",
        "theme": CLOSE_KEY_THEME
      },
      "on": {
        "press": onPress
      }
    })]);
    return h("transition", {
      "attrs": {
        "name": this.transition ? 'van-slide-up' : ''
      }
    }, [h("div", {
      "directives": [{
        name: "show",
        value: this.show
      }],
      "style": {
        zIndex: this.zIndex
      },
      "class": bem([theme, {
        'safe-area-inset-bottom': this.safeAreaInsetBottom
      }]),
      "on": {
        "touchstart": stopPropagation,
        "animationend": this.onAnimationEnd,
        "webkitAnimationEnd": this.onAnimationEnd
      }
    }, [Title, h("div", {
      "class": bem('body')
    }, [Keys, Sidebar])])]);
  }
});