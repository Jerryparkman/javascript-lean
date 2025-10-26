const User = {
    _email: "satrohan@gmail.com",
    _password: "234",

    get email(){
        return this._email;
    },
    set email(value){
        this._email= value;
    },
    get password(){
        return this._password;
    },
    set password(value){
        this._password = value;    }
}

// using factory function
const tea = Object.create(User);
console.log(tea.email);
console.log(tea.password);