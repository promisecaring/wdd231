// ==========================================
// Drift Racing Club
// navigation.js
// Responsive Navigation
// ==========================================

const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#navigation");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("open");

        const isOpen = navigation.classList.contains("open");

        menuButton.innerHTML = isOpen ? "&times;" : "☰";

        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Close Navigation Menu" : "Open Navigation Menu"
        );

        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );

    });

    // Close menu when a navigation link is clicked
    const navLinks = navigation.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (window.innerWidth < 900) {

                navigation.classList.remove("open");

                menuButton.innerHTML = "☰";

                menuButton.setAttribute(
                    "aria-label",
                    "Open Navigation Menu"
                );

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });

    });

    // Ensure menu resets on desktop resize
    window.addEventListener("resize", () => {

        if (window.innerWidth >= 900) {

            navigation.classList.remove("open");

            menuButton.innerHTML = "☰";

            menuButton.setAttribute(
                "aria-label",
                "Open Navigation Menu"
            );

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

}