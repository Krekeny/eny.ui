const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const projectRoot = __dirname;
const monorepoRoot = path.resolve(projectRoot, "../");

const defaultConfig = getDefaultConfig(projectRoot);

const {
  withStorybook,
} = require("@storybook/react-native/metro/withStorybook");

module.exports = withStorybook(
  {
    ...defaultConfig,
    watchFolders: [monorepoRoot],
    resolver: {
      ...defaultConfig.resolver,
      nodeModulesPaths: [
        path.resolve(projectRoot, "node_modules"),
        path.resolve(monorepoRoot, "node_modules"),
      ],
    },
  },
  {
    enabled: process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true",
  }
);
