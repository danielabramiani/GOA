// Function Declarations and Arrow Functions

// 1
function sum(a, b) {
    return a + b;
}

// 2
function reverseString(str) {
    return str.split('').reverse().join('');
}

// 3
function isEven(num) {
    return num % 2 === 0;
}

// 4
const getArrayLength = (arr) => arr.length;

// 5
const rectangleArea = (width, height) => width * height;

// 6
function doubleNumbers(arr) {
    return arr.map(num => num * 2);
}

// 7
function toUpperCase(str) {
    return str.toUpperCase();
}

// 8
const filterOddNumbers = (arr) => arr.filter(num => num % 2 === 0);

// 9
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

// 10
const countVowels = (str) => {
    const vowels = str.match(/[aeiou]/gi);
    return vowels ? vowels.length : 0;
};

// Template Literals

// 1
const name = "Alice";
const greeting = `Hello, ${name}!`;

// 2
const multiline = `This is a string
that spans multiple
lines.`;

// 3
const a = 5;
const b = 10;
const sumExpression = `The sum of ${a} and ${b} is ${a + b}.`;

// 4
const day = 21;
const month = "September";
const year = 2024;
const formattedDate = `Date: ${day} ${month} ${year}`;

// 5
const protocol = "https";
const domain = "example.com";
const path = "path/to/resource";
const url = `${protocol}://${domain}/${path}`;

// 6
const age = 18;
const accessMessage = `You are ${age >= 18 ? "allowed" : "not allowed"} to enter.`;

// 7
const street = "123 Main St";
const city = "Anytown";
const zip = "12345";
const address = `Address: ${street}, ${city}, ${zip}`;

// 8
const content = "This is a simple HTML structure.";
const html = `<div>${content}</div>`;

// 9
const items = ['Item 1', 'Item 2', 'Item 3'];
const list = `
<ul>
${items.map(item => `<li>${item}</li>`).join('')}
</ul>`;

// 10
const resultFunction = () => "result";
const interpolatedFunction = `The result is ${resultFunction()}.`;

// Short Conditionals

// 1
const isActive = true;
isActive && console.log("The variable is true.");

// 2
const userInput = "";
const defaultValue = userInput || "Default Value";

// 3
const age = 18;
const access = age >= 18 ? "Allowed" : "Not Allowed";

// 4
const callback = () => console.log("Function called.");
const value = null;
value !== null && callback();

// 5
const a = null;
const b = undefined;
const c = "Hello";
const firstTruthy = a || b || c;

// 6
const number = -5;
console.log(number > 0 ? "Positive" : "Negative");

// 7
const element = document.createElement('div');
const shouldAddClass = true;
shouldAddClass && element.classList.add('active');

// 8
const obj = { name: "Alice" };
const fallbackValue = obj.age || "No Age Provided";

// 9
const str = "Hello";
const strLength = str.length > 5 ? "Long String" : "Short String";

// 10
const condition1 = true;
const condition2 = true;
condition1 && condition2 && console.log("Both conditions are true.");

// Array method map()

// 1
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);

// 2
const strings = ["hello", "world"];
const uppercased = strings.map(str => str.toUpperCase());

// 3
const objects = [{ name: "Alice" }, { name: "Bob" }];
const names = objects.map(obj => obj.name);

// 4
const incremented = numbers.map(num => num + 5);

// 5
const squareRoots = [1, 4, 9, 16].map(num => Math.sqrt(num));

// 6
const dates = ["2024-01-01", "2024-02-01"];
const formattedDates = dates.map(date => new Date(date).toLocaleDateString());

// 7
const stringArray = ["one", "two", "three"];
const lengths = stringArray.map(str => str.length);

// 8
const prependString = "Item: ";
const prependedArray = stringArray.map(str => prependString + str);

// 9
const evenNumbers = numbers.map(num => num % 2 === 0);

// 10
const replaceCharArray = ["hello", "world"];
const replacedArray = replaceCharArray.map(str => str.replace('o', '0'));

// Array method filter()

// 1
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);

// 2
const strings = ["short", "medium", "longer", "longest"];
const longStrings = strings.filter(str => str.length > 5);

// 3
const objects = [{ id: 1, active: true }, { id: 2, active: false }];
const activeObjects = objects.filter(obj => obj.active);

// 4
const mixedArray = [1, null, 2, undefined, 3];
const cleanedArray = mixedArray.filter(item => item != null);

// 5
const numberArray = [5, 12, 8, 21];
const greaterThanTen = numberArray.filter(num => num > 10);

// 6
const words = ["apple", "banana", "avocado", "berry"];
const wordsStartingWithA = words.filter(word => word.startsWith('a'));

// 7
const isPrime = num => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};
const primes = numbers.filter(isPrime);

// 8
const users = [{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }];
const usersOver25 = users.filter(user => user.age > 25);

// 9
const duplicates = [1, 2, 2, 3, 3, 4];
const uniqueValues = duplicates.filter((value, index, self) => self.indexOf(value) === index);

// 10
const truthyValues = [0, 1, false, true, "", "Hello"];
const onlyTruthy = truthyValues.filter(Boolean);

// Array method reduce()

// 1
const sum = numbers.reduce((acc, num) => acc + num, 0);

// 2
const stringArray = ["Hello", " ", "World", "!"];
const concatenatedString = stringArray.reduce((acc, str) => acc + str, "");

// 3
const maxNumber = numbers.reduce((max, num) => (num > max ? num : max), numbers[0]);

// 4
const elements = ["apple", "banana", "apple", "orange"];
const occurrences = elements.reduce((acc, element) => {
    acc[element] = (acc[element] || 0) + 1;
    return acc;
}, {});

// 5
const cart = [{ price: 10 }, { price: 20 }, { price: 30 }];
const totalPrice = cart.reduce((total, item) => total + item.price, 0);

// 6
const items = [{ type: 'fruit', name: 'apple' }, { type: 'fruit', name: 'banana' }, { type: 'vegetable', name: 'carrot' }];
const groupedByType = items.reduce((acc, item) => {
    acc[item.type] = acc[item.type] || [];
    acc[item.type].push(item.name);
    return acc;
}, {});

// 7
const nestedArray = [[1, 2], [3, 4], [5]];
const flattenedArray = nestedArray.reduce((acc, val) => acc.concat(val), []);

// 8
const product = numbers.reduce((acc, num) => acc * num, 1);

// 9
const objectArray = [{ a: 1 }, { b: 2 }, { c: 3 }];
const mergedObject = objectArray.reduce((acc, obj) => Object.assign(acc, obj), {});

// 10
const arrayWithDuplicates = [1, 2, 2, 3, 3, 4];
const uniqueFromDuplicates = arrayWithDuplicates.reduce((acc, val) => {
    if (!acc.includes(val)) {
        acc.push(val);
    }
    return acc;
}, []);

// Object Tricks

// 1
const name = "Daniel Abramiani";
const age = 25;
const person = { name, age }; // 1

// 2
const user = { username: "danielA", email: "daniel@example.com" }; // 2
const { username, email } = user;

// 3
const obj1 = { a: 1, b: 2 }; // 3
const obj2 = { c: 3, d: 4 };
const mergedObject = { ...obj1, ...obj2 };

// 4
let obj = { x: 1, y: 2 }; // 4
[obj.x, obj.y] = [obj.y, obj.x];

// 5
function displayUser({ username, email }) { // 5
    console.log(`Username: ${username}, Email: ${email}`);
}
displayUser(user);

// 6
const originalObject = { a: 1, b: 2 }; // 6
const shallowCopy = { ...originalObject };

// 7
const newObject = { ...originalObject, c: 3 }; // 7

// 8
const settings = { volume: 10 }; // 8
const { volume, brightness = 50 } = settings; // brightness defaults to 50

// 9
const dynamicKey = "age"; // 9
const dynamicObject = { [dynamicKey]: 30 };

// 10
function logCoordinates({ x, y }) { // 10
    console.log(`X: ${x}, Y: ${y}`);
}
const coords = { x: 10, y: 20 };
logCoordinates(coords);

// Promises + Async/Await Syntax

// 1
const promise1 = new Promise((resolve) => { // 1
    setTimeout(() => {
        resolve("Resolved after 2 seconds");
    }, 2000);
});
promise1.then(message => console.log(message));

// 2
async function asyncFunction() { // 2
    const result = await promise1;
    console.log(result);
}
asyncFunction();

// 3
const promise2 = new Promise((_, reject) => { // 3
    reject(new Error("An error occurred"));
});
promise2.catch(error => console.log(error.message));

// 4
async function asyncErrorHandling() { // 4
    try {
        await promise2;
    } catch (error) {
        console.log(error.message);
    }
}
asyncErrorHandling();

// 5
const promise3 = new Promise((resolve) => resolve("First")); // 5
const promise4 = new Promise((resolve) => resolve("Second"));
promise3
    .then(result => {
        console.log(result);
        return promise4;
    })
    .then(result => console.log(result))
    .catch(error => console.log(error));

// 6
async function waitForMultiple() { // 6
    const results = await Promise.all([promise3, promise4]);
    console.log(results);
}
waitForMultiple();

// 7
const promise5 = new Promise((resolve) => { // 7
    resolve(5);
});
promise5
    .then(value => value * 2)
    .then(transformedValue => console.log(transformedValue));

// 8
async function fetchData() { // 8
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data);
}
fetchData();

// 9
const promise6 = new Promise((resolve) => resolve("Promise 1")); // 9
const promise7 = new Promise((resolve) => setTimeout(() => resolve("Promise 2"), 1000));
Promise.race([promise6, promise7]).then(result => console.log(result));

// 10
async function retryPromise(promiseFunc, retries) { // 10
    for (let i = 0; i < retries; i++) {
        try {
            const result = await promiseFunc();
            return result;
        } catch (error) {
            console.log(`Attempt ${i + 1} failed`);
        }
    }
    throw new Error("All attempts failed");
}


