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
    currentColor: "white",
    x: 100,
    delay: 5000
};

let tenSec = {
    color: {
        off: "white",
        on: "pink"
    },
        currentColor: "white",
    x: 300,
    delay: 10000
}

let thirthySec = {
    color: {
        off: "white",
        on: "cyan"
    },
        currentColor: "white",
    x: 500,
    delay: 30000
}

let sixtySec = {
    color: {
        off: "white",
        on: "purple"
    },
        currentColor: "white",
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
    setInterval(pulseTenLight, tenSec.delay);
    setInterval(pulseThirthyLight, thirthySec.delay);
    setInterval(pulseSixtyLight, sixtySec.delay);
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


function pulseFiveLight() {
    fiveSec.currentColor = fiveSec.color.on;

    setTimeout(function() {
        fiveSec.currentColor = fiveSec.color.off;
    }, 300);
}

function pulseTenLight() {
    tenSec.currentColor = tenSec.color.on;

    setTimeout(function() {
        tenSec.currentColor = tenSec.color.off;
    }, 300);
}

function pulseThirthyLight() {
    thirthySec.currentColor = thirthySec.color.on;

    setTimeout(function() {
        thirthySec.currentColor = thirthySec.color.off;
    }, 300);
}

function pulseSixtyLight() {
    sixtySec.currentColor = sixtySec.color.on;

    setTimeout(function() {
        sixtySec.currentColor = sixtySec.color.off;
    }, 300);
}

function drawSquare(square) {
    push();
    rectMode(CENTER);
    noStroke();
    fill(square.currentColor);
    rect(square.x, 300, 100, 100);
    pop();
}