class Super {
    constructor(username){
        this.username = username;
    }
    baapu(){
        console.log("Tera baap hu me beta");
    }
}
class child extends Super{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password;
    }
    Result(){
        console.log(`Name is ${this.username} and his email is ${this.email} `)
    }
}

const baap = new Super();
const beta = new child("baap","beta@gmail.com", 1234)

beta.Result();
beta.baapu();