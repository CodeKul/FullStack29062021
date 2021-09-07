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

const y = 130; //always initialised

console.log(y);
console.log(typeof result);

var t;
console.log(t);
var z = null; //no value or nothing
console.log(z);

let marks = "My marks are " + result + " and your marks are " + test;
console.log(marks);
//Datatypes -Primitive  ==> Number,String,Boolean,undefined,null
//Non-Primitive ==> Array,objects

//Template Literals - `str ${javascript}`
let str = `My marks are ${result} and your marks are ${test}`;
console.log(str);

let positive = true;
if (positive == true) {
  console.log("Admit");
} else {
  console.log("Go home");
}

//Arrays - index starts at 0
let numbers = [100, 600, 400, 300, 900];
console.log(numbers[0]);
let months = ["January", "February", "March", "April", "May", "June"];
console.log(months[4]);

//Objects - {key:value,key:value,key:value,....}
let student = {
  studentId: 1,
  studentName: "ABC",
  studentCity: "Pune",
  studentMarks: 200,
};

console.log(student.studentCity);

//Array of objects
let studentList = [
  { studentId: 1, studentName: "ABC", studentCity: "Pune", studentMarks: 200 },
  {
    studentId: 2,
    studentName: "XYZ",
    studentCity: "Mumbai",
    studentMarks: 100,
  },
  {
    studentId: 3,
    studentName: "pou",
    studentCity: "Nashik",
    studentMarks: 140,
  },
  {
    studentId: 4,
    studentName: "qaz",
    studentCity: "Thane",
    studentMarks: 190,
  },
  {
    studentId: 5,
    studentName: "plm",
    studentCity: "Kothrud",
    studentMarks: 300,
  },
];

console.log(studentList[1].studentCity);
