const { shapes } = require("./shapes");
const shapeSelection = [
  {
    type: "list",
    name: "shapeSelection",
    message: "select a shape",
    choices: shapes,
    default: "Circle",
  },
  {
    type: "input",
    name: "shapeColor",
    message: "select a color",
    default: "blue",
  },
];

module.exports = { shapeSelection };
