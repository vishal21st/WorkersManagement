webpackHotUpdate("main",{

/***/ "./src/reducers/admin.js":
/*!*******************************!*\
  !*** ./src/reducers/admin.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // import actionTypes from '../consts/actionTypes';


var _createReducer = __webpack_require__(/*! ./createReducer */ "./src/reducers/createReducer.js");

var _createReducer2 = _interopRequireDefault(_createReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = {};

var defaultState = {};

reducers[actionTypes.admin.LOGGING] = function (state) {
  return _extends({}, state, {
    logging: true
  });
};

reducers[actionTypes.workers.LOGIN_SUCCESS] = function (state, _ref) {
  var workers = _ref.workers;
  return _extends({}, state, {
    logging: false,
    admin: admin
  });
};

exports.default = (0, _createReducer2.default)(reducers, defaultState);

/***/ }),

/***/ "./src/reducers/createReducer.js":
/*!***************************************!*\
  !*** ./src/reducers/createReducer.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // import actionTypes from '../consts/actionTypes';


var _createReducer = __webpack_require__(/*! ./createReducer */ "./src/reducers/createReducer.js");

var _createReducer2 = _interopRequireDefault(_createReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = {};

var defaultState = {};

reducers[actionTypes.workers.WORKERS_FETCH] = function (state) {
  return _extends({}, state, {
    fetching: true
  });
};

reducers[actionTypes.workers.WORKERS_FETCH_SUCCESS] = function (state, _ref) {
  var workers = _ref.workers;
  return _extends({}, state, {
    fetching: false,
    workers: workers
  });
};

exports.default = (0, _createReducer2.default)(reducers, defaultState);

/***/ })

})
//# sourceMappingURL=main.f58338ae30988865a9c2.hot-update.js.map