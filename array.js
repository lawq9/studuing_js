let fruits = [];
let autos = new Array();
let numbers = [
  [1, 154, 65],
  [235, 16, 145]
]
let newNumbers = [1, 155, 42, 4, 315, 310];

fruits.push('apple', 'cherry', 'pear');
fruits.splice(2, 0, 'orange');
numbers.length;
fruits.reverse();
fruits.unshift('mandarin', 'blueberry');
fruits.shift();
fruits.pop();
fruits.slice(2,3);
newNumbers.reduce((elem) => elem *2);
let map = newNumbers.map((elem) => elem * 2);
let index = fruits.indexOf('apple');

let lastIndex = fruits.indexOf('cherry');
fruits.forEach(console.log);
fruits.forEach(element => console.log(element));
newNumbers.sort();
