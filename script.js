async function getWeather() {

    const city = document.getElementById("cityInput").value;

    const result = document.getElementById("weatherResult");

    if (city === "") {
        result.innerHTML = "<p>Please enter a city name.</p>";
        return;
    }

    // Add your API key here
    const API_KEY = "f294628132ea34152d19e7482f8c37a6";

    const URL =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {

        result.innerHTML = "<p>Loading...</p>";

        const response = await fetch(URL);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        console.log(data);

        result.innerHTML = `
            <div class="weather-card">

                <h2>${data.name}</h2>

                <p class="temperature">
                    ${data.main.temp}°C
                </p>

                <p>
                    Weather: ${data.weather[0].description}
                </p>

                <p>
                    Feels Like: ${data.main.feels_like}°C
                </p>

                <p>
                    Humidity: ${data.main.humidity}%
                </p>

                <p>
                    Wind Speed: ${data.wind.speed} m/s
                </p>

            </div>
        `;

    } catch (error) {

        result.innerHTML = `
            <p style="color:red;">
                ${error.message}
            </p>
        `;

    }
}