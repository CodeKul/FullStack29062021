let arr = ["keyboard", "monitor", "mouse", "stylus"];
console.log(arr[2]);

//object
let person = {
  personName: "abc",
  city: "pune",
};

console.log(person.personName);
let myName = person.personName;
let touchPen = arr[3];

//Array destructuring
let [a, b, c, d] = arr;
console.log(b);

let [x, , y] = arr;
console.log(x, y);

let [p, ...q] = arr;
console.log(p);
console.log(q);

let [...newArr] = arr;
console.log(newArr);

//object destructuring
let { personName, city } = person;
console.log("Name is " + personName + " and" + " city is " + city);

function show(msg1, msg2) {
  return {
    messageone: msg1,
    messagetwo: msg2,
  };
}

let result = show("Hello", "Hi");
console.log(result);

let { messageone, messagetwo } = show("React", "Javascript");
console.log(messageone);
console.log(messagetwo);

console.log(person);
console.log(arr);
