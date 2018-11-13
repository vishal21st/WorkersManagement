webpackHotUpdate("main",{

/***/ "./src/reducers/createReducer.js":
/*!***************************************!*\
  !*** ./src/reducers/createReducer.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createReducer;
function createReducer(reducers, defaultState) {
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
    var actionObject = arguments[1];

    if (Object.prototype.hasOwnProperty.call(reducers, actionObject.type)) {
      return reducers[actionObject.type](state, actionObject.payload);
    }
    return state;
  };
}

/***/ })

})
//# sourceMappingURL=main.d1e18df6e770b56cbf42.hot-update.js.map