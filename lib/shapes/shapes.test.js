const { Circle, Triangle, Square } = require("./shapeClasses");

describe("fill", (fillColor) => {
  it("should set blue equal to  fill", () => {
    const circle = new Circle();
    circle.setColor("blue");
    expect(circle.render()).toEqual(
      `<circle cx='25' cy='75' r='20' fill='blue'/>`
    );
  });
});
describe("fill", (fillColor) => {
  it("should set blue equal to fill", () => {
    const triangle = new Triangle();
    triangle.setColor("blue");
    expect(triangle.render()).toEqual(
      `<polygon points="150, 18 244, 182 56, 182" fill='blue'/>`
    );
  });
});
describe("fill", (fillColor) => {
  it("should set blue equal to fill", () => {
    const square = new Square();
    square.setColor("blue");
    expect(square.render()).toEqual(
      `<rect x="60" y="10" rx="10" ry="10" width="30" height="30" fill='blue'/>`
    );
  });
});
