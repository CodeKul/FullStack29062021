//functions
//function expression,arrow function

function greeting(msg) {
  // parameters
  console.log(msg);
}

greeting("Good Morning"); //arguments
greeting("Hello");

function add(x, y) {
  console.log(x + y);
}

add(50, 60);
add(100, 400);

//Function Expression

let addition = function (a, b) {
  console.log(a + b);
};

console.log(addition);
addition(80, 50);

//Arrow Function

let sum = (p, q) => {
  console.log(p + q);
};

console.log(sum);
sum(900, 100);

//When you a function as a parameter to another function that is known as callback function.
