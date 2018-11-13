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

var _WorkerListItem = __webpack_require__(/*! ./WorkerListItem */ "./src/components/presentators/workers/WorkerListItem.jsx");

var _WorkerListItem2 = _interopRequireDefault(_WorkerListItem);

var _reactTransitionGroup = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/index.js");

var _reactTransitionGroup2 = _interopRequireDefault(_reactTransitionGroup);

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
      var _this2 = this;

      var selectedWorker = this.props.selectedWorker;

      return this.props.workers.map(function (worker, index) {
        var isSelected = worker.id == selectedWorker.id;
        return (
          // <CSSTransition key={index} timeout={500} classNames="move">
          _react2.default.createElement(_WorkerListItem2.default, { isSelected: isSelected, worker: worker, selectWorker: _this2.props.selectWorker })
          // </CSSTransition>

        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'ul',
        { className: 'workers-list list-unstyled' },
        this.workersList()
      );
    }
  }]);

  return WorkersList;
}(_react2.default.Component);

exports.default = WorkersList;

/***/ })

})
//# sourceMappingURL=main.0b0ee7f8bc31d6d09ef8.hot-update.js.map