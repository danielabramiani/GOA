function calculateAverage(arr) {
    if (arr.length === 0) {
      return 0;
    }
    
    let sum = 0;
    for (let num of arr) {
      sum += num;
    }
    
    let average = sum / arr.length;
    return average;
}

function findMax(arr) {
    if (arr.length === 0) {
      return undefined;
    }
    
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    
    return max;
}

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
}

