// *Variables*
// Create a variable and console log the value
let leon = "hello world";
console.log(leon);


// Create a variable, add 10 to it, and alert the value
let i = 0;
alert(i+10);



// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtract(a,b,c,d) {
    alert( a - b - c - d );
}

// Create a function that divides one number by another and returns the remainder
function mod(a,b) {
    return a%b;
}


// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(a,b) {
    return ((a+b) > 50 ? alert("Jumanji") : console.log(a+b));
}


// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function zebra(a,b,c) {
    return ((a*b*c)%3 === 0 ? alert("ZEBRA") : alert((a*b*c)%3));
}