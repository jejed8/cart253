/**
 * boring tic tac toe
 * Jeremy Duverseau
 *
 * Play Tic Tac Toe!!!
 */

"use strict";

/**
 * set up a grey canvas
 */
function setup() {
  createCanvas(600, 600);
  background("lightgrey");
}

/**
 * Draw the game area, the circles and squares
 */

function draw() {
  drawLine(200, 600, 200, 0);
  drawLine(400, 600, 400, 0);
  drawLine(0, 200, 600, 200);
  drawLine(0, 400, 600, 400);
}

// draw the lines that makes up the 9 cells
function drawLine(x1, y1, x2, y2) {
  push();
  stroke("black");
  strokeWeight(2);
  line(x1, y1, x2, y2);
  pop();
}

// draw a red square
function drawSquare(x, y) {
  push();
  rectMode(CENTER);
  noStroke();
  fill("red");
  square(x, y, 125);
  pop();
}

// draw a blue circle
function drawCircle(x, y) {
  push();
  stroke("blue");
  strokeWeight(5);
  noFill();
  circle(x, y, 125);
  pop();
}

// draw a shape when a key is pressed
function keyPressed(event) {
  // draw a square where the mouse is hovering if the "x" key is pressed
  if (event.key === "x") {
    drawSquare(mouseX, mouseY);
    //console.log();

    // draw a circle where the mouse is hovering if the "o" key is pressed
  } else if (event.key === "o") {
    drawCircle(mouseX, mouseY);
  }
}
