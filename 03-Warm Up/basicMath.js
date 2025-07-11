

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
    
// function count(n) {
//   let  n = Math.abs(n)
//     return n
// }
// console.log(count(-123))

// Problem 1: Print a Rectangle of Stars
// Input: 3 rows, 4 columns

for(let i = 1; i < 4; i++) {
    
    let row = ""
    for(let j = 1; j< 5; j++) {
        row += "*"
    }
    console.log(row)
}

// 🔹 Problem 2: Print Multiplication Table (1 to 5)

for(let i = 1; i <=5; i++) {
    for(let j = 1; j <=10; j++){
        console.log(`${i} x ${j} = ${i * j}`)
    }
    console.log("_")
}

// 🔹 Problem 3: Print a Right-Angled Triangle

for(let i = 1; i <= 4; i++){
    let rightTriangle = ""
    for(let j = 1; j <=i; j++) {
        rightTriangle += "*"
    }
    console.log(rightTriangle)
}

// 🔹 Problem 4: Print a Number Grid
// Input: 3 x 3

for(let i = 1; i <= 3; i++) {
    let grid = ""
    for(let j = 1; j <= 3; j++) {
        grid += j + " "
    }
    console.log(grid)
}

// count digits
function countDigits(num) {
    if(num === 0) return 1;  // edge cases in case of 0 as an input
   let  count = 0;
    
    while(num > 0) {
    let digits = Math.floor(num / 10) // here we are decreasing the num
        count++     // increase count by 1
        num = digits  // update num by digits 
    }
    return count;
}
// let result = countDigits(3452)
console.log(result)


// second largest number 


function largeNum(arr) {
    let number = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > number) {  // here comparing current index num to previous greater num 
            number = arr[i] // then update previous greater num with current greater num
        }
    }
    return number; 
}
// let result = largeNum([3,4,5,7,9])
console.log(result)


// find second Largest number 

function secondLargestNum(num) {
    let first = -Infinity;
    let second = -Infinity;
    for(let i = 0; i < num.length; i++) {
        if(num[i] > first ) {
            second = first; // here assing old greater value in second variable 
            first = num[i]; // updating first variable to greater value
        } else if( num[i] > second && num[i] !== first) { // cheching conditoin if number will greater than second and not equal to first means greater num 
            second = num[i]; // update second variable 
        }
    }
    return  second === -Infinity ? "No second value ": second
}
// let result = secondLargestNum([5, 5, 5])
console.log(result)


// **** Pelindrome  ******

// checking pelindrome manually without build-in method
function isPelindrome(str) {
    // declare a variable to store reversed string
    let reverse = "";
    // reverse  string manually  using for loop 
    for(let i = str.length - 1 ; i >= 0; i--) {
        reverse += str[i];
        
     //   compare the string original to reverse
    }  if ( str === reverse) {
        return true;
    } else {
        return false;
    }
    
}
// let result = isPelindrome("madam")
console.log(result)

// checking pelindrom with built-in method
function checkPelindrome(srt) {
    let reversed = srt.split("").reverse().join("")
    if(reversed === srt) {
        return true;
    } else {
        return false;
    }
}
// let resulta = checkPelindrome("racecar")
console.log(resulta)


// array of string 



function countPelindrome(array) {
    let count = 0;
    
    for(let i = 0; i < array.length; i++) {
        // this variable will reset when inner loop will be finished
          let reversed = "";
          // here iterating each strign of an array 
      for(let j = array[i].length - 1; j >= 0 ; j--) {
        // storing each letter in variable to compare
          reversed += array[i][j];
      } 
      // now comparing after all iteration on string
      if( array[i] === reversed) {
              count++;
          }
    }
    return count;
}
// let result = countPelindrome(["madam", "hello", "noon", "racecar", "world"])
console.log(result)



function revInt(num) {
    let str = num.toString()
    console.log(str)
}
let resultaa = revInt(123)
console.log("strign is here",result)