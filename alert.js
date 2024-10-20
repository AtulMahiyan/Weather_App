// OpenWeather API key
const apiKey = '4f09baac25d1bdeed9154a9ee5c9cdf1';

// Set to track active alerts
const activeAlerts = new Set();

document.getElementById('alertForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const tempLimit = parseFloat(document.getElementById('tempLimit').value);
    const humidityLimit = parseFloat(document.getElementById('humidityLimit').value);
    const windSpeedLimit = parseFloat(document.getElementById('windSpeedLimit').value);
    const userEmail = document.getElementById('email').value;

    // Create a unique key for the alert
    const alertKey = `${city}-${tempLimit}-${humidityLimit}-${windSpeedLimit}`;

    // Fetch weather data from OpenWeather API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const currentTemp = data.main.temp;
            const currentHumidity = data.main.humidity;
            const currentWindSpeed = data.wind.speed;

            let alertMessage = `Weather in ${city}:\n`;
            let shouldSendAlert = false; // Flag to track if an alert should be sent

            if (currentTemp > tempLimit) {
                alertMessage += `Temperature is above the limit! Current: ${currentTemp} °C\n`;
                shouldSendAlert = true;
            }

            if (currentHumidity > humidityLimit) {
                alertMessage += `Humidity is above the limit! Current: ${currentHumidity}%\n`;
                shouldSendAlert = true;
            }

            if (currentWindSpeed > windSpeedLimit) {
                alertMessage += `Wind Speed is above the limit! Current: ${currentWindSpeed} m/s\n`;
                shouldSendAlert = true;
            }

            // Send alert if conditions exceed limits and alert has not been sent for this configuration
            if (shouldSendAlert && !activeAlerts.has(alertKey)) {
                sendEmailAlert(userEmail, city, alertMessage);
                activeAlerts.add(alertKey); // Mark this alert as sent
                document.getElementById('message').textContent = `Alert sent to ${userEmail}`;
            } else if (!shouldSendAlert) {
                document.getElementById('message').textContent = `Conditions are within limits. No alert sent.`;
            } else {
                document.getElementById('message').textContent = `Alert already sent for these conditions.`;
            }
        })
        .catch(error => {
            document.getElementById('message').textContent = `Error fetching weather data: ${error.message}`;
        });
});
