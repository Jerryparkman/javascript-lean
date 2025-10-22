// class

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(password){
//         return `${this.password}abc`
//     }

//     changeName(username){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("Satrohan", "satrohan@gmail.com", 123)
// console.log(chai.encryptPassword());
// console.log(chai.changeName());

// behind the scene and old approch while the class is not available

function User(username, email, password){
    this.username= username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
return `${this.password}abc`
}

User.prototype.changeName = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("Satrohan", "satrohan@gmail.com", 123)
console.log(tea.encryptPassword());
console.log(tea.changeName());