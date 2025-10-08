// for of loop => used in Array, Strings
// for in loop => used in Array, object
// maps 



// Note: we cannot use (for of) in objects
// for of loop 
// Syntax: 
// for(const iterator of Object){
// // statement:
// };

// Example:
const Arr= [1,2,3,4,5];
for(const Numbers of Arr){
    // console.log(`The numbers of array's are ${Numbers}`)
};

// In strings
const greeting = "HELLO WORLDf";
for(const greet of greeting){
    if(greet==" "){
        continue;
    }
    // console.log(`The greetings are ${greet}`)
};

// for in loop
// // syntax
// for(const key in Object){
//     statement
// }

// Eg in Array
const Programs = ["js", "python", "java", "Rubi", "cpp"];
for(const key in Programs){
    // console.log(Programs[key]);
}

// Eg in objects
const Myobject = {
    Js: "javascript",
    Py: "python",
    Cpp: "C++",
    Rb: "Rubi"
};
 
for(const key in Myobject){
    // console.log(`${key} shortcut for ${Myobject[key]}`);
}

