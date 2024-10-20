let intervalId; // To hold the setInterval ID
const apiKey = '4f09baac25d1bdeed9154a9ee5c9cdf1'; // OpenWeather API key
const cities = ['Delhi', 'Mumbai', 'Hyderabad', 'Kolkata', 'Bengaluru', 'Chennai']; // List of cities
const weatherResults = document.getElementById('weather-results');
const intervalInput = document.getElementById('interval-input');
const setIntervalButton = document.getElementById('set-interval');

// Default refresh interval (in milliseconds)
let refreshInterval = 30000; // Default to 30 seconds
let temperatureUnit = 'C'; // Default temperature unit

// Function to convert temperatures based on selected unit
const convertTemperature = (tempCelsius) => {
    if (temperatureUnit === 'K') {
        return tempCelsius + 273.15; // Convert to Kelvin
    } else if (temperatureUnit === 'F') {
        return (tempCelsius * 9/5) + 32; // Convert to Fahrenheit
    }
    return tempCelsius; // Default is Celsius
};

// Function to fetch and display weather data for a city
const fetchWeatherData = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const today = new Date().toISOString().slice(0, 10); // Get today's date in YYYY-MM-DD format
            const todayData = data.list.filter(item => item.dt_txt.startsWith(today)); // Filter for today's data

            // Clear previous results for the city
            const cityWeatherContainer = document.createElement('div');
            cityWeatherContainer.classList.add('city-weather');

            cityWeatherContainer.innerHTML = `<h2>Weather in ${city}</h2>`;

            if (todayData.length > 0) {
                const item = todayData[0]; // Use the first entry for today's forecast

                const temperatureCelsius = item.main.temp; // Current temperature in Celsius
                const feelsLikeCelsius = item.main.feels_like; // Feels like temperature in Celsius
                const minTemperature = item.main.temp_min; // Minimum temperature
                const maxTemperature = item.main.temp_max; // Maximum temperature
                const humidity = item.main.humidity; // Humidity
                const windSpeed = item.wind.speed; // Wind speed
                const weatherIconCode = item.weather[0].icon; // Icon code for weather
                const weatherDescription = item.weather[0].description; // Weather description

                const iconUrl = `http://openweathermap.org/img/wn/${weatherIconCode}@2x.png`; // Icon URL

                // Display today's weather data in the selected unit
                const temperature = convertTemperature(temperatureCelsius).toFixed(2);
                const feelsLike = convertTemperature(feelsLikeCelsius).toFixed(2);
                const minTemp = convertTemperature(minTemperature).toFixed(2);
                const maxTemp = convertTemperature(maxTemperature).toFixed(2);

                cityWeatherContainer.innerHTML += `
                    <img src="${iconUrl}" alt="${weatherDescription}" class="weather-icon">
                    <p>${weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1)}</p>
                    <p>Temperature: ${temperature} °${temperatureUnit}</p>
                    <p>Feels Like: ${feelsLike} °${temperatureUnit}</p>
                    <p>Min Temperature: ${minTemp} °${temperatureUnit}</p>
                    <p>Max Temperature: ${maxTemp} °${temperatureUnit}</p>
                    <p>Humidity: ${humidity}%</p>
                    <p>Wind Speed: ${windSpeed} m/s</p>
                `;
            } else {
                cityWeatherContainer.innerHTML += `<p>No data available for today.</p>`;
            }

            weatherResults.appendChild(cityWeatherContainer);
        })
        .catch(error => {
            const errorMessage = document.createElement('p');
            errorMessage.textContent = `Error fetching data for ${city}: ${error.message}`;
            weatherResults.appendChild(errorMessage);
        });
};

// Function to refresh weather data for all cities
const refreshWeatherData = () => {
    weatherResults.innerHTML = ''; // Clear previous results
    cities.forEach(city => fetchWeatherData(city)); // Re-fetch weather data for all cities
};

// Fetch weather data for all cities when the page loads
document.addEventListener('DOMContentLoaded', () => {
    refreshWeatherData(); // Fetch weather for all cities on page load

    // Set an interval to refresh data every 30 seconds (30000 milliseconds) by default
    intervalId = setInterval(refreshWeatherData, refreshInterval); // Initial call to set interval
});

// Event listener for interval input
setIntervalButton.addEventListener('click', () => {
    const inputValue = parseInt(intervalInput.value);
    if (inputValue && inputValue > 0) {
        refreshInterval = inputValue * 60000; // Convert minutes to milliseconds
        clearInterval(intervalId); // Clear the existing interval
        intervalId = setInterval(refreshWeatherData, refreshInterval); // Set the new interval
        alert(`Update interval set to ${inputValue} minute(s).`);
    } else {
        alert('Please enter a valid number of minutes.');
    }
});

// Event listeners for temperature unit buttons
document.getElementById('show-celsius').addEventListener('click', () => {
    temperatureUnit = 'C';
    refreshWeatherData(); // Refresh data to show in Celsius
});

document.getElementById('show-kelvin').addEventListener('click', () => {
    temperatureUnit = 'K';
    refreshWeatherData(); // Refresh data to show in Kelvin
});

document.getElementById('show-fahrenheit').addEventListener('click', () => {
    temperatureUnit = 'F';
    refreshWeatherData(); // Refresh data to show in Fahrenheit
});
