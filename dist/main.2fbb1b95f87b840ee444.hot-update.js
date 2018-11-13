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

/***/ }),

/***/ "./src/actions/data.js":
/*!*****************************!*\
  !*** ./src/actions/data.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var data = {
  admins: [{
    id: 1,
    name: "Vishal Singhal",
    email: "vishal@wakecap.com",
    password: "password"
  }, {
    id: 2,
    name: "Hassan",
    email: "hassan@wakecap.com",
    password: "password"
  }],

  workers: [{
    manager_id: 1,
    id: "w_1",
    name: "Worker 1",
    designation: "Foreman"
  }, {
    manager_id: 1,
    id: "w_2",
    name: "Worker 2",
    designation: "abc"
  }, {
    manager_id: 1,
    id: "w_3",
    name: "Worker 3",
    designation: "designation"
  }, {
    manager_id: 1,
    id: "w_4",
    name: "Worker 4",
    designation: "designation"
  }]
};

exports.default = data;

/***/ })

})
//# sourceMappingURL=main.2fbb1b95f87b840ee444.hot-update.js.map