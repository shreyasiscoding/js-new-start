// ARRAYS 

const myArr = [0, 1, 2, 3, 4, 5, true, "Shreyas" ]
const myArrOne = [0, 1, 2, 3, 4, 5 ]

const myHeros = ["ironman", "spiderman"]

const myArr2 = new Array(1, 2, 3, 4)

console.log(myArr2[2]); //3

// Array methods

myArr.push(5)
myArr.push(7)
myArr.pop()

myArr.unshift(4) //inserts at the start
myArr.shift() //removes from the start

console.log(myArr.includes(9)); // is 9 present or not? // o/p -> false
console.log(myArr.indexOf(3)); // gives index of 3

const newArr3 = myArr.join()

console.log(myArr);
console.log(newArr3);
console.log(typeof newArr3); //string

// slice, spice

console.log("A ",myArr);

const myn1 = myArr.slice(1, 3) //gives the portion without including the last (3) and does
//not manipulate the actual code

console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3) //gives the portion including the last element and 
//also manipulates the actual code by removing the portion from the actual code
console.log("c ", myArr);
console.log(myn2);








