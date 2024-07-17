//string repeat
function repeat_str(repeat, string) {
    return string.repeat(repeat);
}


//Remove First and Last Character

function array(arr){
     return arr.split(",").slice(1,-1).join(" ") || null; 
}

//Reversed strings

function solution(str) {
    return str.split('').reverse().join('');
}

//opposite number

function opposite(num) {
    return -1 * num;
  }
  
//Sum of possitive

function positive_sum(arr) {
    let total = 0;
    for (let num of arr) {
        if (num > 0) {
            total += num;
        }
    }
    return total;
}

//Century from year

function century(year) {
    if (year < 1000) {
        return Math.floor(year / 100) + 1;
    } else if (year >= 1000 && year % 100 === 0) {
        return year / 100;
    } else {
        return Math.floor(year / 100) + 1;
    }
}
 //even or odd

 function even_or_odd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
}

//Multiply

function multiply(a, b) {
    return a * b;
}


//Return Negative

function make_negative(number) {
    return number > 0 ? -1 * number : number;
}


//Counting Sheep

function count_sheep(num) {
    let sheepString = '';
    for (let i = 1; i <= num; i++) {
        sheepString += i + ' sheep...';
    }
    return sheepString;
}
