console.log("Welcome");

// Accesing HTML elements
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

// Function to display time
function displayTime() {
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hr = 30*hh + mm/2;
    let mr = 6*mm;
    let sr = 6*ss;

    hour.style.transform = `rotate(${hr}deg)`;
    minute.style.transform = `rotate(${mr}deg)`;
    second.style.transform = `rotate(${sr}deg)`;
}

setInterval(displayTime, 1000)