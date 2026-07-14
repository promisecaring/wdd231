// ===== Footer =====
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;

// ===== Hamburger Menu =====
const menuToggle = document.querySelector("#menu");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
        menuToggle.textContent = navLinks.classList.contains("show") ? "✖" : "☰";
    });
}

// ===== Directory =====
const directory = document.querySelector("#members");

async function getMembers() {
    try {
        const response = await fetch("data/members.json");

        if (!response.ok) {
            throw new Error("Unable to load members.json");
        }

        const data = await response.json();
        displayMembers(data.members);

    } catch (error) {
        console.error("Error loading members:", error);

        if (directory) {
            directory.innerHTML =
                "<p>Sorry, the business directory could not be loaded.</p>";
        }
    }
}

function displayMembers(members) {

    directory.innerHTML = "";

    members.forEach(member => {

        const card = document.createElement("section");
        card.classList.add("member-card");

        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}" loading="lazy">
            <h3>${member.name}</h3>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Description:</strong> ${member.description}</p>
            <p><strong>Membership:</strong> ${
                member.membershipLevel === 3
                    ? "Gold"
                    : member.membershipLevel === 2
                    ? "Silver"
                    : "Member"
            }</p>
            <p><a href="${member.website}" target="_blank" rel="noopener">Visit Website</a></p>
        `;

        directory.appendChild(card);
    });
}

getMembers();

// ===== Grid/List View =====
const gridBtn = document.querySelector("#gridBtn");
const listBtn = document.querySelector("#listBtn");

if (gridBtn && listBtn) {

    gridBtn.addEventListener("click", () => {
        directory.classList.add("grid");
        directory.classList.remove("list");
    });

    listBtn.addEventListener("click", () => {
        directory.classList.add("list");
        directory.classList.remove("grid");
    });

}