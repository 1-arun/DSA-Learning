
/**
 🔹 1. What Are Conditionals?
Conditionals are used to make decisions in code — like:

"If this is true, then do this — otherwise do that."
 */

// 🔹 2. if Statement (Basic)
// let age = 20;

// if (age >= 18) {
//   console.log("You can vote.");
// }
/* 🔹 3. if...else
Used when you want to do one thing if true, and something else if false.
*/
// let ages = 16;

// if (age >= 18) {
//   console.log("You can vote.");
// } else {
//   console.log("You cannot vote.");
// }


/*
🔹 4. if...else if...else
Used to check multiple conditions in order.
 */

// let marks = 85;

// if (marks >= 90) {
//   console.log("Grade A");
// } else if (marks >= 75) {
//   console.log("Grade B");
// } else {
//   console.log("Grade C");
// }


// Logical Operators
// let ag = 20;
// let hasID = true;

// if (ag >= 18 && hasID) {
//   console.log("Entry allowed");
// }


// 🔹 7. Ternary Operator (Short if...else)
// condition ? value_if_true : value_if_false;
// let arun = 18;
// let result = (arun >= 18) ? "Adult" : "Minor";
// console.log(result); // Adult


// 🔹 8. switch Statement (For multiple exact matches)
// let fruit = "apple";

// switch (fruit) {
//   case "apple":
//     console.log("Apple is red.");
//     break;
//   case "banana":
//     console.log("Banana is yellow.");
//     break;
//   default:
//     console.log("Unknown fruit.");
// }


/**
 🔹 9. Truthy and Falsy Values
Some values are automatically treated as true or false in conditions.

learn from readme.md

 */
/*  OR (||) Operator
 condition1 || condition2
It returns true if at least one of the conditions is true.
*/
// let amit = 16;
// let hasPermission = true;

// if (amit >= 18 || hasPermission) {
//   console.log("You can enter.");
// } else {
//   console.log("You cannot enter.");
// }


// 1. Check if number is positive, negative, or zero

function checkSign(num) {
    if( num > 0) {
      return " Number is positive"
    } else if (num < 0 ) {
      return " Number is negative "
    } else  {
      return "Number is zero"
    }

} 
let resultCheckSing = checkSign(0)
// console.log(resultCheckSing)


// Find grade on Marks
function findGrade(n) {
  if( n >= 80) {
    return "Congrats GRADE A"
  } else if (n >=60) {
    return "Umm! GRADE B"
  } else {
    return "Poor! GRADE C"
  }
}
let resultGrade = findGrade(70) 
console.log(resultGrade)

// Check if year is leap year
 function checkLeapYear(num) {
   if(num % 4 === 0 ) {
    return "Might be  leap year"
   } else if ( num % 100 !== 0) {
      return " still a  leap year"
   } else if ( num % 100 === 0 && num % 400 === 0 ) {
    return " leap year"
   }
 }

 let resultLeapYear = checkLeapYear(2025)
 console.log(resultLeapYear)


 for( let i = 0; i < n ; i++) {
      // statement
 }