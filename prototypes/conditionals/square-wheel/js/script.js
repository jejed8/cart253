/**
 * Title of Project
 * Author Name
 *
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let angle = 0;

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
 */
function setup() {
  createCanvas(500, 500);
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
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
