webpackHotUpdate("main",{

/***/ "./src/components/presentators/workers/WorkersListBox.jsx":
/*!****************************************************************!*\
  !*** ./src/components/presentators/workers/WorkersListBox.jsx ***!
  \****************************************************************/
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

var _WorkersList = __webpack_require__(/*! ./WorkersList */ "./src/components/presentators/workers/WorkersList.jsx");

var _WorkersList2 = _interopRequireDefault(_WorkersList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WorkersListBox = function (_React$Component) {
  _inherits(WorkersListBox, _React$Component);

  function WorkersListBox(props) {
    _classCallCheck(this, WorkersListBox);

    var _this = _possibleConstructorReturn(this, (WorkersListBox.__proto__ || Object.getPrototypeOf(WorkersListBox)).call(this, props));

    _this.state = { searchKey: "" };
    return _this;
  }

  _createClass(WorkersListBox, [{
    key: 'workersList',
    value: function workersList() {
      var searchKey = this.state.searchKey;

      return this.props.workers.workers.filter(function (worker) {
        return worker.name.toLowerCase().indexOf(searchKey.toLowerCase()) >= 0;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var workers = this.props.workers;

      return _react2.default.createElement(
        'div',
        { className: 'worker-list-box col-md-3' },
        _react2.default.createElement(_InputField2.default, {
          inputType: 'text',
          name: 'search',
          placeholder: 'Search by name',
          inputRef: 'search',
          onChange: function onChange(e) {
            _this2.setState({ searchKey: e.target.value });
          } }),
        _react2.default.createElement(_WorkersList2.default, { selectWorker: selectWorker, workers: this.workersList() })
      );
    }
  }]);

  return WorkersListBox;
}(_react2.default.Component);

exports.default = WorkersListBox;

/***/ })

})
//# sourceMappingURL=main.a8338c2ed46d6623fc86.hot-update.js.map