let score = undefined

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

/*Notes CONVERSION to number : what it shows : 
"33" => 33
"33abc" => NaN 
true => 1, false => 0
null => 0
undefined => NaN
*/

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//converting to boolean
// 1 => true; 0 => false
//"" => false
// "shreyas" => true

let someNumber = false;

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

/****************OPERATIONS***********/

let value = 4
let negValue = -value
console.log(negValue);

console.log(2+3);
console.log(2-3);
console.log(2/3);
console.log(2*3);
console.log(2**3);
console.log(2%3);

let str1 = "hello"
let str2 = " shreyas"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2); //output is 12 but
console.log(1 + "2"); //this is wrong
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32
//it first decides the type and then does it accordingly
//altho dont do this its not right

console.log(+true); //conversion - 1
console.log(+""); //conversion - 0
//altho ye nahi krna chahiye

let num1, num2, num3 

num1 = num2 = num3 = 4+4 //dont write such a confusing code

let gameCounter = 100
gameCounter++;
++gameCounter;
console.log(gameCounter); //102















