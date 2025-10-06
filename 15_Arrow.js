// Arrow Function
// Current context <= this keyword refers to the current context
// implicit return
// In the arrow function if we use curley braces({}) then we should also use return keywork, if not then do not both 

const user ={
    username: "Satrohan",
    prize: 999,

    WelcomeMassage: function(){
        console.log(`${this.username}, Welcome to the website!`)
        console.log(this);
    }
};

// user.WelcomeMassage();
// user.username = "Preeti";
// user.WelcomeMassage();
// console.log(this);


// function chai(){
// console.log(this)
// }
// chai();

function chai(){
let username = "preeti"
console.log(this.username) //This will not work to find current context in the function
}
// chai();

const helpDesk = () => {
    console.log(this);
}
// helpDesk();

// implicit return
const hello = (a,b) => a+b;
console.log(hello(2,4));


const hey = () => ({username: "satrohan" });
console.log(hey());