/**
 * Title of Project
 * Author Name
 *
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * Set the canva size and colour
 */

function setup() {
  // Create a 500x500px canvas
  createCanvas(500, 500);

  //changes the colour of the canvas
  background('#a7cfdb');
}

/**
 * Draw a Coin
 */

function draw() {

  // Coin
  push();

  //set the colour of the coin
  fill("#FAB805");

  //set the colour of the outline
  stroke("#E09D0D");

  //set the thickness of the outline
  strokeWeight(15);

  //draw and position the coin
  circle(250, 250, 200);

  //close shape
  pop();



  // coin text
  push();

  //set text font
  textFont('Comic Sans Ms')

  //set text size
  textSize(100);

  //allign text
  textAlign('center', 'center');

  //set text colour
  fill("#E09D0D");

  //set text and position
  text("$", 253, 242);

  //close shape
  pop();


  // coin shadow
  push();

  // set colour of the shadow
  fill('#6261611c');

  noStroke();

  //set shape and postion of the shadow
  ellipse(250, 400, 180, 25);
  
  pop();

}
