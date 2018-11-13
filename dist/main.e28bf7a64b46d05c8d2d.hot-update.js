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

reducers[_actionTypes2.default.workers.WORKERS_FETCH] = function (state) {
  return _extends({}, state, {
    fetching: true
  });
};

reducers[_actionTypes2.default.workers.WORKERS_FETCH_SUCCESS] = function (state, _ref) {
  var workers = _ref.workers;
  return _extends({}, state, {
    fetching: false,
    workers: workers
  });
};

reducers[_actionTypes2.default.workers.INITIALIZE_WORKERS] = function (state, _ref2) {
  var workers = _ref2.workers;
  return _extends({}, state, {
    workers: workers
  });
};

exports.default = (0, _createReducer2.default)(reducers, defaultState);

/***/ })

})
//# sourceMappingURL=main.e28bf7a64b46d05c8d2d.hot-update.js.map