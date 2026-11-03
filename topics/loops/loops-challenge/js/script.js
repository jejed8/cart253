/**
 * Lines
 * Pippin Barr
 * 
 * A series of lines across the canvas
 */

"use strict";

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 500);
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {
    background("pink");
    
    // stroke(0);
    // line(0, 0, 0, height);
    
    // stroke(25);
    // line(50, 0, 50, height);
    
    // stroke(50);
    // line(100, 0, 100, height);
    
    // stroke(75);
    // line(150, 0, 150, height);
    
    // stroke(100);
    // line(200, 0, 200, height);
    
    // stroke(125);
    // line(250, 0, 250, height);
    
    // stroke(150);
    // line(300, 0, 300, height);
    
    // stroke(175);
    // line(350, 0, 350, height);
    
    // stroke(200);
    // line(400, 0, 400, height);
    
    // stroke(225);
    // line(450, 0, 450, height);
    
    // stroke(250);
    // line(500, 0, 500, height);

    for (let x = 0; x <= width; x += 25) {
      for (let y = 0; y <= height; y += 25) {
      push();
      colorMode(HSB);
      strokeWeight(random(1,15));
      stroke(map(mouseX, 0, width, 0, 360), 100, random(20, 100));

      line(x, 0, x, width);
      line(0, y, width, y);
      pop();
      }
    
  }

    let x = 0;
    let y = 0;
  
  while (x <= width) {
    x += 50;

    line(x, 0, x, width);
  }

  while (y <= height) {
    y += 50;

    line(0, y, width, y);
  }

}