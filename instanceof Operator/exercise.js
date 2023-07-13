class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  constructor(area) {
    this.area = area;
  }
  static calculate(el) {
    if (el instanceof Square) {
      return el.side * 4;
    }
    if (el instanceof Rectangle) {
      return el.height * el.width;
    }
    if (el instanceof Circle) {
      return Math.PI * (el.radius * el.radius);
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));
