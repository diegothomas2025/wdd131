const year = document.querySelector("#currentyear");
const currentYear = new Date().getFullYear();

year.textContent = currentYear 


const lastModifiedParagraph = document.querySelector("#lastModified");
lastModifiedParagraph.textContent = `Last modified: ${document.lastModified}`;

const temperature = parseFloat(document.querySelector("#temperature").textContent);
const wind = parseFloat(document.querySelector("#wind").textContent);

function calculateWindChill(temperature, wind) {
    if (temperature <= 10 && wind > 4.8) {
        const chill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temperature * Math.pow(wind, 0.16);
        return chill.toFixed(1) + ' °C';
    } else {
        return 'N/A';
    }
}

document.querySelector("#windchill").textContent = calculateWindChill(temperature, wind);