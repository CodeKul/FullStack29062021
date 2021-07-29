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
let x = seasons.splice(1, 2);
console.log(x);
console.log(seasons);
