//1
function sumArray(arr) {
    let sum = 0;
    arr.forEach(num => {
        sum += num;
    });
    return sum;
}

//2
function logArrayElements(arr) {
    arr.forEach((element, index) => {
        console.log(`index ${index}: ${element}`);
    });
}

//3

function productOfArray(arr) {
    return arr.reduce((acc, curr) => acc * curr, 1);
}

//4
function mergeArrays(arr) {
    return arr.reduce((acc, curr) => acc.concat(curr), []);
}

//5
function manualForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

//6

function manualReduce(arr, callback, initialValue) {
    let accumulator = initialValue === undefined ? arr[0] : initialValue;
    for (let i = initialValue === undefined ? 1 : 0; i < arr.length; i++){
        accumulator= callback(accumulator, arr[i], i, arr);
    }
    return accumulator;
}

//7
function countWordFrequencies(arr) {
    return arr
        .flatMap(sentence => sentence.split(' '))
        .reduce((acc, word) => {
            acc[word] = (acc[word] || 0) + 1;
            return acc;
        }, {});
}