webpackHotUpdate("main",{

/***/ "./src/actions/adminActions.js":
/*!*************************************!*\
  !*** ./src/actions/adminActions.js ***!
  \*************************************/
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

var adminActions = function adminActions(dispatch) {
  return {
    login: function login(payload) {
      new Promise(function (resolve, reject) {
        dispatch({ type: _actionTypes2.default.admin.LOGGING });
        dispatch({ type: _actionTypes2.default.admin.LOGIN_SUCCESS, payload: {} });
        resolve();
      });
    }
  };
};

exports.default = adminActions;

/***/ })

})
//# sourceMappingURL=main.b76a22fd89ecdf47d7f3.hot-update.js.map