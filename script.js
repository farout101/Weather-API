const apiKey = "0ab343c872b4fa41edc5d7d899b367b3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const defaultCity = "Yangon";

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();

  console.log(data);

  if (data.cod === 200) {
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
  } else {
    alert("City not found");
  }
}

window.addEventListener('load', () => {
    checkWeather(defaultCity);
})

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
