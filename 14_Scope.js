// Concept of block scope
// and global scope

var c = 400;

if(true){
let a= 10;
const b = 20;
var c = 30;  
// console.log(a);
};
let a=500;
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    let username = 'satrohan'
    function two(){
        let website = "instagram"
        console.log("From one: " + username);
    }

    two();
    // console.log(website);
}
one();