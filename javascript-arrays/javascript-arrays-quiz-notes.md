# javascript-arrays-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are arrays used for?
Arrays are used to store and organize collections of data
Arrays are essentially objects that have numbered indexes (starting from zero) and a length property. The values stored in an array can be of any data type, including other arrays or objects.
- Describe array literal notation.
Array literal notation is a way of creating an array  by enclosing a comma-separated list of values within square brackets []. Each value in the list becomes an element in the array, and the elements are separated by commas.

- How are arrays different from "plain" objects?
While arrays and objects share some similarities as both are objects, they have important differences in their indexing, order, length, methods, and use case, which makes them useful for different purposes.
Indexing: Arrays are indexed by numbers, starting at 0, while objects are indexed by strings. This means that you can use bracket notation with a number to access elements in an array, whereas with an object you need to use a string key to access its properties.

Order: Arrays preserve the order of their elements, whereas objects do not. The order of the properties in an object is not guaranteed and may vary across different JavaScript engines and implementations.

Length: Arrays have a length property that reflects the number of elements in the array, while objects do not have a length property.

Methods: Arrays have built-in methods for manipulating their elements, such as push(), pop(), slice(), concat(), and others. Objects do not have these methods, although you can define your own methods for an object using prototypal inheritance.

Use case: Arrays are typically used to store and manipulate ordered collections of data, such as lists, while objects are used to store and access unordered collections of data, such as sets of key-value pairs.
- What number represents the first index of an array?
Zero

- What is the `length` property of an array?
 The length property of an array  is a built-in property that returns the number of elements in the array. It reflects the highest index in the array plus one, which means that it is always one greater than the highest index in the array.


- How do you calculate the last index of an array?

You can calculate the last index of an array by subtracting 1 from the length property of the array.


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
