

// Step 1: Select the theme button
const themeButton = document.querySelector("#theme-button");
// Step 2: Write the callback function
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode"); 
    // This section will run whenever the button is clicked
};

themeButton.addEventListener("click", toggleDarkMode);

// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function
