webpackHotUpdate("main",{

/***/ "./src/actions/adminActions.js":
/*!*************************************!*\
  !*** ./src/actions/adminActions.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = __webpack_require__(/*! ../consts/actionTypes */ "./src/consts/actionTypes.js");

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _data = __webpack_require__(/*! ./data */ "./src/actions/data.js");

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var adminActions = function adminActions(dispatch) {
  return {
    login: function login(payload) {
      dispatch({ type: _actionTypes2.default.admin.LOGGING });
      dispatch({ type: _actionTypes2.default.admin.LOGIN_SUCCESS, payload: {} });
    }
  };
};

exports.default = adminActions;

/***/ }),

/***/ "./src/actions/data.js":
/*!*****************************!*\
  !*** ./src/actions/data.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var data = {
  admins: [{
    id: 1,
    name: "Vishal Singhal",
    email: "vishal@wakecap.com",
    password: "password"
  }, {
    id: 2,
    name: "Hassan",
    email: "hassan@wakecap.com",
    password: "password"
  }],

  workers: [{
    manager_id: 1,
    id: "w_1",
    name: "Worker 1",
    designation: "Foreman"
  }, {
    manager_id: 1,
    id: "w_2",
    name: "Worker 2",
    designation: "abc"
  }, {
    manager_id: 1,
    id: "w_3",
    name: "Worker 3",
    designation: "designation"
  }, {
    manager_id: 1,
    id: "w_4",
    name: "Worker 4",
    designation: "designation"
  }]
};

exports.default = data;

/***/ }),

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

  function Login() {
    _classCallCheck(this, Login);

    return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
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
        return "<div>Please provide a valid email address</div>";
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
//# sourceMappingURL=main.9153399181f86c5538dc.hot-update.js.map