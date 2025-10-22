// classes in javascript

const user = {
    username: "satrohan",
    logincount: 8,
    IsloggedIn: true,

    getUserDetails: function(){
        let count=3;
        // console.log(`Username: ${this.username}`)
        console.log(this)
        
    }
}

// console.log(user.getUserDetails());

// const Myclass = new 
// console.log(this)

function User(username, logincount, IsloggedIn){
 this.username = username;
this.logincount = logincount;
this.IsloggedIn = IsloggedIn;
// return this;
}

const Myuser =new User("satrohan", 15, false);
console.log(Myuser);

const MynewUser = new User("satya bhai", 10, true)
console.log(MynewUser);