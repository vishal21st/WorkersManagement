webpackHotUpdate("main",{

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _portfolio = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module './portfolio'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _portfolio2 = _interopRequireDefault(_portfolio);

var _constituent = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module './constituent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _constituent2 = _interopRequireDefault(_constituent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  portfolio: _portfolio2.default,
  constituent: _constituent2.default
});

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _index = __webpack_require__(/*! ../reducers/index.js */ "./src/reducers/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = exports.store = (0, _redux.createStore)((0, _redux.combineReducers)({
  state: state, reducers: _index2.default
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

/***/ })

})
//# sourceMappingURL=main.91786155eab090bb919a.hot-update.js.map