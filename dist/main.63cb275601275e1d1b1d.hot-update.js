webpackHotUpdate("main",{

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
        { className: "working-hours-details tile row" },
        _react2.default.createElement(
          "div",
          { className: "col-md-6" },
          _react2.default.createElement(
            "ul",
            { className: "details" },
            _react2.default.createElement("li", { "class": "detail" })
          )
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
//# sourceMappingURL=main.63cb275601275e1d1b1d.hot-update.js.map