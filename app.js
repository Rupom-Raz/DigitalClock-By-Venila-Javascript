//A Simple Digital Clock using Venila JavaScript
// Author: Rupom Raz


let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let progress = document.getElementById("progress");

let myClock = () => {
  let now = new Date();
  let hr = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  if (hr == 0) {
    hr = "12";
  } else if (hr > 12) {
    hr = hr - 12;
  }

  hr = hr < 10 ? "0" + hr : hr;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  hour.textContent = hr;
  minute.textContent = min;
  second.textContent = sec;

  progress.style.width = (sec / 60) * 100 + "%";
};
setInterval(myClock, 1000);
