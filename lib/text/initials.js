const inquirer = require("inquirer");
const MaxLengthInputPrompt = require(`inquirer-maxlength-input-prompt`);

inquirer.registerPrompt("maxlength-input", MaxLengthInputPrompt);

const initials = [
  {
    type: "maxlength-input",
    name: "logoInitials",
    message: "Enter initials",
    default: "ABC",
    maxLength: 3,
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter color",
    default: "white",
  },
];
function getNumOfInitials(initials) {
  return initials.length;
}
module.exports = { initials, getNumOfInitials };
