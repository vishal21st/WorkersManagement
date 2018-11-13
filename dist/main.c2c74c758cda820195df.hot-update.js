webpackHotUpdate("main",{

/***/ "./src/components/presentators/workers/HelmetsDetail.jsx":
/*!***************************************************************!*\
  !*** ./src/components/presentators/workers/HelmetsDetail.jsx ***!
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

var _reactHighcharts = __webpack_require__(/*! react-highcharts */ "./node_modules/react-highcharts/dist/ReactHighcharts.js");

var _reactHighcharts2 = _interopRequireDefault(_reactHighcharts);

var _HelmetCard = __webpack_require__(/*! ./HelmetCard */ "./src/components/presentators/workers/HelmetCard.jsx");

var _HelmetCard2 = _interopRequireDefault(_HelmetCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HelmetDetails = function (_React$Component) {
  _inherits(HelmetDetails, _React$Component);

  function HelmetDetails(props) {
    _classCallCheck(this, HelmetDetails);

    var _this = _possibleConstructorReturn(this, (HelmetDetails.__proto__ || Object.getPrototypeOf(HelmetDetails)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(HelmetDetails, [{
    key: 'renderHelmets',
    value: function renderHelmets() {
      return this.props.helmets.map(function (helmet, index) {
        return _react2.default.createElement(_HelmetCard2.default, { helmet: helmet, key: index });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'helmet-details tile row' },
        _react2.default.createElement(
          'div',
          { className: 'col-md-12' },
          _react2.default.createElement(
            'h3',
            { className: 'header' },
            'Assigned Helmet'
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            this.renderHelmets()
          )
        )
      );
    }
  }]);

  return HelmetDetails;
}(_react2.default.Component);

exports.default = HelmetDetails;

/***/ })

})
//# sourceMappingURL=main.c2c74c758cda820195df.hot-update.js.map