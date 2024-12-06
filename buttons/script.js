
// Js
// build a countdown timer that starts when a button is clicked and update the display in real time

let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let h1 = document.querySelector("h1");
let myInterval;

start.addEventListener("click", function () {
    let count = 0;
    myInterval = setInterval(function () {
        h1.textContent = count;
        count++;
    }, 1000);
});

stop.addEventListener("click", function () {
    clearInterval(myInterval);
})



