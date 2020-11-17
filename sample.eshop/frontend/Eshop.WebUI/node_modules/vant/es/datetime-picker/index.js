import _extends from "@babel/runtime/helpers/esm/extends";
import { createNamespace } from '../utils';
import TimePicker from './TimePicker';
import DatePicker from './DatePicker';

var _createNamespace = createNamespace('datetime-picker'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

export default createComponent({
  props: _extends({}, TimePicker.props, {}, DatePicker.props),
  render: function render() {
    var h = arguments[0];
    var Component = this.type === 'time' ? TimePicker : DatePicker;
    return h(Component, {
      "class": bem(),
      "props": _extends({}, this.$props),
      "on": _extends({}, this.$listeners)
    });
  }
});