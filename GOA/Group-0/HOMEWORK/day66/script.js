// 1) Countdown Timer
let seconds = parseInt(prompt("Enter the number of seconds:"));
while (seconds > 0) {
    console.log(seconds);
    seconds--;
}
console.log("Time's up!");

// 2) Prime Number Printer
let primes = [];
let number = 1;
while (number <= 50) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime && num > 1) {
        primes.push(num);
    }
    number++;
}
console.log(primes);

// 3) Object Information Display
let person = {
    name: "John",
    age: 90,
    occupation: "proggraming"
};
console.log(`Name: ${person.name}, Age: ${person.age}, Occupation: ${person.occupation}`);

// 4) Calculate Factorial
let num = parseInt(prompt("Enter a non-negative integer:"));
let factorial = 1;
for (let i = 1; i <= num; i++) {
    factorial *= i;
}
console.log(`Factorial of ${num} is ${factorial}`);

// 5) Array Summation
let numbers = prompt("Enter numbers separated by spaces:").split(" ").map(Number);
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(`Sum of the numbers is ${sum}`);

// 6) Fruit Basket
let fruits = [
    { name: "Apple", color: "Red" },
    { name: "Banana", color: "Yellow" },
    { name: "Orange", color: "Orange" }
];
for (let fruit of fruits) {
    console.log(fruit.name);
}

// 7) Car Inventory
let cars = [
    { brand: "Toyota", model: "Camry", year: 2022 },
    { brand: "Honda", model: "Civic", year: 2021 },
    { brand: "Ford", model: "F-150", year: 2023 }
];
for (let car of cars) {
    console.log(`Brand: ${car.brand}, Model: ${car.model}, Year: ${car.year}`);
}

// 8) Shopping List
let shoppingList = [
    { name: "Milk", quantity: 2 },
    { name: "Bread", quantity: 1 },
    { name: "Eggs", quantity: 12 }
];
for (let item of shoppingList) {
    console.log(`${item.name}: ${item.quantity}`);
}

// 9) Student Attendance Tracker
let students = [
    { name: "jonas", attendance: "Present" },
    { name: "Bob", attendance: "Absent" },
    { name: "Daniel", attendance: "Present" }
];
for (let student of students) {
    console.log(`Name: ${student.name}, Attendance: ${student.attendance}`);
}

// 10) Daily Planner
let tasks = [
    { description: "Finish report", priority: "High" },
    { description: "Buy groceries", priority: "Medium" },
    { description: "Call mom", priority: "Low" }
];
for (let task of tasks) {
    console.log(`Description: ${task.description}, Priority: ${task.priority}`);
}

