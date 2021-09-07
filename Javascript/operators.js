//Arithmetic  ->  +,-,/,*,%
// Operators -> && ,|| ,!
//Logical/Comparison/Relational Operators ->  >,<,=,==,===,!=,!==
//Ternary Operator -> ? :
//Increment Decrement - ++ ,--
let a = 100;
let b = 30;
let result = a + b - (a / b) * 5;
console.log(result);
// 10/2
// 5 -quotient
// 0 -remainder
console.log(15 % 2); // returns remainder
//a+b-3.3*5
//100+30 - 16.5
//130-16.5
//

// ==  -> matches the value only
//=== -> matches value as well as datatype
//!== -> opposite of ===
let x = 100;
let y = "100";
// if (x !== y) {
//   console.log("Equal");
// } else {
//   console.log("Not Equal");
// }

// if (x !== y) {
//   console.log("Not Equal");
// } else {
//   console.log(" Equal");
// }

if (x > 0 || x === y) {
  console.log("Equal");
} else {
  console.log("Not");
}

let active = false;
if (active) {
  console.log("INACTIVE");
} else {
  console.log("ACTIVE");
}

let age = 30;
// if (age > 18) {
//   console.log("Adult");
// } else {
//   console.log("Child");
// }

//condition ? '' : ''
age > 18 ? console.log("Adult") : console.log("Child");

let i = 5;
console.log(i--); //Post increment
console.log(i);
console.log(--i); //Pre increment
