// const name = "James"
// const value = 7
// console.log(`Hello my name is ${name} and my lucky number is ${value}`)

// const jelly = "Carbohydrates"
// console.log(jelly.indexOf('h'))
// console.log(jelly.charAt(6))

// // Refer MDN docs for string methods

// const newstring = jelly.substring(0,5)
// console.log(newstring);

// const name = "James"
// const recount = 50
// console.log(name+recount+"Value");
// console.log(`Hello my nake is ${name} and my age is not ${recount}`);
// // .trim() removes the unwanted space
// const gameName = new String('manchester') //another way of using string
// console.log(gameName.__proto__);

// const name = "hitesh"
// const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));