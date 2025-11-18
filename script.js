const themeButton = document.querySelector("#theme-button");

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});


/*** FORM HANDLING ***/
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


/*** FORM VALIDATION ***/
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

    // SHOW MODAL
    toggleModal(nameInput.value.trim());

    // Clear inputs
    for (let i = 0; i < rsvpInputs.length; i++) {
      if (rsvpInputs[i].type !== "submit" && rsvpInputs[i].tagName.toLowerCase() !== "button") {
        rsvpInputs[i].value = "";
      }
    }
  }
};

rsvpForm.addEventListener("submit", validateForm);


/*** MODAL ***/
const toggleModal = (person) => {
  const modal = document.getElementById("success-modal");
  const modalText = document.getElementById("modal-text");
  const modalImage = document.getElementById("modal-image");

  modal.style.display = "flex";

  modalText.textContent = `Thank you, ${person}! Your RSVP has been received.`;

  modalImage.innerHTML = `
    <img src="https://media.giphy.com/media/111ebonMs90YLu/giphy.gif"
      style="width:150px; border-radius:10px;">
  `;

  let position = 0;
  const interval = setInterval(() => {
    position = position === 0 ? 10 : 0;
    modalImage.style.transform = `translateX(${position}px)`;
  }, 200);

  setTimeout(() => {
    modal.style.display = "none";
    clearInterval(interval);
    modalImage.style.transform = "translateX(0px)";
  }, 5000);
};

modal.style.display = "flex";

setTimeout(() => {
    modal.style.display = "none";
}, 5000);