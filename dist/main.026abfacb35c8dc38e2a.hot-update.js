webpackHotUpdate("main",{

/***/ "./node_modules/react-gravatar/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/react-gravatar/dist/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: Couldn't find preset \"stage-0\" relative to directory \"/Users/vishal/Documents/learning/workers_management/node_modules/react-gravatar\"\n    at /Users/vishal/Documents/learning/workers_management/node_modules/babel-core/lib/transformation/file/options/option-manager.js:293:19\n    at Array.map (<anonymous>)\n    at OptionManager.resolvePresets (/Users/vishal/Documents/learning/workers_management/node_modules/babel-core/lib/transformation/file/options/option-manager.js:275:20)\n    at OptionManager.mergePresets (/Users/vishal/Documents/learning/workers_management/node_modules/babel-core/lib/transformation/file/options/option-manager.js:264:10)\n    at OptionManager.mergeOptions (/Users/vishal/Documents/learning/workers_management/node_modules/babel-core/lib/transformation/file/options/option-manager.js:249:14)\n    at OptionManager.init (/Users/vishal/Documents/learning/workers_management/node_modules/babel-core/lib/transformation/file/options/option-manager.js:368:12)\n    at File.initOptions (/Users/vishal/Documents/learning/workers_management/node_modules/babel-core/lib/transformation/file/index.js:212:65)\n    at new File (/Users/vishal/Documents/learning/workers_management/node_modules/babel-core/lib/transformation/file/index.js:135:24)\n    at Pipeline.transform (/Users/vishal/Documents/learning/workers_management/node_modules/babel-core/lib/transformation/pipeline.js:46:16)\n    at transpile (/Users/vishal/Documents/learning/workers_management/node_modules/babel-loader/lib/index.js:50:20)\n    at Object.module.exports (/Users/vishal/Documents/learning/workers_management/node_modules/babel-loader/lib/index.js:173:20)");

/***/ }),

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

var _reactGravatar = __webpack_require__(/*! react-gravatar */ "./node_modules/react-gravatar/dist/index.js");

var _reactGravatar2 = _interopRequireDefault(_reactGravatar);

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
      var worker = this.props.worker;

      return _react2.default.createElement(
        'li',
        { className: 'worker-list-item', key: index },
        worker.name
      );
    }
  }]);

  return WorkersListItem;
}(_react2.default.Component);

exports.default = WorkersListItem;

/***/ })

})
//# sourceMappingURL=main.026abfacb35c8dc38e2a.hot-update.js.map