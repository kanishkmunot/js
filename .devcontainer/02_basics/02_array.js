marvel_hero = ["Spider-Man","Iron-Man","Thor","Hulk"]
dc_hero = ["Super-Man","Bat-Man","Flash","Aqua-Man"]
// Spread operator
const all_heros = [...marvel_hero,...dc_hero]
console.log(all_heros);
// Concat can also be used

const another_array = [1,2,3,[4,5,6],[7,8,[9]]]

const real_another_array = another_array.flat(Infinity)

// flat --> Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

console.log(real_another_array);

console.log(Array.isArray("Hitman")); // To check if it's an array or not
console.log(Array.from("Hitman")); // To make an array
console.log((Array.from({name: "kite"}))); //interesting

let score1 = 100 
let score2 = 300
let score3 = 900

console.log(Array.of(score1,score2,score3));