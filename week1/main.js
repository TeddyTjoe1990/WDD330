const toggleMenu = () => {
    document.querySelector('#navigation').classList.toggle('display');
}

document.querySelector('#navigation').addEventListener('click', toggleMenu);

let completeDate = new Date();
const daysName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const monthName = [
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
    "December",
];

//--- HEADER DATE DISPLAY --- //
const day = daysName[completeDate.getDay()];
const todaysDate = completeDate.getDate();
const month = monthName[completeDate.getMonth()];
const year = completeDate.getFullYear();

const currentDate = `${day}, ${todaysDate} ${month} ${year}`;

// Footer Date Display
document.querySelector("#year").textContent = year;

document.getElementById("lu").textContent =
    " Last Updated: " + document.lastModified;