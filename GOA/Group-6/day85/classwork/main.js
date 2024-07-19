let data = [
    {
      title: "Work",
      timeframes: {
        daily: { current: 5, previous: 7 },
        weekly: { current: 32, previous: 36 },
        monthly: { current: 103, previous: 128 }
      }
    },
    {
      title: "Play",
      timeframes: {
        daily: { current: 1, previous: 2 },
        weekly: { current: 10, previous: 8 },
        monthly: { current: 23, previous: 29 }
      }
    },
    {
      title: "Study",
      timeframes: {
        daily: { current: 0, previous: 1 },
        weekly: { current: 4, previous: 7 },
        monthly: { current: 13, previous: 19 }
      }
    },
    {
      title: "Exercise",
      timeframes: {
        daily: { current: 1, previous: 1 },
        weekly: { current: 4, previous: 5 },
        monthly: { current: 11, previous: 18 }
      }
    },
    {
      title: "Social",
      timeframes: {
        daily: { current: 1, previous: 3 },
        weekly: { current: 5, previous: 10 },
        monthly: { current: 21, previous: 23 }
      }
    },
    {
      title: "Self Care",
      timeframes: {
        daily: { current: 0, previous: 1 },
        weekly: { current: 2, previous: 2 },
        monthly: { current: 7, previous: 11 }
      }
    }
];
  
let period = document.querySelectorAll(".end");
let dailyBtn = document.getElementById("daily");
let weeklyBtn = document.getElementById("weekly");
let monthlyBtn = document.getElementById("monthly");
  
dailyBtn.addEventListener('click', showDaily);
weeklyBtn.addEventListener('click', showWeekly);
monthlyBtn.addEventListener('click', showMonthly);
  
function showDaily() {
    dailyBtn.classList.add('active');
    weeklyBtn.classList.remove('active');
    monthlyBtn.classList.remove('active');
  
    for (let i = 0; i < data.length; i++) {
      period[i].innerHTML = '<p>' + data[i].timeframes.daily.current + 'hrs</p>' +
      '<p>Yesterday - ' + data[i].timeframes.daily.previous + 'hrs</p>';
    }
}
  
function showWeekly() {
    weeklyBtn.classList.add('active');
    dailyBtn.classList.remove('active');
    monthlyBtn.classList.remove('active');
  
    for (let i = 0; i < data.length; i++) {
      period[i].innerHTML = '<p>' + data[i].timeframes.weekly.current + 'hrs</p>' +
      '<p>Last Week - ' + data[i].timeframes.weekly.previous + 'hrs</p>';
    }
}
  
function showMonthly() {
    monthlyBtn.classList.add('active');
    dailyBtn.classList.remove('active');
    weeklyBtn.classList.remove('active');
  
    for (let i = 0; i < data.length; i++) {
      period[i].innerHTML = '<p>' + data[i].timeframes.monthly.current + 'hrs</p>' +
      '<p>Last Month - ' + data[i].timeframes.monthly.previous + 'hrs</p>';
    }
}
  
showWeekly();