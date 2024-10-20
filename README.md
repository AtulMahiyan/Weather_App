# Weather App

## Overview

This Weather App provides real-time weather data and forecasts for major Indian cities, including Delhi, Mumbai, Kolkata, Hyderabad, Bengaluru, and Chennai. It features three main modules: a homepage displaying current weather data, an alert module for user-defined thresholds, and a forecast module with five-day summaries and graphs.

## Table of Contents

- Features
- Tech Stack
- Installation
- Usage
- Design Choices
- Dependencies
- License

## Features

1. **Homepage Module**: Displays current weather data for selected cities with the ability to change temperature units and data fetching intervals.
   - Example output:
     ```
     Clear sky
     Temperature: 29.28 °C
     Feels Like: 28.71 °C
     Min Temperature: 29.28 °C
     Max Temperature: 32.06 °C
     Humidity: 38%
     Wind Speed: 3.24 m/s
     ```

2. **Alert Module**: Allows users to set temperature, humidity, and wind speed limits. Sends an email alert when any threshold is breached.
   - Input fields:
     - Select City
     - Temperature Limit (°C)
     - Humidity Limit (%)
     - Wind Speed Limit (m/s)
     - Your Email

3. **Forecast Module**: Takes a city as input and provides a weather summary, including:
   - Average Temperature
   - Minimum and Maximum Temperature
   - Average Humidity
   - Average Wind Speed
   - Graphs for temperature, humidity, and wind speed for the next 5 days.

## Tech Stack

- HTML
- CSS
- JavaScript
- EmailJS (for sending email alerts)
- [Charting Library Name] (for plotting graphs)
- OpenWeather API (for weather data)

## Installation

To set up the application, follow these steps:

1. Open the repository:
   
   https://github.com//weather-app.git

2. Download the project directory as zip:

3. extract the zip file.

4. Start the application by opening index.html file in browser

## Usage

1. Open index.html file on web browser

2. Use the homepage to view real-time weather data.

3. Set alerts in the alert module and monitor the notifications sent to your email.

4. Use the forecast module to check the five-day weather summary and graphs.


## Dependencies

To run the application, ensure you have the following dependencies installed:

1. EmailJS account for email alerts
2. A valid API key from OpenWeather

## License

This project is not licensed