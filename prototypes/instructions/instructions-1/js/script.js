/**
 * Title of Project
 * Jeremy Duverseau
 * 
 * This project draws a pair of cherries together on a 800x800px canvas
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
    //removes the inside of the shape
    noFill();
    //colour of the stem
    stroke("#22613a");
    //thickness of the stem
    strokeWeight(15);
    //shape of the stem
    bezier(340, 450, 450, 350, 400, 300, 400, 300);
    //closes the shape
    pop();

    // right cherry stem
    push();
    //removes the inside of the shape
    noFill();
    //colour of the stem
    stroke("#22613a");
    //thickness of the stem
    strokeWeight(15);
    //shape of the stem
    bezier(460, 450, 450, 350, 400, 300, 400, 300);
    //closes the shape
    pop();


    // stem leaf
    push();
    //colour of the leaf
    fill("#22613a");
    //removes the outline of the leaf
    noStroke();
    //shape of the leaf
    square(395, 235, 70, 100, 0, 50, 0);
    //closes the shape
    pop();



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
