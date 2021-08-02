//Variable Scope\
//global,local/function,block
//var - function scoped
//let,const - block scoped

let x = 200;
function operation() {
  let test = "I am test";
  console.log("Inside operation");
  console.log(test);
  console.log(x);
}
console.log(x);
operation();

if (x == 200) {
  const y = "Hello";
  var z = 900;
}
console.log(z);
console.log(y);
