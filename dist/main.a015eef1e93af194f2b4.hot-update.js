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

// import listingSelector from '../../selectors/listingSelector';

// import List from '../core/List';
// import withLoader from '../core/withLoader';

// import Bucket from '../presenters/Bucket';

var Login = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.state = { emailError: null };
    return _this;
  }

  _createClass(Login, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      // if (this.props.fetching === undefined) {
      //   this.props.fetchListing();
      // }
    }
  }, {
    key: 'validate',
    value: function validate() {
      var email = this.refs.email.value;
      var password = this.refs.password.value;

      if (email == "" || password == "") {
        this.setState({ emailError: "Please provide valid email address" });
        return false;
      }

      if (this.validateEmail(email)) {
        this.setState({ emailError: null });
        return true;
      } else {
        this.setState({ emailError: "Please provide valid email address" });
      }
    }
  }, {
    key: 'validateEmail',
    value: function validateEmail(email) {
      var ex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      return re.test(email.toLowerCase());
    }
  }, {
    key: 'validateAndLogin',
    value: function validateAndLogin(e) {
      e.preventDefault();
      if (this.validate()) {
        this.props.login();
      }
    }
  }, {
    key: 'emailError',
    value: function emailError() {
      if (this.state.emailError) {
        return _react2.default.createElement(
          'p',
          { className: 'error' },
          this.state.emailError
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
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
              _react2.default.createElement(
                'p',
                { className: 'login-message' },
                'Please enter your email and password'
              ),
              _react2.default.createElement(_InputField2.default, null),
              _react2.default.createElement(
                'div',
                { className: 'form-group' },
                _react2.default.createElement('input', { ref: 'email', type: 'email', className: 'form-control', id: 'inputEmail', placeholder: 'Email Address' }),
                this.emailError()
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-group' },
                _react2.default.createElement('input', { ref: 'password', type: 'password', className: 'form-control', id: 'inputPassword', placeholder: 'Password' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'forgot' },
                _react2.default.createElement(
                  'a',
                  { href: 'reset.html' },
                  'Forgot password?'
                )
              ),
              _react2.default.createElement(
                'button',
                { type: 'submit', className: 'btn btn-primary btn-block', onClick: this.validateAndLogin.bind(this) },
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
//# sourceMappingURL=main.a015eef1e93af194f2b4.hot-update.js.map