const user = {
    username : "hi",
    price : 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }


}
// when we want to refer the current context, we use this keyword
user.welcomeMessage()

// function chai(){
//     let username = "jerry"
//     console.log(this.username);
// }
// chai()

// const chai = function () {
//     let username = "jerry"
//     console.log(this.username);
// }
// chai()

// HERE WE GOO!!
const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


const myArray = [2, 5, 3, 7, 8]

myArray.forEach()

//implicit return -> when we are NOT using return inside the BRACKETS
//explicit return -> when we are using return keyword inside the paranthesis
