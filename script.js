const apiKey = 'b1973fb700ef4db4b0b54352240406' ;
const form = document.querySelector('.js-city-search');
let searchbar = document.querySelector('js-city-Name');

let cityEntered;
let weatherData;
let temperature;

const getWeather = async (cityEntered) => {
  try{
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityEntered}&aqi=yes`);
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    weatherData = await response.json();
    console.log(weatherData);
  }catch (e) {
    console.log(e.name)
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  cityEntered = document.querySelector('.js-city-Name').value;
  if (cityEntered) { 
    console.log(cityEntered);
    getWeather(cityEntered);
  } else {
    console.error("Please enter a city name");
  }
})



