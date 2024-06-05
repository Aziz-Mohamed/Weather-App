export function showWeatherCard () {
  const weatherCardsContainer = document.querySelector('.weather-cards-container');

  function modifyWeatherCardsStyles() {
    weatherCardsContainer.classList.remove('weather-cards-container--hidden');
    weatherCardsContainer.style.transition = 'opacity 0.3s ease-in-out, height 0.3s ease-in-out';
    weatherCardsContainer.style.opacity = '1';
    weatherCardsContainer.style.height = 'auto'; 
  }
  setTimeout(modifyWeatherCardsStyles, 200); 
}


export function hiddenWeatherCard () {
  const weatherCardsContainer = document.querySelector('.weather-cards-container');
  weatherCardsContainer.classList.add('weather-cards-container--hidden');
  weatherCardsContainer.style.opacity = '0';
  weatherCardsContainer.style.height = '0'; 

}