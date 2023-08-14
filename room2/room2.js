// ANSWERS WILL BE HERE. THEY WILL BE EXPORTED FROM A SERVER
var hitCellCoordinates = [];

for (var i = 0; i < Math.ceil(Math.random() * 20); i++) {
  let newCoord;
  do {
    newCoord = {
      row: Math.ceil(Math.random() * 9),
      col: Math.ceil(Math.random() * 9),
    };
  } while (
    hitCellCoordinates.some(
      (coord) => coord.row === newCoord.row && coord.col === newCoord.col
    )
  );

  hitCellCoordinates.push(newCoord);
}

var rng = hitCellCoordinates.length;

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
  if (userInput != rng) {
    alert("Wrong!");
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
  alert("Hover over the grass SLOWLY!");
});

// ACTUAL QUESTION
const screenElement = document.querySelector(".screen");
const numRows = 10;
const numCols = 10;

for (let row = 0; row < numRows; row++) {
  for (let col = 0; col < numCols; col++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    const isHit = hitCellCoordinates.some(
      (coord) => coord.row === row && coord.col === col
    );

    cell.addEventListener("mouseover", () => {
      if (isHit) {
        cell.classList.add("ship");
      }
    });

    screenElement.appendChild(cell);
  }
}
