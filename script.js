// ----Recursion----

// Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.
// Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6.

function sumRange(n, total = 0) {
    if (n <= 0) {
        return total
    }
    else { 
        return sumRange(n - 1, total + n)
    }
}

// Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.
// console.log(power(2, 4)); // 16
// console.log(power(2, 3)); // 8
// console.log(power(2, 2)); // 4 
// console.log(power(2, 1)); // 2
// console.log(power(2, 0)); // 1

function power(n, p) {
    if (p == 1) {
        return n;
    } else {
        return n * power(n, p - 1)
    }
}

// Write a function that returns the factorial of a number. As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it, and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.
// Sample
// factorial(5); // 5 * 4 * 3 * 2 * 1 === 120

function fact(n) {
    if (n == 1) {
        return n;
    } else {
        return n * fact(n - 1)
    }
}

// Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function
// Sample


function all(arr, callb){
	var copy = copy || arr.slice(); // shallow copies array

	if(copy.length === 0) return true;

	if(callb(copy[0])){
		copy.shift(); // remove first element from array
		return all(copy, callb);
	} else {
		return false;
	}
}

var allAreLessThanSeven = all([2, 4,], function(num){
	return num < 7;
});
console.log(allAreLessThanSeven);

// Write a function called productOfArray which takes in an array of numbers and returns the product of them all
// Samples
// var six = productOfArray([1,2,3]) // 6
// var sixty = productOfArray([1,2,3,10]) // 60

function productOfArray() {

}

// Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.
// Sample
// var nestedObject = {
//     data: {
//         info: {
//             stuff: {
//                 thing: {
//                     moreStuff: {
//                         magicNumber: 44,
//                         something: 'foo2'
//                     }
//                 }
//             }
//         }
//     }
// }

// let hasIt = contains(nestedObject, 44); // true
// let doesntHaveIt = contains(nestedObject, "foo"); // false

function contains() {

}

// Given a multi-dimensional integer array, return the total number of integers stored inside this array
// Sample
// var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7

function totalNum() {

}

// Write a function that sums squares of numbers in list that may contain more lists
// Sample
// var l = [1,2,3]; 
// console.log(SumSquares(l)); // 1 + 4 + 9 = 14

// l = [[1,2],3]; 
// console.log(SumSquares(l)); // 1 + 4 + 9 = 14

// l = [[[[[[[[[1]]]]]]]]] 
// console.log(SumSquares(l)); // 1 = 1

// l = [10,[[10],10],[10]] 
// console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400

function sumSquares() {
}

// The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.
// Sample
// console.log(replicate(3, 5)) // [5, 5, 5]
// console.log(replicate(1, 69)) // [69]
// console.log(replicate(-2, 6)) // []

function replicate() {
}

// The Fibonacci Sequence, which sums each number with the one before it, is a great example of a problem that can be solved recursively.
// 1. Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the fibonacci sequence. Using an example input of 8, this method should return the array [0, 1, 1, 2, 3, 5, 8, 13].
// 2 .Now write another method fibsRec which solves the same problem recursively. This can be done in just a couple of lines (or 1 if you???re crazy, but don???t consider either of these lengths a requirement??? just get it done).

function fibonacci() {
}

