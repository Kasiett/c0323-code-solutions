/* exported whatIsThis, someObject */

function whatIsThis() {
  return this;
}

const someObject = {
  aProperty: 'hullo there',
  getThis: function () {
    return this;
  }
};
