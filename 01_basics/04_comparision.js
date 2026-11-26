console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

//problem when same data type is not compared
console.log("2" != 1); //automatically "2" is converted to 2
//always ensure datatypes are same

//AVOID THESE CONVERSIONS DOWN BELOW 

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //this one is true but its wrong
//comparision doesnt always give predictable answer when diff data type are used

console.log(undefined == 0); //false
//altho this is wrong 

// === => strict check
console.log("2" === 2); //conversion of 2 doesnt happens
console.log("2" == 2); //conversion of 2 happen



