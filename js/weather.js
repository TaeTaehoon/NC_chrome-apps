const temp = document.querySelector("#weather span:first-child");
const city = document.querySelector(".container span:first-child");
const weather = document.querySelector(".container span:last-child");

const API_KEY = "85e1735805dd0775d15bf6094191e7d6";
function onGeoOk(pos) {
  const lat = pos.coords.latitude;
  const lon = pos.coords.longitude;
  console.log(pos);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      weather.innerText = data.weather[0].main;
      city.innerText = data.name;
      temp.innerText = data.main.temp;
    });
}

function onGeoError() {
  alert("I can't find your location!");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
