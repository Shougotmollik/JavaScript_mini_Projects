let rtHour = document.getElementById("hour");
let rtMinute = document.getElementById("minute");
let rtSecond = document.getElementById("second");

setInterval(() => changeTime(), 1000);

const changeTime = () => {
  let currentTime = new Date();

  rtHour.innerHTML =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  rtMinute.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  rtSecond.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
};
