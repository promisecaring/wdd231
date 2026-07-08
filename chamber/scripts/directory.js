// ====== Chamber Home Page Script ======

// ====== Footer Info ======
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// ====== Hamburger Menu ======
const menuToggle = document.getElementById("menu");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  menuToggle.textContent = navLinks.classList.contains("show") ? "✖" : "☰";
});

// ====== Weather Section ======
const apiKey = "1b44dc16babc235a0fd201fcddfbaf9d"; // OpenWeatherMap API key
const city = "Lagos";
const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

async function getWeather() {
  try {
    // Fetch current weather
    const response = await fetch(currentWeatherURL);
    const data = await response.json();

    const temp = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    document.getElementById("temperature").textContent = `Temperature: ${temp}°C`;
    document.getElementById("description").textContent = description;
    document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${icon}.png`;

    // Fetch 3-day forecast
    const forecastResponse = await fetch(forecastURL);
    const forecastData = await forecastResponse.json();
    const forecastList = forecastData.list.filter((item) =>
      item.dt_txt.includes("12:00:00")
    );

    const forecastContainer = document.createElement("div");
    forecastContainer.id = "forecast";
    forecastContainer.innerHTML = "<h4>3-Day Forecast</h4>";

    forecastList.slice(0, 3).forEach((day) => {
      const date = new Date(day.dt_txt).toLocaleDateString("en-US", {
        weekday: "short",
      });
      const dayTemp = Math.round(day.main.temp);
      const dayIcon = day.weather[0].icon;
      forecastContainer.innerHTML += `
        <p>${date}: ${dayTemp}°C 
        <img src="https://openweathermap.org/img/wn/${dayIcon}.png" alt="Forecast Icon"></p>`;
    });

    document.querySelector("#weather").appendChild(forecastContainer);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

getWeather();

// ====== SPOTLIGHT MEMBERS ======
const spotlightContainer = document.querySelector("#spotlights");

async function loadSpotlights() {
  try {
    const response = await fetch("data/members.json");
    const data = await response.json();

    // Filter for only Gold (level 2) and Silver (level 3) members
    const eligibleMembers = data.members.filter(
      member => member.membershipLevel === 2 || member.membershipLevel === 3
    );

    // Randomize members
    const shuffled = eligibleMembers.sort(() => 0.5 - Math.random());

    // Pick 2–3 members
    const selected = shuffled.slice(0, Math.floor(Math.random() * 2) + 2);

    // Display the spotlights
    spotlightContainer.innerHTML = "";
    selected.forEach(member => {
      const card = document.createElement("section");
      card.classList.add("spotlight-card");
      card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>${member.description}</p>
        <p><strong>📍</strong> ${member.address}</p>
        <p><strong>📞</strong> ${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        <p class="membership">Level: ${member.membershipLevel === 3 ? "Gold" : "Silver"} Member</p>
      `;
      spotlightContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading spotlight members:", error);
  }
}

loadSpotlights();