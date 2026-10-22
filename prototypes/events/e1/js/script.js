/**
 * basic tic tac toe
 * Jeremy Duverseau
 *
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
 */
function setup() {
  createCanvas(600, 600);
  background("lightgrey");
}
function drawLine(x1, y1, x2, y2) {
    push();
    stroke('black');
    strokeWeight(2);
    line(x1, y1, x2, y2);
    pop()
}

function drawSquare(x, y) {
  push();
  rectMode(CENTER);
  noStroke();
  fill("red");
  square(x, y, 100);
  pop();
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
 */
function draw() {
    drawLine(200, 600, 200, 0);
    drawLine(400, 600, 400, 0);
    drawLine(0, 200, 600, 200);
    drawLine(0, 400, 600, 400);
}

function keyPressed(event) {
  if (event.key === "x") {
    drawSquare(mouseX, mouseY);
    console.log();
  }
}
