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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WorkersListBox = function (_React$Component) {
  _inherits(WorkersListBox, _React$Component);

  function WorkersListBox(props) {
    _classCallCheck(this, WorkersListBox);

    var _this = _possibleConstructorReturn(this, (WorkersListBox.__proto__ || Object.getPrototypeOf(WorkersListBox)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(WorkersListBox, [{
    key: "render",
    value: function render() {
      var workers = this.props.workers;

      return _react2.default.createElement(
        "div",
        { className: "worker-list-box" },
        "workers"
      );
    }
  }]);

  return WorkersListBox;
}(_react2.default.Component);

exports.default = WorkersListBox;

/***/ })

})
//# sourceMappingURL=main.8dcca251cfb150db0d25.hot-update.js.map