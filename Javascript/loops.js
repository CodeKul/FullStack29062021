//for,while,do..while,for..of,for..in
//for(iterator initialization;condition;increment/decrement)

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log("Outside the loop");

let arr = [10, 20, 40, 50];

let sum = 0;
for (let j = 0; j < arr.length; j++) {
  sum = sum + arr[j];
}
console.log(sum);

//while loop
let output = 0;
let i = 0;
while (i < arr.length) {
  output = output + arr[i];
  i++;
}

//do..while
let k = 0;
let addition = 0;
do {
  addition = addition + arr[k];
  k++;
} while (k < arr.length);

//for...of  --> Arrays
let months = ["January", "February", "March", "April", "May", "June"];
let squares = [2, 4, 9, 16, 25, 36, 49, 64];
let squaresSum = 0;
for (let y of squares) {
  squaresSum = squaresSum + y;
}
console.log(squaresSum);

//for..in
let student = {
  studentId: 1,
  studentName: "ABC",
  studentCity: "Pune",
  studentMarks: 200,
};

for (let z in student) {
  console.log(`${z} is ${student[z]}`);
}
