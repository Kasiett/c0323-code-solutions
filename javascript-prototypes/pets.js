/* exported doggo, kitteh */

/**
 * HTMLMediaElements (such as <audio>) are described in detail on MDN.
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
 */

const doggo = {
  rating: 11,
  type: 'good boi',
  sound: document.querySelector('audio#bork')
};

const kitteh = {
  rating: 12,
  type: 'floofy kitty',
  sound: document.querySelector('audio#mrow')
};

const petPrototype = {
  speak: function () {
    this.sound.currentTime = 0;
    this.sound.play();
  },
  getDescription: function () {
    const description = this.rating + ' out of 10 ' + this.type;
    return description;
  }
};

Object.setPrototypeOf(doggo, petPrototype);
Object.setPrototypeOf(kitteh, petPrototype);
