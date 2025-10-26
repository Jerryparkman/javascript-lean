const piValue = Object.getOwnPropertyDescriptors(Math, "PI");
// console.log(piValue);

const user = {
    name: "Desi Chai",
    price: 600,
    isAvailable: true,
    OrderChai: function(){
        console.log("Chai order nahi hue!");
    }
}

console.log( Object.getOwnPropertyDescriptor(user, "name"))

// if we want to change the property 

Object.defineProperty(user, 'name', {
    writable: false,
    enumerable: false,
    configurable: false
})

console.log( Object.getOwnPropertyDescriptor(user, "name"))

for (let [key, value] of Object.entries(user)) {
   if(typeof value != 'function'){
       console.log(`${key} : ${value}`);

   }
}