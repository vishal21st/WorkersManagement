webpackHotUpdate("main",{

/***/ "./src/components/containers/Dashboard.jsx":
/*!*************************************************!*\
  !*** ./src/components/containers/Dashboard.jsx ***!
  \*************************************************/
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

var _Head = __webpack_require__(/*! ../Head */ "./src/components/Head.jsx");

var _Head2 = _interopRequireDefault(_Head);

var _adminActions = __webpack_require__(/*! ../../actions/adminActions */ "./src/actions/adminActions.js");

var _adminActions2 = _interopRequireDefault(_adminActions);

var _InputField = __webpack_require__(/*! ../presentators/form_components/InputField */ "./src/components/presentators/form_components/InputField.jsx");

var _InputField2 = _interopRequireDefault(_InputField);

var _SideBar = __webpack_require__(/*! ../presentators/SideBar */ "./src/components/presentators/SideBar.jsx");

var _SideBar2 = _interopRequireDefault(_SideBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dashboard = function (_React$Component) {
  _inherits(Dashboard, _React$Component);

  function Dashboard(props) {
    _classCallCheck(this, Dashboard);

    var _this = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Dashboard, [{
    key: 'render',
    value: function render() {
      var admin = this.props.admin;

      return _react2.default.createElement(
        'div',
        { className: 'main-wrapper dashboard' },
        _react2.default.createElement(
          'nav',
          { id: 'sidebar' },
          _react2.default.createElement(
            'div',
            { className: 'sidebar-header' },
            'WakeCap'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'list-unstyled' },
            _react2.default.createElement(
              'li',
              null,
              'Workers'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'page-content' },
          _react2.default.createElement(_Head2.default, { admin: admin }),
          'Dashboard'
        )
      );
    }
  }]);

  return Dashboard;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, props) {
  return state;
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _adminActions2.default)(dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Dashboard);

/***/ }),

/***/ "./src/components/presentators/SideBar.jsx":
/*!*************************************************!*\
  !*** ./src/components/presentators/SideBar.jsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SideBar = function (_React$Component) {
  _inherits(SideBar, _React$Component);

  function SideBar(props) {
    _classCallCheck(this, SideBar);

    var _this = _possibleConstructorReturn(this, (SideBar.__proto__ || Object.getPrototypeOf(SideBar)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(SideBar, [{
    key: 'render',
    value: function render() {
      var admin = this.props.admin;

      return _react2.default.createElement(
        'nav',
        { id: 'sidebar' },
        _react2.default.createElement(
          'div',
          { className: 'sidebar-header' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'navbar-brand', to: '/' },
            _react2.default.createElement('img', { src: 'https://static1.squarespace.com/static/59ed9589e45a7c27e9400b3c/t/5a241aa5e2c483bcf3cf4287/1541907203250/?format=1500w', width: '100', height: '60', alt: 'WakeCap Technologies' })
          )
        ),
        _react2.default.createElement(
          'ul',
          { className: 'list-unstyled' },
          _react2.default.createElement(
            'li',
            null,
            'Workers'
          )
        )
      );
    }
  }]);

  return SideBar;
}(_react2.default.Component);

exports.default = SideBar;

/***/ })

})
//# sourceMappingURL=main.6a0da957144e81f80b8f.hot-update.js.map