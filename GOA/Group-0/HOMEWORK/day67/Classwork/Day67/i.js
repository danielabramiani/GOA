 let currentDate = new Date();

 let currentYear = currentDate.getFullYear();
 let currentMonth = currentDate.getMonth();
 let currentDay = currentDate.getDate();
 let currentHours = currentDate.getHours();
 let currentMinutes = currentDate.getMinutes();
 let currentSeconds = currentDate.getSeconds();
 let currentMilliseconds = currentDate.getMilliseconds();

 currentDate.setFullYear(2023);
 currentDate.setMonth(5);
 currentDate.setDate(15);
 currentDate.setHours(12);
 currentDate.setMinutes(30);
 currentDate.setSeconds(45);
 currentDate.setMilliseconds(500);

 let updatedYear = currentDate.getFullYear();
 let updatedMonth = currentDate.getMonth();
 let updatedDay = currentDate.getDate();
 let updatedHours = currentDate.getHours();
 let updatedMinutes = currentDate.getMinutes();
 let updatedSeconds = currentDate.getSeconds();
 let updatedMilliseconds = currentDate.getMilliseconds();

 console.log("Original Date:", currentDate);
 console.log("Original Values:", {
     year: currentYear,
     month: currentMonth,
     day: currentDay,
     hours: currentHours,
     minutes: currentMinutes,
     seconds: currentSeconds,
     milliseconds: currentMilliseconds
 });
 console.log("Updated Date:", currentDate);
 console.log("Updated Values:", {
     year: updatedYear,
     month: updatedMonth,
     day: updatedDay,
     hours: updatedHours,
     minutes: updatedMinutes,
     seconds: updatedSeconds,
     milliseconds: updatedMilliseconds
 });

function logCurrentDateTime() {
    const currentDate = new Date();
    console.log(currentDate);
}

function outputDateEverySecond() {
    logCurrentDateTime();
    setInterval(logCurrentDateTime, 1000);
}

outputDateEverySecond();


 
let seconds = 0;
let minutes = 0;
let hours = 0;

function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    console.log(`Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`);
}

let seconds = 60;
let minutes = 5;
let hours = 0;

function updateTimer() {
    seconds--;
    if (seconds === 0 && minutes === 0) {
        clearInterval(timer);
    } else if (seconds === 0) {
        seconds = 60;
        minutes--;
    }
    console.log(`Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`);
}

const timer = setInterval(updateTimer, 1000);
