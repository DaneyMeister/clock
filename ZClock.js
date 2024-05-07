const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let missnakita = document.getElementById("missnakita");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let day = document.getElementById("day");
let dates = document.getElementById("dates");
let month = document.getElementById("month");
let year = document.getElementById("year");




setInterval (() => {
    const date = new Date();

    missnakita.innerHTML = date.getHours() >= 12 ? 'pm' : 'am';
    hours.innerHTML = date.getHours() % 12 || 12;
    minutes.innerHTML = date.getMinutes();
    seconds.innerHTML = date.getSeconds();
    day.innerHTML = date.toLocaleDateString('en-us', {weekday:'long'});
    dates.innerHTML = date.getDate();
    mon = date.getMonth();
    month.innerHTML = monthName[mon];
    year.innerHTML = date.getFullYear();
})
        
