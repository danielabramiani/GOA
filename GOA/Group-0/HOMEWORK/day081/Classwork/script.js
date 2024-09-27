// //1

// function manualMap(lst, func) {
//     // Use the map method to apply the provided function to each element of the input list
//     return lst.map(func);
// }

// // Example usage:
// let numbers = [1, 2, 3, 4, 5];

// // Define a function to square a number
// let square = x => x ** 2;

// // Use manualMap to square each number in the list
// let squaredNumbers = manualMap(numbers, square);

// // Print the squared numbers
// console.log(squaredNumbers); 

//2

const customMap = (numbers, subFunc) => numbers.map((n, i) => i % 2 ? n : subFunc(n));

let numbers = [1, 2, 3, 4, 5];
let square = x => x ** 2;
let squaredEvenIndices = customMap(numbers, square);
console.log(squaredEvenIndices); 