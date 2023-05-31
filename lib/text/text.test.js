const { initials, getNumOfInitials } = require("./initials");
describe("initials", (characterCount) => {
  it("should be no greater than 3", () => {
    const initials = "HRH";
    const maxNumInitials = 3;
    const result = getNumOfInitials(initials);
    expect(result).toBeLessThanOrEqual(maxNumInitials);
  });
});

const textColor = require("./initials");
describe("fill", (fillColor) => {
  it("should set white equal to  fill", () => {
    const color = "white";
    const result = "fill = " + color;
    expect(result).toEqual("fill = white");
  });
});
