webpackHotUpdate("main",{

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
  reducers: _index2.default
}));

/***/ })

})
//# sourceMappingURL=main.0288ec682ad3618be852.hot-update.js.map