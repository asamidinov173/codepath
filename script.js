


const themeButton = document.querySelector("#theme-button");

const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode"); 
    // This section will run whenever the button is clicked
};

themeButton.addEventListener("click", toggleDarkMode);


const rsvpForm = document.querySelector("#rsvp-form");
const nameInput = document.querySelector("#Name");
const locationInput = document.querySelector("#Location");
const participantList = document.querySelector("#participant-list");

const addParticipant = (event) => {
  event.preventDefault(); 

  const name = nameInput.value.trim();
  const location = locationInput.value.trim();

  if (name === "" || location === "") {
    alert("Please enter both your name and home state!");
    return;
  }

  const newParticipant = document.createElement("li");
  newParticipant.textContent = `${name} — ${location}`;
  participantList.appendChild(newParticipant);

  nameInput.value = "";
  locationInput.value = "";
};

rsvpForm.addEventListener("submit", addParticipant);

document.addEventListener("DOMContentLoaded", () => {
    const rsvpForm = document.querySelector("#rsvp-form");
});

