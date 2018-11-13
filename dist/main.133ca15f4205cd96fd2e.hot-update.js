webpackHotUpdate("main",{

/***/ "./src/components/presentators/workers/HelmetCard.jsx":
/*!************************************************************!*\
  !*** ./src/components/presentators/workers/HelmetCard.jsx ***!
  \************************************************************/
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

var HelmetCard = function (_React$Component) {
  _inherits(HelmetCard, _React$Component);

  function HelmetCard(props) {
    _classCallCheck(this, HelmetCard);

    var _this = _possibleConstructorReturn(this, (HelmetCard.__proto__ || Object.getPrototypeOf(HelmetCard)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(HelmetCard, [{
    key: "render",
    value: function render() {
      var helmet = this.props.helmet;


      return _react2.default.createElement(
        "div",
        { className: "col-md-3" },
        _react2.default.createElement(
          "div",
          { className: "helmet-card" },
          _react2.default.createElement("span", { className: "status-indicator " + helmet.indicator }),
          _react2.default.createElement(
            "div",
            { className: "detail" },
            _react2.default.createElement(
              "div",
              { className: "detail-icon" },
              _react2.default.createElement("i", { className: "fas fa-hire-a-helmet" })
            ),
            _react2.default.createElement(
              "div",
              { className: "detail-value" },
              helmet.id
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "detail" },
            _react2.default.createElement(
              "div",
              { className: "detail-icon" },
              _react2.default.createElement("i", { className: "fas fa-id-card" })
            ),
            _react2.default.createElement(
              "div",
              { className: "detail-value" },
              helmet.assigned_id
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "detail" },
            _react2.default.createElement(
              "div",
              { className: "detail-icon" },
              _react2.default.createElement("i", { className: "fas fa-clock" })
            ),
            _react2.default.createElement(
              "div",
              { className: "detail-value" },
              helmet.time
            )
          )
        )
      );
    }
  }]);

  return HelmetCard;
}(_react2.default.Component);

exports.default = HelmetCard;

/***/ })

})
//# sourceMappingURL=main.133ca15f4205cd96fd2e.hot-update.js.map