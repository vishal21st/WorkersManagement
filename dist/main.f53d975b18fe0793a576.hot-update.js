webpackHotUpdate("main",{

/***/ "./src/components/presentators/form_components/InputField.jsx":
/*!********************************************************************!*\
  !*** ./src/components/presentators/form_components/InputField.jsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputField = function (_React$Component) {
  _inherits(InputField, _React$Component);

  function InputField(props) {
    _classCallCheck(this, InputField);

    return _possibleConstructorReturn(this, (InputField.__proto__ || Object.getPrototypeOf(InputField)).call(this, props));
  }

  _createClass(InputField, [{
    key: "render",
    value: function render() {
      var _React$createElement;

      var _props = this.props,
          value = _props.value,
          error = _props.error,
          inputType = _props.inputType,
          placeholder = _props.placeholder,
          inputRef = _props.inputRef,
          onChange = _props.onChange;

      return _react2.default.createElement(
        "div",
        { className: "form-group" },
        _react2.default.createElement("input", (_React$createElement = { ref: "email",
          type: inputType,
          className: "form-control " + (error ? 'has-error' : ''),
          id: "inputEmail",
          placeholder: placeholder
        }, _defineProperty(_React$createElement, "ref", inputRef), _defineProperty(_React$createElement, "onChange", onChange), _React$createElement)),
        _react2.default.createElement(
          "p",
          { className: "error" },
          error
        )
      );
    }
  }]);

  return InputField;
}(_react2.default.Component);

exports.default = InputField;

/***/ })

})
//# sourceMappingURL=main.f53d975b18fe0793a576.hot-update.js.map