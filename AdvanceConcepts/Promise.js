const { response } = require("express");

const PromiseOne = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Async the task completion");
        resolve();
        
    },1000);
})
PromiseOne.then(function(){
    console.log("Promise consumed");
})

const PromiseTwo = new Promise(function(resolve, reject){
    setTimeout(() => {
    console.log("Async the task completion 2");
    resolve();
    }, 1000);
});
PromiseTwo.then(function(){
    console.log("Second promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Hello I can give you my bio data!");
        resolve({Name: "Satrohan sharma", Email: "Satrohan@gmail.com", Address: "Kantibazar" });
    },1000);
}).then(function(userData){
    console.log(userData.Name);
})

const PromiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
    let error = false;
    if(!error){
        resolve({username: "Satrohan sharma", Email: "Satrohan@gmail.com"})
    }
    else{
        reject('ERROR: Something went wrong');
    }
    }, 1000);
})
.then((user)=>{
console.log(user);
return user.username;
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error)
}
).finally(()=>{
    console.log("Finally the promise is either resolve or reject")
})

// console.log("From here started");
// const PromiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({CompanyName: "Alibaba", CompanyAddress: "China"})
//         }
//         else{
//             reject("Error: The error is occured!");
//         }
//     },1000)
// });

// async function ConsumePromiseFive() {
//     try {
//         const result= await PromiseFive;
//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
// }

// ConsumePromiseFive();

// async function GetAllUsers() {
//     try {
//           const response = await fetch('https://api.github.com/users/jerrypark')
//         //   console.log(response);
//     const data = await response.json();
//     console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
  
// }
// GetAllUsers();


fetch('https://api.github.com/users/jerrypark')
.then((response)=> {
    return response.json();
}).then((data)=>{
console.log(data)
})
.catch((error)=> console.log(error))
