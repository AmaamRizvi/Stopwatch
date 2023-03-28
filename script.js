let stopwatchInterval;
let hour = 0, minute = 0, second = 0;

function startStopwatch() {
  stopwatchInterval = setInterval(() => {
    second++;
    if (second === 60) {
      minute++;
      second = 0;
    }
    if (minute === 60) {
      hour++;
      minute = 0;
    }
    document.getElementById("time").textContent = formatTime(hour) + ":" + formatTime(minute) + ":" + formatTime(second);
  }, 1000);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  hour = 0, minute = 0, second = 0;
  document.getElementById("time").textContent = formatTime(hour) + ":" + formatTime(minute) + ":" + formatTime(second);
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}
