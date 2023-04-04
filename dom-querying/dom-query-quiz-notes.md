# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
a method for developers to write code and see what the code is doing.
- What is a "model"?
Model is a copy of a real sourse.
- Which "document" is being referred to in the phrase Document Object Model?
document which is going to be rendered, html document
- What is the word "object" referring to in the phrase Document Object Model?
the model (DOM tree) made of objects
- What is a DOM Tree?
It is a model of web page in the browser and stored in a browsers memory.
- Give two examples of `document` methods that retrieve a single element from the DOM.
getElementByID(); querySelector('css selector')
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
getElementByTagName(); querySelectorAll()
- Why might you want to assign the return value of a DOM query to a variable?
to save the browser looking through the DOM tree to find the same elements again. - caching the selection.
- What `console` method allows you to inspect the properties of a DOM element object?
console.dir()
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
Because Javascript takes more time to be rendered, and placing script tag at the bottom of HTML page gives and info to a DOM tree how the page should look at the end.
- What does `document.querySelector()` take as its argument and what does it return?
 string form of css selectors and returns first matching element
- What does `document.querySelectorAll()` take as its argument and what does it return?
 string form of css selectors and returns all matching elements

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
