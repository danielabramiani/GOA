const dayIn = document.getElementById('dayIn');
const monthIn = document.getElementById('monthIn');
const yearIn = document.getElementById('yearIn');
const dayOut = document.getElementById('dayOut');
const monthOut = document.getElementById('monthOut');
const yearOut = document.getElementById('yearOut');
const calculateBtn = document.getElementById('calculateBtn');
const errorBorderStyle = '0.5px solid var(--Light-red)';

calculateBtn.addEventListener('click', () => {
  const day = dayIn.value;
  const month = monthIn.value;
  const year = yearIn.value;
  
  const birthday = `${year}-${month}-${day}`;

  if (validateDay() && validateMonth() && validateYear()) {
    let today = new Date();
    let birthDate = new Date(birthday);
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12;
    }
    if (days < 0) {
      const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      days += lastDayOfMonth;
      months--;
    }

    dayOut.innerText = days;
    monthOut.innerText = months;
    yearOut.innerText = years;
  }
});

function getNoOfDays(year, month) {
  return new Date(year, month, 0).getDate();
}

function validateDay() {
  const day = dayIn.value;
  const month = monthIn.value;
  const year = yearIn.value;

  if (day === '') {
    showMessage(dayIn, 'This field is required', errorBorderStyle);
    return false;
  } else if (!isValidDay(year, month, day)) {
    showMessage(dayIn, 'Invalid day for selected month/year', errorBorderStyle);
    return false;
  } else {
    showMessage(dayIn, '', '');
    return true;
  }
}

function validateMonth() {
  const month = monthIn.value;

  if (month === '') {
    showMessage(monthIn, 'This field is required', errorBorderStyle);
    return false;
  } else if (!isValidMonth(month)) {
    showMessage(monthIn, 'Invalid month', errorBorderStyle);
    return false;
  } else {
    showMessage(monthIn, '', '');
    return true;
  }
}

function validateYear() {
  const year = yearIn.value;
  const month = monthIn.value;
  const day = dayIn.value;

  if (year === '') {
    showMessage(yearIn, 'This field is required', errorBorderStyle);
    return false;
  } else if (!isValidYear(year, month, day)) {
    showMessage(yearIn, 'Year must be in the past', errorBorderStyle);
    return false;
  } else {
    showMessage(yearIn, '', '');
    return true;
  }
}

function isValidDay(year, month, day) {
  const maxDays = getNoOfDays(year, month);
  return day > 0 && day <= maxDays;
}

function isValidMonth(month) {
  return month >= 1 && month <= 12;
}

function isValidYear(year, month, day) {
  const today = new Date();
  const inputDate = new Date(`${year}-${month}-${day}`);
  return inputDate <= today;
}

function showMessage(element, message, borderStyle) {
  element.style.border = borderStyle;
  element.nextElementSibling.innerText = message;
}
