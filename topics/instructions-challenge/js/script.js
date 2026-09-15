/**
 * Landscape
 * Jeremy and Mona
 * 
 * A house, a hill and a pine tree during the night.
 */

"use strict";

/**
 * Draws a canvas
*/
function setup() {
    createCanvas(1000, 700);

}


/**
 * Draws the landscape
*/
function draw() {
    //sky
    background("#0c0f2f");

    
    // moon
    push();
    fill("#ffffff");
    noStroke();
    ellipse(250, 140, 200, 200);
    pop();

    // crescent
    push();
    fill("#0c0f2f");
    noStroke();
    ellipse(285, 140, 150, 150);
    pop();

    //ground
    push();
    rectMode(CENTER);
    fill("#06382a");
    noStroke();
    rect(500, 700, 1000, 300);
    

    //hill 
    push();
    noStroke();
    ellipseMode(CENTER);
    //rotate(PI);
    arc(400, 550, 500, 200, HALF_PI + QUARTER_PI, TWO_PI);
    pop();

    //house
    push();
    fill("#ddd3c4")
    noStroke();
    rectMode(CENTER);
    square(650, 500, 300)
    pop();

    //door
    fill("#d468ae")
    noStroke();
    rectMode(CENTER)
    rect(600, 550, 100, 200)
    pop();

    //window
    fill("#9ad4d6")
    strokeWeight(15)
    stroke("#bf8c62")
    rectMode(CENTER);
    rect(720, 500, 75, 75)
    pop();

    //window cross
    stroke("#bf8c62")
    strokeWeight(10)
    line(682.5, 537.5, 757.5, 462.5)
    pop();

    //roof
    fill("#92357b")
    noStroke();
    triangle(450, 350, 650, 150, 850, 350);
    pop();

    //doorknob
    push();
    fill("pink");
    noStroke();
    ellipse(630, 550, 20, 20);
    pop();

    //tree trunk
    fill("#532c16")
    noStroke();
    rectMode(CENTER)
    rect(180, 500, 75, 250)
    pop();

    //tree top part
    fill("#0b5238")
    noStroke();
    triangle(50, 525, 180, 160, 320, 525);
    pop();

    //tree bottom part
    fill("#0b5238")
    noStroke();
    triangle(50, 400, 180, 160, 320, 400);
    pop();


}