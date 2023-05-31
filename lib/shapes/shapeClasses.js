class Shape {
  constructor(color) {
    this.color = color;
  }
}

class Circle {
  render() {
    return `<circle cx='25' cy='75' r='20' fill='${this.color}'/>`;
  }
  setColor(color) {
    this.color = color;
  }
}

class Triangle {
  constructor(color) {
    this.color = color;
  }
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill='${this.color}'/>`;
  }
  setColor(color) {
    this.color = color;
  }
}

class Square {
  constructor(color) {
    this.color = color;
  }
  render() {
    return `<rect x="60" y="10" rx="10" ry="10" width="100" height="100" fill='${this.color}'/>`;
  }
  setColor(color) {
    this.color = color;
  }
}

module.exports = { Circle, Triangle, Square };
