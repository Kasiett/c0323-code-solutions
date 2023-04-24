/* exported Shape */
class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  describe() {
    return 'Shape with area: ' + this.area + ' and perimeter: ' + this.perimeter;
  }
}

const shape = new Shape(10, 20);
console.log(shape.describe());
