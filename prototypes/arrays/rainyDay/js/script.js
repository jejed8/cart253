/**
 * Rainy Day
 * Jeremy Duverseau
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

// create the canvas
function setup() {
    createCanvas(600, 600);

}


// draw the scene
function draw() {
    background('#98c9e5');

    raindrop(100, 100, 5);
}


// draw a raindrop
function raindrop(x, y, size) {
  push();
  translate(x, y);
  scale(size / 10);

  colorMode(HSB)
  fill(208, 100, 100);
  noStroke();

  beginShape();
  vertex(0, -30);
  bezierVertex(-20, 0, -20, 30, 0, 30);
  bezierVertex(20, 30, 20, 0, 0, -30);
  endShape(CLOSE);

  pop();
}