"use strict";

let $num = 1;
let $str = "0";
let $bool = false;
let $null = null;
let $undef;


let $toNumb = Number();
let $toStr = String();
let $toBool = Boolean();

const person = {firstName:"Andrey", lastName:"Larionov", age:25};
const $cars = ["Saab", "Volvo", "BMW"];
console.log($cars);
$cars.push("Audi");
console.log($cars);

console.log(typeof undefined);
console.log(typeof 0);
console.log(typeof 10n);
console.log(typeof true);
console.log(typeof "foo");
console.log(typeof person);
console.log(typeof Math);
console.log(typeof null);

alert('alert');
let $prompt = prompt('prompt');
console.log($prompt);
let $confirm = confirm();
console.log($confirm);


if(!$bool){
  console.log('true');
} else {
  console.log('false');
}

let $age = 16;
let isChild = $age >= 18 ? false : true;
console.log(isChild);

let $date = prompt();
let day;

switch ($date) {
  case 1:
    day = "Понедельник";
    break;
  case 2:
    day = "Вторник";
    break;
  case 3:
    day = "Среда";
    break;
  case 4:
    day = "Четверг";
    break;
  case 5:
    day = "Пятница";
    break;
  case 6:
    day = "Суббота";
    break;
  case 7:
    day = "Воскресенье";
}

console.log(day);

let i;
for(i = 0; i < 15; i++){
  console.log(i);
}

i = 0;
while (i < 10){
  console.log(i);
  i++;
}

i = 0;
let $data;
do {
  $data += "Число: " + i + "\n";
  i++;
}
while (i < 10);

console.log($data);

for ( let $car of $cars){
  console.log($car);
}

for (let x in person) {
  console.log(x);
}

function def(a, b){
  return a - b;
}

let $res = def(3, 2);
console.log($res);
