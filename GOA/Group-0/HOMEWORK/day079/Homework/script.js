// 1. Transforming Data
const people = [{name: 'Daniel', age: 13}, {name: 'Boba', age: 10}, {name: 'Someone', age: 20}];
const names = people.map(person => person.name);
console.log(names); 

// 2. Prime or not
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeOrNot = numbers.map(num => isPrime(num));
console.log(primeOrNot); 

// 3. Filtering Data
const students = [{name: 'Daniel', grade: 85}, {name: 'Boba', grade: 75}, {name: 'Genius', grade: 90}];
const passedStudents = students.filter(student => student.grade >= 80);
console.log(passedStudents);

// 4. Finding Specific Values
const fileNames = ['document.txt', 'image.jpg', 'presentation.pptx', 'photo.jpg'];
const jpgFiles = fileNames.filter(fileName => fileName.endsWith('.jpg'));
console.log(jpgFiles); 

// 5. Copy function of map
function mapCopy(func, iterable) {
    return iterable.map(func);
}

// Usage
const originalList = [1, 2, 3, 4];
const copiedList = mapCopy(x => x * 2, originalList);
console.log(copiedList); 

// 6. Copy function of filter
function filterCopy(func, iterable) {
    return iterable.filter(func);
}

// Usage
const originalList2 = [1, 2, 3, 4, 5, 6];
const copiedList2 = filterCopy(x => x % 2 === 0, originalList2);
console.log(copiedList2); 
