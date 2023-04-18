# javascript-this-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is `this` in JavaScript?
'this' is an implicit parameter of all JavaScript functions (refers calling object)
- What does it mean to say that `this` is an "implicit parameter"?
it means that it is available in a function's code block even though it was never included in the function's parameter list or declared with var.
- _When_ is the value of `this` determined in a function; **call time** or **definition time**?
the value of this is determined at call time.
- What does `this` refer to in the following code snippet?
    ```js
    const character = {
      firstName: 'Mario',
      greet: function () {
        const message = 'It\'s-a-me, ' + this.firstName + '!';
        console.log(message);
      }
    };
    ```
it reterns the value of the firstName property inside charachter obj, meaning that in this case it is a character object before call
- Given the above `character` object, what is the result of the following code snippet? Why?
    ```js
    character.greet();
    ```
'It's-a-me, Mario !this refers to a charecter obj
- Given the above `character` object, what is the result of the following code snippet? Why?
    ```js
    const hello = character.greet;
    hello();
    ```
output ==> it's me 'undefind ' since it is refering to a window

- How can you tell what the value of `this` will be for a particular function or method **definition**?
if there is some object on left side of period it is obj if not it will be global window
- How can you tell what the value of `this` is for a particular function or method **call**?
the value of this can be recognized as "the object to the left of the dot" when the function is called (as a method).

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
