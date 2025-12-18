// scripts/switch-entry.js
import fs from "fs";
import path from "path";

const packageJsonPath = path.join(process.cwd(), "package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

// Always set to expo-router/entry for Storybook
packageJson.main = "expo-router/entry";

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + "\n");

console.log("Switched package.json main to:", packageJson.main);
