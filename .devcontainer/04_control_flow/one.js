// if

if (3!=2) {
    
}
if (false) {
    
}

// ==, <, >, >=, <=, !=

const temperature = 46
if(temperature<50){
    console.log("Less than 50");
}else
{console.log("Temperature is greater than 50");}


const score = 300

if (score>200) {
    const power="fly"
    console.log(`User power: ${power}`);
}


const balance = 400
if (balance>500) console.log("test"); //IMPLICIT SCOPE (ONLY FOR A SINGLE LINE)

if (balance<500) {
    console.log("less than");
} else if (balance < 750) {
    console.log("Less than 750");
} else {
    console.log("Less than 1200");
}

const userLoggesIn = true
const debitCard = true

if (userLoggesIn && debitCard && 2==2) {
    console.log("Allowed to buy course");
}
