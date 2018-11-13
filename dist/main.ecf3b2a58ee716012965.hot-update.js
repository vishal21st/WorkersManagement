webpackHotUpdate("main",{

/***/ "./src/components/presentators/workers/WorkerDetails.jsx":
/*!***************************************************************!*\
  !*** ./src/components/presentators/workers/WorkerDetails.jsx ***!
  \***************************************************************/
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

var _WorkerDetailsHeader = __webpack_require__(/*! ./WorkerDetailsHeader */ "./src/components/presentators/workers/WorkerDetailsHeader.jsx");

var _WorkerDetailsHeader2 = _interopRequireDefault(_WorkerDetailsHeader);

var _WorkingHoursDetail = __webpack_require__(/*! ./WorkingHoursDetail */ "./src/components/presentators/workers/WorkingHoursDetail.jsx");

var _WorkingHoursDetail2 = _interopRequireDefault(_WorkingHoursDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WorkerDetails = function (_React$Component) {
  _inherits(WorkerDetails, _React$Component);

  function WorkerDetails(props) {
    _classCallCheck(this, WorkerDetails);

    var _this = _possibleConstructorReturn(this, (WorkerDetails.__proto__ || Object.getPrototypeOf(WorkerDetails)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(WorkerDetails, [{
    key: 'render',
    value: function render() {
      var worker = this.props.worker;

      return _react2.default.createElement(
        'div',
        { className: 'worker-details col-md-9' },
        _react2.default.createElement(_WorkerDetailsHeader2.default, { worker: worker }),
        _react2.default.createElement(_WorkingHoursDetail2.default, { worker: _WorkingHoursDetail2.default })
      );
    }
  }]);

  return WorkerDetails;
}(_react2.default.Component);

exports.default = WorkerDetails;

/***/ }),

/***/ "./src/components/presentators/workers/WorkingHoursDetail.jsx":
/*!********************************************************************!*\
  !*** ./src/components/presentators/workers/WorkingHoursDetail.jsx ***!
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WorkingHoursDetail = function (_React$Component) {
  _inherits(WorkingHoursDetail, _React$Component);

  function WorkingHoursDetail(props) {
    _classCallCheck(this, WorkingHoursDetail);

    var _this = _possibleConstructorReturn(this, (WorkingHoursDetail.__proto__ || Object.getPrototypeOf(WorkingHoursDetail)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(WorkingHoursDetail, [{
    key: "render",
    value: function render() {
      var worker = this.props.worker;

      return _react2.default.createElement(
        "div",
        { className: "worker-details-header tile row" },
        _react2.default.createElement(
          "div",
          { className: "col-md-6" },
          "working hours"
        ),
        _react2.default.createElement("div", { className: "col-md-4 offset-md-2" })
      );
    }
  }]);

  return WorkingHoursDetail;
}(_react2.default.Component);

exports.default = WorkingHoursDetail;

/***/ })

})
//# sourceMappingURL=main.ecf3b2a58ee716012965.hot-update.js.map