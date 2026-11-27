const score = 400
console.log(score);


// declaring a number
const balance = new Number(100) //tells the datatype too
console.log(balance);

console.log(balance.toString().length); //first it turns to string and then we find the length of it
console.log(balance.toFixed(4)); //precision = 100.0000

const otherNumber = 24.242424

console.log(otherNumber.toPrecision(4)); //24.24

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // adds comma acc to indian style

//max_int and min_int

// ******************* MATHS ****************************

console.log(Math);
console.log(Math.abs(-4)); // sirf minus plus mai change hota hai , abs = absolute value
console.log(Math.round(5.5)); // round off
console.log(Math.ceil(5.23)); // round off to higher value only // 6
console.log(Math.floor(5.23)); // round off to lower value only // 5
console.log(Math.min(4,5,6,2,5,2)); // minimum value

console.log(Math.random()); // a random value between 0 and 1
console.log(Math.floor(Math.random()*10) + 1); // a random value between 1 and 10

const min = 10
const max = 20

console.log((Math.floor(Math.random() * (max - min + 1) )+ min)) // formula for random number between min and max












