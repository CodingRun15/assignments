/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let curr = numbers[0];
 let largest = numbers.reduce((accum,comb)=>{
     return Math.max(accum,comb);
 },curr)
 return largest;
}
let array = [5,14,12,18,78];
console.log(findLargestElement(array));