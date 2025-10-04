// Concept of block scope
// and global scope
// Expression

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
// one();




console.log(add(2))
function add(num){
    return num +2
};

const addTwo = function(value){
    return value + 5
};

console.log(addTwo(5))


