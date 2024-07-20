const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const display = document.getElementById('display');

let timerInterval;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

function startTimer() {
    timerInterval = setInterval(updateTimer, 10); 
    startBtn.disabled = true; 
}

function stopTimer() {
    clearInterval(timerInterval);
    startBtn.disabled = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    updateDisplay();
    startBtn.disabled = false;
}

function updateTimer() {
    milliseconds++;
    if (milliseconds >= 100) {
        milliseconds = 0;
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
    }
    updateDisplay();
}

function updateDisplay() {
    display.textContent = `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
}

function pad(value) {
    return value < 10 ? `0${value}` : value;
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);