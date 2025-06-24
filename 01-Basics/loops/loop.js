
/*🔹 1. Why Use Loops?
If you want to do something again and again — like print numbers from 1 to 10 — you use a loop instead of writing the same line many times.
*/

//  2. for Loop (Basic)
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 3. while Loop
// 👉 Use when you don’t know how many times you'll loop — only the condition matters.

let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

/* 🔹 4. do...while Loop
It runs at least once even if the condition is false.
*/
 let k = 0;
while (k < 5) {
  console.log(k);
  k++;
}


/* 🔹 5. for...of Loop (for Arrays)
Used to loop through arrays or iterable items.
*/
let numbers = [1, 2, 3];
for (let num of numbers) {
  console.log(num);
}


/*🔹 6. for...in Loop (for Objects)
Used to loop through object keys.
*/
let person = { name: "Arun", age: 25 };
for (let key in person) {
  console.log(key + ": " + person[key]);
}

/*🔹 7. break and continue
🔹 break = stop the loop early
*/
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}
// Output: 1 2

//  continue = skip one loop step
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
// Output: 1 2 4 5


// 🔹 8. Nested Loops (Loop inside another loop)
for (let i = 1; i <= 2; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}


//🔹 9. Looping Through Arrays
let arr = [10, 20, 30];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}


// 🔹 10. Looping with Array.forEach() (Advanced array method)
let nums = [1, 2, 3];
nums.forEach(function (num) {
  console.log(num);
});

// 🔹 11. map() – Create new array by modifying items
let num = [1, 2, 3];
let doubled = num.map(n => n * 2);
console.log(doubled); // [2, 4, 6]







