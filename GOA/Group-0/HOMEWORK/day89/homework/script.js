//1
function sumOfArray(numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}
  
//2
function longestWord(strings) {
    let longest = '';
    for (let str of strings) {
        if (str.length > longest.length) {
            longest = str;
        }
    }
    return longest;
}
  
//3
function countProperties(obj) {
    let count = 0;
    for (let prop in obj) {
        count++;
    }
    return count;
}
  
//4
function keysToArray(obj) {
    let keys = [];
    for (let key in obj) {
        keys.push(key);
    }
    return keys;
}
  
// 5) Scope Explanation:
// Scope ეხება ცვლადების ხილვადობას და ხელმისაწვდომობას თქვენი კოდის სხვადასხვა ნაწილში.
  
// 'var' აქვს ფუნქციის არე, რაც ნიშნავს, რომ 'var'-ით გამოცხადებული ცვლადები ხელმისაწვდომია იმ ფუნქციის ფარგლებში, რომელშიც ისინი დეკლარირებულია.
// 'let' და 'const'-ს აქვს ბლოკის ფარგლები, რაც ნიშნავს, რომ მათთან დეკლარირებული ცვლადები ხელმისაწვდომია მხოლოდ იმ ბლოკში, რომელშიც ისინი არიან დეკლარირებული.
// 6) Hoisting Explanation:
// Hoisting არის JavaScript მექანიზმი, სადაც ცვლადები და ფუნქციების დეკლარაციები გადაადგილდება მათი შემცველი არეალის ზედა ნაწილში კომპილაციის ფაზაში.
  
// Arrow function:
  
//1
const square = (num) => num * num;
  
//2
const evenNumbers = (numbers) => numbers.filter(num => num % 2 === 0);
  
//3
const sumOfElements = (numbers) => numbers.reduce((acc, curr) => acc + curr, 0);
  
//4
const fibonacci = (length) => {
    let fibonacci = [0, 1];
    for (let i = 2; i < length; i++) {
      fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci;
};
  
//5
const isPalindrome = (str) => str === str.split('').reverse().join('');
  
//6
const button = document.getElementById('toggle');
const element = document.getElementById('element');

button.addEventListener('click', () => {
  element.classList.toggle('hidden');
});


//კოდების მიმოხილვა რედმიში