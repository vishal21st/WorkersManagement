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

        debugger;
        if (["vishal@wakecap.com", "hassan@wakecap.com"].includes(email.toLowerCase()) && password == "password") {
          var admin = _data2.default.admins.filter(function (admin) {
            return admin.email == email;
          })[0];
          var workers = _data2.default.workers.filter(function (worke) {
            return worker.manager_id == admin.id;
          });
          debugger;
          dispatch({ type: _actionTypes2.default.admin.LOGIN_SUCCESS, payload: { email: payload.email } });
          resolve({ email: payload.email });
        } else {
          reject({ error: "Email or Password is incorrect!" });
        }
      });
    }
  };
};

exports.default = adminActions;

/***/ })

})
//# sourceMappingURL=main.c9d6c38a30796076c930.hot-update.js.map