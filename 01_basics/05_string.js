// in string " " and ' ' doesnt matter
const name = 'shreyas'
const repoCount = 50

console.log(name + repoCount + " Thakur"); //dont use this type of syntax

//this is how we use it now
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// declaring a string where S is 0, h is 1 and so on
const gameName = new String('Shreyas-th')

console.log(gameName[0]); // S
console.log(gameName.__proto__); //there are many ways to access the string in prototype (proto)

console.log(gameName.length);
console.log(gameName.toUpperCase()); //original value wont change cuz string is primitive type
console.log(gameName.charAt(4)); //checking character at position
console.log(gameName.indexOf('y')); //checking position of character

const newString = gameName.substring(0, 4) //cant use negative
console.log(newString); //Shre //slicing

const anotherString = gameName.slice(-8, 4) // minus piche se start krne ke liye // -8 = r //last element is -1
console.log(anotherString);

const newStringOne = "    shreyas    " //if i dont need spacing then
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shreyas.com/shreyas%20thakur"

console.log(url.replace('%20', '-')); // replacing %20 with - 

console.log(url.includes("shrey")); //if this is present or not

console.log(gameName.split('-')); //spliting on the basis of - 


















