//variable declarations and functions are moved/hoisted to top

// var number; //declaration
// number = 20; //assignment
console.log(number);
var number = 100; //initialization

//var number
//console.log(number)
//number=20

d = 6;
console.log(d);
var d;

//var d
//d =6
//console.log(d)

// s = 100;
// console.log(s);
// let s;

hoistme();
function hoistme() {
  console.log("I am hoisted");
}

//arrow

var greet = () => {
  console.log("Good Evening");
};
greet();
//function expression
display();
var display = function () {
  console.log("Inside display");
};
