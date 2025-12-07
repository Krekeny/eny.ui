"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MyButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const MyButton = ({
  onPress,
  text
}) => {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
    style: styles.container,
    onPress: onPress,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
      style: styles.text,
      children: text
    })
  });
};
exports.MyButton = MyButton;
const styles = _reactNative.StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    paddingVertical: 8,
    backgroundColor: "purple",
    alignSelf: "flex-start",
    borderRadius: 8
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  }
});
var _default = exports.default = MyButton;
//# sourceMappingURL=Button.js.map