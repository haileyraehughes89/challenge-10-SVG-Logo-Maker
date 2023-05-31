const { initials } = require("./lib/text/initials.js");
const { shapeSelection } = require("./lib/shapes/shapeSelection.js");
const inquirer = require(`inquirer`);
const MaxLengthInputPrompt = require(`inquirer-maxlength-input-prompt`);
const generateSVG = require(`./generateSVG`);
const fs = require("fs");

function askQuestions() {
  inquirer.prompt(initials).then((responses) => {
    inquirer.prompt(shapeSelection).then((answers) => {
      console.log({ responses, answers });
      const logo = generateSVG({ ...responses, ...answers });
      fs.writeFile("logoSVG.svg", logo, function (err) {
        console.log(err);
      });
    });
  });
}

function main() {
  askQuestions();
}

main();
