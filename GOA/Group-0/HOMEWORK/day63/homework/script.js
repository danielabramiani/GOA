//1

// class StudentID {
//     constructor(name, surname, score) {
//       this.name = name;
//       this.surname = surname;
//       this.score = score;
//     }
  
//     toString() {
//       return `Name: ${this.name}, Surname: ${this.surname}, Score: ${this.score}`;
//     }
//   }
  
//   // Example usage:
//   let student1 = new StudentID("John", "Doe", 85);
//   console.log(student1.toString());

   //2
   class StudentID {
     constructor(name, surname, score) {
       this.name = name;
       this.surname = surname;
       this.score = score;
     }
  
     toString() {
     return `Name: ${this.name}, Surname: ${this.surname}, Score: ${this.score}`;
     }
    }
  
  let student1 = new StudentID("Alice", "Jonas", 50);
  
  let student2 = new StudentID("Bob", "Viktor", 75);
  
  let student3 = new StudentID("Lebron", "Brown", 82);
  
  let student4 = new StudentID("Messi", "Cristiano", 88);
  
  let student5 = new StudentID("21-Savage", "Yeat", 95);
  
  console.log(student1.toString());
  console.log(student2.toString());
  console.log(student3.toString());
  console.log(student4.toString());
  console.log(student5.toString());

  //3 //გადამეორება

  // Example 1: Stack Memory
function foo() {
    let a = 10; // Variable 'a' is stored on the stack
    console.log(a);
  }
  
  foo(); // Output: 10
  
  // Example 2: Stack Memory with Function Call
  function bar() {
    let b = 20; // Variable 'b' is stored on the stack
    foo();     // 'foo' is called, creating another stack frame
  }
  
  bar(); // Output: 10
  
  // Example 3: Heap Memory
  let obj = { name: 'Daniel', age: 13 }; // Object 'obj' is stored in heap memory
  console.log(obj); // Output: { name: 'Daniel', age: 13 }
  
  // Example 4: Heap Memory with Object Reference
  let obj1 = { x: 10, y: 20 }; // Object 'obj1' is stored in heap memory
  let obj2 = obj1;             // 'obj2' points to the same object in heap memory as 'obj1'
  obj2.x = 30;                 // Modifying 'obj2' also modifies 'obj1'
  
  console.log(obj1); // Output: { x: 30, y: 20 }
  console.log(obj2); // Output: { x: 30, y: 20 }
  
  // Example 5: Stack and Heap Memory Interaction
  function baz() {
    let arr = [1, 2, 3]; // Array 'arr' is stored in heap memory, but the reference to it is on the stack
    return arr;
  }
  
  let result = baz(); // 'result' holds a reference to the array returned from 'baz'
  console.log(result); // Output: [1, 2, 3]