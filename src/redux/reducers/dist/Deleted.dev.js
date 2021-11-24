"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var initialState = {
  isEdit: false
};

var Edit = function Edit() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === 'EDIT') {
    return {
      isEdit: !state.isEdit
    };
  }

  return state;
};

var _default = Edit;
exports["default"] = _default;