import {countryCodeGenerator} from './countryCodes.js' ;

const apiKey = 'b1973fb700ef4db4b0b54352240406' ;
const form = document.querySelector('.js-city-search');
let searchbar = document.querySelector('js-city-Name');

let cityEntered;
let weatherData;

let temperature;
let country;
let countryShorten;
let city;
let conditionText;
let conditionIcon;

let temperatureElement = document.querySelector('.js-temperature');
let countryElement = document.querySelector('.js-country');
let cityElement = document.querySelector('.js-city');
let conditionTextElement = document.querySelector('.js-condition');
let conditionIconElement = document.querySelector('.js-icon');


const getWeather = async (cityEntered) => {
  try{
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityEntered}&aqi=yes`);
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    weatherData = await response.json();

    temperature = weatherData.current.temp_c;
    country = weatherData.location.country;
    countryShorten = countryCodeGenerator(country);
    city = weatherData.location.region;
    conditionText = weatherData.current.condition.text;
    conditionIcon = weatherData.current.condition.icon;

    temperatureElement.textContent = temperature;
    countryElement.textContent = countryShorten;
    cityElement.textContent = city;
    conditionTextElement.textContent = conditionText;
    conditionIconElement.src = `https:${conditionIcon}`;
    checkFunction();
  }catch (e) {
    console.log(e.name)
  }
};


form.addEventListener("submit", (e) => {
  e.preventDefault();
  cityEntered = document.querySelector('.js-city-Name').value;
  if (cityEntered) { 
    getWeather(cityEntered);
  } else {
    console.error("Please enter a city name");
  }
})


const checkFunction = () => {
console.log("$$Temperature:", temperature);
console.log("$$Country:", country);
console.log("$$City:", city);
console.log("$$Condition Text:", conditionText);
console.log("$$Condition Icon URL:", conditionIcon);

console.log("Temperature:", temperatureElement);
console.log("Country:", countryElement);
console.log("City:", cityElement);
console.log("Condition Text:", conditionTextElement);
console.log("Condition Icon URL:", conditionIconElement);
}
// checkFunction();