// Math.min
console.log(Math.min(6, 6, 5, 4, 3, 2, 1));

function returnMinimal(array) {
    return `Minimal number in the list is: ${Math.min(...array)}`;
}

console.log(returnMinimal([6, 6, 5, 4, 3, 2, 1]));
console.log(returnMinimal([5, 4, 10, 12, 3, 7, 5]));
console.log(returnMinimal([100, 90, 80, 70, 60, 50]));

// Math.max
console.log(Math.max(6, 6, 5, 4, 3, 2, 1));

function returnMaximal(array) {
    return `Maximal number in the list is: ${Math.max(...array)}`;
}

console.log(returnMaximal([6, 6, 5, 4, 3, 2, 1]));
console.log(returnMaximal([5, 4, 10, 12, 3, 7, 5]));
console.log(returnMaximal([100, 90, 80, 70, 60, 50]));

// Math.floor
console.log(Math.floor(3.7));
console.log(Math.floor(5.2));
console.log(Math.floor(-3.2));

function returnFloor(number) {
    return `Floor for ${number} is: ${Math.floor(number)}`;
}

console.log(returnFloor(3.7));
console.log(returnFloor(5.2));
console.log(returnFloor(-3.2));

// Math.ceil
console.log(Math.ceil(3.7));
console.log(Math.ceil(5.2));
console.log(Math.ceil(-3.5));
console.log(Math.ceil(3));

function returnCeil(number) {
    return `Ceiling for ${number} is: ${Math.ceil(number)}`;
}

console.log(returnCeil(3.7));
console.log(returnCeil(5.2));
console.log(returnCeil(-3.5));

// Math.pow
console.log(Math.pow(7, 2));
console.log(Math.pow(16, 0.5));
console.log(Math.pow(20, 2));

function returnPower(number, power) {
    return `${number} in power of ${power} is: ${Math.pow(number, power)}`;
}

console.log(returnPower(7, 2));
console.log(returnPower(16, 0.5));
console.log(returnPower(20, 2));

// Math.round
console.log(Math.round(-5.5));
console.log(Math.round(-5.2));
console.log(Math.round(-5.7));
console.log(Math.round(-6));

function returnRound(number) {
    return `Rounded ${number} is: ${Math.round(number)}`;
}

console.log(returnRound(-5.5));
console.log(returnRound(-5.2));
console.log(returnRound(-5.7));
console.log(returnRound(-6));

// Math.sqrt
console.log(Math.sqrt(4));
console.log(Math.sqrt(9));
console.log(Math.sqrt(10000));

function returnRoot(number) {
    return `Square root from ${number} is: ${Math.sqrt(number)}`;
}

console.log(returnRoot(4));
console.log(returnRoot(9));
console.log(returnRoot(10000));

// Math.trunc
console.log(Math.trunc(14.14));
console.log(Math.trunc(3.29));
console.log(Math.trunc(1.182));

function returnTrunc(number) {
    return `Truncated version of ${number} is: ${Math.trunc(number)}`;
}

console.log(returnTrunc(14.14));
console.log(returnTrunc(3.29));
console.log(returnTrunc(1.182));

// Math.abs
console.log(Math.abs(5));
console.log(Math.abs(-5));
console.log(Math.abs(10));
console.log(Math.abs(-10));

function returnAbs(number) {
    return `Absolute value for ${number} is: ${Math.abs(number)}`;
}

console.log(returnAbs(5));
console.log(returnAbs(-5));
console.log(returnAbs(10));
console.log(returnAbs(-10));
