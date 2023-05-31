const { shapeClasses } = require("./shapeClasses");
const shapes = [
  {
    name: "circle",
    value: `circle cx='150' cy='100' r='100'`,
  },
  {
    name: "triangle",
    value: `polygon points="150, 18 244, 182 56, 182"`,
  },
  {
    name: "square",
    value: `rect x="62.5" y="12.5" rx="10" ry="10" width="175" height="175"`,
  },
];
module.exports = { shapes };
