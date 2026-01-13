// //1-masala
// function mostFrequent(arr) {
//     let counts = {};
//     let maxCount = 0;
//     let maxElement = null;
//     for (let item of arr) {
//         counts[item] = (counts[item] || 0) + 1;

//         if (counts[item] > maxCount) {
//             maxCount = counts[item];
//             maxElement = item;
//         }
//     }
//     return { element: maxElement, count: maxCount };
// }
// let arr = [3, 7, 3, 2, 3, 7, 7, 8, 7];
// console.log(mostFrequent(arr));

//2-masala

// function countEvens(arr) {
//     let count = 0;
//     for (let num of arr) {
//         if (num % 2 === 0) {
//             count++;
//         }
//     }

//     return count;
// }
// console.log(countEvens([2, 1, 2, 3, 4])); 


//3-masala

// function uniqueElements(arr) {
//     let counts = {};
//     let result = [];
//     for (let num of arr) {
//         counts[num] = (counts[num] || 0) + 1;
//     }
//     for (let num of arr) {
//         if (counts[num] === 1) {
//             result.push(num);
//         }
//     }
//     return result;
// }
// console.log(uniqueElements([1, 2, 2, 3, 4, 4, 5]));

//4-masala

// function reverseWords(str) {
//     return str.split(" ").reverse().join(" ");
// }

// // Test
// console.log(reverseWords("Men JavaScriptni  va umuman Webdevops ni o‘rganmoqdaman"));


//5-masla

// function isOnlyDigits(str) {
//     for (let char of str) {
//         if (char < '0' || char > '9') {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isOnlyDigits("12345")); 
// console.log(isOnlyDigits("123a5")); 

//6-masala

// function wordsWithTwoEs(arr) {
//     let result = [];
//     for (let word of arr) {
//         let count = 0;
//         for (let char of word) {
//             if (char === 'e') count++;
//         }
//         if (count >= 2) {
//             result.push(word);
//         }
//     }
//     return result;
// }
// console.log(wordsWithTwoEs(
//     ["elephant", "apple", "tree", "cheese", "banana"]
// ));


//7-masala

// function alphabeticWords(arr) {
//     let result = [];
//     for (let word of arr) {
//         let sorted = word.split('').sort().join('');
//         if (word === sorted) {
//             result.push(word);
//         }
//     }
//     return result;
// }

// console.log(alphabeticWords(["abs", "dog", "xyz", "apple"]));


//8-masala

// function toArray(num) {
//     return String(num).split('').map(Number);
// }

// // Test
// console.log(toArray(235)); 
// console.log(toArray(0));  
// function toNumber(arr) {
//     return Number(arr.join(''));
// }
// console.log(toNumber([2, 3, 5])); 
// console.log(toNumber([0]));    

//9-masala

// function measureDepth(arr) {
//     if (!Array.isArray(arr)) return 0;
//     return 1 + measureDepth(arr[0]);
// }
// console.log(measureDepth([]));                
// console.log(measureDepth([[]]));              
// console.log(measureDepth([[[]]]));             
// console.log(measureDepth([[[[[[[[[[]]]]]]]]]])); 

//10-masala

// function digitSum(num) {
//     let sum = 0;
//     let digits = String(num);

//     for (let d of digits) {
//         sum += Number(d);
//     }
//     return sum;
// }
// console.log(digitSum(4567)); 




