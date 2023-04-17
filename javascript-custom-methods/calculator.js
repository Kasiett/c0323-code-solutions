/* exported calculator */
const calculator = {
  add: function add(x, y) {
    const result = x + y;
    return result;
  },
  subtract: function subtract(x, y) {
    const result = x - y;
    return result;
  },
  multiply: function multiply(x, y) {
    const result = x * y;
    return result;
  },
  divide: function divide(x, y) {
    const result = x / y;
    return result;
  },
  square: function square(x) {
    const result = x * x;
    return result;
  },
  sumAll: function sumAll(numbers) {
    const num = 0;
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
      result += num + numbers[i];
    }
    return result;
  },
  getAverage: function getAverage(numbers) {
    const num = 0;
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total += num + numbers[i];
    }
    const result = total / numbers.length;
    return result;
  }
};
