const API_KEY = '2e14c2aaf5b7a8d6db19be4040372b3e';

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&lang=kr&units=metric&appid=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector('#weather span:first-child');
      const weather = document.querySelector('#weather span:last-child');
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} \n 최고: ${Math.round(
        data.main.temp_max
      )}°C / 최저: ${Math.round(data.main.temp_min)}°C`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
