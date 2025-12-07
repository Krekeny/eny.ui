"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Basic = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _Button = require("./Button");
var _test = require("storybook/test");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const meta = {
  component: _Button.MyButton,
  args: {
    text: "Hello world",
    onPress: (0, _test.fn)()
  },
  decorators: [Story => /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
    style: {
      padding: 16
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Story, {})
  })]
};
var _default = exports.default = meta;
const Basic = exports.Basic = {};
//# sourceMappingURL=Button.stories.js.map