// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.


let user = { 
    name: "John",
    surname: "Smith"
};

user.name = "Pete"
delete user.name;


// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

function isEmpty(obj) {
    return (Object.keys(obj).length === 0) ? true : false;
}

let schedule = {};

alert( isEmpty(schedule) )

schedule["8:30"] = "get up";

alert( isEmpty(schedule) )

// We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

function sumObj(obj) {
    console.log ( Object.values(obj).reduce(( a,b ) => a + b ) );
}

sumObj(salaries);

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
console.log(menu);

function multiplyNumeric(obj) {
    for (let key in obj) {
        (typeof obj[key] === "number") ? obj[key] *= 2 : console.log("nothing happens");
    }
}

multiplyNumeric(menu);
console.log(menu);