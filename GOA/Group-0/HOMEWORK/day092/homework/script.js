//1

class Person {
  constructor() {
    this.name = 'Daniel';
    this.age = 13;
    this.gender = "Male"
  }
}

const person1 = new Person();
const person2 = new Person();
const person3 = new Person();

console.log(person1.name);
console.log(person1.age);
console.log(person1.gender);

//2,4


class Human {
  constructor(name, year) {
    this.name = name;
    this.age = year; 
  }
  year(x) {
    return this.age - x;
  }
}

const date = new Date();
let currentYear = date.getFullYear();

const human = new Human("Mariam", 2014);
console.log(human.name);
console.log(human.age);
console.log(human.year(currentYear));


//3

class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  greet() {
    console.log("Hello, my name is " + this.name + ". Nice to meet you!");
  }
}

const daniel = new Person("Daniel", 13, "male");
daniel.greet();

//5

const updatedDaniel = new Person("Daniel", 13, "male");
updatedDaniel.age = 14; 
console.log(updatedDaniel.age);

//6

const daniel1 = new Person("Daniel", 13, "male");
const daniel2 = new Person("Luka", 18, "male");

//7

class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  get getName() {
    return this.name;
  }
}

const daniel = new Person("Daniel", 13, "male");
console.log(daniel.getName);

//8

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get retirementAge() {
    return this.age >= 65 ? "Already retired" : 65 - this.age;
  }
}

const person = new Person("Daniel", 13);
console.log(person.retirementAge);


//9

class Person {
  constructor(name, age) {
    this.name = name;
    this._age = age;
  }

  get age() {
    return this._age;
  }

  set age(newAge) {
    if (newAge >= 0) {
      this._age = newAge;
    } else {
      console.log("Age cannot be negative");
    }
  }
}

const person = new Person("John", 30);
console.log(person.age);
person.age = -5;
console.log(person.age);

//10

class FootballTeam {
  #teamName;
  #players;

  constructor(teamName) {
    this.#teamName = teamName;
    this.#players = [];
  }

  get teamName() {
    return this.#teamName;
  }

  get players() {
    return this.#players;
  }

  addPlayer(player) {
    this.#players.push(player);
  }
}

class Player {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }
}

const realMadrid = new FootballTeam("Real Madrid");

realMadrid.addPlayer(new Player("Sergio Ramos", "Defender"));
realMadrid.addPlayer(new Player("Karim Benzema", "Forward"));
realMadrid.addPlayer(new Player("Cristiano Ronaldo", "Forward-Winger"));

console.log(realMadrid.teamName); 
console.log(realMadrid.players); 
