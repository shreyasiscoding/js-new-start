// objects singleton => how can we develop as constructor

const tinderUser = new Object() //singleton Object
const tinderUserOne = {} //non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Shreyas"
tinderUser.isLoggedIn = true

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullName: {
            firstName : "Shreyas",
            lastName : "Thakur"

        }

    }
}

console.log(regularUser.fullname.userFullName);
console.log(regularUser.fullname.userFullName.firstName);

// combining objects 

const obj1 = {1: "a", 2: "b"} // here 1 is key and a is value
const obj2 = {3: "c", 4: "d"}

const obj3= { obj1, obj2} //object ke andar object so not right
console.log(obj3);

//syntax => const returnedTarget = Object.assign(target, source)
const obj4 = Object.assign({}, obj1, obj2) //everything becomes one array
// here {} is target and obj1 , obj2 are source which are being assigned to target
console.log(obj4);

//how to actually combine it
const obj5 = {...obj1,...obj2} //spreading it and combining it 
console.log(obj5);

const users = [
    {

    },
    {
        id: 1,
        email: "s@google.com"
    },
    {
    }
]


users[1].email
console.log(tinderUser);

//very important
console.log(Object.keys(tinderUser)); // all keys comes into an array
console.log(Object.values(tinderUser)); // all values come into an array

console.log(Object.entries(tinderUser)); // both keys and values in array

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true as the property is present (isLoggedIn)







