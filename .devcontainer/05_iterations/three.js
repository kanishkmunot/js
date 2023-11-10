// for of

// ["" , "" , ""]

// const arr = [1,2,3,4,5,6,7,8,9,10]

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
    
// }

// for (const num of arr) {
//     console.log(num);
// }

// Maps

const map = new Map ()
// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
// console.log(map);

for (const [key,value] of map) {
    console.log(key,':-',value);
}


