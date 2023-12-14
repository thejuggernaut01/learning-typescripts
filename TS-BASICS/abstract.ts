// Abstract class
abstract class Shape {
  // Abstract method
  abstract calculateArea(): number;

  // Non-abstract method
  displayArea(): void {
    console.log(`Area: ${this.calculateArea()}`);
  }
}

// Derived class (concrete class)
class Circle extends Shape {
  // Implementation of the abstract method
  calculateArea(): number {
    const radius = 5;
    return Math.PI * radius * radius;
  }
}

// Derived class (concrete class)
class Rectangle extends Shape {
  // Implementation of the abstract method
  calculateArea(): number {
    const width = 4;
    const height = 6;
    return width * height;
  }
}

// Usage
const circle = new Circle();
// circle.displayArea();

const rectangle = new Rectangle();
// rectangle.displayArea();

// Another Example
abstract class StreetFighter {
  constructor() {}

  abstract getSpecialAttack(): string;
  abstract get name(): string;

  move() {}
  fight() {
    console.log(`${this.name}, attack with ${this.getSpecialAttack()}`);
  }
}

class Ryu extends StreetFighter {
  getSpecialAttack(): string {
    return "Hadoken";
  }
  get name(): string {
    return "Ryu";
  }
}

class ChunLi extends StreetFighter {
  getSpecialAttack(): string {
    return "Lightening Kick";
  }
  get name(): string {
    return "Chun-Li";
  }
}

const ryu = new Ryu();
ryu.fight();

const chunLi = new Ryu();
chunLi.fight();
