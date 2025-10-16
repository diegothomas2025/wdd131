const hambutton = document.querySelector("#menu-hamburger");
const mainnav = document.querySelector(".navigation");

hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("show");
    hambutton.classList.toggle("show");
});

// CONTACT SECTION
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#contactForm");
    const welcomeMessage = document.getElementById("welcome-message");

    // FUNCTIONS
    function saveUserName(name) {
        localStorage.setItem("username", name);
    }

    function showWelcomeMessage(name, returning = false) {
        if (returning) {
            welcomeMessage.textContent = `👋 Welcome back, ${name}!`;     
        } else {
            welcomeMessage.textContent = `✅ Thank you, ${name}! Your message was sent successfully.`;
        }
    }

    function saveMessage(contactInfo) {
        // Load previous messages or create an empty array
        let messages = JSON.parse(localStorage.getItem("messages")) || [];

        // Add new message
        messages.push(contactInfo);

        // Save it in localStorage
        localStorage.setItem("messages", JSON.stringify(messages));
    }

    // SHOW WELCOME MESSAGE IF YOU HAVE ALREADY VISITED BEFORE
    const savedName = localStorage.getItem("username");
    if (savedName) {
        showWelcomeMessage(savedName, true);
    }

    // Handle form submition
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const purpose = document.querySelector('input[name="purpose"]:checked');

        // Validate required fields
        if (name === "" || email === "" || purpose === "") {
            alert("⚠️ Please fill in all required fields before submitting.");
            return;
        }

        // Save user name
        saveUserName(name);

        // Information Object 
        const contactInfo = {
            name,
            email,
            purpose: purpose.value,
            message,
            date: new Date().toLocaleString(),
        };

        // Save to the messages array
        saveMessage(contactInfo);

        // Show welcome message
        showWelcomeMessage(name);

        // Clean form
        form.reset();
    });
});