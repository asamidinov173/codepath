/*** DARK MODE ***/
const themeButton = document.querySelector("#theme-button");
themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

/*** FORM HANDLING ***/
const rsvpForm = document.querySelector("#rsvp-form");
const nameInput = document.querySelector("#Name");
const locationInput = document.querySelector("#Location");
const participantsContainer = document.querySelector(".rsvp-participants");

let count = 3; // initial RSVP count

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

/*** MODAL VARIABLES ***/
const modal = document.getElementById("success-modal");
const modalText = document.getElementById("modal-text");
const modalImage = document.getElementById("modal-image");
let intervalId;
let rotateFactor = 0;

/*** IMAGE ANIMATION ***/
const animateImage = () => {
    rotateFactor = rotateFactor === 0 ? -10 : 0;
    modalImage.style.transform = `rotate(${rotateFactor}deg)`;
};

/*** SHOW MODAL FUNCTION ***/
const toggleModal = (person) => {
    modal.style.display = "flex";
    modalText.textContent = `Thank you, ${person}! You're officially registered!`;

    modalImage.innerHTML = `<img src="https://media.giphy.com/media/111ebonMs90YLu/giphy.gif">`;

    // Start animation
    intervalId = setInterval(animateImage, 500);

    // Auto-close modal after 5 seconds
    setTimeout(() => {
        modal.style.display = "none";
        clearInterval(intervalId);
        modalImage.style.transform = "rotate(0deg)";
    }, 5000);
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
        toggleModal(nameInput.value.trim());

        for (let i = 0; i < rsvpInputs.length; i++) {
            if (rsvpInputs[i].type !== "submit" && rsvpInputs[i].tagName.toLowerCase() !== "button") {
                rsvpInputs[i].value = "";
            }
        }
    }
};

rsvpForm.addEventListener("submit", validateForm);

/*** CLOSE MODAL BUTTON ***/
const closeModalButton = document.getElementById("close-modal");
closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
    clearInterval(intervalId);
    modalImage.style.transform = "rotate(0deg)";
});

/*** REDUCE MOTION BUTTON ***/
let motionReduced = false;
const reduceMotionButton = document.getElementById("reduce-motion");

const reduceMotion = () => {
    motionReduced = !motionReduced;
    if (motionReduced) {
        clearInterval(intervalId);
        modalImage.style.transform = "rotate(0deg)";
    } else {
        intervalId = setInterval(animateImage, 500);
    }
};

reduceMotionButton.addEventListener("click", reduceMotion);