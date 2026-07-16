// ==========================================
// join.js
// Chamber Join Page
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // Set Hidden Timestamp
    // ==========================

    const timestamp = document.getElementById("timestamp");

    if (timestamp) {
        timestamp.value = new Date().toISOString();
    }

    // ==========================
    // Membership Dialogs
    // ==========================

    const buttons = document.querySelectorAll("[data-dialog]");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const dialogId = button.dataset.dialog;
            const dialog = document.getElementById(dialogId);

            if (dialog) {
                dialog.showModal();
            }

        });

    });

    // ==========================
    // Close Dialog Buttons
    // ==========================

    const dialogs = document.querySelectorAll("dialog");

    dialogs.forEach(dialog => {

        const closeButton = dialog.querySelector(".close");

        if (closeButton) {

            closeButton.addEventListener("click", () => {
                dialog.close();
            });

        }

        // Close dialog when clicking outside it
        dialog.addEventListener("click", (event) => {

            const rect = dialog.getBoundingClientRect();

            const clickedInside =
                event.clientX >= rect.left &&
                event.clientX <= rect.right &&
                event.clientY >= rect.top &&
                event.clientY <= rect.bottom;

            if (!clickedInside) {
                dialog.close();
            }

        });

    });

});