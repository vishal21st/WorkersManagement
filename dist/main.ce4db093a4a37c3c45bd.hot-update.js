webpackHotUpdate("main",{

/***/ "./src/components/presentators/workers/WorkerListItem.jsx":
/*!****************************************************************!*\
  !*** ./src/components/presentators/workers/WorkerListItem.jsx ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _avataaars = __webpack_require__(/*! avataaars */ "./node_modules/avataaars/dist/index.js");

var _avataaars2 = _interopRequireDefault(_avataaars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WorkersListItem = function (_React$Component) {
  _inherits(WorkersListItem, _React$Component);

  function WorkersListItem() {
    _classCallCheck(this, WorkersListItem);

    return _possibleConstructorReturn(this, (WorkersListItem.__proto__ || Object.getPrototypeOf(WorkersListItem)).apply(this, arguments));
  }

  _createClass(WorkersListItem, [{
    key: 'render',
    value: function render() {
      var worker = this.props.worker;

      return _react2.default.createElement(
        'li',
        { className: 'worker-list-item' },
        _react2.default.createElement(_avataaars2.default, {
          avatarStyle: 'Circle',
          topType: 'ShortHairTheCaesarSidePart',
          accessoriesType: 'Prescription02',
          hairColor: 'Brown',
          facialHairType: 'BeardLight',
          facialHairColor: 'Auburn',
          clotheType: 'Hoodie',
          clotheColor: 'Heather',
          eyeType: 'Default',
          eyebrowType: 'RaisedExcitedNatural',
          mouthType: 'Default',
          skinColor: 'Tanned'
        }),
        worker.name
      );
    }
  }]);

  return WorkersListItem;
}(_react2.default.Component);

exports.default = WorkersListItem;

/***/ })

})
//# sourceMappingURL=main.ce4db093a4a37c3c45bd.hot-update.js.map