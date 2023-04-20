"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react2 = require("@headlessui/react");
var _classnames = _interopRequireDefault(require("classnames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Combobox = function Combobox(_ref) {
  var label = _ref.label,
    id = _ref.id,
    labelAction = _ref.labelAction,
    options = _ref.options,
    optional = _ref.optional,
    helpText = _ref.helpText,
    placeholder = _ref.placeholder,
    error = _ref.error,
    disabled = _ref.disabled,
    onChange = _ref.onChange;
  var _useState = (0, _react.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    selectedOption = _useState2[0],
    setSelectedOption = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isFocused = _useState4[0],
    setIsFocused = _useState4[1];
  var _useState5 = (0, _react.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    searchValue = _useState6[0],
    setSearchValue = _useState6[1];
  (0, _react.useEffect)(function () {
    onChange(selectedOption);
  }, [selectedOption, onChange]);
  var handleFocus = function handleFocus() {
    setIsFocused(true);
  };
  var handleBlur = function handleBlur() {
    setIsFocused(false);
  };
  var handleSelectOption = function handleSelectOption(value) {
    setSelectedOption(value);
    setSearchValue(options.find(function (option) {
      return option.value === value;
    }).label);
  };
  return /*#__PURE__*/_react.default.createElement(_react2.Combobox, {
    value: selectedOption,
    onChange: handleSelectOption,
    className: "relative w-full text-left inline-flex flex-col gap-8px",
    as: "div"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "label-container text-body flex flex-row justify-between items-center"
  }, /*#__PURE__*/_react.default.createElement(_react2.Combobox.Label, {
    htmlFor: "".concat(id),
    className: "label-text"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "font-medium capitalize text-black"
  }, label), optional && /*#__PURE__*/_react.default.createElement("span", {
    className: "label-optional italic text-gray-800"
  }, " ", "- optional")), labelAction && /*#__PURE__*/_react.default.createElement("button", {
    className: "hover:underline underline-offset-2 text-info-base hover:text-info-hover",
    onClick: labelAction.action,
    type: "button"
  }, labelAction.label)), /*#__PURE__*/_react.default.createElement("div", {
    className: "relative w-full"
  }, /*#__PURE__*/_react.default.createElement(_react2.Combobox.Input, {
    id: id,
    className: "p-12px w-full flex flex-row justify-between gap-4px overflow-clip text-body rounded-4px outline-none border transition-all ease-in ring ".concat(isFocused ? error ? "ring-danger-base/40" : "ring-focusRing/40" : "ring-focusRing/0 ", " ").concat(error ? "border-danger-base bg-danger-muted text-danger-base placeholder-danger-base/30" : "border-outline-default  placeholder-copy-placeholder", " ").concat(disabled ? "bg-fill-disabled text-copy-disabled cursor-not-allowed" : "bg-primitive-white text-black ", " "),
    onFocus: handleFocus,
    onBlur: handleBlur,
    value: searchValue,
    onChange: function onChange(e) {
      return setSearchValue(e.target.value);
    },
    placeholder: placeholder
  }), /*#__PURE__*/_react.default.createElement(_react2.Combobox.Button, {
    className: "absolute top-[0px] right-[16px] bottom-[0px] flex items-center justify-center px-2 cursor-pointer"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "ri-arrow-down-s-line font-bold text-[16px]"
  }))), /*#__PURE__*/_react.default.createElement(_react2.Transition, {
    enter: "transition duration-100 ease-in",
    enterFrom: "transform opacity-0",
    enterTo: "transform opacity-100",
    leave: "transition duration-75 ease-in",
    leaveFrom: "transform opacity-100",
    leaveTo: "transform opacity-0",
    className: "absolute w-full z-10"
  }, /*#__PURE__*/_react.default.createElement(_react2.Combobox.Options, {
    className: "absolute top-[75px] transition-all z-10 p-8px max-h-[200px] overflow-y-auto scroll-smooth flex flex-col gap-4px bg-white rounded-4px border border-outline-default w-full focus:outline-none"
  }, options.filter(function (option) {
    return option.label.toLowerCase().includes(searchValue.toLowerCase());
  }).map(function (option) {
    return /*#__PURE__*/_react.default.createElement(_react2.Combobox.Option, {
      key: option.id,
      value: option.value,
      disabled: option === null || option === void 0 ? void 0 : option.disabled //you can add a disabled key-value pair
      ,
      className: function className(_ref2) {
        var active = _ref2.active,
          selected = _ref2.selected;
        return (0, _classnames.default)("cursor-pointer px-8px py-8px rounded-4px text-body relative", {
          "font-semibold text-black": selectedOption === option.value,
          "text-copy-disabled": option === null || option === void 0 ? void 0 : option.disabled,
          "bg-info-muted": active,
          "bg-primary-muted": selected
        });
      }
    }, option.label, selectedOption === option.value && /*#__PURE__*/_react.default.createElement("div", {
      className: "active-indicator absolute -left-[8px] bottom-[0px] h-full bg-primary-base w-[4px] rounded-e-4px"
    }));
  }))), (helpText || error) && /*#__PURE__*/_react.default.createElement("p", {
    className: "flex flex-row gap-4px text-body ".concat(error ? "text-danger-base" : "text-gray-800")
  }, error && /*#__PURE__*/_react.default.createElement("i", {
    className: "ri-alert-fill"
  }), error ? error : helpText));
};
Combobox.propTypes = {
  label: _propTypes.default.string.isRequired,
  id: _propTypes.default.string.isRequired,
  options: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.string.isRequired,
    label: _propTypes.default.string.isRequired,
    value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired
  })).isRequired,
  onChange: _propTypes.default.func.isRequired
};
var _default = Combobox;
exports.default = _default;