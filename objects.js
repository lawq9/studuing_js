let user = new Object();
const superUser = {
name : 'root',
' is logged' : true,
//  sayHi: function sayHi(){
// console.log('Hi!')
// }
};
user=superUser;
user.secondName = 'Ivanov';
superUser.age = 25;
superUser.sayHi = function sayHi () {
console.log ("Hello," + this.name + "!");
}
console.log(user);
console.log( superUser);
superUser.sayHi();


superUser.sayHi();
function User(){
 this.firstName = 'Ivan',
 this.secondName= 'Ivanov',
this.age = 25;
}
let admin = new User();
// console.log (admin);