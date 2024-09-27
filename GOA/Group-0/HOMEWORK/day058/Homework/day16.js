function checkNumber(num) {
    if (num > 100) {
        return "Wow! That's a big number!";
    } 
    else if (num > 50) {
        return "That's a fairly large number.";
    } 
    else if (num > 10) {
        return "That's a moderate number.";
    } 
    else if (num > 0) {
        return "That's a small number.";
    } 
    else if (num === 0) {
        return "It's zero!";
    } 
    else {
        return "Negative numbers are interesting too!";
    }
}

console.log(checkNumber(150)); // Output: Wow! That's a big number!
console.log(checkNumber(75));  // Output: That's a fairly large number.
console.log(checkNumber(25));  // Output: That's a moderate number.
console.log(checkNumber(5));   // Output: That's a small number.
console.log(checkNumber(0));   // Output: It's zero!
console.log(checkNumber(-10)); // Output: Negative numbers are interesting too!

// Example of a for loop
console.log("Example of a for loop:");

for (let i = 0; i < 5; i++) {
    console.log("Iteration", i + 1);
}

// Example of a while loop
console.log("\nExample of a while loop:");

let count = 0;
while (count < 5) {
    console.log("Iteration", count + 1);
    count++;
}
//dom
const form = document.getElementById('userForm');

const outputDiv = document.getElementById('output');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;

    outputDiv.textContent = `Hello, ${username}!`;

    document.getElementById('username').value = '';
});

// Example of logical operators in js

// Logical and (&&)
console.log("Logical AND (&&):");
console.log(true && true);   // Output: true
console.log(true && false);  // Output: false
console.log(false && true);  // Output: false
console.log(false && false); // Output: false

// Logical or (||)
console.log("\nLogical OR (||):");
console.log(true || true);   // Output: true
console.log(true || false);  // Output: true
console.log(false || true);  // Output: true
console.log(false || false); // Output: false

// Logical not (!)
console.log("\nLogical NOT (!):");
console.log(!true);  // Output: false
console.log(!false); // Output: true

// Combining logical operators
console.log("\nCombining logical operators:");
console.log((true && true) || (false && true)); // Output: true
console.log((true && false) || (false && true)); // Output: false
console.log(!(true && false)); // Output: true