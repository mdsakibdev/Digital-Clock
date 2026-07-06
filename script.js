/* =====================================================
   SELECT DOM ELEMENTS
===================================================== */

const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");
const dayElement = document.getElementById("day");
const periodElement = document.getElementById("period");


/* =====================================================
   DAYS & MONTHS ARRAY
===================================================== */

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];


/* =====================================================
   UPDATE CLOCK FUNCTION
===================================================== */

function updateClock() {

    // Create Current Date Object
    const now = new Date();

    // Get Time
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    // Get Date
    let day = now.getDay();
    let date = now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear();

    // AM / PM
    let period = "AM";

    if (hour >= 12) {
        period = "PM";
    }

    // Convert 24 Hour To 12 Hour Format
    if (hour === 0) {
        hour = 12;
    } else if (hour > 12) {
        hour = hour - 12;
    }

    // Add Leading Zero
    hour = String(hour).padStart(2, "0");
    minute = String(minute).padStart(2, "0");
    second = String(second).padStart(2, "0");

    // Update HTML
    timeElement.textContent = `${hour} : ${minute} : ${second}`;

    periodElement.textContent = period;

    dateElement.textContent =
        `${date} ${months[month]} ${year}`;

    dayElement.textContent =
        days[day];

}


/* =====================================================
   INITIAL CALL
===================================================== */

updateClock();


/* =====================================================
   UPDATE EVERY SECOND
===================================================== */

setInterval(updateClock, 1000);