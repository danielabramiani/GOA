//1

const person = {
    name: "Saba",
    lastName: "Kvantaliani",
    age: 12,
    city: "Tnilis",
    greet: () =>{
      console.log(`Hello How Are You ${person.name} Did you Coming To Schhol?`);
    }
  }
  
  console.log(person.name);
  
  person.age = 12
  console.log(person.age);
  
  person.place = "Tbilis"
  console.log(person.place);
  
  person.greet();

  //2
  let sister = {
    name: "Mariam",
    lastName: "Abramiani",
    age: 10
  }
  
  let sisterTwo = {
    name: "Nicole",
    lastName: "Jagaspaniani",
    age: 10
  }
  
  console.log(sister.name !== sisterTwo.name);
  console.log(sister.lastName !== sisterTwo.lastName);
  console.log(sister.age === sisterTwo.age);

  //3
  // Creating the school object
const school = {
    name: "ABC School",
    students: [
      { name: "Daniel", age: 13 },
      { name: "Boba", age: 16 },
      { name: "Nino", age: 14 }
    ]
  };
  
  // Accessing a student's name and age
  const studentName = school.students[0].name; // Accessing the first student's name
  const studentAge = school.students[0].age;   // Accessing the first student's age
  
  console.log("Student Name:", studentName); // Output: Student Name: Alice
  console.log("Student Age:", studentAge);   // Output: Student Age: 15

  //4
// Creating the calculator object
const calculator = {
    // Method for addition
    add: function(num1, num2) {
      return num1 + num2;
    },
    
    // Method for subtraction
    subtract: function(num1, num2) {
      return num1 - num2;
    },
    
    // Method for multiplication
    multiply: function(num1, num2) {
      return num1 * num2;
    },
    
    // Method for division
    divide: function(num1, num2) {
      if (num2 === 0) {
        return "Cannot divide by zero!";
      }
      return num1 / num2;
    }
  };
  
  // Example usage of calculator methods
  console.log("Addition:", calculator.add(5, 3));       // Output: 8
  console.log("Subtraction:", calculator.subtract(5, 3)); // Output: 2
  console.log("Multiplication:", calculator.multiply(5, 3)); // Output: 15
  console.log("Division:", calculator.divide(5, 3));    // Output: 1.6666666666666667

  //5
  // Function to validate form
  function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');

    usernameError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;

    if (username.length < 5) {
      usernameError.textContent = "Username must be at least 5 characters long.";
      isValid = false;
    }

    if (password.length < 8) {
      passwordError.textContent = "Password must be at least 8 characters long.";
      isValid = false;
    }

    if (!isValid) {
      return false;
    }

    // If validation successful, add them to an object
    const userObject = { username: username, password: password };
    console.log("User Object:", userObject);
    return true;
  }