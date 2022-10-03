'use strict';

/* Реализуйте функцию `removeElement(array, item)` для удаления элемента `item`
из массива `array`. Например:

```js
const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]
```
или
```js
const array = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElement(array, 'Lima'); // удалит 'Lima' из массива
removeElement(array, 'Berlin'); // не удалит ничего
console.log(array);
// Результат: ['Kiev', 'Beijing', 'Saratov'] */

const array = ['Kiev', 'Beijing', 'Lima', 'Saratov'];

// const array = [1, 2, 3, 4, 5, 6, 7];

const removeElement = (array, item) => {
  const id = array.indexOf(item);
  if (id !== -1) {
    array.splice(id, 1);
  }
  return array;
};

const result = removeElement(array, 'Kiev');
console.log(result);

module.exports = { removeElement };
