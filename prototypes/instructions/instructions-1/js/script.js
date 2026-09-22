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
    

    //reference points for drawing the stems
    push();
    //colour of the points
    stroke("blue");
    //size of the points
    strokeWeight(15);

    //point for left cherry
    point(340, 450);

    //point for right cherry
    point(460, 450);

    //middle point
    point(400, 300);

    pop();



    // left cherry stem
    push();
    //colour of the stem
    stroke("#22613a");
    //thickness of the stem
    strokeWeight(3);
    //



}
