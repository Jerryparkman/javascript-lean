// Singleton object
const tinderUser = new Object();
const tinderUser2 = {};

// keys()
// values()
// Object.assign()
// Spread
// Entries <= Purpose: it makes keys into the value and values into the keys
// hasOwnProperty <= it checks it have exists that certain property or not 

// console.log(tinderUser2);


tinderUser.id = "12ab";
tinderUser.name = "Satrohan";
tinderUser.IsLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "buddy@gmail.com",
    UserName: {
        FullName: {
            name: "Buddy baklol"
        }
    }
}
// console.log(regularUser.UserName.FullName.name); By this methods we can access nested objects

const Obj1 = {1: 'a', 2: 'b'};
const Obj2 = {3: 'c', 4: 'd'};
const Obj3 = {5: 'e', 6: 'f'};

//                         Target       
const AllObj = Object.assign({}, Obj1, Obj2, Obj3);
//                               '     Source.   '
// console.log(AllObj);


//                          Without Target
const AllObj2 = Object.assign({}, Obj1, Obj2, Obj3);
// console.log(AllObj2);

// Note: Assining Objects with target or without target produce same output

// One simple or New method to combine objects together is: Spread method
// Eg:
const SpreadMethod = {...Obj1, ...Obj2, ...Obj3};
// console.log(SpreadMethod);


const User = [
    {
        id: '1',
        email: "some@gmail.com"
    },
    {
        id: '2',
        email: "some2@gmail.com"
    },
    {
        id: '3',
        email: "some3@gmail.com"
    }
    
]
//  console.log(User[1].id); // The value is accessed from the array which is stored in the form of objects in the object

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); //Output: 'id', 'name', 'IsLoggedIn'
// console.log(Object.keys(User[1])); //Output: 'id', 'email'

// console.log(Object.values(User[1])); //Output: '2', 'some2@gmail.com'

// Entries example
// console.log(Object.entries(tinderUser));


hasOwnProperty
// console.log(tinderUser.hasOwnProperty('IsLoggedIn')); output: true
// console.log(tinderUser.hasOwnProperty('name')); output: true
// console.log(tinderUser.hasOwnProperty('email')); output: false

const course = {
    Cname: "JsAdvance",
    CPrize: "999",
    CInstructor: "Satrohan"
};


const Syllabus = {
    Cname: "Python",
    CPrize: "999",
    CInstructor: "satrohan"
};

const {Cname} = Syllabus;
console.log(Cname);
// Basically we use this syntax for call the properties of the object
console.log(course.Cname);

// Now we de-structured the object like this

const {Cname: CN} = course;
console.log(CN);
console.log(Cname);

const {CInstructor} = course;
// console.log(CInstructor);





