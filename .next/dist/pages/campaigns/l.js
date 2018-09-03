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

var _layout = require("../../components/layout");

var _layout2 = _interopRequireDefault(_layout);

var _campaigns = require("../../ethereum/campaigns");

var _campaigns2 = _interopRequireDefault(_campaigns);

var _contibure = require("../../components/contibure");

var _contibure2 = _interopRequireDefault(_contibure);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/vinayak/campaign/pages/campaigns/l.js?entry";


var show = function (_Component) {
  (0, _inherits3.default)(show, _Component);

  function show() {
    (0, _classCallCheck3.default)(this, show);

    return (0, _possibleConstructorReturn3.default)(this, (show.__proto__ || (0, _getPrototypeOf2.default)(show)).apply(this, arguments));
  }

  (0, _createClass3.default)(show, [{
    key: "renderCards",
    value: function renderCards() {
      var _props = this.props,
          min = _props.min,
          req = _props.req,
          bal = _props.bal,
          approver = _props.approver,
          address = _props.address;

      var items = [{
        header: this.props.Address,
        meta: "Address of Manager",
        description: "can do anything",
        style: { overflowWrap: "break-word" }
      }, {
        header: this.props.Approvers,
        meta: "Count of Approvers",
        description: "can recommend or reject request",
        style: { overflowWrap: "break-word" }
      }, {
        header: this.props.Balance,
        meta: "wei",
        description: "Amount of balance in contract in wei",
        style: { overflowWrap: "break-word" }
      }, {
        header: this.props.MinimumAmmount,
        meta: "in wei",
        description: "min amount required ot join contract",
        style: { overflowWrap: "break-word" }
      }, {
        header: this.props.TotalRequests,
        meta: "requests",
        description: "total requests pending",
        style: { overflowWrap: "break-word" }
      }];
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "cdfsvv"), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 12, __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 4, __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement(_contibure2.default, { address: this.props.caddress, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var cam, summary;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                cam = (0, _campaigns2.default)(props.query.anything);
                _context.next = 3;
                return cam.methods.summary().call();

              case 3:
                summary = _context.sent;
                return _context.abrupt("return", {
                  caddress: props.query.anything,
                  MinimumAmmount: summary[0],
                  TotalRequests: summary[1],
                  Balance: summary[2],
                  Approvers: summary[3],
                  Address: summary[4]
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return show;
}(_react.Component);

exports.default = show;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9sLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkdyaWQiLCJMYXlvdXQiLCJDYW1wYWlnbiIsIkNvbnRyaSIsInNob3ciLCJwcm9wcyIsIm1pbiIsInJlcSIsImJhbCIsImFwcHJvdmVyIiwiYWRkcmVzcyIsIml0ZW1zIiwiaGVhZGVyIiwiQWRkcmVzcyIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwiQXBwcm92ZXJzIiwiQmFsYW5jZSIsIk1pbmltdW1BbW1vdW50IiwiVG90YWxSZXF1ZXN0cyIsInJlbmRlckNhcmRzIiwiY2FkZHJlc3MiLCJjYW0iLCJxdWVyeSIsImFueXRoaW5nIiwibWV0aG9kcyIsInN1bW1hcnkiLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTTs7QUFDZixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBWTs7Ozs7Ozs7O0lBQ2IsQTs7Ozs7Ozs7Ozs7a0NBYVU7bUJBQ2lDLEtBRGpDLEFBQ3NDO1VBRHRDLEFBQ0osYUFESSxBQUNKO1VBREksQUFDQyxhQURELEFBQ0M7VUFERCxBQUNNLGFBRE4sQUFDTTtVQUROLEFBQ1csa0JBRFgsQUFDVztVQURYLEFBQ3FCLGlCQURyQixBQUNxQixBQUNqQzs7VUFBTTtnQkFFTSxLQUFBLEFBQUssTUFEZixBQUNxQixBQUNuQjtjQUZGLEFBRVEsQUFDTjtxQkFIRixBQUdlLEFBQ2I7ZUFBTyxFQUFFLGNBTEMsQUFDWixBQUlTLEFBQWdCO0FBSnpCLEFBQ0UsT0FGVTtnQkFRRixLQUFBLEFBQUssTUFEZixBQUNxQixBQUNuQjtjQUZGLEFBRVEsQUFDTjtxQkFIRixBQUdlLEFBQ2I7ZUFBTyxFQUFFLGNBWEMsQUFPWixBQUlTLEFBQWdCO0FBSnpCLEFBQ0U7Z0JBTVEsS0FBQSxBQUFLLE1BRGYsQUFDcUIsQUFDbkI7Y0FGRixBQUVRLEFBQ047cUJBSEYsQUFHZSxBQUNiO2VBQU8sRUFBRSxjQWpCQyxBQWFaLEFBSVMsQUFBZ0I7QUFKekIsQUFDRTtnQkFNUSxLQUFBLEFBQUssTUFEZixBQUNxQixBQUNuQjtjQUZGLEFBRVEsQUFDTjtxQkFIRixBQUdlLEFBQ2I7ZUFBTyxFQUFFLGNBdkJDLEFBbUJaLEFBSVMsQUFBZ0I7QUFKekIsQUFDRTtnQkFNUSxLQUFBLEFBQUssTUFEZixBQUNxQixBQUNuQjtjQUZGLEFBRVEsQUFDTjtxQkFIRixBQUdlLEFBQ2I7ZUFBTyxFQUFFLGNBN0JiLEFBQWMsQUF5QlosQUFJUyxBQUFnQixBQUczQjtBQVBFLEFBQ0U7MkNBTUcsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtvQkFBbkI7c0JBQVAsQUFBTyxBQUNSO0FBRFE7T0FBQTs7Ozs2QkFFQSxBQUNQOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLDJCQUFBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7b0JBQXBCO3NCQUFBLEFBQXlCO0FBQXpCO2NBREYsQUFDRSxBQUF5QixBQUFLLEFBQzlCLGdDQUFDLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7b0JBQXBCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHFDQUFPLFNBQVMsS0FBQSxBQUFLLE1BQXRCLEFBQTRCO29CQUE1QjtzQkFOUixBQUNFLEFBRUUsQUFFRSxBQUNFLEFBS1Q7QUFMUzs7Ozs7OzJHQXZEbUIsQTs7Ozs7bUJBQ3JCO0Esc0JBQU0seUJBQVMsTUFBQSxBQUFNLE1BQWYsQUFBcUIsQTs7dUJBQ1gsSUFBQSxBQUFJLFFBQUosQUFBWSxVQUFaLEFBQXNCLEE7O21CQUF0QztBOzs0QkFFTSxNQUFBLEFBQU0sTUFEWCxBQUNpQixBQUN0QjtrQ0FBZ0IsUUFGWCxBQUVXLEFBQVEsQUFDeEI7aUNBQWUsUUFIVixBQUdVLEFBQVEsQUFDdkI7MkJBQVMsUUFKSixBQUlJLEFBQVEsQUFDakI7NkJBQVcsUUFMTixBQUtNLEFBQVEsQUFDbkI7MkJBQVMsUUFBQSxBQUFRLEEsQUFOWjtBQUFBLEFBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFMYSxBLEFBZ0VuQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJsLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL3ZpbmF5YWsvY2FtcGFpZ24ifQ==