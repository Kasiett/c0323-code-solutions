# dom-creation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Does the `document.createElement()` method insert a new element into the page?
No, the document.createElement() method does not insert a new element into the page. It only creates a new HTML element in memory, but it does not add it to the document until you use methods like appendChild() or insertBefore() to append the element to an existing element in the page.
- How do you add an element as a child to another element?
To add an element as a child to another element, you can use the appendChild() method or the insertBefore() method.
- What do you pass as the arguments to the `element.setAttribute()` method?
2 arguments first is stringified 'attribute' second is 'value'
- What steps do you need to take in order to insert a new element into the page?
1- createElement() 2-add textContent if needed or can be skiped same as step => 3- setAttribute 4- appendChild
- What is the `textContent` property of an element object for?
to add textContent
- Name two ways to set the `class` attribute of a DOM element.
setAttribute or Using the className property: You can set the class attribute of a DOM element
- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
Reusability: Defining a function to create a DOM tree makes it easier to reuse the same code in multiple places of your application. You can simply call the function with different parameters to create different DOM trees with the same structure. This can save you time and effort, and also make your code more modular and easier to maintain.
Abstraction: Defining a function to create a DOM tree can help to abstract away the details of the DOM manipulation code, and provide a higher-level interface that is easier to work with. This can make your code more readable and easier to reason about, as you can focus on the structure and functionality of the DOM tree, rather than the low-level details of how it is created.
In addition, defining a function can also make it easier to test and debug your code, as you can isolate the creation of the DOM tree into a separate function that can be tested and debugged independently of the rest of your application logic.

## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:

```javascript
const data = "Howdy";
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
  width: 100%;
}
```
