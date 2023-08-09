const userInputButton = document.querySelector(".user-input-button");

userInputButton.addEventListener("click", () => {
  const userInput = prompt("Enter your input:");
  if (userInput !== null) {
    alert(You entered: ${userInput});
  }
});


// Select the hint button
const hintButton = document.querySelector(".hint-button");

// Add a click event listener to the hint button
hintButton.addEventListener("click", () => {
  // Display an alert with the hint message
  alert("Here's a helpful hint!");
});
