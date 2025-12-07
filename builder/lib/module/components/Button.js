"use strict";

import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { jsx as _jsx } from "react/jsx-runtime";
export const MyButton = ({
  onPress,
  text
}) => {
  return /*#__PURE__*/_jsx(TouchableOpacity, {
    style: styles.container,
    onPress: onPress,
    children: /*#__PURE__*/_jsx(Text, {
      style: styles.text,
      children: text
    })
  });
};
const styles = StyleSheet.create({
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
export default MyButton;
//# sourceMappingURL=Button.js.map