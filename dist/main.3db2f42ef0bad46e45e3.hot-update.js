webpackHotUpdate("main",{

/***/ "./src/components/presentators/workers/WorkersList.jsx":
/*!*************************************************************!*\
  !*** ./src/components/presentators/workers/WorkersList.jsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _InputField = __webpack_require__(/*! ../form_components/InputField */ "./src/components/presentators/form_components/InputField.jsx");

var _InputField2 = _interopRequireDefault(_InputField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WorkersList = function (_React$Component) {
  _inherits(WorkersList, _React$Component);

  function WorkersList(props) {
    _classCallCheck(this, WorkersList);

    var _this = _possibleConstructorReturn(this, (WorkersList.__proto__ || Object.getPrototypeOf(WorkersList)).call(this, props));

    _this.state = { searchKey: "" };
    return _this;
  }

  _createClass(WorkersList, [{
    key: 'workersList',
    value: function workersList() {
      return this.props.workers.map(function (worker, index) {
        return _react2.default.createElement(
          'li',
          { key: index },
          worker.name
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'ul',
        { className: 'worker-list' },
        this.workersList()
      );
    }
  }]);

  return WorkersList;
}(_react2.default.Component);

exports.default = WorkersList;

/***/ })

})
//# sourceMappingURL=main.3db2f42ef0bad46e45e3.hot-update.js.map