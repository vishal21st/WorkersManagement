webpackHotUpdate("main",{

/***/ "./src/components/presentators/SideBar.jsx":
/*!*************************************************!*\
  !*** ./src/components/presentators/SideBar.jsx ***!
  \*************************************************/
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

var SideBar = function (_React$Component) {
  _inherits(SideBar, _React$Component);

  function SideBar(props) {
    _classCallCheck(this, SideBar);

    var _this = _possibleConstructorReturn(this, (SideBar.__proto__ || Object.getPrototypeOf(SideBar)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(SideBar, [{
    key: 'render',
    value: function render() {
      var admin = this.props.admin;

      return _react2.default.createElement(
        'nav',
        { className: 'sidebar', id: 'sidebar' },
        _react2.default.createElement(
          'div',
          { className: 'sidebar-header' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'brand-logo', to: '/' },
            _react2.default.createElement('img', { src: 'https://static1.squarespace.com/static/59ed9589e45a7c27e9400b3c/t/5a241aa5e2c483bcf3cf4287/1541907203250/?format=1500w', alt: 'WakeCap Technologies' })
          )
        ),
        _react2.default.createElement(
          'ul',
          { className: 'list-unstyled components sidebar-links' },
          _react2.default.createElement(
            'li',
            { className: 'sidebar-links__item' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { className: 'sidebar-link', to: '/' },
              'Dashboard'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'sidebar-links__item' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { className: 'sidebar-link', to: '/' },
              'Workers'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'sidebar-links__item' },
            'Zones'
          ),
          _react2.default.createElement(
            'li',
            { className: 'sidebar-links__item' },
            'Reports'
          ),
          _react2.default.createElement(
            'li',
            { className: 'sidebar-links__item' },
            'Manage Site'
          ),
          _react2.default.createElement(
            'li',
            { className: 'sidebar-links__item' },
            'Settings'
          )
        )
      );
    }
  }]);

  return SideBar;
}(_react2.default.Component);

exports.default = SideBar;

/***/ })

})
//# sourceMappingURL=main.5e58c23af85e76988389.hot-update.js.map