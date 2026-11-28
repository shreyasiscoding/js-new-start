// singleton => when declaring like literals , singleton nahi banta
// when declaring like constructor, singleton ki tarah banta hai
// constructor => object.create

// object literals

//interview ques : ek symbol lo usko objects ki key mai add kro and dikhado
const mySym = Symbol("key1")


const JsUser = {
    name: "Shreyas", //name is a string automatically
    age : 18,
    [mySym]: "mykey1", //symbol mai [] is important
    "location is" : "Delhi", 
    email: "shreyas@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Saturday", "Sunday"]
}

//accessing in objects : 
console.log(JsUser.email) 
console.log(JsUser["email"])
console.log(JsUser["location is"]); // cannot be accessed by dot as there is space between location and is
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);

JsUser.email = "Shreyas@chatgpt.com"
// Object.freeze(JsUser) //cant make changes to object (jsUser) anymore
JsUser.email = "Shreyas@microsoft.com"
console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, $(this.name)`); //this => used for accessing inside object only
}

console.log(JsUser.greeting); 
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());









