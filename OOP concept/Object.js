function MultipleBy5(num){
    return num*5;
}

MultipleBy5.power = true;
console.log(MultipleBy5.power)

console.log(MultipleBy5(5));
console.log(MultipleBy5.prototype)


function CreatedUser(username, price){
    this.username = username;
    this.price = price;
}


CreatedUser.prototype.increment = function(){
    this.price++;
 
}

CreatedUser.prototype.printMe= function(){
    console.log(`Price is ${this.price}`)
}

const chai = new CreatedUser("saftrohan", 30);
const tea = CreatedUser("tea", 25);

// console.log(chai);
chai.printMe();
console.log(chai.increment())




/*
Heres what happens behind the scenes when the new keyword is used

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object is gets linked to the prototype property to the constructor
function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound 
to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes 
this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive 
value (object, array, function, etc.), the newly created object is
*/ 