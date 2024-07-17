// Define a constructor function named Person with parameters name, lastname, and age
function Person(name, lastname, age) {
    // Within the constructor, assign the input parameters to properties of the newly created object
    this.name = name;
    this.lastname = lastname;
    this.age = age;
}

// Add a method named printInfo to the prototype of the Person constructor
Person.prototype.printInfo = function() {
    // Output the name, lastname, and age properties of the object to the console
    console.log(`Name: ${this.name}`);
    console.log(`Surname: ${this.lastname}`);
    console.log(`Age: ${this.age}`);
}

// Create a new instance of Person with the name "Tony", lastname "The cat", and age "2 years old but in person years 20-30"
const person1 = new Person("Tony", "The cat", "2 years old but in person years 20-30");

// Call the printInfo method on the person1 object to display its information
person1.printInfo(); // This line invokes the printInfo method on the person1 object, displaying its name, lastname, and age in the console