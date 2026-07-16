// ==========================================
// thankyou.js
// Chamber Project
// Displays submitted form data
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // Read URL parameters
    const params = new URLSearchParams(window.location.search);

    // Display required fields
    document.getElementById("firstName").textContent =
        params.get("firstName") || "Not Provided";

    document.getElementById("lastName").textContent =
        params.get("lastName") || "Not Provided";

    document.getElementById("email").textContent =
        params.get("email") || "Not Provided";

    document.getElementById("phone").textContent =
        params.get("phone") || "Not Provided";

    document.getElementById("organization").textContent =
        params.get("organization") || "Not Provided";

    // Format and display the timestamp
    const timestamp = params.get("timestamp");

    if (timestamp) {
        const date = new Date(timestamp);

        document.getElementById("timestamp").textContent =
            date.toLocaleString("en-US", {
                dateStyle: "full",
                timeStyle: "long"
            });
    } else {
        document.getElementById("timestamp").textContent = "Not Available";
    }

    // Footer information
    const year = document.getElementById("year");
    if (year) {
        year.textContent = new Date().getFullYear();
    }

    const lastModified = document.getElementById("lastModified");
    if (lastModified) {
        lastModified.textContent = `Last Modified: ${document.lastModified}`;
    }

});