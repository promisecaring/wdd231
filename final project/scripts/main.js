// ==========================================
// Drift Racing Club
// main.js
// WDD 231 Final Project
// ==========================================

// Import shared modules
import "./navigation.js";
import "./footer.js";

// Spotlight container
const spotlightContainer = document.querySelector("#spotlightContainer");

// Driver JSON location
const driverURL = "./data/drivers.json";

// =============================
// Load Featured Driver
// =============================

async function loadSpotlightDriver() {

    if (!spotlightContainer) return;

    try {

        const response = await fetch(driverURL);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const drivers = await response.json();

        displayRandomDriver(drivers);

    } catch (error) {

        console.error("Unable to load driver data.", error);

        spotlightContainer.innerHTML = `
            <p>
                Driver information is currently unavailable.
            </p>
        `;

    }

}

// =============================
// Display Random Driver
// =============================

function displayRandomDriver(drivers) {

    if (!drivers.length) return;

    const randomIndex = Math.floor(Math.random() * drivers.length);

    const driver = drivers[randomIndex];

    spotlightContainer.innerHTML = `
        <article class="spotlight-card">

            <img
                src="${driver.image}"
                alt="${driver.name}"
                loading="lazy"
            >

            <div class="spotlight-info">

                <h3>${driver.name}</h3>

                <p>
                    <strong>Country:</strong>
                    ${driver.country}
                </p>

                <p>
                    <strong>Car:</strong>
                    ${driver.car}
                </p>

                <p>
                    <strong>Horsepower:</strong>
                    ${driver.horsepower}
                </p>

                <a href="drivers.html" class="btn">
                    View Drivers
                </a>

            </div>

        </article>
    `;

}

// =============================
// Initialize
// =============================

loadSpotlightDriver();