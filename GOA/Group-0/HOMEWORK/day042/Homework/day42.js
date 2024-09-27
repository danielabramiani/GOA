 // Inline JavaScript code
 function addNumbers() {
    // Prompt the user for input and store the values in variables
    var num1 = prompt("Enter the first number:");
    var num2 = prompt("Enter the second number:");
    var num3 = prompt("Enter the third number:");

    // Convert string numbers to mathematical numbers using the Number function
    num1 = Number(num1);
    num2 = Number(num2);
    num3 = Number(num3);

    // Add the three numbers
    var sum = num1 + num2 + num3;

    // Display the result using console.log
    console.log("Sum of the three numbers: " + sum);
}

// Call the function to execute the code
addNumbers();