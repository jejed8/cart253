/**
 * Fix the wiring
 *  Jeremy Duverseay
 *
 * A color-matching game where the player connects
 * male and female squares of the same color.
 * Each side has one square of each color, arranged randomly.
 */

"use strict";

// stores the currently selected male square and its matching female square
let selectedMale = null;
let connectedFemale = null;


// stores the positions and colors of the male squares in array
let male = [
  { x: 0, y: 100, color: undefined },
  { x: 0, y: 300, color: undefined },
  { x: 0, y: 500, color: undefined },
];

// stores the positions and colors of the female squares in array
let female = [
  { x: 550, y: 100, color: undefined },
  { x: 550, y: 300, color: undefined },
  { x: 550, y: 500, color: undefined },
];

// The three possible colors for the squares
let colors = ["yellow", "purple", "green"];

/**
 * Creates the canvas and randomly assigns colors to the squares.
 * Each side receives all three colors in a random order.
*/
function setup() {
  createCanvas(600, 600);

 // Shuffle copies of the color array to give each side a random order
  let maleColors = shuffle([...colors]);
  let femaleColors = shuffle([...colors]);

  // assign one unique color to each male square
  for (let i = 0; i < male.length; i++) {
    male[i].color = maleColors[i];
  }

  // assign one unique color to each female square
  for (let i = 0; i < female.length; i++) {
    female[i].color = femaleColors[i];
  }
}

/**
 * Draws both sets of squares and the completed connection, if any.
*/

function draw() {
  push();
  noStroke();

  // draw the male squares
  for (let i = 0; i < male.length; i++) {
    fill(male[i].color);
    rect(male[i].x, male[i].y, 50, 50);
  }

  // draw the female squares
  for (let i = 0; i < female.length; i++) {
    fill(female[i].color);
    rect(female[i].x, female[i].y, 50, 50);
  }

  pop();

  push();
  strokeWeight(5);
  // draw the connection line only if the colors match
  if (selectedMale !== null && connectedFemale !== null) {
    stroke(selectedMale.color);

    // connect the centers of the two squares
    line(
      selectedMale.x + 25,
      selectedMale.y + 25,
      connectedFemale.x + 25,
      connectedFemale.y + 25,
    );
  }
  pop();
}
// checks which square is clicked and connects matching colors if not, it does not connect
function mousePressed() {
  // check if a male square was clicked
  for (let i = 0; i < male.length; i++) {
    if (
      mouseX >= male[i].x &&
      mouseX <= male[i].x + 50 &&
      mouseY >= male[i].y &&
      mouseY <= male[i].y + 50
    ) {
      selectedMale = male[i];
      connectedFemale = null;
      return;
    }
  }

  // check if a female square was clicked
  for (let i = 0; i < female.length; i++) {
    if (
      mouseX >= female[i].x &&
      mouseX <= female[i].x + 50 &&
      mouseY >= female[i].y &&
      mouseY <= female[i].y + 50
    ) {
        // only compare colors if a male square has already been selected
      if (selectedMale !== null) {
        if (selectedMale.color === female[i].color) {
          connectedFemale = female[i];
        } else {
            // clear the selection and connection if the colors differ
          selectedMale = null;
          connectedFemale = null;
        }
      }

      return;
    }
  }
}
