webpackHotUpdate("main",{

/***/ "./src/components/App.jsx":
/*!********************************!*\
  !*** ./src/components/App.jsx ***!
  \********************************/
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

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Head = __webpack_require__(/*! ./Head */ "./src/components/Head.jsx");

var _Head2 = _interopRequireDefault(_Head);

var _Login = __webpack_require__(/*! ./containers/Login */ "./src/components/containers/Login.jsx");

var _Login2 = _interopRequireDefault(_Login);

var _Dashboard = __webpack_require__(/*! ./containers/Dashboard */ "./src/components/containers/Dashboard.jsx");

var _Dashboard2 = _interopRequireDefault(_Dashboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          'div',
          { className: 'main-container' },
          _react2.default.createElement(_Head2.default, null),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/login', component: _Login2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/dashboard', component: _Dashboard2.default })
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

/***/ })

})
//# sourceMappingURL=main.de3a875487e69deec5ef.hot-update.js.map