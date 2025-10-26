class User {
    constructor(username, email, password){
        this.Username = username;
        this.Email = email;
        this.Password = password;
    }
    get Email(){
        return this.MeroEmail;
    }
    set Email(value){
        this.MeroEmail= value;
    }
    
}

const Chalao = new User("satrohan", "hey@gmail.com", 12345)
console.log(Chalao.MeroEmail);
