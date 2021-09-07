let x = 3;

switch (x) {
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two");
    break;
  case 3:
    console.log("Three");
    break;
  case 4:
    console.log("Four");
    break;
  default:
    console.log("Invalid input");
}

let num1 = 100;
let num2 = 200;
let op = "multiplication";
switch (op) {
  case "add":
    console.log(num1 + num2);
    break;
  case "subtract":
    console.log(num1 - num2);
    break;
  case "division":
    console.log(num1 / num2);
    break;
  default:
    console.log("Invalid operation");
}
