# javascript-forms-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What event is fired when a user places their cursor in a form control?
onfocus , focus
- What event is fired when a user's cursor leaves a form control?
blur
- What event is fired as a user changes the value of a form control?
change onChange input
- What event is fired when a user clicks the `"submit"` button within a `<form>`?
submit
- What does the `event.preventDefault()` method do?
The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. for ex: Clicking on a "Submit" button, prevent it from submitting a form
- What does submitting a form without `event.preventDefault()` do?
If you submit a form without calling event.preventDefault(), the default behavior of the form submission will occur. This means that the browser will send a request to the server with the form data in the URL query string or in the request body, depending on the HTTP method used by the form (GET or POST).
- What property of a form element object contains all of the form's controls.
The elements property of a form element object contains all of the form's controls.
- What property of a form control object gets and sets its value?
The value property of a form control object is used to get and set its current value.
- What is one risk of writing a lot of code without checking to see if it works so far?
it can lead to the accumulation of errors or bugs in the code. These errors can be difficult to identify and fix later on, especially if the codebase becomes large and complex.
- What is an advantage of having your console open when writing a JavaScript program?
Debugging, Testing, Logging, perfomance
In general, having your console open when writing JavaScript code is a best practice because it can help you identify and fix errors more quickly, test your code more effectively, and optimize your code for better performance.
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
