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
      dispatch({ type: _actionTypes2.default.admin.LOGGING });
      return new Promise(function (resolve, reject) {
        var email = payload.email,
            password = payload.password;

        if (["vishal@wakecap.com", "hassan@wakecap.com"].includes(email.toLowerCase()) && password == "password") {
          dispatch({ type: _actionTypes2.default.admin.LOGIN_SUCCESS, payload: { email: payload.email } });
          resolve();
        } else {
          reject({ error: "Email or password is not correct" });
        }
      });
    }
  };
};

exports.default = adminActions;

/***/ })

})
//# sourceMappingURL=main.d312a53dec2cd11f2b52.hot-update.js.map