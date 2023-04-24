"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TextInputWith_Icons = exports.TextInput = exports.RichTextInput = exports.PasswordInput = exports.NumberInput = exports.MaskedInput = exports.EmailInput = void 0;
var _react = _interopRequireDefault(require("react"));
var _addonActions = require("@storybook/addon-actions");
var _Button = _interopRequireDefault(require("../Button"));
require("react-quill/dist/quill.snow.css");
var _InputField = _interopRequireDefault(require("../InputField"));
var _RemixIcon = _interopRequireDefault(require("../molecules/RemixIcon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: "InputField",
  component: _InputField.default
};
exports.default = _default;
var handleLabelAction = function handleLabelAction(e) {
  alert("Label action fired");
};
var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_InputField.default, args);
};
var TextInput = Template.bind({});
exports.TextInput = TextInput;
TextInput.args = {
  label: "Text Input",
  id: "text-input",
  type: "text",
  name: "text-input",
  placeholder: "Enter text here"
};
var TextInputWith_Icons = Template.bind({});
exports.TextInputWith_Icons = TextInputWith_Icons;
TextInputWith_Icons.args = {
  label: "Username",
  id: "username",
  placeholder: "Enter your username",
  attachedButton: /*#__PURE__*/_react.default.createElement(_Button.default, {
    label: "Button"
  }),
  leadingItem: /*#__PURE__*/_react.default.createElement(_RemixIcon.default, {
    name: "user-fill",
    className: "text-primary-base"
  }),
  trailingItem: /*#__PURE__*/_react.default.createElement("span", {
    className: "flex whitespace-nowrap font-normal gap-4px text-success-base"
  }, "Username available", /*#__PURE__*/_react.default.createElement(_RemixIcon.default, {
    name: "check-line",
    className: "text-success-base font-bold"
  })),
  labelAction: {
    label: "Action",
    action: handleLabelAction
  },
  helpText: "This can either be your username or email"
};
var EmailInput = Template.bind({});
exports.EmailInput = EmailInput;
EmailInput.args = {
  label: "Email Input",
  id: "email-input",
  type: "email",
  name: "email-input",
  placeholder: "Enter email here",
  helpText: "Use your Google email"
};
var PasswordInput = Template.bind({});
exports.PasswordInput = PasswordInput;
PasswordInput.args = {
  label: "Password Input",
  id: "password-input",
  type: "password",
  name: "password-input",
  placeholder: "Enter password"
};
var NumberInput = Template.bind({});
exports.NumberInput = NumberInput;
NumberInput.args = {
  label: "Number Input",
  id: "number-input",
  type: "number",
  name: "masked-input",
  placeholder: "-"
};
var MaskedInput = Template.bind({});
exports.MaskedInput = MaskedInput;
MaskedInput.args = {
  label: "Masked Input",
  id: "masked-input",
  type: "text",
  mask: "999999",
  name: "masked-input",
  placeholder: "-"
};
var RichTextInput = Template.bind({});
exports.RichTextInput = RichTextInput;
RichTextInput.args = {
  label: "RichText Input",
  id: "richtext-input",
  type: "richtext",
  name: "richtext-input",
  placeholder: "Enter richtext"
};

// Add additional stories for other variations of InputField.