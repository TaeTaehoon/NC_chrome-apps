const SEC = 1000;
const dayProgress = document.querySelector("#day_progress .circle_progress");
let dayValue = document.querySelector("#day_progress .progress_value");
const greeting = document.querySelector("#day_progress .text");

function dayMoving() {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  dayProgress.style.background = `conic-gradient(#007acc ${
    ((hour * 60 ** 2 + minute * 60 + second) / 86400) * 360
  }deg, #ededed 0deg)`;
  dayValue.innerText = `${isPadded(hour)}:${isPadded(minute)}:${isPadded(
    second
  )}`;

  if (12 > hour && hour > 6) {
    greeting.innerText = `Good morning, ${localStorage.getItem("userName")}`;
  } else if (18 > hour && hour > 12) {
    greeting.innerText = `Good afternoon, ${localStorage.getItem("userName")}`;
  } else if (24 > hour && hour > 18) {
    greeting.innerText = `Good evening, ${localStorage.getItem("userName")}`;
  } else {
    greeting.innerText = `Good night, ${localStorage.getItem("userName")}`;
  }
}

function isPadded(num) {
  return String(num).padStart(2, "0");
}

dayMoving();
setInterval(dayMoving, SEC);
