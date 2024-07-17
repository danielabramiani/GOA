// let numbers = [23, 14, 8, 19, 6, 31, 72, 5, 10, 27];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         console.log(numbers[i] + " is even.");
//     } else {
//         console.log(numbers[i] + " is odd.");
//     }
// }

// //2

// let numbersArray = [23, 14, 8, 19, 6, 31, 72, 5, 10, 27];

// let evenNumbersArray = [];
// for (let i = 0; i < numbersArray.length; i++) {
//     if (numbersArray[i] % 2 === 0) {
//         evenNumbersArray.push(numbersArray[i]);
//     }
// }

// console.log("Even numbers array:", evenNumbersArray);

// //3

// let multiplesOfFiveArray = [];

// let sum = 0;

// for (let i = 0; i <= 100; i += 5) {
//     multiplesOfFiveArray.push(i);
//     sum += i;
// }

// console.log("Array of multiples of five:", multiplesOfFiveArray);

// console.log("Sum of multiples of five:", sum);



// let numbersArray = [];

// for (let i = 0; i < 10; i++) {
//     let number = parseFloat(prompt("Enter number " + (i + 1) + ":"));
//     numbersArray.push(number);
// }

// let sum = numbersArray.reduce((acc, curr) => acc + curr, 0);

// let product = numbersArray.reduce((acc, curr) => acc * curr, 1);

// let count = numbersArray.length;

// let squareRoots = numbersArray.map(number => Math.sqrt(number));

// console.log("Sum of the numbers:", sum);
// console.log("Product of the numbers:", product);
// console.log("Number of elements:", count);
// console.log("Square roots of the numbers:", squareRoots);


function Ticket(name, surname, age, code) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.code = code;
}

function generateTicketCode() {
    const characters = 'daniel';
    let code = '';
    for (let i = 0; i < 6; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
}

function buyTickets() {
    let numTickets = parseInt(prompt("How many tickets do you want to buy?"));
    let tickets = [];

    for (let i = 0; i < numTickets; i++) {
        let name = prompt(`Enter your name for ticket ${i + 1}:`);
        let surname = prompt(`Enter your surname for ticket ${i + 1}:`);
        let age = parseInt(prompt(`Enter your age for ticket ${i + 1}:`));
        let code = generateTicketCode(); 

        let ticket = new Ticket(name, surname, age, code);
        tickets.push(ticket);
    }

    return tickets;
}

let purchasedTickets = buyTickets();
console.log(purchasedTickets);