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

//0+10 =10
//10+20 = 30
//30+40 = 70
//70+50 = 120
//
//1
//2
//3
//...
//9
//
