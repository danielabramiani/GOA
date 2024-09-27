function determineCategory(num) {
    if (typeof num !== 'number') {
        return "Invalid input: Please provide a number";
    } else if (num === 0) {
        return "Zero";
    } else if (num > 0 && num <= 10) {
        return "Small positive number";
    } else if (num > 10 && num <= 100) {
        return "Medium positive number";
    } else if (num > 100) {
        return "Large positive number";
    } else if (num < 0 && num >= -10) {
        return "Small negative number";
    } else if (num < -10 && num >= -100) {
        return "Medium negative number";
    } else {
        return "Large negative number";
    }
}

// Test the function with different numbers
console.log(determineCategory(5));    // Output: Small positive number
console.log(determineCategory(50));   // Output: Medium positive number
console.log(determineCategory(500));  // Output: Large positive number
console.log(determineCategory(-5));   // Output: Small negative number
console.log(determineCategory(-50));  // Output: Medium negative number
console.log(determineCategory(-500)); // Output: Large negative number
console.log(determineCategory(0));    // Output: Zero
console.log(determineCategory('abc')); // Output: Invalid input: Please provide a number

 // Change background color of container
 const container = document.getElementById('content');
 container.style.backgroundColor = '#6a0dad';

 // Change text color of container
 const texts = container.querySelectorAll('h1, p');
 texts.forEach(text => {
     text.style.color = '#fff';
 });

 const form = document.getElementById('contactForm');
 form.addEventListener('submit', function(event) {
     event.preventDefault(); // Prevent form submission

     // Fetch form data
     const formData = new FormData(form);

     // Convert form data to JSON object
     const jsonObject = {};
     formData.forEach((value, key) => {
         jsonObject[key] = value;
     });

     // Display form data (you can customize this part)
     console.log('Form Data:', jsonObject);

     // Clear form fields
     form.reset();
 });