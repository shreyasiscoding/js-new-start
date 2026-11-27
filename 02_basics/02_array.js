const marvel_heros = ["thor","ironman","spiderman"]
const dc = ["superman",'flash',"batman"]

//marvel_heros.push(dc) //array ke andar array

//console.log(marvel_heros);
//console.log(marvel_heros[3][1]); //flash

const allHeros = marvel_heros.concat(dc) // combines both in one array unlike array in array
console.log(allHeros);

//instead of concat
const all_new_heros = [...marvel_heros, ...dc] //... makes all element of the array as individuals and then adds
console.log(all_new_heros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [5, 3, [3, 4]]]
// to make anotherArray into single array
const real_anotherArray = anotherArray.flat(Infinity)
console.log(real_anotherArray);

console.log(Array.isArray(anotherArray)); //checks whether its an array or not //returns true or false
console.log(Array.isArray([1,2,3,4])); //checks whether its an array or not //returns true or false
console.log(Array.from("Shreyas")); //converts into array
console.log(Array.from({name: "Shreyas"})); //interesting //study from chatgpt
//empty because the above mentioned is an object and cannot convert to array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); //creates array











