webpackHotUpdate("main",{

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/chain-function/index.js":
false,

/***/ "./node_modules/dom-helpers/class/addClass.js":
false,

/***/ "./node_modules/dom-helpers/class/hasClass.js":
false,

/***/ "./node_modules/dom-helpers/class/removeClass.js":
false,

/***/ "./node_modules/dom-helpers/transition/properties.js":
false,

/***/ "./node_modules/dom-helpers/util/inDOM.js":
false,

/***/ "./node_modules/dom-helpers/util/requestAnimationFrame.js":
false,

/***/ "./node_modules/react-transition-group/CSSTransitionGroup.js":
false,

/***/ "./node_modules/react-transition-group/CSSTransitionGroupChild.js":
false,

/***/ "./node_modules/react-transition-group/TransitionGroup.js":
false,

/***/ "./node_modules/react-transition-group/index.js":
false,

/***/ "./node_modules/react-transition-group/node_modules/warning/browser.js":
false,

/***/ "./node_modules/react-transition-group/utils/ChildMapping.js":
false,

/***/ "./node_modules/react-transition-group/utils/PropTypes.js":
false,

/***/ "./src/components/presentators/workers/WorkerListItem.jsx":
/*!****************************************************************!*\
  !*** ./src/components/presentators/workers/WorkerListItem.jsx ***!
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

var _avataaars = __webpack_require__(/*! avataaars */ "./node_modules/avataaars/dist/index.js");

var _avataaars2 = _interopRequireDefault(_avataaars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WorkersListItem = function (_React$Component) {
  _inherits(WorkersListItem, _React$Component);

  function WorkersListItem() {
    _classCallCheck(this, WorkersListItem);

    return _possibleConstructorReturn(this, (WorkersListItem.__proto__ || Object.getPrototypeOf(WorkersListItem)).apply(this, arguments));
  }

  _createClass(WorkersListItem, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var worker = this.props.worker;

      return _react2.default.createElement(
        'li',
        { className: 'worker-list-item ' + (this.props.isSelected ? "selected" : ""),
          onClick: function onClick() {
            return _this2.props.selectWorker(worker);
          } },
        _react2.default.createElement(
          'div',
          { className: 'avatar-wrapper' },
          _react2.default.createElement('img', { src: 'https://www.shareicon.net/data/128x128/2016/05/24/770149_people_512x512.png' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'worker-details' },
          _react2.default.createElement(
            'div',
            { className: 'main-details' },
            _react2.default.createElement(
              'div',
              { className: 'name' },
              worker.name
            ),
            _react2.default.createElement(
              'div',
              { className: 'designation' },
              worker.designation
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'id-number' },
            worker.id
          )
        )
      );
    }
  }]);

  return WorkersListItem;
}(_react2.default.Component);

exports.default = WorkersListItem;

/***/ })

})
//# sourceMappingURL=main.f48160323aa3e79a6c43.hot-update.js.map