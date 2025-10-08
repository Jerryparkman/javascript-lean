// if
// if else
// if else if
// Switch
// &&
// ||
// Nulish coalescing operator 
// Turney operator



// const Money = 100;

// if (Money>500){
//     console.log("Went to janakpur");
// }
// else if(Money >400) {
//     console.log("Went to bardibas!");
// }
// else if(Money > 300){
//     console.log("Went to gaushala!");
// }
// else if(Money>200){
//     console.log("Went to kantibazar");
// }
// else if(Money>=100){
// console.log("Only went to panipuri shop bro!");
// }
// else{
//     console.log("Not went to janakpur");
// }


// Switch statement
// const Month = 5;

// switch(Month){
// case 1:
// console.log("its January");
// break;

// case 2:
// console.log("its February");
// break;

// case 3:
//     console.log("Its March");
//     break;

// case 4:
//     console.log("Its April");
//     break;

// case 5:
//     console.log("its may and its my birthday bro");
//     break;

// case 6:
//     console.log("its june");
//     break;

// case 7:
//     console.log("its july");
//     break;

// case 8:
//     console.log("its august");
//     break;

// case 9: 
// console.log("september");
// break;

// case 10:
//     console.log("its Octomber");
//     break;

// case 11:
//     console.log("its November");
//     break;

// case 12:
//         console.log("its december");
//         break;

//         default: 
//         console.log("Bsdk thik se month likh k aaja");
//         break;
// };

// // checking array is empty or not 
// const Arr = [1,2];

// if(Arr.length ===0){
//     console.log("Array is empty");
// }
// else{
//     console.log("array is not empty");
// }

// // checking object is empty or not 
// const Obj = {Name: "Satrohan"}

// if(Object.keys(Obj).length===0){
//     console.log("Object is empty");
// }
// else {
//     console.log("The object is not empty");
// }

// Falsy values
// false, 0, -0, '', null, undefined, NaN

// Truthly values
// true, " ", [], {}, function(){}

// let i;
// let j;
// for(i=0;i<5;i++){
//     if(i==3){
//         continue
//     }
//     console.log(i)
// };

// Nulish coalescing operator

var1= 5??10;
// console.log(var1);
// expected output: 5

var2= null??10;
// console.log(var2);
// Expected output: 10

var3 = null??undefined;
// console.log(var3);
// Expected output: undefined

var4= undefined??null??5;
// console.log(var4);
// Expected output: 5

// Turnery operator
// Syntax: Condition ? true: false;
// Example

let Money=500;
Money>=500 ? console.log("Allowed to go gaushala"): console.log("Not allowed to go gaushala");