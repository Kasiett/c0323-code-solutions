/* exported calculator */
const calculator = {
  add: function (x, y) {
    const result = x + y;
    return result;
  },
  subtract: function (x, y) {
    const result = x - y;
    return result;
  },
  multiply: function (x, y) {
    const result = x * y;
    return result;
  },
  divide: function (x, y) {
    const result = x / y;
    return result;
  },
  square: function (x) {
    const result = x * x;
    return result;
  },
  sumAll: function (numbers) {
    const num = 0;
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
      result += num + numbers[i];
    }
    return result;
  },
  getAverage: function (numbers) {
    const num = 0;
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total += num + numbers[i];
    }
    const result = total / numbers.length;
    return result;
  }
};
