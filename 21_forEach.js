const coding = ["js", "Rb", "python", "java", "cpp", "swift"];

// Basically
coding.forEach( function (value){
// console.log(value)
} );

// Arrow function
coding.forEach( (value)=>{
// console.log(value)
} )


const Myobject = {
    Js: "javascript",
    Py: "python",
    Cpp: "C++",
    Rb: "Rubi"
};

function printMe(item){
    // console.log(item)
};
// coding.forEach(printMe);

coding.forEach((item, indexOf, coding) =>{
console.log(item, indexOf, coding);
})

const myCoding = [
    {
        movieName: "Venom",
        genra: "scientific"
    },
       {
        movieName: "Venom2",
        genra: "scientific2"
    },   {
        movieName: "Venom the last dance",
        genra: "scientific3"
    }
]

myCoding.forEach( (item)=>{
console.log(item.movieName)
} );

myCoding.forEach( (item)=>{
console.log(item.genra)
} );