"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.install = install;
exports.default = exports.version = void 0;

var _actionSheet = _interopRequireDefault(require("./action-sheet"));

exports.ActionSheet = _actionSheet.default;

var _addressEdit = _interopRequireDefault(require("./address-edit"));

exports.AddressEdit = _addressEdit.default;

var _addressList = _interopRequireDefault(require("./address-list"));

exports.AddressList = _addressList.default;

var _area = _interopRequireDefault(require("./area"));

exports.Area = _area.default;

var _button = _interopRequireDefault(require("./button"));

exports.Button = _button.default;

var _calendar = _interopRequireDefault(require("./calendar"));

exports.Calendar = _calendar.default;

var _card = _interopRequireDefault(require("./card"));

exports.Card = _card.default;

var _cell = _interopRequireDefault(require("./cell"));

exports.Cell = _cell.default;

var _cellGroup = _interopRequireDefault(require("./cell-group"));

exports.CellGroup = _cellGroup.default;

var _checkbox = _interopRequireDefault(require("./checkbox"));

exports.Checkbox = _checkbox.default;

var _checkboxGroup = _interopRequireDefault(require("./checkbox-group"));

exports.CheckboxGroup = _checkboxGroup.default;

var _circle = _interopRequireDefault(require("./circle"));

exports.Circle = _circle.default;

var _col = _interopRequireDefault(require("./col"));

exports.Col = _col.default;

var _collapse = _interopRequireDefault(require("./collapse"));

exports.Collapse = _collapse.default;

var _collapseItem = _interopRequireDefault(require("./collapse-item"));

exports.CollapseItem = _collapseItem.default;

var _contactCard = _interopRequireDefault(require("./contact-card"));

exports.ContactCard = _contactCard.default;

var _contactEdit = _interopRequireDefault(require("./contact-edit"));

exports.ContactEdit = _contactEdit.default;

var _contactList = _interopRequireDefault(require("./contact-list"));

exports.ContactList = _contactList.default;

var _countDown = _interopRequireDefault(require("./count-down"));

exports.CountDown = _countDown.default;

var _coupon = _interopRequireDefault(require("./coupon"));

exports.Coupon = _coupon.default;

var _couponCell = _interopRequireDefault(require("./coupon-cell"));

exports.CouponCell = _couponCell.default;

var _couponList = _interopRequireDefault(require("./coupon-list"));

exports.CouponList = _couponList.default;

var _datetimePicker = _interopRequireDefault(require("./datetime-picker"));

exports.DatetimePicker = _datetimePicker.default;

var _dialog = _interopRequireDefault(require("./dialog"));

exports.Dialog = _dialog.default;

var _divider = _interopRequireDefault(require("./divider"));

exports.Divider = _divider.default;

var _dropdownItem = _interopRequireDefault(require("./dropdown-item"));

exports.DropdownItem = _dropdownItem.default;

var _dropdownMenu = _interopRequireDefault(require("./dropdown-menu"));

exports.DropdownMenu = _dropdownMenu.default;

var _field = _interopRequireDefault(require("./field"));

exports.Field = _field.default;

var _goodsAction = _interopRequireDefault(require("./goods-action"));

exports.GoodsAction = _goodsAction.default;

var _goodsActionButton = _interopRequireDefault(require("./goods-action-button"));

exports.GoodsActionButton = _goodsActionButton.default;

var _goodsActionIcon = _interopRequireDefault(require("./goods-action-icon"));

exports.GoodsActionIcon = _goodsActionIcon.default;

var _grid = _interopRequireDefault(require("./grid"));

exports.Grid = _grid.default;

var _gridItem = _interopRequireDefault(require("./grid-item"));

exports.GridItem = _gridItem.default;

var _icon = _interopRequireDefault(require("./icon"));

exports.Icon = _icon.default;

var _image = _interopRequireDefault(require("./image"));

exports.Image = _image.default;

var _imagePreview = _interopRequireDefault(require("./image-preview"));

exports.ImagePreview = _imagePreview.default;

var _indexAnchor = _interopRequireDefault(require("./index-anchor"));

exports.IndexAnchor = _indexAnchor.default;

var _indexBar = _interopRequireDefault(require("./index-bar"));

exports.IndexBar = _indexBar.default;

var _info = _interopRequireDefault(require("./info"));

exports.Info = _info.default;

var _lazyload = _interopRequireDefault(require("./lazyload"));

exports.Lazyload = _lazyload.default;

var _list = _interopRequireDefault(require("./list"));

exports.List = _list.default;

var _loading = _interopRequireDefault(require("./loading"));

exports.Loading = _loading.default;

var _locale = _interopRequireDefault(require("./locale"));

exports.Locale = _locale.default;

var _navBar = _interopRequireDefault(require("./nav-bar"));

exports.NavBar = _navBar.default;

var _noticeBar = _interopRequireDefault(require("./notice-bar"));

exports.NoticeBar = _noticeBar.default;

var _notify = _interopRequireDefault(require("./notify"));

exports.Notify = _notify.default;

var _numberKeyboard = _interopRequireDefault(require("./number-keyboard"));

exports.NumberKeyboard = _numberKeyboard.default;

var _overlay = _interopRequireDefault(require("./overlay"));

exports.Overlay = _overlay.default;

var _pagination = _interopRequireDefault(require("./pagination"));

exports.Pagination = _pagination.default;

var _panel = _interopRequireDefault(require("./panel"));

exports.Panel = _panel.default;

var _passwordInput = _interopRequireDefault(require("./password-input"));

exports.PasswordInput = _passwordInput.default;

var _picker = _interopRequireDefault(require("./picker"));

exports.Picker = _picker.default;

var _popup = _interopRequireDefault(require("./popup"));

exports.Popup = _popup.default;

var _progress = _interopRequireDefault(require("./progress"));

exports.Progress = _progress.default;

var _pullRefresh = _interopRequireDefault(require("./pull-refresh"));

exports.PullRefresh = _pullRefresh.default;

var _radio = _interopRequireDefault(require("./radio"));

exports.Radio = _radio.default;

var _radioGroup = _interopRequireDefault(require("./radio-group"));

exports.RadioGroup = _radioGroup.default;

var _rate = _interopRequireDefault(require("./rate"));

exports.Rate = _rate.default;

var _row = _interopRequireDefault(require("./row"));

exports.Row = _row.default;

var _search = _interopRequireDefault(require("./search"));

exports.Search = _search.default;

var _sidebar = _interopRequireDefault(require("./sidebar"));

exports.Sidebar = _sidebar.default;

var _sidebarItem = _interopRequireDefault(require("./sidebar-item"));

exports.SidebarItem = _sidebarItem.default;

var _skeleton = _interopRequireDefault(require("./skeleton"));

exports.Skeleton = _skeleton.default;

var _sku = _interopRequireDefault(require("./sku"));

exports.Sku = _sku.default;

var _slider = _interopRequireDefault(require("./slider"));

exports.Slider = _slider.default;

var _step = _interopRequireDefault(require("./step"));

exports.Step = _step.default;

var _stepper = _interopRequireDefault(require("./stepper"));

exports.Stepper = _stepper.default;

var _steps = _interopRequireDefault(require("./steps"));

exports.Steps = _steps.default;

var _sticky = _interopRequireDefault(require("./sticky"));

exports.Sticky = _sticky.default;

var _submitBar = _interopRequireDefault(require("./submit-bar"));

exports.SubmitBar = _submitBar.default;

var _swipe = _interopRequireDefault(require("./swipe"));

exports.Swipe = _swipe.default;

var _swipeCell = _interopRequireDefault(require("./swipe-cell"));

exports.SwipeCell = _swipeCell.default;

var _swipeItem = _interopRequireDefault(require("./swipe-item"));

exports.SwipeItem = _swipeItem.default;

var _switch = _interopRequireDefault(require("./switch"));

exports.Switch = _switch.default;

var _switchCell = _interopRequireDefault(require("./switch-cell"));

exports.SwitchCell = _switchCell.default;

var _tab = _interopRequireDefault(require("./tab"));

exports.Tab = _tab.default;

var _tabbar = _interopRequireDefault(require("./tabbar"));

exports.Tabbar = _tabbar.default;

var _tabbarItem = _interopRequireDefault(require("./tabbar-item"));

exports.TabbarItem = _tabbarItem.default;

var _tabs = _interopRequireDefault(require("./tabs"));

exports.Tabs = _tabs.default;

var _tag = _interopRequireDefault(require("./tag"));

exports.Tag = _tag.default;

var _toast = _interopRequireDefault(require("./toast"));

exports.Toast = _toast.default;

var _treeSelect = _interopRequireDefault(require("./tree-select"));

exports.TreeSelect = _treeSelect.default;

var _uploader = _interopRequireDefault(require("./uploader"));

exports.Uploader = _uploader.default;
var version = '2.4.0';
exports.version = version;

function install(Vue) {
  var components = [_actionSheet.default, _addressEdit.default, _addressList.default, _area.default, _button.default, _calendar.default, _card.default, _cell.default, _cellGroup.default, _checkbox.default, _checkboxGroup.default, _circle.default, _col.default, _collapse.default, _collapseItem.default, _contactCard.default, _contactEdit.default, _contactList.default, _countDown.default, _coupon.default, _couponCell.default, _couponList.default, _datetimePicker.default, _dialog.default, _divider.default, _dropdownItem.default, _dropdownMenu.default, _field.default, _goodsAction.default, _goodsActionButton.default, _goodsActionIcon.default, _grid.default, _gridItem.default, _icon.default, _image.default, _imagePreview.default, _indexAnchor.default, _indexBar.default, _info.default, _list.default, _loading.default, _locale.default, _navBar.default, _noticeBar.default, _notify.default, _numberKeyboard.default, _overlay.default, _pagination.default, _panel.default, _passwordInput.default, _picker.default, _popup.default, _progress.default, _pullRefresh.default, _radio.default, _radioGroup.default, _rate.default, _row.default, _search.default, _sidebar.default, _sidebarItem.default, _skeleton.default, _sku.default, _slider.default, _step.default, _stepper.default, _steps.default, _sticky.default, _submitBar.default, _swipe.default, _swipeCell.default, _swipeItem.default, _switch.default, _switchCell.default, _tab.default, _tabbar.default, _tabbarItem.default, _tabs.default, _tag.default, _toast.default, _treeSelect.default, _uploader.default];
  components.forEach(function (item) {
    if (item.install) {
      Vue.use(item);
    } else if (item.name) {
      Vue.component(item.name, item);
    }
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

var _default = {
  install: install,
  version: version
};
exports.default = _default;