# eny.ui

A React Native UI component library built with TypeScript, Expo, and Storybook.

## Installation

Install the package directly from GitHub:

```bash
npm install github:Krekeny/eny.ui
# or
yarn add github:Krekeny/eny.ui
```

**Peer Dependencies:**  
`expo`, `react`, `react-native`

The package will build automatically during install. No manual configuration is required.

Works out of the box with Expo's default Metro bundler config.

## Development

### Common Tasks

- `yarn build` / `npm run build` — Build the library (`lib` output via [react-native-builder-bob](https://github.com/callstack/react-native-builder-bob)).
- `yarn generate` / `npm run generate` — Regenerate the index file after adding new components.
- Storybook (on-device):
  - `yarn storybook` / `npm run storybook` — Run Storybook on device/simulator (all platforms)
  - `yarn storybook:android` / `npm run storybook:android` — Run Storybook on Android device/emulator
- Storybook (web):
  - `cd storybook && yarn storybook:web` — Start web Storybook dev server (port 6006)
  - `yarn build-storybook` / `npm run build-storybook` — Build static Storybook for deployment
- After adding new stories: `cd storybook && yarn storybook-generate` — Regenerate stories loader

## License

MIT License © 2025 Krekeny
