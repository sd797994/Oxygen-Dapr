import _extends from "@babel/runtime/helpers/esm/extends";
import { createNamespace } from '../utils';
import Button from '../button';
import Field from '../field';
import Toast from '../toast';
import Dialog from '../dialog';
import Switch from '../switch';
import Cell from '../cell';
import { isMobile } from '../utils/validate/mobile';

var _createNamespace = createNamespace('contact-edit'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

var defaultContact = {
  tel: '',
  name: ''
};
export default createComponent({
  props: {
    isEdit: Boolean,
    isSaving: Boolean,
    isDeleting: Boolean,
    showSetDefault: Boolean,
    setDefaultLabel: String,
    contactInfo: {
      type: Object,
      default: function _default() {
        return _extends({}, defaultContact);
      }
    },
    telValidator: {
      type: Function,
      default: isMobile
    }
  },
  data: function data() {
    return {
      data: _extends({}, defaultContact, {}, this.contactInfo),
      errorInfo: {
        name: false,
        tel: false
      }
    };
  },
  watch: {
    contactInfo: function contactInfo(val) {
      this.data = _extends({}, defaultContact, {}, val);
    }
  },
  methods: {
    onFocus: function onFocus(key) {
      this.errorInfo[key] = false;
    },
    getErrorMessageByKey: function getErrorMessageByKey(key) {
      var value = this.data[key].trim();

      switch (key) {
        case 'name':
          return value ? '' : t('nameEmpty');

        case 'tel':
          return this.telValidator(value) ? '' : t('telInvalid');
      }
    },
    onSave: function onSave() {
      var _this = this;

      var isValid = ['name', 'tel'].every(function (item) {
        var msg = _this.getErrorMessageByKey(item);

        if (msg) {
          _this.errorInfo[item] = true;
          Toast(msg);
        }

        return !msg;
      });

      if (isValid && !this.isSaving) {
        this.$emit('save', this.data);
      }
    },
    onDelete: function onDelete() {
      var _this2 = this;

      Dialog.confirm({
        message: t('confirmDelete')
      }).then(function () {
        _this2.$emit('delete', _this2.data);
      });
    }
  },
  render: function render() {
    var _this3 = this;

    var h = arguments[0];
    var data = this.data,
        errorInfo = this.errorInfo;

    var onFocus = function onFocus(name) {
      return function () {
        return _this3.onFocus(name);
      };
    };

    return h("div", {
      "class": bem()
    }, [h("div", {
      "class": bem('fields')
    }, [h(Field, {
      "attrs": {
        "clearable": true,
        "maxlength": "30",
        "label": t('name'),
        "placeholder": t('nameEmpty'),
        "error": errorInfo.name
      },
      "on": {
        "focus": onFocus('name')
      },
      "model": {
        value: data.name,
        callback: function callback($$v) {
          _this3.$set(data, "name", $$v);
        }
      }
    }), h(Field, {
      "attrs": {
        "clearable": true,
        "type": "tel",
        "label": t('tel'),
        "placeholder": t('telEmpty'),
        "error": errorInfo.tel
      },
      "on": {
        "focus": onFocus('tel')
      },
      "model": {
        value: data.tel,
        callback: function callback($$v) {
          _this3.$set(data, "tel", $$v);
        }
      }
    })]), this.showSetDefault && h(Cell, {
      "attrs": {
        "title": this.setDefaultLabel,
        "border": false
      },
      "class": bem('switch-cell')
    }, [h(Switch, {
      "attrs": {
        "size": 24
      },
      "on": {
        "change": function change(event) {
          _this3.$emit('change-default', event);
        }
      },
      "model": {
        value: data.isDefault,
        callback: function callback($$v) {
          _this3.$set(data, "isDefault", $$v);
        }
      }
    })]), h("div", {
      "class": bem('buttons')
    }, [h(Button, {
      "attrs": {
        "block": true,
        "round": true,
        "type": "danger",
        "text": t('save'),
        "loading": this.isSaving
      },
      "on": {
        "click": this.onSave
      }
    }), this.isEdit && h(Button, {
      "attrs": {
        "block": true,
        "round": true,
        "text": t('delete'),
        "loading": this.isDeleting
      },
      "on": {
        "click": this.onDelete
      }
    })])]);
  }
});