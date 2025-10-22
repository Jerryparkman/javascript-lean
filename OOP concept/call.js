// Call in js

function setUserName(username){
this.username= username;
}

function CreatedUser(username, email, password){
    setUserName.call(this, username);
    this.email = email;
    this.password = password;
}

const chai = new CreatedUser("Satrohan", "satrohan@gmail.com", 123);
console.log(chai)