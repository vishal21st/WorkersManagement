webpackHotUpdate("main",{

/***/ "./src/components/Head.jsx":
/*!*********************************!*\
  !*** ./src/components/Head.jsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Head = function (_React$Component) {
  _inherits(Head, _React$Component);

  function Head() {
    _classCallCheck(this, Head);

    return _possibleConstructorReturn(this, (Head.__proto__ || Object.getPrototypeOf(Head)).apply(this, arguments));
  }

  _createClass(Head, [{
    key: 'renderLinks',
    value: function renderLinks() {
      var _this2 = this;

      if (this.props.admin.email) {
        return _react2.default.createElement(
          'ul',
          { className: 'nav navbar-nav ml-auto ' },
          _react2.default.createElement(
            'li',
            { className: 'nav-item active' },
            _react2.default.createElement(
              'a',
              { className: 'nav-link', href: '#', onClick: function onClick() {
                  _this2.props.logout();
                } },
              'Logout',
              _react2.default.createElement(
                'span',
                { className: 'sr-only' },
                '(current)'
              )
            )
          )
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'nav',
        { className: 'navbar navbar-expand-lg navbar main-header' },
        _react2.default.createElement(
          'button',
          { 'class': 'btn-toggle visible-xs visible-sm', type: 'button', onClick: function onClick() {
              _this3.props.toggle();
            } },
          _react2.default.createElement('i', { className: 'fa fa-bars' })
        ),
        this.renderLinks()
      );
    }
  }]);

  return Head;
}(_react2.default.Component);

exports.default = Head;

/***/ })

})
//# sourceMappingURL=main.f9a17abb7302aadfbeb8.hot-update.js.map