// destructuring of objects

const course ={
    courseName : "js in hindi",
    price: "999",
    courseInstructor: "shreyas"
}

// course.courseInstructor

const {courseInstructor: Instructor} = course
console.log(Instructor); // instead of course.courseInstructor now we can type straight Instructor

// {} means destructuring

// API objects ke form mai milti hai
/*
{
    name: "Shreyas",
    courseName1 : "js in hindi",
    price: "free"
}
*/

// API array ke form mai bhi milti hai
// JSON formatter is a website to read API
// JSON => Javascript object notation
