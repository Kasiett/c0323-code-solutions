# javascript-local-storage-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do you store data in `localStorage`?
To store data in localStorage, you can use the setItem() method, which allows you to set a key/value pair in the local storage object.
- How do you retrieve data from `localStorage`?
To retrieve data from localStorage, you can use the getItem( ) method, which allows you to get the value for a given key from the local storage object.
- What data type can `localStorage` save in the browser?
localStorage can only save data as JSON strings. This means that any data that needs to be saved in localStorage needs to be converted to a string before it can be stored.

To store non-string data types such as objects and arrays in localStorage, you can use the JSON.stringify() method to convert the data to a JSON string before storing it, and then use the JSON.parse() method to parse the JSON string back into its original form when retrieving it from localStorage.
- When does the `'beforeunload'` event fire on the `window` object?
The 'beforeunload' event is fired on the window object when the user is about to leave the current page. This event is commonly used to prompt the user to confirm that they want to leave the page and to give them the option to save any unsaved changes before leaving.
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
