// *********** dates ******************

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate); //object

// declaring a random date
let myCreatedDateOne = new Date(2020, 1, 5, 3) //month starts from 0
let myCreatedDate = new Date("01-05-2027") //month starts from 0
console.log(myCreatedDateOne.toDateString());
console.log(myCreatedDate.toLocaleString());

console.log("******************Timestamp********************************");


let myTimeStamp = Date.now() //for knowing exact timestamp for quizzes and poll

console.log(myTimeStamp); //millisecond from jan 1, 1970 as thats the standard time
console.log(myCreatedDate.getTime()); 
console.log(Date.now()/1000); //millisecond to second but decimal value also come 
console.log(Math.floor(Date.now()/1000)); //removes decimal value by rounding off to lower

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday: "long",
})








