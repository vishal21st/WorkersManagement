webpackHotUpdate("main",{

/***/ "./src/components/containers/Worker.jsx":
/*!**********************************************!*\
  !*** ./src/components/containers/Worker.jsx ***!
  \**********************************************/
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

var Worker = function (_React$Component) {
  _inherits(Worker, _React$Component);

  function Worker(props) {
    _classCallCheck(this, Worker);

    var _this = _possibleConstructorReturn(this, (Worker.__proto__ || Object.getPrototypeOf(Worker)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Worker, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'workers-page' },
        'Workers'
      );
    }
  }]);

  return Worker;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, props) {
  return state;
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _adminActions2.default)(dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Worker);

/***/ })

})
//# sourceMappingURL=main.0a16954f49e4035a3caa.hot-update.js.map