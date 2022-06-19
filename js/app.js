const images = [
  "Img(1).jpg",
  "Img(2).jpg",
  "Img(3).jpg",
  "Img(4).jpg",
  "Img(5).jpg",
  "Img(6).jpg",
];
const choosenImage = images[Math.floor(Math.random() * 6)];

function randomBackground() {
  document.body.style.background = `url('image/${choosenImage}') no-repeat  fixed `;
  document.body.style.backgroundSize = "cover";
}
window.addEventListener("load", randomBackground);

// function todoMoving() {
//   todoValue.innerText = `${progressState.startValue}%`;
//   todoProgress.style.background = `conic-gradient(#007acc ${
//     progressState.startValue * 3.6
//   }deg, #ededed 0deg)`;
//   todoValue.innerText = `${progressState.startValue}%`;
// }
// let progress = setInterval(() => {
//   progressState.startValue += 1;
//   todoMoving();
//   if (progressState.startValue === progressState.endValue) {
//     clearInterval(progress);
//   }
// }, progressState.speed);
