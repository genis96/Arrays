/*Write a function called "removeElement".

Given an array of elements, and a "discarder" parameter, "removeElement" returns an array containing the items in the given array that do not match the "discarder" parameter.

Notes:

If all the elements match, it should return an empty array.
If an empty array is passed in, it should return an empty array.

var output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]
 */

/* Pseudo Code 
1. create new array
2. iterate over the array
3. if array[i] is not equal to discarder then, 
4. array[i] will be pushed into the new Array
*/

function removeElement(array, discarder) {
    // your code here
    var newArr = [];
    for(var i = 0; i < array.length; i++) {
        if(array[i] !== discarder) {
            newArr.push(array[i]);
        }
    }
    return newArr;
  }

var output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]



/* Write a function called "keep".

Given an array and a keeper element, "keep" returns an array containing the items that match the given keeper element.

Notes:

If no elements match, "keep" should return an empty array.
var output = keep([1, 2, 3, 2, 1], 2)
console.log(output); --> [2, 2]
 */

/* Pseudo Code 
1. new var 
2. iterate
3. if the current [i] === the keeper number then,
4. push it into the newArr

*/

function keep(array, keeper) {
    // your code here
    var newArr = []; // (1)

    for( var i = 0; i < array.length; i++) { // (2)
        if(array[i] === keeper) { // (3)
            newArr.push(array[i]); // (4)
        }
      }
    return newArr;
  }

var output = keep([1, 2, 3, 2, 1], 2)
console.log(output); //--> [2, 2]


/* Write a function called "computeAverageOfNumbers".

Given an array of numbers, "computeAverageOfNumbers" returns their average.

Notes:

If given an empty array, it should return 0.
var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3
*/
/* My Pseduo Code 
1. create sum variable and average variable
2. use conditional to set a return of 0 
3. loop over nums 
4. set the equation using sum and current number: num[i]
5. set the average and return the average
*/

function computeAverageOfNumbers(nums) {
    //(2)
    var sum = 0;
    var average = 0;

    if(nums.length < 1) { // (2)
        return 0;
    }

    for(var i = 0; i < nums.length; i++) { // (3)
        sum = sum + nums[i]; // (4)
    }
    average = sum / nums.length; // (5)
    return average;
  }

var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3


//You can also store nums.length in a variable 

function computeAverageOfNumbers(nums) {
    // your code here
    var sum = 0;
    var average = 0;
    var numLength = nums.length;

    if(nums.length < 1) {
        return 0;
    }

    for(var i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    average = sum / numLength;
    return average;
  }

var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3

