let timer;
let startTime;
let elapsedTime = 0;

const display = document.querySelector('.display');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

function formatTime(time) {
  const pad = num => num.toString().padStart(2, '0');
  const hours = pad(Math.floor(time / 3600000));
  const minutes = pad(Math.floor((time % 3600000) / 60000));
  const seconds = pad(Math.floor((time % 60000) / 1000));
  return `${hours}:${minutes}:${seconds}`;
}

function updateDisplay() {
  display.textContent = formatTime(elapsedTime);
}

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timer = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    updateDisplay();
  }, 1000);
  startBtn.disabled = true;
}

function stopTimer() {
  clearInterval(timer);
  startBtn.disabled = false;
}

function resetTimer() {
  clearInterval(timer);
  elapsedTime = 0;
  updateDisplay();
  startBtn.disabled = false;
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
