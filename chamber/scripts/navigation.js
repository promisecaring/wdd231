// ======================================
// navigation.js
// Chamber Project
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // Mobile Navigation Menu
    // ==========================

    const menuButton = document.querySelector("#menu");
    const navigation = document.querySelector(".navigation");

    if (menuButton && navigation) {
        menuButton.addEventListener("click", () => {
            navigation.classList.toggle("open");
            menuButton.classList.toggle("open");
        });
    }

    // ==========================
    // Footer Information
    // ==========================

    const year = document.querySelector("#year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    const lastModified = document.querySelector("#lastModified");

    if (lastModified) {
        lastModified.textContent = `Last Modified: ${document.lastModified}`;
    }

});