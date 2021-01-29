let hour = document.getElementById("hour");
let minutes = document.getElementById("minute");
let second = document.getElementById("second");
let progress = document.getElementById("progress");

let showCurrentTime = () => {
  let date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  hr = hr ? hr : 12;

  hour.textContent = hr;
  minutes.textContent = min;
  second.textContent = sec;

  progress.style.width = (sec / 60) * 100 + "%";
};

setInterval(showCurrentTime, 1000);
