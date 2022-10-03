'use strict';

/* Функция `difference(array1, array2)` должна находить разницу между
массивами, т.е. возвращать новый массив, содержащий значения, которые
содержались в `array1`, но не содержались в `array2`. Примеры вызова:

```js
const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];
const result = difference(array1, array2);
console.log(result);
// Результат: [7, -2, 5]
```

```js
const array1 = ['Beijing', 'Kiev'];
const array2 = ['Kiev', 'London', 'Baghdad'];
const result = difference(array1, array2);
console.log(result);
// Результат: ['Beijing'] */


// Find difference of two arrays
// elements from array1 that are not includes in array2

// const array1 = [7, -2, 10, 5, 0];
// const array2 = [0, 10];

const array1 = ['Beijing', 'Kiev'];
const array2 = ['Kiev', 'London', 'Baghdad'];

const difference = (a, b) => {

  const s1 = new Set(a);
  const s2 = new Set(b);

  const s = new Set([...s1].filter((item) =>
    !s2.has(item)));

  const n = Array.from(s);

  return n;

};

const result = difference(array1, array2);
console.log(result);

// Решение

/* const difference = (array1, array2) => {
  const array = [];
  for (const item of array1) {
    if (!array2.includes(item)) {
      array.push(item);
    }
  }
  return array;
};
*/

module.exports = { difference };
