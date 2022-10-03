'use strict';

/* Улучшите функцию из предыдущего задания для удаления нескольких элементов из
массива `removeElements(array, item1, ... itemN)`. Например:

```js
const array = [1, 2, 3, 4, 5, 6, 7];
removeElements(array, 5, 1, 6);
console.log(array);
// Результат: [2, 3, 4, 7]
```
или
```js
const array = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElements(array, 'Lima', 'Berlin', 'Kiev');
console.log(array);
// Результат: ['Beijing', 'Saratov'] */

// Remove multiple items from array modifying original array

// const array = [1, 2, 3, 4, 5, 6, 7];

const array = ['Kiev', 'Beijing', 'Lima', 'Saratov'];

const removeElements = (array, ...items) => {
  for (let i = 0; i < items.length; i++) {
    const id = array.indexOf(items[i]);
    if (id !== -1) {
      array.splice(id, 1);
    }
  }
  return array;
};

// const result = removeElements(array, 5, 1, 6);

const result = removeElements(array, 'Lima', 'Berlin', 'Kiev');
console.log(result);


// Решение

/* const removeElements = (array, ...items) => {
  for (const item of items) {
    const index = array.indexOf(item);
    if (index !== -1) array.splice(index, 1);
  }
}; */

module.exports = { removeElements };
