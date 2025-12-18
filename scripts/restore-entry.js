// scripts/restore-entry.js
import fs from "fs";
import path from "path";

const packageJsonPath = path.join(process.cwd(), "package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

packageJson.main = "builder/lib/module/index.js";

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + "\n");

console.log("Restored package.json main to:", packageJson.main);
