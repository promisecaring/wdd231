// ==========================================
// Drift Racing Club
// contact.js
// WDD 231 Final Project
// ==========================================

import "./navigation.js";
import "./footer.js";

// Select the form
const contactForm = document.querySelector("#contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        // Get form values
        const firstName = document.querySelector("#firstName").value.trim();
        const lastName = document.querySelector("#lastName").value.trim();
        const email = document.querySelector("#email").value.trim();
        const phone = document.querySelector("#phone").value.trim();
        const subject = document.querySelector("#subject").value.trim();
        const message = document.querySelector("#message").value.trim();

        // Basic validation
        if (
            !firstName ||
            !lastName ||
            !email ||
            !phone ||
            !subject ||
            !message
        ) {
            alert("Please complete all required fields.");
            return;
        }

        // Email validation
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Save form data
        const contactData = {
            firstName,
            lastName,
            email,
            phone,
            subject,
            message,
            submitted: new Date().toLocaleString()
        };

        localStorage.setItem(
            "contactSubmission",
            JSON.stringify(contactData)
        );

        // Redirect to thank-you page
        window.location.href = "thankyou.html";

    });

}