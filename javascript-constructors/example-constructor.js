function ExampleConstructor() {}
console.log('ExampleConstructor.prototype: ', ExampleConstructor.prototype);

console.log('typeof ExampleConstructor.prototype: ', typeof ExampleConstructor.prototype);
const exampleConstructor1 = new ExampleConstructor();
console.log('exampleConstructor1: ', exampleConstructor1);

const InstanceOfExampleConstructor = exampleConstructor1 instanceof ExampleConstructor;
console.log('InstanceOfExampleConstructor: ', InstanceOfExampleConstructor);
