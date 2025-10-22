let MyVillens = ["thor", "spiderMana"];

let heros = {
    thor: "Hammer",
    Spiderman: "net"
}

Object.prototype.Satrohan=function(){
    console.log("Satrohan is the best programmer ever!");
}

// heros.Satrohan();
   MyVillens.Satrohan();


// Inheritance

const User = {
    name: "chai",
    class: "null"
}

const Teacher = {
    makeVideo: true,
    Time: "Full"
}

const TAsupport = {
    makeAssignment: "Js assignment",
    fullTime: true,
    // Old approch
    __proto__: Teacher
}

Teacher.__proto__ = User;

// Modern syntax

Object.setPrototypeOf(Teacher, User);
console.log(Teacher["name"]);