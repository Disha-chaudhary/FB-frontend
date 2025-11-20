


/*
 * 1. VARIABLES & DATA TYPES
 */

var a = 10;            // var (function scoped)
let b = 20;            // let (block scoped)
const c = 30;          // const (cannot be changed)

let name = "Disha";    // string
let age = 20;          // number
let isStudent = true;  // boolean
let empty = null;      // null
let unknown;           // undefined

console.log("Variables:", a, b, c);


/*
 * 2. OPERATORS
**/

let x = 5 + 3;         // addition
let y = 10 - 4;        // subtraction
let z = 3 * 4;         // multiplication
let w = 12 / 3;        // division
let rem = 10 % 3;      // modulus

console.log("Operators:", x, y, z, w, rem);


/*
 * 3. CONDITIONAL STATEMENTS
 **/

let marks = 75;

if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 60) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}


/*
 * 4. SWITCH STATEMENT
**/

let day = 3;

switch(day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    default: console.log("Other Day");
}


/*
 * 5. LOOPS
***/

// For loop
for (let i = 1; i <= 5; i++) {
    console.log("For Loop:", i);
}

// While loop
let k = 1;
while (k <= 3) {
    console.log("While Loop:", k);
    k++;
}

// Do-While loop
let j = 1;
do {
    console.log("Do-While:", j);
    j++;
} while (j <= 2);


/***
 * 6. FUNCTIONS
 */

function greet() {
    console.log("Hello from a function!");
}
greet();

// Function with parameters
function add(a, b) {
    return a + b;
}
console.log("Add:", add(5, 7));


// Arrow function
const multiply = (a, b) => a * b;
console.log("Multiply:", multiply(4, 5));




let fruits = ["Apple", "Banana", "Mango"];

console.log("Array:", fruits);
console.log("First fruit:", fruits[0]);

fruits.push("Orange");      // add
fruits.pop();               // remove last
fruits.shift();             // remove first
fruits.unshift("Kiwi");     // add at beginning

console.log("Updated Array:", fruits);


/**
 * 8. OBJECTS
***/

let student = {
    name: "Disha",
    age: 20,
    course: "JavaScript",
    greet: function() {
        console.log("Hello, I am " + this.name);
    }
};

console.log("Object:", student);
student.greet();


/***********************
 * 9. DOM MANIPULATION
 ************************/

// Only works when linked to HTML
// document.getElementById("demo").innerText = "Hello DOM!";


/***********************
 * 10. EVENTS
 ************************/

// document.getElementById("btn").addEventListener("click", function() {
//     alert("Button Clicked!");
// });


/***********************
 * 11. STRINGS
 ************************/

let msg = "Hello JavaScript!";

console.log("Length:", msg.length);
console.log("Uppercase:", msg.toUpperCase());
console.log("Substring:", msg.substring(0, 5));


/***********************
 * 12. MATH OBJECT
 ************************/

console.log("Random:", Math.random());
console.log("Round:", Math.round(4.7));
console.log("Power:", Math.pow(2, 3));


/***********************
 * 13. DATE OBJECT
 ************************/

let now = new Date();
console.log("Current Date:", now);


/***********************
 * 14. JSON
 ************************/

let jsonObj = {
    name: "Disha",
    age: 20
};

let jsonString = JSON.stringify(jsonObj);
console.log("JSON String:", jsonString);

let jsonBack = JSON.parse(jsonString);
console.log("Parsed JSON:", jsonBack);


/***********************
 * 15. SETTIMEOUT & SETINTERVAL
 ************************/

setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000);

let count = 0;
let interval = setInterval(() => {
    console.log("Interval running:", count++);
    if (count === 3) clearInterval(interval);
}, 1000);


/***********************
 * 16. BASIC CLOSURE
 ************************/

function outer() {
    let count = 0;
    return function() {
        count++;
        console.log("Closure Count:", count);
    };
}

let inc = outer();
inc();
inc();


/***********************
 * 17. IIFE (Immediately Invoked Function Expression)
 ************************/

(function() {
    console.log("IIFE executed!");
})();


/***********************
 * 18. ERROR HANDLING
 */

try {
    throw new Error("Something went wrong!");
} catch (err) {
    console.log("Error Caught:", err.message);
}




let promise = new Promise((resolve) => {
    setTimeout(() => resolve("Promise resolved!"), 1000);
});

promise.then((msg) => console.log(msg));




class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    show() {
        console.log(`Car: ${this.brand} ${this.model}`);
    }
}

let car1 = new Car("Honda", "City");
car1.show();
