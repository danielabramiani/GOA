function manualFilter(filterFunction, array) {
    let filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        if (filterFunction(array[i])) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
}

function exampleFilter(value) {
    return value > 50;
}

let numbers = [20, 30, 40, 50, 60, 70, 80];

let filteredNumbers = manualFilter(exampleFilter, numbers);
console.log(filteredNumbers); 

//2

function manual_map(mapFunction, array) {
    let mappedArray = [];
    for (let i = 0; i < array.length; i++) {
        mappedArray.push(mapFunction(array[i]));
    }
    return mappedArray;
}

//3

const originalArray = [1, 'apple', 2, 'banana', 3, 'cherry', 4, 'date'];

function filterIntegers(element) {
    return Number.isInteger(element);
}

const integersArray = originalArray.filter(filterIntegers);

console.log(integersArray);

//4

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function multiplyByTwo(value, index) {
    return index % 2 === 0 ? value * 2 : value;
}

const modifiedNumber = number.map(multiplyByTwo);

console.log(modifiedNumber);
