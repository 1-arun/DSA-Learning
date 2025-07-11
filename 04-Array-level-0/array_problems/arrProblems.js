

// 🟢 1 Remove Duplicates

function removeDuplicate(arr) {
    let updateArr = [];
    if(arr.length === 0 ) return updateArr; // edges cases when arr is empty return empty arr
    updateArr.push(arr[0]);         // push first lement in array to compare all element in array
    for(let i = 1; i < arr.length; i++) {
        if( arr[i] !== arr[i -1 ]) {   // currect element should not match with previous element ;
            updateArr.push(arr[i])   
        }
    }
    return updateArr;
    
}
let result = removeDuplicate([1,2,2,3,3,4,5,5])
// console.log(result)


// 🟢 2 in unsorted array of integers, if duplicates return true , else false 

    function isDuplicate(arr) {
        let itsDup = [];
        for(let i = 0; i < arr.length; i++) { // first we will loop in original array
        // here we will loop on the storing array
        for(let j = 0; j < itsDup.length; j++) {
            if(arr[i] === itsDup[j]) {
                return true
            }
        }
        // if not found store it;
        itsDup.push(arr[i])
        }  
    return false 
    }
    let resultDup = isDuplicate([1, 2, 3, 2])
    // console.log(resultDup)


// 🟢 3. 👉 You have to remove all duplicate elements from an array and return a new array with only unique elements.

    function returnNewArr(arr) {
        let newArr = []
       for(let i = 0; i < arr.length; i++) {
        let found = false;

        for(let j = 0; j < newArr.length; j++) {
            if(arr[i] === newArr[j]) {
                found = true;
                break;
            }
        }
        if(!found) {
            newArr.push(arr[i])
        }
       }
       return newArr;
    }
    let resulta = returnNewArr([1, 2, 3, 2, 4, 3])
    // console.log(resulta);
    
// 🟢 4 Remove All Occurrences of a Value


function removeOcc(arr, ele) {
    let finalArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== ele) {
            finalArr.push(arr[i])
        }
    }
    return finalArr
}
let resultOcc = removeOcc([1, 2, 3, 2, 4, 2], 2)
// console.log(resultOcc)

// 🟢 5 Remove Element at a Specific Index

function removeEle(arr, ind) {
    let newElement = [];
    for(let i = 0; i < arr.length; i++) {

        if( i !== ind ) {
        newElement.push(arr[i])
        }
       
    }
    return newElement
}
let resultEle = removeEle( [10, 20, 30, 40] , 2)
// console.log(resultEle);

// 🟢 6 Reverse String

function reverseStr(str) {
    if ( str === "" ) return ""
    let revStr = "";
    for(let i = str.length - 1; i >= 0; i--) {
        revStr += str[i] 
    }
    return revStr
}
let resultrevStr = reverseStr("hello")
// console.log(resultrevStr)


// 🟢 7 Reverse a Sentence Word by Word

function revSetennce(str) {
    let word = str.split(" ")  // split does array of string   n-word
    let revSentence = "";   // 1-word
    for(let i = word.length - 1; i >= 0; i--) {  // 1-word   so total is 3 means O(1)
        revSentence +=  word[i] // n words 
    }
    return revSentence;   
} 
let resultSentence = revSetennce("my name is Arun") 
// console.log(resultSentence);


// 🟢 8 Best Time to Buy and Sell Stock (Easy Version)
// step1. to find buy price iterate over array for  choose smallest prices from element, then compare with current element to buyprices and update it
// alwasy update current profit to max profit then return that
function sellStock(arr) {
    let buyPrices = Infinity;  // 
    let maxProfit = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < buyPrices) {
            buyPrices = arr[i]
            console.log("this is my buy prices",buyPrices)
            
        } else {
            let  Profit = arr[i]  - buyPrices
            if( Profit > maxProfit) {
                maxProfit = Profit
            }

            console.log("this is our max selling price", arr[i]);



        } 
    }
    return maxProfit;
    
}
let resultMaxProfit = sellStock([7, 1, 5, 3, 6, 4])
console.log(resultMaxProfit);
