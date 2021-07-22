//Declaration,Initialization,Assignment
//var,let,const
//var - can be redeclared
//let - cannot be redeclared or reinitialized
//const - cannot be redeclared or assigned value to

var x; //Declaration
x = 20; //Assignment
var x = 500; //Initialization

var test = 1000;

var test = 10;
test = 250;
console.log(test);

// let result = 100;
// let result = 30;
// console.log(result);

let result = 400;
result = 45;
console.log(result);

const y = 130;

console.log(y);
console.log(typeof result);

var t;
console.log(t);
var z = null;
console.log(z);

let marks = "My marks are " + result + " and your marks are " + test;
console.log(marks);
//Datatypes - Number,String,Boolean,undefined,null
//Array,objects

let str = `My marks are ${result} and your marks are ${test}`;
console.log(str);
//Template Literals - ``
let positive = true;
if (positive == true) {
  console.log("Admit");
} else {
  console.log("Go home");
}

