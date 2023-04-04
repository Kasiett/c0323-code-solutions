# dom-manipulation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `className` property of element objects?
The className property of the Element interface gets and sets the value of the class attribute of the specified element.
- How do you update the CSS class attribute of an element using JavaScript?
To update the CSS class attribute of an element using JavaScript, you can use the className property of the element
first select the element with the id using the getElementById method,then update the className property of the element to "new-class". This replaces the existing "old-class" with "new-class" in the class attribute of the element.
- What is the `textContent` property of element objects?
The textContent property of the Node interface represents the text content of the node and its descendants.
- How do you update the text within an element using JavaScript?
To update the text within an element using JavaScript, you can use the textContent property of the element
we first select the element with the id using the getElementById method,then update the textContent property of the element to "new text". This will replace the existing "text"  with "new text" within the element.
- Is the `event` parameter of an event listener callback always useful?
The event parameter of an event listener callback is not always useful in JavaScript.
- Would this assignment be simpler or more complicated if we didn't use a variable to keep track of the number of clicks?
more complicated
- Why is storing information about a program in variables better than only storing it in the DOM?
 you will save it in the program so when the browser refresh it won't lose the data


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
