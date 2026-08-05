// events.js

document.addEventListener("DOMContentLoaded", () => {
    const eventsContainer = document.querySelector("#events-container");

    // Upcoming Drift Events
    const events = [
        {
            title: "Drift Championship Round 1",
            date: "March 15, 2027",
            location: "Lagos International Raceway, Nigeria",
            image: "images/drift-competition-round1.jpg",
            description: "Experience the excitement as the season begins with the country's best drift drivers competing for championship points."
        },
        {
            title: "Night Drift Festival",
            date: "April 10, 2027",
            location: "Abuja Speed Arena",
            image: "images/night-driftfestival.jpg",
            description: "A spectacular night event featuring professional drifting, music, entertainment, and food vendors."
        },
        {
            title: "Drift Skills Workshop",
            date: "May 8, 2027",
            location: "Port Harcourt Motorsport Park",
            image: "images/drift-workshop.jpg",
            description: "Learn drifting techniques from experienced instructors in a safe and controlled environment."
        },
        {
            title: "Pro-Am Drift Challenge",
            date: "June 19, 2027",
            location: "Ibadan Racing Circuit",
            image: "images/pro-am-drift-challenge.jpg",
            description: "Professional and amateur drivers compete together in an action-packed drift competition."
        },
        {
            title: "Summer Drift Festival",
            date: "July 24, 2027",
            location: "Enugu Motorsport Arena",
            image: "images/summer-drift-festival.jpg",
            description: "An exciting festival featuring drift competitions, exhibitions, live music, and family-friendly activities."
        },
        {
            title: "National Drift Finals",
            date: "September 18, 2027",
            location: "National Racing Complex, Lagos",
            image: "images/drift-final.jpg",
            description: "The season concludes with Nigeria's top drift drivers battling for the National Drift Championship title."
        }

            ];

    function displayEvents(eventList) {
        if (!eventsContainer) return;

        eventsContainer.innerHTML = "";

        eventList.forEach(event => {
            const card = document.createElement("section");
            card.classList.add("event-card");

            card.innerHTML = `
                <img src="${event.image}" alt="${event.title}" loading="lazy" width="400" height="250">
                <div class="event-info">
                    <h2>${event.title}</h2>
                    <p><strong>Date:</strong> ${event.date}</p>
                    <p><strong>Location:</strong> ${event.location}</p>
                    <p>${event.description}</p>
                </div>
            `;

            eventsContainer.appendChild(card);
        });
    }

    displayEvents(events);
});