/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let fiveSec = {
    color: {
        off: "white",
        on: "yellow"
    },
    x: 100,
    delay: 5000
}

let tenSec = {
    color: {
        off: "white",
        on: "pink"
    },
    x: 300,
    delay: 10000
}

let thirthySec = {
    color: {
        off: "white",
        on: "cyan"
    },
    x: 500,
    delay: 30000
}

let sixtySec = {
    color: {
        off: "white",
        on: "purple"
    },
    x: 700,
    delay: 60000
}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(800, 600);
    background('lightgrey');

    setInterval(pulseFiveLight, fiveSec.delay);
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
    fill(square.color.off);
    rect(square.x, 300, 100);
    pop();
}

function pulseFiveLight() {

}