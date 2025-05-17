// console.log will output a message in the developer console
console.log("it worked"); // single-line comment can go beside code

/* this is the multi-line comment starts 
starts with a /* and a * and closes with a * and a */ 

let ourClassNum = "J207";
let numStudents = 9; // with a number, you don't need quotes

console.log(ourClassNum);

// if you declare a variable with let, you can change its value
numStudents = 21;

console.log(numStudents);

// if you declare a value with const, you can't change its value 
// ourClassNum = "C128"; // Trying to change a const variable will give you an error, and stop the code

console.log(ourClassNum);

// const and let cannot be declared (or recreated)
// let numStudents = 25; // (this will also give you an error)

/* ***********************
   JavaScript Datatypes
   ********************** */

// storing a value of true or false is called a boolean
let doorClosed = true;
console.log(doorClosed);

// you can create an empty variable, which will return undefined
let whiteboardContent;
console.log(whiteboardContent); // should give you undefined

// you can use the keyword "null" (which means nothing)
let classKids = null;

// number - can be written without quotes (computer can recognize them)
// string - is text that must be written in quotes

// difference between == and === 
const numlights = 12; // this variable is storing a number
const numChairs = "12"; // this variable is storing a piece of text

console.log(numlights == numChairs); // gives you true because == checks only value
console.log(numlights === numChairs); // gives you false because === checks both value and datatype

// two equals == checks if they are the same value
// three equals === checks if they are the same value and same datatype

/******************************
 A practical example using the form field
 ******************************/

// Get the field by its ID, and check if the user clicked away
document.getElementById("answer").addEventListener("blur", function () {
    // Get the value for the form field and put it into a variable
    const userAnswer = this.value;
    // The keyword "this" refers to the element currently being interacted with
    // In this case, it's the input field with the ID "answer"
    console.log(userAnswer);

    // Use an if statement to check if the value is correct
    if (userAnswer.toLowerCase() === "document") {
        // Add feedback into the field (or perform any action you'd like)
        document.getElementById("feedback").textContent = "Correct Answer!";
    } else {
        document.getElementById("feedback").textContent = "Try again!";
    }
});
