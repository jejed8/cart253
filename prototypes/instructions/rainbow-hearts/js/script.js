/**
 * Rainbow Hearts
 * Jeremy Duverseau
 *
 * A nice illusion of hearts making a rainbow
 * 
 * thank you to my dad for helping a little with loops
 */

"use strict";

/*
 * Create a 600x600 pixel grey canvas
*/
function setup() {
  //create a canvas of 500x500px
  createCanvas(600, 600);

  //color of the canvas
  background("grey");


  //changes the color mode of the drawing to use hsl profile instead
  colorMode(HSL, 360, 100, 100)

}

//sets a base value for the scale to iterate upon
let scaleValue = 3;

// sets the base value of the hue to 0
let hueValue = 0;

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
  fill(hueValue, 100, 50);

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

  // creates a loop that decreases the scale of each heart until it reaches 0.05
  if (scaleValue > 0.05) {
    scaleValue -= 0.05;
  }

  //sets the hue value to make jumps of 25 every iteration
  hueValue += 25;
  
  //resets the hue value to 0 when it surpasses 360
  if (hueValue >= 360) {
    hueValue = 0;
  }
}
