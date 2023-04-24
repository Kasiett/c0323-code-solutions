/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */
class Square extends Shape {
  constructor(width) {
    const area = width * width;
    const perimeter = 4 * width;
    super(area, perimeter);
    this.width = width;
  }

  describe() {
    return super.describe() + ' with width: ' + this.width;
  }
}

const square = new Square(5);
console.log(square.describe());
