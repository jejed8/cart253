/**
 * Fix the wiring
 *  Jeremy Duverseay
 *
 * A color-matching game where the player connects
 * male and female squares of the same color.
 * Each side has one square of each color, arranged randomly.
 */

"use strict";

let outlets = [];
let level = 1;

function setup() {
  createCanvas(800, 800);
  generateOutlets();
}

function draw() {


}

// function drawOutlet(x, y, size, color) {
//   push();
//   colorMode(HSB);
//   fill(color, 100, 100);
//   noStroke();
//   ellipse(x, y, size);
//   pop();
// }


// generate a pair of color matching outlet and push it into the outlet array
function generateOutlets() {
  outlets = [];

  for (let i = 0; i < level; i++) {
    let hue = (i * 137.5) % 360;

    outlets.push({
      side: "left",
      color: hue,
      size: 50,
    });

    outlets.push({
      side: "right",
      color: hue,
      size: 50,
    });
  }
}