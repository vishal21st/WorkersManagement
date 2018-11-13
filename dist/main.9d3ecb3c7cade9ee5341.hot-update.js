webpackHotUpdate("main",{

/***/ "./src/components/containers/Login.jsx":
/*!*********************************************!*\
  !*** ./src/components/containers/Login.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _adminActions = __webpack_require__(/*! ../../actions/adminActions */ "./src/actions/adminActions.js");

var _adminActions2 = _interopRequireDefault(_adminActions);

var _InputField = __webpack_require__(/*! ../presentators/form_components/InputField */ "./src/components/presentators/form_components/InputField.jsx");

var _InputField2 = _interopRequireDefault(_InputField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.state = { emailError: null, email: "", password: "", loginError: null };
    return _this;
  }

  _createClass(Login, [{
    key: 'validate',
    value: function validate() {
      var _state = this.state,
          email = _state.email,
          password = _state.password;

      var emailError = null;
      var passError = null;
      var isEmailValid = this.validateEmail(email);

      if (!isEmailValid || password == "") {
        emailError = isEmailValid ? null : "Please provide valid email address";
        passError = password == "" ? "Please provide valid password" : null;
        this.setState({ emailError: emailError, passError: passError });
        return false;
      } else {
        this.setState({ emailError: null, passError: null });
        return true;
      }
    }
  }, {
    key: 'validateEmail',
    value: function validateEmail(email) {
      var ex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      return ex.test(email.toLowerCase());
    }
  }, {
    key: 'validateAndLogin',
    value: function validateAndLogin(e) {
      var _this2 = this;

      e.preventDefault();
      var _state2 = this.state,
          email = _state2.email,
          password = _state2.password;

      if (this.validate()) {
        this.props.login({ email: email, password: password }).then(function (response) {
          debugger;
        }).catch(function (err) {
          _this2.setState({ loginError: err.error });
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'login col-md-12' },
          _react2.default.createElement(
            'div',
            { className: 'row vertical-align' },
            _react2.default.createElement(
              'form',
              { id: 'Login', className: 'login-form col-md-4 offset-md-4' },
              _react2.default.createElement(
                'h2',
                { className: 'company-logo' },
                'WakeCap'
              ),
              _react2.default.createElement(_InputField2.default, { error: this.state.emailError,
                inputType: 'email',
                name: 'email',
                placeholder: 'Email',
                inputRef: 'email',
                onChange: function onChange(e) {
                  _this3.setState({ email: e.target.value });
                } }),
              _react2.default.createElement(_InputField2.default, { error: this.state.passError,
                inputType: 'password',
                placeholder: 'Password',
                inputRef: 'password',
                name: 'password',
                onChange: function onChange(e) {
                  _this3.setState({ password: e.target.value });
                } }),
              _react2.default.createElement(
                'button',
                { type: 'submit',
                  className: 'btn btn-primary btn-block',
                  onClick: this.validateAndLogin.bind(this) },
                'Login'
              )
            )
          )
        )
      );
    }
  }]);

  return Login;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, props) {
  return state;
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _adminActions2.default)(dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Login);

/***/ })

})
//# sourceMappingURL=main.9d3ecb3c7cade9ee5341.hot-update.js.map