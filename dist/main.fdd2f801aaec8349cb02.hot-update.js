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

var _reactHighcharts = __webpack_require__(/*! react-highcharts */ "./node_modules/react-highcharts/dist/ReactHighcharts.js");

var _reactHighcharts2 = _interopRequireDefault(_reactHighcharts);

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
    key: 'componentDidMount',
    value: function componentDidMount() {
      var chart = this.refs.chart.getChart();
      chart.series[0].addPoint({ x: 10, y: 12 });
    }
  }, {
    key: 'render',
    value: function render() {
      var worker = this.props.worker;

      var config = {
        chart: { type: "column" },
        xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        series: [{
          data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
      };
      return _react2.default.createElement(
        'div',
        { className: 'working-hours-details tile row' },
        _react2.default.createElement(
          'div',
          { className: 'col-md-4' },
          _react2.default.createElement(
            'ul',
            { className: 'details list-unstyled' },
            _react2.default.createElement(
              'li',
              { className: 'detail' },
              _react2.default.createElement(
                'div',
                { className: 'detail-icon' },
                _react2.default.createElement('i', { className: 'fas fa-calendar-alt' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'detail-meta' },
                _react2.default.createElement(
                  'div',
                  { className: 'detail-label' },
                  'Total Hours worked'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'detail-value' },
                  '2,158'
                )
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'detail' },
              _react2.default.createElement(
                'div',
                { className: 'detail-icon' },
                _react2.default.createElement('i', { className: 'fas fa-map-marker' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'detail-meta' },
                _react2.default.createElement(
                  'div',
                  { className: 'detail-label' },
                  'Last Active Zone'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'detail-value' },
                  'Zone 2'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-md-8' },
          _react2.default.createElement(_reactHighcharts2.default, { config: config, ref: 'chart' })
        )
      );
    }
  }]);

  return WorkingHoursDetail;
}(_react2.default.Component);

exports.default = WorkingHoursDetail;

/***/ })

})
//# sourceMappingURL=main.fdd2f801aaec8349cb02.hot-update.js.map