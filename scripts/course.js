// Course Array
const courses = [
    {
        subject: "CSE",
        number: 110,
        title: "Introduction to Programming",
        certificate: "Web and Computer Programming",
        description: "Introduces programming concepts using problem-solving techniques and fundamental programming structures.",
        credits: 2,
        completed: true
    },
    {
        subject: "CSE",
        number: 111,
        title: "Programming with Functions",
        certificate: "Web and Computer Programming",
        description: "Builds on programming fundamentals using functions, modular programming, and structured design.",
        credits: 2,
        completed: true
    },
    {
        subject: "CSE",
        number: 210,
        title: "Programming with Classes",
        certificate: "Web and Computer Programming",
        description: "Introduces object-oriented programming concepts including classes, objects, inheritance, and polymorphism.",
        credits: 2,
        completed: true
    },
    {
        subject: "WDD",
        number: 130,
        title: "Web Fundamentals",
        certificate: "Web and Computer Programming",
        description: "Introduces HTML and CSS to create responsive, standards-based web pages.",
        credits: 2,
        completed: true
    },
    {
        subject: "WDD",
        number: 131,
        title: "Dynamic Web Fundamentals",
        certificate: "Web and Computer Programming",
        description: "Creates dynamic websites using JavaScript for interactivity, DOM manipulation, and responsive design.",
        credits: 2,
        completed: true
    },
    {
        subject: "WDD",
        number: 231,
        title: "Web Frontend Development I",
        certificate: "Web and Computer Programming",
        description: "Focuses on responsive web design, accessibility, JavaScript, APIs, and frontend development best practices.",
        credits: 2,
        completed: false
    }
];

// Select Elements
const courseContainer = document.querySelector("#courses");
const creditsDisplay = document.querySelector("#credits");

// Display Courses
function displayCourses(courseList) {
    courseContainer.innerHTML = "";

    let totalCredits = 0;

    courseList.forEach(course => {
        const card = document.createElement("div");

        card.classList.add("course");

        if (course.completed) {
            card.classList.add("completed");
        }

        card.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>
            <h4>${course.title}</h4>
            <p><strong>Certificate:</strong> ${course.certificate}</p>
            <p>${course.description}</p>
            <p><strong>Credits:</strong> ${course.credits}</p>
        `;

        courseContainer.appendChild(card);

        totalCredits += course.credits;
    });

    creditsDisplay.textContent = `The total credits for the displayed courses is ${totalCredits}.`;
}

// Initial Display
displayCourses(courses);

// Button Filters
document.querySelector("#all").addEventListener("click", () => {
    displayCourses(courses);
});

document.querySelector("#wdd").addEventListener("click", () => {
    const wddCourses = courses.filter(course => course.subject === "WDD");
    displayCourses(wddCourses);
});

document.querySelector("#cse").addEventListener("click", () => {
    const cseCourses = courses.filter(course => course.subject === "CSE");
    displayCourses(cseCourses);
});