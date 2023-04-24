"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DefaultMenu = void 0;
var _react = _interopRequireDefault(require("react"));
var _Menu = _interopRequireDefault(require("../Menu"));
require("remixicon/fonts/remixicon.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: "Menu",
  component: _Menu.default
};
exports.default = _default;
var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Menu.default, args);
};
var sampleLinks = [{
  label: "Group 1",
  items: [{
    href: "#",
    icon: /*#__PURE__*/_react.default.createElement("i", {
      className: "ri-home-4-line"
    }),
    label: "Home"
  }, {
    href: "#",
    icon: /*#__PURE__*/_react.default.createElement("i", {
      className: "ri-settings-5-line"
    }),
    label: "Settings"
  }]
}, {
  label: "Group 2",
  items: [{
    href: "#",
    icon: /*#__PURE__*/_react.default.createElement("i", {
      className: "ri-user-3-line"
    }),
    label: "Profile"
  }, {
    href: "#",
    icon: /*#__PURE__*/_react.default.createElement("i", {
      className: "ri-logout-box-line"
    }),
    label: "Logout"
  }]
}];
var DefaultMenu = Template.bind({});
exports.DefaultMenu = DefaultMenu;
DefaultMenu.args = {
  label: "Dropdown",
  links: sampleLinks
};