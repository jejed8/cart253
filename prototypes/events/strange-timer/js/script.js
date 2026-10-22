/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let fiveSec = {
    color: "white",
    x: 100
}

let tenSec = {
    color: "white",
    x: 300
}

let thirthySec = {
    color: "white",
    x: 500
}

let sixtySec = {
    color: "white",
    x: 700
}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(800, 600);
    background('lightgrey');
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    drawSquare(fiveSec);
    drawSquare(tenSec);
    drawSquare(thirthySec);
    drawSquare(sixtySec);
}

function drawSquare(square) {
    push();
    rectMode(CENTER);
    noStroke();
    fill(square.color);
    rect(square.x, 300, 100);
    pop();
}