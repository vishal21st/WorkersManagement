webpackHotUpdate("main",{

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _index = __webpack_require__(/*! ./store/index.js */ "./src/store/index.js");

var _App = __webpack_require__(/*! ./components/App */ "./src/components/App.jsx");

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const store = createStore(reducers);

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: _index.store },
  _react2.default.createElement(_App2.default, null),
  ','
), global.document.getElementById('root'));
// import reducers from './reducers';

// import { createStore } from 'redux';
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

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

var _index = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../reducers/index.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = exports.store = (0, _redux.createStore)((0, _redux.combineReducers)({
  state: state, reducers: _index2.default
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

/***/ })

})
//# sourceMappingURL=main.d50fa9ed92bd85f0189d.hot-update.js.map