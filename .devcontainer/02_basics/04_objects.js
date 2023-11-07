const tinderUser = new Object () //this is a singleton object
// OR
const tinderUser1 = {}
console.log(tinderUser);
console.log(tinderUser1);

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggesIn = false

console.log(tinderUser);

const regularUser = {
    email:"abc@gmail.com",
    fullname : {
        fname: "Very",
        lname: "Awesome"

    }
}
console.log(regularUser.fullname); //jitne levels access karne hai, utne dots laga sakte hai

const obj1 = {1:"a",2:"b",3:"c"}
const obj2 = {4:"d",5:"e",6:"f"}
// const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
console.log(obj3);
const users = [
    {
        id:1,
        email: "agbh"
    },
    {
        id:2,
        email: "gjkh"
    }

]

// const email2 = users[1].email
// console.log(y);

console.log(Object.keys(tinderUser));
//Here the output value we got are stored in array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
//Object.hasOwnProperty()

const course = {
    coursename: "js in hindi",
    price: "8984",
    courseInstructor:"Ken"
}

const {courseInstructor} = course
console.log(courseInstructor);


// {
//     "name" : "afshty",
//     "ketucky" : "usa"
// }

//Key and Value pair both are strings in JSON

// JavaScript Object Notation





















