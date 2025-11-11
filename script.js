

const themeButton = document.querySelector("#theme-button");
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
};
themeButton.addEventListener("click", toggleDarkMode);

// RSVP Form Handling
const rsvpForm = document.querySelector("#rsvp-form");
const nameInput = document.querySelector("#Name");
const locationInput = document.querySelector("#Location");
const participantsContainer = document.querySelector(".rsvp-participants"); // holds <p> RSVPs
let count = 3; // starting count

const addParticipant = (event) => {
    event.preventDefault(); // prevent page reload

    const name = nameInput.value.trim();
    const location = locationInput.value.trim();

    if (name === "" || location === "") {
        alert("Please enter both your name and home state!");
        return;
    }

    // Step 1: Add new participant
    const newParticipant = document.createElement("p");
    newParticipant.textContent = `🎟️ ${name} from ${location} has RSVP'd.`;
    participantsContainer.appendChild(newParticipant);

    nameInput.value = "";
    locationInput.value = "";

    const oldCounter = document.querySelector("#rsvp-count");
    if (oldCounter) {
        oldCounter.remove(); 
    }

    count = count + 1;

    const newCounter = document.createElement("p");
    newCounter.id = "rsvp-count";
    newCounter.textContent = "⭐ " + count + " people have RSVP'd to this event!";
    participantsContainer.appendChild(newCounter);
};


rsvpForm.addEventListener("submit", addParticipant);

