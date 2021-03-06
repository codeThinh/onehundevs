// Create all these programs in a generic fashion: the program output should reflect any update in the array's content.

// Musketeers
// Write a program that:

    // Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
    // Shows each array element using a for loop.
    // Adds the "D'Artagnan" value to the array.
    // Shows each array element using the forEach() method.
    // Remove poor Aramis.
    // Shows each array element using a for-of loop.

let musketeers = ["Athos", "Porthos", "Aramis"];

for ( let i = 0; i < musketeers.length; i++ ) {
    console.log(musketeers[i]);
}

musketeers.push("D'Artagnan")
musketeers.forEach( x => console.log(x) )

let threeMusketeers = musketeers.filter( x => x !== "Aramis" );
for ( const x of threeMusketeers ) {
    console.log( x );
}

// Sum of values
// Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).

const values = [3, 11, 7, 2, 9, 10];

console.log(values.reduce( ( a, b ) => a + b ));

// Array maximum
// Write a program that creates the following array, then calculates and shows the array's maximum value.

console.log( Math.max(...values) );

// List of words
// Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".

var result = []

function stop(word) {
    if ( word.toLowerCase() !== "stop" ) {
        result.push(word);
    } else {
        console.log(result);
    }
}

stop("Hello");
stop("Goodbye");
stop("stop");