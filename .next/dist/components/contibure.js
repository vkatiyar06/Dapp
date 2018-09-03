"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _campaigns = require("../ethereum/campaigns");

var _campaigns2 = _interopRequireDefault(_campaigns);

var _web = require("../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/vinayak/campaign/components/contibure.js";


var ClassName = function (_Component) {
  (0, _inherits3.default)(ClassName, _Component);

  function ClassName() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ClassName);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ClassName.__proto__ || (0, _getPrototypeOf2.default)(ClassName)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: ""
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var campaign, acc;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                campaign = (0, _campaigns2.default)(_this.props.address);
                _context.next = 4;
                return _web2.default.eth.getAccounts();

              case 4:
                acc = _context.sent;
                _context.next = 7;
                return campaign.methods.contribute().send({ from: acc[0], value: _this.state.value });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ClassName, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, "Amount to contribute"), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.value,
        onChange: function onChange(event) {
          return _this3.setState({ value: event.target.value });
        },
        label: "ehter",
        labelPosition: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      })), _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, "Contribute ^_^"));
    }
  }]);

  return ClassName;
}(_react.Component);

exports.default = ClassName;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGlidXJlLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwiTWVzc2FnZSIsIkdyaWQiLCJDcmVhdGVuZXciLCJ3ZWIzIiwiQ2xhc3NOYW1lIiwic3RhdGUiLCJ2YWx1ZSIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2MiLCJtZXRob2RzIiwiY29udHJpYnV0ZSIsInNlbmQiLCJmcm9tIiwic2V0U3RhdGUiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQVEsQUFBTyxBQUFTOztBQUN2QyxBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBTyxBQUFVOzs7Ozs7Ozs7SUFDWCxBOzs7Ozs7Ozs7Ozs7Ozs7a04sQUFDSjthQUNTLEEsQUFERDtBQUFBLEFBQ04sYSxBQUdGOzJGQUFXLGlCQUFBLEFBQU0sT0FBTjtzQkFBQTtzRUFBQTtvQkFBQTs2Q0FBQTttQkFDVDtzQkFBQSxBQUFNLEFBQ0E7QUFGRywyQkFFUSx5QkFBVSxNQUFBLEFBQUssTUFGdkIsQUFFUSxBQUFxQjtnQ0FGN0I7dUJBR1MsY0FBQSxBQUFLLElBSGQsQUFHUyxBQUFTOzttQkFBckI7QUFIRywrQkFBQTtnQ0FBQTt1QkFJSCxTQUFBLEFBQVMsUUFBVCxBQUNILGFBREcsQUFFSCxLQUFLLEVBQUUsTUFBTSxJQUFSLEFBQVEsQUFBSSxJQUFJLE9BQU8sTUFBQSxBQUFLLE1BTjNCLEFBSUgsQUFFRSxBQUFrQzs7bUJBTmpDO21CQUFBO2dDQUFBOztBQUFBO29CQUFBO0E7Ozs7Ozs7Ozs7NkJBUUY7bUJBQ1A7OzZCQUNFLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQjtvQkFBckI7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EseUNBQUEsQUFBQztlQUNRLEtBQUEsQUFBSyxNQURkLEFBQ29CLEFBQ2xCO2tCQUFVLHlCQUFBO2lCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsT0FBTyxNQUFBLEFBQU0sT0FBdEMsQUFBUyxBQUFjLEFBQXNCO0FBRnpELEFBR0U7ZUFIRixBQUdRLEFBQ047dUJBSkYsQUFJZ0I7O29CQUpoQjtzQkFISixBQUNFLEFBRUUsQUFPRjtBQVBFO0FBQ0UsMkJBTUosQUFBQyx5Q0FBTyxTQUFSO29CQUFBO3NCQUFBO0FBQUE7U0FYSixBQUNFLEFBVUUsQUFHTDs7Ozs7QUE1QnFCLEEsQUErQnhCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImNvbnRpYnVyZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS92aW5heWFrL2NhbXBhaWduIn0=