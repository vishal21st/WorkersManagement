webpackHotUpdate("main",{

/***/ "./src/actions/workersAction.js":
/*!**************************************!*\
  !*** ./src/actions/workersAction.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = __webpack_require__(/*! ../consts/actionTypes */ "./src/consts/actionTypes.js");

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _data = __webpack_require__(/*! ./data */ "./src/actions/data.js");

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var workersActions = function workersActions(dispatch) {
  return {
    initializeWorkers: function initializeWorkers(payload) {
      var workers = _data2.default.workers.filter(function (worker) {
        return worker.manager_id == payload.id;
      });

      dispatch({
        type: _actionTypes2.default.workers.INITIALIZE_WORKERS,
        workers: workers
      });
    }
  };
};

exports.default = workersActions;

/***/ })

})
//# sourceMappingURL=main.295bc9a0a6a65edcb475.hot-update.js.map