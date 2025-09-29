let myDate = new Date(2003,4,29,0,0,0);
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// console.log(myDate.toLocaleString());

let myTimestamp = new Date();
// console.log(myTimestamp);
// // console.log(myDate.getTime());
// console.log((myTimestamp-myDate)*1000);

// console.log((myTimestamp.getMonth())+1);

let Intocustomization = myTimestamp.toLocaleString('default',{
    weekday: "long",
});
console.log(Intocustomization);