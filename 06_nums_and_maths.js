// **************************Nums********************************
const score = 500;
// console.log(score)

const value = new Number(500);
// console.log(value.toString().length);
// console.log(value.toFixed(2));

let number = 123.45;
// console.log(number.toPrecision(4));

// precision 
// it gives the calculated value and shorted value and it relay on argument

// tolocalstring()
// it makes easy to understand the value like 100000 to 1,00,000

// Eg: 
let Money = 100000;
// console.log(Money.toLocaleString('en-IN'));


// ***********************Maths*********************
// abs
// round,
// pi 
// ceil, 
// floor, 
// sqrt, 
// min, 
// max, 
// random
// console.log(Math);

// abs <= absolute value, it only change negative sigh to positive sigh
// Eg:
// console.log(Math.abs(-4));

// round
// console.log(Math.round(4.5)); Output: 5

// ceil
// console.log(Math.ceil(4.3)); Output: 5

// floor
// console.log(Math.floor(4.6)); Output: 4

// random()
// console.log(Math.random()*6+5);
// console.log((Math.random()*6) +5);

// let max=6;
// let min=1;
// console.log(Math.floor(Math.random() * (max - min + 1) + min))
 
let Value= [3,5,6,2,4,5,3];

console.log(Math.max(...Value));
console.log(Math.min(...Value));