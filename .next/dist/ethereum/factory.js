"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("./web3");

var _web2 = _interopRequireDefault(_web);

var _FactoryContract = require("./build/FactoryContract.json");

var _FactoryContract2 = _interopRequireDefault(_FactoryContract);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var factoryInstance = new _web2.default.eth.Contract(JSON.parse(_FactoryContract2.default.interface), "0x894C53857756039478D2847dbFe50cdE4aC29E58");

exports.default = factoryInstance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIkZhY3RvcnlDb250cmFjdCIsImZhY3RvcnlJbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBNEIsQUFBNUI7Ozs7OztBQUVBLElBQU0sa0JBQWtCLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUN0QixLQUFLLEFBQUwsTUFBVywwQkFBZ0IsQUFBM0IsQUFEc0IsWUFFdEIsQUFGc0IsQUFBeEIsQUFLQTs7a0JBQWUsQUFBZiIsImZpbGUiOiJmYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ZpbmF5YWsvY2FtcGFpZ24ifQ==