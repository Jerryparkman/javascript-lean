// ***********Array Methods***************
// includes() 
// push()
// pop()
// unshift()
// shift();
// indexOf();
// length;
// join()
// slice
// splice



let myArr = ['a','b','c','d'];
// console.log(myArr);

// console.log(myArr[0]);
// console.log(myArr.length);


// For adding element into existing array
myArr.push('b');
// console.log(myArr);

// For removing last added element from the existing array
myArr.pop(0);
// console.log(myArr);


myArr.unshift('9')
// console.log(myArr);

myArr.shift();
// console.log(myArr);

// console.log(myArr.includes('a'));

// console.log(myArr.indexOf('a'));

// let newArr = myArr.join();
// console.log(myArr);
// console.log(newArr);

// slice, splice

console.log("A",myArr, "Normal array");
const myn1 = myArr.slice(1,4); 
// Expected output: dcd

console.log("B",myn1,"Slice array");

const myn2 = myArr.splice(1,4);
console.log("C",myn2,"Splice array");
// Expected output: bcd
