//1

const person = {
    name: "Daniel",
    age: 13
}

const person1 = {name: "Luka",age: 18};


Object.assign(person, person1);

//2

const obj1 = {
    a: 3,
    b: 5,
    c: 4
}

const obj2 = Object.assign({d: 5, e: 3}, obj1);

console.log(obj2)

//3

const source1 = { a: 1, b: 2 };

const source2 = { c: 3, d: 4 };

const target = {};

Object.assign(target, source1, source2);

//4

const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy);

//5

const goal = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedGoal = Object.assign(goal, source);

console.log(goal);

//6

const defaults = { color: 'red', size: 'medium' };
const userSettings = { color: 'blue' };

const combinedSettings = Object.assign({}, defaults, userSettings);
console.log(combinedSettings);

//7

const existingObj = { a: 1, b: 2 };
Object.assign(existingObj, { b: 3, c: 4 });

console.log(existingObj);

//8

function extned(obj1, obj2){
    return Object.assign({},obj1, obj2);
}

//9

function manualAssign(target, ...sources) {
    for (const source of sources) {
        for (const key in source) {
            if (source.hasOwnProperty(key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
}

//10

function manualAssign2(target, ...sources) {
    for (const source of sources) {
        for (const [key, value] of Object.entries(source)) {
            target[key] = value;
        }
    }
    return target;
}

//Rest

//1

let numbers = [3, 4, 5];
let all = [1, 2, ...numbers, 6];
console.log(all[3]);

//2

function sum(...values){
    let result = 0;
    for (let result of values){
        return result += 1;
    }
    return result;
}
console.log(sum(1,5,7,0,2,5));

//3

function sum(d,a,n,i,e,l){
    return d + a + n +i + e + l;
}

const nums = [2,6,7,2,5,9];
const result = sum(...nums);
console.log(result)

//4

const number = [8, 9, 0, 8];
const newArray = [1, ...numbers, 5];
console.log(newArray)


//5


const human = {
    firstName: "daniel",
    surName: "abramiani",
    living: "Tbilisi",
    age: 13,
    hobby: "Gym"
};

const { firstName, surName, ...details  } = person;

console.log(firstName); 
console.log(lastName);
console.log(details);

//Spread

//1

const names1 = ['daniel', 'dan', 'd'];
const names2 = ['k', 'abr', 'some'];
const concatenatedNames = [...names1, ...names2];
console.log(concatenatedNames);


//2

function sum(x, y, z) {
    return x + y + z;
}
  
const num = [1, 2, 3];
  
console.log(sum(...num));
  
console.log(sum.apply(null, num));

//3

const originalArray = [1, 2, 3];
const modifiedArray = [...originalArray, 4, 5];
console.log(modifiedArray);

//4

const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray);


//5

const string = "Daniel";
const charArray = [...string];
console.log(charArray);


//Destructing

//1

const numbers = [1,7, 9, 0];
const [a, b, c, d] = numbers;
console.log(a); 
console.log(b); 
console.log(c); 
console.log(d)


//2

const person = {
    firstName: "Daniel",
    lastName: "Abramiani" 
};

const { firstName, lastName } = person;
console.log(firstName); 
console.log(lastName);

//3

const person = { 
    firstName: 'John',
    lastName: 'Doe' 
};

const { firstName: Name, lastName: Name1 } = person;

console.log(Name); 
console.log(Name1); 

//4

const [first, , last] = [1, 2, 3, 4, 5];

console.log(first);
console.log(last);

//5

const people = [{ name: 'John', age: 30 },
{ name: 'Jane', age: 25 }];

for (const { name, age } of people) {
    console.log(name, age);
}

//6

const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first);
console.log(rest);

//7

const [first, , , , last] = [1, 2, 3, 4, 5];
console.log(first);
console.log(last);

//8

const people = [{ name: "Luka", age: 18 }, { name: "Daniel" , age: 13 }];
const filteredNames = people.filter(({ age }) => age > 19).map(({ name }) => name);

console.log(filteredNames);

//9

const mixedArray = [1, { name: 'John', age: 30 }, 'hello'];

const [, { name, age }] = mixedArray;

console.log(name);
console.log(age);

//10

function manualDestructing(obj) {
    const values = [];
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            values.push(obj[key]);
        }
    }
    return values;
}
