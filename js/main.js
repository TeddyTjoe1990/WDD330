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

const day = daysName[completeDate.getDay()];
const todaysDate = completeDate.getDate();
const month = monthName[completeDate.getMonth()];
const year = completeDate.getFullYear();

const currentDate = `${day}, ${todaysDate} ${month} ${year}`;

document.querySelector("#currentDate").textContent = currentDate;

document.querySelector("#year").textContent = year;

document.getElementById("update").textContent =
    " Last Updated: " + document.lastModified;