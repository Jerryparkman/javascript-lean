
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
Object.freeze(MyProfile);
MyProfile.age = 21;


console.log(MyProfile);