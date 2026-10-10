/**
 * Square Wheel
 * Jeremy Duverseau
 *
 * Make the square wheel turn either left or right by pointing on both side of the screen.
 */

"use strict";

let angle = 0;

/**
 * Create the canvas
*/
function setup() {
  createCanvas(500, 500);
}

/**
 * Check if the mouse is on the left or right side of the screen
 * Change the direction of the angle
 * draw the square wheel
 */
function draw() {
  background("#6b93b6");
  // decide which direction to rotate
  if (mouseX < width / 2) {
    angle -= 0.05; // rotate left
  } else {
    angle += 0.05; // rotate right
  }

  // draw square from its center
  push();
  translate(width / 2, height / 2);
  rotate(angle);
  rectMode(CENTER);
  square(0, 0, 100);
  pop();
}
