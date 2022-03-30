//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let numberArray = [1, 2, 3, 4];
// alert( numberArray.reduce( (a,b) => a + b ) );

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

console.log( numberArray.map( x => ( x**2 ) ) );


//Create a function that takes string
//Print the reverse of that string to the console

function reverseLog(str) {
    console.log(str.split("").reverse().join(""));
}

reverseLog("Racecar");

//Create a function that takes in a string
//Alert if the string is a palindrome or not

function isPalindrome(palindrome) {
    console.log ( (palindrome === palindrome.split("").reverse().join("")) ? true : false);
}

isPalindrome("racecar");