// Import the places array from your discover.mjs file
import { places } from "../data/discover.mjs";

// ---------- Last Visit Message ----------
const messageBox = document.querySelector("#visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
    messageBox.textContent = "Welcome! This is your first visit to our Discover page.";
} else {
    const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
    messageBox.textContent = `Welcome back! You last visited ${days} day(s) ago.`;
}

localStorage.setItem("lastVisit", now);

// ---------- Display Cards ----------
const container = document.querySelector("#discover-grid");

places.forEach((place, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add(`item-${index + 1}`);

    card.innerHTML = `
        <h2>${place.name}</h2>
        <figure>
            <img src="${place.image}" loading="lazy" alt="${place.name}">
        </figure>
        <address>${place.address}</address>
        <p>${place.description}</p>
        <button>Learn More</button>
    `;

    container.appendChild(card);
});