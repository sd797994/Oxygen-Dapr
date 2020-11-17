import { createNamespace } from '../../utils';
import Icon from '../../icon';
import Loading from '../../loading';
import Uploader from '../../uploader';

var _createNamespace = createNamespace('sku-img-uploader'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

export default createComponent({
  props: {
    value: String,
    uploadImg: Function,
    maxSize: {
      type: Number,
      default: 6
    }
  },
  data: function data() {
    return {
      // 正在上传的图片 base64
      paddingImg: '',
      uploadFail: false
    };
  },
  methods: {
    afterReadFile: function afterReadFile(file) {
      var _this = this;

      // 上传文件
      this.paddingImg = file.content;
      this.uploadFail = false;
      this.uploadImg(file.file, file.content).then(function (img) {
        _this.$emit('input', img);

        _this.$nextTick(function () {
          _this.paddingImg = '';
        });
      }).catch(function () {
        _this.uploadFail = true;
      });
    },
    onOversize: function onOversize() {
      this.$toast(t('oversize', this.maxSize));
    },
    genUploader: function genUploader(content, disabled) {
      if (disabled === void 0) {
        disabled = false;
      }

      var h = this.$createElement;
      return h(Uploader, {
        "class": bem('uploader'),
        "attrs": {
          "disabled": disabled,
          "afterRead": this.afterReadFile,
          "maxSize": this.maxSize * 1024 * 1024
        },
        "on": {
          "oversize": this.onOversize
        }
      }, [h("div", {
        "class": bem('img')
      }, [content])]);
    },
    genMask: function genMask() {
      var h = this.$createElement;
      return h("div", {
        "class": bem('mask')
      }, [this.uploadFail ? [h(Icon, {
        "attrs": {
          "name": "warning-o",
          "size": "20px"
        }
      }), h("div", {
        "class": bem('warn-text'),
        "domProps": {
          "innerHTML": t('fail')
        }
      })] : h(Loading, {
        "attrs": {
          "type": "spinner",
          "size": "20px",
          "color": "white"
        }
      })]);
    }
  },
  render: function render() {
    var _this2 = this;

    var h = arguments[0];
    return h("div", {
      "class": bem()
    }, [this.value && this.genUploader([h("img", {
      "attrs": {
        "src": this.value
      }
    }), h(Icon, {
      "attrs": {
        "name": "clear"
      },
      "class": bem('delete'),
      "on": {
        "click": function click() {
          _this2.$emit('input', '');
        }
      }
    })], true), this.paddingImg && this.genUploader([h("img", {
      "attrs": {
        "src": this.paddingImg
      }
    }), this.genMask()], !this.uploadFail), !this.value && !this.paddingImg && this.genUploader(h("div", {
      "class": bem('trigger')
    }, [h(Icon, {
      "attrs": {
        "name": "photograph",
        "size": "22px"
      }
    })]))]);
  }
});