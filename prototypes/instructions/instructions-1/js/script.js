/**
 * Title of Project
 * Jeremy Duverseau
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * create a canvas and hide the mouse cursor
*/
function setup() {

    // Create a canvas of 800x800 px
    createCanvas(800, 800);

    //hide the cursor
    noCursor();

    //Colour the background
    background("#ffccd8");

}

// draws the cherries
function draw() {

    // left cherry
    push();
    //colour of the shape
    fill("#ab0028");
    //removes the outline
    noStroke();
    //draws and postions the shape
    ellipse(340, 500, 100, 100);
    //closes the shape
    pop();

    // right cherry
    push();
    //colour of the shape
    fill("#ab0028");
    //removes the outline
    noStroke();
    //draws and postions the shape
    ellipse(460, 500, 100, 100);
    //closes the shape
    pop();
}
