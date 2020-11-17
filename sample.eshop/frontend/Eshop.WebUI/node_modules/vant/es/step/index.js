import { createNamespace } from '../utils';
import { BORDER } from '../utils/constant';
import { ChildrenMixin } from '../mixins/relation';
import Icon from '../icon';

var _createNamespace = createNamespace('step'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

export default createComponent({
  mixins: [ChildrenMixin('vanSteps')],
  computed: {
    status: function status() {
      if (this.index < this.parent.active) {
        return 'finish';
      }

      if (this.index === this.parent.active) {
        return 'process';
      }
    }
  },
  methods: {
    genCircle: function genCircle() {
      var h = this.$createElement;
      var _this$parent = this.parent,
          activeIcon = _this$parent.activeIcon,
          activeColor = _this$parent.activeColor,
          inactiveIcon = _this$parent.inactiveIcon;

      if (this.status === 'process') {
        return this.slots('active-icon') || h(Icon, {
          "class": bem('icon'),
          "attrs": {
            "name": activeIcon,
            "color": activeColor
          }
        });
      }

      var inactiveIconSlot = this.slots('inactive-icon');

      if (inactiveIcon || inactiveIconSlot) {
        return inactiveIconSlot || h(Icon, {
          "class": bem('icon'),
          "attrs": {
            "name": inactiveIcon
          }
        });
      }

      return h("i", {
        "class": bem('circle')
      });
    }
  },
  render: function render() {
    var _ref;

    var h = arguments[0];
    var status = this.status;
    var _this$parent2 = this.parent,
        activeColor = _this$parent2.activeColor,
        direction = _this$parent2.direction;
    var titleStyle = status === 'process' && {
      color: activeColor
    };
    return h("div", {
      "class": [BORDER, bem([direction, (_ref = {}, _ref[status] = status, _ref)])]
    }, [h("div", {
      "class": bem('title'),
      "style": titleStyle
    }, [this.slots()]), h("div", {
      "class": bem('circle-container')
    }, [this.genCircle()]), h("div", {
      "class": bem('line')
    })]);
  }
});