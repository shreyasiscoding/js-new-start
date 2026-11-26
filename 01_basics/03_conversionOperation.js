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






