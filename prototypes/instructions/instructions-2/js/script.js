/**
 * Title of Project
 * Author Name
 *
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * Create a 600x600 pixel grey canvas
 */
function setup() {
  //create a canvas of 500x500px
  createCanvas(600, 600);

  //color of the canvas
  background("grey");
}

//sets a base value for the scale to iterate upon
let scaleValue = 0.05;

/**
 * draws the heart loop
 */
function draw() {
  push();

  //centers and scales the heart shape
  translate(300, 300);
  scale(scaleValue);
  translate(-300, -300);

  // changes the colour of the heart
  fill(0, 0, 200);

  //removes the outline of the shape
  noStroke();

  /*
  * Draws the heart shape
  * credits : https://www.youtube.com/watch?v=EqoykdvW7eE
  */
  triangle(300, 300, 100, 300, 300, 100);
  triangle(300, 300, 100, 300, 300, 500);
  triangle(300, 300, 500, 300, 300, 100);
  triangle(300, 300, 500, 300, 300, 500);
  circle(200, 200, Math.sqrt(200 * 200 + 200 * 200));
  circle(400, 200, Math.sqrt(200 * 200 + 200 * 200));

  // closes the shape  
  pop();

  // creates a loop that grows the scale of each heart until it reaches 3
  if (scaleValue < 1) {
    scaleValue += 0.05;
  }
}
