// Concept of function
// Passing parameters and arguments into the function
// Using interpolation to print the statement
// checking parameters by using (if condition) and checking undefined value
// Used rest operators (...)

// Basic function calling 
function First(){
    console.log("Hello buddy this is the first function that can be written by satrohan sharma!");
    return;
};
// console.log(First());
// const result = First();

// Passing arguments and parameters into the function
function SecondF(num1, num2){
    return num1+num2;
};

const result = SecondF(2,3);
// console.log(result);

function UserLoggedIn(username){
    if(!username){
    console.log("user is not logged in");
    return
    }
    else{
    console.log(`${username} is the user`)
}
}
// console.log(UserLoggedIn("Hites"));

function CalculateCartPrize(num1, ...num){
    return num
};
// console.log(CalculateCartPrize(200, 300, 400));

const user = {
    username: 'satrohan',
    prize: '399'
};

function handleObject(anyobject){
    console.log(`The username is ${anyobject.username} and the prize is ${anyobject.prize}`)
};

handleObject(user);

const Arr = [200, 300, 400];

function getArr(gArr){
    return gArr[1]
};

console.log(getArr(Arr));

