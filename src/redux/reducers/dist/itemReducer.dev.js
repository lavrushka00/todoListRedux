"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = [{
  content: "прочитать книгу",
  status: true,
  id: 1
}, {
  content: "сходить в в магазин",
  status: false,
  id: 2
}, {
  content: "покормить кота",
  status: false,
  id: 3
}, {
  content: "спогулять",
  status: false,
  id: 5
}, {
  content: "сделать уроки",
  status: false,
  id: 6
}];

var itemReducer = function itemReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === "CHECKED") {
    return state.map(function (item) {
      if (item.id === action.payload) {
        return _objectSpread({}, item, {
          status: !item.status
        });
      }

      return item;
    });
  }

  if (action.type === "ADD") {
    return [].concat(_toConsumableArray(state), [{
      content: action.payload.content,
      status: false,
      id: action.payload.id
    }]);
  }

  if (action.type === "DELETE") {
    return state.filter(function (item) {
      return item.id !== action.payload;
    });
  }

  if (action.type === "CHANGE_ITEM") {
    return state.map(function (item) {
      if (item.id === action.payload.id) {
        return _objectSpread({}, item, {
          content: action.payload.content
        });
      }

      return item;
    });
  }

  return state;
};

var _default = itemReducer;
exports["default"] = _default;