# Weather App

## Overview

This Weather App provides real-time weather data and forecasts for major Indian cities, including Delhi, Mumbai, Kolkata, Hyderabad, Bengaluru, and Chennai. It features three main modules: a homepage displaying current weather data, an alert module for user-defined thresholds, and a forecast module with five-day summaries and graphs.

## Table of Contents

1. Features

2. Tech Stack

3. Installation

4. Usage

5. Design Choices

6. Dependencies

7. License

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
   Input fields:
      1. Select City
      
      2. Temperature Limit (°C)
      
      3. Humidity Limit (%)
      
      4. Wind Speed Limit (m/s)
      
      5. Your Email

3. **Forecast Module**: Takes a city as input and provides a weather summary, including:
   1. Average Temperature

   2. Minimum and Maximum Temperature

   3. Average Humidity

   4. Average Wind Speed

   5. Graphs for temperature, humidity, and wind speed for the next 5 days.

## Tech Stack

1. HTML

2. CSS

3. JavaScript

4. EmailJS (for sending email alerts)

5. [Charting Library Name] (for plotting graphs)

6. OpenWeather API (for weather data)

## Installation

To set up the application, follow these steps:

1. Open the repository:
   https://github.com/AtulMahiyan/Weather_App

2. Download the project directory as zip:

3. extract the zip file.

4. Start the application by opening index.html file in browser

## Usage

1. Open index.html file on web browser

2. Use the homepage to view real-time weather data.

3. Set alerts in the alert module and monitor the notifications sent to your email.

4. Use the forecast module to check the five-day weather summary and graphs.


## Design Choices

1. Modular Structure: Separate modules for homepage, alerts, and forecast for easy maintenance.

2. Real-time Updates: Fetches live weather data with adjustable update intervals.

3. Custom Alerts: Users set thresholds for temperature, humidity, and wind speed, triggering email notifications via EmailJS.

4. Data Visualization: Uses a charting library for easy interpretation of 5-day weather trends.

5. Responsive Design: Optimized for both mobile and desktop users.

6. API Integration: Utilizes OpenWeather API for accurate global weather data.

7. Scalability: Can be expanded to include more cities or features.

8. Simplicity: User-friendly interface with intuitive inputs and clear data display.

   
## Dependencies

To run the application, ensure you have the following dependencies installed:

1. EmailJS account for email alerts

2. A valid API key from OpenWeather

## License

This project is not licensed
