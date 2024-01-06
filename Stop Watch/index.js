let timer = document.querySelector(".watch");
let second = 0;
let minute = 0;
let hour = 0;
let stopTime = true;

const startTimer = () => {
  if (stopTime == true) {
    stopTime = false;
    timerCycle();
  }
};

const stopTimer = () => {
  if (stopTime == false) {
    stopTime = true;
  }
};

const resetTimer = () => {
  timer.innerHTML = "00:00:00";
  stopTime = true;
  second = 0;
  minute = 0;
  hour = 0;
};

const timerCycle = () => {
  if (stopTime == false) {
    second = parseInt(second);
    minute = parseInt(minute);
    hour = parseInt(hour);
    second = second + 1;
    if (second == 60) {
      minute = minute + 1;
      second = 0;
    }
    if (minute == 60) {
      hour = hour + 1;
      minute = 0;
      second = 0;
    }
    if (second < 10) {
      second = "0" + second;
    }
    if (minute < 10) {
      minute = "0" + minute;
    }
    if (hour < 10) {
      hour = "0" + hour;
    }

    timer.innerHTML = hour + ":" + minute + ":" + second;
    setTimeout("timerCycle()", 1000);
  }
};
