// ==============================
// index.js - Home Page
// Lagos Chamber of Commerce
// ==============================

// ===== Footer =====
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;

// ===== Mobile Navigation =====
const menuToggle = document.querySelector("#menu");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
        menuToggle.textContent =
            navLinks.classList.contains("show") ? "✖" : "☰";
    });
}

// ===== Weather =====
const apiKey = "1b44dc16babc235a0fd201fcddfbaf9d";
const city = "Lagos";

const currentWeatherURL =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

const forecastURL =
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

async function getWeather() {

    try {

        const response = await fetch(currentWeatherURL);
        const data = await response.json();

        console.log(data);

        if (!data.weather) {
            throw new Error("Weather data not available.");
        }

        const temp = Math.round(data.main.temp);
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;

        document.querySelector("#temperature").textContent =
            `Temperature: ${temp}°C`;

        document.querySelector("#description").textContent =
            description;

        document.querySelector("#weather-icon").src =
            `https://openweathermap.org/img/wn/${icon}@2x.png`;

        document.querySelector("#weather-icon").alt =
            description;

        // ===== Forecast =====
        const forecastResponse = await fetch(forecastURL);
        const forecastData = await forecastResponse.json();

        const forecastList =
            document.querySelector("#forecast-list");

        forecastList.innerHTML = "";

        const days = forecastData.list.filter(item =>
            item.dt_txt.includes("12:00:00")
        );

        days.slice(0, 3).forEach(day => {

            const weekday = new Date(day.dt_txt)
                .toLocaleDateString("en-US", {
                    weekday: "long"
                });

            const li = document.createElement("li");

            li.textContent =
                `${weekday}: ${Math.round(day.main.temp)}°C`;

            forecastList.appendChild(li);

        });

    } catch (error) {

        console.error("Weather Error:", error);

    }

}

getWeather();


// ===== Member Spotlights =====

const spotlightContainer =
    document.querySelector("#spotlights");

async function loadSpotlights() {

    try {

        const response =
            await fetch("data/members.json");

        const data =
            await response.json();

        const eligibleMembers =
            data.members.filter(member =>
                member.membershipLevel === 2 ||
                member.membershipLevel === 3
            );

        const shuffled =
            eligibleMembers.sort(() => 0.5 - Math.random());

        const selected =
            shuffled.slice(0, 3);

        spotlightContainer.innerHTML = "";

        selected.forEach(member => {

            const card =
                document.createElement("section");

            card.classList.add("spotlight-card");

            card.innerHTML = `
                <img src="images/${member.image}"
                     alt="${member.name}"
                     loading="lazy">

                <h3>${member.name}</h3>

                <p>${member.description}</p>

                <p>${member.phone}</p>

                <a href="${member.website}"
                   target="_blank">
                   Visit Website
                </a>

                <p class="membership">
                    ${member.membershipLevel === 3
                        ? "Gold Member"
                        : "Silver Member"}
                </p>
            `;

            spotlightContainer.appendChild(card);

        });

    } catch (error) {

        console.error("Spotlight Error:", error);

    }

}

loadSpotlights();