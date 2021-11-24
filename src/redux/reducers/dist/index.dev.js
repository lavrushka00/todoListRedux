"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _DrawForm = _interopRequireDefault(require("./DrawForm"));

var _itemReducer = _interopRequireDefault(require("./itemReducer"));

var _Deleted = _interopRequireDefault(require("./Deleted"));

var _Change = _interopRequireDefault(require("./Change"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rootReducer = (0, _redux.combineReducers)({
  isDraw: _DrawForm["default"],
  itemReducer: _itemReducer["default"],
  isEdit: _Deleted["default"],
  isChange: _Change["default"]
});
var _default = rootReducer;
exports["default"] = _default;