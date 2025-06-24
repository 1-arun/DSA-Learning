

// ====================================
// 1. BASIC FUNCTIONS
// ====================================

// 1. Regular Function
function greet() {
  console.log("Hello, Arun!");
}

// greet(); 

// 2. Function with parameter
function greet(name) {
  console.log("Hello, " + name + "!");
}

// greet("Arun"); 

// 3. Function with return value
function add(a, b) {
  return a + b;
}

let result = add(3, 4);
// console.log(result); 

// 4. Function Expression
const sayHi = function () {
  console.log("Hi!");
};

// sayHi(); 

// 5. Arrow Function (ES6+)
const sayBy = function () {
  console.log("Hi!");
};

// sayBy(); 

// 6. Arrow function with single parameter and single expression
const square = n => n * n;
// console.log(square(5)); 


// 7. Default Paraemter
function greet(name = "Guest") {
  console.log("Hello, " + name);
}

greet("arn"); 


// 8. Rest Parameter
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}

// console.log(sum(1, 2, 3, 4)); 


// 9. Callback Functions
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Arun", sayBye);

/*10. Closer
A closure is a function that remembers its outer (lexical) scope, even after the outer function has finished executing.
*/
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
// counter(); 

// 11. Anonymous Function
// A function without a name (often used as a callback).
setTimeout(function() {
  console.log("This is an anonymous function.");
}, 1000);

// 12.  Immediately Invoked Function Expression (IIFE)
(function() {
  console.log("IIFE running");
})();

// Real use IIFE
// It creates a private scope, so variables inside don't leak outside.
(function () {
  let secret = "I am private";
  console.log(secret);
})();
console.log(secret); // ❌ Error: secret is not defined

// 13. Constructor Function
function Car(name) {
  this.name = name;
}
const p = new Car("Arun");


// 14. Generator Function (Advanced)
// Used to pause and resume function execution using yield.
function* gen() {
  yield 1;
  yield 2;
}


// 15. Higher-Order Function
// A function that takes other functions as arguments or returns a function.
function higherOrder(fn) {
  return function() {
    fn();
  };
}











