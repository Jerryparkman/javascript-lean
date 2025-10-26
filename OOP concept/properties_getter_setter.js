function User (email, password){
    this._email = email;
    this.password = password;

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email;
        },
        set: function(value){
            this.Myemail= email;
        }
    })
}
const Nature = new User("Satrohan@gmail.com", 12345)
console.log(User.Myemail);
