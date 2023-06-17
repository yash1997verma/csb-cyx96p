//globar variables
const time_el = document.querySelector(".watch .time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
let storedSeconds = 0;
let interval = null;

//event listners
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

//Update the timer
function timer() {
  storedSeconds++;
  seconds = storedSeconds;

  let secs = (seconds % 60).toString().padStart(2, "0");
  let mins = Math.floor((seconds / 60) % 60)
    .toString()
    .padStart(2, "0");
  let hrs = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, "0");

  time_el.innerText = `${hrs}:${mins}:${secs} `;
}

//start the timer
function startTimer() {
  //it will only run if interval is null
  if (!interval) {
    interval = setInterval(timer, 1000);
  }
}

//stop the timer
function stopTimer() {
  clearInterval(interval);
  interval = null;
}

// reset the timer
function resetTimer() {
  //reset interval to null
  if (interval) {
    clearInterval(interval);
    interval = null;
  }
  seconds = 0;
  storedSeconds = 0;
  time_el.innerText = "00:00:00";
}
