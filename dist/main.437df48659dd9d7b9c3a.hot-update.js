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

var _workers = __webpack_require__(/*! ./workers */ "./src/reducers/workers.js");

var _workers2 = _interopRequireDefault(_workers);

var _admin = __webpack_require__(/*! ./admin */ "./src/reducers/admin.js");

var _admin2 = _interopRequireDefault(_admin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  workers: _workers2.default,
  admin: _admin2.default
});

/***/ })

})
//# sourceMappingURL=main.437df48659dd9d7b9c3a.hot-update.js.map