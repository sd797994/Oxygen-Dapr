import _extends from "@babel/runtime/helpers/esm/extends";
import { createNamespace, addUnit } from '../utils';
import { BORDER } from '../utils/constant';
import { ChildrenMixin } from '../mixins/relation';
import { route, routeProps } from '../utils/router';
import Info from '../info';
import Icon from '../icon';

var _createNamespace = createNamespace('grid-item'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

export default createComponent({
  mixins: [ChildrenMixin('vanGrid')],
  props: _extends({}, routeProps, {
    dot: Boolean,
    text: String,
    icon: String,
    info: [Number, String]
  }),
  computed: {
    style: function style() {
      var _this$parent = this.parent,
          square = _this$parent.square,
          gutter = _this$parent.gutter,
          columnNum = _this$parent.columnNum;
      var percent = 100 / columnNum + "%";
      var style = {
        flexBasis: percent
      };

      if (square) {
        style.paddingTop = percent;
      } else if (gutter) {
        var gutterValue = addUnit(gutter);
        style.paddingRight = gutterValue;

        if (this.index >= columnNum) {
          style.marginTop = gutterValue;
        }
      }

      return style;
    },
    contentStyle: function contentStyle() {
      var _this$parent2 = this.parent,
          square = _this$parent2.square,
          gutter = _this$parent2.gutter;

      if (square && gutter) {
        var gutterValue = addUnit(gutter);
        return {
          right: gutterValue,
          bottom: gutterValue,
          height: 'auto'
        };
      }
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
      route(this.$router, this);
    },
    genIcon: function genIcon() {
      var h = this.$createElement;
      var iconSlot = this.slots('icon');

      if (iconSlot) {
        return h("div", {
          "class": bem('icon-wrapper')
        }, [iconSlot, h(Info, {
          "attrs": {
            "dot": this.dot,
            "info": this.info
          }
        })]);
      }

      if (this.icon) {
        return h(Icon, {
          "attrs": {
            "name": this.icon,
            "dot": this.dot,
            "info": this.info,
            "size": this.parent.iconSize
          },
          "class": bem('icon')
        });
      }
    },
    genContent: function genContent() {
      var h = this.$createElement;
      var slot = this.slots();

      if (slot) {
        return slot;
      }

      return [this.genIcon(), this.slots('text') || this.text && h("span", {
        "class": bem('text')
      }, [this.text])];
    }
  },
  render: function render() {
    var _ref;

    var h = arguments[0];
    var _this$parent3 = this.parent,
        center = _this$parent3.center,
        border = _this$parent3.border,
        square = _this$parent3.square,
        gutter = _this$parent3.gutter,
        clickable = _this$parent3.clickable;
    return h("div", {
      "class": [bem({
        square: square
      })],
      "style": this.style
    }, [h("div", {
      "style": this.contentStyle,
      "attrs": {
        "role": clickable ? 'button' : null,
        "tabindex": clickable ? 0 : null
      },
      "class": [bem('content', {
        center: center,
        square: square,
        clickable: clickable,
        surround: border && gutter
      }), (_ref = {}, _ref[BORDER] = border, _ref)],
      "on": {
        "click": this.onClick
      }
    }, [this.genContent()])]);
  }
});