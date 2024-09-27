//1
function MyObject(name, age) {
    
    this.name = name;
    this.age = age;
  
    
    this.sayHello = function() {
      return "Hello, my name is " + this.name + " and I'm " + this.age + " years old.";
    };
  }
  
  const currentDate = new Date();
  
  const myInstance = new MyObject("Daniel", 13);
  
  myInstance.gender = "Male";
  
  
  console.log(myInstance.name); 
  console.log(myInstance.age); 
  console.log(myInstance.gender); 
  console.log(myInstance.sayHello()); 
  
  
  console.log(currentDate);

  //2

  const userProfile = {
    name: "Daniel",
    age: 13,
    hobbies: ["Chess", "Painting", "Skiing"],
    contact: {
      email: "danielabramiani4@gmail.com",
      phone: "+995 557 520 755",
      address: {
        street: "nadira xosharauli 29",
        city: "Tbilisi",
        country: "Georgia"
      }
    }
  };
  
  console.log(userProfile);

  //3

  const myObject = {
    name: "Mariam",
    age: 10,
    interests: ["Drawing",],
    address: {
      street: "Nadira xosharauli 29",
      city: "Tbilisi",
      country: "Georgia"
    },
    friends: [
      { name: "Keto", age: 9 },
      { name: "Ekaterine", age: 11 },
      { name: "Mariam", age: 13 }
    ]
  };
  
  console.log(myObject);


  class Flight {
    constructor(flightCode, flightStatus) {
        this.flightCode = flightCode;
        this.flightStatus = flightStatus;
    }
}

let flight1 = new Flight("ABC123", "On time");
let flight2 = new Flight("XYZ123", "Delayed");

console.log("Flight 1 - Code:", flight1.flightCode, "Status:", flight1.flightStatus);
console.log("Flight 2 - Code:", flight2.flightCode, "Status:", flight2.flightStatus);