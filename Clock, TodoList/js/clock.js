const clockContainer = document.querySelector('.clockContainer');
const clock = clockContainer.querySelector('h1')
const date = clockContainer.querySelector('#date');
const day = clockContainer.querySelector('#day');

const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

setInterval(() => {
    getTime();
}, (1000));

const getTime = () => {
    const time = new Date();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const seconds = time.getSeconds();
    const year = time.getFullYear();

    const month = time.getMonth();
    const dates = time.getDate();
    const days = time.getDay();
    date.innerText = `${year}.${month+1}.${dates}`
    day.innerText = `${week[days]}`

    clock.innerText = `${hour < 10 ? `0${hour}` : `${hour}`}:${
        minute < 10 ? `0${minute}` : `${minute}`}:${
        seconds < 10 ? `0${seconds}` : `${seconds}`}`
}

