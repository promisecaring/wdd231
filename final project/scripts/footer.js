// ==========================================
// Drift Racing Club
// footer.js
// WDD 231 Final Project
// ==========================================

// Current Year
const currentYear = document.querySelector("#currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

// Last Modified Date
const lastModified = document.querySelector("#lastModified");

if (lastModified) {
    lastModified.textContent = document.lastModified;
}