function calculateWindChill(temperature, windspeed) {
    if (temperature <= 10 && windspeed > 4.8) {
        const getWindChill = 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windspeed, 0.16)) + (0.3965 * temperature * Math.pow(windspeed, 0.16));
        return getWindChill.toFixed(1) + "°C"
    } else {
        return "N/A";
    }
}

const windChill = document.querySelector("#windchill");
const temperature = 10;
const windspeed = 15;

windChill.textContent = calculateWindChill(temperature, windspeed);