// utils.js
// Utility functions for common tasks
// Author: [TuoNome] - For educational use only

const Utils = {
  // Generates a random integer between min (inclusive) and max (inclusive)
  randomInt(min, max) {
    if (typeof min !== 'number' || typeof max !== 'number') {
      throw new TypeError('Arguments must be numbers');
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  // Debounce function to limit how often a function can fire
  debounce(fn, delay) {
    let timeoutId;
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args), delay);
    };
  },

  // Capitalizes the first letter of a string
  capitalize(str) {
    if (typeof str !== 'string') return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  },

  // Simple deep clone for objects/arrays (not handling circular refs)
  deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
};

// Example usage:
// console.log(Utils.randomInt(1, 10));
// const debounced = Utils.debounce(() => console.log('Debounced!'), 300);
// debounced();
// console.log(Utils.capitalize('nomadedigi'));
// const clone = Utils.deepClone({a:1, b:[2,3]});

export default Utils;
