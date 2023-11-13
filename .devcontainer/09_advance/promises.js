// fetch('http://something.com').then().catch().finally()

// const promiseOne = new Promise(function (resolve, reject) {
//     // Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function () {
//         console.log('Async task is complete');
//         resolve()
//     }, 1000)
// })

// // resolve is a method
// // resolve ka direct connection hai with .then()
// promiseOne.then(()=>{
//     console.log("Promise Consumed");
// })

// new Promise((resolve,reject)=>{
//     setTimeout(() => {

//         console.log("Async task 2");
//         resolve();
//     }, 1000);
// }).then(()=>{
//     console.log("Async 2 resolved");
// })


// const promiseThree = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve({
//             username: "coffee",
//             email: "chai@example.com"
//         })
//     }, 1000);
// })

// promiseThree.then((user)=>{
//     console.log(user);
// })

// const promiseFour = new Promise((resolve,reject)=>{

//     setTimeout(() => {
//         let error = false
//         if(!error){
//             resolve({
//                 username: "jerry",
//                 password: "12345678910"})
//             } else {
//                 reject('ERROR: Something went wrong')
//             }
//         }
//     , 1000);

// })

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log(username);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("Promise is resolve or rejected");
// })

// const promiseFive = new Promise((resolve,reject)=>{

//     setTimeout(() => {
//         let error = true
//         if(!error){
//             resolve({
//                 username: "javaScript",
//                 password: "987654321"})
//             } else {
//                 reject('ERROR: JS went wrong')
//             }
//         }
//     , 1000);

// });

// // Promise is an object

// async function consumePromiseFive(){
//     try {const response = await promiseFive
//     console.log(response);}
//     catch(error){
//         console.log(error);
//     }
// }

// consumePromiseFive();
// to handle error in async await, we can use try/catch


// const func = async ()=>{
//     try {
//         const response = await fetch('https://api.github.com/users/kanishkmunot')
//         const data = await response.json()
//         console.log(data);
//     }  catch(error){
//         console.log(error);
//     }
// }
// func()

fetch('https://api.github.com/users/kanishkmunot')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})
