//----------------- primitive datatype -------------------- 

// 7 types : String , Number, Boolean, null, undefined, Symbol, BigInt

/*javascript is dynamically typed language. this means you do not need to explicitly
declare variable types(like int or string) when writing code. */

const score = 100
const scoreValue = 100.5

const isLoggedIn = true
const outsideTemp = null
let userEmail; //undefined

const id = Symbol('12323')
const anotherId = Symbol('12323')

console.log(id === anotherId);

const bigNumber = 342989753287545n //putting n at last automatically turns into bigInt

// ---------------- Reference (Non primitive) -------------

// Arrays, Objects, Functions

const heros = ["ironman","superman","spiderman"]
//object - anything under curly bracket
let myObj = {
    name : "Shreyas",
    age : 19,
}

const myFunction = function(){
    console.log("hello world");
}

//datatype pata karna
console.log(typeof bigNumber);
console.log(typeof myFunction);
console.log(typeof outsideTemp); //null comes as object
console.log(typeof myObj);
console.log(typeof heros);



//read the typeof table in ecma strip 
/** null : object
 *  array : object
 *  object : object
 *  function : function
 *   REST ALL AS IT IS 
 */
