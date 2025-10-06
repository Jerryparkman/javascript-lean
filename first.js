// console.log("hello".concat(" ","world"));
const name= "satrohan";
let number= 9807827509;
var email= "satrohan@gmail.com";
const address = ""; 
let A = Number(address);
// console.log (A);



function name1(a, b, c, d){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}

// name1(1,2,3,4);

let preeti = {
    Firstname: "preeti",
    Secondname: "choudhari",
    address: 'gaushala',
    relation: "girlfriend",
    from: "6month",
    age: 21,
    education: "bachlor running",
    fullName: function(){
        return this.Firstname + " " + this.Secondname
    }
}


// console.log(preeti.fullName());


// Practice for forEach loop
arr = [1, 2, 3, 4, 5];
let NewForEachval = arr.forEach((val) => {
    return val*val;
});
// console.log(NewForEachval);



let newArr = arr.map((val)=>{
return val*val*val;
});
// console.log(newArr);


// use reduce method to calculate the sum of numbers in the array

const newValue = arr.reduce((sum, val) => 
    sum+val , 0
 );
//  console.log(newValue);


 const FourthSemMarks = 
 [
{ SubName: "Math", Marks: 55 },
{ SubName: "DBMS", Marks: 49 },
{ SubName: "Java", Marks: 60 },
{ SubName: "DSA",  Marks: 65 },
{ SubName: "Web2", Marks: 55},
{ SubName: "Micro",Marks: 52}
];

let TotalMarks = FourthSemMarks.reduce((Total, SubName) => Total+SubName.Marks, 0);
// console.log("Total marks: "+TotalMarks);

const AvgMarks = Math.ceil(TotalMarks/6);
// console.log("Average Marks: "+ AvgMarks);

let HighestMarks = FourthSemMarks.forEach((val)=>{
return Math.max(val)
}
)

// console.log(HighestMarks);


class Myclass{
constructor(a,b){
this.a=a;
this.b=b;
}
method(){
console.log(a+b);
}
}
const OurClass = new Myclass(2,4);
// OurClass.method()

// Using of try and catch

try{

}catch(err){

}