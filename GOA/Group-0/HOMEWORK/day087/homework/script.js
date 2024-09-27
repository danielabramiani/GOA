// All Numbers Positive
function allNumbersPositive(arr) {
    return arr.every(num => num > 0);
}
  
// All Strings Non-Empty
function allStringsNonEmpty(arr) {
    return arr.every(str => str !== "");
}
  
// All Booleans True
function allBooleansTrue(arr) {
    return arr.every(bool => bool === true);
}
  
// All Numbers Even
function allNumbersEven(arr) {
    return arr.every(num => num % 2 === 0);
}

//indexOf

// Index of First Occurrence of a Character
function indexOfFirstChar(str, char) {
    return str.indexOf(char);
}
  
// Index of First Occurrence of a Number
function indexOfFirstNumber(arr, num) {
    return arr.indexOf(num);
}
  
// Index of First Occurrence of a Substring
function indexOfFirstSubstring(str, substr) {
    return str.indexOf(substr);
}
  
// Index of First Occurrence of an Element in an Array of Objects
function indexOfFirstObject(arr, prop, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][prop] === value) {
            return i;
        }
    }
    return -1;
}

//lastIndexOf

// Last Index of a Character in a Sentence
function lastIndexOfChar(str, char) {
    return str.lastIndexOf(char);
}
  
// Last Index of a Prime Number in an Array
function lastIndexOfPrime(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (isPrime(arr[i])) {
            return i;
        }
    }
    return -1;
}
  
// Helper function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}
  
// Last Index of a Word in an Array of Strings
function lastIndexOfWord(arr, word) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === word) {
            return i;
        }
    }
    return -1;
}
  
// Last Index of an Active User in an Array of Objects
function lastIndexOfActiveUser(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i].isActive) {
            return i;
        }
    }
    return -1;
}
