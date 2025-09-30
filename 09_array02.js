// Combining methods of Array 
// push()
// concat()
// spread()
// copywithin()
// flat() In the parameter section of the flat, you can determine the length of the depth, and infinity also
// isArray <= it checks the type of data which is in array or not
// from() <= in this we can change our any data into the type of array format

const A1 = [1,2,3,4,5];
const A2 = [6,7,8,9,10];

// // Push()
// const P1 = A1.push(A2);
// // console.log(P1);

// // Push()
// const C1 = A1.concat(A2);
// // console.log(C1);

// // copywithin()
// const C2 = A2.copyWithin(0,1);
// // console.log(C2);

const All = [...A1,...A2];
// console.log(All);


// flat array example
const AnotherArray = [1,2,3,4,5,[1,2,3,4],6,7,[1,2,3,4,[1,2,3,4,5,6,7,8,9]]];
const allArray = AnotherArray.flat(Infinity);
// console.log(allArray);

// console.log(Array.isArray('Satrohan sharma'));
// console.log(Array.from('Satrohan sharma'));

// console.log(Array.from({name: "satrohan"})); //

let score1 = 100;
let score2 = 200;
let score3 = 300;

const myAll = Array.of(score1, score2, score3);
console.log(myAll);


