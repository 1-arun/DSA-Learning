
// while loop
let num = 1
while (num <=5 ) {
    // console.log(num)
    num++
}


// for loop
for(let i = 5; i <=10; i++) {
    // console.log(i)
}


// do while loop
let i = 10
do{
    // console.log(i)
    i++
} while (i <=15) 

// while loop
// checking email box until its empty

// let inbox = 3 ;
// while( inbox > 0 ) {
//     console.log("some mesage is their")
//     inbox--
// }
// console.log("inbox is empty")

// let pin = 1234;
// let enteredPin;

// do {
//     enteredPin = 1234; // simulate user input (use readline in real VS Code)
//     console.log("Checking PIN...");
// } while (enteredPin !== pin);

// console.log("Access granted!");


// 1. print number form 1 to n

function printNum(n) {
    for(let i = 1; i <=n; i++) {
        console.log(i)
    }
}
//  printNum(5)
//  console.log(result);  (" if will use log here it will print undefine because it is returning nothig thats why ")
 

// 2. write a functon that return sum of n number from 1 to n 

function sumNumbers(n) {
        let num = 0
    for(let i = 1; i<=n; i++) {
         num += i
    }
    return num
}
// let result = sumNumbers(4)
// console.log(result);

// 3. Write a function countEven(start, end) that counts even numbers in range

function countEven(start, end) {
        let evenCount = 0;
    for( let i = start; i <= end; i++) {
        if(i % 2 === 0  ) {
            evenCount++ ;
            console.log(i)
        }
    }
    return evenCount;
}

// let result = countEven(10, 20)
// console.log(result);


// 4. Write a function multiTable(n) that prints multiplication table of n

function multiTable(n) {
    let table = []
    for(let i = 1; i<= 10 ; i++) {
        table.push(n * i)
    }
    return table
}

//  let final = multiTable(3)
// console.log(final)

// 5.  Write a function reverseNumber(n) that reverses digits of a number

function reverseNumber(n) {
    let rev = 0;
    while( n > 0 ) {
        let digits = n % 10; // first get last gigits like 5, then update rev 
        rev = rev * 10 + digits; // update rev variable
        n = Math.floor(n / 10) // if we do like (12345 / 10 ) it give quotient and math.floor remove that then it 1234
    }
    return rev;
}
let result = reverseNumber(52)
// console.log(result)

// same as above problem

function reverseNum(n) {
    let rev = 0
    while(n > 0) {
        let digit = n % 10
        rev = rev *  10 + digit
        n = Math.floor(n / 10)
    }
    return rev
}

let resulta = reverseNum(1234500)
// console.log("this is our result",resulta)


// count digits 
    
function count(n) {
  let  n = Math.abs(n)
    return n
}
console.log(count(-123))

