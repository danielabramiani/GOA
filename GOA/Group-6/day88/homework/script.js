function getCurrentDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function daysBetweenDates(dateStr1, dateStr2) {
    const date1 = new Date(dateStr1);
    const date2 = new Date(dateStr2);
    const timeDiff = Math.abs(date2 - date1);
    const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return dayDiff;
}

function addDaysToDate(dateStr, days) {
    const date = new Date(dateStr);
    date.setDate(date.getDate() + days);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function getDayOfWeek(dateStr) {
    const date = new Date(dateStr);
    const options = { weekday: 'long' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
}

function formatDateInLocales(dateStr) {
    const date = new Date(dateStr);
    const locales = ['en-US', 'fr-FR', 'de-DE'];
    const formattedDates = locales.map(locale => {
        return new Intl.DateTimeFormat(locale).format(date);
    });
    return formattedDates;
}

console.log(getCurrentDateTime());
console.log(daysBetweenDates('2024-01-01', '2024-01-15'));
console.log(addDaysToDate('2024-01-01', 10));
console.log(getDayOfWeek('2024-01-01'));
console.log(formatDateInLocales('2024-01-01'));
