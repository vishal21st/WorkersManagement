webpackHotUpdate("main",{

/***/ "./src/reducers/workers.js":
/*!*********************************!*\
  !*** ./src/reducers/workers.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actionTypes = __webpack_require__(/*! ../consts/actionTypes */ "./src/consts/actionTypes.js");

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _createReducer = __webpack_require__(/*! ./createReducer */ "./src/reducers/createReducer.js");

var _createReducer2 = _interopRequireDefault(_createReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = {};

var defaultState = {};

reducers[_actionTypes2.default.workers.INITIALIZE_WORKERS] = function (state, workers) {
  debugger;
  return _extends({}, state, {
    workers: workers
  });
};

exports.default = (0, _createReducer2.default)(reducers, defaultState);

/***/ })

})
//# sourceMappingURL=main.5bfda7d19c8c46613e3d.hot-update.js.map