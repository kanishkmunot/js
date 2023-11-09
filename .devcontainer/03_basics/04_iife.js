// Immediately Invoked Function Expressions (IIFE)



//named iife
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();


// unNamed iife
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');

//global scope ke pollution se problem hoti hai kai baar, toh uss global scope ke variables hia ya jo bhi pollution hai, usse hatane ke liye we used iife

((name)=>{

    console.log("This is an IIFE");

})('name')
