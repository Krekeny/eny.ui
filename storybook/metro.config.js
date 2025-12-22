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
      resolveRequest: (context, moduleName, platform) => {
        // Force React and React Native to resolve from storybook's node_modules only
        if (
          moduleName === "react" ||
          moduleName === "react-native" ||
          moduleName.startsWith("react/") ||
          moduleName.startsWith("react-native/")
        ) {
          // For web platform, resolve react-native to react-native-web
          if (platform === "web" && moduleName === "react-native") {
            try {
              const resolved = require.resolve("react-native-web", {
                paths: [path.resolve(projectRoot, "node_modules")],
              });
              return {
                filePath: resolved,
                type: "sourceFile",
              };
            } catch (e) {
              // Fall back to default resolution
            }
          }

          try {
            const resolved = require.resolve(moduleName, {
              paths: [path.resolve(projectRoot, "node_modules")],
            });
            return {
              filePath: resolved,
              type: "sourceFile",
            };
          } catch (e) {
            // Fall back to default resolution if not found in storybook
          }
        }
        // Use default resolution for other modules
        return context.resolveRequest(context, moduleName, platform);
      },
    },
  },
  {
    enabled: process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true",
  }
);
