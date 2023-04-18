# javascript-prototypes-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What kind of inheritance does the JavaScript programming language use?
JavaScript uses prototype-based inheritance, also known as delegation-based inheritance, as its primary mechanism for object inheritance. In JavaScript, objects are linked to other objects via prototypes, rather than through traditional class-based inheritance as found in some other programming languages.
- What is a prototype in JavaScript?
In JavaScript, a prototype is an object that serves as a template or blueprint for other objects to inherit properties and methods. Every object in JavaScript has a prototype, which is an internal reference to another object that acts as a fallback for property and method lookups.

In other words, a prototype is an object from which other objects can inherit properties and methods. When an object is accessed for a property or a method that it does not have, JavaScript looks for that property or method in its prototype chain, which is a chain of objects linked together via prototypes, until it finds the property or method or reaches the end of the chain.

JavaScript's prototype-based inheritance allows for dynamic and flexible object-oriented programming, as objects can be extended and modified during runtime by modifying their prototypes, and objects can inherit from multiple prototypes, allowing for multiple inheritance-like behavior.
- How is it possible to call methods on strings, arrays, and numbers even though those methods don't actually exist on strings, arrays, and numbers?
In JavaScript, strings, arrays, and numbers are primitive types, which are not objects. However, JavaScript automatically wraps primitive values in temporary objects when methods are called on them. This process is known as "autoboxing" or "boxing".

When a method is called on a primitive value, JavaScript automatically converts the primitive value into an object of the corresponding object wrapper class (String, Array, or Number), and then the method is called on that temporary object. Once the method call is completed, the temporary object is discarded.
- If an object does not have it's own property or method by a given key, where does JavaScript look for it?
JavaScript looks for it in its prototype chain. In JavaScript, objects are linked to other objects via prototypes, and this chain of linked objects is known as the prototype chain.
When a property or method is accessed on an object, JavaScript first checks if the object itself has that property or method. If not, it looks for it in the prototype of the object. If the property or method is still not found, JavaScript continues to look for it in the prototype's prototype (i.e., the prototype of the prototype), and so on, until it reaches the end of the prototype chain, which is typically the top-level Object.prototype.

This process of looking for properties or methods in the prototype chain is called "prototype chaining" or "prototype delegation".
## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:
```javascript
const data = "Howdy"
```

for HTML:
```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:
```css
div {
  width:100%
}
```
