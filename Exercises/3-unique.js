'use strict';

/* Функция `unique(array)` должна возвращать новый массив, не содержащий
дубликатов. Примеры вызова:

```js
const result = unique([2, 1, 1, 3, 2]);
console.log(result);
// Результат: [2, 1, 3]
```

```js
const result = unique(['top', 'bottom', 'top', 'left']);
console.log(result);
// Результат: ['top', 'bottom', 'left'] */


// Create and return a new array without duplicate elements
// Don't modify initial array


// const unique = (array) => [];

const unique = (array) => {

  const setArray = new Set(array);

  const newArray = Array.from(setArray);

  return newArray;


};

const result = unique(['top', 'bottom', 'top', 'left']);
console.log(result);

// Решение 

/* const unique = (array) => {
  const result = [];
  for (const item of array) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
}; */

module.exports = { unique };
