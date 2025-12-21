const fs = require("fs");
const path = require("path");

const COMPONENTS_DIR = path.join(__dirname, "../src/components");
const INDEX_FILE = path.join(__dirname, "../src/index.ts");

const generateIndex = () => {
  if (!fs.existsSync(COMPONENTS_DIR)) {
    console.error("Components directory not found!");
    process.exit(1);
  }

  const files = fs.readdirSync(COMPONENTS_DIR);

  const exports = files
    .filter((file) => {
      return (
        (file.endsWith(".tsx") || file.endsWith(".ts")) &&
        !file.endsWith(".stories.tsx") &&
        !file.endsWith(".test.tsx") &&
        !file.endsWith(".spec.tsx")
      );
    })
    .map((file) => {
      const componentName = path.parse(file).name;
      return `export * from './components/${componentName}';`;
    });

  const content = `// This file is auto-generated. Do not edit manually.\n\n${exports.join(
    "\n"
  )}\n`;

  fs.writeFileSync(INDEX_FILE, content);
  console.log(
    `Successfully generated index.ts with ${exports.length} exports.`
  );
};

generateIndex();
