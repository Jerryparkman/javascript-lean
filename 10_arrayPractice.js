const FirstArr = [10, 23, 3, 5, 9];


let index1 = 2;
let index2 = 3;
 
// console.log(`The element of index ${index} is the ${FirstArr.at(index)}`);
// console.log(`Hey buddy this is an ${index1} index of element is ${FirstArr.at(index1)}and the second element is to the index of ${index2} is the element is ${FirstArr.at(index2)}, that's shit.`);

const SecondArr = ["a","b","c"];
// console.log(SecondArr.copyWithin(0,2));

// console.log(FirstArr.findLast(element => element > 9));

const Forflatten = [1, [2, 3], [4, [5, 6]]]
let FlatenAns = Forflatten.flat(Infinity);
console.log(FlatenAns);
