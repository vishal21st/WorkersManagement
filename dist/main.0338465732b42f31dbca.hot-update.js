webpackHotUpdate("main",{

/***/ "./src/components/presentators/workers/WorkerDetails.jsx":
/*!***************************************************************!*\
  !*** ./src/components/presentators/workers/WorkerDetails.jsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _WorkerDetailsHeader = __webpack_require__(/*! ./WorkerDetailsHeader */ "./src/components/presentators/workers/WorkerDetailsHeader.jsx");

var _WorkerDetailsHeader2 = _interopRequireDefault(_WorkerDetailsHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WorkerDetails = function (_React$Component) {
  _inherits(WorkerDetails, _React$Component);

  function WorkerDetails(props) {
    _classCallCheck(this, WorkerDetails);

    var _this = _possibleConstructorReturn(this, (WorkerDetails.__proto__ || Object.getPrototypeOf(WorkerDetails)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(WorkerDetails, [{
    key: 'render',
    value: function render() {
      var worker = this.props.worker;

      return _react2.default.createElement(
        'div',
        { className: 'worker-details col-md-9' },
        _react2.default.createElement(
          'div',
          { className: 'worker-details-header tile row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-6' },
            _react2.default.createElement(
              'div',
              { className: 'worker-details-component' },
              _react2.default.createElement(
                'div',
                { className: 'avatar-wrapper' },
                _react2.default.createElement('img', { src: 'https://www.shareicon.net/data/128x128/2016/05/24/770149_people_512x512.png' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'worker-details' },
                _react2.default.createElement(
                  'div',
                  { className: 'main-details' },
                  _react2.default.createElement(
                    'div',
                    { className: 'name' },
                    worker.name
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'designation' },
                    worker.designation
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'asset-details' },
                  _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                      'span',
                      { 'class': 'label' },
                      'Asset ID'
                    ),
                    _react2.default.createElement(
                      'span',
                      { 'class': 'value' },
                      '34446'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                      'span',
                      { 'class': 'label' },
                      'Tag ID'
                    ),
                    _react2.default.createElement(
                      'span',
                      { 'class': 'value' },
                      '34446'
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-4 offset-md-2' },
            _react2.default.createElement(
              'div',
              { className: 'worker-details-component' },
              _react2.default.createElement(
                'div',
                { className: 'worker-details' },
                _react2.default.createElement(
                  'div',
                  { className: 'main-details' },
                  _react2.default.createElement(
                    'div',
                    { className: 'name' },
                    worker.manager_id
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'designation' },
                    'Designation'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'avatar-wrapper' },
                _react2.default.createElement('img', { src: 'https://www.shareicon.net/data/128x128/2016/05/24/770149_people_512x512.png' })
              )
            )
          )
        )
      );
    }
  }]);

  return WorkerDetails;
}(_react2.default.Component);

exports.default = WorkerDetails;

/***/ }),

/***/ "./src/components/presentators/workers/WorkerDetailsHeader.jsx":
/*!*********************************************************************!*\
  !*** ./src/components/presentators/workers/WorkerDetailsHeader.jsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WorkerDetailsHeader = function (_React$Component) {
  _inherits(WorkerDetailsHeader, _React$Component);

  function WorkerDetailsHeader(props) {
    _classCallCheck(this, WorkerDetailsHeader);

    var _this = _possibleConstructorReturn(this, (WorkerDetailsHeader.__proto__ || Object.getPrototypeOf(WorkerDetailsHeader)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(WorkerDetailsHeader, [{
    key: "render",
    value: function render() {
      var worker = this.props.worker;

      return _react2.default.createElement(
        "div",
        { className: "worker-details-header tile row" },
        _react2.default.createElement(
          "div",
          { className: "col-md-6" },
          _react2.default.createElement(
            "div",
            { className: "worker-details-component" },
            _react2.default.createElement(
              "div",
              { className: "avatar-wrapper" },
              _react2.default.createElement("img", { src: "https://www.shareicon.net/data/128x128/2016/05/24/770149_people_512x512.png" })
            ),
            _react2.default.createElement(
              "div",
              { className: "worker-details" },
              _react2.default.createElement(
                "div",
                { className: "main-details" },
                _react2.default.createElement(
                  "div",
                  { className: "name" },
                  worker.name
                ),
                _react2.default.createElement(
                  "div",
                  { className: "designation" },
                  worker.designation
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "asset-details" },
                _react2.default.createElement(
                  "div",
                  null,
                  _react2.default.createElement(
                    "span",
                    { "class": "label" },
                    "Asset ID"
                  ),
                  _react2.default.createElement(
                    "span",
                    { "class": "value" },
                    "34446"
                  )
                ),
                _react2.default.createElement(
                  "div",
                  null,
                  _react2.default.createElement(
                    "span",
                    { "class": "label" },
                    "Tag ID"
                  ),
                  _react2.default.createElement(
                    "span",
                    { "class": "value" },
                    "34446"
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "col-md-4 offset-md-2" },
          _react2.default.createElement(
            "div",
            { className: "worker-details-component" },
            _react2.default.createElement(
              "div",
              { className: "worker-details" },
              _react2.default.createElement(
                "div",
                { className: "main-details" },
                _react2.default.createElement(
                  "div",
                  { className: "name" },
                  worker.manager_id
                ),
                _react2.default.createElement(
                  "div",
                  { className: "designation" },
                  "Designation"
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "avatar-wrapper" },
              _react2.default.createElement("img", { src: "https://www.shareicon.net/data/128x128/2016/05/24/770149_people_512x512.png" })
            )
          )
        )
      );
    }
  }]);

  return WorkerDetailsHeader;
}(_react2.default.Component);

exports.default = WorkerDetailsHeader;

/***/ })

})
//# sourceMappingURL=main.0338465732b42f31dbca.hot-update.js.map