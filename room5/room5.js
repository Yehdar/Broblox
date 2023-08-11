// ANSWERS WILL BE HERE. THEY WILL BE EXPORTED FROM A SERVER
var rng = Math.ceil(Math.random() * 5);
// EVERYTHING ABOVE WILL BE TRANSFERRED TO SERVER FILE LATERRRRRRRRR

// eyeballs
document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const anchor = document.getElementById("anchor");
  const rekt = anchor.getBoundingClientRect();
  const anchorX = rekt.left + rekt.width / 2;
  const anchorY = rekt.top + rekt.height / 2;

  const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

  const eyes = document.querySelectorAll(".eye");
  eyes.forEach((eye) => {
    eye.style.transform = `rotate(${90 + angleDeg}deg)`;
  });
});

function angle(cx, cy, ex, ey) {
  const dy = ey - cy;
  const dx = ex - cx;
  const rad = Math.atan2(dy, dx);
  const deg = (rad * 180) / Math.PI;
  return deg;
}

// answer and light button
const userInputButton = document.querySelector(".user-input-button");
userInputButton.addEventListener("click", () => {
  const userInput = prompt("Enter your input:");
 
  if (userInput != "Batman") {
    
    alert("Wrong!"  );
    document.getElementById("lightbox").style.backgroundColor = "red";
  } else {
    alert("Correct!");
    document.getElementById("lightbox").style.backgroundColor = "green";
    document.getElementById("arrow").style.display = "block";
  }
});

// hint button
const hintButton = document.querySelector(".hint-button");
hintButton.addEventListener("click", () => {
  alert("I am the shadows..");
});
