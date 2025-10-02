
const mySymbol = Symbol("key1");



const MyProfile = {
    name: "Satrohan sharma",
    age: 20,
    [mySymbol]: "myfirstkey",
    email: "satrohan@gmail.com",
    address: "kantibazar",
    phone: 9807827509
};

// How to access objects
// console.log(MyProfile.name);
// console.log(MyProfile["email"]);


// How to freeze objects
// Object.freeze(MyProfile);
MyProfile.age = 21;

MyProfile.greetings = function(){
    console.log("Hello js user! ");
}

MyProfile.greetings = function(){
    console.log(`Hello js user, ${this.name}`);
}
console.log(MyProfile.greetings())
console.log(MyProfile["greetings"]);