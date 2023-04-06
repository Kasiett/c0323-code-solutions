# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
In JavaScript, event.target is a property of the event object that refers to the element on which the event was originally triggered.
- Why is it possible to listen for events on one element that actually happen its descendent elements?
It is possible to listen for events on one element that actually happen on its descendant elements because of a process called "event bubbling".
- What DOM element property tells you what type of element it is?
The tagName property returns a string that represents the tag name of the element in uppercase letters.
- What does the `element.closest()` method take as its argument and what does it return?
The element.closest() method takes a single argument, which is a string representing a selector, and returns the closest ancestor element of the current element (including the current element itself) that matches the specified selector. If no ancestor element matches the selector, the method returns null.
- How can you remove an element from the DOM?
remove() method
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?

'Event delegation' - is a technique where you add a single event listener to a parent element that will handle events for all its child elements. When an event occurs on a child element, the event bubbles up to the parent element, which can then handle the event based on the target element that triggered the event.

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
