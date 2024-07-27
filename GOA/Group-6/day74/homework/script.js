function performArithmeticOperations() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    
    let sum = num1 + num2;
    let difference = num1 - num2;
    let product = num1 * num2;
    let quotient = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
    
    console.log(`Sum: ${sum}`);
    console.log(`Difference: ${difference}`);
    console.log(`Product: ${product}`);
    console.log(`Quotient: ${quotient}`);
}

function promptUserName() {
    let firstName = prompt("Enter your first name:");
    let lastName = prompt("Enter your last name:");
    alert(`Welcome ${firstName} ${lastName}`);
}

function sumBetween(start, end) {
    let total = 0;
    for (let i = start; i <= end; i++) {
        total += i;
    }
    return total;
}

function showSumBetween() {
    let start = parseInt(prompt("Enter the start number:"));
    let end = parseInt(prompt("Enter the end number:"));
    let result = sumBetween(start, end);
    alert(`The sum of numbers between ${start} and ${end} is ${result}`);
}

function sumEvenNumbers(start, end) {
    let total = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            total += i;
        }
    }
    return total;
}

function showSumEvenNumbers() {
    let start = parseInt(prompt("Enter the start number:"));
    let end = parseInt(prompt("Enter the end number:"));
    let result = sumEvenNumbers(start, end);
    alert(`The sum of even numbers between ${start} and ${end} is ${result}`);
}

function isTeenager(age, hasPermission) {
    return (age < 18 && !hasPermission) || (age === 18 && hasPermission);
}

function checkTeenager() {
    let age = parseInt(prompt("Enter your age:"));
    let hasPermission = confirm("Do you have permission?");
    let result = isTeenager(age, hasPermission);
    alert(result ? "Eligible or Not a Teenager" : "Not Eligible");
}

function isValidCoupon(couponCode, totalAmount) {
    return (couponCode === "SALE" || couponCode === "BIGSALE") && totalAmount >= 50 || couponCode === "LILSALE";
}

function checkCoupon() {
    let couponCode = prompt("Enter coupon code:");
    let totalAmount = parseFloat(prompt("Enter total amount:"));
    let result = isValidCoupon(couponCode, totalAmount);
    alert(result ? "Coupon is valid!" : "Coupon is not valid.");
}