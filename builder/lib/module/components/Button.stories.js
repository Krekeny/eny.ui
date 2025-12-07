"use strict";

import React from "react";
import { View } from "react-native";
import { MyButton } from "./Button";
import { fn } from "storybook/test";
import { jsx as _jsx } from "react/jsx-runtime";
const meta = {
  component: MyButton,
  args: {
    text: "Hello world",
    onPress: fn()
  },
  decorators: [Story => /*#__PURE__*/_jsx(View, {
    style: {
      padding: 16
    },
    children: /*#__PURE__*/_jsx(Story, {})
  })]
};
export default meta;
export const Basic = {};
//# sourceMappingURL=Button.stories.js.map