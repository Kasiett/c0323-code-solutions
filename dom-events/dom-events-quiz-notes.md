# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
to see what our code is actually duing , helps debug
- What is the purpose of events and event handling?
 event is a thing which fires when event occurs (user  interacts with the web page)and provides a mechanism by which  an action can automatically be taken
- Are all possible parameters required to use a JavaScript method or function?
not all are reqiered
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
addEventListener() This method allows you to specify the type of event you want to listen for, such as "click" or "keydown", and provide a function that will be called when that event occurs on the specified element.
- What is a callback function?
callback function is a function which is passed as an argument to another function which is then invoked inside the outer function  to complete some kind of routine action
- What object is passed into an event listener callback when the event fires?
 In JavaScript, an event listener callback function is passed an event object as its first argument when the corresponding event fires. This object contains information about the event, such as its type, the target element that triggered the event, and any additional data related to the event.
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
is a property
- What is the difference between these two snippets of code?
    ```js
    element.addEventListener('click', handleClick)

===> passing the function
    ```
    ```js
    element.addEventListener('click', handleClick())

===> calling the function
    ```


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
