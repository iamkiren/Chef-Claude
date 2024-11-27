const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);

if (args.length !== 1) {
  console.error("Usage: bun run generate-component <ComponentName>");
  process.exit(1);
}

const componentName = args[0];
const componentDir = path.join(__dirname, "src", "components", componentName);

if (fs.existsSync(componentDir)) {
  console.error(`Component "${componentName}" already exists.`);
  process.exit(1);
}

// Create component directory
fs.mkdirSync(componentDir, { recursive: true });

// Create JSX file
const jsxContent = `
import React from 'react';
import './${componentName}.css';

const ${componentName} = () => {
  return (
    <div className="${componentName}">
      <h1>${componentName}</h1>
    </div>
  );
};

export default ${componentName};
`;
fs.writeFileSync(path.join(componentDir, `${componentName}.jsx`), jsxContent);

// Create CSS file
const cssContent = `
.${componentName} {
  /* Add styles for ${componentName} here */
}
`;
fs.writeFileSync(path.join(componentDir, `${componentName}.css`), cssContent);

console.log(`Component "${componentName}" created successfully!`);
