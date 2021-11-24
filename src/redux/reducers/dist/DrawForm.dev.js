"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var initialState = {
  isDraw: false
};

var DrawForm = function DrawForm() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === 'ON') {
    return {
      isDraw: true
    };
  }

  if (action.type === 'OFF') {
    return {
      isDraw: false
    };
  }

  return state;
};

var _default = DrawForm;
exports["default"] = _default;