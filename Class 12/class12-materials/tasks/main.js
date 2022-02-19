
// Task 1

let admin, name;

name = "John";

admin = name;

console.log(admin);


// Task 2

const ourPlanet = "Earth";
let currentUser = "Current User";




// FUNCTIONS

// Task 1

function checkAge(age) {
    return ( age > 18 ) ? true : confirm('Did parents allow you?');
}

function checkAgeOr(age) {
    return ( age > 18 ) || confirm('Did parents allow you?');
}


// Task 2

function min(a,b) {
    return ( a < b ) ? a : b;
}

// Task 3

function power(a,b) {
    return a ** b;
}