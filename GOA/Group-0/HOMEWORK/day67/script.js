//1

function displayTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    console.log(`${hours}:${minutes}:${seconds}`);
}

setInterval(displayTime, 1000);


//2

function calculateCircleArea(radius) {
    return Math.PI * radius ** 2;
}

console.log(calculateCircleArea(5)); 


//3

function toKebabCase(str) {
    return str.replace(/[A-Z]/g, (match) => '-' + match.toLowerCase()).replace(/^-/, '');
}

console.log(toKebabCase("helloWorld")); 


//4

function countdownTimer(targetDate) {
    setInterval(() => {
        const now = new Date();
        const difference = targetDate.getTime() - now.getTime();
        const days = Math.floor((difference / (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);
}

const targetDate = new Date('2024-04-13');
countdownTimer(targetDate);

//5

function fibonacciSequence(numTerms) {
    const sequence = [0, 1];
    for (let i = 2; i < numTerms; i++) {
        sequence.push(sequence[i - 1] + sequence[i + 2]);
    }
    return sequence;
}

console.log(fibonacciSequence(10));

//6

function getDayOfWeek(date) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wensday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[DataTransfer.getDay()];
}

console.log(getDayOfWeek(new Date()));

//7


function currentDateFormats() {
    const now = new Date();
    const dd_mm_yyyy = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}`;
    const mm_dd_yyyy = `${String(now.getMonth() + 1).padStart(2, '0')}/${String(now.getDate()).padStart(2, '0')}/${now.getFullYear()}`;
    const yyyy_mm_dd = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    return { dd_mm_yyyy, mm_dd_yyyy, yyyy_mm_dd };
}

console.log(currentDateFormats());

//8

function isLeapYear(date) {
    const year = date.getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log(isLeapYear(new Date()));

//9

function differenceInDays(date1, date2){
    const difference = Math.abs(date1.getTime() - date2.getTime());
    return Math.ceil(difference / (1000 * 3600 * 24));
}

const date1 = new Date('2024-04-13');
const date2 = new Date('2024-04-23');

console.log(differenceInDays(date1, date2))

//10

function calculateAge(birthdate) {
    const now = new Date();
    const diff = now - birthdate;
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 2010);
}

const birthdate = new Date('2010-10-04');
console.log(calculateAge(birthdate));