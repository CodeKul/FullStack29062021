//ES6 - let,const,template literals,rest parmeter and spread operator/syntax,destructuring

function displayName(name) {
  //parameter
  console.log("Name is" + name);
}

displayName("PV Sindhu"); //argument
displayName("ABC");

//...varName

//rest parameter - takes multiple elements and combines into single element
function addNumbers(num1, num2, num3, ...numbers) {
  console.log(num1, num2, num3);
  console.log(numbers);
  let sum = 0;
  for (let n of numbers) {
    sum = sum + n;
  }
  console.log(sum);
}
addNumbers(100, 300, 450, 900, 600, 567, 877, 245);

//spread- take 1 element and spread it out into multiple elements
let brands = ["Nike", "Apple", "Microsoft", "Reebok", "Patanjali"];

function displayBrands(a, b, c, d, e, f, g) {
  console.log(g);
}

displayBrands("Samsung", ...brands, "Amazon"); //spread
