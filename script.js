// let $num = 1;
// let $str = "0";
// let $bool =false;
// let $null = null;
// let $undef;

// let $toNumb = Number($str);
// console.log($toNumb);
// let $toStr = String($bool);
// console.log($toStr);
// let $toBool = Boolean($undef);
// console.log($toBool);

//  const person = { firstName: "Laura", lastName: "Baizakova"};
// const $cars = [ "Saab", "Volvo", "BMW"];
// // console.log($cars);
// // $cars.push("Audi");
// // console.log ($cars);

// // console.log (typeof undefined);
// // console.log (typeof 0);
// // console.log (typeof 10n);
// // console.log (typeof true);
// // console.log (typeof person);
// //  let isChild = true;
// // let $age = 70;
// // if ($age < 18) {
// //     alert("Вам повезло, вы еще ребенок!!!");
// // } else if (18 <= $age && $age < 65) {
// //     alert('Вам еще работать и работать!!!');
// // } else {
// //     alert("Вы уже пенсионер!");
// // }
// // let x = prompt("Введите число");
// // let $res = (x>5) ? true : false;
// // console.log($res);
// // let $date = 5;
// // let $day;

// // switch ($date) {
// // case 1: 
// // day = "Понедельник";
// // break;
// // case 2: 
// // day = "Вторник";
// // break;
// // case 3: 
// // day = "Среда";
// // break;
// // case 4: 
// // day = "Четверг";
// // break;
// // case 5: 
// // day = "Пятница";
// // break;
// // case 6: 
// // day = "Суббота";
// // break;
// // case 7: 
// // day = "Воскресенье";
// // break;
// // }
// // console.log(day)
// // let i;
// // for(i = 0; i < 15; i++){
// // console.log('Loop for:',i);
// // }
// // i = 0;
// // while (i < 10) {
// // console.log("Loop white:",i);
// // i++;
// // }
// // i = 0;
// // let $data = "\n";
// // do{
// // $data += "Число:"+ i + "\n";
// // i++;
// // }while (i < 10);
// // console.log($data);
// console.time();
// let a = 1000000000000000 ** 10000000000000000000000000000000
// for(let i; i<a;i++){
// console.log ();
// }
// console.timeEnd();

// // function sum(a,b){
// // let res = a+b;
// // return res;
// // }
// // console.log (sum (15, 20));
// // let $pi = Math.PI;
// // console.log($pi);
// // let $floor = Math.floor(45.65);
// // console.log($floor);
// // let $round = Math.round(42.55);
// // console.log($round);
// // let $random = Math.random();
// // console.log($random);

// let fruits = ['pineaple'];
// let autos = new Array();
// let numbers = [
//   [1, 154, 65],
//   [235, 16, 145]
//  ]
// let newNumbers = [1, 155, 42, 4, 315, 310];

// fruits.push('apple', 'cherry', 'pear');
// // console.log(fruits)
// // fruits.splice(2, 15, 'orange');
// // console.log(fruits);
// // let someFruits = ['apple, apple, apple, apple'];
// //  let index = someFruits.indexOf('apple');
// //  let lastIndex = someFruits.indexOf('apple');
// //  let nullIndex = someFruits.indexOf('cherry');
// // console.log(index,lastIndex,nullIndex );
// // // console.log(fruits.length);
// // fruits.reverse();
// // console.log(fruits);
// // let newFruits = fruits.slice(2,3);
// // //  fruits.shift();
// // //  fruits.pop();
// //  console.log(newFruits);
// //  fruits.unshift('mandarin', 'blueberry');
// // fruits.shift();
// // console.log(newNumbers);
// // let start = 0;
// // let someArray = newNumbers.reduce((elem,start) => elem + start);
// // let map = newNumbers.map((elem) => elem * 2);
// // console.log(map);
// // let index = fruits.indexOf('apple');
// console.log(fruits)
// newNumbers.sort();
// let all_user = [
// ['Dima', 1234],
// ['Fima',5678],
// ['Cola',9012],
// ];
// let user_name = prompt ("Введите свой username");
// flag = true;
// let user_psw;
// while(flag){
// for(let user of all_user){
// console.log(user);
//  if(user.indexOf(user_name)!= -1){
//   alert('Ваш логин верный');
//  user_psw =Number(prompt ("Введите пароль"));
// if(user.indexOf(user_psw)!=-1){
//  alert('Удачно');
//  flag = false;
//  }else{
//  user_psw = prompt ("Неверный пароль. Введите верный пароль");
//  }
//  }else{
//  user_name = prompt ("Пользователь не найден. Введите свой username");
// }
// }
// }


 function sum(...args){
  let result = 0;
  for( let key in args){
  result = result + args[key];
  }
  return result;
  }
let newSum = sum;
console.log(newSum(15, 67,907));


let name = 'Ivan';
function sayHi(name){
 console.log ("Hi," + name + '!');
}
function sayGoodBye(){
  console.log ("Good bye," + name + "!");
}
function functionWithCallBack(name, yes, no) {
  let isAuthorized = confirm ();
  console.log()
  if(isAuthorized){
    yes(name);
  }else{
  no(name);
  }
}
functionWithCallBack(sayHi,sayGoodBye)
