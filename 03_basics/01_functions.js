function sayMyName(){
    console.log("s");
    console.log("h");
    console.log("r");
    console.log("e");
    console.log("y");
    console.log("a");
    console.log("s");
}

// sayMyName()

function addTwoNumbers(number1, number2){ //number1, number2 are parameters
    console.log(number1 + number2);
}

addTwoNumbers(3,4) // 7  //3 ,4 are argument 
addTwoNumbers(3,"4") // 34
addTwoNumbers(3, "a") // 3a

const result = addTwoNumbers(3, 5) // 8

console.log("Result is : ", result); //undefined //so not the right way
//for this you should do this 

function subtractTwoNumbers(number1, number2){

    return number1 - number2
}

const result2 = subtractTwoNumbers(3,4)

console.log("Result2 is : ", result2);

function loginUserMessage(username = "sam"){ //sam is a default value if any argument is given then it will overwrite it
    if(username === undefined){ // can also write if(!username){}
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Shreyas"));
console.log(loginUserMessage()); //undefined just logged in therefore if else


//*************lec 2 of functions******************/
//rest and spread

function calculateCartPrice(val1,val2,...num1){ // three dots => rest operator for multiple values
    return num1
}

console.log(calculateCartPrice(200,400,420,2000,3000));

const user = {
    username : "Shreyas",
    price:999
}
//in javascript you have to use if else if its an object or not first
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

//handleObject(user)
handleObject({
    username: "sam",
    price:99
}
)

const myArray = [10,20,30,40]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myArray)); 
console.log(returnSecondValue([10,20,30,40])); //these both are same





