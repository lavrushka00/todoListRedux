"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var initialState = {
  isChange: false,
  changeItem: {}
};

var Change = function Change() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === 'CLOSE_CHANGE') {
    return {
      isChange: false
    };
  }

  if (action.type === 'OPEN_CHANGE') {
    return {
      isChange: true,
      changeItem: action.payload
    };
  }

  return state;
};

var _default = Change;
exports["default"] = _default;