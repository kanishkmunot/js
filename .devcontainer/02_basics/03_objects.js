// singleton

// object literals

const mySym = Symbol("key1")
console.log(mySym);


// Important below


const jsUser = {
    name:"Klay",
    class:"First",
    [mySym] : "mysym",
    location:"Saint Georgia",
    isLoggesdIn:"False"
}
console.log(jsUser.class);
console.log(jsUser["class"]);
console.log(jsUser[mySym]);

// .freeze keyword --> to lock the values

jsUser.class = "Third"
// Object.freeze(jsUser)
jsUser.class = "Six"
// Object.freeze(jsUser)
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS User!");

}
console.log(jsUser.greeting);
console.log(jsUser.greeting());

