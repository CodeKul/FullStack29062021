//push,pop,slice,splice,map,foreach,shift,unshift
let seasons = ["Summer", "Winter", "Rainy", "Spring"];

//push and pop
seasons.push("Autumn");
seasons.pop();

//shift and unshift
seasons.unshift("xyz");
seasons.shift();
//seasons.shift();
console.log(seasons);

//slice  - not modifying orignal array
let slicedArray = seasons.slice(1, 4);
console.log(slicedArray);
console.log(seasons);

//splice -modifying orignal array
let skills = ["Javascript", "React JS", "CSS", "Bootstrap", "HTML"];
//splice(startIndex,deleteCount,element1,element2...elementn)
let x = skills.splice(1, 4, "Node JS", "Mongo DB", "AWS");
console.log(x);
console.log(skills);

//forEach
let output = skills.forEach((i, id) => {
  console.log(id + ": " + i);
});

let op = skills.map((k, id) => {
  console.log(`${id}.) ${k}`);
});
console.log(output);
console.log(op);
