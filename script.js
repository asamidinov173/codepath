
const rsvpForm = document.querySelector("#rsvp-form");
const nameInput = document.querySelector("#Name");
const locationInput = document.querySelector("#Location");
const participantsContainer = document.querySelector(".rsvp-participants");

let count = 3; 

const addParticipant = (name, location) => {
  const newParticipant = document.createElement("p");
  newParticipant.textContent = `🎟️ ${name} from ${location} has RSVP'd.`;
  participantsContainer.appendChild(newParticipant);

  count += 1;
  const oldCounter = document.querySelector("#rsvp-count");
  if (oldCounter) oldCounter.remove();

  const newCounter = document.createElement("p");
  newCounter.id = "rsvp-count";
  newCounter.textContent = "⭐ " + count + " people have RSVP'd to this event!";
  participantsContainer.appendChild(newCounter);
};

const validateForm = (event) => {
  event.preventDefault();
  let containsErrors = false;

  const rsvpInputs = rsvpForm.elements;

  for (let i = 0; i < rsvpInputs.length; i++) {
    const input = rsvpInputs[i];

    if (input.type === "submit" || input.tagName.toLowerCase() === "button") continue;

    if (input.value.trim().length < 2) {
      input.classList.add("error");
      containsErrors = true;
    } else {
      input.classList.remove("error");
    }
  }

  if (!containsErrors) {
    addParticipant(nameInput.value.trim(), locationInput.value.trim());

    for (let i = 0; i < rsvpInputs.length; i++) {
      if (rsvpInputs[i].type !== "submit" && rsvpInputs[i].tagName.toLowerCase() !== "button") {
        rsvpInputs[i].value = "";
      }
    }
  }
};

rsvpForm.addEventListener("submit", validateForm);



