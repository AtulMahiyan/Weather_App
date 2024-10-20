document.getElementById('cityForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const city = document.getElementById('city').value;
    const apiKey = '4f09baac25d1bdeed9154a9ee5c9cdf1'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== '200') {
                alert('City not found!');
                return;
            }
            document.getElementById('cityName').textContent = city;

            const weatherData = data.list.map(item => {
                return {
                    date: item.dt_txt,
                    temperature: item.main.temp,
                    humidity: item.main.humidity,
                    windSpeed: item.wind.speed
                };
            });

            plotTemperatureChart(weatherData);
            plotHumidityChart(weatherData);
            plotWindSpeedChart(weatherData);
            displaySummary(weatherData); // New function to display summary
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});

// Function to calculate and display summary
function displaySummary(weatherData) {
    const temperatures = weatherData.map(item => item.temperature);
    const humidities = weatherData.map(item => item.humidity);
    const windSpeeds = weatherData.map(item => item.windSpeed);

    const averageTemperature = (temperatures.reduce((acc, val) => acc + val, 0) / temperatures.length).toFixed(2);
    const minTemperature = Math.min(...temperatures).toFixed(2);
    const maxTemperature = Math.max(...temperatures).toFixed(2);

    const averageHumidity = (humidities.reduce((acc, val) => acc + val, 0) / humidities.length).toFixed(2);
    const averageWindSpeed = (windSpeeds.reduce((acc, val) => acc + val, 0) / windSpeeds.length).toFixed(2);

    const summaryElement = document.getElementById('summary');
    summaryElement.innerHTML = `
        <h3>Weather Summary:</h3>
        <p><strong>Average Temperature:</strong> ${averageTemperature} °C</p>
        <p><strong>Minimum Temperature:</strong> ${minTemperature} °C</p>
        <p><strong>Maximum Temperature:</strong> ${maxTemperature} °C</p>
        <p><strong>Average Humidity:</strong> ${averageHumidity}%</p>
        <p><strong>Average Wind Speed:</strong> ${averageWindSpeed} m/s</p>
    `;
}

// Function to plot the temperature chart remains unchanged
function plotTemperatureChart(weatherData) {
    const ctx = document.getElementById('temperatureChart').getContext('2d');
    const labels = weatherData.map(item => item.date);
    const temperatures = weatherData.map(item => item.temperature);

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Temperature (°C)',
                data: temperatures,
                borderColor: 'blue',
                fill: false
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Date/Time'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Temperature (°C)'
                    }
                }
            }
        }
    });
}

// Function to plot the humidity chart remains unchanged
function plotHumidityChart(weatherData) {
    const ctx = document.getElementById('humidityChart').getContext('2d');
    const labels = weatherData.map(item => item.date);
    const humidityData = weatherData.map(item => item.humidity);

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Humidity (%)',
                data: humidityData,
                borderColor: 'green',
                fill: false
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Date/Time'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Humidity (%)'
                    }
                }
            }
        }
    });
}

// Function to plot the wind speed chart remains unchanged
function plotWindSpeedChart(weatherData) {
    const ctx = document.getElementById('windSpeedChart').getContext('2d');
    const labels = weatherData.map(item => item.date);
    const windSpeeds = weatherData.map(item => item.windSpeed);

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Wind Speed (m/s)',
                data: windSpeeds,
                borderColor: 'orange',
                fill: false
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Date/Time'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Wind Speed (m/s)'
                    }
                }
            }
        }
    });
}
